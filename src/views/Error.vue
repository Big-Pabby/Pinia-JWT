<template>
    <div class="error">
        <div class="error-image">
            <img src="../assets/404.svg" alt="">
        </div>
        <h2>You have to login to access this page</h2>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.error {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.error-image {
    width: 150px
}

h2 {
    text-align: center;
}
</style>