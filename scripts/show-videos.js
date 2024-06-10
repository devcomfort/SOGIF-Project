const video_urls = [
  "./videos/1.mp4",
  "./videos/2.mp4",
  "./videos/3.mp4",
  "./videos/4.mp4",
  "./videos/5.mp4",
];

const titles = ["초급-1", "초급-2", "초급-3", "초급-4", "초급-5"];

const video_descriptions = [
  "벤치 프레스는 웨이트 트레이닝을 해본 적이 없는 사람들도 알고 있는 경우가 많을 정도로 가장 널리 알려진 운동으로서, 대흉근과 삼두근을 위주로 가슴 부근의 상체 근육들을 종합적으로 강화하기 위한 최고의 운동이다.웨이트 트레이닝 3대 운동 중 하나답게 운동 효과가 매우 뛰어나다. 대흉근이란 이름이 붙을 만큼 거대한 가슴 근육 발달에 있어 벤치 프레스만한 운동이 없으며 가슴뿐만 아니라 어깨, 삼두 등 상체 근육 전반을 그 어떤 운동보다도 고중량으로 소화해낼 수 있는 상체 운동의 최고봉인 운동이다.",
  "벤치 프레스는 웨이트 트레이닝을 해본 적이 없는 사람들도 알고 있는 경우가 많을 정도로 가장 널리 알려진 운동으로서, 대흉근과 삼두근을 위주로 가슴 부근의 상체 근육들을 종합적으로 강화하기 위한 최고의 운동이다.웨이트 트레이닝 3대 운동 중 하나답게 운동 효과가 매우 뛰어나다. 대흉근이란 이름이 붙을 만큼 거대한 가슴 근육 발달에 있어 벤치 프레스만한 운동이 없으며 가슴뿐만 아니라 어깨, 삼두 등 상체 근육 전반을 그 어떤 운동보다도 고중량으로 소화해낼 수 있는 상체 운동의 최고봉인 운동이다.",
  "벤치 프레스는 웨이트 트레이닝을 해본 적이 없는 사람들도 알고 있는 경우가 많을 정도로 가장 널리 알려진 운동으로서, 대흉근과 삼두근을 위주로 가슴 부근의 상체 근육들을 종합적으로 강화하기 위한 최고의 운동이다.웨이트 트레이닝 3대 운동 중 하나답게 운동 효과가 매우 뛰어나다. 대흉근이란 이름이 붙을 만큼 거대한 가슴 근육 발달에 있어 벤치 프레스만한 운동이 없으며 가슴뿐만 아니라 어깨, 삼두 등 상체 근육 전반을 그 어떤 운동보다도 고중량으로 소화해낼 수 있는 상체 운동의 최고봉인 운동이다.",
  "벤치 프레스는 웨이트 트레이닝을 해본 적이 없는 사람들도 알고 있는 경우가 많을 정도로 가장 널리 알려진 운동으로서, 대흉근과 삼두근을 위주로 가슴 부근의 상체 근육들을 종합적으로 강화하기 위한 최고의 운동이다.웨이트 트레이닝 3대 운동 중 하나답게 운동 효과가 매우 뛰어나다. 대흉근이란 이름이 붙을 만큼 거대한 가슴 근육 발달에 있어 벤치 프레스만한 운동이 없으며 가슴뿐만 아니라 어깨, 삼두 등 상체 근육 전반을 그 어떤 운동보다도 고중량으로 소화해낼 수 있는 상체 운동의 최고봉인 운동이다.",
  "벤치 프레스는 웨이트 트레이닝을 해본 적이 없는 사람들도 알고 있는 경우가 많을 정도로 가장 널리 알려진 운동으로서, 대흉근과 삼두근을 위주로 가슴 부근의 상체 근육들을 종합적으로 강화하기 위한 최고의 운동이다.웨이트 트레이닝 3대 운동 중 하나답게 운동 효과가 매우 뛰어나다. 대흉근이란 이름이 붙을 만큼 거대한 가슴 근육 발달에 있어 벤치 프레스만한 운동이 없으며 가슴뿐만 아니라 어깨, 삼두 등 상체 근육 전반을 그 어떤 운동보다도 고중량으로 소화해낼 수 있는 상체 운동의 최고봉인 운동이다.",
];

window.addEventListener("DOMContentLoaded", function () {
  const targetElement = document.querySelector(".videos");

  video_urls.forEach((url, index) => {
    const newElement = document.createElement("div");
    const cardElement = document.createElement("div");
    const videoElement = document.createElement("video");
    const descElement = document.createElement("div");

    const titleElement = document.createElement("h1");

    titleElement.innerText = titles[index];

    // 영상 주소 설정
    videoElement.setAttribute("controls", "");
    videoElement.setAttribute("src", url);
    // 영상을 카드 엘리먼트에 입력
    cardElement.classList.add("card");
    cardElement.appendChild(videoElement);
    // 영상 설명 설정
    descElement.innerText = video_descriptions[index];

    // 영상 카드와 영상 설명을 엘리먼트에 추가
    newElement.appendChild(titleElement);
    newElement.appendChild(cardElement);
    newElement.appendChild(descElement);

    // 최종적으로 영상 목록 엘리먼트에 추가
    targetElement.appendChild(newElement);
  });
});
