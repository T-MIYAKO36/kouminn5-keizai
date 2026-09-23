// 4地区×29問。各地区BASIC 19 / STANDARD 10。
const q=(id,difficulty,prompt,choices,answer,explanation,hint)=>({id,difficulty,prompt,choices,answer,explanation,hint});
const B='basic',S='standard';
const QUESTION_BANK={
 market:[
q('M01',B,'商品を買いたい人の気持ちや量を何という？',['需要','供給','生産','分業'],0,'買いたい量を需要という。','買う側に注目。'),
q('M02',B,'商品を売りたい人が市場に出す量を何という？',['消費','需要','供給','価格'],2,'売り手が出す量を供給という。','売る側に注目。'),
q('M03',B,'需要が増え、供給が同じなら価格は一般にどうなる？',['上がる','下がる','必ず0円になる','変わらない'],0,'欲しい人が増えると価格は上がりやすい。','買いたい人が増える。'),
q('M04',B,'供給が増え、需要が同じなら価格は一般にどうなる？',['上がる','下がる','2倍になる','決められない'],1,'商品が多く出回ると価格は下がりやすい。','品物が余りやすい。'),
q('M05',B,'市場で需要と供給の関係から決まりやすいものは？',['価格','法律','選挙区','税率'],0,'市場価格は需要と供給の影響を受ける。','値札に関係する。'),
q('M06',B,'店どうしが客を得ようと工夫し合うことは？',['競争','独占','納税','預金'],0,'企業間の競争は価格や品質の改善につながる。','ライバル店との関係。'),
q('M07',B,'商品を買って使う活動は？',['生産','消費','投資','輸出'],1,'商品やサービスを使うことが消費。','買う側の活動。'),
q('M08',B,'商品やサービスを作り出す活動は？',['生産','消費','貯蓄','納税'],0,'財やサービスを作ることが生産。','作る側。'),
q('M09',B,'少ない品物を求める人が多いとき起こりやすいのは？',['値下がり','値上がり','供給の消滅','需要の消滅'],1,'需要が供給を上回ると値上がりしやすい。','欲しい人が多い。'),
q('M10',B,'豊作で野菜の供給が大幅に増えた。価格は？',['上がりやすい','下がりやすい','必ず同じ','法律で禁止'],1,'需要が同じなら供給増で価格は下がりやすい。','店に野菜が増える。'),
q('M11',B,'人気が急上昇した商品の需要は？',['増える','減る','消える','供給になる'],0,'買いたい人が増えるので需要は増える。','人気＝買いたい人。'),
q('M12',B,'原料不足で生産量が減った。供給は？',['増える','減る','需要になる','変わらない'],1,'市場に出せる量が減るため供給は減る。','作れる量に注目。'),
q('M13',B,'消費者が商品を選ぶときの情報として適切なのは？',['価格や品質','議員数だけ','天気だけ','店名だけ'],0,'価格・品質・安全性などを比べて選ぶ。','比べる材料。'),
q('M14',B,'同じ商品を複数の店が売る利点は？',['選択肢が増える','価格が必ず同じ','品質が必ず下がる','商品が消える'],0,'競争により消費者の選択肢が増える。','競争のよさ。'),
q('M15',B,'商品に問題があったとき消費者を守る考えは？',['消費者保護','独占保護','供給停止','無条件購入'],0,'安全や適正表示など消費者を守る必要がある。','買う人の権利。'),
q('M16',B,'契約とは何か？',['当事者どうしの約束','国会の選挙','銀行の建物','商品の広告'],0,'売買などで当事者が合意した約束が契約。','合意した約束。'),
q('M17',B,'店で商品を買う行為で成立するものは？',['売買契約','国際条約','条例','労働組合'],0,'商品と代金を交換する合意は売買契約。','買い物の約束。'),
q('M18',B,'市場経済で生産量を考える手がかりは？',['消費者の需要','裁判官の人数','憲法改正','選挙年齢'],0,'企業は需要を見て生産量を判断する。','売れそうな量。'),
q('M19',B,'値段が高すぎて売れ残った。店が取りやすい行動は？',['値下げ','供給を無限に増やす','需要を禁止','契約をなくす'],0,'売れ残りを減らすため値下げが考えられる。','買いやすくする。'),
q('M20',S,'猛暑で飲料の需要が増えたが供給は同じ。最も起こりやすいのは？',['価格上昇','価格下落','生産禁止','需要減少'],0,'需要増に供給が追いつかないと価格は上がりやすい。','需要曲線の変化。'),
q('M21',S,'新技術で生産費が下がり供給が増えた。価格は？',['下がりやすい','上がりやすい','必ず不変','消費が禁止'],0,'供給増は価格を下げる方向に働く。','多く作れる。'),
q('M22',S,'一社だけが商品を供給する状態に近いのは？',['独占','競争','分業','消費'],0,'一社が市場を支配する状態を独占という。','ライバルがいない。'),
q('M23',S,'競争が弱まり独占が進むと心配されることは？',['価格や条件が一方的になる','必ず値下がりする','選択肢が増え続ける','税が消える'],0,'競争が働かず消費者に不利な条件となる恐れがある。','消費者の選択肢。'),
q('M24',S,'広告を見るとき最も大切な姿勢は？',['根拠や条件も確認する','必ず信じる','値段だけ見る','友達の意見を禁止する'],0,'表示条件や根拠を確かめ主体的に選ぶ。','情報を確かめる。'),
q('M25',S,'需要も供給も同時に増えた場合、価格は？',['変化の大きさによる','必ず上がる','必ず下がる','必ず0円'],0,'双方の増え方により価格の結果は異なる。','二つの力を比べる。'),
q('M26',S,'品不足時に価格が上がることで起こり得る動きは？',['企業が増産を考える','全企業が生産をやめる','需要が必ず増える','契約が消える'],0,'高い価格は供給を増やす動機になり得る。','売り手の判断。'),
q('M27',S,'消費者の選択が企業に与える影響は？',['商品改善のきっかけになる','影響しない','法律を直接制定する','税率を決める'],0,'売れ行きは企業の商品や生産の判断に影響する。','購入は意思表示。'),
q('M28',S,'災害直後の必需品価格について必要な視点は？',['市場の働きと生活保護の両方','利益だけ','需要だけ','供給を無視'],0,'通常の価格調整だけでなく公平・生活保障も必要。','非常時の暮らし。'),
q('M29',S,'市場経済を最もよく表す説明は？',['需要と供給を通じ資源配分が調整される','国が全商品を生産する','価格が常に固定される','契約を使わない'],0,'価格を手がかりに生産と消費が調整される。','価格の役割。')],
 company:[
q('C01',B,'企業の主な活動は？',['財やサービスの生産','法律の制定','裁判','選挙管理'],0,'企業は財やサービスを生産・提供する。','商品やサービスを作る。'),
q('C02',B,'企業が売上から費用を引いて得るものは？',['利益','税率','需要','預金'],0,'売上－費用が利益となる。','もうけを表す語。'),
q('C03',B,'期間を定めず、一般に安定した雇用を目指す働き方は？',['正規雇用','非正規雇用','失業','分業'],0,'正規雇用は一般に雇用期間を定めない働き方。','長く働く形に注目。'),
q('C04',B,'パートやアルバイトなどに多い雇用形態は？',['非正規雇用','正規雇用だけ','終身雇用','完全雇用'],0,'パート・アルバイト・派遣などは非正規雇用に含まれる。','働く期間や時間が多様。'),
q('C05',B,'働く人が企業へ提供するものは？',['労働力','法律','通貨発行','裁判'],0,'労働者は労働力を提供し賃金を得る。','働く力。'),
q('C06',B,'労働の対価として受け取るものは？',['賃金','株式市場','税率','需要'],0,'働いた対価が賃金。','給料。'),
q('C07',B,'仕事を分担して生産することは？',['分業','独占','納税','消費'],0,'工程を分けて担当するのが分業。','役割を分ける。'),
q('C08',B,'企業が他社と協力して得意分野を担当することは？',['協業','選挙','裁判','預金'],0,'得意分野を生かす協力で効率化できる。','一緒に仕事。'),
q('C09',B,'会社が商品を売って得た金額は？',['売上','費用','税率','利子'],0,'販売で得た総額が売上。','売った金額。'),
q('C10',B,'原料代や賃金など生産にかかる金額は？',['費用','需要','利益','株主'],0,'生産のために支払う金額が費用。','かかったお金。'),
q('C11',B,'企業が利益を得るため必要なのは？',['消費者に選ばれる商品','選挙で当選','裁判で勝つ','紙幣を発行'],0,'需要に合う価値を提供することが基本。','買ってもらう。'),
q('C12',B,'企業が新しい技術や商品を生み出す活動は？',['技術革新','地方自治','司法審査','納税'],0,'新技術などによる革新をイノベーションともいう。','新しく改良。'),
q('C13',B,'企業が法律やルールを守ることは？',['法令順守','価格独占','需要停止','預金保護'],0,'法令を守ることは企業の基本的責任。','コンプライアンス。'),
q('C14',B,'企業が環境や地域にも配慮する考えは？',['社会的責任','利益の禁止','競争の廃止','選挙運動'],0,'企業には社会や環境への責任もある。','CSR。'),
q('C15',B,'労働条件をよくするため労働者がつくる団体は？',['労働組合','株式会社','裁判所','銀行'],0,'労働組合は労働条件の維持改善を目指す。','働く人の団体。'),
q('C16',B,'労働者に認められた三つの権利の総称は？',['労働三権','三権分立','新三要件','地方三役'],0,'団結権・団体交渉権・団体行動権。','働く人の権利。'),
q('C17',B,'安全に働ける環境を整える責任を負うのは？',['企業','消費者だけ','裁判所だけ','外国だけ'],0,'使用者は安全な労働環境を整える必要がある。','雇う側の責任。'),
q('C18',B,'家計から企業へ向かう流れは？',['消費支出','賃金','貸出金だけ','税金だけ'],0,'家計は商品購入代金を企業へ支払う。','買い物のお金。'),
q('C19',B,'企業から家計へ向かう代表的な流れは？',['賃金','消費支出','投票','条例'],0,'企業は労働の対価として賃金を払う。','給料の向き。'),
q('C20',S,'売上100万円、費用80万円。利益は？',['20万円','80万円','100万円','180万円'],0,'100－80＝20万円。','売上から費用を引く。'),
q('C21',S,'ワーク・ライフ・バランスを表すのは？',['仕事と生活を両立させる','長時間労働を続ける','休暇をすべてなくす','賃金だけで働き方を決める'],0,'仕事と生活の調和を図る考え方。','働く時間以外の生活も大切。'),
q('C22',S,'生産性が上がるとは？',['同じ時間でより多く生産できる','必ず労働時間が増える','売上が0になる','需要が消える'],0,'投入に対する産出が増えること。','効率に注目。'),
q('C23',S,'企業が安さだけを求め安全確認を省く問題は？',['社会的責任に反する','競争の理想','消費者保護になる','労働三権になる'],0,'利益と安全・法令順守の両立が必要。','企業の責任。'),
q('C24',S,'赤字が続く企業がまず見直す組合せは？',['売上と費用','選挙区と議席','需要と憲法','裁判と条例'],0,'利益は売上と費用の差なので両方を確認する。','利益の式。'),
q('C25',S,'分業の長所として適切なのは？',['得意分野で効率を高められる','全員が全工程を担当する','責任が消える','需要がなくなる'],0,'専門化で効率や技能を高めやすい。','役割分担の効果。'),
q('C26',S,'労働組合と企業が賃金について話し合う権利は？',['団体交渉権','団結権だけ','裁判権','参政権'],0,'使用者と交渉する権利が団体交渉権。','交渉に注目。'),
q('C27',S,'企業が設備投資をする目的として適切なのは？',['生産力や効率を高める','消費を禁止する','税をなくす','銀行を閉じる'],0,'機械・設備を導入して将来の生産を高める。','工場の機械。'),
q('C28',S,'企業の利益と社会的責任の関係は？',['両立を目指す','必ず対立し両立しない','利益だけでよい','責任だけで経営できる'],0,'持続的経営には利益と責任の両方が必要。','長く続く企業。'),
q('C29',S,'家計と企業の関係を正しく表すのは？',['家計は労働を提供し商品を買う','家計が法律を制定する','企業が選挙を行う','企業だけで経済が完結する'],0,'家計は労働者・消費者として企業と関わる。','二つの役割。')],
 finance:[
q('F01',B,'銀行にお金を預けることは？',['預金','貸出','納税','投資'],0,'銀行へ預けるお金が預金。','通帳に入れる。'),
q('F02',B,'銀行がお金を必要な人や企業に貸すことは？',['貸出','預金','消費','生産'],0,'預金などをもとに資金を貸し出す。','銀行から借りる。'),
q('F03',B,'お金を借りたとき元金に加えて払うものは？',['利子','税率','需要','株主'],0,'借りた対価として利子を支払う。','借りたお金の使用料。'),
q('F04',B,'お金を貸し借りする仕組みを何という？',['金融','市場価格','分業','財政'],0,'資金を融通する仕組みが金融。','資金の流れ。'),
q('F05',B,'日本の中央銀行は？',['日本銀行','財務省','国会','最高裁判所'],0,'日本銀行が中央銀行。','紙幣に名前がある。'),
q('F06',B,'日本銀行の役割の一つは？',['紙幣を発行する','法律を制定する','裁判を行う','市長を選ぶ'],0,'日本銀行券を発行する。','発券銀行。'),
q('F07',B,'日本銀行が一般の銀行へ果たす役割は？',['銀行の銀行','学校の銀行','企業の議会','裁判所の銀行'],0,'金融機関との資金決済などを担う。','銀行を相手にする。'),
q('F08',B,'日本銀行が国の資金を扱う役割は？',['政府の銀行','企業の工場','地方議会','消費者庁'],0,'国庫金の受払などを行う。','国のお金。'),
q('F09',B,'現金を使わずデータで支払う方法は？',['キャッシュレス決済','物々交換だけ','納税','株主総会'],0,'カードやコード決済などが該当する。','スマホやカード。'),
q('F10',B,'家計が将来のためお金を残すことは？',['貯蓄','消費','生産','供給'],0,'使わずに蓄えることが貯蓄。','将来に残す。'),
q('F11',B,'企業が工場や機械に資金を使うことは？',['設備投資','預金だけ','消費税','選挙'],0,'将来の生産のため設備へ資金を使う。','機械を導入。'),
q('F12',B,'銀行は預金の一部を主に何に使う？',['貸出','廃棄','投票','裁判'],0,'企業や家計への貸出に回す。','資金を必要な所へ。'),
q('F13',B,'借りたお金について大切なのは？',['返済計画を立てる','必ず多く借りる','利子を無視する','返さない'],0,'返済額・期間・利子を確認する。','返せるか考える。'),
q('F14',B,'決済の意味は？',['代金の支払いを完了すること','商品を作ること','選挙を行うこと','法律を作ること'],0,'取引代金を支払い済みにすること。','支払い完了。'),
q('F15',B,'預金者から銀行へ流れるものは？',['資金','商品','法律','票'],0,'預金として資金が集まる。','お金の流れ。'),
q('F16',B,'銀行から企業へ流れる代表的なものは？',['貸出資金','投票用紙','条例','商品だけ'],0,'銀行は企業の事業資金を貸し出す。','借入金。'),
q('F17',B,'金融機関が果たす橋渡しは？',['余裕資金と必要資金を結ぶ','国会と裁判所を結ぶ','需要を禁止する','企業をなくす'],0,'貯蓄を資金需要へつなぐ。','お金の余る所と足りない所。'),
q('F18',B,'お金の三つの働きに含まれるのは？',['交換の手段','法律の制定','裁判','選挙'],0,'交換・価値尺度・価値保存の働きがある。','物を買える。'),
q('F19',B,'同じ100円で商品の価値を比べられる働きは？',['価値の尺度','団結権','地方自治','供給'],0,'価格で価値を共通に表せる。','値段で比較。'),
q('F20',S,'銀行が預金を企業へ貸すことで期待されるのは？',['生産や雇用に資金が回る','需要が消える','選挙が増える','税がなくなる'],0,'資金が事業活動へ回り経済を支える。','企業の活動資金。'),
q('F21',S,'借入額10万円、利子1万円。返済総額は？',['11万円','10万円','9万円','1万円'],0,'元金10万円＋利子1万円＝11万円。','元金と利子を足す。'),
q('F22',S,'キャッシュレス決済の注意点は？',['使った額を把握する','現金より必ず無料','情報管理は不要','返済は不要'],0,'支出感覚や不正利用、後払いに注意する。','見えにくい支出。'),
q('F23',S,'金利が上がると借り手に一般に起こることは？',['利子負担が増える','返済額が必ず減る','借金が消える','預金が禁止される'],0,'同じ条件なら支払う利子が増える。','借りる費用。'),
q('F24',S,'中央銀行が物価の安定を目指す理由は？',['暮らしと経済の混乱を抑える','選挙をなくす','企業だけを守る','価格を全部同じにする'],0,'急激な物価変動は生活や取引を不安定にする。','安定した取引。'),
q('F25',S,'預金・貸出の正しい順は？',['家計→銀行→企業','銀行→家計→日本銀行だけ','企業→裁判所→家計','国会→銀行→選挙'],0,'家計等の預金が銀行を通じ資金需要へ回る。','マネールート。'),
q('F26',S,'日本銀行が金利を引き下げると期待される動きは？',['借入や投資を促す','借入を必ず禁止する','紙幣を廃止する','輸出入を止める'],0,'金利低下は企業や家計がお金を借りやすくする方向に働く。','借りる費用に注目。'),
q('F27',S,'金融が止まると企業に起こりやすいのは？',['必要資金を得にくい','商品が必ず増える','費用が0になる','法律が消える'],0,'設備や運転資金が不足し活動しにくくなる。','資金の橋が止まる。'),
q('F28',S,'安全な家計管理として適切なのは？',['収入・支出・貯蓄を把握する','支出を記録しない','限度なく借りる','利子を見ない'],0,'収支と将来資金を見通すことが基本。','家計簿の考え。'),
q('F29',S,'お金の価値保存の働きは？',['将来の支払いに備えて保管できる','必ず価値が上がる','法律を保存する','商品を生産する'],0,'価値を時間をこえて持ち越せる。','今使わず後で使う。')],
 public:[
q('P01',B,'円と外国通貨を交換するときの比率を何という？',['外国為替相場','市場価格','利子率','失業率'],0,'通貨を交換する比率が外国為替相場。','円とドルの交換。'),
q('P02',B,'1ドル150円から120円になった状態は？',['円高','円安','インフレ','デフレ'],0,'少ない円で1ドルと交換できるので円高。','1ドルに必要な円が減った。'),
q('P03',B,'1ドル100円から150円になった状態は？',['円安','円高','好景気','不景気'],0,'1ドルを得るのに多くの円が必要なので円安。','1ドルに必要な円が増えた。'),
q('P04',B,'円高のとき、一般に値下がりしやすいものは？',['輸入品','日本からの輸出品','国内の賃金すべて','税金すべて'],0,'同じ外国価格なら少ない円で輸入できる。','海外から買う品物。'),
q('P05',B,'円安のとき、一般に値上がりしやすいものは？',['輸入品','日本円そのもの','国内旅行だけ','公共施設'],0,'外国の商品を買うために多くの円が必要になる。','海外から買う品物。'),
q('P06',B,'円高のとき日本からの海外旅行は一般にどうなる？',['割安になりやすい','割高になりやすい','必ず禁止される','変化しない'],0,'円をより多くの外国通貨に交換しやすい。','現地で使える外貨に注目。'),
q('P07',B,'円安で有利になりやすい日本の企業は？',['輸出企業','輸入だけを行う企業','海外商品を買う企業だけ','すべて同じ'],0,'海外で得た外貨を多くの円に換えやすい。','海外へ売る企業。'),
q('P08',B,'外国から商品を買うことは？',['輸入','輸出','貯蓄','貸出'],0,'外国の商品を国内へ買い入れることが輸入。','海外から入れる。'),
q('P09',B,'外国へ商品を売ることは？',['輸出','輸入','消費','預金'],0,'国内の商品を外国へ売ることが輸出。','海外へ出す。'),
q('P10',B,'物価が継続して上がる状態は？',['インフレーション','デフレーション','円高','失業'],0,'物価が継続的に上昇する状態がインフレ。','値段が上がり続ける。'),
q('P11',B,'物価が継続して下がる状態は？',['デフレーション','インフレーション','円安','好景気'],0,'物価が継続的に下落する状態がデフレ。','値段が下がり続ける。'),
q('P12',B,'景気がよいときに一般に増えやすいものは？',['生産や雇用','失業だけ','商品の売れ残りだけ','倒産だけ'],0,'需要が活発になり生産や雇用が増えやすい。','会社が忙しくなる。'),
q('P13',B,'景気が悪いときに一般に起こりやすいのは？',['失業の増加','売上の急増','求人の急増','消費の急増'],0,'企業活動が弱まり雇用が減りやすい。','仕事が減る。'),
q('P14',B,'好景気と不景気が繰り返される動きを何という？',['景気変動','分業','預金','独占'],0,'経済活動の強弱が変化することが景気変動。','景気の波。'),
q('P15',B,'物価の動きを安定させる役割を担う銀行は？',['日本銀行','地方銀行だけ','信用金庫だけ','世界銀行だけ'],0,'日本銀行は物価の安定を目指して金融政策を行う。','中央銀行。'),
q('P16',B,'景気が悪いとき日銀が金利を下げる主な狙いは？',['借入や投資を促す','消費を禁止する','輸入を止める','税金を増やす'],0,'借りやすくして経済活動を支える。','お金を借りる費用。'),
q('P17',B,'物価上昇が激しいとき日銀が金利を上げる主な狙いは？',['過熱を抑える','借入を増やす','円を廃止する','商品を配給する'],0,'借入や需要を抑え、物価の過度な上昇を防ぐ。','景気にブレーキ。'),
q('P18',B,'円高で有利になりやすい人は？',['海外旅行へ行く人','日本から輸出する企業だけ','外国から来る旅行者だけ','全員必ず同じ'],0,'円の価値が高まり外貨へ換えやすい。','円を外貨へ交換。'),
q('P19',B,'円安で日本を訪れる外国人旅行者に起こりやすいことは？',['日本での買い物が割安になる','日本円が買えなくなる','必ず旅行できない','価格がすべて同じになる'],0,'外国通貨から多くの円に換えやすい。','外国側から円を見る。'),
q('P20',S,'1ドル100円の商品が為替だけで1ドル150円になった。日本での価格は？',['上がりやすい','下がりやすい','必ず同じ','0円になる'],0,'同じ1ドルの商品を買うのに必要な円が増える。','輸入価格を円で考える。'),
q('P21',S,'円高が輸出企業に不利になりやすい理由は？',['海外で価格競争力が下がりやすい','輸入原料が必ず高くなる','国内賃金が消える','商品を作れなくなる'],0,'外国通貨で見た日本製品の価格が高くなりやすい。','海外の買い手から見る。'),
q('P22',S,'円安で輸入食品が値上がりした。家計への影響は？',['同じ量を買う負担が増える','収入が必ず増える','支出が必ず減る','貯蓄が自動で増える'],0,'輸入価格上昇が生活費を押し上げる。','買い物の負担。'),
q('P23',S,'デフレが続くと企業に起こりやすい悪循環は？',['売上減少から賃金や雇用を抑える','売上が必ず増える','投資が必ず急増する','物価が急上昇する'],0,'価格と売上の低下が賃金・雇用を弱め、消費をさらに減らし得る。','安ければ必ずよいとは限らない。'),
q('P24',S,'急激なインフレで最も困りやすいのは？',['収入が変わらない家計','商品を高く売れる企業だけ','借金がない人だけ','輸出企業だけ'],0,'収入が同じまま物価が上がると買える量が減る。','実際に買える量。'),
q('P25',S,'不景気のとき企業が設備投資を控える理由は？',['将来の売上に不安がある','金利が必ず0になる','需要が必ず増える','輸出が禁止される'],0,'需要の見通しが弱いと投資に慎重になる。','商品が売れる見込み。'),
q('P26',S,'日銀が行う金融政策の目的として適切なのは？',['物価と経済の安定','国会議員を選ぶ','税率を決める','企業の社長を決める'],0,'金利などを通じ物価や経済の安定を目指す。','中央銀行の仕事。'),
q('P27',S,'円安の恩恵と負担を正しく表すのは？',['輸出に追い風、輸入に負担','輸入に追い風、輸出に負担','全員に同じ影響','為替と貿易は無関係'],0,'円安は輸出収入を円換算で増やしやすい一方、輸入費を上げる。','売る側と買う側。'),
q('P28',S,'景気と雇用の関係として一般に適切なのは？',['好景気では求人が増えやすい','不景気では求人が必ず増える','景気と雇用は無関係','好景気では生産が止まる'],0,'企業活動が活発になると働き手を求めやすい。','会社の忙しさ。'),
q('P29',S,'景気対策を考えるとき確認したい組合せは？',['物価・雇用・消費','天気だけ','人口だけ','為替だけ'],0,'複数の指標を見て景気の状態を判断する。','一つの数字だけで決めない。')]
};

function validateQuestionBank(){
  const all=Object.values(QUESTION_BANK).flat();
  const counts={total:all.length,basic:all.filter(x=>x.difficulty===B).length,standard:all.filter(x=>x.difficulty===S).length};
  if(counts.total!==116||counts.basic!==76||counts.standard!==40) throw new Error(JSON.stringify(counts));
  for(const [district,items] of Object.entries(QUESTION_BANK)){
    if(items.length!==29||items.filter(x=>x.difficulty===B).length!==19) throw new Error(`${district}: invalid balance`);
    items.forEach(x=>{if(x.choices.length!==4||x.answer<0||x.answer>3) throw new Error(`${x.id}: invalid`);});
  }
  return counts;
}


function shuffle(items, random=Math.random){
  const a=[...items];
  for(let i=a.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}
  return a;
}

function prepareQuestion(source, random=Math.random){
  const choices=source.choices.map((text,index)=>({text,isCorrect:index===source.answer}));
  const mixed=shuffle(choices,random);
  return {...source,choices:mixed.map(x=>x.text),answer:mixed.findIndex(x=>x.isCorrect)};
}

function buildDistrictRun(district,{wrongIds=[],previousIds=[]}={},random=Math.random){
  const bank=QUESTION_BANK[district];
  if(!bank) throw new Error(`Unknown district: ${district}`);
  const previous=new Set(previousIds),wrong=new Set(wrongIds),selected=[];
  for(const item of shuffle(bank.filter(q=>wrong.has(q.id)),random)){
    const cap=item.difficulty==='basic'?3:2;
    if(selected.length<2&&selected.filter(q=>q.difficulty===item.difficulty).length<cap) selected.push(item);
  }
  const fill=difficulty=>{
    const target=difficulty==='basic'?3:2;
    const existing=selected.filter(q=>q.difficulty===difficulty).length;
    const candidates=shuffle(bank.filter(q=>q.difficulty===difficulty&&!selected.includes(q)),random)
      .sort((a,b)=>Number(previous.has(a.id))-Number(previous.has(b.id)));
    selected.push(...candidates.slice(0,Math.max(0,target-existing)));
  };
  fill('basic'); fill('standard');
  while(selected.length<5){
    const extra=shuffle(bank.filter(q=>!selected.includes(q)),random).sort((a,b)=>Number(previous.has(a.id))-Number(previous.has(b.id)))[0];
    if(!extra) break; selected.push(extra);
  }
  return shuffle(selected.slice(0,5),random).map(q=>prepareQuestion(q,random));
}

function rankFor(correct,total=5){
  if(total===5) return correct===5?'S':correct===4?'A':correct===3?'B':'C';
  const rate=total?correct/total:0;
  return rate>=.9?'S':rate>=.8?'A':rate>=.6?'B':'C';
}

const KEY='hiropon_ch5_save_v2';
const empty=()=>({schemaVersion:4,cleared:[],wrongIds:[],previousRuns:{},districtRecords:{},finalCleared:false,finalBest:0,bonusBest:0});
function loadState(){
  try{
    const value=JSON.parse(localStorage.getItem(KEY));
    if(!value)return empty();
    if(value.schemaVersion===3)return {...empty(),...value,schemaVersion:4};
    return value.schemaVersion===4?{...empty(),...value}:empty();
  }catch{return empty();}
}
function saveState(state){localStorage.setItem(KEY,JSON.stringify(state));}
function clearState(){localStorage.removeItem(KEY);}

const MARKET_ROUNDS=[
  {label:'野菜不足',text:'台風で野菜の入荷が減った。需要は同じ。価格は？',answer:'up',effect:18,explanation:'供給が減ると、価格は上がりやすい。'},
  {label:'パン大豊作',text:'小麦が豊作でパンの供給が増えた。需要は同じ。価格は？',answer:'down',effect:-16,explanation:'供給が増えると、価格は下がりやすい。'},
  {label:'限定スニーカー',text:'動画で話題になり、欲しい人が急増した。供給は同じ。価格は？',answer:'up',effect:20,explanation:'需要が増えると、価格は上がりやすい。'}
];

const WORK_PLANS=[
  {id:'overtime',title:'残業で一気に生産',tag:'生産＋3／生活－4',productivity:3,life:-4,answer:false,reaction:'勉三「目の下にクマが就職した…」'},
  {id:'balanced',title:'交代制＋有給を確保',tag:'生産＋2／生活＋3',productivity:2,life:3,answer:true,reaction:'ヒロポン「仕事も生活も、どちらも回ったぞ！」'},
  {id:'unstable',title:'全員を短期契約にする',tag:'費用－2／安心－4',productivity:1,life:-4,answer:false,reaction:'勉三「来月の予定が真っ白だ…！」'}
];

const MONEY_ROUTE=[
  {id:'deposit',title:'家計の預金',sub:'余裕資金を預ける'},
  {id:'bank',title:'銀行',sub:'資金を集める'},
  {id:'loan',title:'企業へ貸出',sub:'必要な資金を届ける'},
  {id:'work',title:'生産・雇用',sub:'経済活動が動く'}
];

const FX_CARDS=[
  {id:'trip',title:'海外旅行',sub:'外貨へ交換',side:'high',art:'plane',explanation:'円高では少ない円で多くの外貨に交換しやすい。'},
  {id:'cheese',title:'輸入チーズ',sub:'海外から購入',side:'high',art:'cheese',explanation:'円高では輸入品が割安になりやすい。'},
  {id:'car',title:'輸出自動車',sub:'海外へ販売',side:'low',art:'car',explanation:'円安では海外で得た外貨を多くの円に換えやすい。'},
  {id:'tourist',title:'訪日旅行',sub:'外国人が日本へ',side:'low',art:'bag',explanation:'円安では外国人旅行者にとって日本での支出が割安になりやすい。'}
];

const FINAL_CRISIS=[
  {guide:'渋沢栄一',title:'物価急上昇！',text:'買い物客は多いのに商品が不足。街の物価が上がり続けている。',choices:['金利を上げ、過熱を抑える','金利を下げ、需要をさらに増やす','何もしない'],answer:0,core:'価格コア',explanation:'急激なインフレには、金利を上げて需要の過熱を抑える方向が考えられる。'},
  {guide:'津田梅子',title:'働く人が限界！',text:'売上は増えたが、長時間労働で欠勤が続いている。',choices:['交代制と休暇を整える','全員を毎日残業させる','休憩をなくす'],answer:0,core:'生産コア',explanation:'持続的な生産には、働く人の生活と安全を守る必要がある。'},
  {guide:'北里柴三郎',title:'銀行の流れが停止！',text:'家計の預金が企業の設備投資へ届かない。',choices:['銀行の貸出ルートを復旧','企業へ投票用紙を送る','預金をすべて止める'],answer:0,core:'循環コア',explanation:'銀行は余裕資金を必要な企業へ橋渡しする。'},
  {guide:'ヒロポン',title:'円安ショック！',text:'輸入原料が値上がりし、家計と企業の負担が増えている。',choices:['輸入負担と輸出効果の両方を見る','円安は全員に得だと決める','為替と生活は無関係とする'],answer:0,core:'為替コア',explanation:'円安には輸出への追い風と、輸入価格上昇の両面がある。'}
];

const BONUS_WEEK=[
  {day:'月',title:'放課後バイト',text:'2時間働けそう。どうする？',choices:[{label:'2時間働く',money:2400,energy:-12,note:'賃金を得た！'},{label:'今日は休む',money:0,energy:10,note:'体力を回復！'}]},
  {day:'火',title:'新作ゲーム発売',text:'欲しかったゲームが4,000円。',choices:[{label:'すぐ買う',money:-4000,energy:5,note:'満足！でも残高が…'},{label:'今週は見送る',money:0,energy:-2,note:'貯金を優先した。'}]},
  {day:'水',title:'円高ニュース',text:'円高になり、海外製イヤホンが値下げ。',choices:[{label:'必要なので買う',money:-2500,energy:3,note:'円高の恩恵を体験。'},{label:'価格だけ確認',money:0,energy:0,note:'円高と輸入品を確認。'}]},
  {day:'木',title:'追加シフト',text:'店長「急だけど入れる？」',choices:[{label:'1時間だけ働く',money:1200,energy:-7,note:'無理のない追加勤務。'},{label:'4時間働く',money:4800,energy:-28,note:'稼いだが、かなり疲れた！'}]},
  {day:'金',title:'友達と寄り道',text:'カフェ代は700円。',choices:[{label:'一緒に行く',money:-700,energy:8,note:'生活の満足度も大切。'},{label:'まっすぐ帰る',money:0,energy:4,note:'今日は節約。'}]},
  {day:'土',title:'円安へ変化',text:'輸入お菓子が値上がりしている。',choices:[{label:'国産品を選ぶ',money:-300,energy:2,note:'価格を比べて選択。'},{label:'輸入品を買う',money:-650,energy:3,note:'円安の負担を体験。'}]},
  {day:'日',title:'給料と貯金',text:'今週の残金をどうする？',choices:[{label:'半分を貯金',money:0,energy:5,note:'消費と貯蓄のバランス！',saveRate:.5},{label:'全部使う',money:-1500,energy:8,note:'今は楽しい。でも備えは？',saveRate:0}]}
];

let enabled=true,context,currentMusic=null,currentKind='';
const tracks={
  stopped:'audio__city_stopped.mp3',
  restored:'audio__city_restored.mp3',
  final:'audio__final_battle.mp3'
};
const jingles={core:'audio__core_unlock.mp3'};

function audioContext(){
  const AudioCtx=window.AudioContext||window.webkitAudioContext;
  if(!AudioCtx)return null;
  context??=new AudioCtx();
  if(context.state==='suspended')context.resume();
  return context;
}

function toggleSound(){
  enabled=!enabled;
  if(currentMusic)currentMusic.muted=!enabled;
  if(enabled)audioContext();
  return enabled;
}

function soundOn(){return enabled;}

function playMusic(kind='stopped'){
  if(currentKind===kind&&currentMusic){if(enabled)currentMusic.play().catch(()=>{});return;}
  const old=currentMusic;
  currentKind=kind;
  const next=new Audio(tracks[kind]);
  next.loop=true;next.preload='none';next.volume=0;next.muted=!enabled;
  currentMusic=next;
  next.play().catch(()=>{});
  let step=0;
  const fade=setInterval(()=>{
    step++;
    next.volume=Math.min(kind==='restored'?.2:kind==='final'?.27:.24,step*.02);
    if(old)old.volume=Math.max(0,old.volume-.025);
    if(step>=12){clearInterval(fade);if(old){old.pause();old.currentTime=0;}}
  },70);
}

function playJingle(kind='core'){
  if(!enabled||!jingles[kind])return;
  const clip=new Audio(jingles[kind]);
  clip.preload='none';clip.volume=.38;clip.play().catch(()=>{});
}

function tone(kind='ok'){
  if(!enabled)return;
  try{
    const ctx=audioContext();if(!ctx)return;
    const patterns={
      select:[[420,.05],[560,.07]],
      ok:[[660,.08],[880,.13]],
      ng:[[220,.1],[160,.16]],
      core:[[440,.08],[660,.09],[990,.22]],
      unlock:[[392,.08],[523,.08],[659,.1],[784,.24]],
      clear:[[523,.1],[659,.1],[784,.1],[1047,.32]]
    };
    const notes=patterns[kind]||patterns.ok;let at=ctx.currentTime;
    for(const [frequency,duration] of notes){
      const osc=ctx.createOscillator(),gain=ctx.createGain();
      osc.type=kind==='ng'?'square':'triangle';osc.frequency.value=frequency;
      osc.connect(gain).connect(ctx.destination);
      gain.gain.setValueAtTime(.0001,at);gain.gain.exponentialRampToValueAtTime(.12,at+.012);gain.gain.exponentialRampToValueAtTime(.0001,at+duration);
      osc.start(at);osc.stop(at+duration+.02);at+=duration*.82;
    }
  }catch{}
}






const districts={
  market:{title:'市場区',core:'価格コア',mission:'需要と供給を読み、景気メーターを動かそう。',gear:'gears__gear_market.svg',bg:'backgrounds__market_stopped_v1.webp'},
  company:{title:'企業区',core:'生産コア',mission:'働く人と会社の両方が続く働き方をつくろう。',gear:'gears__gear_company.svg',bg:'backgrounds__company_stopped_v1.webp'},
  finance:{title:'金融区',core:'循環コア',mission:'預金から生産・雇用まで、お金のパイプをつなごう。',gear:'gears__gear_finance.svg',bg:'backgrounds__finance_stopped_v1.webp'},
  public:{title:'為替港',core:'為替コア',mission:'カードを見て、円高・円安のゲートへ仕分けよう。',gear:'gears__gear_public.svg',bg:'backgrounds__public_stopped_v1.webp'}
};
const opening=[
  {speaker:'ナレーション',title:'その日、都市の流れが止まった。',text:'値札は固まり、工場も銀行も港も完全停止。なぜか自動販売機だけが元気だった。'},
  {speaker:'北中勉三',title:'経済都市停止事件',text:'ジュースは買えるのに、財布が空っぽだ！ これはかなり重大な事件だぞ！'},
  {speaker:'ヒロポン',title:'そこは元からじゃ',text:'市場・企業・金融・為替。4つの経済コアが停止したのじゃ。'},
  {speaker:'北中勉三',title:'つまり僕の財布も復旧？',text:'4つの地区を動かせば、お金も仕事も商品も戻ってくるんだな！'},
  {speaker:'ヒロポン',title:'今回のミッション',text:'知識だけでは足りん。実際に動かし、経済のつながりを取り戻すのじゃ！'}
];

const saved=loadState();
const state={...saved,cleared:new Set(saved.cleared||[]),openingIndex:0,current:null,run:[],index:0,score:0,quizMode:'main',recoveryRun:[],recoveryIndex:0,questionAttempts:0,challengeStep:0,finalStage:0,finalAttempts:0,finalFirstTry:0,reviewRun:[],reviewIndex:0,bonusIndex:0,bonusMoney:5000,bonusEnergy:70,bonusSavings:0};
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];

function persist(){saveState({schemaVersion:4,cleared:[...state.cleared],wrongIds:state.wrongIds||[],previousRuns:state.previousRuns||{},districtRecords:state.districtRecords||{},finalCleared:!!state.finalCleared,finalBest:state.finalBest||0,bonusBest:state.bonusBest||0});}
function show(id){
  $$('.screen').forEach(x=>x.classList.toggle('is-active',x.id===id));
  if(id==='finalScreen')playMusic('final');
  else if(id==='clearScreen'||id==='bonusScreen'||(id==='mapScreen'&&state.finalCleared))playMusic('restored');
  else if(id!=='openingScreen')playMusic('stopped');
}
function makeChoices(root,items,onPick,className='quiz-choice'){root.innerHTML='';items.forEach((text,index)=>{const b=document.createElement('button');b.className=className;b.textContent=text;b.addEventListener('click',()=>onPick(index,b));root.append(b);});}
function shuffledItem(item){return prepareQuestion({...item,id:item.id||'stage',difficulty:item.difficulty||'standard'});}
function showReaction(text,who='benzo'){$('#characterReaction').hidden=false;$('#reactionFace').src=who==='hiropon'?'characters__hiropon.webp':'characters__benzo.webp';$('#reactionText').textContent=text;}

function renderOpening(){
  const scene=opening[state.openingIndex];$('#openingSpeaker').textContent=scene.speaker;$('#openingTitle').textContent=scene.title;$('#openingText').textContent=scene.text;
  $('#openingNext').textContent=state.openingIndex===0?'物語をはじめる':state.openingIndex===opening.length-1?'経済都市へ':'次へ';
  $('#openingDots').innerHTML=opening.map((_,i)=>`<i class="${i<=state.openingIndex?'on':''}"></i>`).join('');
  $('#openingBenzo').classList.toggle('is-speaking',scene.speaker==='北中勉三');$('#openingHiropon').classList.toggle('is-speaking',scene.speaker==='ヒロポン');
}
function advanceOpening(){playMusic('stopped');tone('select');if(state.openingIndex<opening.length-1){state.openingIndex++;renderOpening();}else show('mapScreen');}

function sync(){
  $('#gearCount').textContent=state.cleared.size;
  $$('.district-card').forEach(card=>{const id=card.dataset.open,record=state.districtRecords?.[id];card.classList.toggle('is-cleared',state.cleared.has(id));card.querySelector('em')?.remove();if(record)card.insertAdjacentHTML('beforeend',`<em>${record.rank}｜${record.best}/5</em>`);});
  $('#finalButton').disabled=state.cleared.size<4;$('#finalButton').textContent=state.cleared.size<4?`あと${4-state.cleared.size}地区でFINAL`:'FINAL「経済危機カードバトル」';
  if(state.finalCleared){$('#mapHeadline').textContent='経済都市、完全復旧！';$('#mapLead').textContent='市場・企業・金融・為替がつながり、人・もの・お金が動き始めた。';$('#mapScreen').classList.add('is-restored');}
}

function openDistrict(id){
  tone('select');const d=districts[id];state.current=id;$('#districtKicker').textContent='復旧ミッション';$('#districtTitle').textContent=d.title;$('#districtMission').textContent=d.mission;$('#coreName').textContent=d.core;$('#districtGear').src=d.gear;
  $('#restoreMessage').textContent=state.cleared.has(id)?'復旧済み。もう一度遊ぶと記録更新に挑戦できます。':'';$('#restoreButton').textContent='5問で操作キーを獲得';$('#restoreButton').hidden=false;$('#quizPanel').hidden=true;$('#districtChallenge').hidden=true;$('#characterReaction').hidden=true;
  $('#districtStage').style.backgroundImage=`linear-gradient(90deg,#000b,#0004),url('${d.bg}')`;$('#districtStage').style.backgroundSize='cover';$('#districtStage').style.minHeight='72vh';$('#districtStage').classList.remove('is-restoring');show('districtScreen');
}
function startQuiz(){
  const id=state.current;state.previousRuns??={};state.wrongIds??=[];state.run=buildDistrictRun(id,{wrongIds:state.wrongIds,previousIds:state.previousRuns[id]||[]});state.previousRuns[id]=state.run.map(q=>q.id);state.index=0;state.score=0;state.quizMode='main';$('#restoreButton').hidden=true;$('#quizPanel').hidden=false;$('#districtChallenge').hidden=true;$('#restoreMessage').textContent='';renderQuestion();persist();
}
function currentQuestion(){return state.quizMode==='main'?state.run[state.index]:state.recoveryRun[state.recoveryIndex];}
function renderQuestion(){
  const q=currentQuestion();state.questionAttempts=0;$('#quizCount').textContent=state.quizMode==='main'?`操作キー ${state.index+1}/5`:`復旧トレーニング ${state.recoveryIndex+1}/2`;$('#quizScore').textContent=state.quizMode==='main'?`初回正解 ${state.score}`:'2問確認';$('#quizPrompt').textContent=q.prompt;$('#quizFeedback').textContent='';$('#nextQuestion').hidden=true;makeChoices($('#quizChoices'),q.choices,(index,button)=>judgeQuiz(index,button));
}
function judgeQuiz(index,button){
  const q=currentQuestion();state.questionAttempts++;
  if(index===q.answer){if(state.quizMode==='main'&&state.questionAttempts===1){state.score++;state.wrongIds=state.wrongIds.filter(id=>id!==q.id);}$$('#quizChoices .quiz-choice').forEach((b,i)=>{b.disabled=true;if(i===q.answer)b.classList.add('is-correct');});$('#quizFeedback').textContent=`正解！ ${q.explanation}`;$('#nextQuestion').hidden=false;tone('ok');}
  else{button.classList.add('is-wrong');button.disabled=true;if(!state.wrongIds.includes(q.id))state.wrongIds.push(q.id);tone('ng');if(state.questionAttempts===1)$('#quizFeedback').textContent=`ヒント：${q.hint} もう一度！`;else{$$('#quizChoices .quiz-choice').forEach((b,i)=>{b.disabled=true;if(i===q.answer)b.classList.add('is-correct');});$('#quizFeedback').textContent=`答え：${q.choices[q.answer]}。${q.explanation}`;$('#nextQuestion').hidden=false;}}
  persist();
}
function advanceDistrictQuiz(){if(state.quizMode==='main'){state.index++;if(state.index<state.run.length)return renderQuestion();if(state.score<3)return startRecovery();return startDistrictChallenge();}state.recoveryIndex++;if(state.recoveryIndex<state.recoveryRun.length)return renderQuestion();startDistrictChallenge();}
function startRecovery(){state.quizMode='recovery';state.recoveryIndex=0;const missed=state.run.filter(q=>(state.wrongIds||[]).includes(q.id));state.recoveryRun=[...missed,...state.run].filter((q,i,a)=>a.findIndex(x=>x.id===q.id)===i).slice(0,2);renderQuestion();}

function startDistrictChallenge(){
  state.challengeStep=0;$('#quizPanel').hidden=true;$('#districtChallenge').hidden=false;$('#challengeContinue').hidden=true;$('#challengeFeedback').textContent='';$('#characterReaction').hidden=true;
  ({market:renderMarketGame,company:renderWorkGame,finance:renderMoneyGame,public:renderFxGame})[state.current]();
}
function completeChallenge(message,reaction,who='hiropon'){$('#challengeFeedback').textContent=message;$('#challengeContinue').hidden=false;showReaction(reaction,who);tone('unlock');}
function renderMarketGame(){
  const round=MARKET_ROUNDS[state.challengeStep];$('#challengeTitle').textContent='景気メーターを操作';$('#challengePrompt').textContent=`${state.challengeStep+1}/3　${round.label}：${round.text}`;
  $('#challengeGame').innerHTML=`<div class="market-meter"><div class="meter-scale"><span>安い</span><span>基準</span><span>高い</span></div><div class="meter-track"><i id="marketNeedle"></i></div><div class="market-controls"><button data-move="down">価格を下げる</button><button data-move="stay">そのまま</button><button data-move="up">価格を上げる</button></div></div>`;
  $$('[data-move]').forEach(b=>b.addEventListener('click',()=>{if(b.dataset.move!==round.answer){tone('ng');b.classList.add('is-wrong');$('#challengeFeedback').textContent='メーターがガタガタ！ 需要と供給のどちらが変化したか確認しよう。';return;}tone('ok');$('#marketNeedle').style.transform=`translateX(${round.effect*2}px)`;$('#challengeFeedback').textContent=round.explanation;state.challengeStep++;setTimeout(()=>{if(state.challengeStep<MARKET_ROUNDS.length)renderMarketGame();else completeChallenge('3つの価格変化を読み切った！','勉三「値札が動いた！ 僕のおこづかいは動かないけど！」');},650);}));
}
function renderWorkGame(){
  $('#challengeTitle').textContent='働き方プロデュース';$('#challengePrompt').textContent='生産を続けながら、働く人の生活も守れるプランを選ぼう。';$('#challengeGame').innerHTML=`<div class="worker-row"><div class="worker"><b>正規雇用</b><span>安定して働きたい</span></div><div class="worker"><b>アルバイト</b><span>学業とも両立したい</span></div><div class="worker"><b>子育て中</b><span>時間を調整したい</span></div></div><div class="plan-cards">${WORK_PLANS.map((p,i)=>`<button data-plan="${i}"><b>${p.title}</b><span>${p.tag}</span></button>`).join('')}</div>`;
  $$('[data-plan]').forEach(b=>b.addEventListener('click',()=>{const plan=WORK_PLANS[+b.dataset.plan];if(!plan.answer){tone('ng');b.classList.add('is-wrong');$('#challengeFeedback').textContent=plan.reaction;showReaction(plan.reaction);return;}b.classList.add('is-correct');completeChallenge('生産性と生活満足度が両方アップ！',plan.reaction,'hiropon');}));
}
function renderMoneyGame(){
  state.moneyRouteIndex=0;$('#challengeTitle').textContent='お金の循環パイプ';$('#challengePrompt').textContent='余裕資金が生産・雇用へ届く順番で、4つのパイプをタップしよう。';
  const shuffled=[...MONEY_ROUTE].sort(()=>Math.random()-.5);$('#challengeGame').innerHTML=`<div class="money-route">${shuffled.map(n=>`<button data-node="${n.id}"><i></i><b>${n.title}</b><span>${n.sub}</span></button>`).join('')}</div><div class="coin-flow" id="coinFlow">0 / 4 接続</div>`;
  $$('[data-node]').forEach(b=>b.addEventListener('click',()=>{const expected=MONEY_ROUTE[state.moneyRouteIndex].id;if(b.dataset.node!==expected){tone('ng');b.classList.add('is-wrong');$('#challengeFeedback').textContent=`次は「${MONEY_ROUTE[state.moneyRouteIndex].title}」から。硬貨がパイプから落ちた！`;return;}tone('ok');b.disabled=true;b.classList.add('is-connected');state.moneyRouteIndex++;$('#coinFlow').textContent=`${state.moneyRouteIndex} / 4 接続`;if(state.moneyRouteIndex===MONEY_ROUTE.length)completeChallenge('預金→銀行→貸出→生産・雇用。硬貨が最後まで流れた！','ヒロポン「お金は貯めるだけでなく、橋渡しされて働くのじゃ。」','hiropon');}));
}
function renderFxGame(){
  state.fxCards=[...FX_CARDS].sort(()=>Math.random()-.5);state.fxIndex=0;$('#challengeTitle').textContent='円高・円安トレード';$('#challengePrompt').textContent='カードが有利になりやすいゲートを選ぼう。';renderFxCard();
}
function renderFxCard(){
  const card=state.fxCards[state.fxIndex];$('#challengeGame').innerHTML=`<div class="fx-board"><div class="visual-card"><i class="card-art ${card.art}"></i><b>${card.title}</b><span>${card.sub}</span></div><div class="fx-gates"><button data-side="high"><b>円高ゲート</b><span>1ドル150円→120円</span></button><button data-side="low"><b>円安ゲート</b><span>1ドル100円→150円</span></button></div></div>`;
  $$('[data-side]').forEach(b=>b.addEventListener('click',()=>{if(b.dataset.side!==card.side){tone('ng');b.classList.add('is-wrong');$('#challengeFeedback').textContent='ゲートが閉じた！ 円を外貨へ替える側か、商品を売る側か考えよう。';return;}tone('ok');$('#challengeFeedback').textContent=card.explanation;state.fxIndex++;setTimeout(()=>{if(state.fxIndex<state.fxCards.length)renderFxCard();else completeChallenge('4枚すべて仕分け成功！','勉三「円高と円安、名前だけで反対側に入れそうだった…！」');},650);}));
}

function awardDistrict(){
  const id=state.current,rank=rankFor(state.score),old=state.districtRecords?.[id];state.districtRecords??={};state.districtRecords[id]={best:Math.max(old?.best||0,state.score),rank:old&&old.best>state.score?old.rank:rank,last:state.score};state.cleared.add(id);persist();sync();$('#districtChallenge').hidden=true;$('#characterReaction').hidden=true;
  const stage=$('#districtStage');stage.classList.remove('is-restoring');void stage.offsetWidth;stage.classList.add('is-restoring');tone('core');playJingle('core');setTimeout(()=>{$('#restoreMessage').innerHTML=`<span class="district-rank">${rank}ランク｜${state.score}/5</span><strong>${districts[id].core}獲得！</strong><small>都市マップへ自動で戻ります</small>`;},500);setTimeout(()=>{show('mapScreen');if(state.cleared.size===4){tone('unlock');playJingle('core');}},2400);
}

function startFinal(){tone('select');state.finalStage=0;state.finalAttempts=0;state.finalFirstTry=0;$('#coreGears').innerHTML=Object.values(districts).map(d=>`<img src="${d.gear}" alt="">`).join('');show('finalScreen');renderFinalStage();}
function renderFinalProgress(){$('#finalProgress').innerHTML=FINAL_CRISIS.map((_,i)=>`<i class="${i<state.finalStage?'done':''}"></i>`).join('');const rate=state.finalStage*25;$('#gaugeFill').style.width=`${rate}%`;$('#gaugeText').textContent=`再起動率 ${rate}%`;}
function renderFinalStage(){
  renderFinalProgress();state.finalAttempts=0;$('#finalNext').hidden=true;$('#finalMessage').textContent='';const c=shuffledItem({...FINAL_CRISIS[state.finalStage],prompt:FINAL_CRISIS[state.finalStage].text,id:`final${state.finalStage}`});state.finalQuestion=c;$('#finalGuide').textContent=`${c.guide}からの緊急通信｜使用：${c.core}`;$('#finalTitle').textContent=c.title;$('#finalPrompt').textContent=c.prompt;$('#finalCore').hidden=state.finalStage>0;makeChoices($('#finalChoices'),c.choices,(i,b)=>judgeFinal(i,b),'policy-card');
}
function judgeFinal(index,button){
  const c=state.finalQuestion;state.finalAttempts++;if(index===c.answer){if(state.finalAttempts===1)state.finalFirstTry++;$$('#finalChoices .policy-card').forEach((b,i)=>{b.disabled=true;if(i===c.answer)b.classList.add('is-correct');});$('#finalMessage').textContent=`${c.core}発動！ ${c.explanation}`;$('#finalNext').hidden=false;tone('unlock');}
  else{button.disabled=true;button.classList.add('is-wrong');tone('ng');if(state.finalAttempts===1)$('#finalMessage').textContent='カードが不発！ 誰にどんな影響が出ているか考えよう。';else{$$('#finalChoices .policy-card').forEach((b,i)=>{b.disabled=true;if(i===c.answer)b.classList.add('is-correct');});$('#finalMessage').textContent=`確認：${c.explanation}`;$('#finalNext').hidden=false;}}
}
function advanceFinal(){state.finalStage++;if(state.finalStage<FINAL_CRISIS.length){renderFinalStage();return;}$('#gaugeFill').style.width='100%';$('#gaugeText').textContent='再起動率 100%';setTimeout(finishGame,500);}
function finishGame(){
  state.finalCleared=true;state.finalBest=Math.max(state.finalBest||0,state.finalFirstTry);persist();const quizScore=Object.values(state.districtRecords||{}).reduce((sum,r)=>sum+(r.best||0),0),total=24,score=quizScore+state.finalFirstTry,rate=score/total;const rank=rate>=.9&&state.finalFirstTry>=3?'S':rate>=.8?'A':rate>=.65?'B':'C';$('#finalRank').textContent=rank;$('#scoreSummary').textContent=`地区ベスト ${quizScore}/20｜FINAL初回 ${state.finalFirstTry}/4｜総合 ${Math.round(rate*100)}％`;
  const wrongCount=(state.wrongIds||[]).length;$('#reviewWrong').textContent=wrongCount?`まちがえた問題を復習（${wrongCount}問）`:'全問クリア！ 別問題で2周目へ';$('#weakSummary').textContent=wrongCount?`今回の要復習：${wrongCount}問`:'今回の要復習はありません。';sync();show('clearScreen');tone('clear');
}

function startReview(){
  const wrong=new Set(state.wrongIds||[]);state.reviewRun=Object.values(QUESTION_BANK).flat().filter(q=>wrong.has(q.id)).map(q=>prepareQuestion(q));if(!state.reviewRun.length){startNewRun();return;}state.reviewIndex=0;show('reviewScreen');renderReview();
}
function renderReview(){const q=state.reviewRun[state.reviewIndex];state.reviewAttempts=0;$('#reviewCount').textContent=`${state.reviewIndex+1} / ${state.reviewRun.length}`;$('#reviewPrompt').textContent=q.prompt;$('#reviewFeedback').textContent='';$('#reviewNext').hidden=true;makeChoices($('#reviewChoices'),q.choices,(i,b)=>judgeReview(i,b));}
function judgeReview(index,button){const q=state.reviewRun[state.reviewIndex];state.reviewAttempts++;if(index===q.answer){state.wrongIds=state.wrongIds.filter(id=>id!==q.id);$$('#reviewChoices .quiz-choice').forEach((b,i)=>{b.disabled=true;if(i===q.answer)b.classList.add('is-correct');});$('#reviewFeedback').textContent=`復習成功！ ${q.explanation}`;$('#reviewNext').hidden=false;tone('ok');persist();}else{button.disabled=true;button.classList.add('is-wrong');$('#reviewFeedback').textContent=`ヒント：${q.hint}`;tone('ng');}}
function advanceReview(){state.reviewIndex++;if(state.reviewIndex<state.reviewRun.length)return renderReview();$('#reviewBody').innerHTML='<div class="review-complete"><h3>復習完了！</h3><p>間違えた問題をすべて確認しました。</p><button id="reviewDone" class="action-button">結果へ戻る</button></div>';$('#reviewDone').addEventListener('click',()=>show('clearScreen'));}
function startNewRun(){state.cleared=new Set();state.finalCleared=false;state.previousRuns={};persist();$('#mapScreen').classList.remove('is-restored');$('#mapHeadline').textContent='4つの経済コアを取り戻せ';$('#mapLead').textContent='新しい問題で2周目に挑戦しよう。ベスト記録は残っています。';sync();show('mapScreen');}

function startBonus(){state.bonusIndex=0;state.bonusMoney=5000;state.bonusEnergy=70;state.bonusSavings=0;show('bonusScreen');renderBonus();}
function updateBonusStatus(){$('#bonusMoney').textContent=`${state.bonusMoney.toLocaleString()}円`;$('#bonusEnergy').textContent=state.bonusEnergy;$('#bonusSavings').textContent=`${state.bonusSavings.toLocaleString()}円`;$('#weekTrack').innerHTML=BONUS_WEEK.map((d,i)=>`<i class="${i<state.bonusIndex?'done':i===state.bonusIndex?'now':''}">${d.day}</i>`).join('');}
function renderBonus(){const day=BONUS_WEEK[state.bonusIndex];updateBonusStatus();$('#bonusDay').textContent=`${day.day}曜日｜${state.bonusIndex+1}/7`;$('#bonusTitle').textContent=day.title;$('#bonusText').textContent=day.text;$('#bonusReaction').textContent='';$('#bonusNext').hidden=true;makeChoices($('#bonusChoices'),day.choices.map(c=>c.label),(i,b)=>chooseBonus(i,b),'life-choice');}
function chooseBonus(index,button){const day=BONUS_WEEK[state.bonusIndex],choice=day.choices[index];$$('#bonusChoices .life-choice').forEach(b=>b.disabled=true);button.classList.add('is-selected');state.bonusMoney+=choice.money;state.bonusEnergy=Math.max(0,Math.min(100,state.bonusEnergy+choice.energy));if(choice.saveRate){const amount=Math.max(0,Math.floor(state.bonusMoney*choice.saveRate));state.bonusMoney-=amount;state.bonusSavings+=amount;}updateBonusStatus();$('#bonusReaction').textContent=choice.note+(state.bonusEnergy<25?' 勉三「体力ゲージが赤い！ 明日は休みたい！」':'');$('#bonusNext').hidden=false;$('#bonusNext').textContent=state.bonusIndex===BONUS_WEEK.length-1?'1週間の結果へ':'次の日へ';tone(choice.money>=0?'ok':'select');}
function advanceBonus(){state.bonusIndex++;if(state.bonusIndex<BONUS_WEEK.length)return renderBonus();finishBonus();}
function finishBonus(){const total=state.bonusMoney+state.bonusSavings;state.bonusBest=Math.max(state.bonusBest||0,total);persist();$('#bonusCard').innerHTML=`<p class="eyebrow">1週間終了</p><h3>${state.bonusEnergy>=35?'暮らしと貯金を両立！':'稼いだけれど、少し働きすぎ！'}</h3><p>手元 ${state.bonusMoney.toLocaleString()}円＋貯金 ${state.bonusSavings.toLocaleString()}円</p><p>ヒロポン「お金だけでなく、時間と体力も大切な資源じゃ。」</p><div class="bonus-choices"><button id="bonusReplay" class="life-choice">もう1週間暮らす</button><button id="bonusFinish" class="life-choice">結果画面へ</button></div>`;$('#bonusReplay').addEventListener('click',startBonus);$('#bonusFinish').addEventListener('click',()=>show('clearScreen'));tone('clear');}

$('#openingNext').addEventListener('click',advanceOpening);$('#openingSkip').addEventListener('click',()=>{playMusic('stopped');show('mapScreen');});$$('[data-open]').forEach(b=>b.addEventListener('click',()=>openDistrict(b.dataset.open)));$$('[data-back]').forEach(b=>b.addEventListener('click',()=>{tone('select');show('mapScreen');}));
$('#restoreButton').addEventListener('click',startQuiz);$('#nextQuestion').addEventListener('click',advanceDistrictQuiz);$('#challengeContinue').addEventListener('click',awardDistrict);$('#finalButton').addEventListener('click',startFinal);$('#finalNext').addEventListener('click',advanceFinal);$('#backToCity').addEventListener('click',()=>{sync();show('mapScreen');});$('#reviewWrong').addEventListener('click',startReview);$('#reviewBack').addEventListener('click',()=>show('clearScreen'));$('#reviewNext').addEventListener('click',advanceReview);$('#newRun').addEventListener('click',startNewRun);$('#startBonus').addEventListener('click',startBonus);$('#bonusBack').addEventListener('click',()=>show('clearScreen'));$('#bonusNext').addEventListener('click',advanceBonus);$('#soundButton').addEventListener('click',()=>{$('#soundButton').textContent=`音 ${toggleSound()?'ON':'OFF'}`;});

renderOpening();sync();
