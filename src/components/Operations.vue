<template>
  <div class="container mt-3 w-50">
    <h6>Araç İşlemleri</h6>
    <hr>
    <form @submit.prevent="addCar" class="bg-light p-4 rounded">
      <div class="row">
        <div class="form-group col-sm-4 ">
          <label>Marka Bilgisi</label>
          <select v-model="araç.marka" class="form-select">
            <option value="Marka1">Marka1</option>
            <option value="Marka2">Marka2</option>
            <option value="Marka3">Marka3</option>
          </select>
        </div>
        <div class="form-group col-sm-4">
          <label>Model Bilgisi</label>
          <select v-model="araç.model" class="form-select">
            <option value="Model1">Model1</option>
            <option value="Model2">Model2</option>
            <option value="Model3">Model3</option>
          </select>
        </div>
        <div class="form-group col-sm-4">
          <label>Kasa Tipi</label>
          <select v-model="araç.kasa" class="form-select">
            <option value="Sedan">Sedan</option>
            <option value="Hatcback">Hatcback</option>
            <option value="Cabrio">Cabrio</option>
            <option value="SUV">SUV</option>

          </select>
        </div>
      </div>
      <div class="row">
        <div class="form-group col-md-4">
          <label>Yıl</label>
          <select v-model="araç.yıl" class="form-select">
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
          </select>
        </div>
        <div class="form-group col-md-4">
          <label>Km</label>
          <input v-model="araç.km" type="text" class="form-control">
          <span v-if="!$v.araç.km.numeric" class="badge bg-danger mt-1" >Km bilgisi numeric olmalıdır.</span>
        </div>
        <div class="form-group col-md-4">
        <label>Renk</label>
        <input v-model="araç.renk" type="color" class="form-control">
      </div>
      </div>
      <div class="form-group bg-white py-2 px-1">
        <label>Sıfır</label>
        <input v-model="araç.durum" type="radio" value="Sıfır" name="status" class="form-check-input">
        <label>İkinci El</label>
        <input v-model="araç.durum" type="radio" value="İkinci El" name="status" class="form-check-input">
      </div>
      <div class="form-group bg-white py-2 px-1">
        <label>Dizel</label>
        <input v-model="araç.yakıt" type="radio" value="Dizel" name="fuel" class="form-check-input">
        <label>Benzin</label>
        <input v-model="araç.yakıt" type="radio" value="Benzin" name="fuel" class="form-check-input">
        <label>Elektrik</label>
        <input v-model="araç.yakıt" type="radio" value="Elektrik" name="fuel" class="form-check-input">
        <label>Lpg</label>
        <input v-model="araç.yakıt" type="radio" value="Lpg" name="fuel" class="form-check-input">
      </div>
      <div class="form-group bg-white py-2 px-1">
        <label>Manuel</label>
        <input v-model="araç.vites" type="radio" value="Manuel" name="gear
        " class="form-check-input">
        <label>Otomatik</label>
        <input v-model="araç.vites" type="radio" value="Otomatik" name="gear
        " class="form-check-input">
        <label>Yarı Otomatik</label>
        <input v-model="araç.vites" type="radio" value="Yarı Otomatik" name="gear
        " class="form-check-input">
      </div>

      

      <button :disabled="$v.$invalid" class="btn btn-outline-success">Kaydet</button>
    </form>
  </div>
</template>

<script> 

  import {required,numeric} from "vuelidate/lib/validators"
  import {eventBus} from "../main"
  //import { mapMutations } from "vuex";

  export default{
    data(){
      return{
        araç:{
          marka:null,
          model:null,
          kasa:null,
          durum:null,
          yakıt:null,
          vites:null,
          yıl:null,
          renk:null,
          km:null
        }
      }
    },
    validations:{
      araç:{
        marka:{
          required
        },
        model:{
          required
        },
        kasa:{
          required
        },
        durum:{
          required
        },
        yakıt:{
          required
        },
        vites:{
          required
        },
        yıl:{
          required
        },
        renk:{
          required
        },
        km:{
          required,
          numeric
        },
      }
    },
    methods:{
      addCar(){
        this.$store.commit("addList",this.araç);
        this.$router.replace("/list")
      }
      /*...mapMutations({
        addList : "addList"
      })*/
    }
  }
</script>
<style scoped>
  .form-group{
    margin: 10px 0 !important;
  }

  @media (max-width: 576px) {
    .container{
      width: 100% !important;
      font-size: 14px;
    }

  }
</style>