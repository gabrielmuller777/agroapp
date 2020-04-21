<template>
    <Page>
        <ActionBar class="banana">
            <Label text="Homeeeeee"></Label>
        </ActionBar>

        <GridLayout>
            <Label class="info">
                <FormattedString>
                    <Span :text="message"/>
                </FormattedString>
            </Label>
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

    .banana {
        background-color: red;
    }
</style>
