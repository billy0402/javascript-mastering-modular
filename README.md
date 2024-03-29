# [javascript-mastering-modular](https://github.com/mjavascript/mastering-modular-javascript)

## environment
- [macOS 10.15.2](https://www.apple.com/tw/macos/catalina/)
- [WebStorm 2019.3.1](https://www.jetbrains.com/webstorm/)
- [JavaScript ES6](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript)

## 目錄
- CH1 模組思維
    - 1.1 模組思維簡介
    - 1.2 模組化簡史
        - 1.2.1 腳本標籤與 Closure
        - 1.2.2 RequireJS、AngularJS 與依賴注入
        - 1.2.3 Node.js 與 CommonJS 的問世
        - 1.2.4 ES6、import、Babel 與 Webpack
    - 1.3 模組化設計的好處
    - 1.4 模組顆粒化
    - 1.5 模組化 JavaScript：必然性
- CH2 模組化原則
    - 2.1 模組化設計的精髓
        - 2.1.1 單一功能原則
        - 2.1.2 API 優先
        - 2.1.3 揭露原則
        - 2.1.4 找出正確的抽象
        - 2.1.5 狀態管理
    - 2.2 CRUST：一致、有彈性、明確、簡單與精簡
        - 2.2.1 一致
        - 2.2.2 彈性
        - 2.2.3 明確性
        - 2.2.4 簡單性
        - 2.2.5 微小的表面積
- CH3 模組設計
    - 3.1 培育模組
         - 3.1.1 可組合性與可伸縮性
         - 3.1.2 為當下設計
         - 3.1.3 以小步驟演進抽象
         - 3.1.4 慎重地前進並進行試驗
    - 3.2 CRUST 考量
        - 3.2.1 偶爾重複
        - 3.2.2 功能隔離
        - 3.2.3 設計內容時的取捨
    - 3.3 修剪模組
        - 3.3.1 錯誤處理、緩解、偵測與解決
        - 3.3.2 文件的藝術
        - 3.3.3 移除程式碼
        - 3.3.4 視情況而定
- CH4 形塑內在
    - 4.1 內部複雜性
        - 4.1.1 容納嵌套的複雜性
        - 4.1.2 特性糾纏與緊耦合
        - 4.1.3 框架：好、壞與醜陋
    - 4.2 重構複雜的程式
        - 4.2.1 擁抱變數，而不是聰明的程式
        - 4.2.2 防衛短句與分支翻轉
        - 4.2.3 依賴關係金字塔
        - 4.2.4 擷取函式
        - 4.2.5 壓平嵌套的回呼
        - 4.2.6 建構類似的工作
        - 4.2.7 切割大型的函式
    - 4.3 狀態熵
        - 4.3.1 目前的狀態：它很複雜
        - 4.3.2 消除伴隨狀態
        - 4.3.3 容納狀態
        - 4.3.4 利用不變性
    - 4.4 資料結構是真正的王者
        - 4.4.1 隔離資料與邏輯
        - 4.4.2 限制邏輯與分群
- CH5 模組化模式與實踐
    - 5.1 使用現代的 JavaScript
        - 5.1.1 樣板字串
        - 5.1.2 解構、其餘與展開
        - 5.1.3 堅持使用簡單的 const 綁定
        - 5.1.4 瀏覽回呼、promise 與非同步函式
    - 5.2 組合與繼承
        - 5.2.1 透過類別來繼承
        - 5.2.2 組合的額外好處：各個層面與擴展
        - 5.2.3 組合與繼承之間的抉擇
    - 5.3 程式模式
        - 5.3.1 揭露模式
        - 5.3.2 物件工廠
        - 5.3.3 事件發送
        - 5.3.4 訊息傳遞與簡單的 JSON
- CH6 開發方法與哲學
    - 6.1 安全設置管理
    - 6.2 明確地管理依賴關係
    - 6.3 用介面來製作黑盒子
    - 6.4 組建、釋出、執行
    - 6.5 無狀態性
    - 6.6 開發與生產的比較
    - 6.7 抽象很重要        
