<template>
    <Page>
        <ActionBar class="actionbar">
            <StackLayout orientation="horizontal">
                <Label text="AgraoApp" fontSize="24" verticalAlignment="center" />
            </StackLayout>
        </ActionBar>

        <GridLayout columns="auto, auto" rows="auto, auto">

                <Image class="teste" src="~/assets/images/M.jpg" row="0" col="0" stretch="none"></Image>
                <Image class="teste" src="~/assets/images/T.jpg" row="0" col="1" stretch="none"></Image>
                <Image class="teste" src="~/assets/images/L.jpg" row="1" col="0" stretch="none"></Image>
                <Image class="teste" src="~/assets/images/phd.jpg" row="1" col="1" stretch="none"></Image>

        </GridLayout>
        <!-- <Image src="~/assets/images/logo.png" row="2" col="0" stretch="Fill"></Image>  -->
         
    </Page>
</template>

<script>
var banene = []
    export default {
        computed: {
            message() {
                return "Banana";
            }
        }
    };
</script>

<style scoped>

    .teste{
        width: 50%;
    }

    .info {
        font-size: 20;
        horizontal-align: center;
        vertical-align: center;
    }

    .actionbar {
        background-color: red;
    }


</style>
