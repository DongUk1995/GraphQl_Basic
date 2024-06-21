1. 이 프로젝트를 만드는 목적

- 기초공부
- 내가 리모콘을 만드는 것 -> api를 만드는 건데 api는 인터 페이스 잖아 그럼 내가 만들면 뭐 영화 등 데이터가 있는 api가 만들어 질 것이고 이 api가 사용자가 필요하면 나의 api를 가지고 사용 하는 것이다. 그러므로 내가 만든 api는 리모콘이고 나는 리모콘 안에 버튼들을 만들어 필요한 사용자에게 데이터를 제공한다. 그리고 그것을 표현 할 수 있는 것이 아폴로 서버라는 것이다.

2.  root에 대해

- 아폴로 사용자 요청 : {alltweets {id, text, author {fullname}}}으로 호출했음
  1. alltweets는 tweets를 리턴하는데 tweetssms id, text, userId가 있지만 author 없고 Fullname도 없음
  2. 그 후 아폴로는 resolvers에 author를 찾아 유저아이디로 id와 같은 것을 출력하여

  3. resolvers에 유저안에 fullname을 찾을거고 fullname을 호출할 것이다.
