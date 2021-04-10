# sample-chrome-extension
sample app of chrome extension

## Setup

1. リポジトリのclone

```
$ git clone git@github.com:soartec-lab/sample-chrome-extension.git
```

2. chromeの起動
3. [chorme拡張機能])(chrome://extensions/)設定画面に移動
4. デベロッパーモードの有効化
5. このリポジトリをcloneしたディレクトリを「パッケージ化されていない拡張機能を読み込む」からインポート

## Usage
### chormeのブラウザヘッダーメニューから拡張機能のアクション実行

1. chormeのブラウザヘッダーメニューから拡張機能のアイコンクリック
2. 新規タブが開き「今日の天気」が検索されます

### Google検索画面のアイコンのクリックアクションをバインド

1. `https://www.google.com/`を開く
2. Google検索ページの画像をクリック
3. 新規タブが開き「今日の為替」が検索されます

## Commentary of process
### chormeのブラウザヘッダーメニューから拡張機能のアクション実行
1. `background.js`でchormeのブラウザヘッダーメニューからの拡張機能のアクション実行をバインド
2. アクションの実行を受け取ったら`search_weather.js`を実行
3. `search_weather.js`でブラウザ操作を行う。

### Google検索画面のアイコンのクリックアクションをバインド
1. `https://www.google.com/`にのみ適応されるjavascriptファイル`content_script.js` を `content_script`として定義。
2. `content_script.js`ではGoogle検索画面のアイコンのクリックアクションをバインドしている。
3. Googleアイコンがクリックされた場合にデータを`background.js`にpushする。
データを受け取った`background.js`はそのデータをさらに`search_by_input_word.js`へ渡している。
4. `search_by_input_word.js`では`background.js`から受け取ったデータを元にブラウザ操作を行う。