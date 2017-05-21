+++
title = "처음 시작하기"
type = "page"
[menu.main]
identifier = "gettingstarted"
weight = 1

+++

## CurrentWriter의 기본 사용법

CurrentWriter는 여러 개의 [이벤트](/post/event) 노드와, [핸들러](/post/handler)
노드들을 화면 상에 배치하고, 연결하여 사용합니다. 다음은 몇 가지 기본 기능입니다.

#### 노드/커넥션 추가
![에디터 화면에 노드를 추가하는 이미지](/images/create.gif)
빈 공간에 오른쪽 클릭하고, 에디터 화면에 노드를 추가합니다

 ![노드의 파라미터를 바꾸는 이미지](/images/parameter.gif)
 각 노드의 파라미터를 키보드를 통해 편집할 수 있습니다. 각 파라미터의 상세한 의미는 문서를 참조해주세요

 ![노드를 움직이는 이미지](/images/move.gif)
 노드의 빈 공간에 마우스 왼쪽 드래그를 해서 노드를 움직일 수 있습니다.

 ![노드를 삭제하는 이미지](/images/delete.gif)
 각 노드나 Connection에 오른쪽 클릭을 하면 삭제하는 메뉴에 접근할 수 있습니다.

#### Connection으로 핸들러 간 흐름 조작
![노드간 커넥션을 추가하는 이미지](/images/connect.gif)
한 노드의 시작/끝을 클릭하고, 다른 노드의 끝/시작을 클릭하여 Connection을 추가합니다.
이 때 자기 자신과도 Connection을 만들 수 있습니다.

* 이벤트의 끝에 핸들러의 시작을 연결한다면, 해당 이벤트가 발생하면 무조건 연결된 핸들러를 실행한다는 것을 의미합니다.

* 핸들러A의 끝과 핸들러B의 시작 사이에 아무 Condition도 없는 Connection이 있다면(기본값), 핸들러A가 끝난 후 바로 핸들러 B를 실행한다는 의미입니다.

* 시작지점에 아무 것도 연결되지 않은 핸들러는 실행되지 않습니다.

 ![컨디션을 추가하는 이미지](/images/addcondition.gif)
 각 Connection에 오른쪽 클릭을 하면 Condition을 추가하는 메뉴에 접근할 수 있습니다.
 추가할 수 있는 Condition은 현재 화면에 정의된 이벤트 중에서만 선택할 수 있습니다.

 * 핸들러A의 끝과 핸들러B의 시작 사이에 ConditionA가 있는 Connection이 있다면, 핸들러A
 실행 중 ConditionA가 만족되었을 경우 핸들러 B를 새로 실행한다는 의미입니다. 이 때
 "stop previous on transition"이 꺼져있었다면(기본값 꺼짐) 핸들러 A는 계속 실행됩니다.


 ![Stop을 추가하는 이미지](/images/stopprev.gif)
 각 Connection에 오른쪽 클릭을 하면 "Stop previous on transition"을 켜고 끌 수 있는
 메뉴에 접근할 수 있습니다.

 * 핸들러A로부터 B로 이어지는 Connection에 이 옵션이 켜져 있을 경우, 해당 Connection에
 설정된 Condition에 의해 새로운 핸들러B를 시작할 때, A를 중지시킨다는 의미입니다.

 * 이런 식으로 A가 중지될 때, A로부터 이어지는, 같은 Condition을 가지는 다른 Connection이
 있을 경우, 그 Connection은 유효하게 작동합니다.

 * A가 이 옵션에 의해서 중지되었을 경우, A로부터 이어지는 아무 Condition도 없는 Connection은
 무시됩니다.

 * 이 값은 Condition이 있는 Connection에 대해서만 유효하게 동작합니다.

#### Group을 만들어 여러 핸들러를 하나처럼 생각하기
 ![Group을 추가하는 이미지](/images/group.gif)
여러 핸들러를 선택하고, 선택된 노드 중 하나에 오른쪽 클릭을 하면 그룹화 메뉴에 접근할 수
있습니다.

* Group된 핸들러는 하나의 핸들러처럼 행동합니다.(예 : stop previous on transition에 의해
  중지될 때 Group 내부 진행 상황과는 상관 없이 Group이 한 번에 중지됩니다.)

* Group은 아무 Condition이 없는 Connection으로 직선 형태로 연결된 핸들러들로만 만들 수
있습니다.(조건이 만족되지 않을 시 메뉴 비활성화)

* Group에 오른쪽 클릭해 Degroup메뉴에 접근할 수 있습니다.

* 한 번 Group된 노드들 내부의 연결은 Degroup하기 전까지는 바꿀 수 없습니다. 파라미터는
수정 가능합니다.

#### 그 외...

마우스 횔을 클릭하고 드래그하여 편집창이 보여주는 화면 자체를 움직일 수 있습니다. 넓은
그래프를 탐색할 때 사용하세요.

#### 프로그래밍에 사용한 예시

[구체적인 사용 예시 보기](/post/examples)
