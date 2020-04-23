<template>
    <Page>
        <ActionBar class="actionbar">
            <StackLayout orientation="horizontal">
                <Label text="AgraoApp" fontSize="24" verticalAlignment="center" />
            </StackLayout>
        </ActionBar>

        <GridLayout columns="1*, 1*" rows="1*, 1*">

                <Image src="~/assets/images/M.jpg" row="0" col="0" stretch="fill"></Image>
                <Image src="~/assets/images/T.jpg" row="0" col="1" stretch="fill"></Image>
                <Image src="~/assets/images/L.jpg" row="1" col="0" stretch="fill"></Image>
                <Image src="~/assets/images/phd.jpg" row="1" col="1" stretch="fill"></Image>
                <Image src="~/assets/images/logo.png" row="2" col="0"></Image>

        </GridLayout>
        
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

    .info {
        font-size: 20;
        horizontal-align: center;
        vertical-align: center;
    }

    .actionbar {
        background-color: red;
    }
</style>
