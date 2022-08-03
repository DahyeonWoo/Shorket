import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MarketCard from "./MarketCard.js";

const cards = [1, 2, 3, 4, 5, 6, 7, 8];
const marketList = [
  {
    id: 1082,
    img:
      "https://www.ikea.com/images/43/0c/430c2e84bb4ccdfffdce161ef9f271ec.jpg?f=xxxl",
    name: "IKEA 플리마켓",
    location: "이케아 동부산점 1층 엘리베이터 앞",
    time: "11:00 ~ 18:00",
    period: "22.08.06.(토) ~ 22.08.07.(일)",
    like: 8000,
    view: 10000
  },
  {
    id: 2213,
    img:
      "http://gamefocus.co.kr/wys2/file_attach/2022/05/27/1653610161_60643.jpg",
    name: "아프리카TV BJ 플리마켓",
    location: "NC백화점 강서점 쉼표 하늘공원",
    time: "14:00 ~ 18:00",
    period: "22.05.28.(금)",
    like: 11000,
    view: 20000
  },
  {
    id: 3435,
    img: "https://busandabom.net/images/main/top_banner.jpg",
    url: "https://busandabom.net/index.nm?menuCd=239",
    name: "문화예술 플리마켓 <부기상회>",
    location: "부산시민공원(기억의 기둥, 뽀로로 도서관 일원)",
    time: "15:00 ~ 20:00",
    period: "22.06.04.(토) ~ 22.08.24.(토)",
    like: 11000,
    view: 20000
  },
  {
    id: 4908,
    img: "../images/market1.png",
    url:
      "https://garts.kr/index.do?menuId=00000151&mode=detl&evtId=EVT_10160&schedId=SCH_0010640",
    name: "신라아트마켓",
    location: "경주 시내일원 중심상가 내 빈점포",
    time: "15:00 ~ 20:00",
    period: "22.10.01.(금) ~ 22.10.16.(일)",
    like: 7000,
    view: 16000
  },
  {
    id: 5878,
    img: "../images/market2.png",
    url: "https://www.instagram.com/p/CgoeXAELGQl/",
    name: "율-나잇 마켓",
    location: "율하 남명N스퀘어 R층 옥상정원",
    time: "18:00 ~ 21:00",
    period: "22.08.11.(목)",
    like: 17000,
    view: 26000
  },
  {
    id: 6091,
    img:
      "https://culture.seoul.go.kr/cmmn/file/imageSrc.do?fileStreCours=35367259ca6485b8ea26e64a6b235a533a9d293af5edb215bb64d24b9a57cbbc&streFileNm=a763fabd93451be10cd60d455698cee06a7ff77472074eb1dad6fba65becd736",
    url: "https://www.instagram.com/groove_in_gwanak/",
    name: "2022 Groove In Gwanak STREET DANCE FESTIVAL ",
    location: "2호선 신림역 인근 별빛내린천(도림천) 일원",
    time: "14:00 ~ 21:00",
    period: "22.07.16.(토) ~ 22.07.17.(일)",
    like: 27000,
    view: 36000
  },
  {
    id: 7341,
    img:
      "https://www.sangsangmadang.com/feah/temp/2021/202107/82914bab-505b-461c-bbb2-e6699078f724",
    url: "https://www.sangsangmadang.com/artist/detail/104",
    name: "7월 상상하는 마켓-트",
    location: "상상마당 부산 앞 1층 야외",
    time: "14:00 ~ 19:00",
    period: "21.07.31.(토)",
    like: 7000,
    view: 16000
  },
  {
    id: 8034,
    img: "https://cfile1.onoffmix.com/attach/L2X8IAd0MjC9coB5kfJNUZV1StpDFeu7",
    url: "https://m.onoffmix.com/event/254052",
    name: "돈의문 마켓",
    location: "서울특별시 종로구 송월길 14-3 돈의문 박물관마을",
    time: "11:00 ~ 19:00",
    period: "22.05.05.(목) ~ 22.05.08.(일)",
    like: 7000,
    view: 1000
  }
];

const theme = createTheme();
function MarketList() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Container sx={{ py: 8 }} maxWidth="lg" style={{ paddingTop: "10px" }}>
          {/* End hero unit */}
          <Grid container spacing={3}>
            {marketList.map((market) => (
              <Grid item key={marketList} xs={12} sm={6} md={3}>
                <MarketCard
                  id={market.id}
                  img={market.img}
                  url={market.url}
                  name={market.name}
                  location={market.location}
                  time={market.time}
                  period={market.period}
                  like={market.like}
                  view={market.view}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}

export default MarketList;
