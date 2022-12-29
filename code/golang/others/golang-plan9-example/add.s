TEXT ·add(SB), $0-24
    MOVQ arg1+0(FP), CX
    MOVQ arg2+8(FP), BP
    ADDQ CX, BP
    MOVQ BP, result+16(FP)
    RET
