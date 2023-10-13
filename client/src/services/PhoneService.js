import Api from "@/services/Api";
export default {
  index(search) {
    return Api().get("phones");
  },
  show(userId) {
    return Api().get("phone/" + phoneId);
  },
  post(user) {
    return Api().post("phone", phone);
  },
  put(user) {
    return Api().put("phone/" + phone.id, phone);
  },
  delete(user) {
    return Api().delete("phone/" + phone.id, phone);
  }
};
