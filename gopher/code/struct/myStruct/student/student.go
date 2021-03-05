package student

type Student struct {


	name string
	score float32
}

func (s *Student) SetName(name string) {

	s.name = name
} 

func (s *Student) GetName() string {

	return s.name
}

func (s *Student) SetScore(score float32) {

	s.score = score
}

func (s *Student) GetScore() float32 {

	return s.score
}
