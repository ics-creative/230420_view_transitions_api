import type { Item } from "../types/Item";

export const items: Item[] = [...Array(12).keys()].map((k) => ({
  id: k,
  date: "2023.03.04",
  title: "Flower",
  thumb: `images/photo_${(k + 1).toString().padStart(5, "0")}.webp`,
  description: `　何んな花でもながく見ていれば好きになって来るものだという人がある。自然というものは親しむほど趣の加わって来るものであることを思うと、そうかも知れないという気がする。然し本当に好きになりうる花は、初め一と目見た時から好いたものである。又本当に好きなものがあると、その外の多くを求めようとしない心もある。その意味で私は多くの草花を並べようとは思わない。これだけで沢山だ、来年の秋にはこれをもう少し多く咲くようにしてやろうと思って、椿の蔭のいささかの湿った地に咲いている秋海棠の花を見ている。
　秋海棠ほどいいものはない。春、一と葉を出した時からもういい。あの薄くれないのよわそうな茎に、濃緑の大きな、しかし洗煉を極めた葉を付けたあの時からもういい。葉が繁って来てくれないの蕾がその蔭に仄かに見える時、その花茎が伸び立って薄くれないの花びらが黄の蕊しべを現して開いた時、俄に秋めいて涼しくなるとその花のもろく衰えてゆく時、秋海棠はいつの時もいい。全体として持っている洗煉と気品とがいい。
　鳳仙花も、これほどは来年もと思っている。この花の趣は花が咲き出そうとする頃からはじまる。あの形が整って来てうす青い真っ直なしっかりした茎と、やや粗野ではあるが、うるさくはならない葉が、全体としての調和を持ち出す時には、この草には怪しくも陰影が添って来る。その形と陰影とが鳳仙花の生命だ。花は、それが真紅でも白でも、もも色でも、単に陰影の一部となって融け込んでしまう。`,
}));
