+++
title = "AbsInterpolateScale"
type = "page"
[menu.main]
identifier = "absinterpolatescale"
weight = 2
parent = "handler"
+++

Goal까지 Target의 localScale을 Time초 동안 Curve를 따라 조절합니다.

#### 파라미터
* Target : 움직일 GameObject의 이름(Hierarchy 창에서 확인 가능한 그것)
* Curve : EaseIn, EaseOut 중 하나(EaseIn은 서서히 빠르게, EaseOut은 서서히 느리게)
* Goal : 목표로 하는 localScale값
* Time : 초단위.
