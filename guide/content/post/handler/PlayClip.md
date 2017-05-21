+++
title = "PlayClip"
type = "page"
[menu.main]
identifier = "playclip"
weight = 2
parent = "handler"
+++

ClipName의 이름을 가지는 clip을 재생합니다. 이 핸들러는 clip이 재생되는 동안 유지됩니다.
반대로 이 핸들러가 어떤 이유에서 중지되면, 이 핸들러에 의해 재생되던 clip도 재생중지됩니다.

#### 파라미터
* ClipName : 재생할 clip의 이름. root파일에 명시되어 있다.(피실험자는 root파일에 대해서 신경 쓰지 않아도 된다.)
* Loop : true, false 중 하나의 값. true일 경우 이 핸들러는 무한정 지속되며, clip도 무한정
반복된다.
