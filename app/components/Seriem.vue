<template>
    <Page>
        <ActionBar class="actionbar">
            <FlexboxLayout orientation="vertical" >
                <Label  text="MarispanApp" fontSize="24" verticalAlignment="center" margin="2rem" padding="2rem"/> 
            </FlexboxLayout>
        </ActionBar>

        <ScrollView>

        <StackLayout>
        <StackLayout>

            <Image class="ribbon" src="~/assets/images/redm.png" row="0" col="0" stretch="aspectFit" horizontalAlignment="left"></Image>

        </StackLayout>




        <GridLayout class="grid1" columns="auto, auto" rows="auto, auto, auto, auto">
                <Image class="teste" src="~/assets/images/M.jpg" row="1,2" col="0" stretch="aspectFit"></Image>

               


        </GridLayout>
        <StackLayout orientation="vertical" >
           <Button class="back" text="ESPECIFICAÇÕES" @tap="especicacoes" />
           <Button class="back" text="OPCIONAIS" @tap="opcionais" />
           <Button class="back" text="ACESSÓRIOS" @tap="acessorios" />


           <Image class="logo" src="~/assets/images/logo.png" stretch="none" horizontalAlignment="center" ></Image>
            <Button class="back" text="Voltar" @tap="onButtonTapm" />


        </StackLayout>

                </StackLayout>
                </ScrollView>
 
    </Page>
</template>

<script>
import Master from "./Master.vue";
import First from "./First.vue";
import Especificacoes from "./Especificacoes.vue";
import Opcionais from "./Opcionais.vue";
import Acessorios from "./Acessorios.vue";
    export default {
        name: "Seriem",
        methods: {
    onButtonTapm() {
      this.$navigateTo(First)
    },
    especificacoes() {
        this.$navigateTo(Especificacoes)
    },
    opcionais() {
      this.$navigateTo(Opcionais)
    },
    acessorios() {
        this.$navigateTo(Acessorios)
    }
  }  

    };
</script>

<style scoped>

    .back{
        background-color: #d91920;
        color: white;
    }

    .teste{
        width: 100%;
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
    }
    .text2 {
        color: black;
    }
</style>
