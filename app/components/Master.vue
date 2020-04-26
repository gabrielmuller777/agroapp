<template>
    <Page>
        <ActionBar class="actionbar">
            <StackLayout orientation="vertical" >
                <Label  text="MarispanApp" fontSize="24" verticalAlignment="center" margin="2rem" padding="2rem"/> 
            </StackLayout>
        </ActionBar>

        <ScrollView>

        <StackLayout>

            <StackLayout orientation="vertical" >
                <Label class="text1" textWrap="true" text="CATÁLOGO VIRTUAL" fontSize="24" verticalAlignment="center" horizontalAlignment="center"/> 
            </StackLayout>

        <StackLayout orientation="vertical" >

           <Image class="logo" src="~/assets/images/logo.png" stretch="none" horizontalAlignment="center" ></Image>
           <Button text="Iniciar" @tap="onButtonTap" />


        </StackLayout>

                </StackLayout>
                </ScrollView>
 
    </Page>
</template>

<script>
import First from "./First.vue";

export default {
  name: 'Master',
  methods: {
    onButtonTap() {
      this.$navigateTo(First)
    }
  }  
}
</script>


<style scoped>

    .teste{
        width: 50%;
    }

    .actionbar {
        background-color: #d91920;
    }

    .logo{
        margin-top: 30rem;
        margin-bottom: 30rem;
    }
    .grid1{
        justify-items: center;
        margin: auto;
    }
    .text1 {
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 900;
        color: #d91920;
        margin-top: 50rem;
    }
    .text2 {
        color: yellow;
    }
</style>
