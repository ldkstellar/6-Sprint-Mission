// api.test.js
import axios from 'axios';
import { getBestPosts } from './api';
import instance from './axios';
describe('Integration tests with actual server', () => {
  it('fetchData returns data successfully from the server', async () => {
    // 예제 API 엔드포인트로 요청을 보냅니다.
    getBestPosts('page=1&pageSize=3&orderBy=like');

    // expect(response.status).toBe(200);
    // expect(response.data).toBeDefined();
    // 실제 응답 데이터에 대한 추가 검증을 수행할 수 있습니다.
  });
});

