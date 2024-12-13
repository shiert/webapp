import request from '@/utils/request'

export async function get() {
  return request({
    url: "/cosy/get",
    method: "get",
  });
}

export async function post(data) {
  return request({
    url: "/cosy/post",
    method: "post",
    data,
  });
}
