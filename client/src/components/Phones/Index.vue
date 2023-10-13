<template>
  <div>
    <h2>Get all Phones</h2>
    <h4>จํานวนโทรศัพท์ {{ phones.length }}</h4>
    <div v-for="phone in phones" v-bind:key="phone.id">
      <p>รหัสโทรศัพท์ : {{ phone.id }}</p>
      <p>รุ่น : {{ phone.model }}</p>
      <p>ยี่ห้อ : {{ phone.brand }}</p>
      <p>หน่วยความจำ : {{ phone.memory }}</p>
      <p>สี : {{ phone.color }}</p>
      <p>ระบบปฏิบัติการ : {{ phone.operatingSystem }}</p>
      <p>ราคา : {{ phone.price }}</p>
      <p>ขนาดหน้าจอ : {{ phone.screenSize }}</p>
      <p>ความละเอียดหน้าจอ : {{ phone.screenResolution }}</p>
      <p>กล้องหลัก : {{ phone.mainCamera }}</p>
      <p>กล้องหน้า : {{ phone.frontCamera }}</p>
      <p>ความจุแบตเตอรี่ : {{ phone.batteryCapacity }}</p>
      <p>เครือข่าย : {{ phone.network }}</p>
      <p>น้ำหนัก : {{ phone.weight }}</p>

      <p><button v-on:click="navigateTo('/phone/'+phone.id)" >ดูข้อมูลโทรศัพท์</button></p>

      <hr />
    </div>
  </div>
</template>
<script>
import PhoneService from "@/services/PhoneService";
export default {
  data() {
    return {
      phones: []
    };
  },
  async created() {
    this.phones = (await PhoneService.index()).data;
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  }
};
</script>
<style scoped></style>
