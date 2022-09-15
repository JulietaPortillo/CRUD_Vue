<template>
    <div>
        <h3 class="text-center">Editar Cliente</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="updateCustomer">
                    <div class="form-group">
                        <label>Nombre</label>
                        <input type="text" class="form-control" v-model="customer.name">
                    </div>
                    <div class="form-group">
                        <label>Direccion</label>
                        <input type="text" class="form-control" v-model="customer.address">
                    </div>
                    <div class="form-group">
                        <label>Telefono</label>
                        <input type="text" class="form-control" v-model="customer.phone_number">
                    </div>
                    <button type="submit" class="btn btn-primary">Actualizar</button>
                </form>
            </div>
        </div>
    </div>
</template>
 
<script>
    export default {
        data() {
            return {
                customer: {}
            }
        },
        created() {
            this.axios
                .get(`http://localhost:8000/api/customers/${this.$route.params.id}`)
                .then((res) => {
                    this.customer = res.data;
                });
        },
        methods: {
            updateCustomer() {
                this.axios
                    .patch(`http://localhost:8000/api/customers/${this.$route.params.id}`, this.customer)
                    .then((res) => {
                        this.$router.push({ name: 'home' });
                    });
            }
        }
    }
</script>