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
                <Label class="text1" textWrap="true" text="CARREGADORES FRONTAIS AGRÍCOLAS" fontSize="24" verticalAlignment="center" margin="2rem" padding="2rem"/> 
                 <Label class="text2" textWrap="true" text="Simples para seu trator, essencial para seu trabalho." fontSize="20" verticalAlignment="center" margin="2rem" padding="2rem" />
            </StackLayout>


        <GridLayout class="grid1" columns="auto, auto" rows="auto, auto, auto, auto">
                <Image class="ribbon" src="~/assets/images/redm.png" row="0" col="0" stretch="aspectFit" horizontalAlignment="left"></Image>
                <Image class="ribbon" src="~/assets/images/redt.png" row="0" col="1" stretch="aspectFit" horizontalAlignment="right"></Image>

                <Image class="teste" src="~/assets/images/M.jpg" row="1" col="0" stretch="aspectFit"></Image>
                <Image class="teste" src="~/assets/images/T.jpg" row="1" col="1" stretch="aspectFit"></Image>
                <Image class="teste" src="~/assets/images/L.jpg" row="2" col="0" stretch="aspectFit"></Image>
                <Image class="teste" src="~/assets/images/phd.jpg" row="2" col="1" stretch="aspectFit"></Image>

                <Image class="ribbon" src="~/assets/images/redl.png" row="3" col="0" stretch="aspectFit" horizontalAlignment="left"></Image>
                <Image class="ribbon" src="~/assets/images/redphd.png" row="3" col="1" stretch="aspectFit" horizontalAlignment="right"></Image>


        </GridLayout>
        <StackLayout orientation="vertical" >

           <Image class="logo" src="~/assets/images/logo.png" stretch="none" horizontalAlignment="center" ></Image>

        </StackLayout>

                </StackLayout>
                </ScrollView>
 
    </Page>
</template>

<script>
    export default {
        name: "First"
    };
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
    }
    .text2 {
        color: yellow;
    }
</style>
