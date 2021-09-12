import mock, { withDelay } from "@/fake-db/mock.js";

mock.onGet("api/get").reply(() => {
  const response = {
    data: {
      text: "test",
    },
    code: 200,
    msg: "",
  };
  return withDelay(500, [200, response]);
});
