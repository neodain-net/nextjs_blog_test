import type { AppProps } from "next/app";
import "@/styles/globals.css";

import { QueryClient, QueryClientProvider, Hydrate } from "react-query";

// create a query client

// window focus 설정을 안할 경우,
// const queryclient = new QueryClient();
// window focus 설정을 전역으로 설정 시
// stailTime이 지났더라도 focus가 다시 되는 것만으로 refetch가 발생되지 않도록 설정.
// stailTime과 cacheTime을 설정하는 방법은 useQuery를 작성할 때 아래와 같이 함께 해줄 수 있다.
// stailTime과 cacheTime을 적절하게 설정하여 잦은 refetch가 발생하지 않도록 설정 필요.
// const res = useQuery({
//     queryKey: ['persons'],
//     queryFn: () => axios.get('http://localhost:8080/persons'),
//     staleTime: 5000, // 5초           default : 0
//     cacheTime: Infinity // 제한 없음   default : 5*60*1000 = 5분
// });
// useQurey 마다 설정 시 아래와 같이 할 수 있다.
// const res = useQuery({
//     queryKey: ['persons'],
//     queryFn: () => axios.get('http://localhost:8080/persons'),
//     refetchOnWindowFocus: false // window focus 설정
// });

// 조건에 따라, query 자동 실행 설정 시
// if(id) {
//     const res = axios.get('http://localhost:8080/person', {
//         params: {
//             id: id,
//         }
//     })
// }
// 위의 조건문에 따른 쿼리 조회 효과를 아래와 같이 구현.
// const res1 = useQuery({
//     queryKey: ['person', id],
//     queryFn: () => axios.get('http://localhost:8080/person', {
//         params: {
//             id: id,
//         }
//     }),
//     enabled: !!id // 코드 자동 실행 설정
// });

const queryclient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryclient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
