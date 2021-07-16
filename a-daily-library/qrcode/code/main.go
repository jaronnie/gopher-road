package main

import (
	"errors"
	"fmt"
	"image"
	"image/draw"
	"image/png"
	"os"
	"path"

	"github.com/nfnt/resize"
	"github.com/skip2/go-qrcode"
)

var err error

func main() {
	var (
		bgFile    *os.File
		bgImg     image.Image
		qrCodeImg image.Image
		offset    image.Point
	)
	// 01: 打开背景图片
	bgFile, err = os.Open("./bg.png")
	if err != nil {
		fmt.Println("打开背景图片失败", err)
		return
	}
	defer bgFile.Close()
	// 02: 编码为图片格式
	bgImg, err = png.Decode(bgFile)
	if err != nil {
		fmt.Println("背景图片编码失败:", err)
		return
	}
	// 03: 生成二维码
	qrCodeImg, err = createAvatar()
	if err != nil {
		fmt.Println("生成二维码失败:", err)
		return
	}
	offset = image.Pt(142, 150)
	b := bgImg.Bounds()
	m := image.NewRGBA(b)
	draw.Draw(m, b, bgImg, image.Point{X: 0, Y: 0}, draw.Src)
	draw.Draw(m, qrCodeImg.Bounds().Add(offset), qrCodeImg, image.Point{X: 0, Y: 0}, draw.Over)
	// 上传至oss时这段要改
	i, _ := os.Create(path.Base("a2.png"))
	_ = png.Encode(i, m)
	defer i.Close()
}

func createAvatar() (image.Image, error) {
	var (
		bgImg      image.Image
		offset     image.Point
		avatarFile *os.File
		avatarImg  image.Image
	)
	bgImg, err = createQrCode("http://blog.gocloudcoder.com/%e8%ae%a9putty%e6%88%90%e4%b8%ba%e4%bd%a0%e7%9a%84%e7%94%9f%e4%ba%a7%e5%8a%9b/")
	if err != nil {
		fmt.Println("创建二维码失败:", err)
		return nil, errors.New("创建二维码失败")
	}
	avatarFile, err = os.Open("./avatar.png")
	avatarImg, err = png.Decode(avatarFile)
	avatarImg = ImageResize(avatarImg, 90, 90)
	b := bgImg.Bounds()
	// 设置为居中
	offset = image.Pt((b.Max.X-avatarImg.Bounds().Max.X)/2, (b.Max.Y-avatarImg.Bounds().Max.Y)/2)
	m := image.NewRGBA(b)
	draw.Draw(m, b, bgImg, image.Point{X: 0, Y: 0}, draw.Src)
	draw.Draw(m, avatarImg.Bounds().Add(offset), avatarImg, image.Point{X: 0, Y: 0}, draw.Over)
	return m, err
}
func createQrCode(content string) (img image.Image, err error) {
	var qrCode *qrcode.QRCode
	qrCode, err = qrcode.New(content, qrcode.Highest)
	if err != nil {
		return nil, errors.New("创建二维码失败")
	}
	qrCode.DisableBorder = true
	img = qrCode.Image(300)
	return img, nil
}
func ImageResize(src image.Image, w, h int) image.Image {
	return resize.Resize(uint(w), uint(h), src, resize.Lanczos3)
}
