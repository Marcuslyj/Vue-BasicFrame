<template>
    <Row class="layout-upload">
        <Card>
            <Row slot="title" class="wi-card-title">
                <icon type="ios-create-outline" />
                <a href="https://www.iviewui.com/components/upload" target="_blank">Upload</a>
            </Row>
            <Row class="wi-item">
                <Row class="wi-item-label">图片上传 ( 单图 )</Row>
                <Row class="wi-item-content">
                    <Row class="wi-upload">
                        <image-upload v-model="poster" :config="{
                            maxCount: 1,
                            fbId: 'F1704100',
                            maxSize: 3072
                        }"></image-upload>
                    </Row>
                </Row>
            </Row>
            <Row class="wi-item">
                <Row class="wi-item-label">图片上传 ( 多图 )</Row>
                <Row class="wi-item-content">
                    <Row class="wi-upload">
                        <image-upload v-model="images" ref="uploadImages" :config="{
                            maxCount: 10,
                            fbId: 'F1704100',
                            maxSize: 3072,
                            multiple: true,
                            dragable:true
                        }"></image-upload>
                    </Row>
                </Row>
            </Row>
        </Card>
        <Card class="mt20">
            <Row slot="title" class="wi-card-title">
                <icon type="ios-code-working" /> 代码
            </Row>
            <pre v-highlight><code>{{ html }}</code></pre>
        </Card>
    </Row>
</template>
<script>
    import ImageUpload from '@/components/upload/ImageUpload';
    const UploadComponent = {
        components: {'image-upload': ImageUpload},
        data() {
            return {
                poster: null,
                images: [],
                html: '<template>\n' +
                    '    <Row class="wi-item">\n' +
                    '        <Row class="wi-item-label">图片上传 ( 单图 )</Row>\n' +
                    '        <Row class="wi-item-content">\n' +
                    '            <Row class="wi-upload">\n' +
                    '                <wi-upload v-model="poster" :config="{\n' +
                    '                     maxCount: 1,\n' +
                    '                     fbId: \'F1704100\',\n' +
                    '                     maxSize: 3072\n' +
                    '                }"></wi-upload>\n' +
                    '            </Row>\n' +
                    '        </Row>\n' +
                    '    </Row>\n' +
                    '    <Row class="wi-item">\n' +
                    '        <Row class="wi-item-label">图片上传 ( 多图 )</Row>\n' +
                    '        <Row class="wi-item-content">\n' +
                    '            <Row class="wi-upload">\n' +
                    '                <wi-upload v-model="images" :config="{\n' +
                    '                   maxCount: 10,\n' +
                    '                   fbId: \'F1704100\',\n' +
                    '                   maxSize: 3072,\n' +
                    '                   multiple: true\n' +
                    '                }"></wi-upload>\n' +
                    '            </Row>\n' +
                    '        </Row>\n' +
                    '    </Row>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    import FileUpload from \'@/components/upload/Upload\';\n' +
                    '    const UploadDemoComponent = {\n' +
                    '        components: {\'wi-upload\': FileUpload},\n' +
                    '        data() {\n' +
                    '            return {\n' +
                    '                poster: null,\n' +
                    '                images: []\n' +
                    '            };\n' +
                    '        }\n' +
                    '    };\n' +
                    '    export default UploadDemoComponent;\n' +
                    '<\/script>'
            };
        },
        mounted(){
            this.$refs.uploadImages.setDefaultList([
                'https://dev-file.tvflnet.com/F17/04/100/8b071ef1-33b4-4cf1-8c67-790cca2f592a.jpg',
            'https://dev-file.tvflnet.com/F17/04/100/d268d171-cc87-4426-a95e-4a87cddb8e2c.gif'])
        }
    };
    export default UploadComponent;
</script>
