<template>
      <form @submit.prevent="calcular()"> 
            <div class="form-group">
                <div class="col-md-4 offset-md-4">
                    <label for="cat_adj" class="text-primary" >Cateto adjacente</label>
                    <input id="cat_adj" type="number" name="cat_adj" class="form-control " 
                            placeholder="Digite o valor do cateto adjacente" required="true"
                            v-model="cat_adj">    
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-4 offset-md-4">
                    <label for="cat_op" class="text-primary" >Cateto oposto</label>
                    <input id="cat_op" type="number" name="cat_op" class="form-control " 
                    placeholder="Digite o valor do cateto oposto" required="true" 
                    v-model="cat_op">   
                </div>
            </div>

            <div class="form-group">
                <div class="col-md-6 offset-md-3">
                    <input type="submit" value="calcular" style="font-weight: bold;" class="btn btn-primary text-dark" name="btn_calc">
                    <div class="form-check">
                    </div>
                </div>
            </div>

            <div class="form-group">
                <div class="col-md-4 offset-md-4">
                    <label for="hip" class="text-primary" >Hipotenusa</label>
                    <output id="hip" type="text" name="hip" class="form-control">{{hip}}</output>    
                </div>
            </div>

      </form>

</template>

<script>
import axios from 'axios';

export default {
    props:[],

    data(){

        return{
            cat_adj: '',
            cat_op: '',
            hip: ''
        }
    },

methods:{
        calcular(){
            axios.post('https://atlas-231814.appspot.com/calcula',{
            cat_adj: parseInt(this.cat_adj),
            cat_op: parseInt(this.cat_op)
            })
            .then(response => {
                this.hip = response.data.hip;
                console.log(response);
            })
            .catch(error => console.log(error))
            this.cat_adj = '';
            this.cat_op = '';
        }

    }
}

</script>

<style lang="scss">
</style>