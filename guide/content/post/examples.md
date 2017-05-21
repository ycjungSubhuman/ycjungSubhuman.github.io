+++
title = "예시"
type = "page"
[menu.main]
identifier = "examples"
weight = 1
parent = "gettingstarted"
+++

## 예시

CurrentWriter의 사용 예시들을 소개합니다.

#### 왼쪽/오른쪽 움직이기
![Move Left and Right](/images/example_move.PNG)

왼쪽 화살표를 누르는 동안 player 게임오브젝트가 왼쪽으로 0.50의 속력으로 꾸준히 움직입니다.
오른쪽 화살표를 누르는 동안 오른쪽으로 0.50의 속력으로 꾸준히 움직입니다.

#### 그룹 활용 예시
![Group Example1](/images/example_group.png)
A 키를 누르는 동안 0.1초 간격으로 bullet1을 player 밑에 생성합니다.

#### 클립 활용 예시
![Clip Example1](/images/example_clip.png)
Scene이 처음 초기화 되었을 때, demo_bass_1 클립을 재생하기 시작합니다. 이 클립의 재생이
끝나면 다시 처음부터 재생합니다. 만약 이 클립의 재생이 끝났을 때, TriggeredEvent1이
만족되었다면, demo_bass_1의 재생을 중지하고 demo_bass_2의 재생을 시작합니다.

#### Wait 활용 예시
![Wait Example1](/images/example_wait.png)
Scene이 처음 초기화 된 이후 1회에 한해서, v키가 눌렸을 때 player 게임 오브젝트를
오른쪽으로 0.1만큼 부드럽게 움직입니다.
