<template>
    <Page>
        <ActionBar class="actionbar">
            <FlexboxLayout orientation="vertical" >
                <Label  text="MarispanApp" fontSize="24" verticalAlignment="center" margin="2rem" padding="2rem"/> 
            </FlexboxLayout>
        </ActionBar>

        <ScrollView>
        <StackLayout>


        <GridLayout>
                             <Button class="back" text="Voltar" @tap="voltar" />

         </GridLayout>

       
        </StackLayout>
        </ScrollView>
 
    </Page>
</template>

<script>
import Master from "./Seriem.vue";

    export default {
        name: "Especificacoes",
        methods: {
    voltar() {
      this.$navigateTo(Seriem)
    }
  }  

    };
</script>