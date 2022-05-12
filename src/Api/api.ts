import http from './http';

class StuffDataService {

// ========USER APIs===========================

  // post signup user
  createAnAccount(data:object) {
    return http.post("/", data);
  }

  // post login user
  postUserLogin(data:object) {
    return http.post(`/login`, data);
  }

  // post updated user
  PostUpdatedUser(id:number, data:object) {
    return http.post(`/update/${id}`, data);
  }

  // post delete user
  PostRemoveUser(id:number, data:object) {
    return http.post(`/remove/${id}`);
  }
  
  // ==========SUBSCRIPTION APIs=================

  // create  subscription
  createSubscription(data:object) {
    return http.post("/subscription", data);
  }

  // get all subscriptions
  find() {
    return http.get("/subscription");
  }

  // get a subscription
  findById(id:number) {
    return http.get(`/subscription/${id}`);
  }

  //updateRecipe
  postUpdatedSubscription(id:number, data:object) {
    return http.post(`/subscription/update/${id}`, data);
  }

  // remove subscription
  removeSubscription(id:number) {
    return http.post(`/subscription/remove/${id}`);
  }


}

export default new StuffDataService();