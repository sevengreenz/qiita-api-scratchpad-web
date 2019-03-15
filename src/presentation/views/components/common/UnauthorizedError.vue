<template>
  <v-dialog v-model="isShow" persistent>
    <v-card>
      <v-card-title class="headline">認証エラー</v-card-title>
      <v-card-text>Qiita::TeamのAPI、またはQiitaのGETリクエスト以外のAPIを利用するには、アクセストークンをリクエストに含める必要があります
        <br>アクセストークンを取得しますか?
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" flat="flat" @click.native="onDisagree">Disagree</v-btn>
        <v-btn color="green darken-1" flat="flat" @click.native="onAgree">Agree</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from "vue-property-decorator";
import Auth from "../../../../domain/auth";

@Component
export default class UnauthorizedError extends Vue {
  @Prop(Boolean) readonly isShow!: boolean;
  @Prop(Function) readonly onDisagree!: () => void;

  onAgree(): void {
    window.location.href = Auth.makeAuthorizationUrl();
  }
}
</script>


