# JavaScript30 紀錄  
## Day1  
鍵盤案下頁面上顯示的對應按鈕時，播放音樂  
### 新學到的東西
* 在 html 元素中設定 data  
* 字元碼 keyCode
* 以 addEventListener 對事件監聽  
* 設定函式使按鍵移除特定 class 搭配 css 來產生動畫效果  

## Day2
以 css 做出時鐘 
### 新學到的東西  
* 以 Date() 函式取得當前時間  
* 用 setInterval 使函式每隔一段時間就執行一次
* css 使用 transform: rotate() 方式旋轉物件

## Day3
操作頁面上顯示的拉條，改變圖片的位置與模糊程度等  
### 新學到的東西  
* 使用 --var 於 css 內使用變數  

## Day4

## Day5
點擊頁面上的圖面後，展開該圖片並使兩旁的圖片縮小
### 新學到的東西 
* css flex 屬性操作

## Day6
輸入查詢資訊，輸入的過程中顯示匹配的結果  
### 新學到的東西  
* 正規表達式 regex  
* fetch 方式取得遠端資訊
 
## day7

## day8
點擊頁面可以繪圖，畫筆大小及顏色會滑鼠隨移動改變
### 新學到的東西  
* svg 屬性操作
* 滑鼠位置與頁面的計算

## day9

## day10
按住 shift 選擇時，可選到連續的項目
### 新學到的東西  
* input[type=radio] 的 checked 屬性

## day11
自訂 video 的播放選擇按鍵
### 新學到的東西 
* video 相關屬性

## day12
按下特定密碼，可改變畫面
### 新學到的東西 
使用 splice 方法切出需要的陣列

## day13
滾動頁面時，圖片會適時滑入
### 新學到的東西 
* scroll 屬性與位置計算
* 避免過多的操作造成瀏覽器的負擔，使用 debounce 方法將過多的輸入濾除

## day14

## day15
簡易版記事，重新整理瀏覽器依然不會消失
### 新學到的東西
* 將資料儲存於 localStorage
* 使用 JSON.stringify 將資料轉換為 json 字串

## day16 
滑鼠於畫面移動時，物件陰影會之改變
### 新學到的東西
* 在滑鼠移置物件上方時，計算滑鼠位置

## day17

## day18

## day19
擷取攝影機，將影片修改呈現在頁面上並可存取螢幕快照
### 新學到的東西
* 使用 navigator.mediaDevice.getUserMedia() 取得用戶端裝置
* canvas.getContext('2d') 的 .drawImage 可將影片或圖片繪製於 canvas 上
* canvas.toDataURL 可將 canvas 畫面輸出
* canvas.getContext('2d') 的 getImageData 可將圖面取出為 Uint8ClampedArray 
* 操作 Uint8ClampedArray 達成影像濾鏡的效果

## day20
取用麥克風，辨識語音並將其顯示於頁面 偵測到特殊關鍵字可觸發特定行動
### 新學到的東西
* 以瀏覽器上的 SpeechRecognition 功能辨識語音
* 以 includes 判斷字串內是否含有特定字串
* contenteditable 屬性使內容可編輯

## day21
做出指南針，顯示當前速度
### 新學到的東西
* 以瀏覽器上的 navigator.geolocation 可抓取用戶當前位置資訊

## day22
滑鼠指標對特定目標產生聚光燈效果，聚光燈會從上個目標移動到下個目標
### 新學到的東西
* 物件可用 getBoundingClientRect 來取得位置
* 位置處理要考慮視窗移動後的結果

## day23
將輸入的文字念出來，可選擇語言並改變讀速與音高
### 新學到的東西
* 以瀏覽器上的 SpeechSynthesis 朗讀文字
* Safari 上的 SpeechSynthesis 不支援 voiceChange 事件

## day24
navbar 在畫面滑動時會固定於頁面最上方
### 新學到的東西
* 畫面滾動時，若改變 layout 畫面要做適度調整來優化使用者體驗

## day25
### 新學到的東西
bubbling
在巢狀包覆的狀態下，若父元素與子元素皆有監聽元素（addEventListener) 在監聽事件（如 click）被觸發時 ，則兩者皆會被觸發。觸發前會先抓取觸發元素，
抓取順序為 父元素>子元素 而觸發順序為 子元素>父元素。
可在 addEventListener 第三個參數中以物件形式增加 {capture: true} 使觸發順序改為 父元素>子元素
可在事件中增加 e.stopPropagation 來阻止事件觸發的傳遞。

addEventListener第三個參數中以物件形式增加 {once: true} 可使事件只會觸發一次

## day26
滑鼠指標對特定目標產生下拉選單，選單會從上個目標移動到下個目標並改變內容
### 新學到的東西
* opacity 改變要在確實存在的元素才有效果(display:none 是無效的)

## day27
點選有滾軸物件後拖曳滑鼠讓該滾軸滑動而不用使用滑鼠上的滾輪
### 新學到的東西
* transform: rotateY() 使用於物件時要搭配 perspective 來達到立體視覺效果
* flex 物件若要產生滾軸 內容物須設置最小寬度(min-width)
* user-select: none 可使點擊拖曳時不會反白選取物件
* nth-child(2n) 可設定偶數物件

## day28
指標於指定滾軸移動時 改變影片播放速度
### 新學到的東西
* 物件位置與寬高可由 .offsetHeight 等方式擷取
* video 物件增加 contorl 屬性會顯示播放功能按鍵

## day29
倒數計時器
### 新學到的東西
* setInterval 事件結束後要以 clearInterval 清除
* new Date(timestamp) 使用 .getHours() 等方法可取得時間
* 物件設定 name 可以直接在 document 選取該物件

## day30
打地鼠遊戲
### 新學到的東西
* 游標點擊可由屬性 isTrusted 確認是否為人為點擊或是程式點擊

