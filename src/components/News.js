import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles =  [
    {
    "source": {
    "id": null,
    "name": "BBC News"
    },
    "author": "https://www.facebook.com/bbcnews",
    "title": "Protests erupt in Libya over contact with Israel - BBC",
    "description": "Libya's foreign minister is suspended because of talks with Israel, which Tripoli does not recognise.",
    "url": "https://www.bbc.com/news/world-africa-66636651",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/152F3/production/_130917768_3b1c31486e6c2045d27e247dc2f5987c676b6fd4.jpg",
    "publishedAt": "2023-08-28T04:59:20Z",
    "content": "Libya's PM has suspended his foreign minister after she met informally with her Israeli counterpart.\r\nLibya does not recognise Israel, as Tripoli backs the Palestinian cause, and the meeting has spar… [+3391 chars]"
    },
    {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": "Ben Blanchard, Yimou Lee",
    "title": "Foxconn founder Terry Gou announces run for Taiwan presidency - Reuters",
    "description": "Terry Gou, the billionaire founder of major Apple Inc <a href=\"https://www.reuters.com/markets/companies/AAPL.O\" target=\"_blank\">(AAPL.O)</a> supplier Foxconn <a href=\"https://www.reuters.com/markets/companies/2317.TW\" target=\"_blank\">(2317.TW)</a>, announced…",
    "url": "https://www.reuters.com/world/asia-pacific/foxconn-founder-terry-gou-announces-run-taiwan-presidency-2023-08-28/",
    "urlToImage": "https://www.reuters.com/resizer/2If9ALy0rI8OzBKly9GiK65jkDs=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/BKV23ERWYNKR7A6JH3PISD46SI.jpg",
    "publishedAt": "2023-08-28T04:33:32Z",
    "content": "TAIPEI, Aug 28 (Reuters) - Terry Gou, the billionaire founder of major Apple Inc (AAPL.O) supplier Foxconn (2317.TW), announced on Monday a bid to be Taiwan's next president in 2024 elections, saying… [+4302 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CNBC"
    },
    "author": "Evelyn Cheng",
    "title": "Chinese EV startup Xpeng shares soar 13% after announcing $744 million deal with Didi - CNBC",
    "description": "Chinese electric car company Xpeng has signed yet another joint car production deal.",
    "url": "https://www.cnbc.com/2023/08/28/chinese-ev-startup-xpeng-shares-soar-after-744-million-deal-with-didi.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/107292488-1693185248870-gettyimages-1253803137-vcg111289946930.jpeg?v=1693196570&w=1920&h=1080",
    "publishedAt": "2023-08-28T04:22:50Z",
    "content": "Didi launched a free robotaxi service in parts of Shanghai in 2020.\r\nBEIJING Chinese electric car company Xpeng said Monday it is buying Didi's smart electric car development business in an exchange … [+2899 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CNBC"
    },
    "author": "Lee Ying Shan",
    "title": "Raimondo meets Chinese officials in 'tricky' visit as countries seek a more stable relationship - CNBC",
    "description": "Raimondo arrived in Beijing on Sunday night, beginning a visit which came at the invitation of her counterpart, Chinese Minister of Commerce Wang Wentao.",
    "url": "https://www.cnbc.com/2023/08/28/raimondo-meets-chinese-officials-as-countries-seek-more-stable-relationship.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/106946455-16324134172021-09-23t160839z_577449241_rc2rvp9z1yr4_rtrmadp_0_usa-semiconductors-commerce.jpeg?v=1693196028&w=1920&h=1080",
    "publishedAt": "2023-08-28T04:13:48Z",
    "content": "U.S. Commerce Secretary Gina Raimondo speaks during a Reuters interview at the Department of Commerce in Washington, September 23, 2021.\r\nU.S. Secretary of Commerce Gina Raimondo is set to meet with … [+2479 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Deadline"
    },
    "author": "Armando Tinoco",
    "title": "Streamy Awards 2023 Complete Winners List: Dylan Mulvaney, MrBeast, Michelle Khare, Dream & Leo González Among Recipients - Deadline",
    "description": "The 2023 Streamy Awards honored the best in content creation on social media and Dylan Mulvaney took the trophy for Breakout Creator. “I’m really shocked because I thought the only award I’d …",
    "url": "https://deadline.com/2023/08/2023-streamy-awards-winners-list-1235529332/",
    "urlToImage": "https://deadline.com/wp-content/uploads/2023/08/streamy-awards-2023-winners.jpg?w=1024",
    "publishedAt": "2023-08-28T04:13:00Z",
    "content": "The 2023 Streamy Awards honored the best in content creation on social media and Dylan Mulvaney took the trophy for Breakout Creator.\r\n“I’m really shocked because I thought the only award I’d ever wi… [+1760 chars]"
    },
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Stephen Collinson",
    "title": "Drama unfolds on two fronts Monday as Trump cases enter new phase - CNN",
    "description": "Americans are about to learn significant new details on the timing and the substance of the trials of Donald Trump, even as the former president and Republican front-runner steps up his effort to alchemize his unprecedented legal peril to boost his White Hous…",
    "url": "https://www.cnn.com/2023/08/28/politics/trump-trials-hearings-analysis/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230801153623-04-donald-trump-072923.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "2023-08-28T04:01:00Z",
    "content": "Americans are about to learn significant new details on the timing and the substance of the trials of Donald Trump, even as the former president and Republican front-runner steps up his effort to alc… [+7813 chars]"
    },
    {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": "Kantaro Komiya, Rocky Swift",
    "title": "Japan suspends H-IIA rocket launch for moonshot because of strong winds - Reuters",
    "description": "Japan's space agency suspended a planned launch on Monday of a rocket carrying what would be the country's first spacecraft to land on the moon, with operator Mitsubishi Heavy Industries (MHI) <a href=\"https://www.reuters.com/markets/companies/7011.T\" target=…",
    "url": "https://www.reuters.com/technology/space/japan-space-agency-suspends-launch-attempt-rocket-carrying-moon-lander-2023-08-28/",
    "urlToImage": "https://www.reuters.com/resizer/bqJDlo-G_7b9QmF9L4Gr3Obce4U=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/NY4XDCEQLZN53P34OXCSVUSL5M.jpg",
    "publishedAt": "2023-08-28T03:56:15Z",
    "content": "TOKYO, Aug 28 (Reuters) - Japan's space agency suspended a planned launch on Monday of a rocket carrying what would be the country's first spacecraft to land on the moon, with operator Mitsubishi Hea… [+3411 chars]"
    },
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Jennifer Hauser, Heather Chen",
    "title": "Boris Johnson: 'Prigozhin's last thought was 'Putin!'' - CNN",
    "description": "Former UK Prime Minister Boris Johnson has alleged that Russian President Vladimir Putin “must have killed” Wagner boss Yevgeny Prigozhin and said there can be no peace negotiation with Putin on Ukraine.",
    "url": "https://www.cnn.com/2023/08/27/world/boris-johnson-oped-wagner-yevgeny-prigozhin-putin-intl-hnk/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230712133143-01-boris-johnson-intv-0712.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "2023-08-28T03:55:00Z",
    "content": "Former UK Prime Minister Boris Johnson has alleged that Russian President Vladimir Putin must have killed Wagner boss Yevgeny Prigozhin and said there can be no peace negotiation with Putin on Ukrain… [+2757 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Digital Trends"
    },
    "author": "Trevor Mogg",
    "title": "iPad Pro looks set for first major update since 2018 - Digital Trends",
    "description": "Apple is planning to overhaul the iPad Pro for the first time since 2018, with a new OLED display and other features incoming, according to a new report.",
    "url": "https://www.digitaltrends.com/mobile/ipad-pro-looks-set-for-first-major-update-in-five-years/",
    "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2022/11/apple-ipad-pro-2022-review-18.jpg?resize=1200%2C630&p=1",
    "publishedAt": "2023-08-28T03:45:05Z",
    "content": "Apple appears set to overhaul the iPad Pro, though the refreshed tablet seems unlikely to hit the market until next year.\r\nThe news appeared on Sunday courtesy of Bloomberg’s Mark Gurman, who often c… [+2206 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "YouTube"
    },
    "author": null,
    "title": "Simone Biles Speaks at Post-Xfinity U.S. Gymnastics Championships Press Conference - USA Gymnastics",
    "description": "Hear from National Champion, Simone Biles after her historic 8th U.S. Gymnastics Championships All-Around Title!SUBSCRIBE to the USA Gymnastics YouTube Chann...",
    "url": "https://www.youtube.com/watch?v=hiu1l_YgyMI",
    "urlToImage": "https://i.ytimg.com/vi/hiu1l_YgyMI/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgQSgxMA8=&rs=AOn4CLCeeVnbSmOVLAhuSUqtMvJQuKuA6w",
    "publishedAt": "2023-08-28T03:33:28Z",
    "content": null
    },
    {
    "source": {
    "id": null,
    "name": "INSIDER"
    },
    "author": "Esme Mazzeo",
    "title": "'Sister Wives' star Kody Brown calls Christine Brown 'Machiavellian' - Insider",
    "description": "During their tense first meeting on \"Sister Wives\" since Christine Brown's move, Kody Brown also says he has to stop hating her so he doesn't speak badly about her to their kids.",
    "url": "https://www.insider.com/sister-wives-kody-brown-calls-christine-brown-machiavellian-2023-8",
    "urlToImage": "https://i.insider.com/64e8d1ad52bc2d0019923d17?width=1200&format=jpeg",
    "publishedAt": "2023-08-28T03:01:00Z",
    "content": "Kody Brown's first encounter with his ex-wife Christine Brown since she moved from Arizona to Utah continues on Sunday's episode of TLC's \"Sister Wives.\" Kody doesn't hold back when reflecting on his… [+3112 chars]"
    },
    {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": "Wayne Cole",
    "title": "Asia shares rally as China measures boost market - Reuters",
    "description": "Asian shares rallied on Monday as China announced new measures to support its ailing markets, though the mood was cautious ahead of readings on U.S. jobs and inflation that could decide whether interest rates have to rise again.",
    "url": "https://www.reuters.com/markets/global-markets-wrapup-1-pix-2023-08-28/",
    "urlToImage": "https://www.reuters.com/resizer/SlXOwY-0Qtylmo7N_R7O-oquWGQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/YVL5W2DOCNLLDKEKMO5HPSS72E.jpg",
    "publishedAt": "2023-08-28T02:38:03Z",
    "content": "SYDNEY, Aug 28 (Reuters) - Asian shares rallied on Monday as China announced new measures to support its ailing markets, though the mood was cautious ahead of readings on U.S. jobs and inflation that… [+4139 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The A.V. Club"
    },
    "author": "Sam Barsanti",
    "title": "The fifth season of Love Island USA has crowned its champions - The A.V. Club",
    "description": "After surviving the season and winning the vote, Hannah and Marco have won season 5 of Love Island USA",
    "url": "https://www.avclub.com/love-island-season-5-winners-1850779315",
    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/1a91233ec1034f7ece421140d776933c.png",
    "publishedAt": "2023-08-28T02:33:00Z",
    "content": "Its occasionally a million degrees outside, but we are still ostensibly moving toward the end of summer, and that means exactly one thing: Another season of oddly complicated dating show/reality comp… [+2147 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "YouTube"
    },
    "author": null,
    "title": "Spread of Covid impacting start of classes for some schools across U.S. - NBC News",
    "description": "Several schools across the country have had the start of classes impacted by the spread of Covid. NBC News’ Emilie Ikeda has the latest on what health offici...",
    "url": "https://www.youtube.com/watch?v=qrfQoERa0s0",
    "urlToImage": "https://i.ytimg.com/vi/qrfQoERa0s0/maxresdefault.jpg",
    "publishedAt": "2023-08-28T02:30:31Z",
    "content": null
    },
    {
    "source": {
    "id": "usa-today",
    "name": "USA Today"
    },
    "author": ", USA TODAY",
    "title": "'Hannah Montana' actor Mitchel Musso arrested on charges of public intoxication, theft - USA TODAY",
    "description": "Mitchel Musso, best known for his role on \"Hannah Montana,\" was arrested in Texas on Saturday on charges of public intoxication and theft.",
    "url": "https://www.usatoday.com/story/entertainment/celebrities/2023/08/27/mitchel-musso-arrest-public-intoxication-hannah-montana/70696668007/",
    "urlToImage": "https://www.gannett-cdn.com/authoring/authoring-images/2023/08/28/USAT/70696845007-xxx-sd-premiere-of-bachelor-lions-arrivals-903170088-1172-jp.jpg?auto=webp&crop=2110,1192,x0,y600&format=pjpg&width=1200",
    "publishedAt": "2023-08-28T01:58:48Z",
    "content": "\"Hannah Montana\" alum Mitchel Musso was arrested on charges of public intoxication and theft following an argument Saturday.\r\nMusso, best known for his role as Oliver Oken on the Disney Channel sitco… [+1567 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": "MARI YAMAGUCHI",
    "title": "Removing Fukushima's melted nuclear fuel will be harder than the release of plant's wastewater - Yahoo News",
    "description": "At a small section of the Fukushima Daiichi nuclear plant’s central control room, the treated water transfer switch is on.  A graph on a computer monitor...",
    "url": "https://news.yahoo.com/japanese-nuclear-plant-controversial-treated-143448442.html",
    "urlToImage": "https://s.yimg.com/ny/api/res/1.2/ykeiWAlG3LHxEc3nQwT8Sw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/ap.org/fe2af929e8f6476dea183a17fa746326",
    "publishedAt": "2023-08-28T01:56:00Z",
    "content": "OKUMA, Japan (AP) At a small section of the Fukushima Daiichi nuclear plants central control room, the treated water transfer switch is on. A graph on a computer monitor nearby shows a steady decreas… [+5572 chars]"
    },
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Homero De la Fuente, Charlie Webster",
    "title": "Tour Championship: Viktor Hovland wins PGA Tour finale and $18 million FedEx Cup prize - CNN",
    "description": "Norwegian Viktor Hovland fended off a late surge by American Xander Schauffele to finish at 27 under par and win the Tour Championship on Sunday at East Lake Golf Club in Atlanta.",
    "url": "https://www.cnn.com/2023/08/27/golf/pga-tour-championship-spt-intl/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230827194347-viktor-hovland-tour-championship-082723.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "2023-08-28T01:03:00Z",
    "content": "Norwegian Viktor Hovland fended off a late surge by American Xander Schauffele to finish at 27 under par and win the Tour Championship on Sunday at East Lake Golf Club in Atlanta. \r\nWith the victory,… [+2186 chars]"
    },
    {
    "source": {
    "id": "cbs-news",
    "name": "CBS News"
    },
    "author": "William Harwood",
    "title": "SpaceX Crew Dragon ferries 3-man, 1-woman crew to international space station - CBS News",
    "description": "The Crew Dragon arrival briefly boosts the space station crew to 11 in the first of two crew rotation flights.",
    "url": "https://www.cbsnews.com/news/spacex-crew-dragon-three-man-one-woman-crew-7-space-station/",
    "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2023/08/27/0850d4df-e502-42f3-85a6-39064dfe8863/thumbnail/1200x630/201ef903d91d95f4f4716587a5d54eb9/082723-welcome.jpg?v=85153828b1c3c07a041ab8e73ff87e39",
    "publishedAt": "2023-08-27T23:48:00Z",
    "content": "A SpaceX Crew Dragon ferry ship docked at the International Space Station Sunday after a 29-hour rendezvous, bringing four fresh crew members to the lab to replace four others wrapping up a six-month… [+3885 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "US Open Tennis Championships"
    },
    "author": null,
    "title": "2023 US Open Day 1 picks: Expert predictions for today's matches - US Open Tennis Championships",
    "description": null,
    "url": "https://www.usopen.org/en_US/news/articles/2023-08-27/2023_us_open_day_1_picks_expert_predictions_for_todays_matches.html",
    "urlToImage": null,
    "publishedAt": "2023-08-27T23:44:19Z",
    "content": null
    },
    {
    "source": {
    "id": "cbs-news",
    "name": "CBS News"
    },
    "author": "Caroline Linton",
    "title": "3 U.S. Marines killed in Osprey aircraft crash in Australia - CBS News",
    "description": "The Osprey aircraft, which was conducting a training exercise, was carrying 23 personnel, the U.S. Marines said.",
    "url": "https://www.cbsnews.com/news/marines-killed-osprey-aircraft-crash-australia/",
    "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2023/08/27/71040f50-7595-48fe-9897-ac496e63d36a/thumbnail/1200x630/2c0c7ce3680f6a8a2c15b750fc6f4518/ap23239233961495.jpg?v=85153828b1c3c07a041ab8e73ff87e39",
    "publishedAt": "2023-08-27T23:43:00Z",
    "content": "At least three U.S. Marines were killed Sunday when an Osprey aircraft carrying 23 personnel crashed on a north Australian island during a training exercise, U.S. military officials said. \r\nFive othe… [+1337 chars]"
    }
    ]
  
  constructor(){
    super();
    console.log("Hello I am a constructor from news component");
    this.state = {
      articles: this.articles,
      loading: false

    }
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey- Top Headlines</h2>
        
        <div className='row'>
        {this.state.articles.map( (element)=>{
          return <div className='col-md-4' key={element.url} >   
          <NewsItem title={element.title } descirption={element.description} imageUrl= {element.urlToImage} newsUrl={element.newsUrl}/>
          </div>
  })}
        </div>
      </div>
    )
  }
}

export default News
