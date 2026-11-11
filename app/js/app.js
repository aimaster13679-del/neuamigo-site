/* NeuMarry app. Built from app/src by build.py. */
(function(){
"use strict";
/* ---------- Icons ---------- */
const IC={
 heart:'<path d="M12 20.5s-7.6-4.6-9.4-9.4C1.2 7.6 3.5 4.5 6.8 4.5c2 0 3.5 1.1 5.2 3 1.7-1.9 3.2-3 5.2-3 3.3 0 5.6 3.1 4.2 6.6-1.8 4.8-9.4 9.4-9.4 9.4z"/>',
 x:'<path d="M6 6l12 12M18 6L6 18"/>',
 star:'<path d="M12 3.2l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17.2l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
 chat:'<path d="M4 5.5h16v10.5H10l-5 4.5V16H4z"/>',
 user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4.4 4.2-6.5 8-6.5s7 2.1 8 6.5"/>',
 compass:'<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
 rings:'<circle cx="9" cy="12" r="5.5"/><circle cx="15" cy="12" r="5.5"/>',
 shield:'<path d="M12 3l8 3v6c0 4.5-3.4 8.2-8 9-4.6-.8-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
 badge:'<path d="M12 2.8l2.3 1.7 2.8-.1.9 2.7 2.3 1.6-.9 2.7.9 2.7-2.3 1.6-.9 2.7-2.8-.1L12 21.2l-2.3-1.7-2.8.1-.9-2.7-2.3-1.6.9-2.7-.9-2.7 2.3-1.6.9-2.7 2.8.1z"/><path d="M8.6 12.2l2.3 2.3 4.5-4.6"/>',
 filter:'<path d="M4 6h16M7 12h10M10 18h4"/>',
 check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',
 lock:'<rect x="5" y="11" width="14" height="10" rx="2.5"/><path d="M8 11V8a4 4 0 018 0v3"/>',
 video:'<rect x="3" y="6" width="13" height="12" rx="2.5"/><path d="M16 10l5-3v10l-5-3z"/>',
 send:'<path d="M4.5 12L20 4.5 15 20l-2.8-6.2z"/><path d="M12.2 13.8L20 4.5"/>',
 back:'<path d="M15 5l-7 7 7 7"/>',
 chev:'<path d="M7 10l5 5 5-5"/>',
 more:'<circle cx="5" cy="12" r="1.7"/><circle cx="12" cy="12" r="1.7"/><circle cx="19" cy="12" r="1.7"/>',
 flag:'<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',
 pin:'<path d="M12 21s7-6.2 7-11.5A7 7 0 005 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
 phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a1 1 0 01-1 1A16 16 0 014 5a1 1 0 011-1z"/>',
 mic:'<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0014 0M12 18v3"/>',
 cal:'<rect x="3" y="5" width="18" height="16" rx="2.5"/><path d="M3 10h18M8 3v4M16 3v4"/>',
 users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.8-3.6 3.4-5.5 6.5-5.5s5.7 1.9 6.5 5.5"/><path d="M15.5 4.8a3.5 3.5 0 010 6.4M18 14.8c1.8.8 3 2.5 3.5 5.2"/>',
 info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.6v.2"/>',
 id:'<rect x="3" y="5" width="18" height="14" rx="2.5"/><circle cx="9" cy="11" r="2.3"/><path d="M5.8 16c.6-1.6 1.8-2.4 3.2-2.4s2.6.8 3.2 2.4M14.5 10h4M14.5 13.5h3"/>',
 camera:'<path d="M4 8h3l2-2.5h6L17 8h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',
 eye:'<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',
 crown:'<path d="M4 18h16M5 15l-1.5-8 5 4L12 5l3.5 6 5-4L19 15z"/>',
 sparkle:'<path d="M12 3c.6 4.2 2.8 6.4 7 7-4.2.6-6.4 2.8-7 7-.6-4.2-2.8-6.4-7-7 4.2-.6 6.4-2.8 7-7z"/>',
 copy:'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 00-1-1H5a1 1 0 00-1 1v10a1 1 0 001 1h3"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',
 trash:'<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>',
 search:'<circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.2-4.2"/>',
 refresh:'<path d="M20 11a8 8 0 10-2.3 5.7M20 4v7h-7"/>',
 bolt:'<path d="M13 2.5L5 13.5h6.2L10 21.5l8.5-11.5h-6.3z"/>',
 ticket:'<path d="M3 8a2 2 0 002-2h14a2 2 0 002 2v2a2 2 0 000 4v2a2 2 0 00-2 2H5a2 2 0 00-2-2v-2a2 2 0 000-4z"/><path d="M14 6.5v11" stroke-dasharray="2 2.5"/>',
 mail:'<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3.5 6.5l8.5 6.5 8.5-6.5"/>',
 gift:'<rect x="3.5" y="9" width="17" height="11.5" rx="2"/><path d="M2.5 9h19M12 9v11.5M12 9c-2-4.5-7-4.5-5.5-1.5C7.6 9 12 9 12 9zm0 0c2-4.5 7-4.5 5.5-1.5C16.4 9 12 9 12 9z"/>',
 key:'<circle cx="8" cy="14" r="4.5"/><path d="M11.3 10.8L20 2.5M16.5 6l2.5 2.5M14 8.5l2 2"/>',
 home:'<path d="M3.5 11L12 4l8.5 7M6 9.5V20h12V9.5"/>',
 globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.7 5.6 3.7 9s-1.2 6.4-3.7 9c-2.5-2.6-3.7-5.6-3.7-9S9.5 5.6 12 3z"/>'
};
function ic(n,cls){const f=n==='more';return `<svg viewBox="0 0 24 24" class="ic${f?' fill':''}${cls?' '+cls:''}" aria-hidden="true">${IC[n]||''}</svg>`}
const SIL='<svg class="av-sil" viewBox="0 0 100 92" aria-hidden="true"><circle cx="50" cy="34" r="19"/><path d="M8 92c4-24 20-36 42-36s38 12 42 36z"/></svg>';

/* ---------- World data ---------- */
const CMAP={};COUNTRIES.forEach(c=>{CMAP[c[0]]=c});
const COUNTRY_NAMES=COUNTRIES.map(c=>c[0]);
function statesOf(country){const c=CMAP[country];return c&&STATES[c[1]]?STATES[c[1]]:[]}
function dial(country){const c=CMAP[country];return c&&c[2]?'+'+c[2]:''}
function flag(country){const c=CMAP[country];return c?c[6]:''}
function stateCoords(country,state){const s=statesOf(country).find(x=>x[0]===state);return s?[s[1],s[2]]:null}
function countryCoords(country){const c=CMAP[country];return c?[c[4],c[5]]:null}

/* Cities: key -> [name, country, state, lat, lng]. Profiles live in these; others are suggestions. */
const CITIES={
 toronto:['Toronto','Canada','Ontario',43.653,-79.383], mississauga:['Mississauga','Canada','Ontario',43.589,-79.644], brampton:['Brampton','Canada','Ontario',43.731,-79.762],
 ottawa:['Ottawa','Canada','Ontario',45.421,-75.697], montreal:['Montreal','Canada','Quebec',45.502,-73.567], vancouver:['Vancouver','Canada','British Columbia',49.283,-123.121],
 surrey:['Surrey','Canada','British Columbia',49.191,-122.849], calgary:['Calgary','Canada','Alberta',51.045,-114.072], edmonton:['Edmonton','Canada','Alberta',53.546,-113.494], winnipeg:['Winnipeg','Canada','Manitoba',49.895,-97.138],
 'new-jersey':['Edison','United States','New Jersey',40.519,-74.412], 'new-york':['New York','United States','New York',40.713,-74.006], 'bay-area':['San Jose','United States','California',37.338,-121.886],
 seattle:['Seattle','United States','Washington',47.606,-122.332], houston:['Houston','United States','Texas',29.760,-95.370], chicago:['Chicago','United States','Illinois',41.878,-87.630],
 london:['London','United Kingdom','Greater London',51.507,-0.128], leicester:['Leicester','United Kingdom','East Midlands',52.637,-1.135], birmingham:['Birmingham','United Kingdom','West Midlands',52.486,-1.890],
 sydney:['Sydney','Australia','New South Wales',-33.869,151.209], melbourne:['Melbourne','Australia','Victoria',-37.814,144.963],
 dubai:['Dubai','United Arab Emirates','Dubai',25.205,55.271], abudhabi:['Abu Dhabi','United Arab Emirates','Abu Dhabi Emirate',24.454,54.377],
 berlin:['Berlin','Germany','Berlin',52.520,13.405], munich:['Munich','Germany','Bavaria',48.135,11.582]
};
const MORE_CITIES=`Hamilton|Canada|Ontario|43.26|-79.87;Kitchener|Canada|Ontario|43.45|-80.49;Waterloo|Canada|Ontario|43.46|-80.52;London|Canada|Ontario|42.98|-81.25;Windsor|Canada|Ontario|42.31|-83.04;Oakville|Canada|Ontario|43.47|-79.69;Markham|Canada|Ontario|43.86|-79.34;Vaughan|Canada|Ontario|43.84|-79.50;Milton|Canada|Ontario|43.52|-79.88;Regina|Canada|Saskatchewan|50.45|-104.61;Saskatoon|Canada|Saskatchewan|52.13|-106.67;Halifax|Canada|Nova Scotia|44.65|-63.58;Victoria|Canada|British Columbia|48.43|-123.37;Burnaby|Canada|British Columbia|49.25|-122.98;Abbotsford|Canada|British Columbia|49.05|-122.33;Quebec City|Canada|Quebec|46.81|-71.21;Laval|Canada|Quebec|45.61|-73.71;
Dallas|United States|Texas|32.78|-96.80;Austin|United States|Texas|30.27|-97.74;Atlanta|United States|Georgia|33.75|-84.39;Boston|United States|Massachusetts|42.36|-71.06;Los Angeles|United States|California|34.05|-118.24;San Francisco|United States|California|37.77|-122.42;Fremont|United States|California|37.55|-121.99;Sunnyvale|United States|California|37.37|-122.04;Philadelphia|United States|Pennsylvania|39.95|-75.17;Washington|United States|District of Columbia|38.91|-77.04;Phoenix|United States|Arizona|33.45|-112.07;Detroit|United States|Michigan|42.33|-83.05;Charlotte|United States|North Carolina|35.23|-80.84;Raleigh|United States|North Carolina|35.78|-78.64;Jersey City|United States|New Jersey|40.73|-74.08;Minneapolis|United States|Minnesota|44.98|-93.27;Denver|United States|Colorado|39.74|-104.99;Orlando|United States|Florida|28.54|-81.38;Miami|United States|Florida|25.76|-80.19;
Manchester|United Kingdom|North West England|53.48|-2.24;Leeds|United Kingdom|Yorkshire and the Humber|53.80|-1.55;Bradford|United Kingdom|Yorkshire and the Humber|53.80|-1.76;Coventry|United Kingdom|West Midlands|52.41|-1.51;Wolverhampton|United Kingdom|West Midlands|52.59|-2.13;Slough|United Kingdom|South East England|51.51|-0.59;Reading|United Kingdom|South East England|51.45|-0.97;Glasgow|United Kingdom|Scotland|55.86|-4.25;Edinburgh|United Kingdom|Scotland|55.95|-3.19;Cardiff|United Kingdom|Wales|51.48|-3.18;Belfast|United Kingdom|Northern Ireland|54.60|-5.93;
Brisbane|Australia|Queensland|-27.47|153.03;Perth|Australia|Western Australia|-31.95|115.86;Adelaide|Australia|South Australia|-34.93|138.60;Canberra|Australia|Australian Capital Territory|-35.28|149.13;
Sharjah|United Arab Emirates|Sharjah Emirate|25.35|55.42;Ajman|United Arab Emirates|Ajman Emirate|25.41|55.51;
Frankfurt|Germany|Hesse|50.11|8.68;Hamburg|Germany|Hamburg|53.55|9.99;Stuttgart|Germany|Baden-Württemberg|48.78|9.18;Cologne|Germany|North Rhine-Westphalia|50.94|6.96;Düsseldorf|Germany|North Rhine-Westphalia|51.23|6.77;
Auckland|New Zealand|Auckland Region|-36.85|174.76;Wellington|New Zealand|Wellington Region|-41.29|174.78;Christchurch|New Zealand|Canterbury Region|-43.53|172.64;
Singapore|Singapore||1.35|103.82;Doha|Qatar|Doha|25.29|51.53;Riyadh|Saudi Arabia|Riyadh|24.71|46.68;Jeddah|Saudi Arabia|Makkah|21.49|39.19;Dammam|Saudi Arabia|Eastern Province|26.43|50.10;Kuwait City|Kuwait||29.38|47.99;Muscat|Oman||23.59|58.41;Manama|Bahrain||26.23|50.59;
Dublin|Ireland||53.35|-6.26;Amsterdam|Netherlands||52.37|4.90;Paris|France||48.86|2.35;Milan|Italy||45.46|9.19;Rome|Italy||41.90|12.50;Madrid|Spain||40.42|-3.70;Lisbon|Portugal||38.72|-9.14;Zurich|Switzerland||47.38|8.54;Stockholm|Sweden||59.33|18.07;Oslo|Norway||59.91|10.75;Copenhagen|Denmark||55.68|12.57;Brussels|Belgium||50.85|4.35;Vienna|Austria||48.21|16.37;Warsaw|Poland||52.23|21.01;
Kuala Lumpur|Malaysia||3.14|101.69;Hong Kong|Hong Kong S.A.R.||22.32|114.17;Tokyo|Japan||35.68|139.69;Bangkok|Thailand||13.76|100.50;Johannesburg|South Africa||-26.20|28.05;Durban|South Africa||-29.86|31.02;Nairobi|Kenya||-1.29|36.82;Port Louis|Mauritius||-20.16|57.50;Suva|Fiji Islands||-18.12|178.44`.split(/;\s*/).map(r=>r.split('|')).map(r=>[r[0],r[1],r[2],+r[3],+r[4]]);
const ALL_CITIES=Object.values(CITIES).map(c=>c.slice()).concat(MORE_CITIES);

const PRICE={CAD:['CA$','49.99','799'],USD:['US$','39.99','599'],GBP:['£','29.99','449'],AUD:['A$','54.99','849'],AED:['AED ','149','2199'],EUR:['€','34.99','549'],NZD:['NZ$','59.99','899'],SGD:['S$','49.99','799'],CHF:['CHF ','34.99','549']};
const RES={Canada:['Citizen','Permanent resident','Work permit','Study permit','Visitor visa'],'United States':['Citizen','Green card','H-1B / work visa','F-1 / OPT','Dependent visa'],
 'United Kingdom':['Citizen','ILR / settled','Skilled worker visa','Student visa','Dependent visa'],Australia:['Citizen','Permanent resident','Work visa','Student visa'],
 'United Arab Emirates':['Citizen','Golden visa','Resident visa'],Germany:['Citizen','Settlement permit','EU Blue Card','Student visa']};
const RES_DEFAULT=['Citizen','Permanent resident','Work visa','Student visa','Dependent visa','Other'];
const SETTLED=['Citizen','Permanent resident','Green card','ILR / settled','Golden visa','Settlement permit'];
function resOf(country){return RES[country]||RES_DEFAULT}

const LANGS=['Afrikaans','Akan','Albanian','Amharic','Arabic','Armenian','Assamese','Awadhi','Aymara','Azerbaijani','Badaga','Bagheli','Balochi','Bambara','Banjara','Bashkir','Basque','Belarusian','Bemba','Bengali','Bhili','Bhojpuri','Bhutia','Bislama','Bodo','Bosnian','Braj','Breton','Bulgarian','Bundeli','Burmese','Cantonese','Catalan','Cebuano','Chakma','Chhattisgarhi','Chichewa','Chittagonian','Corsican','Croatian','Czech','Danish','Dari','Dhivehi','Dogri','Dutch','Dzongkha','English','Estonian','Ewe','Faroese','Fijian','Fiji Hindi','Filipino','Finnish','French','Frisian','Fula','Galician','Ganda','Garhwali','Garo','Georgian','German','Gondi','Greek','Guarani','Gujarati','Haitian Creole','Hakka','Haryanvi','Hausa','Hawaiian','Hebrew','Hindi','Hmong','Ho','Hokkien','Hungarian','Icelandic','Igbo','Ilocano','Indonesian','Irish','Italian','Japanese','Javanese','Kangri','Kannada','Kashmiri','Kazakh','Khasi','Khmer','Kikuyu','Kinyarwanda','Kirundi','Kodava','Kokborok','Konkani','Korean','Kumaoni','Kurdish','Kurukh','Kutchi','Kyrgyz','Ladakhi','Lao','Latvian','Lepcha','Limbu','Lingala','Lithuanian','Luo','Luxembourgish','Macedonian','Magahi','Maithili','Malagasy','Malay','Malayalam','Maltese','Malvi','Mandarin','Manipuri (Meitei)','Maori','Marathi','Marwari','Mewari','Mizo','Mongolian','Montenegrin','Mundari','Nagamese','Nagpuri','Ndebele','Nepali','Newari','Nimadi','Norwegian','Odia','Oromo','Pahari','Pashto','Persian (Farsi)','Polish','Portuguese','Pothwari','Punjabi','Quechua','Rajasthani','Romanian','Romani','Russian','Samoan','Sanskrit','Santali','Saraiki','Scottish Gaelic','Serbian','Sesotho','Setswana','Shanghainese','Sherpa','Shona','Sign language','Sindhi','Sinhala','Slovak','Slovenian','Somali','Sourashtra','Spanish','Sundanese','Swahili','Swati','Swedish','Sylheti','Tagalog','Tajik','Tamil','Tatar','Telugu','Teochew','Tetum','Thai','Tibetan','Tigrinya','Tok Pisin','Tongan','Tsonga','Tulu','Turkish','Turkmen','Twi','Ukrainian','Urdu','Uyghur','Uzbek','Venda','Vietnamese','Wagdi','Welsh','Wolof','Xhosa','Yiddish','Yoruba','Zulu'];
const POP_TONGUE=['Hindi','English','Gujarati','Punjabi','Bengali','Marathi','Tamil','Telugu','Urdu','Malayalam','Kannada','Odia','Nepali','Sindhi'];
const RELIGIONS=['Hindu','Muslim','Christian','Sikh','Jain','Buddhist','Parsi (Zoroastrian)','Jewish','Bahá’í','Shinto','Taoist','Confucian','Spiritual, not religious','Traditional / Indigenous','Agnostic','Atheist','No religion','Other'];
const COMM={
 Hindu:['Brahmin','Brahmin – Anavil','Brahmin – Audichya','Brahmin – Bengali','Brahmin – Bhargava','Brahmin – Chitpavan','Brahmin – Daivadnya','Brahmin – Deshastha','Brahmin – Dhima','Brahmin – Gaur','Brahmin – Gaud Saraswat (GSB)','Brahmin – Havyaka','Brahmin – Iyengar','Brahmin – Iyer','Brahmin – Jangid','Brahmin – Kanyakubj','Brahmin – Karhade','Brahmin – Kashmiri Pandit','Brahmin – Khandelwal','Brahmin – Kokanastha','Brahmin – Madhwa','Brahmin – Maithil','Brahmin – Mohyal','Brahmin – Nagar','Brahmin – Namboodiri','Brahmin – Niyogi','Brahmin – Pushkarna','Brahmin – Rarhi','Brahmin – Sanadhya','Brahmin – Saraswat','Brahmin – Saryuparin','Brahmin – Shrimali','Brahmin – Smartha','Brahmin – Tyagi','Brahmin – Utkal','Brahmin – Vaidiki','Adi Dravida','Agarwal','Agri','Ahir','Ahom','Arora','Arya Vysya','Baidya','Baishya','Balija','Bania','Banjara','Barai','Bari','Besta','Bhandari','Bhatia','Bhavsar','Bhoi','Bhumihar','Billava','Bishnoi','Boyar','Chamar','Charan','Chaurasia','Chettiar','Chhetri','Devanga','Dhangar','Dhobi','Ezhava','Gadaria','Ganiga','Garhwali','Gavali','Goud','Gounder','Gowda','Gujjar','Gupta','Gurav','Halwai','Jaiswal','Jat','Jatav','Kalar','Kalwar','Kamma','Kammalar','Kansari','Kapu','Kashyap','Kayastha','Khandayat','Khatik','Khatri','Koli','Konkani','Koshti','Kshatriya','Kudumbi','Kumaoni','Kumawat','Kumbhar','Kunbi','Kurmi','Kuruba','Lingayat','Lodhi','Lohana','Lohar','Mahajan','Maheshwari','Mali','Mallah','Maratha','Marwari','Meena','Menon','Mudaliar','Mukkulathor','Munnuru Kapu','Nadar','Nai','Naidu','Nair','Namasudra','Nambiar','Nayaka','Newar','Padmashali','Pal','Panchal','Pasi','Patel','Patidar','Pillai','Prajapati','Rajbhar','Rajput','Ramgarhia','Rastogi','Ravidasia','Reddy','Saini','Scheduled Caste','Scheduled Tribe','Shetty','Sindhi','Sonar','Sourashtra','Sutar','Tamboli','Teli','Thakur','Thevar','Thiyya','Vaishnav','Vaishya','Valmiki','Vanniyar','Varshney','Velama','Vellalar','Vishwakarma','Vokkaliga','Vysya','Yadav'],
 Muslim:['Sunni','Shia','Ahmadiyya','Ansari','Arain','Awan','Bohra – Dawoodi','Bohra – Sulaimani','Dekkani','Dudekula','Hanafi','Hanbali','Ismaili','Ithna Ashari','Jat Muslim','Khoja','Kutchi Memon','Lebbai','Malik','Maliki','Mappila','Memon','Mughal','Pathan','Qureshi','Rajput Muslim','Rowther','Saifi','Salafi','Shafi','Sheikh','Siddiqui','Sufi','Syed','Turk'],
 Christian:['Anglican','Assemblies of God','Baptist','Born Again','Brethren','Catholic','Church of North India (CNI)','Church of South India (CSI)','Evangelical','Jacobite','Jehovah’s Witness','Knanaya','Latin Catholic','Lutheran','Malankara Catholic','Marthoma','Methodist','Orthodox','Pentecostal','Presbyterian','Protestant','Roman Catholic','Seventh-day Adventist','Syro-Malabar','Syrian Catholic','Syrian Orthodox'],
 Sikh:['Ahluwalia','Arora Sikh','Bhatia Sikh','Gursikh','Jat Sikh','Kamboj','Khatri Sikh','Labana','Mazhabi','Namdhari','Rai Sikh','Rajput Sikh','Ramdasia','Ramgarhia','Ravidasia','Saini Sikh','Sindhi Sikh','Tarkhan'],
 Jain:['Digambar','Shwetambar','Sthanakvasi','Terapanthi','Murtipujak','Agarwal Jain','Jaiswal Jain','Khandelwal Jain','Oswal','Porwal','Shrimal','Vaishya Jain'],
 Buddhist:['Theravada','Mahayana','Vajrayana','Tibetan','Zen','Nichiren','Pure Land','Navayana (Ambedkarite)','Newar Buddhist','Sherpa'],
 'Parsi (Zoroastrian)':['Parsi','Irani'],
 Jewish:['Ashkenazi','Sephardi','Mizrahi','Bene Israel','Cochin Jewish','Baghdadi','Orthodox','Conservative','Reform']
};
COMM.Hindu.sort((a,b)=>(a.startsWith('Brahmin')===b.startsWith('Brahmin'))?a.localeCompare(b):a.startsWith('Brahmin')?-1:1);
function commOf(r){return COMM[r]||[]}
const NEAR_COMM={Gujarat:['Brahmin – Audichya','Brahmin – Nagar','Brahmin – Anavil','Brahmin – Shrimali','Patel','Lohana','Bania','Bhavsar','Prajapati','Jain'],Punjab:['Khatri','Arora','Jat','Saini','Brahmin – Mohyal','Jat Sikh','Khatri Sikh','Arora Sikh','Ramgarhia'],
 'Uttar Pradesh':['Brahmin – Kanyakubj','Brahmin – Saryuparin','Brahmin – Gaur','Kayastha','Agarwal','Rajput','Bhumihar'],Maharashtra:['Brahmin – Chitpavan','Brahmin – Deshastha','Brahmin – Karhade','Maratha','Kunbi','CKP'],Rajasthan:['Brahmin – Gaur','Brahmin – Pushkarna','Agarwal','Maheshwari','Rajput','Jain'],
 'Tamil Nadu':['Brahmin – Iyer','Brahmin – Iyengar','Mudaliar','Pillai','Chettiar','Nadar','Vellalar','Gounder'],Kerala:['Nair','Ezhava','Brahmin – Namboodiri','Menon'],Karnataka:['Brahmin – Havyaka','Brahmin – Madhwa','Brahmin – Smartha','Lingayat','Vokkaliga','Gowda'],
 'Andhra Pradesh':['Brahmin – Niyogi','Brahmin – Vaidiki','Reddy','Kamma','Kapu','Velama','Arya Vysya'],Telangana:['Brahmin – Niyogi','Brahmin – Vaidiki','Reddy','Kamma','Velama','Arya Vysya'],'West Bengal':['Brahmin – Bengali','Brahmin – Rarhi','Kayastha','Baidya','Mahishya'],Bihar:['Brahmin – Maithil','Bhumihar','Kayastha','Rajput','Yadav']};
function nearComm(o,rel){const list=commOf(rel),own=(o&&o.c)||'',pref=(o&&o.prefs&&o.prefs.community)||'';const out=[];
  const add=x=>{if(list.includes(x)&&x!==pref&&!out.includes(x)&&!(pref==='Brahmin'&&x.startsWith('Brahmin')))out.push(x)};
  (NEAR_COMM[o&&o.os]||[]).forEach(add);if(own.startsWith('Brahmin')||pref.startsWith('Brahmin'))list.filter(x=>x.startsWith('Brahmin')).forEach(add);
  if(rel==='Sikh')['Jat Sikh','Khatri Sikh','Arora Sikh','Ramgarhia','Saini Sikh','Gursikh'].forEach(add);if(rel==='Muslim')['Sunni','Shia','Syed','Sheikh','Pathan'].forEach(add);if(rel==='Jain')['Shwetambar','Digambar','Oswal','Porwal'].forEach(add);
  return out.slice(0,10)}
const POP_ORIGIN=['India','Pakistan','Bangladesh','Nepal','Sri Lanka','Philippines','China','Nigeria','Mexico'];
const POP_LIVE=['Canada','United States','United Kingdom','Australia','United Arab Emirates','Germany','New Zealand','Singapore','Saudi Arabia','Qatar','Ireland'];
const DIETS=['Vegetarian','Eggetarian','Non-vegetarian','Vegan','Jain vegetarian'];
const SMOKE=['No','Occasionally','Yes'];
const DRINK=['No','Socially','Regularly'];
const MARITAL=['Never married','Divorced','Widowed','Awaiting divorce'];
const QS=[
 {q:'After marriage, where do you want to settle?',k:'Settling',o:['Stay in the city I live in now','Open to moving within this country','Open to another country, or back home'],b:['Both want to stay in their city','Both open to moving within the country','Both open to any country']},
 {q:'Careers after marriage?',k:'Careers',o:['Both of us build full careers','Flexible, we decide together','One of us focuses on home'],b:['Both want two full careers','Both flexible on careers','Same view on home and career']},
 {q:'Living with family?',k:'Family home',o:['Live with parents','Close to parents, own home','Independent, visit often'],b:['Both want to live with parents','Both want a home near parents','Both prefer living independently']},
 {q:'Children?',k:'Children',o:['In the first 2–3 years','After we settle, no rush','Not sure yet'],b:['Both want kids early','Same pace on kids','Both unsure about kids']},
 {q:'Role of faith in daily life?',k:'Faith',o:['Daily prayer and rituals','Festivals and traditions','Personal, not a big part'],b:['Both practise daily','Both keep festivals and traditions','Faith is personal for both']},
 {q:'A good weekend looks like…',k:'Weekends',o:['Home and family time','Friends and going out','Travel and the outdoors'],b:['Both love family weekends','Both social on weekends','Both love to travel']},
 {q:'Money habits?',k:'Money',o:['Save and plan ahead','Balance saving and spending','Enjoy now, sort it later'],b:['Both savers','Both balance saving and spending','Both live in the moment']},
 {q:'When you disagree, you…',k:'Disagreements',o:['Talk it through right away','Take some space, then talk','Let it pass quietly'],b:['Both talk things out','Both need space, then talk','Both let things pass']},
 {q:'How soon do you want to marry?',k:'Timeline',o:['Within a year','In 1–2 years','When it feels right'],b:['Both ready within a year','Same timeline: 1–2 years','Both in no rush']}
];
/* Gold prices from 28 Oct (his ok): [symbol, 1 month, 3 months, 6 months]. Each plan stays under Google Play's ~US$400 limit. */
Object.assign(PRICE,{CAD:['CA$','119.99','299.99','479.99'],USD:['US$','89.99','219.99','349.99'],GBP:['£','69.99','169.99','269.99'],AUD:['A$','129.99','329.99','529.99'],
 AED:['AED ','329','799','1,279'],EUR:['€','79.99','199.99','319.99'],NZD:['NZ$','149.99','359.99','579.99'],SGD:['S$','119.99','289.99','459.99'],CHF:['CHF ','79.99','199.99','319.99']});
/* Icons added after the prototype (28 Oct): clock, QR ticket, scanner. */
Object.assign(IC,{
 clock:'<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
 qr:'<path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4z"/><path d="M14 14h2.5v2.5H14zM17.5 17.5H20V20h-2.5zM14 18.5V20M18.5 14H20"/>',
 scan:'<path d="M4 9V5.5A1.5 1.5 0 0 1 5.5 4H9M15 4h3.5A1.5 1.5 0 0 1 20 5.5V9M20 15v3.5a1.5 1.5 0 0 1-1.5 1.5H15M9 20H5.5A1.5 1.5 0 0 1 4 18.5V15M4 12h16"/>'});

const API=window.RM_API, CFG=window.RM_CONFIG;
/* Editorial portraits: tonal head-and-shoulders silhouettes used as stand-ins where no
   member photo exists (welcome screen, store images). No faces, skin tones or regional
   dress (every head is the same soft white), so they read as adults from anywhere. portrait(seed, g, {tone}) where tone picks one of P_TONES. */
function rngP(seed){let a=seed>>>0;return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function mixHex(a,b,t){const p=h=>[1,3,5].map(i=>parseInt(h.slice(i,i+2),16));const A=p(a),B=p(b);return '#'+A.map((v,i)=>Math.round(v+(B[i]-v)*t).toString(16).padStart(2,'0')).join('')}
/* Each tone: background light, background deep, figure, clothing */
const P_TONES=[
  ['#F8E8EC','#EBC6D0','#9A4A62','#E9D2D8'],   // rose
  ['#F1E8F4','#D9C6E3','#6A4A82','#EADFEF'],   // mauve
  ['#E9EDF5','#C9D1E4','#3E4B74','#DCE2EE'],   // slate
  ['#E8F0EC','#C8DCD1','#3D6656','#DCE8E1'],   // sage
  ['#E6F0F1','#C3DCDF','#2F6670','#D7E7E9'],   // teal
  ['#F5E7EE','#E3C2D3','#6E3558','#EEDBE5'],   // plum
];
const PCACHE=new Map();
function portrait(seed,g,o){
  o=o||{};const key=seed+g+(o.tone!=null?'t'+o.tone:'');if(PCACHE.has(key))return PCACHE.get(key);
  const r=rngP(seed*9301+49297),pick=a=>a[Math.floor(r()*a.length)],F=g==='F';
  const T=P_TONES[o.tone!=null?o.tone:pick([0,0,1,1,5,5,2,3,4])],id='p'+String(key).replace(/\W/g,'');
  /* Head, neck and ears are the same soft white for every portrait, man or woman, so no
     figure ever reads as a skin colour. The tone only colours hair, clothes and backdrop. */
  const fig=T[2],head='#FBF9FA',headL='#FFFFFF',headD='#E9E2E6',hair=mixHex(fig,'#000000',.38);
  const figL=headL,figD=headD;
  const cloth=pick([T[3],mixHex(fig,'#ffffff',.35),mixHex(fig,'#000000',.1),'#F4F1EC']),clothL=mixHex(cloth,'#ffffff',.18),clothD=mixHex(cloth,'#000000',.2);
  const lean=Math.round((r()-.5)*6);           // slight head turn
  const hx=100+lean, hy=84, hrx=F?24:25.5, hry=F?31:32;
  const K=1.13, TR=`transform="translate(${hx} ${hy}) scale(${K}) translate(${-hx} ${-hy})"`;
  let s=`<svg viewBox="0 0 200 220" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><defs>`
   +`<linearGradient id="${id}b" x1="0" y1="0" x2=".8" y2="1"><stop offset="0" stop-color="${mixHex(T[0],T[1],.45)}"/><stop offset="1" stop-color="${mixHex(T[1],fig,.12)}"/></linearGradient>`
   +`<radialGradient id="${id}g" cx=".3" cy=".22" r=".75"><stop offset="0" stop-color="#ffffff" stop-opacity=".7"/><stop offset="1" stop-color="#ffffff" stop-opacity="0"/></radialGradient>`
   +`<linearGradient id="${id}f" x1="0" y1="0" x2="1" y2=".25"><stop offset="0" stop-color="${figL}"/><stop offset=".55" stop-color="${head}"/><stop offset="1" stop-color="${figD}"/></linearGradient>`
   +`<linearGradient id="${id}c" x1="0" y1="0" x2="1" y2=".3"><stop offset="0" stop-color="${clothL}"/><stop offset=".6" stop-color="${cloth}"/><stop offset="1" stop-color="${clothD}"/></linearGradient>`
   +`<linearGradient id="${id}h" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${mixHex(hair,'#ffffff',.14)}"/><stop offset="1" stop-color="${hair}"/></linearGradient>`
   +`</defs>`;
  s+=`<rect width="200" height="220" fill="url(#${id}b)"/><rect width="200" height="220" fill="url(#${id}g)"/>`;
  // soft shadow on the backdrop
  s+=`<ellipse cx="${118+lean}" cy="196" rx="92" ry="40" fill="${T[1]}" opacity=".55"/>`;
  const hairStyle=F?pick(['long','long','bob','wavy','updo','shoulder']):pick(['crop','side','textured','swept']);
  // long hair falls behind the shoulders
  s+=`<g ${TR}>`;
  if(F&&(hairStyle==='long'||hairStyle==='wavy'))s+=`<path d="M${hx-30} ${hy-6}C${hx-36} ${hy-48} ${hx+36} ${hy-48} ${hx+30} ${hy-6}C${hx+34} ${hy+40} ${hx+40} ${hy+76} ${hx+44} ${hy+102}${hairStyle==='wavy'?`q-10 8-18 2q-8 8-18 2`:''}L${hx-44} ${hy+102}${hairStyle==='wavy'?`q-6 6-14 0`:''}C${hx-40} ${hy+76} ${hx-34} ${hy+40} ${hx-30} ${hy-6}z" fill="url(#${id}h)"/>`;
  if(F&&hairStyle==='shoulder')s+=`<path d="M${hx-29} ${hy-6}C${hx-34} ${hy-46} ${hx+34} ${hy-46} ${hx+29} ${hy-6}C${hx+33} ${hy+28} ${hx+34} ${hy+46} ${hx+36} ${hy+60}L${hx-36} ${hy+60}C${hx-34} ${hy+46} ${hx-33} ${hy+28} ${hx-29} ${hy-6}z" fill="url(#${id}h)"/>`;
  if(F&&hairStyle==='updo')s+=`<ellipse cx="${hx+16}" cy="${hy-30}" rx="14" ry="12" fill="url(#${id}h)"/>`;
  s+=`</g>`;
  // neck
  const nw=F?12:15;
  s+=`<path d="M${hx-nw} ${hy+20}C${hx-nw} ${hy+36} ${hx-nw-1} ${hy+50} ${hx-nw-3} ${hy+62}L${hx+nw+3} ${hy+62}C${hx+nw+1} ${hy+50} ${hx+nw} ${hy+36} ${hx+nw} ${hy+20}z" fill="${figD}"/>`;
  // shoulders and torso
  const sw=F?66:78, top=hy+50, L=100-sw, R=100+sw;
  const torso=`M${hx-nw-2} ${top}C${hx-nw-16} ${top+7} ${L+12} ${top+9} ${L} ${top+24}C${L-8} ${top+32} ${L-12} ${top+52} ${L-13} 220L${R+13} 220C${R+12} ${top+52} ${R+8} ${top+32} ${R} ${top+24}C${R-12} ${top+9} ${hx+nw+16} ${top+7} ${hx+nw+2} ${top}z`;
  s+=`<path d="${torso}" fill="url(#${id}c)"/>`;
  const outfit=F?pick(['vneck','boat','blazer','crew','turtle']):pick(['blazer','blazer','shirt','crew','turtle']);
  if(outfit==='vneck')s+=`<path d="M${hx-nw-6} ${top+4}L${hx} ${top+34}L${hx+nw+6} ${top+4}z" fill="${figD}"/>`;
  if(outfit==='boat')s+=`<path d="M${hx-nw-8} ${top+4}Q${hx} ${top+14} ${hx+nw+8} ${top+4}z" fill="${figD}"/>`;
  if(outfit==='crew')s+=`<path d="M${hx-nw-4} ${top+3}Q${hx} ${top+12} ${hx+nw+4} ${top+3}" stroke="${clothD}" stroke-width="3" fill="none"/>`;
  if(outfit==='turtle')s+=`<path d="M${hx-nw-1} ${hy+40}Q${hx} ${hy+44} ${hx+nw+1} ${hy+40}L${hx+nw+6} ${top+6}Q${hx} ${top+12} ${hx-nw-6} ${top+6}z" fill="url(#${id}c)"/><path d="M${hx-nw-1} ${hy+40}Q${hx} ${hy+44} ${hx+nw+1} ${hy+40}" stroke="${clothD}" stroke-width="1" fill="none" opacity=".6"/>`;
  if(outfit==='shirt'||outfit==='blazer'){
    const inner=outfit==='blazer'?pick(['#F7F4F0',mixHex(T[0],'#ffffff',.5)]):clothL;
    s+=`<path d="M${hx-nw-5} ${top+3}L${hx} ${top+40}L${hx+nw+5} ${top+3}z" fill="${outfit==='blazer'?inner:clothL}"/>`;
    s+=`<path d="M${hx-nw-5} ${top+2}L${hx-3} ${top+16}L${hx-nw+1} ${top+22}zM${hx+nw+5} ${top+2}L${hx+3} ${top+16}L${hx+nw-1} ${top+22}z" fill="${mixHex(outfit==='blazer'?inner:clothL,'#ffffff',.5)}" stroke="${mixHex(cloth,'#000',.12)}" stroke-width=".6"/>`;
    if(outfit==='blazer')s+=`<path d="M${hx-nw-7} ${top+4}L${hx-4} ${top+62}L${hx-18} ${top+30}L${hx-nw-14} ${top+18}zM${hx+nw+7} ${top+4}L${hx+4} ${top+62}L${hx+18} ${top+30}L${hx+nw+14} ${top+18}z" fill="${clothD}" opacity=".55"/>`;
  }
  // head
  s+=`<g ${TR}>`;
  s+=`<ellipse cx="${hx}" cy="${hy}" rx="${hrx}" ry="${hry}" fill="url(#${id}f)"/>`;
  // ears
  s+=`<ellipse cx="${hx-hrx+1}" cy="${hy+4}" rx="3.5" ry="7" fill="${head}"/><ellipse cx="${hx+hrx-1}" cy="${hy+4}" rx="3.5" ry="7" fill="${figD}"/>`;
  // front hair
  if(F){
    if(hairStyle==='bob')s+=`<path d="M${hx-29} ${hy+30}C${hx-36} ${hy-14} ${hx-20} ${hy-40} ${hx+2} ${hy-38}C${hx+26} ${hy-38} ${hx+38} ${hy-14} ${hx+29} ${hy+30}C${hx+24} ${hy+12} ${hx+22} ${hy-6} ${hx+12} ${hy-16}C${hx-2} ${hy-6} ${hx-16} ${hy-8} ${hx-22} ${hy-4}C${hx-24} ${hy+8} ${hx-24} ${hy+18} ${hx-29} ${hy+30}z" fill="url(#${id}h)"/>`;
    else if(hairStyle==='updo')s+=`<path d="M${hx-25} ${hy+2}C${hx-28} ${hy-30} ${hx-8} ${hy-38} ${hx+4} ${hy-37}C${hx+24} ${hy-36} ${hx+30} ${hy-16} ${hx+25} ${hy+2}C${hx+18} ${hy-16} ${hx+6} ${hy-22} ${hx-6} ${hy-20}C${hx-14} ${hy-14} ${hx-20} ${hy-8} ${hx-25} ${hy+2}z" fill="url(#${id}h)"/>`;
    else s+=`<path d="M${hx-27} ${hy+14}C${hx-32} ${hy-26} ${hx-14} ${hy-40} ${hx+4} ${hy-38}C${hx+26} ${hy-36} ${hx+34} ${hy-14} ${hx+27} ${hy+14}C${hx+24} ${hy-4} ${hx+18} ${hy-14} ${hx+8} ${hy-20}C${hx-4} ${hy-10} ${hx-14} ${hy-10} ${hx-22} ${hy-6}C${hx-24} ${hy} ${hx-25} ${hy+6} ${hx-27} ${hy+14}z" fill="url(#${id}h)"/>`;
  }else{
    if(hairStyle==='crop')s+=`<path d="M${hx-25} ${hy-2}C${hx-28} ${hy-30} ${hx-12} ${hy-36} ${hx+2} ${hy-35}C${hx+20} ${hy-35} ${hx+30} ${hy-24} ${hx+25} ${hy-2}C${hx+22} ${hy-14} ${hx+14} ${hy-20} ${hx} ${hy-20}C${hx-12} ${hy-20} ${hx-20} ${hy-14} ${hx-25} ${hy-2}z" fill="url(#${id}h)"/>`;
    if(hairStyle==='side')s+=`<path d="M${hx-26} ${hy}C${hx-30} ${hy-32} ${hx-10} ${hy-38} ${hx+4} ${hy-37}C${hx+24} ${hy-36} ${hx+31} ${hy-22} ${hx+26} ${hy}C${hx+22} ${hy-12} ${hx+16} ${hy-18} ${hx+6} ${hy-22}C${hx-6} ${hy-16} ${hx-18} ${hy-14} ${hx-26} ${hy}z" fill="url(#${id}h)"/><path d="M${hx-8} ${hy-34}Q${hx-2} ${hy-26} ${hx-4} ${hy-21}" stroke="${mixHex(hair,'#fff',.2)}" stroke-width="1.2" fill="none"/>`;
    if(hairStyle==='textured')s+=`<path d="M${hx-26} ${hy-2}C${hx-30} ${hy-24} ${hx-22} ${hy-36} ${hx-10} ${hy-38}C${hx-4} ${hy-42} ${hx+8} ${hy-42} ${hx+14} ${hy-38}C${hx+28} ${hy-34} ${hx+30} ${hy-18} ${hx+26} ${hy-2}C${hx+22} ${hy-14} ${hx+12} ${hy-20} ${hx} ${hy-19}C${hx-12} ${hy-19} ${hx-21} ${hy-13} ${hx-26} ${hy-2}z" fill="url(#${id}h)"/>`;
    if(hairStyle==='swept')s+=`<path d="M${hx-26} ${hy}C${hx-30} ${hy-30} ${hx-14} ${hy-42} ${hx+6} ${hy-41}C${hx+26} ${hy-40} ${hx+32} ${hy-22} ${hx+26} ${hy}C${hx+22} ${hy-16} ${hx+12} ${hy-24} ${hx} ${hy-23}C${hx-12} ${hy-22} ${hx-20} ${hy-14} ${hx-26} ${hy}z" fill="url(#${id}h)"/>`;
    if(r()<.4)r(); /* (no beard shading: it read as a darker face) keeps the same picks as before */
  }
  s+=`</g></svg>`;
  PCACHE.set(key,s);return s;
}


/* ---------- Helpers ---------- */
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const clone=o=>JSON.parse(JSON.stringify(o));
const norm=s=>String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[’']/g,'').trim();
function getPath(o,p){return p.split('.').reduce((a,k)=>a==null?a:a[k],o)}
function setPath(obj,path,val){const ks=path.split('.');let o=obj;for(let i=0;i<ks.length-1;i++){if(o[ks[i]]==null)o[ks[i]]={};o=o[ks[i]]}o[ks[ks.length-1]]=val}
function ageFrom(dob){if(!dob)return null;const d=new Date(dob+'T00:00:00');if(isNaN(d))return null;const n=new Date();let a=n.getFullYear()-d.getFullYear();const m=n.getMonth()-d.getMonth();if(m<0||(m===0&&n.getDate()<d.getDate()))a--;return a}
/* Height: metric by default (his rule 29 Oct 'metric units by default'); feet and inches only for members in the USA. */
function ftIn(cm){if(!cm)return '';let us=false;try{us=/^(United States|USA|US)$/i.test(((typeof S!=='undefined'&&S.me)||{}).country||'')}catch(e){}
  if(!us)return `${Math.round(cm)} cm`;const t=Math.round(cm/2.54);return `${Math.floor(t/12)}'${t%12}"`}
const HEIGHTS=[];for(let i=54;i<=84;i++)HEIGHTS.push({cm:Math.round(i*2.54),label:`${Math.floor(i/12)}'${i%12}" · ${Math.round(i*2.54)} cm`});
function hav(a,b){if(!a||!b)return 99999;const R=6371,t=x=>x*Math.PI/180;const dLa=t(b[0]-a[0]),dLo=t(b[1]-a[1]);const h=Math.sin(dLa/2)**2+Math.cos(t(a[0]))*Math.cos(t(b[0]))*Math.sin(dLo/2)**2;return 2*R*Math.asin(Math.sqrt(h))}
function coordsOf(o){if(!o)return null;const c=ALL_CITIES.find(x=>x[1]===o.country&&norm(x[0])===norm(o.city||''));if(c)return [c[3],c[4]];return stateCoords(o.country,o.state)||countryCoords(o.country)}
function pCoords(p){return p.lat!=null&&p.lng!=null?[p.lat,p.lng]:coordsOf({country:p.country,state:p.state,city:p.cityName})}
function km(p){return hav(coordsOf(S.me),pCoords(p))}
function sameCity(p){return p.country===S.me.country&&norm(p.cityName)===norm(S.me.city||'')}
function myPlace(){return S.me.city||S.me.state||S.me.country}
function distLabel(p){if(p.country!==S.me.country)return p.country;if(sameCity(p))return 'same city';const d=Math.round(km(p));return d>=99999?p.country:`${d} km away`}
function today(){const d=new Date();return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`}
function timeStr(ts){const d=new Date(ts),n=new Date();const same=d.toDateString()===n.toDateString();return same?d.toLocaleTimeString(RM_I18N.lang==='fr'?'fr-CA':[],{hour:'numeric',minute:'2-digit'}):d.toLocaleDateString(RM_I18N.locale,{day:'numeric',month:'short'})}
function shown(p){return p.name||'Member'}
function isBlurred(p){return !(p.photos&&p.photos.length)&&p.photoCount>0}
function price(){const c=CMAP[S.me.country];const cur=c?c[3]:'USD';const pr=PRICE[cur]||PRICE.USD;const n=v=>parseFloat(String(v).replace(/,/g,''));
  const per=(v,m)=>{const x=n(v)/m;return cur==='AED'?String(Math.round(x)):x.toFixed(2)};
  return {sym:pr[0],gold:pr[1],m3:pr[2],m6:pr[3],pm3:per(pr[2],3),pm6:per(pr[3],6)}}
/* Fork and knife, for partner restaurants. */
IC.dish='<path d="M7 3v7a2 2 0 0 0 4 0V3M9 3v18M17 21V3c-2.2 0-3.5 2.8-3.5 6.5S14.8 14 17 14"/>';
/* Google Play Billing: one subscription (neumarry_gold) with three base plans m1, m3, m6. */
const GOLD_PRODUCT='neumarry_gold',GOLD_MONTHS={m1:1,m3:3,m6:6};
const Bill=()=>isNative&&Plug().Billing?Plug().Billing:null;
let store=null,storeLoading=null;
function loadStore(){const B=Bill();if(!B||store)return Promise.resolve(store);if(storeLoading)return storeLoading;
  storeLoading=Promise.resolve(B.getProducts({ids:[GOLD_PRODUCT]})).then(r=>{const pd=((r&&r.products)||[]).find(x=>x.productId===GOLD_PRODUCT);const o={};
    if(pd)(pd.offers||[]).forEach(x=>{if(!x.offerId&&GOLD_MONTHS[x.basePlanId]&&x.offerToken)o[x.basePlanId]=x});
    store=o.m1||o.m3||o.m6?o:null;storeLoading=null;return store}).catch(e=>{console.warn('[billing] products',e&&(e.code||e.message));storeLoading=null;return null});
  return storeLoading}
function money2(micros,cur){try{return new Intl.NumberFormat(RM_I18N.locale,{style:'currency',currency:cur}).format(micros/1e6)}catch(e){return (micros/1e6).toFixed(2)+' '+cur}}
/* The three Gold plans as shown: [key, label, total, per month, tag]. Google Play prices win when they are loaded. */
function planOpts(){const L=price(),tags={m1:'',m3:'Most popular',m6:'Best value'},lab={m1:'1 month',m3:'3 months',m6:'6 months'};
  const local={m1:[L.gold,L.gold],m3:[L.m3,L.pm3],m6:[L.m6,L.pm6]};
  return ['m1','m3','m6'].map(k=>{const o=store&&store[k];
    if(o&&o.priceMicros&&o.currency)return [k,lab[k],money2(o.priceMicros,o.currency),money2(Math.round(o.priceMicros/GOLD_MONTHS[k]/1e4)*1e4,o.currency),tags[k]];
    return [k,lab[k],L.sym+local[k][0],L.sym+local[k][1],tags[k]]})}
function commMatch(pc,pref){return pc===pref||String(pc||'').startsWith(pref+' – ')}
function uuid(){if(window.crypto&&crypto.randomUUID)return crypto.randomUUID();return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,c=>{const r=Math.random()*16|0;return (c==='x'?r:(r&3|8)).toString(16)})}
function hashStr(s){let h=2166136261;for(const c of String(s)){h^=c.charCodeAt(0);h=Math.imul(h,16777619)}return h>>>0}
function money(cents,cur){const sym={CAD:'CA$',USD:'US$',GBP:'£',AUD:'A$',EUR:'€',INR:'₹',NZD:'NZ$',SGD:'S$',CHF:'CHF ',AED:'AED ',MXN:'MX$',PHP:'₱',PLN:'zł ',SEK:'SEK ',NOK:'NOK ',DKK:'DKK ',HKD:'HK$',ILS:'₪',THB:'฿',CZK:'CZK '}[cur]||((cur||'')+' ');const v=cents/100;return sym+(Number.isInteger(v)?v:v.toFixed(2))}
const isNative=!!(window.Capacitor&&window.Capacitor.isNativePlatform&&window.Capacitor.isNativePlatform());
const Plug=()=>(window.Capacitor&&window.Capacitor.Plugins)||{};

/* ---------- State ---------- */
/* S holds what the screens show. Server data is loaded into it; a few personal
   conveniences (saved, passed, sort, last tab) are kept on this device only. */
function fresh(){return {screen:'boot',tab:'matches',seg:'chats',step:1,editMode:false,auth:null,draft:null,errors:{},
  me:null,interests:{},passed:[],shortlist:[],blocked:[],reported:[],chats:{},unread:{},sort:'best',showPassed:false,evFilter:'for',picks:null,
  events:[],admin:null,loaded:false,storyFor:{}}}
let S=fresh();
let PROFILES=[];
let view=null, sheet=null, picker=null, celebrate=null, toastT=null, busy='';
const LKEY='rm.local.v1';
function localKey(){return LKEY+'.'+(API.userId()||'anon')}
function loadLocal(){try{const o=JSON.parse(localStorage.getItem(localKey())||'null');if(o&&typeof o==='object'){['passed','shortlist','reported','sort','showPassed','evFilter','picks','tab','seg','storyFor'].forEach(k=>{if(o[k]!==undefined)S[k]=o[k]})}}catch(e){}}
function save(){try{const o={};['passed','shortlist','reported','sort','showPassed','evFilter','picks','tab','seg','storyFor'].forEach(k=>o[k]=S[k]);localStorage.setItem(localKey(),JSON.stringify(o))}catch(e){}
  if(S.screen==='signup'&&S.draft&&!S.editMode){try{const d=Object.assign({},S.draft);d.photo=null;d.selfie=null;d.idPreview=null;d.loc=null;localStorage.setItem('rm.draft.'+(API.userId()||'anon'),JSON.stringify({d,step:S.step}))}catch(e){}}}
function loadDraft(){try{const o=JSON.parse(localStorage.getItem('rm.draft.'+(API.userId()||'anon'))||'null');if(o&&o.d){return o}}catch(e){}return null}
function clearDraft(){try{localStorage.removeItem('rm.draft.'+(API.userId()||'anon'))}catch(e){}}
const byId=id=>PROFILES.find(p=>p.id===id);
function isGold(){return S.me&&S.me.plan!=='free'}
function locked(p){return !isGold()&&!p.mutual}
function fullyV(p){return !!p.v.id&&!!p.v.selfie&&!!p.v.roots&&!!p.v.lives}
function verified(){const v=S.me&&S.me.v;return !!v&&v.id&&v.selfie&&v.roots&&v.lives}
/* Live = every check passed and a photo approved. Only live members are shown to others, and only they see others. */
function photoOk(){return !!S.me&&(S.me.photos||[]).some(x=>x.status==='approved')}
function isLive(){return verified()&&photoOk()}
function canChat(id){const p=byId(id);return !!p&&p.mutual&&(isGold()||p.gold)}
function chatWhy(id){const p=byId(id);if(isGold()||!p)return '';if(p.gold)return `${p.first||'They'} ${p.first?'has':'have'} Gold, so you can chat for free`;return ''}
const BETA=Date.now()<Date.parse(CFG.betaUntil);

/* ---------- Server data → screen shapes ---------- */
function meFromServer(m){
  const p=m.profile,q=m.prefs||{};
  const pr={ageMin:q.age_min??18,ageMax:q.age_max??75,hMin:q.h_min??HEIGHTS[0].cm,hMax:q.h_max??HEIGHTS[HEIGHTS.length-1].cm,liveCountry:q.live_country||'Any',radius:q.radius_km||0,
    oc:q.origin_country||'Any',os:q.origin_state||'Any',religion:q.religion||'Any',community:q.community||'Any',alsoComm:q.also_communities||[],tongue:q.tongue||'Any',diet:q.diet||'Any',timeline:q.timeline||'Any',settled:!!q.settled_only,verifiedOnly:q.verified_only!==false};
  const photos=(m.photos||[]).filter(x=>x.status!=='rejected');const rejectedPhoto=(m.photos||[]).find(x=>x.status==='rejected');
  const ver=k=>{const list=(m.verifications||[]).filter(v=>v.kind===k);return list.length?list[list.length-1]:null};
  return {id:p.id,name:p.full_name,g:p.gender,lookingFor:p.looking_for,dob:p.dob,age:ageFrom(p.dob),h:p.height_cm,marital:p.marital,createdBy:p.created_by,
    oc:p.origin_country,os:p.origin_state,t:p.mother_tongue,r:p.religion,c:p.community||'',country:p.country,state:p.state||'',city:p.city,res:p.residency,reloc:p.relocate,
    job:p.job,edu:p.education,about:p.about,diet:p.diet,sm:p.smoke,dr:p.drink,ans:(p.answers||[]).map(Number),phone:p.phone||'',
    v:{phone:!!p.phone_verified,id:!!p.id_verified,selfie:!!p.selfie_verified,roots:!!p.roots_verified,lives:!!p.lives_verified&&(!p.lives_until||Date.parse(p.lives_until)>Date.now())},
    rootsAt:p.roots_checked_at,livesAt:p.lives_checked_at,livesUntil:p.lives_until,livesRound:p.lives_round_at,locOk:!!p.loc_ok,locAt:p.loc_checked_at,
    privacy:{blur:p.blur_photos,vis:p.hidden?'hidden':'verified',showC:p.show_community,incognito:p.incognito},
    prefs:pr,plan:m.plan||'free',goldUntil:m.gold_until,goldSource:m.gold_source,isAdmin:!!p.is_admin,womenOffer:p.women_offer_until,womenLeft:m.women_offer_left,
    photos,photoPaths:photos.map(x=>x.path),photoPending:photos.some(x=>x.status==='pending'),rejectedPhoto:rejectedPhoto&&!photos.length?rejectedPhoto:null,
    idCheck:ver('id'),selfieCheck:ver('selfie'),rootsCheck:ver('roots'),statusCheck:ver('status'),addrCheck:ver('address'),checks:m.verifications||[],photo:S.me&&S.me.photoPaths&&S.me.photoPaths[0]===(photos[0]||{}).path?S.me.photo:null,
    lat:p.city_lat,lng:p.city_lng,banned:p.banned,createdAt:p.created_at}
}
function cardFromServer(c){
  const parts=String(c.display_name||'').split(' ');
  return {id:c.id,name:c.display_name,first:c.first_name||'',last:parts.slice(1).join(' '),g:c.gender,age:c.age,h:c.height_cm,marital:c.marital,createdBy:c.created_by,
    oc:c.origin_country,os:c.origin_state,t:c.mother_tongue,r:c.religion,c:c.community||'',cityName:c.city,country:c.country,state:c.state||'',lat:c.city_lat,lng:c.city_lng,
    res:c.residency,reloc:c.relocate,job:c.job||'',edu:c.education||'',about:c.about||'',diet:c.diet,sm:c.smoke,dr:c.drink,ans:(c.answers||[]).map(Number),
    v:{id:!!c.id_verified,selfie:!!c.selfie_verified,roots:!!c.roots_verified,lives:!!c.lives_verified,phone:false,work:false},rootsAt:c.roots_checked_at,livesAt:c.lives_checked_at,locOk:!!c.loc_ok,locAt:c.loc_checked_at,days:c.joined_days||0,photoPaths:c.photo_paths||[],photos:[],photoCount:c.photo_count||0,
    mutual:!!c.mutual,locked:!!c.locked,gold:!!c.gold,fits:!!c.fits,paused:!!c.paused,turban:c.gender==='M'&&c.religion==='Sikh'}
}
const URLS={};   // storage path → signed URL
async function signPaths(paths){const need=paths.filter(p=>p&&!(URLS[p]&&URLS[p].exp>Date.now()+300e3));if(!need.length)return;
  try{const got=await API.signMany('photos',need,7200);Object.keys(got).forEach(k=>{URLS[k]={u:got[k],exp:Date.now()+7200e3}})}catch(e){}}
function urlOf(path){return URLS[path]?URLS[path].u:null}
function attachPhotos(){PROFILES.forEach(p=>{p.photos=p.photoPaths.map(urlOf).filter(Boolean)});if(S.me){const u=S.me.photoPaths[0]&&urlOf(S.me.photoPaths[0]);if(u)S.me.photo=u}}

/* Instant open (29 Oct): the last server answers are kept on this phone (RAW), shown at once on the next
   start, and replaced by fresh answers a moment later. Cleared on sign-out. */
const RAW={};const CK='rm.cache.v1';
/* Bureau partner link neumarry.com/?p=CODE: kept on the phone, saved once on the profile. */
try{const q=new URLSearchParams(location.search).get('p');if(q&&/^[A-Za-z0-9]{2,20}$/.test(q))localStorage.setItem('rm.p',q.toUpperCase())}catch(e){}
function savePartner(m){let c='';try{c=localStorage.getItem('rm.p')||''}catch(e){}if(!c||(m.profile&&m.profile.partner_code))return;API.rpc('set_partner_code',{c}).then(()=>{try{localStorage.removeItem('rm.p')}catch(e){}}).catch(()=>{})}
async function loadMe(){const m=await API.rpc('me');if(!m||!m.profile)return null;RAW.me=m;S.me=meFromServer(m);savePartner(m);return S.me}
async function loadCards(){
  if(!S.me)return;
  const [fit,ints,fitN]=await Promise.all([API.rpc('member_cards',{lim:400,off:0}),API.select('interests',{select:'*'}),isLive()?null:API.rpc('fit_count').catch(()=>0)]);
  const have=new Set((fit||[]).map(c=>c.id));const extra=[];
  (ints||[]).forEach(i=>{const o=i.from_user===S.me.id?i.to_user:i.from_user;if(!have.has(o)&&!extra.includes(o))extra.push(o)});
  let rel=[];if(extra.length)rel=await API.rpc('member_cards',{only_ids:extra,lim:400,off:0});
  RAW.cards=(fit||[]).concat(rel||[]);RAW.ints=ints||[];RAW.fitN=fitN||0;applyCards();
  await signPaths(PROFILES.flatMap(p=>p.photoPaths.slice(0,3)).concat(S.me.photoPaths.slice(0,1)));
  attachPhotos();
}
function applyCards(){
  S.fitN=RAW.fitN||0;
  const me=S.me.id,map={};
  (RAW.ints||[]).forEach(i=>{const other=i.from_user===me?i.to_user:i.from_user;let st;
    if(i.status==='accepted')st='mutual';
    else if(i.from_user===me)st='sent';
    else st=i.status==='declined'?'declined':'received';
    if(!map[other]||st==='mutual')map[other]=st});
  S.interests=map;
  PROFILES=(RAW.cards||[]).map(cardFromServer);attachPhotos();
}
async function loadBlocks(){const b=await API.select('blocks',{select:'blocked'});RAW.blocks=b||[];S.blocked=(b||[]).map(x=>x.blocked)}
let lastMsg=0;
async function loadMessages(){
  const list=await API.rpc('my_messages',{after_id:lastMsg});
  const me=S.me.id;let fresh_=false;
  (list||[]).forEach(m=>{const other=m.sender===me?m.recipient:m.sender;
    if(!S.chats[other])S.chats[other]=[];
    if(S.chats[other].some(x=>x.id===m.id))return;
    S.chats[other].push({id:m.id,f:m.sender===me?'me':'them',x:m.body,ts:Date.parse(m.created_at),flag:m.flagged,read:!!m.read_at});
    if(m.sender!==me&&!m.read_at){S.unread[other]=(S.unread[other]||0)+1;fresh_=true}
    lastMsg=Math.max(lastMsg,m.id)});
  return fresh_;
}
function ensureMatchChats(){Object.keys(S.interests).forEach(id=>{if(S.interests[id]==='mutual'&&!S.chats[id])S.chats[id]=[{f:'sys',x:'You both said yes. Say hello! Phone numbers stay hidden.',ts:Date.now()-1000}]})}
async function loadEvents(){const [list,staff,board,pn]=await Promise.all([API.rpc('event_list'),API.rpc('staff_events').catch(()=>[]),API.rpc('city_board').catch(()=>null),API.rpc('partners_near').catch(()=>[]),API.rpc('online_next').catch(()=>null),API.rpc('my_bio_reactions').catch(()=>null)]).then(r=>{S.online=r[4]||null;const br=r[5];S.bioReacts=Array.isArray(br)?br:(br&&br.my_bio_reactions)||[];return r});RAW.ev=list||[];RAW.staff=staff||[];S.board=board||S.board||null;S.partnersNear=pn||[];applyEvents()}
/* Events closed (his decision 7 Nov 12:42: 'event band, janjat nahi chahiye'): set to false to bring them back. */
var NO_EVENTS=true;
function applyEvents(){S.events=NO_EVENTS?[]:(RAW.ev||[]).map(eventFromServer);S.staff=(RAW.staff||[]).map(x=>typeof x==='string'?x:(x.staff_events||Object.values(x)[0]))}
function cacheSave(){try{if(!RAW.me||!RAW.cards||!API.userId())return;const u={},keep=Date.now()+900e3;
  Object.keys(URLS).forEach(k=>{if(URLS[k].exp>keep)u[k]=URLS[k]});
  localStorage.setItem(CK,JSON.stringify({uid:API.userId(),at:Date.now(),raw:RAW,urls:u}))}catch(e){}}
function cacheLoad(){try{const c=JSON.parse(localStorage.getItem(CK)||'null');
  if(!c||c.uid!==API.userId()||Date.now()-c.at>7*864e5||!c.raw||!c.raw.me||!c.raw.cards)return false;
  Object.assign(RAW,c.raw);Object.assign(URLS,c.urls||{});S.me=meFromServer(RAW.me);applyCards();
  S.blocked=(RAW.blocks||[]).map(x=>x.blocked);applyEvents();ensureMatchChats();return true}catch(e){console.warn('[cache]',e&&e.message);return false}}
function cacheClear(){try{localStorage.removeItem(CK)}catch(e){}Object.keys(RAW).forEach(k=>delete RAW[k])}
async function loadAll(){
  await Promise.all([loadCards(),loadBlocks(),loadMessages(),loadEvents()]);
  ensureMatchChats();S.loaded=true;
}

/* ---------- Matching ---------- */
function dietGroup(d){return d==='Non-vegetarian'?2:d==='Eggetarian'?1:0}
function compat(p){
  const me=S.me;
  let v=0;for(let i=0;i<QS.length;i++){const d=Math.abs((me.ans[i]??1)-(p.ans[i]??1));v+=d===0?1:d===1?.5:0}v/=QS.length;
  const dg=Math.abs(dietGroup(me.diet)-dietGroup(p.diet));const ds=dg===0?1:dg===1?.6:.25;
  const si=Math.abs(SMOKE.indexOf(me.sm)-SMOKE.indexOf(p.sm));const ss=si===0?1:si===1?.6:.2;
  const di=Math.abs(DRINK.indexOf(me.dr)-DRINK.indexOf(p.dr));const dd=di===0?1:di===1?.7:.3;
  const life=ds*.5+ss*.25+dd*.25;
  const pr=me.prefs;
  const aOk=p.age>=pr.ageMin&&p.age<=pr.ageMax, hOk=p.h>=pr.hMin&&p.h<=pr.hMax;
  const tA=p.g==='F'?(me.age>=p.age-1&&me.age<=p.age+6):(me.age>=p.age-6&&me.age<=p.age+2);
  const tH=p.g==='F'?me.h>=p.h:true;
  const pref=((aOk?1:0)+(hOk?1:0)+(tA?1:0)+(tH?1:0))/4;
  const d=km(p), same=p.country===me.country;
  const loc=same&&d<=25?1:same&&d<=100?.85:same&&d<=500?.6:same?.4:.1;
  const roots=(p.oc===me.oc?.5:0)+(p.oc===me.oc&&p.os===me.os?.3:0)+(p.t===me.t?.2:0);
  const total=Math.round(v*55+life*15+pref*10+loc*10+roots*10);
  return {total:Math.max(1,Math.min(99,total)),values:v,life,pref,loc,roots};
}
function whyChips(p){
  const me=S.me,out=[];
  if(p.oc===me.oc&&p.os===me.os)out.push({t:`Both from ${p.os}`,r:1});
  else if(p.t===me.t)out.push({t:`Both speak ${p.t}`,r:1});
  else if(p.oc===me.oc)out.push({t:`Both from ${p.oc}`,r:1});
  for(const i of [0,1,2,3,8,4,7,5,6]){if(out.length>=3)break;if(me.ans[i]===p.ans[i]&&QS[i].b[p.ans[i]])out.push({t:QS[i].b[p.ans[i]]})}
  if(out.length<3&&dietGroup(me.diet)===0&&dietGroup(p.diet)===0)out.push({t:'Both vegetarian'});
  return out.slice(0,3);
}
function baseEligible(p){return p.g===S.me.lookingFor&&!S.blocked.includes(p.id)&&!S.reported.includes(p.id)}
function passFilters(p,o){
  const me=S.me,pr=Object.assign({},me.prefs,o||{});
  if(p.age<pr.ageMin||p.age>pr.ageMax)return false;
  if(p.h<pr.hMin||p.h>pr.hMax)return false;
  if(pr.liveCountry!=='Any'&&p.country!==pr.liveCountry)return false;
  if(pr.radius>0&&pr.liveCountry===me.country&&km(p)>pr.radius)return false;
  if(pr.oc!=='Any'&&p.oc!==pr.oc)return false;
  if(pr.oc!=='Any'&&pr.os!=='Any'&&p.os!==pr.os)return false;
  if(pr.religion!=='Any'&&p.r!==pr.religion)return false;
  if(pr.timeline==='year'&&p.ans&&p.ans[8]!==0)return false;
  if(pr.timeline==='two'&&p.ans&&p.ans[8]!==0&&p.ans[8]!==1)return false;
  if(pr.religion!=='Any'&&pr.community!=='Any'&&!commMatch(p.c,pr.community)&&!(pr.alsoComm||[]).some(x=>commMatch(p.c,x)))return false;
  if(pr.tongue!=='Any'&&p.t!==pr.tongue)return false;
  if(pr.diet==='veg'&&dietGroup(p.diet)!==0)return false;
  if(pr.settled&&!SETTLED.includes(p.res))return false;
  return true;
}
function matchList(){return PROFILES.filter(p=>p.fits&&!p.paused&&baseEligible(p)&&passFilters(p)&&S.interests[p.id]!=='declined'&&(S.showPassed||!S.passed.includes(p.id)))}
function sortList(list,mode){
  const c=new Map(list.map(p=>[p.id,compat(p).total]));const arr=list.slice();
  if(mode==='near')arr.sort((a,b)=>km(a)-km(b)||c.get(b.id)-c.get(a.id));
  else if(mode==='new')arr.sort((a,b)=>a.days-b.days);
  else arr.sort((a,b)=>c.get(b.id)-c.get(a.id));
  return arr;
}
function activeFilterCount(){const pr=S.me.prefs,d=defaultPrefs(S.me);let n=0;['liveCountry','radius','oc','os','religion','community','tongue','diet','settled'].forEach(k=>{if(String(pr[k])!==String(d[k]))n++});if((pr.alsoComm||[]).length)n++;return n}

/* ---------- Defaults ---------- */
function blankDraft(){return {name:'',createdBy:'Self',g:'',lookingFor:'',dob:'',h:'',marital:'Never married',photo:null,photoBlob:null,
  oc:'',os:'',t:'',r:'',c:'',country:'',state:'',city:'',res:'',reloc:'',job:'',edu:'',about:'',diet:'',sm:'No',dr:'No',ans:QS.map(()=>null),
  v:{phone:false,id:false,selfie:false,roots:false,lives:false},phone:'',idName:'',idBlob:null,idPreview:null,selfie:null,selfieBlob:null,
  rootsType:'',rootsBlob:null,rootsName:'',statusType:'',statusBlob:null,statusName:'',addrType:'',addrBlob:null,addrName:'',tzAck:'',vs:0,
  privacy:{blur:true,vis:'verified',showC:true,incognito:false},prefs:null}}
function defaultPrefs(d){const a=ageFrom(d.dob)||27;const male=d.g==='M';
  return {ageMin:Math.max(18,male?a-5:a-1),ageMax:male?a+1:a+6,hMin:male?HEIGHTS[0].cm:(+d.h||HEIGHTS[0].cm),hMax:HEIGHTS[HEIGHTS.length-1].cm,
    liveCountry:d.country||'Any',radius:0,oc:d.oc||'Any',os:'Any',religion:d.r||'Any',community:'Any',alsoComm:[],tongue:'Any',diet:'Any',timeline:'Any',settled:false}}

/* ---------- Pickers ---------- */
const cOpt=n=>({v:n,l:n,pre:flag(n)});
const sOpt=s=>({v:s[0],l:s[0]});
function relocOpts(country){return [{v:'no',l:'No, I want to stay here'},{v:'within',l:`Yes, within ${country||'my country'}`},{v:'anywhere',l:'Yes, anywhere, including back home'}]}
function ages(){const a=[];for(let i=18;i<=70;i++)a.push({v:i,l:String(i)});return a}
function pickerDef(key,t){
  const o=t==='me'?S.me:S.draft, pr=(o&&o.prefs)||{};
  const H=HEIGHTS.map(x=>({v:x.cm,l:x.label}));
  switch(key){
    case 'createdBy':return {title:'Profile created by',opts:['Self','Parent','Sibling','Relative','Friend'].map(x=>({v:x,l:x}))};
    case 'h':return {title:'Your height',opts:H,num:true,ph:'Search height, e.g. 5\'8'};
    case 'marital':return {title:'Marital status',opts:MARITAL.map(x=>({v:x,l:x}))};
    case 'oc':return {title:'Country of origin',ph:'Search all countries',secs:[['Popular',POP_ORIGIN.map(cOpt)],['All countries',COUNTRY_NAMES.map(cOpt)]]};
    case 'os':return {title:`State / region in ${o.oc}`,ph:'Search states and regions',opts:statesOf(o.oc).map(sOpt),custom:true};
    case 't':return {title:'Mother tongue',ph:'Search all languages',secs:[['Common',POP_TONGUE.map(x=>({v:x,l:x}))],['All languages',LANGS.map(x=>({v:x,l:x}))]],custom:true};
    case 'r':return {title:'Religion',ph:'Search religions',opts:RELIGIONS.map(x=>({v:x,l:x}))};
    case 'c':return {title:`Community · ${o.r}`,ph:'Search or type your community',opts:[{v:'',l:'Prefer not to say'}].concat(commOf(o.r).map(x=>({v:x,l:x}))),custom:true};
    case 'country':return {title:'Country you live in',ph:'Search all countries',secs:[['Popular',POP_LIVE.map(cOpt)],['All countries',COUNTRY_NAMES.map(cOpt)]]};
    case 'state':return {title:`State / province in ${o.country}`,ph:'Search states and provinces',opts:statesOf(o.country).map(sOpt),custom:true};
    case 'city':{const list=ALL_CITIES.filter(c=>c[1]===o.country).sort((a,b)=>(b[2]===o.state)-(a[2]===o.state)||a[0].localeCompare(b[0]));
      const seen=new Set();const opts=list.filter(c=>!seen.has(c[0])&&seen.add(c[0])).map(c=>({v:c[0],l:c[0],sub:c[2]||''}));
      return {title:'City',ph:'Search or type your city',opts,custom:true}}
    case 'res':return {title:`Residency in ${o.country}`,opts:resOf(o.country).map(x=>({v:x,l:x}))};
    case 'reloc':return {title:'Open to relocating?',opts:relocOpts(o.country)};
    case 'diet':return {title:'Diet',opts:DIETS.map(x=>({v:x,l:x}))};
    case 'sm':return {title:'Smoking',opts:SMOKE.map(x=>({v:x,l:x}))};
    case 'dr':return {title:'Drinking',opts:DRINK.map(x=>({v:x,l:x}))};
    case 'privacy.vis':return {title:'Who can see my profile',opts:[{v:'verified',l:'Verified members only'},{v:'matches',l:'Only people who fit my preferences'},{v:'hidden',l:'Nobody for now (paused)'}]};
    case 'prefs.ageMin':return {title:'Age from',opts:ages(),num:true};
    case 'prefs.ageMax':return {title:'Age to',opts:ages(),num:true};
    case 'prefs.hMin':return {title:'Height from',opts:H,num:true};
    case 'prefs.hMax':return {title:'Height to',opts:H,num:true};
    case 'prefs.liveCountry':{const mine=o.country;return {title:'Where they live',ph:'Search all countries',secs:[['',[{v:'Any',l:'Any country',pre:'🌍'}].concat(mine?[Object.assign(cOpt(mine),{sub:'Where you live'})]:[])],['Popular',POP_LIVE.map(cOpt)],['All countries',COUNTRY_NAMES.map(cOpt)]]}}
    case 'prefs.radius':return {title:`Distance from ${o.city||o.state||'you'}`,num:true,opts:[{v:0,l:`Anywhere in ${pr.liveCountry}`}].concat([25,50,100,250,500,1000].map(k=>({v:k,l:`Within ${k} km`})))};
    case 'prefs.oc':return {title:'Their roots: country',ph:'Search all countries',secs:[['',[{v:'Any',l:'Any country',pre:'🌍'}]],['Popular',POP_ORIGIN.map(cOpt)],['All countries',COUNTRY_NAMES.map(cOpt)]]};
    case 'prefs.os':return {title:`State / region in ${pr.oc}`,ph:'Search states and regions',opts:[{v:'Any',l:'Any state or region'}].concat(statesOf(pr.oc).map(sOpt))};
    case 'prefs.religion':return {title:'Religion',ph:'Search religions',opts:[{v:'Any',l:'Any religion'}].concat(RELIGIONS.map(x=>({v:x,l:x})))};
    case 'prefs.community':return {title:`Community · ${pr.religion}`,ph:'Search communities',opts:[{v:'Any',l:'Any community'}].concat(commOf(pr.religion).map(x=>({v:x,l:x,sub:x==='Brahmin'?'Includes every Brahmin sub-community':''})))};
    case 'prefs.tongue':return {title:'Mother tongue',ph:'Search all languages',secs:[['',[{v:'Any',l:'Any language'}]],['Common',POP_TONGUE.map(x=>({v:x,l:x}))],['All languages',LANGS.map(x=>({v:x,l:x}))]]};
    case 'prefs.diet':return {title:'Diet',opts:[{v:'Any',l:'Any diet'},{v:'veg',l:'Vegetarian, vegan or Jain only'}]};
    case 'prefs.alsoComm':{const sg=nearComm(o,pr.religion);return {title:'Also open to',multi:true,ph:'Search communities',secs:[['Close to your roots',sg.map(x=>({v:x,l:x}))],[`All ${pr.religion} communities`,commOf(pr.religion).filter(x=>x!==pr.community&&!(pr.community==='Brahmin'&&x.startsWith('Brahmin'))).map(x=>({v:x,l:x}))]]}}
  }
  return {title:'',opts:[]};
}
function secsOf(def){return def.secs||[['',def.opts||[]]]}
function allOpts(def){const seen=new Set(),out=[];secsOf(def).forEach(([,os])=>os.forEach(x=>{const k=String(x.v);if(!seen.has(k)){seen.add(k);out.push(x)}}));return out}
function labelOf(def,v){const f=allOpts(def).find(x=>String(x.v)===String(v));return f?f:{l:String(v),pre:''}}
function pickF(key,label,t,x){x=x||{};const o=t==='me'?S.me:S.draft;const v=getPath(o,key);const def=pickerDef(key,t);
  if(def.multi){const arr=Array.isArray(v)?v:[];const id=key.replace(/\./g,'-');const txt=arr.length?(arr.length<=2?arr.join(', '):`${arr.slice(0,2).join(', ')} +${arr.length-2} more`):(x.ph||'None yet');
    return `<div class="fld" data-f="${key}"><span class="flabel" id="lb-${id}">${label}</span><button type="button" class="pick${arr.length?'':' empty'}" id="pk-${id}" data-a="pick" data-k="${key}" data-t="${t}" aria-labelledby="lb-${id} pk-${id}" aria-haspopup="dialog"${x.disabled?' disabled':''}><span class="pv">${esc(txt)}</span>${ic('chev')}</button>${x.hint?`<span class="hint">${x.hint}</span>`:''}</div>`}
  const has=v!==''&&v!=null&&!(x.blankAny&&v==='Any');const L=has?labelOf(def,v):null;const id=key.replace(/\./g,'-');
  const shownL=has?L.l:(v===''&&def.opts&&def.opts[0]&&def.opts[0].v===''&&x.showBlank?def.opts[0].l:'');
  return `<div class="${fldCls(key)}" data-f="${key}"><span class="flabel" id="lb-${id}">${label}</span><button type="button" class="pick${shownL?'':' empty'}" id="pk-${id}" data-a="pick" data-k="${key}" data-t="${t}" aria-labelledby="lb-${id} pk-${id}" aria-haspopup="dialog"${x.disabled?' disabled':''}><span class="pv">${shownL?`${L&&L.pre?esc(L.pre)+' ':''}${esc(shownL)}`:esc(x.ph||'Select')}</span>${ic('chev')}</button>${x.hint?`<span class="hint">${x.hint}</span>`:''}${errOf(key)}</div>`}
function pickRows(){
  const def=pickerDef(picker.k,picker.t);const o=picker.t==='me'?S.me:S.draft;const raw=getPath(o,picker.k);const cur=String(raw??'');const q=norm(picker.q||'');const marr=def.multi?(Array.isArray(raw)?raw:[]):null;
  const row=x=>{const on=marr?marr.includes(x.v):String(x.v)===cur;return `<button class="prow${on?' on':''}" data-a="pickSet" data-v="${esc(x.v)}" role="option" aria-selected="${on}">${x.pre?`<span class="fl" aria-hidden="true">${esc(x.pre)}</span>`:''}<span class="lb">${esc(x.l)}${x.sub?`<small>${esc(x.sub)}</small>`:''}</span>${on?ic('check'):''}</button>`};
  let html='',exact=false;
  if(q){const m=allOpts(def).filter(x=>norm(x.l).includes(q)||(x.sub&&norm(x.sub).includes(q)));
    m.sort((a,b)=>(norm(b.l).startsWith(q))-(norm(a.l).startsWith(q)));exact=m.some(x=>norm(x.l)===q);html=m.slice(0,400).map(row).join('')}
  else secsOf(def).forEach(([h,os])=>{if(!os.length)return;if(h)html+=`<div class="phead">${esc(h)}</div>`;html+=os.map(row).join('')});
  const typed=(picker.q||'').trim();
  if(def.custom&&typed&&!exact)html=`<button class="prow custom" data-a="pickSet" data-v="${esc(typed)}">${ic('plus')}<span class="lb">Use “${esc(typed)}”</span></button>`+html;
  if(!html)html=`<p class="pempty">${typed?`Nothing found for “${esc(typed)}”. Try another spelling.`:(def.custom?'Type to add yours.':'Nothing to choose here yet.')}</p>`;
  return html;
}
function renderPicker(){
  const def=pickerDef(picker.k,picker.t);const n=allOpts(def).length;const showSearch=n>7||def.custom;
  return `<div class="sheet-wrap picker-wrap${showSearch?' tall':''}"><button class="backdrop" data-a="pickClose" aria-label="Close"></button><div class="sheet" role="dialog" aria-modal="true" aria-label="${esc(def.title)}"><div class="grip" aria-hidden="true"></div>
   <div class="sheet-h pad"><h2>${esc(def.title)}</h2><button class="iconbtn" data-a="pickClose" aria-label="Close">${ic('x')}</button></div>
   ${showSearch?`<div class="psearch pad">${ic('search')}<input id="pick-q" type="search" placeholder="${esc(def.ph||'Search')}" value="${esc(picker.q||'')}" autocomplete="off" enterkeyhint="done" aria-label="${esc(def.ph||'Search')}"></div>`:''}
   <div class="plist pad" id="pick-list" role="listbox"${def.multi?' aria-multiselectable="true"':''}>${pickRows()}</div>${def.multi?`<div class="sheet-f pad"><button class="btn primary block" data-a="pickClose">Done${(()=>{const a=getPath(picker.t==='me'?S.me:S.draft,picker.k);return Array.isArray(a)&&a.length?` · ${a.length} selected`:''})()}</button></div>`:''}</div></div>`;
}
/* Marriage timeline (28 Oct, his ok): filter "Ready to marry" + a pill on each card, from question 9 "How soon do you want to marry?". */
const _pickerDef0=pickerDef;
pickerDef=function(key,t){if(key==='prefs.timeline')return {title:'Ready to marry',opts:[{v:'Any',l:'Any time'},{v:'year',l:'Within a year'},{v:'two',l:'Within 2 years'}]};return _pickerDef0(key,t)};
const TL_PILL=['Ready to marry within a year','Ready to marry in 1–2 years','Marriage when it feels right'];
function timelinePill(p){const a=p.ans&&p.ans[8];return a===0||a===1||a===2?`<div class="tlrow"><span class="pill mtl">${ic('clock')}<span>${TL_PILL[a]}</span></span></div>`:''}
/* World-wide (29 Oct mock): language and community lists follow the country of origin, more diets, Pakistan NICOP. */
const TONGUE_BY_ORIGIN={India:POP_TONGUE,Pakistan:['Urdu','Punjabi','Sindhi','Pashto','Saraiki','Balochi','English'],Bangladesh:['Bengali','Sylheti','Chittagonian','English'],
 Nepal:['Nepali','Maithili','Bhojpuri','Newari','Tamang','English'],'Sri Lanka':['Sinhala','Tamil','English'],Philippines:['Filipino','Cebuano','Ilocano','Hiligaynon','English'],
 China:['Mandarin','Cantonese','Hokkien','Hakka'],'Hong Kong S.A.R.':['Cantonese','English','Mandarin'],Nigeria:['Yoruba','Igbo','Hausa','English'],Ghana:['Akan','Ewe','English'],
 Kenya:['Swahili','English','Kikuyu','Luo'],Mexico:['Spanish'],Brazil:['Portuguese'],Vietnam:['Vietnamese'],'South Korea':['Korean'],Japan:['Japanese'],Iran:['Persian','Azerbaijani','Kurdish'],
 Afghanistan:['Dari','Pashto','Uzbek'],Lebanon:['Arabic','French','Armenian'],Egypt:['Arabic'],Morocco:['Arabic','French','Berber'],Ethiopia:['Amharic','Oromo','Tigrinya'],
 Somalia:['Somali','Arabic'],Ukraine:['Ukrainian','Russian'],Poland:['Polish'],Italy:['Italian'],Portugal:['Portuguese'],Turkey:['Turkish','Kurdish'],Fiji:['Fiji Hindi','Fijian','English'],
 'Fiji Islands':['Fiji Hindi','Fijian','English'],Mauritius:['Mauritian Creole','Bhojpuri','French','English'],Guyana:['English','Guyanese Creole'],'Trinidad And Tobago':['English']};
const COMM_BY_ORIGIN={Pakistan:['Punjabi','Pashtun','Sindhi','Muhajir','Baloch','Kashmiri','Saraiki'],Bangladesh:['Bengali','Sylheti','Chittagonian'],
 Nepal:['Brahmin (Bahun)','Chhetri','Newar','Gurung','Magar','Tamang','Rai','Limbu','Tharu','Sherpa','Madhesi','Thakali'],'Sri Lanka':['Sinhalese','Sri Lankan Tamil','Indian Tamil','Sri Lankan Moor','Burgher'],
 Philippines:['Tagalog','Cebuano','Ilocano','Kapampangan','Bicolano','Waray','Hiligaynon','Moro'],China:['Han','Hui','Manchu','Uyghur','Zhuang','Tibetan','Hakka'],
 Nigeria:['Yoruba','Igbo','Hausa','Fulani','Ijaw','Edo','Ibibio','Tiv'],Ghana:['Akan','Ewe','Ga-Adangbe','Mole-Dagbani'],Kenya:['Kikuyu','Luo','Luhya','Kalenjin','Kamba','Kenyan Asian'],
 Afghanistan:['Pashtun','Tajik','Hazara','Uzbek'],Iran:['Persian','Azeri','Kurd','Lur','Armenian'],Lebanon:['Maronite','Sunni','Shia','Druze','Greek Orthodox','Armenian'],
 Ethiopia:['Oromo','Amhara','Tigray','Somali','Gurage'],'Fiji Islands':['Indo-Fijian','iTaukei'],Guyana:['Indo-Guyanese','Afro-Guyanese'],'Trinidad And Tobago':['Indo-Trinidadian','Afro-Trinidadian'],
 Mauritius:['Indo-Mauritian','Creole','Sino-Mauritian'],'Hong Kong S.A.R.':['Cantonese','Hakka','Teochew']};
['Halal','Kosher','Pescatarian'].forEach(x=>{if(!DIETS.includes(x))DIETS.push(x)});
const _pickerDefW=pickerDef;
pickerDef=function(key,t){const d=_pickerDefW(key,t),o=t==='me'?S.me:S.draft;
  if(key==='t'&&o&&TONGUE_BY_ORIGIN[o.oc])d.secs=[['Common in '+o.oc,TONGUE_BY_ORIGIN[o.oc].map(x=>({v:x,l:x}))],['All languages',LANGS.map(x=>({v:x,l:x}))]];
  if(key==='c'&&o&&COMM_BY_ORIGIN[o.oc]){const have=new Set(d.opts.map(x=>x.v));const extra=COMM_BY_ORIGIN[o.oc].filter(x=>!have.has(x)).map(x=>({v:x,l:x}));
    d.secs=[['',d.opts.slice(0,1)],['From '+o.oc,extra],[o.r?o.r+' communities':'',d.opts.slice(1)]].filter(s=>s[1].length);delete d.opts}
  if(key==='os'&&o&&!o.oc)return {title:'State / region',opts:[],ph:'Choose your country of origin first',custom:true};
  return d};
const _rootsDocsW=rootsDocs;
rootsDocs=function(oc){const o=_rootsDocsW(oc);if(oc==='Pakistan')o.splice(1,1,{v:'NICOP or POC',l:'NICOP or POC card',s:'For people of Pakistani origin living abroad.'});return o};
function applyChange(t,key,v){
  const o=t==='me'?S.me:S.draft;if(!o)return;
  setPath(o,key,v);
  if(t==='draft'){
    if(key==='oc')o.os='';
    if(key==='country'){o.state='';o.city='';o.res='';o.reloc=''}
    if(key==='state')o.city='';
    if(key==='r')o.c='';
    delete S.errors[key];
  }
  const pr=o.prefs;
  if(pr){
    if(key==='prefs.oc')pr.os='Any';
    if(key==='prefs.religion'){pr.community='Any';pr.alsoComm=[]}
    if(key==='prefs.community'&&v==='Any')pr.alsoComm=[];
    if(key==='prefs.liveCountry'&&v!==o.country)pr.radius=0;
    if(key==='prefs.ageMin'&&pr.ageMin>pr.ageMax)pr.ageMax=pr.ageMin;
    if(key==='prefs.ageMax'&&pr.ageMax<pr.ageMin)pr.ageMin=pr.ageMax;
    if(key==='prefs.hMin'&&pr.hMin>pr.hMax)pr.hMax=pr.hMin;
    if(key==='prefs.hMax'&&pr.hMax<pr.hMin)pr.hMin=pr.hMax;
    if(t==='draft'){delete S.errors['prefs.ageMax'];delete S.errors['prefs.hMax']}
  }
  if(t==='me'){if(key.startsWith('prefs.'))queuePrefsSave();else if(key.startsWith('privacy.'))savePrivacy()}
  save();
}

/* ---------- Toast ---------- */
function toast(msg,icon){try{if(typeof naOn==='function'&&naOn()&&typeof msg==='string')msg=msg.replace(/NeuMarry/g,'NeuAmigo')}catch(e){}clearTimeout(toastT);const old=document.querySelector('.toast');if(old)old.remove();
  const el=document.createElement('div');el.className='toast';el.setAttribute('role','status');el.innerHTML=(icon?ic(icon):'')+`<span>${esc(msg)}</span>`;
  document.getElementById('app').appendChild(el);toastT=setTimeout(()=>el.remove(),3800)}
function fail(e,field){if(e&&(e.code==='rude_words'||e.code==='money_request'))API.rpc('log_rude',{field:(e.code==='money_request'?'money-':'')+(field||'app')}).catch(()=>{});toast((e&&e.message)||'Something went wrong. Please try again.','info')}

/* ---------- Components ---------- */
const LOCKCHIP=()=>`<span class="lockchip glass">${ic('lock')}Photos unlock when you both accept</span>`;
function initials(n){return String(n||'').replace(/[^\p{L} ]/gu,'').split(' ').filter(Boolean).slice(0,2).map(s=>s[0]).join('').toUpperCase()}
function hueOf(id){return 330+hashStr(id)%50}
function avatar(p,size,isMe){
  if(isMe){const me=S.screen==='signup'?S.draft:S.me;const src=me&&(me.photo||null);
    return `<span class="av av-${size}" style="--h:${hueOf((me&&me.name)||'me')}">${src?`<img src="${esc(src)}" alt="Your photo">`:`<span class="av-art">${SIL}<span class="av-ini">${esc(initials(me&&me.name)||'')}</span></span>`}</span>`}
  const src=p.photos&&p.photos[0];const b=!src&&p.photoCount>0;const big=size==='cover'||size==='xl';
  if(src)return `<span class="av av-${size}"><img src="${esc(src)}" alt="" loading="lazy"></span>`;
  return `<span class="av av-${size}${b?' blur':''}" style="--h:${hueOf(p.id)}"><span class="av-art">${SIL}${!locked(p)&&!b&&p.first?`<span class="av-ini">${esc(initials(p.name))}</span>`:''}</span>${b&&!big?`<span class="av-lock">${ic('lock')}</span>`:''}</span>${b&&big?LOCKCHIP():(!b&&big&&!p.photoCount?`<span class="lockchip glass">${ic('camera')}No photo yet</span>`:'')}`;
}
function ring(n){const r=23,c=2*Math.PI*r,col=n>=80?'var(--rose)':n>=65?'var(--gold)':'var(--muted)';
  return `<span class="ring" aria-label="${n}% compatible"><svg viewBox="0 0 56 56"><circle class="tr" cx="28" cy="28" r="${r}"/><circle cx="28" cy="28" r="${r}" style="stroke:${col}" stroke-dasharray="${(c*n/100).toFixed(1)} ${c.toFixed(1)}"/></svg><b>${n}%</b></span>`}
function vtick(p){return p.v.id&&p.v.selfie?`<span class="vtick" title="ID verified">${ic('badge')}<span class="sr">ID verified</span></span>`:''}
function rootsLine(p){const v=k=>p.v&&p.v[k]?`<span class="pv" title="Proven with a document">${ic('check')}<span class="sr">proven</span></span>`:'';return `<span class="roots"><span class="rg"><span class="k">Roots</span> ${esc(p.os)}, ${esc(p.oc)}${v('roots')}</span> <span class="rg"><span class="arr" aria-hidden="true">→</span> <span class="k">Lives</span> ${esc(p.cityName)}${v('lives')} · ${esc(distLabel(p))}</span></span>`}
function trustBadges(p){const out=[];
  if(p.v&&p.v.roots)out.push(`<span class="pill ver">${ic('check')}Roots proven</span>`);
  if(p.v&&p.v.lives)out.push(`<span class="pill ver">${ic('check')}Lives in ${esc(p.country)}: proven</span>`);
  if(p.gold)out.push(`<span class="pill gold">${ic('crown')}Gold member</span>`);
  return out.length?`<div class="badges">${out.join('')}</div>`:''}
function actionBar(p){
  const st=S.interests[p.id], sl=S.shortlist.includes(p.id);
  const star=`<button class="rbtn${sl?' on':''}" data-a="shortlist" data-id="${p.id}" aria-label="${sl?'Remove from saved':'Save for later'}" aria-pressed="${sl}">${ic('star')}</button>`;
  if(st==='mutual')return `<span class="status-line"><span class="pill good">${ic('heart')}Matched</span></span>${star}<button class="btn primary" data-a="openchat" data-id="${p.id}">${ic('chat')}Chat</button>`;
  if(st==='received')return `<button class="btn ghost" data-a="decline" data-id="${p.id}">Decline</button>${star}<button class="btn primary" data-a="accept" data-id="${p.id}">${ic('heart')}Accept</button>`;
  if(st==='sent')return `<span class="status-line"><span class="pill gold">${ic('heart')}Interest sent</span></span>${star}`;
  const passed=S.passed.includes(p.id);
  return `${passed?`<button class="btn ghost" data-a="unpass" data-id="${p.id}">Undo pass</button>`:`<button class="rbtn" data-a="pass" data-id="${p.id}" aria-label="Pass">${ic('x')}</button>`}${star}<button class="btn primary" data-a="interest" data-id="${p.id}">${ic('heart')}Send interest</button>`;
}
function card(p){
  const c=compat(p);const st=S.interests[p.id];const lk=locked(p)&&!(st==='received'&&p.gold);
  const top=st==='received'?`<span class="mchip state">${ic('heart')}Likes you</span>`:p.days<=10?`<span class="mchip new">New</span>`:'<span></span>';
  return `<article class="mcard nm-card${lk?' lockd':''}" id="card-${p.id}">
    <button class="mphoto" data-a="open" data-id="${p.id}" aria-label="${lk?`See this ${c.total}% match with Gold`:`Open ${esc(shown(p))}'s profile`}">
      ${avatar(p,'cover')}
      <span class="mtop">${top}<span class="nm-fit" style="--fit:${c.total}%" aria-label="${c.total}% fit"><span>${c.total}%<small>fit</small></span></span></span>
      <span class="mname"><span class="nm">${esc(shown(p))} <span class="age">${p.age}</span> ${checksSeal(p)}</span><small>${lk?`${ic('lock')} Name, photos and profile with Gold`:`${esc(p.job)} · ${ftIn(p.h)}`}</small></span>
    </button>
    <div class="mbody">${routeLine(p)}
      <ul class="nm-why">${whyChips(p).map(w=>`<li>${ic('heart')}<span>${esc(w.t)}</span></li>`).join('')}</ul>
      ${timelinePill(p)}${p.gold?`<div class="badges"><span class="pill gold">${ic('crown')}Gold member</span></div>`:''}
      <div class="mact">${lk?`<button class="btn gold" data-a="upgrade" data-r="profile" data-id="${p.id}">${ic('crown')}See ${p.g==='F'?'her':'his'} profile</button>`:actionBar(p)}</div></div>
  </article>`;
}
/* New design (29 Oct, his "design ok"): roots route on every card, checks seal, fit ring. */
function checksDone(p){const v=p.v||{};return [v.id,v.selfie,v.roots,v.lives,true].filter(Boolean).length}
function checksSeal(p){const n=checksDone(p);return `<span class="nm-seal${n===5?'':' part'}">${ic('check')}${n} of 5 checks</span>`}
function checksRow(p){const v=p.v||{};return `<div class="nm-chk">${[['ID',v.id],['Live selfie',v.selfie],['Roots',v.roots],['City',v.lives],['Photos',true]].map(([k,ok])=>`<span class="${ok?'ok':''}"><i>${ic(ok?'check':'clock')}</i>${k}</span>`).join('')}</div>`}
function routeLine(p){const me=S.me,same=p.oc===me.oc&&p.os===me.os,sameC=p.oc===me.oc;
  return `<div class="nm-route"><div class="nm-rt"><span class="nm-pl"><b>${esc(p.os||p.oc)}</b><small>${esc(p.os?p.oc:'')}</small></span>
    <svg class="nm-arc" viewBox="0 0 120 40" preserveAspectRatio="none" aria-hidden="true"><path d="M5 32 Q60 -6 115 32"/><circle cx="5" cy="32" r="4" class="o"/><circle cx="115" cy="32" r="4" class="d"/></svg>
    <span class="nm-pl r"><b>${esc(p.cityName)}</b><small>${esc(p.country)}</small></span></div>
    <div class="nm-rnote"><span class="${same||sameC?'ok':''}">${same?'Same roots as you':sameC?`Roots in ${esc(p.oc)}, like you`:`Roots in ${esc(p.oc)}`}</span><span>${esc(distLabel(p))}</span></div></div>`}
function rowItem(p,end,act){return `<button class="rowi" data-a="${act||'open'}" data-id="${p.id}">${avatar(p,'sm')}<span class="tx"><b>${esc(shown(p))} ${vtick(p)}</b><span>${p.age} · ${esc(p.os)} → ${esc(p.cityName)}</span></span><span class="end">${end||''}</span></button>`}
function errOf(k){return S.errors[k]?`<span class="err" id="err-${k.replace(/\./g,'-')}">${esc(S.errors[k])}</span>`:''}
function fldCls(k){return 'fld'+(S.errors[k]?' has-err':'')}
function inF(k,label,type,cur,attrs,hint){return `<label class="${fldCls(k)}" data-f="${k}"><span>${label}</span><input id="f-${k}" type="${type}" data-bind="${k}" value="${esc(cur)}" ${attrs||''}>${hint?`<span class="hint">${hint}</span>`:''}${errOf(k)}</label>`}
function toggle(k,title,sub,cur,target){return `<label class="tgl"><span class="tx"><b>${title}</b>${sub?`<small>${sub}</small>`:''}</span><input type="checkbox" role="switch" data-bind="${k}"${target?` data-target="${target}"`:''}${cur?' checked':''}><i aria-hidden="true"></i></label>`}
function radioChips(k,opts,cur,rr,disabled){return `<div class="segopts${S.errors[k]?' has-err':''}" data-f="${k}" role="radiogroup">${opts.map(o=>`<label class="opt"><input type="radio" name="r-${k}" value="${esc(o.v)}" data-bind="${k}"${rr?' data-rr':''}${String(cur)===String(o.v)?' checked':''}${disabled?' disabled':''}><span>${esc(o.l)}</span></label>`).join('')}</div>`}
function fmtLeft(ms){if(ms<=0)return 'now';const m=Math.ceil(ms/60000),h=Math.floor(m/60);return h?`${h}h ${m%60}m`:`${m}m`}
function midnight(){const d=new Date();d.setHours(24,0,0,0);return d.getTime()}
function greet(){const h=new Date().getHours();return h<12?'Good morning':h<17?'Good afternoon':'Good evening'}
function hearts(n){const r=rngP(99);let s='';for(let i=0;i<n;i++){const sz=Math.round(14+r()*26);s+=`<span class="floaty" style="left:${Math.round(r()*96)}%;animation-duration:${(5+r()*5).toFixed(1)}s;animation-delay:${(r()*4).toFixed(1)}s" aria-hidden="true"><svg viewBox="0 0 24 24" width="${sz}" height="${sz}">${IC.heart}</svg></span>`}return s}
function burstAt(el){try{const a=app.getBoundingClientRect(),r=el.getBoundingClientRect();const b=document.createElement('div');b.className='burst';b.style.left=(r.left-a.left+r.width/2)+'px';b.style.top=(r.top-a.top+r.height/2)+'px';
  for(let i=0;i<9;i++){const ang=(i/9)*Math.PI*2-Math.PI/2,d=40+(i%3)*14;const h=document.createElement('i');h.style.setProperty('--x',Math.round(Math.cos(ang)*d)+'px');h.style.setProperty('--y',Math.round(Math.sin(ang)*d-20)+'px');h.innerHTML=`<svg viewBox="0 0 24 24">${IC.heart}</svg>`;b.appendChild(h)}
  app.appendChild(b);setTimeout(()=>b.remove(),1000)}catch(e){}}
function spinner(label){return `<span class="spin" role="status" aria-label="${esc(label||'Loading')}"></span>`}

/* ---------- Events ---------- */
const TZC={India:'Asia/Kolkata',Pakistan:'Asia/Karachi',Bangladesh:'Asia/Dhaka',Nepal:'Asia/Kathmandu','Sri Lanka':'Asia/Colombo',Philippines:'Asia/Manila','United Kingdom':'Europe/London','United Arab Emirates':'Asia/Dubai','United States':'America/New_York',Australia:'Australia/Sydney',Singapore:'Asia/Singapore','New Zealand':'Pacific/Auckland',Germany:'Europe/Berlin',Ireland:'Europe/Dublin',Canada:'America/Toronto'};
const TZCITY={Vancouver:'America/Vancouver',Surrey:'America/Vancouver',Calgary:'America/Edmonton',Edmonton:'America/Edmonton',Winnipeg:'America/Winnipeg','San Jose':'America/Los_Angeles',Seattle:'America/Los_Angeles',Houston:'America/Chicago',Chicago:'America/Chicago'};
function tzOfEvent(e){return TZCITY[e.city]||TZC[e.country]||undefined}
function fmtTime(d,tz){try{return d.toLocaleTimeString(RM_I18N.lang==='fr'?'fr-CA':'en-US',{timeZone:tz,hour:'numeric',minute:'2-digit'}).replace(' AM',' am').replace(' PM',' pm')}catch(x){return d.toLocaleTimeString()}}
function fmtDay(d,tz){const o=k=>{try{return d.toLocaleDateString(RM_I18N.locale,Object.assign({timeZone:tz},k))}catch(x){return d.toLocaleDateString(RM_I18N.locale,k)}};
  return {day:o({day:'numeric'}),mon:o({month:'short'}),wd:o({weekday:'short'}),long:o({weekday:'short',day:'numeric',month:'short'})}}
function fmtDue(ts){return new Date(ts).toLocaleString(RM_I18N.locale,{weekday:'short',day:'numeric',month:'short',hour:'numeric',minute:'2-digit'})}
function durLabel(min){const h=min/60;return Number.isInteger(h)?`${h} ${h===1?'hour':'hours'}`:`${h.toFixed(1)} hours`}
const MEALS={veg:'Vegetarian',jain:'Jain',nonveg:'Non-vegetarian',halal:'Halal'};
function eventFromServer(x){
  const d=new Date(x.starts_at),tz=TZCITY[x.city]||TZC[x.country];
  const aud=x.audience_kind==='tongue'?{k:'t',v:x.audience_value,l:x.audience_label}:x.audience_kind==='religion'?{k:'r',v:x.audience_value,l:x.audience_label}:{k:'all',l:x.audience_label||'All communities'};
  return {id:x.id,kind:x.kind,title:x.title,sub:x.subtitle||'',city:x.city,country:x.country,cur:x.currency,area:x.area||x.city,tz,
    date:d,time:fmtTime(d,tz),dur:durLabel(x.duration_min),aud,ageMin:x.age_min,ageMax:x.age_max,age:`${x.age_min}–${x.age_max}`,
    seats:[x.seats_women,Math.max(0,x.seats_women-x.reserved_women),x.seats_men,Math.max(0,x.seats_men-x.reserved_men)],
    need:x.need_total,have:x.reserved_total,parents:x.parents_allowed,includes:x.includes||[],agenda:Array.isArray(x.timetable)?x.timetable:[],
    priceM:x.member_price_cents,priceP:x.parent_price_cents,hold:x.hold_cents||0,meals:x.meal_options||[],status:x.status,deadline:new Date(x.confirm_deadline),
    womenFrom:x.women_book_from&&new Date(x.women_book_from),menFrom:x.men_book_from&&new Date(x.men_book_from),
    my:x.my_status?{status:x.my_status,holdPaid:x.my_hold_cents||0,parents:x.my_parents||[],meal:x.my_meal,amount:x.my_amount_cents,due:x.my_due_by&&new Date(x.my_due_by),wait:!!x.my_waitlisted}:null,venue:x.venue,
    wait:[x.wait_women||0,Math.max(0,(x.wait_women||0)-(x.waiting_women||0)),x.wait_men||0,Math.max(0,(x.wait_men||0)-(x.waiting_men||0))],moved:x.postponed_from&&new Date(x.postponed_from)}
}
/* Seat hold (29 Oct, his answer "2"): a small payment when reserving, so every reservation is real. */
function holdOn(e){return e&&e.hold>0&&e.status!=='confirmed'}
function holdNote(e){return `A ${money(e.hold,e.cur)} seat hold, paid now with PayPal, keeps your seat. It is taken off your ticket when the event is confirmed and refunded in full if the event is not confirmed. If you cancel, the hold is not refunded.`}
function events(){return S.events}
function evById(id){return S.events.find(e=>e.id===id)}
function audOk(e,p){const a=e.aud||{k:'all'};return a.k==='all'||(a.k==='t'&&p.t===a.v)||(a.k==='r'&&p.r===a.v)}
function audLabel(e){const a=e.aud||{k:'all'};return a.k==='all'?'All communities':`For ${a.l}`}
function forMe(e){return audOk(e,S.me)}
function ageOk(e){return S.me.age>=e.ageMin&&S.me.age<=e.ageMax}
function evMine(e){const f=S.me&&S.me.g==='F',[wc,wl,mc,ml]=e.seats,w=e.wait||[0,0,0,0];return {seatsLeft:f?wl:ml,waitLeft:f?w[1]:w[3],waitCap:f?w[0]:w[2],who:f?'women':'men'}}
function evStat(e){return {n:e.have,confirmed:e.status==='confirmed',left:Math.max(0,e.need-e.have),deadline:e.deadline}}
function evArt(e,hero){const up=hero?'0':'-40';const g={family:['#FFF1B0','#9FE6C6','#0E7A55'],speed:['#E9F8D6','#5FD3A2','#0E5B43'],festive:['#FFF1B0','#F2C94C','#0E7A55'],brunch:['#FFF6CF','#BDF2DA','#0E9F6E'],online:['#E3F7EE','#8DEBC3','#0E5B43']}[e.kind]||['#FFF1B0','#9FE6C6','#0E7A55'];const id='ea'+String(e.id).slice(0,8);
  let s=`<svg class="art" viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${g[0]}"/><stop offset=".55" stop-color="${g[1]}"/><stop offset="1" stop-color="${g[2]}"/></linearGradient><radialGradient id="${id}l"><stop offset="0" stop-color="#FFF6D8"/><stop offset="1" stop-color="#FFF6D8" stop-opacity="0"/></radialGradient></defs><rect width="400" height="250" fill="url(#${id})"/>`;
  [[60,190,40],[330,70,55],[250,205,30],[140,40,24]].forEach(([x,y,r])=>{s+=`<circle cx="${x}" cy="${y}" r="${r}" fill="#fff" opacity=".12"/>`});
  [[-10,24,410,34,92],[-10,62,410,52,128]].forEach(([x1,y1,x2,y2,cy])=>{s+=`<path d="M${x1} ${y1} Q200 ${cy} ${x2} ${y2}" stroke="#7A2040" stroke-opacity=".3" stroke-width="1.5" fill="none"/>`;
    for(let i=1;i<12;i++){const t=i/12,x=(1-t)*(1-t)*x1+2*(1-t)*t*200+t*t*x2,y=(1-t)*(1-t)*y1+2*(1-t)*t*cy+t*t*y2+6;s+=`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="12" fill="url(#${id}l)"/><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3.2" fill="${i%3?'#FFF2C4':'#FFD1DC'}"/>`}});
  if(hero){}else if(e.kind==='family'||e.kind==='brunch')s+=`<g transform="translate(0 ${up})"><g fill="#fff" opacity=".93"><path d="M300 188h44v10a22 22 0 01-44 0z"/><path d="M240 196h34v8a17 17 0 01-34 0z" opacity=".85"/></g><path d="M344 192a8 8 0 010 16" stroke="#fff" stroke-width="4" fill="none" opacity=".93"/><g stroke="#fff" stroke-width="2.4" fill="none" opacity=".7" stroke-linecap="round"><path d="M314 178q-4-8 2-14M328 178q-4-8 2-14"/></g></g>`;
  else if(e.kind==='speed'||e.kind==='online')s+=`<g transform="translate(0 ${up})"><g fill="none" stroke="#fff" stroke-width="3" opacity=".92" stroke-linecap="round"><circle cx="320" cy="192" r="26"/><path d="M320 176v16l10 8"/></g><path d="M250 205c0-10 8-16 16-12 8-4 16 2 16 12 0 10-16 18-16 18s-16-8-16-18z" fill="#fff" opacity=".88"/></g>`;
  else [[262,214],[302,208],[342,214]].forEach(([x,y0])=>{const y=y0+(+up);s+=`<circle cx="${x}" cy="${y-12}" r="16" fill="url(#${id}l)"/><path d="M${x-16} ${y}q16 16 32 0z" fill="#FFE1A8"/><path d="M${x} ${y-4}c-5-6-1-14 0-18 1 4 5 12 0 18z" fill="#FFF6D8"/>`});
  return s+'</svg>'}
/* ---------- Boot and welcome ---------- */
function renderBoot(){return `<div class="boot"><div class="brand"><svg class="mark" viewBox="0 0 32 22" aria-hidden="true"><path class="c1" d="M11.60 18.59c-0.82 0 -8.2 -4.76 -8.2 -10.25 0 -2.71 2.13 -4.92 4.76 -4.92 1.48 0 2.71 0.74 3.44 1.89 0.74 -1.15 1.97 -1.89 3.44 -1.89 2.62 0 4.76 2.21 4.76 4.92 0 5.49 -7.38 10.25 -8.2 10.25z"/><path class="c2" d="M20.40 18.59c-0.82 0 -8.2 -4.76 -8.2 -10.25 0 -2.71 2.13 -4.92 4.76 -4.92 1.48 0 2.71 0.74 3.44 1.89 0.74 -1.15 1.97 -1.89 3.44 -1.89 2.62 0 4.76 2.21 4.76 4.92 0 5.49 -7.38 10.25 -8.2 10.25z"/></svg>NeuMarry</div>${S.bootError?`<p class="hint">${esc(S.bootError)}</p><button class="btn primary" data-a="retryBoot">Try again</button>`:spinner('Opening NeuMarry')}</div>`}
function renderWelcome(){
  return `<div class="scroll"><div class="welcome pad">
    <div class="wtop"><div class="brand"><svg class="mark" viewBox="0 0 32 22" aria-hidden="true"><path class="c1" d="M11.60 18.59c-0.82 0 -8.2 -4.76 -8.2 -10.25 0 -2.71 2.13 -4.92 4.76 -4.92 1.48 0 2.71 0.74 3.44 1.89 0.74 -1.15 1.97 -1.89 3.44 -1.89 2.62 0 4.76 2.21 4.76 4.92 0 5.49 -7.38 10.25 -8.2 10.25z"/><path class="c2" d="M20.40 18.59c-0.82 0 -8.2 -4.76 -8.2 -10.25 0 -2.71 2.13 -4.92 4.76 -4.92 1.48 0 2.71 0.74 3.44 1.89 0.74 -1.15 1.97 -1.89 3.44 -1.89 2.62 0 4.76 2.21 4.76 4.92 0 5.49 -7.38 10.25 -8.2 10.25z"/></svg>NeuMarry</div><button class="lang-sw notr" data-a="lang" aria-label="Language / Langue">${ic('globe')}${esc((LANGS_ALL.find(x=>x[0]===RM_I18N.lang)||LANGS_ALL[0])[1])}</button></div>
    <div class="hero" aria-hidden="true">
      <div class="hero-pair"><span class="av a1"><span class="av-art"></span></span><span class="av a2"><span class="av-art"></span></span><span class="match">${ic('sparkle')}96% match</span></div>
      <div class="hero-tags"><span>Roots · Gujarat, India</span><span>Lives · Toronto, 8 km</span></div>
    </div>
    <h1>Your person from <em>back home</em> might live ten minutes away.</h1>
    <p class="lede">For everyone living away from the country they grew up in. Meet verified people who share your roots and your mindset, in your city, with your family by your side.</p>
    <div class="cta"><button class="btn primary block" data-a="start">Create my profile</button>
      <button class="btn ghost block" data-a="login">I already have an account</button></div>
    <p class="note">By continuing you agree to our <button class="link" data-a="legal" data-k="terms">Terms</button> and <button class="link" data-a="legal" data-k="privacy">Privacy Policy</button>. 18+ only.</p>
    <ul class="usp">
      ${NO_EVENTS?`<li><span class="pi">${ic('users')}</span><span><b>Family circle</b><span>Share a match with family</span></span></li>`:`<li><span class="pi">${ic('users')}</span><span><b>Family Mixers</b><span>Hosted evenings in your city, dinner included. Bring your parents, meet in person.</span></span></li>`}
      <li><span class="pi">${ic('pin')}</span><span><b>Roots, city and mindset</b><span>Matched on where you come from, where you live and how you think.</span></span></li>
      <li><span class="pi">${ic('shield')}</span><span><b>Only real people</b><span>Every member is checked with a government ID and a live selfie.</span></span></li>
      <li><span class="pi">${ic('lock')}</span><span><b>Private by default</b><span>Photos stay hidden until you both say yes. Your number is never shown.</span></span></li>
    </ul>
    ${NO_EVENTS?'':`<a class="wwu-link" href="${esc(CFG.site)}work-with-us.html" target="_blank" rel="noopener">${ic('users')}<span><b>Work with NeuMarry</b><small>Hosts, partner restaurants and matrimonial bureaus</small></span>${ic('chev')}</a>`}

  </div></div>`;
}

/* ---------- Account: sign up and log in ---------- */
const EMAILRX=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
function pwChecks(pw,a){const low=(pw||'').toLowerCase(),em=((a.email||'').split('@')[0]||'').toLowerCase();
  return [['At least 10 characters',pw.length>=10],['Upper and lower case letters',/[a-z]/.test(pw)&&/[A-Z]/.test(pw)],['At least one number',/\d/.test(pw)],['At least one symbol, like ! ? # @',/[^A-Za-z0-9]/.test(pw)],['Does not contain your email name',!!pw&&!(em.length>=3&&low.includes(em))]]}
function pwRulesHTML(a){const c=pwChecks(a.pw||'',a),n=c.filter(x=>x[1]).length;const lvl=!a.pw?'':n<=2?'Weak':n<=4?'Almost there':'Strong';
  return `<div class="pwbar" aria-hidden="true"><i class="${n>=1?'on':''} ${n<=2?'w':n<=4?'m':'s'}"></i><i class="${n>=3?'on':''} ${n<=4?'m':'s'}"></i><i class="${n>=5?'on s':''}"></i></div>${lvl?`<small class="pwlvl">${lvl}</small>`:''}<ul class="pwrules">${c.map(([t,ok])=>`<li class="${ok?'ok':''}">${ic(ok?'check':'x')}<span>${t}</span></li>`).join('')}</ul>`}
function authErr(k){const e=(S.errors||{})[k];return e?`<span class="err">${esc(e)}</span>`:''}
function renderAuth(){
  const a=S.auth||{mode:'signup'},su=a.mode==='signup',m=a.method;
  let body='';
  if(a.mode==='consent'){
    body=`<h1 class="auth-h">Before you <em>start</em></h1><p class="lede">Signed in as ${esc(API.email())}. Please confirm these to build your profile.</p>
    <div class="consent${S.errors.consent?' has-err':''}" id="consent">
     <label class="ck"><input type="checkbox" data-auth="c18"${a.c18?' checked':''}><span>I am 18 or older, and I am joining NeuMarry to find a marriage partner.</span></label>
     <label class="ck"><input type="checkbox" data-auth="terms"${a.terms?' checked':''}><span>I have read and agree to the <button type="button" class="link" data-a="legal" data-k="terms">Terms of Service</button> and the <button type="button" class="link" data-a="legal" data-k="privacy">Privacy Policy</button>, including how NeuMarry verifies members and uses my details to suggest matches.</span></label>
     <label class="ck"><input type="checkbox" data-auth="mkt"${a.mkt?' checked':''}><span>Optional: send me event invitations and offers by email and WhatsApp. I can stop them at any time.</span></label>
     ${authErr('consent')}</div>
    <button class="btn primary block" data-a="consentGo">Continue</button>`;
  }else if(a.mode==='reset'){
    body=`<h1 class="auth-h">Choose a new <em>password</em></h1>
    <label class="fld${S.errors.pw?' has-err':''}"><span>New password</span><span class="pwwrap"><input id="au-pw" type="${a.show?'text':'password'}" data-auth="pw" value="${esc(a.pw||'')}" autocomplete="new-password" maxlength="64"><button type="button" class="iconbtn" data-a="pwShow" aria-label="${a.show?'Hide password':'Show password'}" aria-pressed="${!!a.show}">${ic('eye')}</button></span><div id="pw-rules">${pwRulesHTML(a)}</div>${authErr('pw')}</label>
    <label class="fld${S.errors.pw2?' has-err':''}"><span>Confirm password</span><input id="au-pw2" type="${a.show?'text':'password'}" data-auth="pw2" value="${esc(a.pw2||'')}" autocomplete="new-password" maxlength="64">${authErr('pw2')}</label>
    <button class="btn primary block" data-a="authNewPw"${busy?' disabled':''}>${busy==='auth'?spinner('Saving'):'Save password'}</button>`;
  }else if(a.mode==='sent'){
    body=`<h1 class="auth-h">Check your <em>email</em></h1><p class="lede">${esc(a.sentText||'')}</p><button class="btn primary block" data-a="authMode" data-k="login">Back to log in</button>`;
  }else if(!m){
    body=`<h1 class="auth-h">${su?'Create your <em>account</em>':'Welcome <em>back</em>'}</h1>
    <p class="lede">${su?'Choose how you want to sign in. Next you build your profile and upload an ID and a selfie, so everyone here is real.':'Log in the same way you signed up.'}</p>
    ${su?`<div class="consent${S.errors.consent?' has-err':''}" id="consent">
     <label class="ck"><input type="checkbox" data-auth="c18"${a.c18?' checked':''}><span>I am 18 or older, and I am joining NeuMarry to find a marriage partner.</span></label>
     <label class="ck"><input type="checkbox" data-auth="terms"${a.terms?' checked':''}><span>I have read and agree to the <button type="button" class="link" data-a="legal" data-k="terms">Terms of Service</button> and the <button type="button" class="link" data-a="legal" data-k="privacy">Privacy Policy</button>, including how NeuMarry verifies members and uses my details to suggest matches.</span></label>
     <label class="ck"><input type="checkbox" data-auth="mkt"${a.mkt?' checked':''}><span>Optional: send me event invitations and offers by email and WhatsApp. I can stop them at any time.</span></label>
     ${authErr('consent')}</div>`:''}
    <div class="authlist">
     <button class="authbtn" id="g-own" data-a="authGo" data-k="google"${busy?' disabled':''}><span class="ai g" aria-hidden="true">${GLOGO}</span><span>Continue with Google</span></button>
     ${CFG.web?`<div id="gsi-slot" class="gsi-slot notr" hidden></div>`:''}
     <button class="authbtn" data-a="authGo" data-k="email"${busy?' disabled':''}><span class="ai">${ic('mail')}</span><span>${su?'Email and password':'Email and password'}</span></button>
    </div>
    <p class="hint" style="text-align:center">Phone and WhatsApp login are coming soon.</p>
    <p class="note" style="text-align:center">${su?`Already have an account? <button class="link" data-a="authMode" data-k="login">Log in</button>`:`New to NeuMarry? <button class="link" data-a="authMode" data-k="signup">Create an account</button>`}</p>`;
  }else{
    body=`<h1 class="auth-h">${su?'Set up your <em>login</em>':'Log <em>in</em>'}</h1>
    <label class="fld${S.errors.email?' has-err':''}"><span>Email</span><input id="au-email" type="email" data-auth="email" value="${esc(a.email||'')}" autocomplete="email" maxlength="80" autocapitalize="none" spellcheck="false">${authErr('email')}</label>
    <label class="fld${S.errors.pw?' has-err':''}"><span>Password</span><span class="pwwrap"><input id="au-pw" type="${a.show?'text':'password'}" data-auth="pw" value="${esc(a.pw||'')}" autocomplete="${su?'new-password':'current-password'}" maxlength="64"><button type="button" class="iconbtn" data-a="pwShow" aria-label="${a.show?'Hide password':'Show password'}" aria-pressed="${!!a.show}">${ic('eye')}</button></span>${su?`<div id="pw-rules">${pwRulesHTML(a)}</div>`:''}${authErr('pw')}</label>
    ${su?`<label class="fld${S.errors.pw2?' has-err':''}"><span>Confirm password</span><input id="au-pw2" type="${a.show?'text':'password'}" data-auth="pw2" value="${esc(a.pw2||'')}" autocomplete="new-password" maxlength="64">${authErr('pw2')}</label>`:`<button class="link" data-a="forgotPw" style="justify-self:start">Forgot password?</button>`}
    <button class="btn primary block" data-a="authEmail"${busy?' disabled':''}>${busy==='auth'?spinner('Please wait'):su?'Create account':'Log in'}</button>
    <p class="note">Passwords are stored only as a secure hash. We will never ask for your password by email, phone or WhatsApp.</p>`;
  }
  const head=a.mode==='consent'?'New profile':a.mode==='reset'?'New password':a.mode==='sent'?'Email sent':su?'New account':'Log in';
  return `<div class="su-head pad"><button class="iconbtn" data-a="authBack" aria-label="Back">${ic('back')}</button><div class="t"><small>${head}</small></div></div>
  <div class="scroll" id="su-scroll"><div class="form pad auth">${body}</div></div>`;
}
const LEGAL={terms:['Terms of Service: the key points',[
  'You must be 18 or older and legally free to marry, and you join to find a marriage partner, not for dating or business.',
  'One account per person, in your real name. You verify a government ID and a live selfie, and prove your roots and the city you live in with documents.',
  NO_EVENTS?'NeuMarry suggests matches. We do not run criminal background checks and cannot promise who anyone is or how they will behave. Meetings, decisions, relationships and any marriage after an introduction are your own responsibility.':'NeuMarry suggests matches and hosts events. We do not run criminal background checks and cannot promise who anyone is or how they will behave. Meetings, decisions, relationships and any marriage after an introduction are your own responsibility.',
  'Never send money, gifts or visa help to anyone you meet here, and report anyone who asks.',
  NO_EVENTS?'Gold renews automatically until you cancel in your Google Play or App Store account.':'Gold renews automatically until you cancel in your Google Play or App Store account. Event seats are free to reserve and paid only when the event is confirmed. The ticket includes your meal; nothing is paid at the restaurant.',
  'We can suspend accounts that break these rules, including fake profiles, harassment and asking for money.']],
 privacy:['Privacy Policy: the key points',[
  'We collect what you put in your profile, your ID, selfie and document checks, your activity in the app and basic device data, and use it to verify you, suggest matches, run events and keep members safe.',
  'Your phone number, email, ID and documents are never shown to other members. ID, selfie and document images are deleted within 30 days of the check. A location check is optional and only its result is kept.',
  'Your photos stay hidden until you both accept, unless you turn blurring off. Religion and community are optional to show.',
  'We never sell your data. Service providers (hosting, payments, video) process it only for us, under contract.',
  'You can correct or delete your data at any time: Me, then Delete my account.',
  'Questions or complaints go to our Grievance Officer, Swapnil Dinesh Bhagat, who replies within 30 days.']]};

/* ---------- Signup ---------- */
const SHORT=['About','Roots','Location','Values','Verify','Privacy'];
const SU_TRUST=['30 seconds. Then we show you how many verified people fit you.','People from your roots appear first in your matches. Roots are proven with a document.','Matches show the real distance to you. Your exact address is never shown. Mostly taps, almost no typing.','Each answer makes your match % smarter, and you see the reasons on every match.','Your safety badge: only verified members can send interests and chat, so everyone you meet is real.','Last step: choose who you want to meet. You can change it any time.'];
const JOBS=['Engineer','Doctor','Nurse','IT / Software','Teacher','Business owner','Accountant','Student','Designer','Sales','Lawyer','Pharmacist','Banking / Finance','Government job','Researcher','Manager','Marketing','Architect','Chef','Driver / Logistics'],EDUS=['High school','Diploma','Bachelor’s','Master’s','PhD','Medical degree','Law degree','Trade certificate'];
function pickOrOther(k,label,opts,ph){const d=S.draft,cur=d[k]||'',pk=k+'Pick';if(d[pk]===undefined)d[pk]=cur?(opts.includes(cur)?cur:'__o'):'';
  return `<div class="fld" data-f="${k}"><span>${label}</span>${radioChips(pk,opts.map(o=>({v:o,l:o})).concat([{v:'__o',l:'Other: type it'}]),d[pk],true)}${d[pk]==='__o'?`<input id="f-${k}" data-bind="${k}" maxlength="60" placeholder="${esc(ph)}" value="${esc(opts.includes(cur)?'':cur)}" style="margin-top:8px">`:''}${errOf(k)}</div>`}
const SU_TRUST_OLD=['Everyone on NeuMarry verifies, just like you. That is why every match you see is verified.','Roots are checked with a document, so “same roots” on a match is always real.','Every member proves the city they live in, so “near you” really means near you.','We match on these answers and show you the reasons on every match.','ID read by Google and checked by a person, plus a live selfie. Only fully verified members are shown.','Premium and private: your photo and full name stay hidden until you both say yes.'];
const STEPS=['About you','Your roots','Where you live now','Values & lifestyle','Verify you’re real','Privacy & preferences'];
function checkLine(c,label){if(!c)return '';const st=c.status;return `<p class="hint">${st==='approved'?`${ic('check')} ${label} approved`:st==='rejected'?`<b style="color:var(--bad)">${label} not approved${c.note?': '+esc(c.note):''}.</b> Upload a new one.`:`${label} received. Our team checks it within 24 hours.`}</p>`}
/* ---------- Verify: ID and selfie, roots, where you live now, location (owner's ok 25 Oct 2026) ---------- */
const WHY_LINE='Why we check all this: to keep you safe, and so that every profile you see is truly verified, just like yours. It is all for your own good.';
const VS_T=['','ID and live selfie','Prove your roots','Where you live now','Your address today','Quick location check'];
function rootsDocs(oc){const o=[{v:'id',l:`Same as my ID: a passport of ${oc}`,s:'Then there is nothing more to upload.'}];
  if(oc==='India')o.push({v:'OCI card',l:'OCI card',s:'For people of Indian origin who now hold another passport.'});
  else o.push({v:'National ID card',l:'National ID card',s:'Issued by your country of origin.'});
  o.push({v:'Birth certificate',l:'Birth certificate',s:'Shows the place of birth.'});
  o.push({v:'Parent’s document',l:'Born outside your country of origin?',s:'A parent’s passport or OCI card, together with your birth certificate that names that parent, in one PDF or photo.'});
  return o}
function statusDocs(){return [{v:'Permanent residence',l:'PR card or permanent residence permit',s:'Both sides.'},{v:'Citizenship',l:'Passport or citizenship certificate',s:'Of the country you live in.'},{v:'Permit or visa',l:'Work permit, study permit or visa',s:'Must still be valid.'}]}
function addrDocs(){return [{v:'Photo ID with address',l:'Driver’s licence or photo ID card',s:'With your current address.'},{v:'Bill or statement',l:'Bank statement, utility bill or lease',s:'Dated in the last 3 months, in your name.'}]}
function vOpts(key,list,cur){return `<div class="vopts" role="radiogroup">${list.map(o=>`<button type="button" class="vopt${cur===o.v?' on':''}" role="radio" aria-checked="${cur===o.v}" data-a="vPick" data-k="${key}" data-v="${esc(o.v)}"><span class="rd" aria-hidden="true"></span><span class="tx"><b>${esc(o.l)}</b>${o.s?`<small>${esc(o.s)}</small>`:''}</span></button>`).join('')}</div>`}
function vFile(kind,label,ready,name){return ready?`<p class="hint">${ic('check')} ${esc(name||'File')} ready to send</p><span class="btn ghost sm file">${ic('refresh')}Choose another<input type="file" accept="image/*,application/pdf" data-file="${kind}" aria-label="${esc(label)}"></span>`
  :`<span class="btn primary file">${ic('plus')}${esc(label)}<input type="file" accept="image/*,application/pdf" data-file="${kind}" aria-label="${esc(label)}"></span>`}
/* state of each part: ok, wait, rej, ready, todo (location: ok, ready, opt) */
function vState(n,d,me){const st=c=>c&&c.status;
  if(n===1){if(me&&me.v.id&&me.v.selfie)return 'ok';const ic_=me&&me.idCheck,sc=me&&me.selfieCheck;
    const idR=(me&&me.v.id)||d.idBlob||st(ic_)==='pending',sR=(me&&me.v.selfie)||d.selfieBlob||st(sc)==='pending';
    if((st(ic_)==='rejected'&&!me.v.id&&!d.idBlob)||(st(sc)==='rejected'&&!me.v.selfie&&!d.selfieBlob))return 'rej';
    if(idR&&sR)return (d.idBlob||d.selfieBlob)?'ready':'wait';return 'todo'}
  if(n===2){if(me&&me.v.roots)return 'ok';const c=me&&me.rootsCheck;if(d.rootsType&&(d.rootsType==='id'||d.rootsBlob))return 'ready';
    if(st(c)==='pending')return 'wait';if(st(c)==='rejected')return 'rej';return 'todo'}
  if(n===3){if(me&&me.v.lives&&!d.addrBlob)return 'ok';const round=me&&me.livesRound?Date.parse(me.livesRound):0;
    const cur=c=>c&&Date.parse(c.created_at)>=round-1000?c:null;const s=cur(me&&me.statusCheck),a=cur(me&&me.addrCheck);
    const sOk=d.statusBlob||(s&&s.status!=='rejected'),aOk=d.addrBlob||(a&&a.status!=='rejected')||(me&&me.v.lives);
    if((s&&s.status==='rejected'&&!d.statusBlob)||(a&&a.status==='rejected'&&!d.addrBlob))return 'rej';
    if(sOk&&aOk)return (d.statusBlob||d.addrBlob)?'ready':'wait';return 'todo'}
  if(n===4){if(me&&me.locOk)return 'ok';if(d.loc)return 'ready';return 'opt'}
}
const V_ST={ok:['ok','Done'],wait:['wait','Checking'],rej:['rej','Not approved'],ready:['ready','Ready to send'],todo:['todo','To do'],opt:['todo','Optional']};
function vStep(n,state,title,sub,act){const [cls,lab]=V_ST[state];return `<button type="button" class="vstep" data-a="${act||'vGo'}" data-n="${n===4?5:n}"><span class="n ${cls}">${cls==='ok'?ic('check'):n}</span><span class="tx"><b>${esc(title)}</b><small>${esc(sub)}</small></span><span class="vst ${cls}">${lab}</span></button>`}
function verifyAllReady(d,me){return [1,2,3].every(n=>['ok','wait','ready'].includes(vState(n,d,me)))}
function renderVerifyBody(d,edit){const me=edit?S.me:null,vs=d.vs||0;const place=[d.city,d.country].filter(Boolean).join(', '),roots=[d.os,d.oc].filter(Boolean).join(', ');
  if(vs===0){const code=dial(d.country)||'';
    return `<div class="callout">${ic('shield')}<span>On NeuMarry, roots and city are proven with documents, not just typed in. When a profile says where someone comes from and where they live, it is true.</span></div>
    <div class="callout gold">${ic('heart')}<span>${WHY_LINE}</span></div>
    <div class="vsteps">
     ${vStep(1,vState(1,d,me),'ID and live selfie','Passport or national ID, and a selfie.')}
     ${vStep(2,vState(2,d,me),'Your roots',`A document from where you grew up: ${roots||'your country of origin'}.`)}
     ${vStep(3,vState(3,d,me),'Where you live now',`Your status and your current address in ${d.city||'your city'}.`)}
     ${vStep(4,vState(4,d,me),'Quick location check','One tap. Country and city only, never your exact spot.')}
    </div>
    <p class="hint">${ic('lock')} Documents are deleted within 30 days of the check and never shown to members.</p>
    <div class="vcard"><h4>${ic('phone')}Mobile number <small class="hint" style="font-weight:500">optional</small></h4>
      <p class="hint">${NO_EVENTS?'Never shown to other members.':'For event reminders from your host. Never shown to other members.'} Code checks by SMS are coming soon.</p>
      <div class="row2" style="grid-template-columns:96px 1fr"><label class="fld"><span>Code</span><input value="${esc(code||'+')}" disabled aria-label="Country code"></label>${inF('phone','Mobile number','tel',d.phone,'inputmode="numeric" maxlength="14" autocomplete="tel-national"')}</div>
    </div>`}
  if(vs===1){const idOk=me&&me.v.id,selfOk=me&&me.v.selfie,idC=me&&me.idCheck,sC=me&&me.selfieCheck;
    const needId=!idOk&&!(idC&&idC.status==='pending'),needSelf=!selfOk&&!(sC&&sC.status==='pending');
    return `<div class="vcard"><h4>${ic('id')}Government ID ${idOk?`<span class="ok">${ic('check')}Verified</span>`:''}</h4>
      <p class="hint">Passport, national ID card, or a residence card with a photo. Only our team sees it.</p>
      ${idOk?'':idC&&!d.idBlob?checkLine(idC,'ID'):''}
      ${needId||(idC&&idC.status==='rejected')?(d.idBlob?`<p class="hint">${ic('check')} ${esc(d.idName)} ready to send</p><span class="btn ghost sm file">${ic('refresh')}Choose another<input type="file" accept="image/*,application/pdf" data-file="id" aria-label="Upload government ID"></span>`:(V2()?`<button class="btn primary sm" data-a="camId">${ic('scan')}Scan with camera</button> `:'')+`<span class="btn ghost sm file">${ic('plus')}${V2()?'Upload a file':'Upload ID'}<input type="file" accept="image/*,application/pdf" data-file="id" aria-label="Upload government ID"></span>`):''}
    </div>
    <div class="vcard"><h4>${ic('camera')}Live selfie ${selfOk?`<span class="ok">${ic('check')}Verified</span>`:''}</h4>
      <p class="hint">Take a selfie now. We match it to your ID and photos so nobody can use someone else's pictures.</p>
      ${selfOk?'':sC&&!d.selfieBlob?checkLine(sC,'Selfie'):''}
      ${needSelf||(sC&&sC.status==='rejected')?(d.selfie?`<img src="${d.selfie}" alt="Your selfie" style="width:72px;height:72px;border-radius:18px;object-fit:cover">${V2()?`<button class="btn ghost sm" data-a="camSelfie">${ic('refresh')}Retake</button>`:`<span class="btn ghost sm file">${ic('refresh')}Retake<input type="file" accept="image/*" capture="user" data-file="selfie" aria-label="Retake selfie"></span>`}`:(V2()?`<button class="btn primary sm" data-a="camSelfie">${ic('camera')}Start live selfie</button>`:`<span class="btn ghost sm file">${ic('camera')}Take selfie<input type="file" accept="image/*" capture="user" data-file="selfie" aria-label="Take selfie"></span>`)):''}
    </div>`}
  if(vs===2){const c=me&&me.rootsCheck,ok=me&&me.v.roots;
    return `<div class="vfact">${ic('globe')}<span class="tx"><small>Your roots on your profile</small><b>${esc(roots)}</b></span></div>
    ${ok&&!d.rootsType?`<p class="hint">${ic('check')} Roots approved</p>`:c&&!d.rootsType?checkLine(c,'Roots document'):''}
    ${ok&&!d.rootsType?'':`<h3 class="section-t">Choose one document</h3>${vOpts('rootsType',rootsDocs(d.oc||''),d.rootsType)}
    ${d.rootsType&&d.rootsType!=='id'?vFile('roots','Upload document',!!d.rootsBlob,d.rootsName):''}
    <p class="hint">The country and the state on the document must match your profile. We never ask for caste or religion documents.</p>`}`}
  if(vs===3){const ok=me&&me.v.lives;
    return `<div class="vfact">${ic('pin')}<span class="tx"><small>Where you live on your profile</small><b>${esc(place)}</b>${d.res?`<small>${esc(d.res)}</small>`:''}</span></div>
    ${ok&&!d.statusType?`<p class="hint">${ic('check')} Status approved</p>`:me&&me.statusCheck&&!d.statusType&&vState(3,d,me)!=='todo'?checkLine(me.statusCheck,'Status document'):''}
    ${ok&&!d.statusType?'':`<h3 class="section-t">Part 1 · Your status in ${esc(d.country||'your country')}</h3>${vOpts('statusType',statusDocs(),d.statusType)}
    ${d.statusType?vFile('status','Upload document',!!d.statusBlob,d.statusName):''}`}`}
  if(vs===4){
    return `<div class="callout">${ic('info')}<span>A passport or PR card shows where you may live. This shows where you live now.</span></div>
    ${me&&me.addrCheck&&!d.addrType&&vState(3,d,me)!=='todo'?checkLine(me.addrCheck,'Address document'):''}
    <h3 class="section-t">Part 2 · One of these</h3>${vOpts('addrType',addrDocs(),d.addrType)}
    ${d.addrType?vFile('address','Upload document',!!d.addrBlob,d.addrName):''}
    <p class="hint">Your name must match, and the city must be ${esc(d.city||'your city')} or within 50 km. We keep only the city, the country and the date, never your street address.</p>`}
  if(vs===5){const done=me&&me.locOk;
    return `<div class="vill">${ic('pin')}</div>
    ${done?`<div class="callout">${ic('check')}<span>Location confirmed${me.locAt?' on '+new Date(me.locAt).toLocaleDateString(RM_I18N.locale,{day:'numeric',month:'short',year:'numeric'}):''}.</span></div>`:d.loc?`<div class="callout">${ic('check')}<span>Location ready. It is checked when you save.</span></div>`:''}
    <div class="panel"><h3>Why we ask</h3>
     <p>We check your phone’s approximate location once, now, to confirm you live where your profile says.</p>
     <div class="vtrow">${ic('check','ok-ic')}<span class="tx"><b>Only now, only once a year</b><small>Never in the background. Never tracked.</small></span></div>
     <div class="vtrow">${ic('check','ok-ic')}<span class="tx"><b>Only country and city</b><small>Your exact location is not stored or shown to anyone.</small></span></div>
     <div class="vtrow">${ic('check','ok-ic')}<span class="tx"><b>Travelling right now?</b><small>Skip it. Your documents are enough; try again when you are home.</small></span></div>
    </div>`}
  return ''}
function verifyHead(d){const vs=d.vs,n=vs<=2?vs:vs<=4?3:4;
  return `<div class="su-head pad"><button class="iconbtn" data-a="vBack" aria-label="Back to the checks">${ic('back')}</button>
    <div class="t"><small>Verify · ${n} of 4</small><h2>${VS_T[vs]}</h2><div class="progress p4" aria-hidden="true">${[1,2,3,4].map(i=>`<i class="${i<=n?'on':''}"></i>`).join('')}</div></div></div>`}
function verifyFoot(d){const vs=d.vs;
  if(vs===5)return `<div class="su-foot pad"><button class="btn ghost" data-a="vGo" data-n="0">${d.loc||(S.editMode&&S.me&&S.me.locOk)?'Done':'Skip'}</button>${busy==='loc'?`<button class="btn primary" disabled>${spinner('Checking')} Checking</button>`:`<button class="btn primary" data-a="vLocate">Check now</button>`}</div>`;
  return `<div class="su-foot pad"><button class="btn primary" data-a="vGo" data-n="${vs===4?5:vs+1}">Next</button></div>`}
/* Time zone of the phone → country, to catch a wrong "country you live in" (no permission needed). */
const TZ2C={'Asia/Kolkata':'India','Asia/Calcutta':'India','Asia/Karachi':'Pakistan','Asia/Dhaka':'Bangladesh','Asia/Kathmandu':'Nepal','Asia/Katmandu':'Nepal','Asia/Colombo':'Sri Lanka','Asia/Manila':'Philippines',
  'Europe/London':'United Kingdom','Asia/Dubai':'United Arab Emirates','Australia/Sydney':'Australia','Australia/Melbourne':'Australia','Australia/Brisbane':'Australia','Australia/Perth':'Australia','Australia/Adelaide':'Australia','Australia/Hobart':'Australia','Australia/Darwin':'Australia',
  'Asia/Singapore':'Singapore','Pacific/Auckland':'New Zealand','Europe/Berlin':'Germany','Europe/Dublin':'Ireland','Asia/Riyadh':'Saudi Arabia','Asia/Qatar':'Qatar','Asia/Kuwait':'Kuwait','Asia/Bahrain':'Bahrain','Asia/Muscat':'Oman',
  'America/Toronto':'Canada','America/Vancouver':'Canada','America/Edmonton':'Canada','America/Winnipeg':'Canada','America/Halifax':'Canada','America/Regina':'Canada','America/St_Johns':'Canada','America/Moncton':'Canada','America/Montreal':'Canada','America/Whitehorse':'Canada','America/Yellowknife':'Canada',
  'America/New_York':'United States','America/Chicago':'United States','America/Denver':'United States','America/Los_Angeles':'United States','America/Phoenix':'United States','America/Anchorage':'United States','America/Detroit':'United States','Pacific/Honolulu':'United States','America/Boise':'United States','America/Indiana/Indianapolis':'United States'};
function tzCountry(){try{return TZ2C[Intl.DateTimeFormat().resolvedOptions().timeZone]||null}catch(e){return null}}
function tzWarn(d){const t=tzCountry();if(!t||!d.country||t===d.country||d.tzAck===d.country)return '';
  return `<div class="callout gold">${ic('globe')}<span><b>You seem to be in ${esc(t)} right now.</b> Members who choose a country must prove they live there, and the check fails if they don’t.</span></div>
  <div class="vopts"><button type="button" class="vopt" data-a="tzSwitch" data-v="${esc(t)}"><span class="rd" aria-hidden="true"></span><span class="tx"><b>I live in ${esc(t)}</b><small>Change my country to ${esc(t)}</small></span></button>
  <button type="button" class="vopt" data-a="tzKeep"><span class="rd" aria-hidden="true"></span><span class="tx"><b>I live in ${esc(d.country)}, I’m only visiting ${esc(t)}</b><small>Keep ${esc(d.country)}. You prove it with documents in step 5.</small></span></button></div>
  <p class="hint">We use only your phone’s time zone. No permission is needed.</p>`}

/* Fun sign-up (his ok 31 Oct 12:01/12:12): taps instead of typing, one card at a time, benefit on every part. */
const POP_OC=[['India','🇮🇳'],['Nigeria','🇳🇬'],['Philippines','🇵🇭'],['Mexico','🇲🇽'],['Pakistan','🇵🇰'],['China','🇨🇳'],['Lebanon','🇱🇧'],['Brazil','🇧🇷'],['Kenya','🇰🇪'],['Poland','🇵🇱']];
const RELS=['Christian','Muslim','Hindu','Sikh','Buddhist','Jewish','No religion'];
const TRAITS=[['cook','🍳 Loves cooking','love cooking for family and friends'],['travel','✈️ Travel','love to travel'],['family','👨‍👩‍👧 Family first','put family first'],['read','📚 Reader','enjoy a good book'],['fit','🏃 Fitness','keep fit and active'],['music','🎵 Music','love music'],['faith','🙏 Faith matters','faith matters to me'],['creative','🎨 Creative','have a creative side'],['career','💼 Career-focused','work hard on my career'],['pets','🐶 Pet lover','love animals'],['outdoors','🌳 Outdoors','love nature and the outdoors'],['calm','😊 Calm and kind','am calm and kind by nature']];
function chipRow(k,opts,cur){return `<div class="grid-c">${opts.map(([v,l])=>`<button type="button" class="cchip${String(cur)===String(v)?' on':''}" data-a="chipSet" data-k="${k}" data-v="${esc(v)}">${esc(l)}</button>`).join('')}</div>`}
function autoAbout(d){const tr=(d.traits||[]).map(k=>(TRAITS.find(t=>t[0]===k)||[])[2]).filter(Boolean);const job=d.job&&d.job!=='Student'?d.job:'';
  let a=(job?`${job}`:'')+(d.city?`${job?' in ':'Living in '}${d.city}`:'')+(d.oc?`, grew up in ${d.os?d.os+', ':''}${d.oc}.`:'.');
  if(tr.length)a+=` I ${tr.slice(0,-1).join(', ')}${tr.length>1?' and ':''}${tr[tr.length-1]}.`;a+=' Looking for a kind partner for life.';return a.replace(/^\.\s*/,'').trim()}
function journeyScreen(kind){const d=S.draft;const parts=[['👋','You','Name and birthday','',1],['🌍','Your roots','So people from your roots show first','40 sec',2],['🏙️','Your life now','City, work, study, mostly taps','60 sec',3],['💞','What matters to you','9 quick cards that build your match %','90 sec',4],['🛡️','Get verified','Your safety badge, checked by a person','3 min',5]];
  const doneTo=kind==='reward'?4:1;
  return `<div class="su-head pad"><div></div><div class="grow"><p class="eyebrow">${kind==='reward'?'Great progress':'Your NeuMarry journey'}</p><h1>${kind==='reward'?'Your match profile is <em>ready.</em>':'5 short parts. <em>Real people</em> at the end.'}</h1></div></div>
  <div class="scroll" id="su-scroll"><div class="form pad"><p class="hint" style="margin-top:0">${kind==='reward'?'We now know what matters to you. One last part, then you meet only verified people.':'Mostly taps, almost no typing. Stop any time, we save every answer.'}</p>
  <div class="jparts">${parts.map(([ic2,t,sub,tm,n])=>`<div class="jpt${n<=doneTo?' done':''}"><span class="jic">${n<=doneTo?'✓':ic2}</span><span><b>${t}</b><small>${sub}</small></span><span class="jtm">${n<=doneTo?'done':tm}</span></div>`).join('')}</div>
  ${kind==='reward'?`<p class="su-trust">${ic('shield')}<span>After verification you see only verified people, and they see you.</span></p>`:''}
  <button class="btn primary block" data-a="suCont" style="margin-top:16px">${kind==='reward'?'Continue: get verified':'Continue: your roots'}</button>
  ${kind==='reward'?'<p class="hint" style="text-align:center">Do it later. Your answers are saved.</p>':''}</div></div>`}
function univLoad(d){const want=[d.country,d.oc].filter(Boolean).join('|');if(!want||(S.univ&&S.univ.key===want))return;S.univ={key:want,loading:true,list:[]};
  const slug=c=>c.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
  Promise.all([d.country,d.oc].filter((c,i,a)=>c&&a.indexOf(c)===i).map(c=>fetch('https://neumarry.com/univ/'+slug(c)+'.json').then(r=>r.ok?r.json():[]).then(l=>l.map(u=>({n:u[0],c:u[1]||'',k:(u[1]?u[1]+', ':'')+c}))).catch(()=>[])))
   .then(ls=>{if(!S.univ||S.univ.key!==want)return;S.univ={key:want,list:[].concat(...ls)};if(S.screen==='signup'&&S.step===3)render()})}
function collegeBox(d){if(!d.eduPick||d.eduPick==='High school'||d.eduPick==='__o')return '';setTimeout(()=>univLoad(d),0);const L=(S.univ&&S.univ.list)||[];const q=(S.univQ||'').toLowerCase();
  const city=(d.city||'').toLowerCase();const sorted=L.filter(u=>!q||u.n.toLowerCase().includes(q)).sort((a,b)=>(b.c&&city&&b.c.toLowerCase().includes(city)?1:0)-(a.c&&city&&a.c.toLowerCase().includes(city)?1:0)).slice(0,40);
  return `<div class="fld" data-f="college"><span>Where did you study?</span><input id="f-univq" data-univq placeholder="Search a college" value="${esc(S.univQ||'')}" autocomplete="off">
  ${S.univ&&S.univ.loading?'<p class="hint">Loading colleges…</p>':L.length?`<div class="ulist">${sorted.map(u=>`<button type="button" class="urow${d.college===u.n?' on':''}" data-a="univSet" data-v="${esc(u.n)}"><span>${esc(u.n)}</span><small>${esc(u.k)}</small></button>`).join('')}</div>`:''}
  <span class="hint">${d.college?`Chosen: <b>${esc(d.college)}</b> · `:''}Not in the list? <button type="button" class="linkbtn" data-a="univType">Type it</button></span>${S.univType?`<input id="f-college" data-bind="college" maxlength="80" placeholder="College or university" value="${esc(d.college||'')}" style="margin-top:6px">`:''}</div>`}
const CELE={2:['Roots done!',d=>d.oc?`People from ${d.oc} will now show first in your matches.`:'People from your roots will now show first.','Your life now','about 60 sec',4,'about 5 min'],
  3:['Your life is in!',d=>d.city?`Matches will show the real distance to you in ${d.city}.`:'Matches will show the real distance to you.','What matters to you','about 90 sec',3,'about 4 min'],
  5:['Verification ready!',()=>'It goes to our team when you finish the last part. A person checks it, usually within a day.','Who you want to meet','about 30 sec',1,'about 30 sec']};
function celeLayer(){const c=CELE[S.cele];if(!c)return '';const d=S.draft;const pct=Math.round(S.cele/6*100);
  const cf=Array.from({length:36},(_,i)=>`<i style="left:${(i*37)%100}%;animation-delay:${(i%9)*0.06}s;background:${['#0E9F6E','#B8863A','#2D8A61','#8DEBC3','#E9C98D'][i%5]};--r:${(i*47)%360}deg"></i>`).join('');
  return `<div class="cele" role="dialog" aria-live="polite"><div class="cf">${cf}</div><div class="cele-c"><div class="cele-e">🎉</div><h2>${c[0]}</h2><p>${esc(c[1](d))}</p>
  <div class="cele-n"><b>Next: ${c[2]} · ${c[3]}</b><span>${c[4]} short part${c[4]>1?'s':''} left · ${c[5]} in total</span></div>
  <div class="cele-bar"><i style="width:${pct}%"></i></div><button class="btn primary block" data-a="celeGo">Keep going</button><p class="hint" style="text-align:center;margin:8px 0 0">Take a break any time, we save everything.</p></div></div>`}
function renderSignup(){if(S.suInter&&!S.editMode)return journeyScreen(S.suInter);if(!S.editMode)setTimeout(()=>noteStep(S.step),0);
  const d=S.draft,st=S.step,edit=S.editMode;let body='';const lockedId=edit&&S.me&&S.me.v.id;
  if(st===1){
    const maxDob=new Date();maxDob.setFullYear(maxDob.getFullYear()-18);
    const pend=edit&&S.me&&S.me.photoPending&&!d.photoBlob;const rej=edit&&S.me&&S.me.rejectedPhoto&&!d.photoBlob;
    const q3=`<div class="fld" data-f="g"><span>I am</span>${radioChips('g',[{v:'M',l:'A man'},{v:'F',l:'A woman'}],d.g,true,lockedId)}${errOf('g')}</div>
    <div class="fld" data-f="lookingFor"><span>Looking for</span>${radioChips('lookingFor',[{v:'F',l:'A woman'},{v:'M',l:'A man'}],d.lookingFor)}${errOf('lookingFor')}</div>
    ${inF('dob','Date of birth','date',d.dob,`max="${maxDob.toISOString().slice(0,10)}" min="1950-01-01"${lockedId?' disabled':''}`)}`;
    body=edit?`<div class="photo-pick">${avatar(null,'lg',true)}<div style="display:grid;gap:6px"><span class="btn ghost sm file">${ic('camera')}${d.photo?'Change photo':'Add a photo'}<input type="file" accept="image/*" data-file="photo" aria-label="Profile photo"></span><span class="hint">${pend?'Your photo is waiting for a quick check by our team.':rej?`<b style="color:var(--bad)">Your last photo was not approved${S.me.rejectedPhoto.note?': '+esc(S.me.rejectedPhoto.note):''}.</b> Add a clear photo of your face.`:'A clear, recent photo of your face. Hidden from others until you both accept.'}</span></div></div>${errOf('photo')}
    ${inF('name','Full name','text',d.name,`autocomplete="name" maxlength="60"${lockedId?' disabled':''}`,lockedId?'Checked against your ID. Write to us to change it.':'Others see only your first name and last initial until you match.')}
    ${pickF('createdBy','Profile created by','draft')}
    <div class="fld" data-f="g"><span>I am</span>${radioChips('g',[{v:'M',l:'A man'},{v:'F',l:'A woman'}],d.g,true,lockedId)}${errOf('g')}</div>
    <div class="fld" data-f="lookingFor"><span>Looking for</span>${radioChips('lookingFor',[{v:'F',l:'A woman'},{v:'M',l:'A man'}],d.lookingFor)}${errOf('lookingFor')}</div>
    <div class="row2">${inF('dob','Date of birth','date',d.dob,`max="${maxDob.toISOString().slice(0,10)}" min="1950-01-01"${lockedId?' disabled':''}`)}${pickF('h','Height','draft',{ph:'Select'})}</div>
    ${pickF('marital','Marital status','draft')}`
     :`<div class="q3"><p class="q3-h"><b>Let’s find your person</b><small>Just these to start. Photo and checks come later, when you are ready.</small></p>
    ${q3}</div>
    ${inF('name','Full name','text',d.name,`autocomplete="name" maxlength="60"`,'Others see only your first name and last initial until you both say yes.')}`;
  }else if(st===2){
    const hasStates=statesOf(d.oc).length>0;
    body=`<div class="callout">${ic('pin')}<span>Where were you born and brought up? We use this to find people from your roots.</span></div>
    ${edit?'':`<p class="lbl-s">Tap your country, or search all countries</p>${chipRow('oc',POP_OC.map(([c,f])=>[c,f+' '+c]),d.oc)}`}
    ${pickF('oc','Country of origin','draft',{ph:'Choose a country'})}
    ${pickF('os','State / region','draft',{ph:hasStates?'Choose a state or region':'Type your region',disabled:!d.oc})}
    ${!edit&&d.oc&&TONGUE_BY_ORIGIN[d.oc]?`<p class="lbl-s">Language at home</p>${chipRow('t',TONGUE_BY_ORIGIN[d.oc].slice(0,6).map(x=>[x,x]),d.t)}`:''}
    ${pickF('t','Mother tongue','draft',{ph:'Choose a language'})}
    ${edit?'':`<p class="lbl-s">Faith</p>${chipRow('r',RELS.map(x=>[x,x]),d.r)}`}
    ${pickF('r','Religion','draft',{ph:'Choose a religion'})}
    ${pickF('c','Community (optional)','draft',{ph:d.r?'Choose or type your community':'Choose a religion first',disabled:!d.r,showBlank:!!d.r,hint:'Only used when you or a match filter by it.'})}
    <div class="panel" style="padding:4px 16px">${toggle('privacy.showC','Show my community on my profile','Turn off to keep it private. Filters still work.',d.privacy.showC)}</div>`;
  }else if(st===3){
    if(!edit&&!d.country){const t=tzCountry();if(t)d.country=t}
    body=`${edit?'':`<div class="photo-pick">${avatar(null,'lg',true)}<div style="display:grid;gap:6px"><span class="btn ghost sm file">${ic('camera')}${d.photo?'Change photo':'Add a photo'}<input type="file" accept="image/*" data-file="photo" aria-label="Profile photo"></span><span class="hint">You can also add it later. Our team checks every photo.</span></div></div>
    ${pickF('createdBy','Profile created by','draft')}
    <div class="row2">${pickF('h','Height','draft',{ph:'Select'})}${pickF('marital','Marital status','draft')}</div>`}${pickF('country','Country you live in','draft',{ph:'Choose a country'})}
    ${tzWarn(d)}
    <div class="row2">${pickF('state','State / province','draft',{ph:'Choose',disabled:!d.country})}${pickF('city','City','draft',{ph:'Choose or type',disabled:!d.country})}</div>
    ${pickF('res','Residency status','draft',{ph:'Choose',disabled:!d.country})}
    ${pickF('reloc','Open to relocating for the right person?','draft',{ph:'Choose',disabled:!d.country})}
    ${edit?inF('job','Profession','text',d.job,'maxlength="60" placeholder="e.g. Software engineer"'):pickOrOther('job','What do you do?',JOBS,'Type your profession')}
    ${edit?inF('edu','Highest education','text',d.edu,'maxlength="80" placeholder="e.g. MSc, University of Toronto"'):pickOrOther('edu','Highest study',EDUS,'Type your study')}
    ${edit?'':collegeBox(d)}
    ${edit?'':`<div class="fld" data-f="traits"><span>Pick 3 that are so you</span><div class="grid-c">${TRAITS.map(([k,l])=>`<button type="button" class="cchip${(d.traits||[]).includes(k)?' on':''}" data-a="traitTap" data-k="${k}">${l}</button>`).join('')}</div><span class="hint">We write your “About me” from these. You can change it.</span></div>`}
    <label class="${fldCls('about')}" data-f="about"><span>About me</span><textarea id="f-about" data-bind="about" maxlength="600" placeholder="Where you grew up, what you love, what you are looking for.">${esc(d.about)}</textarea><span class="hint">At least 40 characters. Do not add phone numbers or social handles here.</span>${errOf('about')}</label>`;
  }else if(st===4){
    const qi=d.ans.findIndex(x=>x===null||x===undefined);
    body=`${!edit&&qi>=0?`<div class="qcard"><p class="qn">Card ${qi+1} of ${QS.length}</p><h3>${esc(QS[qi].q)}</h3><div class="qans">${QS[qi].o.map((o,j)=>`<button type="button" class="qopt" data-a="qAns" data-i="${qi}" data-j="${j}">${esc(o)}</button>`).join('')}</div>
      <div class="qdots">${QS.map((_,i)=>`<i class="${d.ans[i]!==null&&d.ans[i]!==undefined?'on':i===qi?'cur':''}"></i>`).join('')}</div>${qi>0?`<button type="button" class="linkbtn" data-a="qBack">Back to card ${qi}</button>`:''}</div>`:''}
    ${!edit&&qi>=0?'':`${edit?'':`<p class="su-trust">${ic('check')}<span>All ${QS.length} cards done. Change any answer below.</span></p>`}<p class="hint">There are no right answers. We use these to show how your mindsets match.</p>
    ${QS.map((q,i)=>`<fieldset class="q${S.errors['ans.'+i]?' has-err':''}" data-f="ans.${i}"><legend>${i+1}. ${esc(q.q)}</legend><div class="opts">${q.o.map((o,j)=>`<label class="opt"><input type="radio" name="q${i}" value="${j}" data-bind="ans.${i}" data-num${d.ans[i]===j?' checked':''}><span>${esc(o)}</span></label>`).join('')}</div>${errOf('ans.'+i)}</fieldset>`).join('')}
    `}
    <h3 class="section-t">Lifestyle</h3>
    ${pickF('diet','Diet','draft',{ph:'Choose'})}
    <div class="row2">${pickF('sm','Smoking','draft')}${pickF('dr','Drinking','draft')}</div>`;
  }else if(st===5){
    body=renderVerifyBody(d,edit);
  }else if(st===6){
    if(!d.prefs)d.prefs=defaultPrefs(d);
    const pr=d.prefs;
    body=`<h3 class="section-t">Privacy</h3>
    <div class="panel" style="padding:4px 16px">${toggle('privacy.blur','Hide my photos','Only people you have both accepted can see them',d.privacy.blur)}</div>
    <h3 class="section-t">Who you are looking for</h3>
    <div class="row2">${pickF('prefs.ageMin','Age from','draft')}${pickF('prefs.ageMax','Age to','draft')}</div>${errOf('prefs.ageMax')}
    <div class="row2">${pickF('prefs.hMin','Height from','draft')}${pickF('prefs.hMax','Height to','draft')}</div>${errOf('prefs.hMax')}
    ${pickF('prefs.liveCountry','Where they live','draft')}
    ${pr.liveCountry===d.country?pickF('prefs.radius','Distance','draft'):''}
    ${pickF('prefs.oc','Their roots: country','draft')}
    ${pr.oc!=='Any'?pickF('prefs.os','Their roots: state / region','draft'):''}
    ${pickF('prefs.religion','Religion','draft')}
    ${pickF('prefs.community','Community','draft',{disabled:pr.religion==='Any'||!commOf(pr.religion).length,hint:pr.religion==='Any'?'Choose a religion to pick a community.':''})}
    ${pr.community!=='Any'?pickF('prefs.alsoComm','Also open to these communities','draft',{hint:NO_EVENTS?'':'More communities means more matches and more people to meet at events.'}):''}
    ${pickF('prefs.timeline','Ready to marry','draft')}`;
  }
  if(st===5&&d.vs)return verifyHead(d)+`<div class="scroll" id="su-scroll"><div class="form pad">${body}</div></div>`+verifyFoot(d);
  const vReady=st===5&&verifyAllReady(d,edit?S.me:null),vFirst=st===5?([1,2,3].find(n=>!['ok','wait','ready'].includes(vState(n,d,edit?S.me:null)))||1):1;
  const vAny=st===5&&[1,2,3].some(n=>vState(n,d,edit?S.me:null)!=='todo');
  return `${S.cele&&!edit?celeLayer():''}<div class="su-head pad"><button class="iconbtn" data-a="suBack" aria-label="${st===1&&!edit?'Back to start':'Previous step'}">${ic('back')}</button>
    <div class="t"><small>${edit?'Edit profile':'Step '+st+' of 6 · saved'}</small><h2>${STEPS[st-1]}</h2>
    ${edit?`<div class="steps-nav" role="tablist">${STEPS.map((s,i)=>`<button data-a="suJump" data-n="${i+1}" class="${i+1===st?'on':''}" role="tab" aria-selected="${i+1===st}">${i+1}. ${SHORT[i]}</button>`).join('')}</div>`:`<div class="progress" aria-hidden="true">${STEPS.map((_,i)=>`<i class="${i<st?'on':''}"></i>`).join('')}</div>${S.draft&&S.draft.g!=='M'?`<p class="su-offer">${ic('crown')}<span>First 300 verified women in every country get <b>3 months of Gold free</b></span></p>`:''}`}</div></div>
  <div class="scroll" id="su-scroll"><div class="form pad">${edit?'':`<p class="su-trust">${ic('shield')}<span>${SU_TRUST[st-1]}</span></p>`}${body}</div></div>
  <div class="su-foot pad">${edit?`<button class="btn ghost" data-a="suCancel"${busy?' disabled':''}>Discard</button><button class="btn primary" data-a="suSave"${busy?' disabled':''}>${busy==='save'?spinner('Saving')+' Saving':'Save changes'}</button>`:
    st===5&&!vReady?`<button class="btn ghost" data-a="suNext">Do this later</button><button class="btn primary" data-a="vGo" data-n="${vFirst}">${vAny?'Next check':'Start'}</button>`:
    `<button class="btn primary" data-a="suNext"${busy?' disabled':''}>${busy==='save'?spinner('Saving')+' '+esc(S.saveMsg||'Saving'):st===6?'Finish and see matches':'Continue'}</button>`}</div>`;
}
function validateStep(st,d){
  const e={};
  if(st===1){if(!d.name.trim()||d.name.trim().length<2)e.name='Enter your name';else if(!/^[\p{L}][\p{L} .'-]*$/u.test(d.name.trim()))e.name='Use letters only';
    if(!d.lookingFor&&d.g)d.lookingFor=d.g==='M'?'F':'M';if(!d.g)e.g='Choose one';if(!d.lookingFor)e.lookingFor='Choose one';
    const a=ageFrom(d.dob);if(!d.dob)e.dob='Enter your date of birth';else if(a===null||a<18)e.dob='You must be 18 or older';else if(a>75)e.dob='Check the year';
    if(S.editMode&&!d.h)e.h='Choose your height';}
  if(st===2){if(!d.oc)e.oc='Choose your country of origin';if(!d.os)e.os='Choose your state or region';if(!d.t)e.t='Choose your mother tongue';if(!d.r)e.r='Choose your religion';}
  if(st===3){if(!S.editMode){for(const k of ['job','edu']){const pk=d[k+'Pick'];if(pk&&pk!=='__o')d[k]=pk;else if(pk==='__o'&&d[k]&&(k==='job'?JOBS:EDUS).includes(d[k]))d[k]=''}}if(!S.editMode&&d.college&&d.eduPick&&d.eduPick!=='__o')d.edu=(d.eduPick+', '+d.college).slice(0,80);if(!S.editMode&&!d.h)e.h='Choose your height';if(!d.country)e.country='Choose the country you live in';else{if(statesOf(d.country).length&&!d.state)e.state='Choose one';if(!d.city)e.city='Choose or type';if(!d.res)e.res='Choose your residency status';if(!d.reloc)e.reloc='Choose one'}
    if(!d.job.trim())e.job='Add your profession';if(!d.edu.trim())e.edu='Add your education';
    const ab=d.about.trim();if(ab.length<40)e.about=`Write at least 40 characters (${ab.length} so far)`;else if(/(\+?\d[\d\s-]{8,}\d)|@[a-z0-9_.]{3,}|https?:\/\//i.test(ab))e.about='Remove phone numbers, links and social handles. You can share them after you match.';}
  if(st===4){d.ans.forEach((a,i)=>{if(a===null||a===undefined)e['ans.'+i]='Pick one answer'});if(!d.diet)e.diet='Choose your diet';}
  if(st===5){const ph=(d.phone||'').replace(/\D/g,'');if(ph&&(ph.length<6||ph.length>14))e.phone='Enter a valid mobile number, or leave it empty';}
  if(st===6&&d.prefs){if(+d.prefs.ageMin>+d.prefs.ageMax)e['prefs.ageMax']='“Age to” must be the same or higher than “Age from”';
    if(+d.prefs.hMin>+d.prefs.hMax)e['prefs.hMax']='“Height to” must be the same or taller than “Height from”';}
  return e;
}

/* ---------- App tabs ---------- */
function topbar(title,sub,right){return `<div class="topbar pad"><div class="grow"><h1>${title}</h1>${sub?`<div class="sub">${sub}</div>`:''}</div>${right||''}</div>`}
function scopeText(){const me=S.me,pr=me.prefs;
  const live=pr.liveCountry==='Any'?'anywhere':pr.radius>0&&pr.liveCountry===me.country?`within ${pr.radius} km`:`in ${pr.liveCountry}`;
  const root=pr.oc==='Any'?'from any country':pr.os!=='Any'?`from ${pr.os}`:`from ${pr.oc}`;return {live,root}}
function ensurePicks(){const ids=new Set(PROFILES.map(p=>p.id));if(!S.picks||S.picks.date!==today()||!S.picks.ids.every(id=>ids.has(id))){const list=sortList(matchList().filter(p=>S.interests[p.id]!=='mutual'),'best').slice(0,5).map(p=>p.id);S.picks={date:today(),ids:list,revealed:[]};save()}
  return S.picks.ids.map(byId).filter(p=>p&&baseEligible(p))}
let justRevealed=null;
function verifyBanner(){const me=S.me;if(verified())return '';const all=[1,2,3].map(n=>vState(n,{},me));
  if(me.v.id&&me.v.selfie&&me.v.roots&&!me.v.lives&&me.livesAt)return recheckCall(me);
  const rej=all.includes('rej'),pend=all.every(x=>x==='ok'||x==='wait');
  return `<div class="callout gold">${ic('shield')}<span>${rej?'One of your documents was not approved. <button class="link" data-a="goVerify">Upload again</button>':pend?'Your documents are with our team. You can send interests and chat once they are approved, usually within 24 hours.':'Prove your ID, your roots and your city to send interests and chat. <button class="link" data-a="goVerify">Verify now</button>'}</span></div>`}
/* The city check lasts a year: remind 30 days before it ends, and after. */
function recheckCall(me){if(!me.livesAt)return '';const until=me.livesUntil?Date.parse(me.livesUntil):0;if(!until||until-Date.now()>30*864e5)return '';
  const st=vState(3,{},me);if(st==='wait')return `<div class="callout">${ic('pin')}<span>Your new address document is with our team, usually within 24 hours.</span></div>`;
  return `<div class="callout gold">${ic('pin')}<span><b>Still in ${esc(myPlace())}?</b> Once a year we ask every member to confirm their city, so “Lives in” stays true. It takes a minute. <button class="link" data-a="goVerify" data-n="4">Confirm now</button></span></div>`}
function livesState(me){if(me.v.lives)return ['ok',`Status and current address proven${me.livesAt?' · '+new Date(me.livesAt).toLocaleDateString(RM_I18N.locale,{day:'numeric',month:'short',year:'numeric'}):''}`];
  const st=vState(3,{},me);if(st==='wait')return ['wait','With our team, usually within 24 hours'];if(st==='rej')return ['no','Not approved. Upload a new one.'];
  if(me.livesAt)return ['no','Confirm your city again: upload a new address document.'];return ['no','Not uploaded yet']}
function renderNotLive(){
  const me=S.me,n=S.fitN||0,who=me.lookingFor==='F'?'women':'men';
  const ph=photoOk()?'ok':me.photoPending?'wait':(me.rejectedPhoto?'rej':'todo');
  const st=[vState(1,{},me),vState(2,{},me),vState(3,{},me),ph],done=st.filter(x=>x==='ok').length,allIn=st.every(x=>x==='ok'||x==='wait');
  return `<div class="topbar pad"><div class="grow"><div class="hello">${greet()}, <em>${esc(me.name.split(' ')[0])}</em></div><div class="sub">Your profile is not live yet</div></div></div>
  <div class="scroll" id="main"><div class="main-inner pad">
   <div class="nearby golive"><span class="gl-h">${ic('shield')}<b>Only fully verified members are live on NeuMarry</b></span>
    <div class="nb-n"><b>${n}</b><span>verified ${who} already fit what you are looking for</span></div>
    <div class="seats"><span>${done} of 4 checks done</span><span class="sb"><i style="width:${done*25}%"></i></span></div>
    <small>Nobody can see your profile, and you cannot see anyone, until all 4 checks are done. This keeps every profile on NeuMarry real.</small></div>
   <div class="vsteps">
    ${vStep(1,st[0],'ID and live selfie','Passport, OCI or national ID, and a selfie','goVerify')}
    ${vStep(2,st[1],'Your roots','A document that shows where you come from','goVerify')}
    ${vStep(3,st[2],'Where you live','Status document, and an address document under 3 months old','goVerify')}
    ${vStep(4,st[3],'Profile photo','A clear photo of you, checked by our team','goPhoto')}</div>
   ${allIn?`<div class="callout">${ic('clock')}<span><b>Everything is with our team.</b> We check within 24 hours. Your profile goes live the moment the last check is approved.</span></div>`:
     `<button class="btn primary block" data-a="${st.slice(0,3).every(x=>x==='ok'||x==='wait')?'goPhoto':'goVerify'}">${ic('shield')}Finish verification</button>`}
   <p class="note">${esc(WHY_LINE)}</p>
  </div></div>`;
}
/* Daily introductions (29 Oct, his ok, feature 5): up to 3 fully verified people a day, best fit first, a new set each day. */
function introsToday(list){const pool=list.filter(p=>!['sent','mutual','declined'].includes(S.interests[p.id]));if(pool.length<=3)return pool;
  const day=Math.floor((Date.now()-new Date().getTimezoneOffset()*6e4)/864e5),k=(day*3)%pool.length;return [0,1,2].map(i=>pool[(k+i)%pool.length])}
function introBlock(list){const it=introsToday(list);if(!it.length)return '';
  return `<div class="sec-h"><h2>Today’s introductions</h2><small>New ones in <span data-until="${midnight()}">${fmtLeft(midnight()-Date.now())}</span></small></div>
  <div class="nm-intro" onscroll="var d=this.nextElementSibling;if(d){var i=Math.round(this.scrollLeft/this.clientWidth);[].forEach.call(d.children,function(e,j){e.classList.toggle('on',j===i)})}">${it.map(p=>`<div class="nm-slide">${card(p)}</div>`).join('')}</div>
  ${it.length>1?`<div class="nm-dots" aria-hidden="true">${it.map((_,i)=>`<i class="${i?'':'on'}"></i>`).join('')}</div>`:''}`}
function renderMatches(){
  if(!isLive())return renderNotLive();
  const me=S.me,pr=me.prefs,list=sortList(matchList(),S.sort);
  const t=scopeText(),n=activeFilterCount();
  const recv=PROFILES.filter(p=>baseEligible(p)&&S.interests[p.id]==='received');
  const picks=list.length>=6?ensurePicks():[];
  const hi=list.filter(p=>compat(p).total>=80).length,who=me.lookingFor==='F'?'women':'men';
  const passedN=S.passed.filter(id=>{const p=byId(id);return p&&baseEligible(p)&&p.fits&&passFilters(p)}).length;
  const tile=p=>{const rev=S.picks.revealed.includes(p.id);const c=compat(p).total;
    return rev?`<button class="tp${justRevealed===p.id?' flip':''}" data-a="open" data-id="${p.id}" aria-label="Open ${esc(shown(p))}'s profile">${avatar(p,'tile')}<span class="tpn">${esc(shown(p))}, ${p.age}<small>${c}% match · ${esc(p.cityName)}</small></span></button>`
      :`<button class="tp mystery" data-a="reveal" data-id="${p.id}" aria-label="Reveal today's pick"><span class="mq">${ic(!isGold()?'lock':'sparkle')}<b>${!isGold()?'Gold pick':'Tap to reveal'}</b><span>${c}% match</span></span></button>`};
  return `<div class="topbar pad"><div class="grow"><div class="hello">${greet()}, <em>${esc(me.name.split(' ')[0])}</em></div><div class="sub">${list.length} ${list.length===1?'person':'people'} ${esc(t.root)}, ${esc(t.live)}</div></div><button class="iconbtn soft" data-a="filters" aria-label="Filters and preferences">${ic('filter')}${n?`<span class="count-dot">${n}</span>`:''}</button></div>
  <div class="scroll" id="main"><div class="main-inner pad">
    ${verifyBanner()}
    ${me.privacy.vis==='hidden'?`<div class="callout">${ic('eye')}<span>Your profile is paused, so nobody new can find you. <button class="link" data-a="unpause">Show my profile again</button></span></div>`:''}
    ${!isGold()?`<div class="nearby"><div class="nb-n"><b>${list.length}</b><span>${who} fit what you are looking for, ${esc(t.live)}</span></div><div class="nb-s"><span>${ic('sparkle')}<b>${hi}</b> are 80%+ matches</span><span>${ic('heart')}<b>${recv.length}</b> already like you</span></div><button class="btn gold block" data-a="upgrade" data-r="nearby">${ic('crown')}See who they are</button><small>Free shows how many people fit you and your match % with each. Names, photos and everything else come with Gold.</small></div>`:''}
    ${recv.length?`<button class="likes" data-a="goLikes"><span class="stack">${recv.slice(0,3).map(p=>avatar(p,'sm')).join('')}</span><span class="tx"><b>${recv.length} ${recv.length===1?'person likes':'people like'} you</b><span>See who, and say yes to start chatting</span></span>${ic('heart')}</button>`:''}
    ${introBlock(list)}
    ${list.length>3&&!S.showAllM?`<button class="btn ghost block" data-a="showAllM">See all ${list.length} matches</button>`:''}
    ${!list.length||S.showAllM?`<div class="sec-h"><h2>All matches</h2></div>
    <div class="listhead"><div class="sorts" role="group" aria-label="Sort">${[['best','Best match'],['near','Nearest'],['new','Newest']].map(([k,l])=>`<button data-a="sort" data-k="${k}" class="${S.sort===k?'on':''}" aria-pressed="${S.sort===k}">${l}</button>`).join('')}</div></div>
    ${list.length?list.map(card).join(''):`<div class="empty"><span class="eic">${ic('search')}</span><h3>${PROFILES.some(p=>p.fits)?'No one fits every filter yet':'New members are joining'}</h3><p>${PROFILES.some(p=>p.fits)?'Try widening one preference.':'NeuMarry is just opening. Verified members appear here as they join. Widening a preference shows more people.'}</p><div class="btns">
      ${pr.radius>0?`<button class="btn sm ghost" data-a="widen" data-k="radius">Anywhere in ${esc(pr.liveCountry)}</button>`:''}
      ${pr.liveCountry!=='Any'?`<button class="btn sm ghost" data-a="widen" data-k="anywhere">Any country</button>`:''}
      ${pr.community!=='Any'?`<button class="btn sm ghost" data-a="widen" data-k="community">Any community</button>`:''}
      ${pr.os!=='Any'?`<button class="btn sm ghost" data-a="widen" data-k="os">Anyone from ${esc(pr.oc)}</button>`:''}
      <button class="btn sm ghost" data-a="filters">Open filters</button></div></div>`}
    `:''}
    ${passedN?`<button class="link" data-a="togglePassed" style="justify-self:start">${S.showPassed?'Hide':'Show'} ${passedN} passed ${passedN===1?'profile':'profiles'}</button>`:''}
  </div></div>`;
}
function evCard(e){
  const f=fmtDay(e.date,e.tz),rv=e.my,st=evStat(e),[wc,wl,mc,ml]=e.seats;const left=S.me.g==='F'?wl:ml,cap=S.me.g==='F'?wc:mc;
  return `<button class="evcard" data-a="openEvent" data-id="${e.id}" aria-label="${esc(e.title)}, ${esc(f.long)}">
   <span class="evart" style="display:block">${evArt(e)}<span class="evd"><span>${f.mon}</span><b>${f.day}</b><span>${f.wd}</span></span><span class="evk">${rv?`<span class="booked">${ic('check')}${rv.status==='paid'?'Booked':rv.wait?'Waiting list':'Reserved'}</span>`:''}<span>${ic(e.parents?'users':'user')}${e.parents?'Parents welcome':'Members only'}</span></span></span>
   <span class="evb">
    <span class="evt serif" style="font-size:21px;display:block">${esc(e.title)}</span>
    <span class="aud${forMe(e)?'':' off'}">${ic(forMe(e)?'globe':'lock')}${esc(audLabel(e))}</span>
    <span class="meta"><span>${ic('cal')}${esc(f.long)} · ${e.time}</span><span>${ic('pin')}${esc(e.area)}</span><span>${ic('users')}Ages ${e.age}</span></span>
    ${st.confirmed?`<span class="seats"><span class="cstat ok">${ic('check')}Confirmed · ${left<=6?`only ${left} seats left for ${S.me.g==='F'?'women':'men'}`:`${left} seats left for ${S.me.g==='F'?'women':'men'}`}</span><span class="sb"><i style="width:${Math.round((cap-left)/cap*100)}%"></i></span></span>`:
    `<span class="seats"><span class="cstat">${evMine(e).seatsLeft?`${st.n} of ${e.need} reserved · confirms when ${st.left} more reserve by ${esc(fmtDay(st.deadline,e.tz).long)}`:evMine(e).waitLeft?`Seats for ${evMine(e).who} are full · join the waiting list`:`Full for ${evMine(e).who}`}</span><span class="sb"><i style="width:${Math.min(100,Math.round(st.n/e.need*100))}%"></i></span></span>`}
    <span class="nm-seats"><span>Women ${wc-wl} of ${wc}<span class="b"><i style="width:${wc?Math.round((wc-wl)/wc*100):0}%"></i></span></span><span>Men ${mc-ml} of ${mc}<span class="b m"><i style="width:${mc?Math.round((mc-ml)/mc*100):0}%"></i></span></span></span>
    <span class="evfoot"><span class="price-l"><b>${money(e.priceM,e.cur)}</b> per member, dinner included${e.parents&&e.priceP?` · parents ${money(e.priceP,e.cur)}`:''}</span>${rv&&rv.status==='pay_due'?`<span class="pill gold">Confirmed</span>`:rv&&rv.status==='hold_due'?`<span class="pill gold">Pay ${money(e.hold,e.cur)} to hold</span>`:rv&&rv.wait?`<span class="pill">On the waiting list</span>`:rv?`<span class="pill good">${rv.holdPaid?'Reserved':'Reserved free'}</span>`:!evMine(e).seatsLeft&&evMine(e).waitLeft?`<span class="pill gold">Join waiting list</span>`:!evMine(e).seatsLeft?`<span class="pill">Full</span>`:holdOn(e)?`<span class="pill gold">Reserve · ${money(e.hold,e.cur)} hold</span>`:`<span class="pill gold">Reserve free</span>`}</span>
   </span></button>`;
}
/* Events world-wide (his ok 29 Oct 22:50): your city vote, online mixer for your country, cities opening soon. */
const WCITIES=[['Toronto','Canada'],['Vancouver','Canada'],['London','United Kingdom'],['Dubai','United Arab Emirates'],['Singapore','Singapore'],['Sydney','Australia'],['Melbourne','Australia'],['New York / NJ','United States'],['Bay Area','United States'],['Auckland','New Zealand']];
function seatBar(w,m){const pw=Math.min(100,w/30*100),pm=Math.min(100,m/30*100);
  return `<div class="cvbar"><span><i style="width:${pw}%"></i></span><small>${w} of 30 women</small></div><div class="cvbar men"><span><i style="width:${pm}%"></i></span><small>${m} of 30 men</small></div>`}
function worldEvents(){const b=S.board;if(!b||!b.city)return '';const mine=b.mine||[];const inC=mine.includes('city'),inO=mine.includes('online');
  const c=b.city,o=b.online||{women:0,men:0};const tot=c.women+c.men;const top=b.top||[];
  const cnt=(n)=>{const t=top.find(x=>x.city.toLowerCase()===n.toLowerCase().split(' /')[0].toLowerCase());return t?t.women+t.men:0};
  const live=n=>events().some(e=>e.city&&e.city.toLowerCase()===n.toLowerCase());
  const rdy=n=>top.some(x=>x.ready&&x.city.toLowerCase()===n.toLowerCase().split(' /')[0].toLowerCase());
  return `<div class="sec-h"><h2>Events around the world</h2></div>
  <div class="panel cv"><div class="cv-h">${ic('pin')}<span><b>${esc(c.city)}</b><small>${c.ready?'Ready: 30 women + 30 men asked for events here':tot+' interested · opens at 60 (30 women + 30 men)'}</small></span></div>${c.ready?`<p class="hint cvok">${ic('check')}We are planning the first Family Mixer in ${esc(c.city)}. Everyone who asked gets an email with the date.${c.currency&&c.currency!=='CAD'?` Tickets in ${esc(c.currency)}.`:''}</p>`:seatBar(c.women,c.men)}
   <button class="btn ${inC?'ghost':'primary'} sm" data-a="cityVote" data-k="city" data-on="${inC?0:1}">${inC?ic('check')+'You asked for events here':'Bring events to '+esc(c.city)}</button></div>
  <div class="panel cv"><div class="cv-h">${ic('users')}<span><b>Online Family Mixer · ${esc(o.country||c.country)}</b><small>${S.online&&S.online.starts_at?esc(new Date(S.online.starts_at).toLocaleString(RM_I18N.locale,{weekday:'short',day:'numeric',month:'short',hour:'numeric',minute:'2-digit'}))+' (your time) · Free · Google Meet':'Free video evening on Google Meet for verified members in your country. We email the date.'}</small></span></div>${S.online&&S.online.link?`<a class="btn primary sm" href="${esc(S.online.link)}" target="_blank" rel="noopener">${ic('users')}Join the video call now</a>`:S.online&&S.online.starts_at&&inO?`<p class="hint">The video link opens here 1 hour before the start, only for verified members on the list.</p>`:seatBar(o.women,o.men)}
   <button class="btn ${inO?'ghost':'primary'} sm" data-a="cityVote" data-k="online" data-on="${inO?0:1}">${inO?ic('check')+'You are on the list':'Join the online mixer list'}</button></div>
  ${(S.partnersNear||[]).length?`<div class="sec-h"><h2>Our partners near you</h2></div><div class="cvchips">${S.partnersNear.map(x=>`<span class="cvchip pt"><b>${esc(x.name)}</b><small>${x.kind==='bureau'?'Matrimonial bureau':x.kind==='restaurant'?'Partner restaurant':'Event host'} · ${esc(x.city)}</small></span>`).join('')}</div>`:''}
  <div class="cvchips">${WCITIES.map(([n,co])=>`<span class="cvchip${live(n)?' on':''}"><b>${esc(n)}</b><small>${live(n)?'Events open':rdy(n)?'Ready · date soon':cnt(n)?cnt(n)+' interested':'Opening soon'}</small></span>`).join('')}</div>`}
/* Top strip (his 30 Oct: "dusri countries wala dikh nahi raha"): the world at a glance, without scrolling. Full cards stay below. */
function worldStrip(){const b=S.board;if(!b||!b.city)return '';const c=b.city,top=b.top||[],mine=b.mine||[],inC=mine.includes('city');
  const cnt=n=>{const t=top.find(x=>x.city.toLowerCase()===n.toLowerCase().split(' /')[0].toLowerCase());return t?t:null};
  const live=n=>events().some(e=>e.city&&e.city.toLowerCase()===n.toLowerCase());
  return `<div class="wstrip"><div class="ws-h"><b>${ic('pin')}Events around the world</b><button class="ws-me${inC?' on':''}" data-a="cityVote" data-k="city" data-on="${inC?0:1}">${esc(c.city)} · ${c.ready?'Ready':(c.women+c.men)+' of 60'}${inC?' '+ic('check'):''}</button></div>
  <div class="ws-row">${WCITIES.map(([n])=>{const t=cnt(n);return `<span class="ws-c${live(n)?' on':t&&t.ready?' rd':''}"><b>${esc(n)}</b><small>${live(n)?'Events open':t&&t.ready?'Ready':t?(t.women+t.men)+' interested':'Opening soon'}</small></span>`}).join('')}</div></div>`}
function renderEvents(){
  const me0=S.me||{};const near=e=>e.city&&me0.city&&e.city.toLowerCase()===String(me0.city).toLowerCase()?0:e.country===me0.country?1:2;
  const evs=events().slice().sort((a,b)=>near(a)-near(b)||a.date-b.date);const mine=evs.filter(e=>e.my);
  return topbar('Events','Hosted evenings with dinner included')+
  `<div class="scroll" id="main"><div class="main-inner pad">
   ${mine.length?`<div class="sec-h"><h2>Your reservations</h2></div>${mine.map(e=>{const r=e.my,f=fmtDay(e.date,e.tz);return `<button class="tkrow" data-a="openEvent" data-id="${e.id}"><span class="tki" style="${r.status==='pay_due'?'':'background:var(--gold-soft);color:var(--gold)'}">${ic(r.status==='pay_due'?'ticket':'cal')}</span><span class="tx"><b>${esc(e.title)}</b><small>${r.status==='paid'?'Paid · your QR ticket opens on the event day':r.status==='pay_due'?`Confirmed · pay${r.due?' by '+esc(fmtDay(r.due,e.tz).long):''} to keep your seat`:r.status==='hold_due'?`Pay the ${money(e.hold,e.cur)} seat hold to keep your seat`:`${esc(f.long)} · waiting for ${evStat(e).left} more to confirm`}</small></span>${ic('back','flipx')}</button>`}).join('')}`:''}
   ${worldStrip()}
   ${evs.length?whyEvent():''}
   <div class="callout">${ic('users')}<span>${evs.some(holdOn)?`Reserve with a ${money(evs.find(holdOn).hold,evs.find(holdOn).cur)} seat hold. An event is confirmed when every seat and the waiting list are full; then you pay the rest in the app. Dinner is included, and nothing is paid at the restaurant. Not full in time? We move it to a new date and email you; if the new date does not suit you, your hold is refunded.`:'Reserve free. An event is confirmed when every seat and the waiting list are full; then you pay in the app. Dinner is included, and nothing is paid at the restaurant. Not full in time? We move it to a new date and email you. Nobody pays before then.'}</span></div>
   <div class="sec-h"><h2>Upcoming events</h2></div>
   ${evs.length>1?`<div class="sorts evf" role="group" aria-label="Show events">${[['for','For you'],['all','Every event']].map(([k,l])=>`<button data-a="evFilter" data-k="${k}" class="${(S.evFilter||'for')===k?'on':''}" aria-pressed="${(S.evFilter||'for')===k}">${l}</button>`).join('')}</div>`:''}
   ${(()=>{const fk=evs.length>1?(S.evFilter||'for'):'all';const shownEv=evs.filter(e=>fk==='all'?true:forMe(e));
     return shownEv.length?shownEv.map(evCard).join(''):`<div class="empty"><span class="eic">${ic('cal')}</span><h3>${evs.length?'No events for your community yet':'New events are coming'}</h3><p>${evs.length?'Hosts add community events as more members join.':'The first Family Mixers are being planned. You will see them here.'}</p>${evs.length?`<div class="btns"><button class="btn sm ghost" data-a="evFilter" data-k="all">Every event</button></div>`:''}</div>`})()}
   ${worldEvents()}
   <p class="note">Every event: separate tables in one shared room, fully verified guests (ID, roots and city), a NeuMarry host, QR check-in at the door.</p>
   <div class="panel wwu"><div class="wwu-h"><h3>Bring Family Mixers to your city</h3></div>
    <button class="rowi" data-a="hostAsk">${ic('users')}<span class="tx"><b>${S.hostSent?'Host application received':'Host events'}</b><span>${S.hostSent?'We reply within 3 working days':'CA$100 for every event · training included'}</span></span>${ic('chev','rchev')}</button>
    <button class="rowi" data-a="restaurantAsk">${ic('dish')}<span class="tx"><b>${S.restSent?'Restaurant request received':'Own a restaurant?'}</b><span>${S.restSent?'Our team will call you':'We bring 30 to 60 paying guests for dinner'}</span></span>${ic('chev','rchev')}</button></div>
  </div></div>`;
}
function renderConnections(){
  const segs=[['chats','Chats'],['received','Likes you'],['sent','Sent'],['short','Saved']];
  const pick=k=>PROFILES.filter(p=>baseEligible(p)&&(k==='short'?S.shortlist.includes(p.id):S.interests[p.id]===k));
  const chatIds=Object.keys(S.chats).filter(id=>{const p=byId(id);return p&&S.interests[id]==='mutual'&&!S.blocked.includes(id)&&!S.reported.includes(id)});
  const last=id=>{const m=S.chats[id];return m[m.length-1]};chatIds.sort((a,b)=>last(b).ts-last(a).ts);
  const cnt={chats:chatIds.reduce((a,id)=>a+(S.unread[id]||0),0),received:pick('received').length,sent:pick('sent').length,short:pick('short').length};
  let body='';
  if(S.seg==='chats'){
    body=`<div class="callout">${ic('shield')}<span>Your number stays hidden. Never send money to someone you have not met, and meet first in a public place.</span></div>
    ${chatIds.length?`<div class="rows">${chatIds.map(id=>{const p=byId(id),l=last(id),u=S.unread[id]||0;const lk=!canChat(id);return `<button class="rowi" data-a="openchat" data-id="${id}">${avatar(p,'sm')}<span class="tx"><b>${esc(shown(p))} ${vtick(p)}</b><span>${lk&&l.f==='them'?`${esc(p.first||'They')} sent you a message`:`${l.f==='me'?'You: ':''}<span class="notr">${esc(l.x)}</span>`}</span></span><span class="end">${lk?`<span class="pill gold">${ic('lock')}Gold</span>`:u?`<span class="unread" aria-label="${u} unread">${u}</span>`:timeStr(l.ts)}</span></button>`}).join('')}</div>`:
    `<div class="empty"><span class="eic">${ic('chat')}</span><h3>No chats yet</h3><p>Chat opens when you and someone both say yes.</p><button class="btn sm primary" data-a="tab" data-k="matches">See matches</button></div>`}`;
  }else{
    const list=pick(S.seg);
    const empty={received:['No likes yet','When someone sends you an interest, it shows up here.'],sent:['You have not sent any interests','Send an interest from Matches. If they accept, photos unlock and chat opens.'],short:['Nothing saved yet','Tap the star on any profile to save it for later.']}[S.seg];
    const end=p=>{const st=S.interests[p.id];if(S.seg==='sent')return `<span class="pill">Waiting</span>`;return st==='mutual'?`<span class="pill good">Matched</span>`:st==='sent'?`<span class="pill">Sent</span>`:`<span class="pill">${compat(p).total}%</span>`};
    body=S.seg==='received'&&list.length?list.map(card).join(''):list.length?`<div class="rows">${list.map(p=>rowItem(p,end(p))).join('')}</div>`:`<div class="empty"><span class="eic">${ic('heart')}</span><h3>${empty[0]}</h3><p>${empty[1]}</p><button class="btn sm primary" data-a="tab" data-k="matches">See matches</button></div>`;
  }
  return topbar('Chats','Your matches, likes and saved profiles')+
  `<div class="scroll" id="main"><div class="main-inner pad"><div class="seg" role="tablist">${segs.map(([k,l])=>`<button role="tab" data-a="seg" data-k="${k}" class="${S.seg===k?'on':''}" aria-selected="${S.seg===k}">${l}${cnt[k]?`<span class="n">${cnt[k]}</span>`:''}</button>`).join('')}</div>${body}</div></div>`;
}
function completeness(me){const checks=[me.photoPaths.length>0,!!me.about&&me.about.length>=80,me.v.id,me.v.selfie,!!me.edu,!!me.job,!!me.phone];return Math.round(checks.filter(Boolean).length/checks.length*100)}
function checkState(c,ok){if(ok)return ['ok','Approved'];if(!c)return ['no','Not uploaded yet'];if(c.status==='pending')return ['wait','With our team, usually within 24 hours'];if(c.status==='rejected')return ['no','Not approved'+(c.note?': '+c.note:'')+'. Upload a new one.'];return ['ok','Approved']}
function renderMe(){
  const me=S.me,L=price(),pct=completeness(me),parts=me.name.trim().split(/\s+/);
  const vr=(state,t,s,n)=>`<div class="vrow">${state==='ok'?ic('check','ok-ic'):ic('info','no-ic')}<span class="tx"><b>${esc(t)}</b><small>${esc(s)}</small></span>${state==='no'?`<button class="btn sm primary" data-a="goVerify" data-n="${n||1}">Upload</button>`:''}</div>`;
  const idS=checkState(me.idCheck,me.v.id),sS=checkState(me.selfieCheck,me.v.selfie),rS=checkState(me.rootsCheck,me.v.roots),lS=livesState(me);
  const dt=x=>x?new Date(x).toLocaleDateString(RM_I18N.locale,{day:'numeric',month:'short',year:'numeric'}):'';
  const goldLine=me.plan==='free'?'':me.goldSource==='admin'?`Gold is on for free during the test, until ${new Date(me.goldUntil).toLocaleDateString(RM_I18N.locale,{day:'numeric',month:'short'})}.`:me.goldSource==='women_offer'?`Your free Gold (welcome offer for women) runs until ${new Date(me.goldUntil).toLocaleDateString(RM_I18N.locale,{day:'numeric',month:'short',year:'numeric'})}.`:me.goldSource==='google'?`Gold through Google Play, paid until ${new Date(me.goldUntil).toLocaleDateString(RM_I18N.locale,{day:'numeric',month:'short',year:'numeric'})}.`:`Gold is active until ${new Date(me.goldUntil).toLocaleDateString(RM_I18N.locale,{day:'numeric',month:'short',year:'numeric'})}.`;
  return topbar('My profile',me.plan==='gold'?'Gold member':me.plan==='concierge'?'Concierge member':'Free member',`<button class="iconbtn soft" data-a="previewMe" aria-label="See my profile as others do">${ic('eye')}</button>`)+
  `<div class="scroll" id="main"><div class="main-inner pad">
   ${me.isAdmin?`<button class="likes" data-a="openAdmin"><span class="pi" style="width:40px;height:40px;border-radius:50%;background:var(--rose-soft);color:var(--rose);display:grid;place-items:center">${ic('shield')}</span><span class="tx"><b>Team: review queue</b><span>Approve photos, IDs and selfies, and handle reports</span></span>${ic('back','flipx')}</button>`:''}
   <div class="panel"><div class="me-card">${avatar(null,'md',true)}<div class="tx"><h3>${esc(parts[0])}${parts[1]?' '+esc(parts[1][0])+'.':''}</h3><p>${me.age} · ${ftIn(me.h)} · ${esc(me.job)}</p><p>${esc(me.os)}, ${esc(me.oc)} → ${esc(myPlace())}</p></div></div>
    ${me.photoPending?`<p class="hint">${ic('info')} Your photo is waiting for a quick check by our team.</p>`:''}
    <div class="complete"><div class="hint">Profile ${pct}% complete${pct<100?' · a complete profile builds more trust':''}</div><div class="bar"><i style="width:${pct}%"></i></div></div>
    <button class="btn ghost" data-a="edit">Edit profile</button></div>
   <button class="likes nm-bio" data-a="shareBio"><span class="pi">${ic('send')}</span><span class="tx"><b>Family biodata</b><span>Send a private 7-day link to your family. They can answer 👍 or 🤔. No phone, email or photos.</span></span>${ic('back','flipx')}</button>${(S.bioReacts||[]).length?`<div class="fam-r"><b>${ic('users')}Your family said</b>${S.bioReacts.slice(0,5).map(r=>`<span>${r.reaction==='good'?'👍 Looks good':'🤔 Let’s talk'}${r.who?` · ${esc(r.who)}`:''}</span>`).join('')}</div>`:''}${S.bioUntil?`<p class="hint">Your link works until ${esc(new Date(S.bioUntil).toLocaleDateString(RM_I18N.locale,{day:'numeric',month:'short'}))}. <button class="link" data-a="stopBio">Stop link</button></p>`:''}
   ${recheckCall(me)}<div class="panel"><h3>Verification</h3><div>${vr(idS[0],'Government ID',idS[1],1)}${vr(sS[0],'Live selfie',sS[1],1)}${vr(rS[0],`Roots: ${me.os}, ${me.oc}`,rS[0]==='ok'&&me.rootsAt?`Proven with a document · ${dt(me.rootsAt)}`:rS[1],2)}${vr(lS[0],`Lives in: ${myPlace()}, ${me.country}`,lS[1],3)}${me.locOk?vr('ok','Location check',`Confirmed · ${dt(me.locAt)}`):''}<div class="vrow">${ic('info','no-ic')}<span class="tx"><b>Phone number</b><small>${me.phone?esc(me.phone)+' · code checks by SMS are coming soon':'Optional · add it in Edit profile'}</small></span></div></div></div>
   ${NO_EVENTS?'':workCard()}
   <div class="panel"><h3>Privacy</h3><div>
    ${toggle('privacy.blur','Hide my photos','Only people you have both accepted can see them',me.privacy.blur,'me')}
    ${toggle('privacy.showC','Show my community','Filters still work if this is off',me.privacy.showC,'me')}
    ${toggle('privacy.incognito','Browse privately','Others do not see that you viewed them · Gold',me.privacy.incognito,'me')}
    ${toggle('paused','Pause my profile','Hide from everyone while you talk to someone',me.privacy.vis==='hidden','me')}
   </div></div>
   <div class="panel"><h3>Your plan</h3>
    ${me.plan==='free'?`<p class="sub">Free shows how many people fit you and your match % with each, and you can chat when a Gold member matches with you. Names, photos, interests, chat, daily picks and event guest lists are part of Gold.</p>${me.g==='F'&&!me.womenOffer&&(me.womenLeft==null||me.womenLeft>0)?`<div class="callout gold">${ic('gift')}<span>Welcome offer: the first 300 verified women get 3 months of Gold free. It switches on when your ID is approved.</span></div>`:''}<button class="btn gold" data-a="upgrade">${ic('crown')}See Gold, from ${planOpts()[2][3]}/month</button>`:
    `<p class="sub">${esc(goldLine)}</p>${me.goldSource==='admin'?`<button class="btn ghost" data-a="endBeta">Switch back to Free to try it</button>`:me.goldSource==='google'?MANAGE_SUB():`<p class="hint">Manage or cancel Gold in your Google Play account.</p>`}`}</div>
   ${isGold()&&me.v.id?`<div class="panel"><h3>Invite people you trust</h3><p class="sub">Friends who join with your code get 10% off their first Gold purchase and an “Invited by” badge. You get a “Trusted member” badge and 10% off your next renewal, up to 6 times a year.</p>
    <div class="vrow">${ic('gift')}<span class="tx"><b>Your invite code</b><small><span class="code" id="inv-code">${S.invite?esc(S.invite):'…'}</span></small></span>${S.invite?`<button class="iconbtn" data-a="copyCode" data-k="${esc(S.invite)}" aria-label="Copy invite code">${ic('copy')}</button>`:''}</div>
    ${S.invite?`<button class="btn ghost" data-a="shareInvite">${ic('send')}Share invite</button>`:''}</div>`:''}
   <div class="panel"><h3>Safety centre</h3><ul class="hint" style="margin:0;padding-left:18px;display:grid;gap:5px">
    <li>Report anyone who asks for money, gifts or visa help.</li><li>Keep chats in the app until you trust the person.</li><li>Do a video call before meeting, and meet in public.</li><li>Every report is reviewed by a person within 24 hours.</li></ul></div>
   <div class="panel"><h3>Help and legal</h3>
    <button class="rowi" data-a="lang">${ic('globe')}<span class="tx"><b>Language</b><span class="notr">${esc((LANGS_ALL.find(x=>x[0]===RM_I18N.lang)||LANGS_ALL[0])[1])}</span></span></button>
    <button class="rowi" data-a="helpOpen">${ic('mail')}<span class="tx"><b>Help and contact</b><span>Questions, complaints and our Grievance Officer</span></span></button>
    <button class="rowi" data-a="legal" data-k="terms">${ic('info')}<span class="tx"><b>Terms of Service</b><span>What you agree to, and what we are responsible for</span></span></button>
    <button class="rowi" data-a="legal" data-k="privacy">${ic('lock')}<span class="tx"><b>Privacy Policy</b><span>What we collect, why, and your rights</span></span></button>
    <button class="rowi" data-a="deleteAsk">${ic('trash')}<span class="tx"><b>Delete my account</b><span>Permanently remove your profile and data</span></span></button></div>
   <button class="btn ghost block" data-a="logout">${ic('back')}Log out</button>
   <p class="note">NeuMarry ${esc(CFG.version)} · test version · ${esc(API.email())}</p>
  </div></div>`;
}

/* ---------- Overlay views ---------- */
function trustRows(p){const my=x=>x?new Date(x).toLocaleDateString(RM_I18N.locale,{month:'short',year:'numeric'}):'';
  const row=(ok,t,sub)=>`<div class="vtrow">${ok?ic('check','ok-ic'):ic('info','no-ic')}<span class="tx"><b>${esc(t)}</b><small>${esc(sub)}</small></span></div>`;
  return row(p.v.id&&p.v.selfie,'ID and live selfie',p.v.id&&p.v.selfie?'Approved by our team':'Not verified yet')
   +row(p.v.roots,`Roots: ${p.os}, ${p.oc}`,p.v.roots?`Proven with a document${p.rootsAt?' · '+my(p.rootsAt):''}`:'Not proven yet')
   +row(p.v.lives,`Lives in: ${p.cityName}, ${p.country}`,p.v.lives?`Status and current address proven${p.livesAt?' · '+my(p.livesAt):''}`:'Not proven yet')
   +(p.locOk?row(true,'Location check',`Confirmed${p.locAt?' · '+my(p.locAt):''}`):'')}
function renderProfileView(id,isMe){
  let p;
  if(isMe){const me=S.me,parts=me.name.trim().split(/\s+/);p=Object.assign({},me,{id:'me',first:parts[0],last:parts.slice(1).join(' '),cityName:me.city||me.state,v:Object.assign({work:false},me.v),photos:me.photo?[me.photo]:[],photoCount:me.photoPaths.length})}
  else p=byId(id);
  if(!p)return '';
  const c=isMe?null:compat(p);const showC=isMe?p.privacy.showC:true;
  const kv=[['Age',p.age],['Height',ftIn(p.h)],['Lives in',`${p.cityName}, ${p.country}`],['Roots',`${p.os}, ${p.oc}`],['Mother tongue',p.t],['Religion',p.r+(showC&&p.c?` · ${p.c}`:'')],['Residency',p.res],['Marital status',p.marital],['Profession',p.job],['Education',p.edu],['Diet',p.diet],['Smoke · Drink',`${p.sm} · ${p.dr}`],['Profile created by',p.createdBy]];
  const nm=isMe?`${p.first}${p.last?' '+p.last[0]+'.':''}`:shown(p);
  const valsHtml=isMe?'':QS.map((q,i)=>{const d=Math.abs(S.me.ans[i]-p.ans[i]);const cls=d===0?'s':d===1?'c':'f';return `<div class="val"><span class="mk ${cls}" aria-label="${d===0?'Same':d===1?'Close':'Different'}">${d===0?'✓':d===1?'≈':'–'}</span><div><div class="q2">${esc(q.k)}</div><div class="a"><i>You</i><span>${esc(q.o[S.me.ans[i]])}</span><i>${p.g==='F'?'Her':'Him'}</i><span>${esc(q.o[p.ans[i]])}</span></div></div></div>`}).join('');
  const more=!isMe&&p.photos&&p.photos.length>1?`<div class="panel"><h3>Photos</h3><div class="pgrid">${p.photos.slice(1).map(u=>`<span class="ptile"><span class="av av-tile"><img src="${esc(u)}" alt="" loading="lazy"></span></span>`).join('')}</div></div>`:'';
  return `<div class="view" role="dialog" aria-label="${esc(nm)} profile">
   <div class="scroll" id="view-scroll">
    <div class="pv-top">${isMe?avatar(null,'xl',true):avatar(p,'xl')}
      <div class="vhead over pad"><button class="iconbtn" data-a="closeView" aria-label="Back">${ic('back')}</button><div class="grow"></div>${isMe?'':`<button class="iconbtn" data-a="more" data-id="${p.id}" aria-label="More options">${ic('more')}</button>`}</div>
      <div class="pv-ov"><div class="tx"><h2>${esc(nm)} <span class="age">${p.age}</span></h2><p>${checksSeal(p)} ${esc(p.job)}</p></div>${c?`<span class="nm-fit" style="--fit:${c.total}%" aria-label="${c.total}% fit"><span>${c.total}%<small>fit</small></span></span>`:''}</div></div>
    <div class="pad" style="display:grid;gap:14px;padding-block:16px 26px">
     ${isMe?`<div class="callout">${ic('eye')}<span>This is how other members see your profile once they can open it.</span></div>`:`<div class="panel">${routeLine(p)}</div>`}
     ${!isMe&&S.interests[p.id]==='received'?`<div class="callout gold">${ic('heart')}<span>${esc(p.first)} sent you an interest. Accept to unlock photos and chat.</span></div>`:''}
     ${!isMe&&p.paused?`<div class="callout">${ic('eye')}<span>${esc(p.first)} has paused ${p.g==='F'?'her':'his'} profile for now.</span></div>`:''}
     ${!isMe?`<ul class="nm-why">${whyChips(p).map(w=>`<li>${ic('heart')}<span>${esc(w.t)}</span></li>`).join('')}</ul>${timelinePill(p)}`:''}
     <div class="panel"><h3>About</h3><p class="notr">${esc(p.about)}</p></div>
     ${more}
     <div class="panel"><dl class="kv">${kv.map(([k,v])=>`<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl></div>
     ${c?`<div class="panel"><h3>Why ${c.total}%</h3><div class="meter">${[['Values',c.values],['Lifestyle',c.life],['Preferences',c.pref],['Distance',c.loc],['Roots',c.roots]].map(([k,v])=>`<div class="m"><span>${k}</span><span class="t"><i style="width:${Math.round(v*100)}%"></i></span><b>${Math.round(v*100)}</b></div>`).join('')}</div></div>
     <div class="panel"><h3>Mindset, side by side</h3><div>${valsHtml}</div></div>`:''}
     <div class="panel"><h3>Checked by NeuMarry</h3>${checksRow(p)}<div>${trustRows(p)}</div><p class="hint">Documents are never shown to members.</p></div>
    </div>
   </div>
   ${isMe?'':`<div class="pv-act pad">${actionBar(p)}</div>`}
  </div>`;
}
/* Conversation starters (29 Oct, feature 3): from the answers you share. */
function starters(p){const me=S.me,out=[];
  if(p.oc===me.oc)out.push(`How does your family celebrate at home in ${p.cityName}?`);
  if(me.ans[0]===p.ans[0]&&p.ans[0]===0)out.push(`What do you love most about ${p.cityName}?`);
  if(me.ans[5]===p.ans[5])out.push(['What does a family weekend look like for you?','Which place here do you like to go out with friends?','Where is the next trip you dream of?'][p.ans[5]]||'');
  if(me.ans[1]===p.ans[1])out.push('What do you enjoy most about your work?');
  out.push('What made you move to '+p.cityName+'?');
  const list=[...new Set(out.filter(Boolean))].slice(0,3);
  return `<div class="nm-start pad"><small>Ideas from your answers</small><div>${list.map(t=>`<button data-a="starter" data-t="${esc(t)}">${esc(t)}</button>`).join('')}</div></div>`}
function renderChatView(id){
  const p=byId(id);if(!p)return '';
  const msgs=S.chats[id]||[];
  return `<div class="view" role="dialog" aria-label="Chat with ${esc(shown(p))}">
   <div class="vhead pad"><button class="iconbtn" data-a="closeView" aria-label="Back">${ic('back')}</button>
    <button class="grow" data-a="open" data-id="${id}" style="border:0;background:none;padding:0;text-align:left">${avatar(p,'sm')}<span><b>${esc(shown(p))}</b><small>${esc(p.os)} → ${esc(p.cityName)}</small></span></button>
    <button class="iconbtn" data-a="more" data-id="${id}" data-chat="1" aria-label="More options">${ic('more')}</button></div>
   <div class="scroll" id="chat-scroll"><div class="msgs pad">
    ${chatWhy(id)?`<div class="msg sys gold">${ic('crown')} ${esc(chatWhy(id))}</div>`:''}
    ${msgs.map(m=>!canChat(id)&&m.f==='them'?`<div class="msg them locked" aria-label="Message from ${esc(p.first||'them')}, locked"><span class="blurtxt" aria-hidden="true">${esc(m.x)}</span><span class="lockline">${ic('lock')}${esc(p.first||'They')} sent you a message</span></div>`:
      `<div class="msg ${m.f}${m.pending?' pending':''}">${esc(m.x)}${m.f!=='sys'?`<time>${m.pending?'Sending…':timeStr(m.ts)}</time>`:''}</div>${m.flag&&m.f==='them'?`<div class="msg sys">${ic('shield')} This message mentions money or visas. Never send money or pay for visa help, and report anyone who asks.</div>`:''}`).join('')}
   </div></div>
   ${canChat(id)&&msgs.filter(m=>m.f!=='sys').length<6?starters(p):''}
   ${canChat(id)?`<div class="composer pad"><label class="sr" for="chat-in">Message</label><input id="chat-in" type="text" maxlength="1000" placeholder="Message ${esc(p.first||'')}" autocomplete="off" enterkeyhint="send"><button class="btn primary" data-a="send" data-id="${id}" aria-label="Send">${ic('send')}</button></div>`:
   `<div class="lockbar pad"><span class="tx"><b>Read and reply to ${esc(p.first||'your match')}</b><small>Chat opens when either of you has Gold</small></span><button class="btn gold" data-a="upgrade" data-r="chat" data-id="${id}">${ic('crown')}Unlock</button></div>`}
  </div>`;
}
function renderEventView(id){
  const e=evById(id);if(!e)return '';
  const f=fmtDay(e.date,e.tz),rv=e.my,st=evStat(e),[wc,wl,mc,ml]=e.seats;
  const canBook=forMe(e)&&ageOk(e);
  return `<div class="view" role="dialog" aria-label="${esc(e.title)}">
   <div class="scroll" id="view-scroll">
    <div class="evhero">${evArt(e,true)}<div class="vhead over pad"><button class="iconbtn" data-a="closeView" aria-label="Back">${ic('back')}</button><div class="grow"></div></div>
     <div class="ovt"><p>${esc(f.long)} · ${e.time} · ${e.dur}</p><h2>${esc(e.title)}</h2><p>${esc(audLabel(e))} · ${esc(e.sub)} · ages ${e.age}</p></div></div>
    <div class="pad" style="display:grid;gap:14px;padding-block:16px 26px">
     ${rv&&rv.status==='paid'?`<div class="callout good">${ic('check')}<span><b>Your seat is paid${rv.parents.length?` for you and ${rv.parents.length} ${rv.parents.length===1?'parent':'parents'}`:''}.</b> Dinner is included. Your QR ticket below opens on the event day.</span></div>`:
       rv&&rv.status==='pay_due'?`<div class="callout gold">${ic('ticket')}<span><b>The event is confirmed and your seat is held.</b>${rv.due?` Pay by ${esc(fmtDay(rv.due,e.tz).long)} · ${esc(fmtTime(rv.due,e.tz))}, or the seat goes to the next person.`:''}</span></div>${payPanel(e)}`:
       rv&&rv.status==='hold_due'?`<div class="callout gold">${ic('ticket')}<span><b>One more step: pay the ${money(e.hold,e.cur)} seat hold.</b> Your seat counts once it is paid. It is taken off your ticket, and refunded in full if the event is not confirmed.</span></div>${payPanel(e)}`:
       rv&&rv.wait&&rv.status!=='hold_due'?`<div class="callout">${ic('clock')}<span><b>You’re on the waiting list.</b> All seats for ${evMine(e).who} are taken. If a seat frees up, it is yours and we email you at once. Nothing to pay until then.</span></div>`:
       rv?`<div class="callout">${ic('check')}<span><b>You’re reserved${rv.parents.length?` with ${rv.parents.length} ${rv.parents.length===1?'parent':'parents'}`:''}.</b> Nothing to pay until ${st.left} more people reserve. If the event isn’t full by ${esc(fmtDay(st.deadline,e.tz).long)}, we move it to a new date and email you. Nobody pays before then.</span></div>`:''}
     ${e.moved?`<div class="callout gold">${ic('cal')}<span><b>New date: ${esc(fmtDay(e.date,e.tz).long)} · ${e.time}.</b> Moved from ${esc(fmtDay(e.moved,e.tz).long)} because not every seat was filled yet. Your reservation stays.</span></div>`:''}
     ${rv&&rv.status==='paid'?ticketPanel(e):''}
     ${(S.staff||[]).includes(e.id)?`<div class="panel wwu"><div class="wwu-h"><h3>Host tools</h3></div><p class="sub">Scan each guest’s QR ticket at the door. You see their photo, name and checks, then check them in with one tap.</p><button class="btn primary block" data-a="hostOpen" data-id="${e.id}">${ic('scan')}Scan tickets and guest list</button></div>`:''}
     <div class="panel"><h3>${st.confirmed?'Confirmed':'How booking works'}</h3>
      <div class="seats"><span>${st.n} of ${e.need} people reserved${st.confirmed?'':` · needs ${st.left} more by ${esc(fmtDay(st.deadline,e.tz).long)}`}</span><span class="sb"><i style="width:${Math.min(100,Math.round(st.n/e.need*100))}%"></i></span></div>
      <ol class="hint" style="margin:0;padding-left:18px;display:grid;gap:4px"><li>${holdOn(e)?`Reserve a seat with a ${money(e.hold,e.cur)} hold and choose your dish.`:'Reserve a seat for free and choose your dish.'}</li><li>When all ${e.seats[0]+e.seats[2]} seats are taken and ${e.wait[0]+e.wait[2]} more people are on the waiting list, the event is confirmed.</li><li>${holdOn(e)?'You pay the rest in the app. Dinner is included; nothing is paid at the restaurant.':'You pay in the app. Dinner is included; nothing is paid at the restaurant.'}</li><li>${holdOn(e)?`Not full ${DECIDE_DAYS} days before? We move it to a new date and email everyone. If the new date does not suit you, your hold is refunded.`:`Not full ${DECIDE_DAYS} days before? We move it to a new date and email everyone. Nobody pays before the event is confirmed.`}</li></ol></div>
     ${rv&&rv.status==='paid'?'':whyEvent('Why come')}
     ${e.includes.length?`<div class="panel"><h3>What’s included</h3><ul class="incl">${e.includes.map(x=>`<li>${ic('check')}<span>${esc(x)}</span></li>`).join('')}</ul></div>`:''}
     ${e.agenda.length?`<div class="panel"><h3>How the evening goes</h3><ul class="tl">${e.agenda.map(([tm,x])=>`<li><time>${esc(tm)}</time><i></i><span>${esc(x)}</span></li>`).join('')}</ul></div>`:''}
     <div class="panel"><h3>Who you’ll meet</h3><p class="sub">Fully verified members ${esc(audLabel(e)==='All communities'?'from every community':audLabel(e).toLowerCase())}, ages ${e.age}. Your host seats you first with your best matches at the event.</p>
      <div class="seats"><span>Women: ${wl} of ${wc} seats left</span><span class="sb"><i style="width:${Math.round((wc-wl)/wc*100)}%"></i></span></div>
      <div class="seats"><span>Men: ${ml} of ${mc} seats left</span><span class="sb"><i style="width:${Math.round((mc-ml)/mc*100)}%"></i></span></div>
      ${e.wait[0]+e.wait[2]?`<p class="hint">Waiting list: ${e.wait[1]} of ${e.wait[0]} places left for women, ${e.wait[3]} of ${e.wait[2]} for men.</p>`:''}</div>
     <div class="panel"><h3>Tickets</h3>
      <div class="sumrow"><span>Member, dinner included</span><b>${money(e.priceM,e.cur)}</b></div>
      ${e.parents&&e.priceP?`<div class="sumrow"><span>Parent, dinner included (up to 2)</span><b>${money(e.priceP,e.cur)} each</b></div>`:`<p class="hint">Members only.</p>`}
      <p class="hint">Early price while the event is filling. The price goes up once it is confirmed, and again in the last 3 days. Men and women pay the same.</p></div>
     <div class="panel"><h3>Good to know</h3><ul class="incl">
      <li>${ic('shield')}<span>Every guest is fully verified (ID, roots and city) and checked in at the door with a QR ticket.</span></li>
      <li>${ic('users')}<span>Conversations happen at separate tables in one shared room, never in a private room.</span></li>
      <li>${ic('pin')}<span>A partner restaurant in ${esc(e.area)}. The exact address is on your ticket after payment.</span></li>
      <li>${ic('refresh')}<span>Cancel your reservation any time before you pay.</span></li>
      <li>${ic('lock')}<span>Your picks stay private. Only mutual picks become matches.</span></li></ul></div>
    </div>
   </div>
   <div class="bookbar pad"><span class="tx"><b>${money(e.priceM,e.cur)}</b><small>${e.parents&&e.priceP?`+ ${money(e.priceP,e.cur)} per parent`:'per person'}</small></span>${
     rv&&rv.status==='paid'?`<button class="btn ghost" disabled>${ic('check')}Seat paid</button>`:
     (rv&&(rv.status==='pay_due'||rv.status==='hold_due'))&&PAYQ&&PAYQ.eid===e.id&&PAYQ.q&&!PAYQ.q.error?`<button class="btn primary" data-a="payEvent" data-id="${e.id}"${PAYBUSY?' disabled':''}>${ic('lock')}Pay ${money(PAYQ.q.total_cents,PAYQ.q.currency)}</button>`:
     rv?`<button class="btn ghost" data-a="cancelRes" data-id="${e.id}"${busy?' disabled':''}>Cancel reservation</button>`:
     !forMe(e)?`<button class="btn ghost" disabled>For ${esc((e.aud||{}).l||'members')} only</button>`:
     !ageOk(e)?`<button class="btn ghost" disabled>For ages ${e.age}</button>`:
     !evMine(e).seatsLeft&&!evMine(e).waitLeft?`<button class="btn ghost" disabled>Full</button>`:
     `<button class="btn primary" data-a="book" data-id="${e.id}"${canBook?'':' disabled'}>${!evMine(e).seatsLeft?'Join the waiting list':holdOn(e)?`Reserve · ${money(e.hold,e.cur)} hold`:'Reserve free seat'}</button>`}</div>
  </div>`;
}
/* Why come to an event (28 Oct, CMO text): honest reasons, no promised numbers. */
const WHY_EVENT=[['See the real person.','In one evening you see how someone talks, listens and treats others, which no photo or chat shows.'],
  ['Families meet the same evening.','Parents talk in their own lounge, so many rishta questions are answered at the table, not over weeks of calls.'],
  ['Only verified people.','Every guest has proven their ID, roots and city, and your host seats you first with your best matches.']];
function whyEvent(title){return `<div class="panel whyev"><h3>${title||'Why meet at a Family Mixer'}</h3><ul class="incl">${WHY_EVENT.map(([b,t])=>`<li>${ic('check')}<span><b>${b}</b> ${t}</span></li>`).join('')}</ul><p class="sub"><em>For many families, one evening together settles what months of chatting cannot.</em></p></div>`}
/* ---------- Event payment (PayPal) ---------- */
let PAYQ=null,PAYBUSY=false,PAYCHK=null;
function payPanel(e){const q=PAYQ&&PAYQ.eid===e.id?PAYQ.q:null;
  if(!q)return `<div class="panel"><h3>Pay for your seat</h3>${spinner('Loading')}</div>`;
  if(q.error)return q.error==='too_late'?`<div class="callout bad">${ic('info')}<span>The time to pay has passed, so this seat was released.</span></div>`:'';
  const par=q.parents||0,pct=q.ticket_cents?Math.round(q.tax_cents/q.ticket_cents*100):0;
  if(q.hold)return `<div class="panel pay"><h3>Hold your seat</h3>
   <div class="sumrow"><span>Seat hold, taken off your ticket</span><span>${money(q.ticket_cents,q.currency)}</span></div>
   <div class="sumrow total"><b>Pay now</b><b>${money(q.total_cents,q.currency)}</b></div>
   <button class="btn primary block" data-a="payEvent" data-id="${e.id}"${PAYBUSY?' disabled':''}>${ic('lock')}${PAYBUSY?'Opening PayPal…':`Pay ${money(q.total_cents,q.currency)} with PayPal`}</button>
   ${q.order?`<button class="link" data-a="payCheck" data-id="${e.id}" style="justify-self:center">I already paid · check again</button>`:''}
   <p class="hint">You pay on PayPal’s secure page, with a PayPal account or a card. NeuMarry never sees your card. Refunded in full if the event is not confirmed; not refunded if you cancel.</p></div>`;
  return `<div class="panel pay"><h3>Pay for your seat</h3>
   <div class="sumrow"><span>${par?`You and ${par} ${par===1?'parent':'parents'}, dinner included`:'You, dinner included'}</span><span>${money(q.ticket_cents,q.currency)}</span></div>
   ${q.tax_cents?`<div class="sumrow"><span>HST ${pct}%</span><span>${money(q.tax_cents,q.currency)}</span></div>`:''}
   ${q.hold_paid_cents?`<div class="sumrow"><span>Seat hold already paid</span><span>−${money(q.hold_paid_cents,q.currency)}</span></div>`:''}
   <div class="sumrow total"><b>Total</b><b>${money(q.total_cents,q.currency)}</b></div>
   <button class="btn primary block" data-a="payEvent" data-id="${e.id}"${PAYBUSY?' disabled':''}>${ic('lock')}${PAYBUSY?'Opening PayPal…':`Pay ${money(q.total_cents,q.currency)} with PayPal`}</button>
   ${q.order?`<button class="link" data-a="payCheck" data-id="${e.id}" style="justify-self:center">I already paid · check again</button>`:''}
   <p class="hint">You pay on PayPal’s secure page, with a PayPal account or a card. NeuMarry never sees your card. Full refund up to 48 hours before the event.</p></div>`}
async function loadPayQuote(eid){let q;try{q=await API.rpc('my_pay_quote',{eid})}catch(e){q={error:'net'}}PAYQ={eid,q:q||{error:'net'}};
  if(q&&q.order&&PAYCHK!==eid){PAYCHK=eid;payCheck(eid,true)}
  if(view&&view.type==='event'&&view.id===eid)render()}
function payPending(v){try{if(v===undefined)return localStorage.getItem('rm.payPending');if(v)localStorage.setItem('rm.payPending',v);else localStorage.removeItem('rm.payPending')}catch(e){return null}}
async function payCheck(eid,quiet){let r;try{r=await API.fn('event-pay',{action:'check',eid})}catch(e){if(!quiet)toast((e&&e.message)||'Could not reach PayPal. Try again.','info');return}
  if(r&&r.status==='held'){payPending(null);PAYQ=null;await loadEvents().catch(()=>{});toast('Hold received. Your seat is reserved.','check');render();return true}
  if(r&&r.status==='paid'){payPending(null);PAYQ=null;await loadEvents().catch(()=>{});toast('Payment received. Your seat is paid.','check');render();return true}
  if(!quiet)toast(r&&r.status==='waiting'?'PayPal has not finished the payment yet. Finish it on the PayPal page, then come back.':'No payment found yet.','info');
  return false}
/* Back from PayPal: the web app opens with ?pp=<event>; the phone app checks when it comes back to the front. */
async function payReturn(){let q=null;try{q=new URLSearchParams(location.search)}catch(e){}const eid=q&&q.get('pp');
  if(!eid)return;history.replaceState(null,'',location.pathname);
  if(!S.me)return;S.tab='events';view={type:'event',id:eid};render();
  if(q.get('cancel')){toast('Payment cancelled. Your seat is still held until the time to pay ends.','info');return}
  await payCheck(eid,false)}
/* ---------- Event QR ticket (guest) and check-in (host) ---------- */
let TICKET=null,TK_T=null,TK_S=null;
function qrSvg(text){try{const q=qrcode(0,'M');q.addData(text);q.make();return q.createSvgTag({cellSize:6,margin:2,scalable:true})}catch(e){return ''}}
function ticketPanel(e){
  const t=TICKET&&TICKET.eid===e.id?TICKET.d:null;
  if(!t)return `<div class="panel ticket"><h3>Your QR ticket</h3>${spinner('Loading your ticket')}</div>`;
  if(t.error==='ended')return '';
  if(t.error==='too_early'){const o=new Date(t.opens_at);return `<div class="panel ticket"><span class="tk-ic">${ic('qr')}</span><h3>Your QR ticket</h3><p class="sub">It appears here on the day of the event, from ${esc(fmtDay(o,e.tz).long)} · ${esc(fmtTime(o,e.tz))}. At the door the host scans it and checks you in.</p></div>`}
  if(t.error)return `<div class="panel ticket"><span class="tk-ic">${ic('qr')}</span><h3>Your QR ticket</h3><p class="sub">${t.error==='verify_first'?'Your verification needs attention before you can check in. <button class="link" data-a="goVerify">Open verification</button>':'Your ticket could not load. Check your internet; it tries again by itself.'}</p></div>`;
  if(t.checked_in_at)return `<div class="panel ticket in"><span class="tk-ic ok">${ic('check')}</span><h3>You are checked in</h3><p class="sub">Welcome to ${esc(e.title)}. Enjoy the evening!</p></div>`;
  return `<div class="panel ticket"><h3>Your QR ticket</h3>
   <div class="qrbox" role="img" aria-label="QR ticket">${qrSvg(t.qr)}</div>
   <div class="tk-code"><span>Door code</span><b class="notr">${esc(t.code.slice(0,3))} ${esc(t.code.slice(3))}</b></div>
   <p class="tk-live">${ic('refresh')}<span>New code in <b id="tk-left">${t.seconds_left}</b> s</span></p>
   <p class="hint">Show this at the door. The code changes every 30 seconds, so a screenshot will not work.${t.parents?` Your ${t.parents===1?'parent comes':'parents come'} in with you on this ticket.`:''}</p></div>`;
}
async function loadTicket(eid){let d;try{d=await API.rpc('my_ticket',{eid})}catch(e){d={error:'net'}}
  TICKET={eid,d:d||{error:'net'},at:Date.now()};if(view&&view.type==='event'&&view.id===eid)render()}
function afterRenderEvents(){
  const e=view&&view.type==='event'?evById(view.id):null,paid=!!(e&&e.my&&e.my.status==='paid');
  clearInterval(TK_S);TK_S=null;
  if(!paid){clearTimeout(TK_T);TK_T=null;TICKET=null}
  else if(!TICKET||TICKET.eid!==e.id){clearTimeout(TK_T);TK_T=null;TICKET={eid:e.id,d:null,at:0};loadTicket(e.id)}
  else if(TICKET.d&&!TK_T){const wait=TICKET.d.code?Math.max(1,TICKET.d.seconds_left)*1000+300:60000;TK_T=setTimeout(()=>{TK_T=null;if(TICKET&&TICKET.eid===e.id)loadTicket(e.id)},wait)}
  if(paid&&TICKET&&TICKET.d&&TICKET.d.code){const end=TICKET.at+TICKET.d.seconds_left*1000;
    TK_S=setInterval(()=>{const el=document.getElementById('tk-left');if(!el){clearInterval(TK_S);return}el.textContent=Math.max(0,Math.ceil((end-Date.now())/1000))},500)}
  if(e&&e.my&&(e.my.status==='pay_due'||e.my.status==='hold_due')&&(!PAYQ||PAYQ.eid!==e.id)){PAYQ={eid:e.id,q:null};loadPayQuote(e.id)}
  if(view&&view.type==='host')hostAttach();else hostStop();
}
let HOST={eid:null,stream:null,loop:null,busy:false,res:null,guests:null,err:''};
const HOST_ERR={expired:'This code has expired. Ask the guest to open the live ticket in the NeuMarry app; screenshots do not work.',other_event:'This ticket is for a different event.',
  not_found:'This is not a NeuMarry ticket.',not_paid:'This seat is not paid.',scan_qr:'Two tickets share this code right now. Scan the QR instead.',net:'No internet. Try again.'};
function guestPic(path,name){const u=path&&urlOf(path);return u?`<img class="gpic" src="${esc(u)}" alt="">`:`<span class="gpic ini" aria-hidden="true">${esc((name||'?').trim().charAt(0))}</span>`}
function hostResult(r){
  if(!r.ok)return `<div class="panel hres bad"><span class="tk-ic bad">${ic('x')}</span><h3>Do not let in yet</h3><p class="sub">${esc(HOST_ERR[r.error]||'This ticket could not be checked.')}</p><button class="btn primary block" data-a="hostNext">${ic('scan')}Scan again</button></div>`;
  const par=Array.isArray(r.parents)?r.parents:[],okV=!!r.fully_verified;
  return `<div class="panel hres${r.done?' in':''}">
   <div class="hres-top">${guestPic(r.photo,r.name)}<div><h3>${esc(r.name)}</h3><p class="sub">${r.age} · ${esc(r.city)}, ${esc(r.country)}</p><p class="sub">Roots: ${esc(r.roots||'')}</p></div></div>
   <p class="hint">Look at the face: it must match this photo.</p>
   <ul class="incl">
    <li>${ic(okV?'check':'x')}<span>${okV?'Fully verified: ID and selfie, roots and city':'Verification is not complete. Do not check in; call the NeuMarry team.'}</span></li>
    <li>${ic('check')}<span>Seat paid</span></li>
    ${r.meal?`<li>${ic('check')}<span>Dinner: ${esc(MEALS[r.meal]||r.meal)}</span></li>`:''}
    ${par.map(x=>`<li>${ic('users')}<span>With ${esc(x.relation||'parent')}: ${esc(x.name||'')}${x.meal?' · '+esc(MEALS[x.meal]||x.meal):''}</span></li>`).join('')}</ul>
   ${r.done?`<div class="callout good">${ic('check')}<span><b>Checked in.</b> Welcome them in.</span></div>`:
     r.checked_in_at?`<div class="callout bad">${ic('info')}<span><b>Already checked in at ${esc(timeStr(Date.parse(r.checked_in_at)))}.</b> The same ticket cannot come in twice.</span></div>`:''}
   <div class="btns2">${r.done||r.checked_in_at?'':`<button class="btn primary" data-a="hostCheckIn"${okV&&!HOST.busy?'':' disabled'}>${ic('check')}Check in${par.length?` · ${1+par.length}`:''}</button>`}
    <button class="btn ghost" data-a="hostNext">${ic('scan')}Scan next</button></div></div>`;
}
function renderHostView(eid){
  const e=evById(eid),g=HOST.guests||[],inN=g.filter(x=>x.checked_in_at).length,ppl=g.reduce((a,x)=>a+1+(x.parents||0),0),pplIn=g.filter(x=>x.checked_in_at).reduce((a,x)=>a+1+(x.parents||0),0);
  return `<div class="view" role="dialog" aria-label="Check-in">
   <div class="vhead pad"><button class="iconbtn" data-a="closeView" aria-label="Back">${ic('back')}</button><div class="grow"><b>Check-in</b><small>${esc(e?e.title:'')}</small></div><button class="iconbtn soft" data-a="hostRefresh" aria-label="Refresh guest list">${ic('refresh')}</button></div>
   <div class="scroll" id="view-scroll"><div class="pad" style="display:grid;gap:14px;padding-block:8px 26px">
    <div class="hstats"><div><b>${inN}<small>/${g.length}</small></b><span>members in</span></div><div><b>${pplIn}<small>/${ppl}</small></b><span>people with parents</span></div></div>
    ${HOST.res?hostResult(HOST.res):`<div class="scanbox">${HOST.stream?`<video id="host-video" playsinline muted autoplay></video><span class="scanframe" aria-hidden="true"></span><span class="scanhint">${HOST.busy?'Checking…':'Point at the QR ticket'}</span>`:
      `<div class="scanoff">${ic('qr')}<p>Scan each guest’s QR ticket at the door.</p><button class="btn primary" data-a="hostCam">${ic('camera')}Start camera</button></div>`}</div>
     ${HOST.err?`<div class="callout bad">${ic('info')}<span>${esc(HOST.err)}</span></div>`:''}
     <div class="panel"><h3>No camera? Type the door code</h3><div class="codein"><input id="host-code" inputmode="numeric" maxlength="6" placeholder="6-digit code" autocomplete="off" aria-label="Door code"><button class="btn primary" data-a="hostCode">Check</button></div><p class="hint">The door code is under the guest’s QR. It changes every 30 seconds.</p></div>`}
    <div class="sec-h"><h2>Guests</h2><small>${inN} of ${g.length} checked in</small></div>
    ${HOST.guests===null?spinner('Loading guests'):g.length?`<div class="panel glist">${g.map(x=>`<div class="rowi">${guestPic(x.photo,x.full_name)}<span class="tx"><b>${esc(x.full_name)}</b><span>${x.gender==='F'?'Woman':'Man'}${x.parents?` · +${x.parents} ${x.parents===1?'parent':'parents'}`:''}${x.meal?' · '+esc(MEALS[x.meal]||x.meal):''}</span></span>${x.checked_in_at?`<span class="pill good">${ic('check')}${esc(timeStr(Date.parse(x.checked_in_at)))}</span>`:`<span class="pill">Not yet</span>`}</div>`).join('')}</div>`:`<p class="hint">Paid guests appear here.</p>`}
   </div></div></div>`;
}
async function hostLoadGuests(){try{HOST.guests=(await API.rpc('host_guests',{eid:HOST.eid}))||[];await signPaths(HOST.guests.map(x=>x.photo).filter(Boolean))}catch(e){HOST.guests=HOST.guests||[]}
  if(view&&view.type==='host')render()}
function hostAttach(){const v=document.getElementById('host-video');if(v&&HOST.stream&&v.srcObject!==HOST.stream){v.srcObject=HOST.stream;v.play().catch(()=>{})}}
function hostStop(){if(HOST.loop){clearInterval(HOST.loop);HOST.loop=null}if(HOST.stream){HOST.stream.getTracks().forEach(t=>t.stop());HOST.stream=null}}
function loadJsQR(){return window.jsQR?Promise.resolve():new Promise((ok,no)=>{const s=document.createElement('script');s.src='js/vendor/jsQR.js';s.onload=ok;s.onerror=no;document.head.appendChild(s)})}
async function hostCamStart(){
  try{HOST.stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:'environment'},audio:false});HOST.err=''}
  catch(e){HOST.err='The camera is blocked. Allow the camera for NeuMarry in your phone settings, or type the door code below.';render();return}
  let det=null;try{if('BarcodeDetector' in window)det=new BarcodeDetector({formats:['qr_code']})}catch(e){det=null}
  if(!det)await loadJsQR().catch(()=>{});
  const cv=document.createElement('canvas'),cx=cv.getContext('2d',{willReadFrequently:true});
  render();
  HOST.loop=setInterval(async()=>{const v=document.getElementById('host-video');if(!v||HOST.res||HOST.busy||v.readyState<2)return;
    let txt=null;
    try{if(det){const c=await det.detect(v);txt=c[0]&&c[0].rawValue}
      else if(window.jsQR){const w=v.videoWidth,h=v.videoHeight;if(!w)return;const s=Math.min(1,640/w);cv.width=w*s;cv.height=h*s;cx.drawImage(v,0,0,cv.width,cv.height);const r=jsQR(cx.getImageData(0,0,cv.width,cv.height).data,cv.width,cv.height,{inversionAttempts:'dontInvert'});txt=r&&r.data}}catch(e){}
    if(txt&&/^NEUMARRY:/i.test(txt))hostLookup(txt)},280);
}
async function hostLookup(code){if(HOST.busy)return;HOST.busy=true;render();
  try{HOST.res=await API.rpc('checkin_lookup',{eid:HOST.eid,scanned:code});if(HOST.res&&HOST.res.photo)await signPaths([HOST.res.photo])}catch(e){HOST.res={ok:false,error:'net'}}
  HOST.busy=false;if(navigator.vibrate)try{navigator.vibrate(HOST.res&&HOST.res.ok?60:[60,80,60])}catch(e){}
  render()}
function renderCelebrate(){
  const p=byId(celebrate.id);if(!p)return '';
  return `<div class="celebrate" role="dialog" aria-label="It’s a match">${hearts(14)}
   <div class="pair">${avatar(null,'cel',true)}${avatar(p,'cel')}<span class="hb">${ic('heart')}</span></div>
   <h2>It’s a match!</h2>
   <p>You and ${esc(p.first||'your match')} both said yes. Photos are unlocked${canChat(p.id)?' and chat is open':''}.</p>
   <div class="btns"><button class="btn white" data-a="celChat" data-id="${p.id}">${ic('chat')}Say hello${p.first?' to '+esc(p.first):''}</button><button class="btn clear" data-a="celClose">Keep looking</button></div></div>`;
}

/* ---------- Team review ---------- */
const ADM_KIND={photo:'Profile photo',id:'Government ID',selfie:'Live selfie',roots:'Roots document',status:'Status in the country',address:'Current address'};
const ADM_HINT={id:'Name and date of birth must match the profile. Photo must match the selfie.',selfie:'Must be a live photo of the same person as the ID and profile photos.',photo:'A clear photo of the member’s own face. No group photos, children, nudity or text.',
  roots:'The country and state of birth or origin on the document must match the roots on the profile. For “Same as my ID”, the ID shown must be a passport of that country.',
  status:'Must show the member may live in the country on the profile (PR, citizenship, or a valid permit or visa), in the same name as the ID.',
  address:'Same name as the ID, an address in the city on the profile (or within 50 km), dated in the last 3 months or a valid photo ID with the address.'};
/* New sign-ups (28 Oct, his ok): who joined in the last 30 days and where they stopped, so the team can help. */
const STEP_CLS={'Fully verified and live':'good','Waiting for our team':'gold'};
function tzPlace(tz){if(!tz)return '';const city=tz.split('/').pop().replace(/_/g,' ');return `${city} time zone`}
function signupsBlock(list){const today=list.filter(x=>Date.now()-Date.parse(x.created_at)<864e5).length;
  const when=t=>t?new Date(t).toLocaleString(RM_I18N.locale,{day:'numeric',month:'short',hour:'numeric',minute:'2-digit'}):'-';
  return `<div class="sec-h"><h2>New sign-ups (${list.length})</h2><small>${today} today · last 30 days</small></div>
  ${list.length?`<div class="panel glist su-list">${list.map(x=>{const nm=x.full_name||x.google_name;
    return `<div class="rowi"><span class="tx"><b>${esc(nm||'No name yet')}</b><span class="notr">${esc(x.email||'')}</span>
     <span>Joined ${esc(when(x.created_at))} · ${esc(x.provider==='google'?'Google':x.provider==='email'?'Email and password':x.provider)}${x.city?` · ${esc(x.city)}, ${esc(x.country||'')}`:''}</span>
     <span>Last active ${esc(when(x.last_active))} · ${x.logins||1} ${x.logins===1||!x.logins?'login':'logins'}${x.form_minutes!=null?` · ${x.form_minutes} min in the form`:''}</span>
     ${x.phone_tz?`<span>Phone: ${esc(tzPlace(x.phone_tz))}${x.phone_lang?` · language ${esc(x.phone_lang)}`:''}</span>`:''}
     ${x.reminded_at?`<span>${ic('mail')} Reminder email sent ${esc(when(x.reminded_at))}</span>`:''}
     <span class="pill ${STEP_CLS[x.step]||''}">${esc(x.step)}</span></span>
     ${x.email&&x.step!=='Fully verified and live'?`<a class="btn ghost sm" href="mailto:${esc(x.email)}?subject=${encodeURIComponent('Your NeuMarry profile')}">${ic('mail')}Email</a>`:''}</div>`}).join('')}</div>`:`<p class="hint">No new sign-ups in the last 30 days.</p>`}`}
const admAuto=g=>{if(!g)return `<p class="hint">${ic('shield')} Google check: waiting (or not available for PDF).</p>`;const t=(ok,part,lbl)=>`<span class="gchk ${ok?'ok':part?'mid':'no'}">${ok?'✓':part?'~':'✗'} ${lbl}</span>`;return `<p class="hint gline"><b>Google Cloud Vision:</b> ${t(g.name==='match',g.name==='partial','Name')}${t(g.dob==='match',g.dob==='year','Birth date')}${t(g.faces===1,g.faces>1,g.faces===1?'1 face':g.faces+' faces')}</p>`};
function renderAdmin(){
  const a=S.admin||{};const q=a.queue||[];const reps=a.reports||[];const c=a.counts;
  const item=x=>{const img=a.urls&&a.urls[x.bucket+':'+x.path];const prof=a.urls&&x.profile_photo&&a.urls['photos:'+x.profile_photo];
    const isPdf=/\.pdf$/i.test(x.path||'');
    return `<div class="panel adm" id="adm-${x.row_id}"><div class="adm-h"><b>${esc(ADM_KIND[x.kind]||x.kind)}</b><small>${esc(x.full_name)} · ${x.gender==='F'?'Woman':'Man'}, ${x.age} · ${esc(x.city)}, ${esc(x.country)}</small>${['roots','status','address'].includes(x.kind)?`<small>${x.kind==='roots'?`Roots on profile: ${esc(x.origin_state||'')}, ${esc(x.origin_country||'')}`:`Residency on profile: ${esc(x.residency||'')}`}${x.id_type?` · Document: ${esc(x.id_type)}`:''}</small>`:''}</div>
      <div class="adm-imgs">${img?(isPdf?`<a class="btn ghost sm" href="${esc(img)}" target="_blank" rel="noopener">Open PDF</a>`:`<img src="${esc(img)}" alt="${esc(x.kind)} of ${esc(x.full_name)}">`):`<span class="hint">Loading image…</span>`}${x.kind!=='photo'&&prof?`<img src="${esc(prof)}" alt="Profile photo of ${esc(x.full_name)}">`:''}</div>
      <p class="hint">${ADM_HINT[x.kind]||''}</p>${x.kind==='id'?admAuto(a.auto&&a.auto[x.row_id]):''}${x.kind==='photo'&&x.ai_check?`<p class="hint">${x.ai_check==='doubtful'?`${ic('shield')} <b>Automatic check: may be revealing or violent.</b> Look carefully.`:'Automatic check: nothing inappropriate found.'}</p>`:''}
      <div class="adm-act"><select data-adm-reason="${x.row_id}" aria-label="Reason if rejected"><option value="">Reason if rejected…</option>${(x.kind==='photo'?['Face not clear','Not a real photo of you','Group photo','Inappropriate photo']:['roots','status','address'].includes(x.kind)?['Image not readable','Does not match the profile','Not an accepted document','Older than 3 months','Name does not match the ID']:['Image not readable','Does not match the profile','Not a valid ID','Not a live selfie']).map(r=>`<option>${r}</option>`).join('')}</select>
      <button class="btn ghost sm" data-a="admReject" data-id="${x.row_id}" data-k="${x.kind}">Reject</button><button class="btn primary sm" data-a="admApprove" data-id="${x.row_id}" data-k="${x.kind}">Approve</button></div></div>`};
  return `<div class="view" role="dialog" aria-label="Team review">
   <div class="vhead pad"><button class="iconbtn" data-a="closeView" aria-label="Back">${ic('back')}</button><div class="grow"><span><b>Team review</b><small>${c?`${c.members} member${c.members===1?'':'s'} · ${c.verified} verified · ${c.women} women, ${c.men} men · ${c.waitlist} on waitlist`:'Loading…'}</small></span></div><button class="iconbtn" data-a="openAdmin" aria-label="Refresh">${ic('refresh')}</button></div>
   <div class="scroll" id="view-scroll"><div class="pad" style="display:grid;gap:14px;padding-block:16px 26px">
    ${a.loading?`<div style="display:grid;place-items:center;padding:30px">${spinner('Loading')}</div>`:''}
    ${eventsBlock(a.events||[])}${citiesBlock(a)}
    ${signupsBlock(a.signups||[])}
    <div class="panel pay-test"><div class="adm-h"><b>${ic('ticket')} Payment test (team only)</b><small>Only the team sees this event. You pay CA$1.00 + 13% HST = CA$1.13 with the real PayPal, then refund it in the PayPal dashboard.</small></div><div class="adm-act"><button class="btn primary sm" data-a="admPayTest">Open the test seat</button></div></div>
    <div class="sec-h"><h2>To review (${q.length})</h2></div>
    ${q.length?q.map(item).join(''):a.loading?'':`<p class="hint">Nothing waiting. Well done.</p>`}
    <div class="sec-h"><h2>Reports (${reps.length})</h2></div>
    ${reps.length?reps.map(r=>`<div class="panel"><b>${esc(r.reported_name)}</b><p class="hint">${esc(r.reason)}${r.note?' · '+esc(r.note):''} · reported by ${esc(r.reporter_name)} · ${new Date(r.created_at).toLocaleString(RM_I18N.locale,{day:'numeric',month:'short',hour:'numeric',minute:'2-digit'})}</p><div class="adm-act"><button class="btn ghost sm" data-a="admDismiss" data-id="${r.id}">Dismiss</button><button class="btn danger sm" data-a="admBan" data-id="${r.id}">Ban member</button></div></div>`).join(''):`<p class="hint">No open reports.</p>`}
    <div class="sec-h"><h2>Rude words or money requests (${(a.rude||[]).length})</h2></div>
    ${(a.rude||[]).length?`<p class="hint">These members tried to send or save abusive words, or to ask for money or share payment details, in the last 30 days. It was stopped and nobody saw it.</p>`+(a.rude||[]).map(x=>`<div class="panel"><div class="adm-h"><b class="notr">${esc(x.full_name||'')}</b><small>${esc(x.city||'')} · ${x.tries} ${x.tries===1?'try':'tries'}${x.money_tries?` (${x.money_tries} for money)`:''} · last ${new Date(x.last_at).toLocaleString(RM_I18N.locale,{day:'numeric',month:'short',hour:'numeric',minute:'2-digit'})}</small></div><div class="adm-act">${x.banned?`<span class="pill">Banned</span>`:`<button class="btn danger sm" data-a="admBanRude" data-id="${esc(x.user_id)}">Ban member</button>`}</div></div>`).join(''):a.loading?'':`<p class="hint">Nobody tried rude words or money requests in the last 30 days.</p>`}
    <div class="sec-h"><h2>Applications (${(a.apps||[]).filter(x=>x.status==='new').length} new)</h2></div>
    ${(a.apps||[]).length?(a.apps||[]).map(x=>{const tel=(x.contact||'').match(/\+?[0-9][0-9 ()-]{6,}/),mail=(x.contact||'').match(/[^\s·]+@[^\s·]+/);
      return `<div class="panel app-row${x.status==='new'?'':' done'}"><div class="adm-h"><b>${esc({host:'Event host',restaurant:'Partner restaurant',bureau:'Matrimonial bureau'}[x.role]||x.role)}${x.org?' · '+esc(x.org):''}</b><small>${esc(x.name||'')} · ${esc(x.city||'')} · ${new Date(x.created_at).toLocaleDateString(RM_I18N.locale,{day:'numeric',month:'short'})}</small></div>
      <p class="hint notr">${esc(x.contact||'')}${x.details?'<br>'+esc(x.details):''}</p>
      <div class="adm-act">${tel?`<a class="btn ghost sm" href="tel:${esc(tel[0].replace(/[^0-9+]/g,''))}">${ic('phone')}Call</a>`:''}${mail?`<a class="btn ghost sm" href="mailto:${esc(mail[0])}">${ic('mail')}Email</a>`:''}${x.status==='new'?`<button class="btn primary sm" data-a="admContacted" data-id="${x.id}" data-k="${x.kind}">Mark contacted</button>`:`<span class="pill">Contacted</span>`}</div></div>`}).join(''):a.loading?'':`<p class="hint">No applications yet.</p>`}
   </div></div></div>`;
}

/* ---------- Sheets ---------- */
function sheetShell(title,body,foot){return `<div class="sheet-wrap"><button class="backdrop" data-a="closeSheet" aria-label="Close"></button><div class="sheet" role="dialog" aria-modal="true" aria-label="${esc(title)}"><div class="grip" aria-hidden="true"></div><div class="sheet-h pad"><h2>${esc(title)}</h2><button class="iconbtn" data-a="closeSheet" aria-label="Close">${ic('x')}</button></div><div class="sheet-b pad" id="sheet-b">${body}</div>${foot?`<div class="sheet-f pad">${foot}</div>`:''}</div></div>`}
function chipGroup(name,opts,cur){return `<div class="chips" role="radiogroup">${opts.map(o=>{const v=typeof o==='string'?o:o.v,l=typeof o==='string'?o:o.l;return `<label class="opt"><input type="radio" name="${name}" value="${esc(v)}" data-sheet="${name}"${cur===v?' checked':''}><span>${esc(l)}</span></label>`}).join('')}</div>`}
const MANAGE_SUB=()=>`<a class="btn ghost" href="https://play.google.com/store/account/subscriptions?sku=${GOLD_PRODUCT}&amp;package=${esc(CFG.appId)}" target="_blank" rel="noopener">${ic('crown')}Manage in Google Play</a>`;
/* Google's multicolour "G", as Google's sign-in branding rules ask for. */
const GLOGO='<svg viewBox="0 0 48 48" width="20" height="20"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>';
/* Work with NeuMarry: highlighted so members see that we hire hosts and look for restaurants and bureaus. */
function workCard(){return `<div class="panel wwu"><div class="wwu-h"><h3>Work with NeuMarry</h3><span class="pill gold">We’re hiring</span></div>
    <p class="hint">Earn with us in your city. Apply in two minutes.</p>
    <button class="rowi" data-a="hostAsk">${ic('users')}<span class="tx"><b>${S.hostSent?'Host application received':'Become an event host'}</b><span>${S.hostSent?'We reply within 3 working days':'CA$100 for every Family Mixer you host'}</span></span>${ic('chev','rchev')}</button>
    <button class="rowi" data-a="restaurantAsk">${ic('dish')}<span class="tx"><b>${S.restSent?'Restaurant request received':'Partner restaurants'}</b><span>${S.restSent?'Our team will call you':'We bring 30 to 60 paying guests for dinner'}</span></span>${ic('chev','rchev')}</button>
    <button class="rowi" data-a="partnerAsk">${ic('gift')}<span class="tx"><b>${S.partnerSent?'Partner request received':'Matrimonial bureaus'}</b><span>${S.partnerSent?'Our team will call you':'10% of a member’s first purchase, plus ₹1,500 when they get engaged'}</span></span>${ic('chev','rchev')}</button></div>`}
function busyBtn(cls,act,label,attrs){return `<button class="btn ${cls}" data-a="${act}"${attrs||''}${busy?' disabled':''}>${busy===act?spinner(label):label}</button>`}
function renderSheet(){
  const me=S.me,t=sheet.type;
  if(t==='legal'){const L=LEGAL[sheet.k]||LEGAL.terms;return sheetShell(L[0],`<ul class="incl">${L[1].map(x=>`<li>${ic('check')}<span>${esc(x)}</span></li>`).join('')}</ul><p class="note">Summary only. <a class="link" href="${esc(CFG.site+(window.RM_I18N&&RM_I18N.lang==='fr'?'fr/':'')+(sheet.k==='privacy'?'privacy.html':'terms.html'))}" target="_blank" rel="noopener">Read the full ${sheet.k==='privacy'?'Privacy Policy':'Terms of Service'}</a>. Version of October 2026.</p>`,`<button class="btn primary block" data-a="closeSheet">Got it</button>`)}
  if(t==='help')return sheetShell('Help and contact',`<p>Write to us any time. We reply within 2 working days.</p>
     <div class="vrow">${ic('mail')}<span class="tx"><b>Email</b><small><a class="link" href="mailto:${esc(CFG.support)}">${esc(CFG.support)}</a></small></span></div>
     <div class="vrow">${ic('shield')}<span class="tx"><b>Grievance Officer</b><small>Swapnil Dinesh Bhagat · ${esc(CFG.support)} · replies within 30 days</small></span></div>
     <div class="vrow">${ic('globe')}<span class="tx"><b>Website</b><small><a class="link" href="${esc(CFG.site)}" target="_blank" rel="noopener">${esc(CFG.site.replace(/^https?:\/\//,''))}</a></small></span></div>
     <p class="hint">To report a member, open their profile, tap the three dots, then Report.</p>`,`<button class="btn primary block" data-a="closeSheet">Done</button>`);
  if(t==='deleteAcct')return sheetShell('Delete your account?',`<p>This permanently deletes your profile, photos, matches, chats and verification uploads. It cannot be undone.</p><p class="hint">If you bought Gold, cancel it in your Google Play account so it does not renew. We keep only what the law requires, such as payment records.</p>`,`<button class="btn ghost" data-a="closeSheet">Keep my account</button>${busyBtn('danger','deleteDo','Delete permanently')}`);
  if(t==='logout')return sheetShell('Log out?',`<p>You can log back in any time with the same ${API.session()&&API.session().user&&/gmail\.com$/.test(API.email())?'Google account or ':''}email.</p>`,`<button class="btn ghost" data-a="closeSheet">Stay</button><button class="btn primary" data-a="logoutDo">Log out</button>`);
  if(t==='host')return sheetShell('Become a NeuMarry host',`<div class="callout gold">${ic('users')}<span>Hosts welcome families, keep time and seat members with their best matches at partner restaurants. You earn <b>CA$100 for every event</b> you host, paid weekly. We give you training, the guest list and everything else.</span></div>
     <label class="fld${S.errors.hcity?' has-err':''}"><span>City</span><input type="text" maxlength="40" data-sheet="city" value="${esc(sheet.city||'')}">${errOf('hcity')}</label>
     <label class="fld${S.errors.hlang?' has-err':''}"><span>Languages you speak</span><input type="text" maxlength="80" data-sheet="lang" value="${esc(sheet.lang||'')}" placeholder="e.g. English, Gujarati, Hindi">${errOf('hlang')}</label>
     <label class="fld"><span>Communities you can bring together</span><input type="text" maxlength="100" data-sheet="comm" value="${esc(sheet.comm||'')}" placeholder="e.g. Gujarati Samaj, temple youth group"></label>
     <div class="fld"><span>Experience</span>${chipGroup('exp',['Community events','Hospitality or events work','Matchmaking or a bureau','New to this'],sheet.exp||'Community events')}</div>
     <label class="fld"><span>Restaurants that could host (optional)</span><input type="text" maxlength="120" data-sheet="rest" value="${esc(sheet.rest||'')}" placeholder="Names of places you know well"></label>
     <label class="ck${S.errors.hok?' has-err':''}"><input type="checkbox" data-sheet="ok"${sheet.ok?' checked':''}><span>I agree to a background check, the host code of conduct, and to keep every guest’s details private.</span></label>${errOf('hok')}`,
     `<button class="btn ghost" data-a="closeSheet">Cancel</button>${busyBtn('primary','hostSend','Send application')}`);
  if(t==='restaurant')return sheetShell('Partner restaurants',`<div class="callout gold">${ic('dish')}<span>Host a NeuMarry Family Mixer on a quiet evening. We bring <b>30 to 60 confirmed guests who have already paid</b>, and the meal is sold by you, at your price. We seat everyone, run the evening and leave your room as we found it.</span></div>
     <label class="fld${S.errors.rorg?' has-err':''}"><span>Restaurant name</span><input type="text" maxlength="60" data-sheet="org" value="${esc(sheet.org||'')}">${errOf('rorg')}</label>
     <label class="fld${S.errors.rcity?' has-err':''}"><span>City</span><input type="text" maxlength="60" data-sheet="city" value="${esc(sheet.city||'')}" placeholder="e.g. Brampton">${errOf('rcity')}</label>
     <label class="fld${S.errors.rname?' has-err':''}"><span>Your name</span><input type="text" maxlength="60" data-sheet="name" value="${esc(sheet.name||'')}">${errOf('rname')}</label>
     <label class="fld${S.errors.rcontact?' has-err':''}"><span>Phone or email</span><input type="text" maxlength="80" data-sheet="contact" value="${esc(sheet.contact||'')}">${errOf('rcontact')}</label>
     <div class="fld"><span>Seats for one private evening</span>${chipGroup('seats',['Up to 30','30 to 50','More than 50'],sheet.seats||'30 to 50')}</div>
     <div class="fld"><span>Food</span>${chipGroup('food',['Vegetarian only','Vegetarian and non-vegetarian','Jain options too'],sheet.food||'Vegetarian and non-vegetarian')}</div>
     <p class="hint">We use these details only to contact you about NeuMarry events.</p>`,
     `<button class="btn ghost" data-a="closeSheet">Cancel</button>${busyBtn('primary','restaurantSend','Send')}`);
  if(t==='partner')return sheetShell('Partner with NeuMarry',`<div class="callout gold">${ic('gift')}<span>For matrimonial bureaus. You earn <b>10% of a member’s first purchase</b>, plus <b>₹1,500 when that member gets engaged</b>, once per member. Members always sign up themselves: we never accept lists of other people’s details.</span></div>
     <label class="fld${S.errors.pname?' has-err':''}"><span>Bureau name</span><input type="text" maxlength="60" data-sheet="name" value="${esc(sheet.name||'')}">${errOf('pname')}</label>
     <label class="fld${S.errors.pcity?' has-err':''}"><span>City and country</span><input type="text" maxlength="60" data-sheet="city" value="${esc(sheet.city||'')}" placeholder="e.g. Ahmedabad, India">${errOf('pcity')}</label>
     <label class="fld${S.errors.pcontact?' has-err':''}"><span>Phone or email</span><input type="text" maxlength="80" data-sheet="contact" value="${esc(sheet.contact||'')}">${errOf('pcontact')}</label>`,
     `<button class="btn ghost" data-a="closeSheet">Cancel</button>${busyBtn('primary','partnerSend','Send')}`);
  if(t==='engaged'){const p=byId(sheet.id);
    return sheetShell('Congratulations!',`<p>We’re so happy for you and ${esc(p.first||'your match')}. Tell us, and we’ll pause your profile so you can focus on each other.</p>
     <label class="ck"><input type="checkbox" data-sheet="pause"${sheet.pause!==false?' checked':''}><span>Pause my profile</span></label>
     <label class="fld"><span>Your story (optional)</span><textarea maxlength="800" data-sheet="text" placeholder="How you met, the first family call, what made you sure...">${esc(sheet.text||'')}</textarea></label>
     <label class="ck"><input type="checkbox" data-sheet="pub"${sheet.pub?' checked':''}><span>NeuMarry may share our story with our first names. We ask again before using any photo.</span></label>`,
     `<button class="btn ghost" data-a="closeSheet">Not yet</button>${busyBtn('primary','storySend','Share news',` data-id="${p.id}"`)}`)}
  if(t==='filters'){
    const pr=me.prefs,n=matchList().length;
    return sheetShell('Filters',`
     ${pickF('prefs.liveCountry','Where they live','me')}
     ${pr.liveCountry===me.country?pickF('prefs.radius',`Distance from ${esc(myPlace())}`,'me'):''}
     <div class="row2">${pickF('prefs.oc','Their roots: country','me')}${pickF('prefs.os','State / region','me',{disabled:pr.oc==='Any',ph:'Any'})}</div>
     <div class="row2">${pickF('prefs.ageMin','Age from','me')}${pickF('prefs.ageMax','Age to','me')}</div>
     <div class="row2">${pickF('prefs.hMin','Height from','me')}${pickF('prefs.hMax','Height to','me')}</div>
     ${pickF('prefs.religion','Religion','me')}
     ${pickF('prefs.community','Community','me',{disabled:pr.religion==='Any'||!commOf(pr.religion).length,hint:pr.religion==='Any'?'Choose a religion first. Communities change with religion.':''})}
     ${pr.community!=='Any'?pickF('prefs.alsoComm','Also open to these communities','me',{hint:NO_EVENTS?'':'Widens your matches and who you meet at events.'}):''}
     ${pickF('prefs.tongue','Mother tongue','me')}
     ${pickF('prefs.diet','Diet','me')}
     ${pickF('prefs.timeline','Ready to marry','me',{hint:'From their answer to “How soon do you want to marry?”'})}
     <h3 class="section-t">Trust</h3>
     <div class="panel" style="padding:4px 16px">
      ${toggle('prefs.settled','Citizens and permanent residents only','Hide people on temporary visas or permits',pr.settled,'me')}
     </div>`,
     `<button class="btn ghost" data-a="resetFilters">Reset</button><button class="btn primary" data-a="closeSheet">${S.prefsSaving?spinner('Updating'):`Show ${n} ${n===1?'match':'matches'}`}</button>`);
  }
  if(t==='more'){const p=byId(sheet.id);
    return sheetShell(shown(p),`<div class="rows">
     ${sheet.chat?`<button class="rowi" data-a="safeMeet" data-id="${p.id}">${ic('shield')}<span class="tx"><b>Share my meeting plan</b><span>Send where and when you meet to someone you trust</span></span></button>`:''}
     ${sheet.chat?`<button class="rowi" data-a="engaged" data-id="${p.id}">${ic('heart')}<span class="tx"><b>${S.storyFor[p.id]?'Thank you for sharing':'We’re getting married!'}</b><span>Pause your profile and share your story</span></span></button>`:''}
     <button class="rowi" data-a="report" data-id="${p.id}">${ic('flag')}<span class="tx"><b>Report</b><span>Fake profile, money requests, rude messages</span></span></button>
     <button class="rowi" data-a="block" data-id="${p.id}">${ic('x')}<span class="tx"><b>Block</b><span>They will not see you or contact you again</span></span></button></div>`);}
  if(t==='report'){const p=byId(sheet.id);const reasons=['Fake profile or photos','Asked for money or gifts','Asked for visa or immigration help','Rude or inappropriate messages','Already married or in a relationship','Under 18 or a child safety concern','Something else'];
    return sheetShell('Report '+(p.first||'this member'),`<p class="hint">Reports are private. ${esc(p.first||'They')} will not know who reported them.</p>
     <fieldset class="q${S.errors.reason?' has-err':''}"><legend>What happened?</legend><div class="opts">${reasons.map((r,i)=>`<label class="opt"><input type="radio" name="reason" value="${i}" data-sheet="reason"${sheet.reason===i?' checked':''}><span>${r}</span></label>`).join('')}</div>${errOf('reason')}</fieldset>
     <label class="fld"><span>Details (optional)</span><textarea id="rep-note" maxlength="500" data-sheet="note">${esc(sheet.note||'')}</textarea></label>`,
     `<button class="btn ghost" data-a="closeSheet">Cancel</button>${busyBtn('danger','submitReport','Send report',` data-id="${p.id}"`)}`);}
  if(t==='upgrade'){const L=price();const p=sheet.id?byId(sheet.id):null;const pick=sheet.pick||'m3';
    const pr2=p?(p.g==='F'?'her':'his'):'';
    const head={interests:['Send interests with Gold','Free shows who fits you and how well. Gold lets you reach out to them.'],picks:['See today’s 5 picks','Hand-chosen for you every day. Gold reveals all of them.'],
      chat:[p&&p.first?`Start talking to ${p.first}`:'Start talking','Chat opens when either of you has Gold.'],private:['Browse privately','With Gold, people do not see that you viewed them.'],
      profile:[p?`See ${pr2} full profile`:'See full profiles','Name, photos, mindset side by side and every reason you match.'],likes:['See who likes you','Accept and chat with the people who already chose you.'],
      nearby:['See who they are','Every name, photo and profile, plus interests, chat and daily picks.']}[sheet.reason]||['NeuMarry Gold','Everything you need to find your person faster.'];
    const prev=p&&(sheet.reason==='profile'||sheet.reason==='likes')?`<div class="pwprev">${avatar(p,'md')}<span class="tx"><b>${p.age} · ${esc(p.cityName)}</b><span>${esc(p.os)}, ${esc(p.oc)}</span></span><span class="mpct"><b>${compat(p).total}%</b><small>match</small></span></div>`:'';
    if(Bill()&&!store&&!storeLoading)loadStore().then(x=>{if(x&&sheet&&sheet.type==='upgrade')render()});
    const opts=planOpts(),canBuy=!!(Bill()&&store&&store[pick]);
    if(me.plan!=='free')return sheetShell('Your plan',`<div class="callout">${ic('crown')}<span>You have Gold. Everything is unlocked.</span></div>`,me.goldSource==='google'?MANAGE_SUB():'');
    const nLike=PROFILES.filter(x=>baseEligible(x)&&S.interests[x.id]==='received').length;
    return sheetShell('NeuMarry Gold',`<div class="nm-ghero"><span class="cr">${ic('crown')}</span><h3>${nLike?`${nLike} ${nLike===1?'person already likes':'people already like'} you`:esc(head[0])}</h3><p>${nLike?'Gold lets you see who they are and reply. Every one of them is fully verified.':esc(head[1])}</p></div>${prev}
     <div class="plans" role="radiogroup" aria-label="Gold plans">${opts.map(([k,l,tot,pm,tag])=>`<button class="plan pick${pick===k?' on':''}" data-a="pickPlan" data-k="${k}" role="radio" aria-checked="${pick===k}"><span class="ph"><b>${l}</b>${tag?`<span class="pill ${k==='m3'?'gold':'good'}">${tag}</span>`:''}</span><span class="price">${pm}<small> /month</small></span>${k==='m1'?'':`<small class="hint">${tot} billed every ${l}</small>`}</button>`).join('')}</div>
     <ul class="incl">${['Full profiles, names and photos','Send interests and chat','Daily introductions, and see who likes you','Browse privately'].map(x=>`<li>${ic('check')}<span>${x}</span></li>`).join('')}</ul>
     ${BETA?`<div class="callout gold">${ic('gift')}<span><b>Test version:</b> ${canBuy?'testers can switch on Gold for free to try everything, or buy it with Google Play.':'buying opens when NeuMarry launches. Until then, testers can switch on Gold for free to try everything.'}</span></div>`:''}
     <p class="note">Cancel anytime in your Google Play account. Safety features, verification and reporting are always free.</p>`,
     canBuy?`${BETA?busyBtn('ghost','betaGold','Try Gold free'):`<button class="btn ghost" data-a="closeSheet">Not now</button>`}${busyBtn('gold','buyGold',ic('crown')+'Get Gold')}`:
     `<button class="btn ghost" data-a="closeSheet">Not now</button>${BETA?busyBtn('gold','betaGold',ic('crown')+'Try Gold free'):`<button class="btn gold" data-a="buySoon">${ic('crown')}Get Gold</button>`}`);}
  if(t==='verifyGate'){const pendIS=(me.idCheck&&me.idCheck.status==='pending')||(me.selfieCheck&&me.selfieCheck.status==='pending');
    const all=[1,2,3].map(n=>vState(n,{},me)),wait=all.every(x=>x==='ok'||x==='wait'),first=[1,2,3].find(n=>!['ok','wait'].includes(all[n-1]))||1;
    return sheetShell(sheet.ev?'Finish verification to book events':'Finish verification to send interests',`<div class="callout">${ic('shield')}<span>${sheet.ev?'Every guest at a NeuMarry event has proven their ID, their roots and their city. They expect the same from you.':'Everyone you write to has proven their roots and their city. They expect the same from you.'}</span></div>
     <div class="vsteps">${vStep(1,all[0],'ID and live selfie','Passport or national ID, and a selfie.','goVerify')}${vStep(2,all[1],'Your roots','A document from where you grew up.','goVerify')}${vStep(3,all[2],'Where you live now','Your status and your current address.','goVerify')}</div>
     ${wait?'<p class="hint">Your documents are with our team, usually within 24 hours.</p>':`<p class="hint">${WHY_LINE}</p>`}`,`<button class="btn ghost" data-a="closeSheet">Not now</button>${wait?'':`<button class="btn primary" data-a="goVerify" data-n="${first}">Continue</button>`}`)}
  if(t==='book'){const e=evById(sheet.id);const n=sheet.parents;const total=e.priceM+(e.parents?n*(e.priceP||0):0);
    const mealOpts=(e.meals||[]).map(k=>({v:k,l:MEALS[k]||k}));
    return sheetShell('Reserve your seat',`
     <div class="panel" style="gap:10px"><div class="tline"><span class="tx"><b>You</b><small>Member · ${esc(me.name)}</small></span><b>${money(e.priceM,e.cur)}</b></div>
      <div class="fld${S.errors.meal?' has-err':''}"><span>Your dish</span>${chipGroup('meal',mealOpts,sheet.meal)}${errOf('meal')}</div></div>
     ${e.parents?`<div class="panel" style="padding:6px 16px;gap:0"><div class="tline"><span class="tx"><b>Parents</b><small>${money(e.priceP||0,e.cur)} each, dinner included · up to 2</small></span><span class="stepper"><button data-a="bookMinus" aria-label="One fewer parent"${n<=0?' disabled':''}>−</button><b aria-live="polite">${n}</b><button data-a="bookPlus" aria-label="One more parent"${n>=2?' disabled':''}>+</button></span></div></div>`:''}
     ${[0,1].slice(0,n).map(i=>`<div class="panel" style="gap:10px"><b>Parent ${i+1}</b>
      <label class="fld${S.errors['p'+i+'name']?' has-err':''}"><span>Name for the guest list</span><input id="bk-p${i}" type="text" maxlength="40" data-sheet="p${i}name" value="${esc(sheet.p[i].name)}" autocomplete="off">${errOf('p'+i+'name')}</label>
      ${chipGroup('p'+i+'rel',['Mother','Father','Guardian'],sheet.p[i].rel)}
      <div class="fld${S.errors['p'+i+'meal']?' has-err':''}"><span>Dish</span>${chipGroup('p'+i+'meal',mealOpts,sheet.p[i].meal)}${errOf('p'+i+'meal')}</div></div>`).join('')}
     <div class="panel" style="gap:8px">
      <div class="sumrow"><span>Member × 1</span><span>${money(e.priceM,e.cur)}</span></div>
      ${n?`<div class="sumrow"><span>Parents × ${n}</span><span>${money(n*(e.priceP||0),e.cur)}</span></div>`:''}
      <div class="sumrow total"><span>Total if confirmed</span><span>${money(total,e.cur)}</span></div></div>
     <p class="note">${holdOn(e)?holdNote(e)+' Prices before tax.':'Nothing is charged now. When the event is confirmed you pay in the app; dinner is included and nothing is paid at the restaurant. Prices before tax.'}</p>`,
     `<button class="btn ghost" data-a="closeSheet">Cancel</button>${busyBtn('primary','reserve',holdOn(e)?`Reserve and pay ${money(e.hold,e.cur)}`:'Reserve free')}`);}
  if(t==='cancelRes'){const e=evById(sheet.id);return sheetShell('Cancel your reservation?',`<p>Your seat at the ${esc(e.title)} goes back to other members. ${e.my&&e.my.holdPaid?`The ${money(e.my.holdPaid,e.cur)} seat hold is not refunded.`:'Nothing was charged.'}</p>`,`<button class="btn ghost" data-a="closeSheet">Keep my seat</button>${busyBtn('danger','cancelDo','Cancel reservation',` data-id="${e.id}"`)}`);}
  return '';
}

/* ---------- Render ---------- */
const app=document.getElementById('app');app.addEventListener('scroll',()=>{if(app.scrollTop||app.scrollLeft){app.scrollTop=0;app.scrollLeft=0}});
let prevSheet='',prevView='',prevPick='';
function navCounts(){const recv=PROFILES.filter(p=>baseEligible(p)&&S.interests[p.id]==='received').length;
  const unread=Object.keys(S.unread).reduce((a,k)=>a+(S.interests[k]==='mutual'&&!S.blocked.includes(k)&&!S.reported.includes(k)?S.unread[k]||0:0),0);
  return {conn:recv+unread,ev:events().filter(e=>e.my&&e.my.status==='pay_due').length}}
function render(){
  const keep={};['main','su-scroll','view-scroll','sheet-b','pick-list'].forEach(id=>{const el=document.getElementById(id);if(el)keep[id]=el.scrollTop});
  const pk0=document.querySelector('.picks');const picksLeft=pk0?pk0.scrollLeft:0;
  const ae=document.activeElement, aeId=ae&&ae.id, chatVal=(document.getElementById('chat-in')||{}).value;
  const cs0=document.getElementById('chat-scroll');const chatAtEnd=!cs0||cs0.scrollHeight-cs0.scrollTop-cs0.clientHeight<40;
  let html='';
  if(S.screen==='boot')html=renderBoot();
  else if(S.screen==='welcome'){html=renderWelcome();if(sheet)html+=renderSheet()}
  else if(S.screen==='auth'){html=renderAuth();if(sheet)html+=renderSheet()}
  else if(S.screen==='signup'){html=renderSignup();if(sheet)html+=renderSheet();if(picker)html+=renderPicker()}
  else{
    const c=navCounts();if(NO_EVENTS){if(S.tab==='events')S.tab='matches';if(view&&(view.type==='event'||view.type==='host'))view=null}
    const tabs={matches:renderMatches,events:renderEvents,connections:renderConnections,me:renderMe};
    html=(tabs[S.tab]||renderMatches)()+
    `<div class="navwrap"><nav class="nav n${NO_EVENTS?3:4}" aria-label="Main">${[['matches','Matches','rings'],['events','Events','cal',c.ev],['connections','Chats','chat',c.conn],['me','Me','user']].filter(x=>!(NO_EVENTS&&x[0]==='events')).map(([k,l,i,n])=>
      `<button data-a="tab" data-k="${k}" class="${S.tab===k?'on':''}" aria-current="${S.tab===k?'page':'false'}">${ic(i)}<span>${l}</span>${n?`<span class="count-dot" aria-label="${n} new">${n}</span>`:''}</button>`).join('')}</nav></div>`;
    if(view)html+=view.type==='chat'?renderChatView(view.id):view.type==='event'?renderEventView(view.id):view.type==='admin'?renderAdmin():view.type==='host'?renderHostView(view.id):renderProfileView(view.id,view.type==='me');
    if(sheet)html+=renderSheet();
    if(picker)html+=renderPicker();
    if(celebrate)html+=renderCelebrate();
  }
  const t=document.querySelector('.toast');
  if(typeof brand15==='function')html=brand15(html);
  app.innerHTML=html;
  if(CFG.web&&S.screen==='auth')gsiAfterRender();else if(CFG.web&&S.screen==='welcome')gsiInit(); /* load Google's button early */
  if(t){t.classList.add('still');app.appendChild(t)}
  const sk=sheet?sheet.type+(sheet.id||''):'',vk=view?view.type+(view.id||''):'',pk=picker?picker.k:'';
  if(sk&&sk===prevSheet){const w=app.querySelector('.sheet-wrap:not(.picker-wrap)');if(w)w.classList.add('still')}
  if(vk&&vk===prevView){const w=app.querySelector('.view');if(w)w.classList.add('still')}
  if(pk&&pk===prevPick){const w=app.querySelector('.picker-wrap');if(w)w.classList.add('still')}
  const newChat=vk!==prevView;
  prevSheet=sk;prevView=vk;prevPick=pk;justRevealed=null;
  afterRenderEvents(vk);
  Object.keys(keep).forEach(id=>{const el=document.getElementById(id);if(el)el.scrollTop=keep[id]});
  const pk1=document.querySelector('.picks');if(pk1)pk1.scrollLeft=picksLeft;
  const tabOn=app.querySelector('.steps-nav button.on');if(tabOn){const nv=tabOn.parentNode;nv.scrollLeft=tabOn.offsetLeft-nv.offsetLeft-nv.clientWidth/2+tabOn.offsetWidth/2}
  const ci=document.getElementById('chat-in');if(ci&&chatVal)ci.value=chatVal;
  const cs=document.getElementById('chat-scroll');if(cs&&(newChat||chatAtEnd))cs.scrollTop=cs.scrollHeight;
  if(aeId){const el=document.getElementById(aeId);if(el&&el!==document.activeElement&&/^(INPUT|TEXTAREA|BUTTON|SELECT)$/.test(el.tagName))try{el.focus({preventScroll:true})}catch(e){}}
}

/* Events for the team (29 Oct, his rule): seats + waiting list, and "Move date" when an event is not full in time. */
const DECIDE_DAYS=7;
function evTz(e){return TZCITY[e.city]||TZC[e.country]||'UTC'}
function dateInputVal(d,tz){return new Date(d).toLocaleDateString('en-CA',{timeZone:tz||'UTC'})}
function citiesBlock(a){const cs=a.cities||[],om=a.online||[];if(!cs.length&&!om.length&&!(a.events||[]).length)return '';
  return `<div class="sec-h"><h2>Cities asking for events (${cs.length})</h2></div><p class="hint" style="margin:-6px 0 0">A city is ready at 30 women + 30 men. Then the team gets an email and every voter gets one too.</p>
  ${cs.map(c=>`<div class="panel adm"><div class="adm-h"><b>${esc(c.city)} · ${esc(c.country)}</b><small>${c.women} women · ${c.men} men · tickets in ${esc(c.currency)}${c.currency==='USD'&&c.country!=='United States'?' (PayPal does not take the local money)':''}</small></div>
   <span class="pill ${c.ready?'good':''}">${c.ready?`Ready since ${esc(new Date(c.reached_at).toLocaleDateString(RM_I18N.locale,{day:'numeric',month:'short'}))} · emails ${c.mails_sent} of ${c.mails_total}`:`${c.women+c.men} of 60`}</span>
   ${c.ready?c.event_id?`<p class="hint">Draft Family Mixer made (${esc(c.event_status||'draft')}). Add the restaurant and host, check tax with the accountant, then open it.</p>`:`<div class="adm-act"><button class="btn primary sm" data-a="admOpenCity" data-c="${esc(c.city)}" data-co="${esc(c.country)}"${busy==='oc'+c.city?' disabled':''}>${ic('cal')}Make a draft Family Mixer here</button></div>`:''}</div>`).join('')}
  <div class="sec-h"><h2>Online Family Mixer</h2></div>
  ${om.map(m=>`<div class="panel adm"><div class="adm-h"><b>${esc(m.country)}</b><small>${esc(new Date(m.starts_at).toLocaleString(RM_I18N.locale,{weekday:'short',day:'numeric',month:'short',hour:'numeric',minute:'2-digit'}))} (your time) · ${m.on_list} on the list</small></div></div>`).join('')}
  <div class="panel adm"><div class="fld"><span>Country</span><input id="om-co" placeholder="Brazil" style="width:100%;box-sizing:border-box"></div>
   <div class="fld"><span>Date and time (your phone's time)</span><input id="om-st" type="datetime-local" style="width:100%;box-sizing:border-box;min-width:0"></div>
   <div class="fld"><span>Google Meet link</span><input id="om-url" placeholder="https://meet.google.com/abc-defg-hij" style="width:100%;box-sizing:border-box"></div>
   <p class="hint">Everyone on that country's list gets an email with the date. The link shows only in the app, only to verified members on the list, from 1 hour before.</p>
   <div class="adm-act"><button class="btn primary sm" data-a="admSetOnline"${busy==='om'?' disabled':''}>${ic('check')}Save and email the list</button></div></div>`}
function eventsBlock(list){if(!list.length)return '';
  return `<div class="sec-h"><h2>Events (${list.length})</h2></div><p class="hint" style="margin:-6px 0 0">An event is confirmed only when every seat and the waiting list are full.</p>
  ${list.map(e=>{const d=new Date(e.starts_at),need=e.seats_women+e.seats_men+e.wait_women+e.wait_men,have=e.seated_w+e.seated_m+Math.min(e.waiting_w,e.wait_women)+Math.min(e.waiting_m,e.wait_men);
    return `<div class="panel adm ev-adm"><div class="adm-h"><b>${esc(e.title)} · ${esc(e.city)}</b><small>${esc(d.toLocaleString(RM_I18N.locale,{weekday:'short',day:'numeric',month:'short',hour:'numeric',minute:'2-digit',timeZone:evTz(e)}))} ${esc(e.city)} time${e.postponed_from?` · moved from ${esc(new Date(e.postponed_from).toLocaleDateString(RM_I18N.locale,{day:'numeric',month:'short',timeZone:evTz(e)}))}`:''}</small></div>
     <div class="seats"><span>Women: ${e.seated_w} of ${e.seats_women} seats · waiting list ${e.waiting_w} of ${e.wait_women}</span><span class="sb"><i style="width:${Math.round(Math.min(1,(e.seated_w+e.waiting_w)/(e.seats_women+e.wait_women||1))*100)}%"></i></span></div>
     <div class="seats"><span>Men: ${e.seated_m} of ${e.seats_men} seats · waiting list ${e.waiting_m} of ${e.wait_men}</span><span class="sb"><i style="width:${Math.round(Math.min(1,(e.seated_m+e.waiting_m)/(e.seats_men+e.wait_men||1))*100)}%"></i></span></div>
     <span class="pill ${e.status==='confirmed'?'good':e.needs_new_date?'bad':''}">${e.status==='confirmed'?'Confirmed':e.needs_new_date?`Not full in time: ${have} of ${need}. Needs a new date`:`Filling: ${have} of ${need}`}</span>
     ${e.status==='open'?`<div class="fld"><span>New date in ${esc(e.city)} (talk to the restaurant first)</span><input type="date" style="width:100%;box-sizing:border-box;min-width:0" id="mv-${e.id}" data-tz="${esc(evTz(e))}" value="${dateInputVal(e.suggested,evTz(e))}" min="${dateInputVal(Date.now()+(DECIDE_DAYS+2)*864e5,evTz(e))}"></div>
     <p class="hint">Same time of day. All ${e.enrolled} enrolled ${e.enrolled===1?'person gets':'people get'} an email with the new date. Nobody has paid yet.</p>
     <div class="adm-act"><button class="btn ${e.needs_new_date?'primary':'ghost'} sm" data-a="admMoveEvent" data-id="${e.id}" data-t="${esc(e.starts_at)}"${busy==='mv'+e.id?' disabled':''}>${ic('cal')}Move date and email everyone</button></div>`:''}</div>`}).join('')}`}
let CITYADM=[[],[]];
/* ---------- Saving to the server ---------- */
function digitsOnly(s){return String(s||'').replace(/\D/g,'')}
function fullPhone(d){const dg=digitsOnly(d.phone);if(!dg)return null;const code=digitsOnly(dial(d.country));return '+'+(code&&!dg.startsWith(code)?code:'')+dg}
function profileRow(d){const co=coordsOf(d)||[null,null];const cons=readConsent();
  return {full_name:d.name.trim().replace(/\s+/g,' '),gender:d.g,looking_for:d.lookingFor,dob:d.dob,height_cm:+d.h,marital:d.marital,created_by:d.createdBy,
    origin_country:d.oc,origin_state:d.os,mother_tongue:d.t,religion:d.r,community:d.c||null,show_community:!!d.privacy.showC,
    country:d.country,state:d.state||null,city:d.city,city_lat:co[0],city_lng:co[1],residency:d.res,relocate:d.reloc,job:d.job.trim(),education:d.edu.trim(),about:d.about.trim(),
    diet:d.diet,smoke:d.sm,drink:d.dr,answers:d.ans.map(Number),blur_photos:!!d.privacy.blur,phone:fullPhone(d),
    marketing_ok:!!cons.mkt,terms_version:'2026-10',terms_at:cons.at||new Date().toISOString()}}
function prefsRow(pr,uid){return {user_id:uid,age_min:+pr.ageMin,age_max:+pr.ageMax,h_min:+pr.hMin,h_max:+pr.hMax,live_country:pr.liveCountry,radius_km:+pr.radius||0,
  origin_country:pr.oc,origin_state:pr.os,religion:pr.religion,community:pr.community,also_communities:pr.alsoComm||[],tongue:pr.tongue,diet:pr.diet,timeline:pr.timeline||'Any',settled_only:!!pr.settled,verified_only:!!pr.verifiedOnly}}
function saveConsent(a){try{localStorage.setItem('rm.consent',JSON.stringify({mkt:!!a.mkt,at:new Date().toISOString()}))}catch(e){}}
function readConsent(){try{return JSON.parse(localStorage.getItem('rm.consent')||'{}')||{}}catch(e){return {}}}
async function sha256(blob){try{const buf=await blob.arrayBuffer();const h=await crypto.subtle.digest('SHA-256',buf);return Array.from(new Uint8Array(h)).map(b=>b.toString(16).padStart(2,'0')).join('')}catch(e){return null}}
async function uploadPhoto(blob){const uid=API.userId();const path=`${uid}/${uuid()}.jpg`;const sum=await sha256(blob);
  if(sum){const dup=(S.me&&S.me.photos||[]).find(x=>x.sha===sum);if(dup)return}
  await API.upload('photos',path,blob);
  let row=null;
  try{const rows=await API.insert('photos',{user_id:uid,path,position:0,sha256:sum});row=rows&&rows[0]}
  catch(e){try{await API.removeFile('photos',path)}catch(x){}if(e.status===409||/23505|duplicate/.test(e.code||''))throw new API.ApiError('dup_photo','This photo is already used on another NeuMarry account. Choose a different photo.');throw e}
  // Automatic check (Google SafeSearch). If it cannot answer, the team still reviews every photo.
  if(row&&row.id){let r=null;try{r=await Promise.race([API.fn('photo-check',{photoId:row.id}),new Promise(ok=>setTimeout(()=>ok(null),12000))])}catch(e){r=null}
    if(r&&r.status==='rejected')throw new API.ApiError('photo_rejected','This photo was not accepted because it looks inappropriate. Choose a clear, decent photo of your own face.')}
  // The new photo replaces the old ones.
  const old=(S.me&&S.me.photos||[]).filter(x=>x.path!==path);
  for(const o of old){try{await API.remove('photos',{id:'eq.'+o.id});await API.removeFile('photos',o.path)}catch(x){}}
}
async function uploadCheck(kind,blob,name,type){const uid=API.userId();let path=null;
  if(blob){const ext=kind!=='selfie'&&/pdf$/i.test(blob.type||name||'')?'pdf':'jpg';path=`${uid}/${kind}-${uuid()}.${ext}`;await API.upload('verification',path,blob)}
  const rows=await API.insert('verifications',{user_id:uid,kind,path,id_type:(type||(kind==='id'?name:'')||'').slice(0,60)||null});
  /* Google Cloud Vision reads the ID (name, birth date, face) for the team; never blocks the member. */
  const vid=Array.isArray(rows)&&rows[0]&&rows[0].id;
  if(kind==='id'&&vid&&blob&&!/pdf/i.test(blob.type||'')&&blob.size<8e6){try{const fr=new FileReader();fr.onload=()=>{const b=String(fr.result||'').split(',')[1]||'';if(b)API.fn('id-check',{verificationId:vid,image:b}).catch(()=>{})};fr.readAsDataURL(blob)}catch(e){}}
}
async function uploadAll(d){const errs=[];
  if(d.photoBlob){S.saveMsg='Uploading your photo';render();try{await uploadPhoto(d.photoBlob);d.photoBlob=null}catch(e){errs.push(e.message)}}
  if(d.idBlob){S.saveMsg='Sending your ID';render();try{await uploadCheck('id',d.idBlob,d.idName);d.idBlob=null}catch(e){errs.push('Your ID did not upload. '+e.message)}}
  if(d.selfieBlob){S.saveMsg='Sending your selfie';render();try{await uploadCheck('selfie',d.selfieBlob,'selfie');d.selfieBlob=null}catch(e){errs.push('Your selfie did not upload. '+e.message)}}
  if(d.rootsType&&(d.rootsType==='id'||d.rootsBlob)){S.saveMsg='Sending your roots document';render();try{await uploadCheck('roots',d.rootsType==='id'?null:d.rootsBlob,d.rootsName,d.rootsType==='id'?'Same as my ID':d.rootsType);d.rootsBlob=null;d.rootsType=''}catch(e){errs.push('Your roots document did not upload. '+e.message)}}
  if(d.statusType&&d.statusBlob){S.saveMsg='Sending your status document';render();try{await uploadCheck('status',d.statusBlob,d.statusName,d.statusType);d.statusBlob=null;d.statusType=''}catch(e){errs.push('Your status document did not upload. '+e.message)}}
  if(d.addrType&&d.addrBlob){S.saveMsg='Sending your address document';render();try{await uploadCheck('address',d.addrBlob,d.addrName,d.addrType);d.addrBlob=null;d.addrType=''}catch(e){errs.push('Your address document did not upload. '+e.message)}}
  if(d.loc){try{await API.rpc('check_location',{lat:d.loc.lat,lng:d.loc.lng})}catch(e){}d.loc=null}
  return errs}
let prefsT=null;
function queuePrefsSave(){clearTimeout(prefsT);S.prefsSaving=true;prefsT=setTimeout(async()=>{try{await API.insert('preferences',prefsRow(S.me.prefs,S.me.id),{upsert:true,returning:false});await loadCards()}catch(e){fail(e)}S.prefsSaving=false;render()},500)}
async function savePrivacy(){const me=S.me;try{await API.update('profiles',{id:'eq.'+me.id},{blur_photos:!!me.privacy.blur,show_community:!!me.privacy.showC,incognito:!!me.privacy.incognito,hidden:me.privacy.vis==='hidden'})}catch(e){fail(e);await loadMe();render()}}

/* ---------- Flow helpers ---------- */
function needVerified(ev){const ok=verified();if(!ok){sheet={type:'verifyGate',ev:!!ev};render();return true}return false}
function startSignup(){if(!readConsent().at){S.auth={mode:'consent'};S.errors={};S.screen='auth';render();return}const saved=loadDraft();S.draft=saved?Object.assign(blankDraft(),saved.d,{photo:null,photoBlob:null,idBlob:null,selfieBlob:null,selfie:null,idName:'',rootsBlob:null,rootsName:'',statusBlob:null,statusName:'',addrBlob:null,addrName:'',loc:null,vs:0}):blankDraft();
  S.step=saved?Math.min(saved.step||1,6):1;S.editMode=false;S.errors={};S.screen='signup';render()}
function openEdit(step){const me=S.me;const d=clone(Object.assign({},me,{photo:me.photo}));d.phone=me.phone?digitsOnly(me.phone).replace(new RegExp('^'+digitsOnly(dial(me.country))),''):'';
  d.photoBlob=null;d.idBlob=null;d.selfieBlob=null;d.selfie=null;d.idName='';
  Object.assign(d,{rootsType:'',rootsBlob:null,rootsName:'',statusType:'',statusBlob:null,statusName:'',addrType:'',addrBlob:null,addrName:'',loc:null,vs:0,tzAck:me.country});
  S.draft=d;S.editMode=true;S.step=step||1;S.errors={};view=null;sheet=null;picker=null;S.screen='signup';render();const sc=document.getElementById('su-scroll');if(sc)sc.scrollTop=0}
/* Sign-up progress (28 Oct): the server keeps only the step reached, its time and the phone's time zone, so the team can help people who get stuck. */
let notedStep=0;
function noteStep(n){if(S.editMode||!API.session()||n===notedStep)return;notedStep=n;
  let tz=null;try{tz=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(e){}
  API.rpc('note_signup_step',{n,tz,lang:(navigator.language||'').slice(0,20)}).catch(()=>{notedStep=0})}
function goStep(n){S.step=n;S.errors={};save();render();const sc=document.getElementById('su-scroll');if(sc)sc.scrollTop=0}
function showErrors(){render();const first=document.querySelector('.has-err');if(first){const sc=first.closest('.scroll,.sheet-b');if(sc){const r=first.getBoundingClientRect(),cr=sc.getBoundingClientRect();sc.scrollTop+=r.top-cr.top-cr.height/3}const f=first.querySelector('input,textarea,.pick');if(f)try{f.focus({preventScroll:true})}catch(e){}}}
const fine=()=>window.matchMedia('(pointer:fine)').matches;
async function refreshCards(ids){if(!ids.length)return;const got=await API.rpc('member_cards',{only_ids:ids,lim:400,off:0});(got||[]).map(cardFromServer).forEach(c=>{const i=PROFILES.findIndex(p=>p.id===c.id);if(i>=0){c.fits=PROFILES[i].fits;PROFILES[i]=c}else PROFILES.push(c)});
  await signPaths(PROFILES.filter(p=>ids.includes(p.id)).flatMap(p=>p.photoPaths.slice(0,3)));attachPhotos()}
/* Google Play purchases: the server checks each one with Google before Gold switches on. */
function billingError(c){return c==='billing_3'?'Google Play billing is not available on this phone. Update the Google Play Store app and try again.':c==='billing_2'||c==='billing_12'?'No connection to Google Play. Check your internet connection and try again.':'Google Play could not complete the purchase. Please try again.'}
function verifyPurchase(p){return API.fn('play-verify',{purchaseToken:p.purchaseToken,productId:GOLD_PRODUCT,packageName:window.NM_APP?'com.neuconet.neumarry':'com.neuconet.rootmate'})}
let restoring=false;
async function restorePurchases(loud){const B=Bill();if(!B||!S.me||restoring)return;restoring=true;
  try{const r=await B.restore();const list=((r&&r.purchases)||[]).filter(p=>(p.products||[]).includes(GOLD_PRODUCT)&&p.state===1);
    if(!list.length){if(loud)toast('No Gold purchase found on this Google account.','info');return}
    const todo=loud?list:list.filter(p=>!p.acknowledged||S.me.plan==='free');let got=false,err=null;
    for(const p of todo){try{const v=await verifyPurchase(p);if(v&&v.entitled)got=true}catch(e){err=e;console.warn('[billing] verify',e&&e.code)}}
    if(!todo.length)return;
    const was=S.me.plan;await loadMe();
    if(S.me.plan!==was){await loadCards();render();if(S.me.plan!=='free')toast('Your Gold is active.','crown')}
    else if(loud){if(err&&!got)fail(err);else toast('Your Gold is active.','crown')}
  }catch(e){console.warn('[billing] restore',e&&(e.code||e.message));if(loud)toast(billingError(String((e&&e.code)||'')),'info')}
  finally{restoring=false}}
async function afterLogin(){
  loadLocal();S.bootError='';
  /* Instant open: show the last data kept on this phone at once, then refresh it. */
  const warm=S.screen!=='app'&&cacheLoad();
  if(warm){S.screen='app';if(!['matches','events','connections','me'].includes(S.tab))S.tab='matches';S.loaded=true;render();console.info('[boot] warm start')}
  try{
    /* Faster start (29 Oct): blocks and events do not need my profile, so load them while it loads. */
    const pre=Promise.all([loadBlocks().catch(()=>{}),loadEvents().catch(()=>{})]);
    const me=await loadMe();
    if(!me){cacheClear();startSignup();return}
    if(me.banned){cacheClear();await API.signOut();S=fresh();S.screen='welcome';render();toast('This account has been suspended. Write to us if you think this is a mistake.','shield');return}
    S.screen='app';if(!['matches','events','connections','me'].includes(S.tab))S.tab='matches';render();
    await Promise.all([loadCards(),loadMessages(),pre]);ensureMatchChats();S.loaded=true;render();cacheSave();loadInvite();restorePurchases(false);
    API.rpc('touch_seen').catch(()=>{});
    try{const ap=(typeof naOn==='function'&&naOn())?'neuamigo':(window.NM_APP?'neumarry':'');if(ap)API.rpc('touch_app',{a:ap}).catch(()=>{})}catch(e){}  /* which app(s) a member uses (split 9 Nov 2026) */
  }catch(e){
    if(e.code==='signed_out'){cacheClear();S=fresh();S.screen='welcome';render();return}
    if(warm&&S.screen==='app'){toast(e.code==='network'?'No internet connection. Showing what was saved on this phone.':'NeuMarry could not refresh. Pull down or try again soon.','info');return}
    S.screen='boot';S.bootError=e.code==='network'?'No internet connection. Check your connection and try again.':'NeuMarry could not load. Please try again.';render();
  }
}
async function signedOut(msg){cacheClear();view=null;sheet=null;picker=null;celebrate=null;PROFILES=[];lastMsg=0;Object.keys(URLS).forEach(k=>delete URLS[k]);S=fresh();S.screen='welcome';render();if(msg)toast(msg,'info')}
API.onSignedOut=()=>signedOut('Please log in again.');

/* ---------- Actions ---------- */
const A={
  retryBoot(){boot()},
  lang(){sheet={type:'lang'};render()},
  setLang(el){const l=el.dataset.k;sheet=null;render();RM_I18N.set(l);render()},
  start(){S.auth={mode:'signup'};S.errors={};S.screen='auth';sheet=null;render()},
  login(){S.auth={mode:'login'};S.errors={};S.screen='auth';sheet=null;render()},
  authMode(el){S.auth={mode:el.dataset.k};S.errors={};render()},
  authBack(){if(S.auth&&S.auth.method){S.auth.method=null;S.errors={};render();return}if(S.auth&&S.auth.mode==='reset'){S.auth=null;afterLogin();return}if(S.auth&&S.auth.mode==='consent'){sheet={type:'logout'};render();return}S.auth=null;S.errors={};S.screen='welcome';render()},
  authGo(el){const a=S.auth;if(a.mode==='signup'&&!(a.c18&&a.terms)){S.errors={consent:'Tick both boxes to continue. The marketing box is optional.'};render();const c=document.getElementById('consent');if(c)c.scrollIntoView({block:'center'});return}
    S.errors={};const k=el.dataset.k;if(a.mode==='signup')saveConsent(a);
    if(k==='google'){googleSignIn();return}
    a.method=k;render();const f=document.getElementById('au-email');if(f&&fine())f.focus({preventScroll:true})},
  consentGo(){const a=S.auth;if(!(a.c18&&a.terms)){S.errors={consent:'Tick both boxes to continue. The marketing box is optional.'};render();return}saveConsent(a);S.auth=null;S.errors={};startSignup()},
  pwShow(){S.auth.show=!S.auth.show;render()},
  async forgotPw(){const a=S.auth;const em=(a.email||'').trim().toLowerCase();if(!EMAILRX.test(em)){S.errors={email:'Enter your email first'};render();return}S.errors={};
    busy='auth';render();try{await API.recover(em);S.auth={mode:'sent',sentText:`If ${em} has a NeuMarry account, we have sent a link to choose a new password. Open it on this phone.`}}catch(e){fail(e)}busy='';render()},
  async authEmail(){const a=S.auth,su=a.mode==='signup',e={};const em=(a.email||'').trim().toLowerCase();
    if(!EMAILRX.test(em))e.email='Enter a valid email, like name@example.com';
    if(su){if(pwChecks(a.pw||'',a).some(x=>!x[1]))e.pw='Your password needs to meet every rule above';else if((a.pw2||'')!==(a.pw||''))e.pw2='The passwords do not match'}
    else if(!(a.pw||''))e.pw='Enter your password';
    S.errors=e;if(Object.keys(e).length){render();return}
    busy='auth';render();
    try{
      if(su){const r=await API.signUp(em,a.pw);if(!r.session){busy='';S.auth={mode:'sent',sentText:`We sent a link to ${em}. Open it on this phone to confirm your email, then log in.`};render();return}}
      else await API.signIn(em,a.pw);
      busy='';S.auth=null;await afterLogin();if(su)toast('Account created. Now your profile.','check');
    }catch(err){busy='';if(err.code==='invalid_credentials')S.errors={pw:err.message};else if(err.code==='user_already_exists')S.errors={email:err.message};else fail(err);render()}},
  async authNewPw(){const a=S.auth,e={};if(pwChecks(a.pw||'',{email:API.email()}).some(x=>!x[1]))e.pw='Your password needs to meet every rule above';else if((a.pw2||'')!==(a.pw||''))e.pw2='The passwords do not match';
    S.errors=e;if(Object.keys(e).length){render();return}busy='auth';render();
    try{await API.updatePassword(a.pw);busy='';S.auth=null;toast('Password changed.','check');await afterLogin()}catch(err){busy='';fail(err);render()}},
  legal(el){sheet={type:'legal',k:el.dataset.k};render()},
  helpOpen(){sheet={type:'help'};render()},
  celeGo(){const st=S.cele;S.cele=null;goStep(st+1)},
  suCont(){const n=S.suInter==='reward'?5:2;S.suInter=null;goStep(n)},
  chipSet(el){applyChange('draft',el.dataset.k,el.dataset.v);render()},
  traitTap(el){const d=S.draft,k=el.dataset.k;let t=(d.traits||[]).slice();const i=t.indexOf(k);if(i>=0)t.splice(i,1);else{if(t.length>=3)t.shift();t.push(k)}d.traits=t;if(!d.aboutEdited)d.about=autoAbout(d);delete S.errors.about;render()},
  qAns(el){const d=S.draft;d.ans[+el.dataset.i]=+el.dataset.j;delete S.errors['ans.'+el.dataset.i];save();render()},
  qBack(){const d=S.draft;const qi=d.ans.findIndex(x=>x===null||x===undefined);if(qi>0){d.ans[qi-1]=null;render()}},
  univSet(el){S.draft.college=el.dataset.v;S.univType=false;render()},
  univType(){S.univType=true;render();const f=document.getElementById('f-college');if(f)f.focus()},
  suBack(){if(S.suInter){S.suInter=null;render();return}if(S.editMode){if(S.step>1)goStep(S.step-1);else A.suCancel();return}if(S.step>1)goStep(S.step-1);else{sheet={type:'logout'};render()}},
  suJump(el){goStep(+el.dataset.n)},
  async suNext(){const e=validateStep(S.step,S.draft);S.errors=e;if(Object.keys(e).length){showErrors();return}
    if(!S.editMode&&(S.step===2||S.step===3||S.step===5)){S.cele=S.step;render();return}
    if(!S.editMode&&(S.step===1||S.step===4)&&!S.draft['seen'+S.step]){S.draft['seen'+S.step]=1;S.suInter=S.step===1?'journey':'reward';save();render();const sc=document.getElementById('su-scroll');if(sc)sc.scrollTop=0;return}
    if(S.step<6){goStep(S.step+1);return}
    if(busy)return;busy='save';S.saveMsg='Saving your profile';render();
    const d=S.draft,uid=API.userId();
    try{
      await API.insert('profiles',Object.assign({id:uid},profileRow(d)),{upsert:true,returning:false});
      await API.insert('preferences',prefsRow(d.prefs||defaultPrefs(d),uid),{upsert:true,returning:false});
    }catch(err){busy='';render();fail(err,'signup');return}
    const errs=await uploadAll(d);
    try{await loadMe()}catch(err){}
    busy='';S.saveMsg='';clearDraft();S.draft=null;S.screen='app';S.tab='matches';S.errors={};render();
    try{await loadAll()}catch(err){}
    render();
    if(errs.length){toast(errs[0],'info')}else toast(S.me&&S.me.idCheck&&S.me.selfieCheck&&S.me.rootsCheck&&S.me.statusCheck&&S.me.addrCheck?'Your profile is saved. Our team checks your photo and documents within 24 hours.':'Your profile is saved. Finish your checks from Me to start sending interests.','heart')},
  async suSave(){if(busy)return;for(let s=1;s<=6;s++){const e=validateStep(s,S.draft);if(Object.keys(e).length){S.errors=e;S.step=s;showErrors();toast('Fix the highlighted fields first.','info');return}}
    busy='save';render();const d=S.draft;
    try{const row=profileRow(d);delete row.terms_version;delete row.terms_at;delete row.marketing_ok;
      await API.update('profiles',{id:'eq.'+S.me.id},row);
      await API.insert('preferences',prefsRow(d.prefs,S.me.id),{upsert:true,returning:false});
    }catch(err){busy='';render();fail(err,'profile');return}
    const errs=await uploadAll(d);
    try{await loadMe();await loadCards()}catch(err){}
    busy='';S.draft=null;S.editMode=false;S.screen='app';S.tab='me';S.errors={};render();toast(errs.length?errs[0]:'Profile saved.',errs.length?'info':'check')},
  suCancel(){S.draft=null;S.editMode=false;S.errors={};S.screen='app';render()},
  pick(el){picker={k:el.dataset.k,t:el.dataset.t,q:''};render();const q=document.getElementById('pick-q');if(q&&fine())q.focus({preventScroll:true});
    const on=document.querySelector('#pick-list .prow.on');if(on){const l=document.getElementById('pick-list');l.scrollTop=Math.max(0,on.offsetTop-l.clientHeight/2)}},
  pickClose(){picker=null;render()},
  pickSet(el){if(!picker)return;const def=pickerDef(picker.k,picker.t);let v=el.dataset.v;
    if(def.multi){const o=picker.t==='me'?S.me:S.draft;const a=(getPath(o,picker.k)||[]).slice();const i=a.indexOf(v);if(i>=0)a.splice(i,1);else a.push(v);applyChange(picker.t,picker.k,a);const l=document.getElementById('pick-list');const st=l?l.scrollTop:0;render();const l2=document.getElementById('pick-list');if(l2)l2.scrollTop=st;return}if(def.num)v=+v;applyChange(picker.t,picker.k,v);const k=picker.k;picker=null;render();
    const b=document.getElementById('pk-'+k.replace(/\./g,'-'));if(b&&fine())b.focus({preventScroll:true})},
  async admOpenCity(el){const c=el.dataset.c,co=el.dataset.co;busy='oc'+c;render();try{await API.rpc('admin_open_city',{c,co});toast('Draft Family Mixer made in '+c,'check');loadAdmin()}catch(e){toast('Could not make it. Try again.')}busy='';render()},
  async admSetOnline(){const co=(document.getElementById('om-co')||{}).value||'',st=(document.getElementById('om-st')||{}).value||'',url=((document.getElementById('om-url')||{}).value||'').trim();
    if(!co.trim()||!st||!/^https:\/\/meet\.google\.com\/[a-z0-9-]+$/i.test(url)){toast('Country, date and a Google Meet link are needed');return}
    busy='om';render();try{await API.rpc('admin_set_online',{co:co.trim(),st:new Date(st).toISOString(),url});toast('Saved. The list gets an email','check');loadAdmin()}catch(e){toast(String(e&&e.message||'').includes('too_soon')?'Pick a date at least 1 day ahead':'Could not save. Try again.')}busy='';render()},
  async cityVote(el){const k=el.dataset.k,on=el.dataset.on==='1';try{await API.rpc('vote_city',{k,on_:on});S.board=await API.rpc('city_board');render();toast(on?(k==='online'?'You are on the online mixer list':'Thank you. We count you in for your city'):'Removed','check')}catch(e){toast('Could not save. Try again.')}},
  tab(el){S.tab=el.dataset.k;view=null;sheet=null;picker=null;save();render();const m=document.getElementById('main');if(m)m.scrollTop=0;if(S.tab==='me')loadInvite();if(S.tab==='events')loadEvents().then(render).catch(()=>{})},
  seg(el){S.seg=el.dataset.k;save();render()},
  goLikes(){S.tab='connections';S.seg='received';save();render();const m=document.getElementById('main');if(m)m.scrollTop=0},
  sort(el){S.sort=el.dataset.k;save();render()},
  reveal(el){const id=el.dataset.id;if(!isGold()){sheet={type:'upgrade',reason:'picks',pick:'m3'};render();return}if(!S.picks.revealed.includes(id))S.picks.revealed.push(id);justRevealed=id;save();render()},
  filters(){sheet={type:'filters'};render()},
  resetFilters(){S.me.prefs=defaultPrefs(S.me);queuePrefsSave();render();toast('Filters reset to your defaults.','refresh')},
  widen(el){const k=el.dataset.k,pr=S.me.prefs;if(k==='radius')pr.radius=0;if(k==='anywhere'){pr.liveCountry='Any';pr.radius=0}if(k==='community'){pr.community='Any';pr.alsoComm=[]}if(k==='os')pr.os='Any';queuePrefsSave();render()},
  togglePassed(){S.showPassed=!S.showPassed;save();render()},
  unpause(){S.me.privacy.vis='verified';savePrivacy();render();toast('Your profile is visible again.','eye')},
  open(el){const id=el.dataset.id;const p=byId(id);if(!p)return;if(locked(p)&&!(S.interests[id]==='received'&&p.gold)){sheet={type:'upgrade',reason:'profile',id,pick:'m3'};render();return}view={type:'profile',id,prev:view&&(view.type==='chat'||view.type==='event')?view:null};render();const v=document.getElementById('view-scroll');if(v)v.scrollTop=0},
  previewMe(){view={type:'me'};render()},
  closeView(){view=view&&view.prev?view.prev:null;render()},
  pass(el){const id=el.dataset.id;if(!S.passed.includes(id))S.passed.push(id);const p=byId(id);save();if(view&&view.type==='profile')view=null;render();toast(`Passed on ${p.first||'this profile'}. You can undo from the bottom of Matches.`,'x')},
  unpass(el){S.passed=S.passed.filter(x=>x!==el.dataset.id);save();render()},
  shortlist(el){const id=el.dataset.id,p=byId(id);if(S.shortlist.includes(id)){S.shortlist=S.shortlist.filter(x=>x!==id);toast(`Removed ${p.first||'profile'} from saved.`,'star')}else{S.shortlist.push(id);toast(`${p.first||'Profile'} saved for later.`,'star')}save();render()},
  async interest(el){const id=el.dataset.id;if(S.interests[id]==='received'){A.accept(el);return}
    if(needVerified())return;if(!isGold()){sheet={type:'upgrade',reason:'interests',pick:'m3'};render();return}
    const r=el.getBoundingClientRect();const p=byId(id);S.interests[id]='sent';S.passed=S.passed.filter(x=>x!==id);save();render();burstAt({getBoundingClientRect:()=>r});
    try{await API.insert('interests',{from_user:S.me.id,to_user:id},{returning:false});toast(`Interest sent to ${p.first}. You’ll hear back here.`,'heart')}
    catch(e){delete S.interests[id];render();fail(e)}},
  async accept(el){if(needVerified())return;const id=el.dataset.id;const p=byId(id);if(!isGold()&&!(p&&p.gold)){sheet={type:'upgrade',reason:'likes',id,pick:'m3'};render();return}
    try{await API.update('interests',{from_user:'eq.'+id,to_user:'eq.'+S.me.id},{status:'accepted'});S.interests[id]='mutual';await refreshCards([id]);ensureMatchChats();celebrate={id};render();rateHint()}
    catch(e){fail(e)}},
  async decline(el){const id=el.dataset.id;const p=byId(id);try{await API.update('interests',{from_user:'eq.'+id,to_user:'eq.'+S.me.id},{status:'declined'});S.interests[id]='declined';if(view&&view.id===id)view=null;render();toast(`Declined. ${p&&p.first?p.first:'They'} will not be told.`,'x')}catch(e){fail(e)}},
  openchat(el){const id=el.dataset.id;if(S.interests[id]!=='mutual')return;ensureMatchChats();S.unread[id]=0;view={type:'chat',id};render();API.rpc('mark_read',{other:id}).catch(()=>{});const ci=document.getElementById('chat-in');if(ci&&fine())ci.focus({preventScroll:true})},
  async send(el){const id=el.dataset.id;if(!canChat(id)){sheet={type:'upgrade',reason:'chat',id,pick:'m3'};render();return}
    if(needVerified())return;const ci=document.getElementById('chat-in'),x=(ci&&ci.value||'').trim();if(!x)return;
    const tmp={f:'me',x,ts:Date.now(),pending:true};S.chats[id]=(S.chats[id]||[]).concat(tmp);ci.value='';render();
    try{const rows=await API.insert('messages',{sender:S.me.id,recipient:id,body:x});const m=rows&&rows[0];tmp.pending=false;if(m){tmp.id=m.id;tmp.ts=Date.parse(m.created_at);tmp.flag=m.flagged;lastMsg=Math.max(lastMsg,m.id)}render()}
    catch(e){S.chats[id]=S.chats[id].filter(m=>m!==tmp);render();const c2=document.getElementById('chat-in');if(c2&&!c2.value)c2.value=x;fail(e,'chat')}},
  celChat(el){const id=el.dataset.id;celebrate=null;S.tab='connections';S.seg='chats';save();A.openchat({dataset:{id}})},
  celClose(){celebrate=null;render()},
  openEvent(el){view={type:'event',id:el.dataset.id};render();const v=document.getElementById('view-scroll');if(v)v.scrollTop=0},
  book(el){if(needVerified(true))return;const id=el.dataset.id,e=evById(id);const dm={Vegetarian:'veg',Vegan:'veg',Eggetarian:'veg','Jain vegetarian':'jain','Non-vegetarian':'nonveg'}[S.me.diet]||'';
    sheet={type:'book',id,parents:0,meal:e.meals.includes(dm)?dm:'',p:[{name:'',rel:'Mother',meal:''},{name:'',rel:'Father',meal:''}]};S.errors={};render()},
  bookPlus(){if(sheet.parents<2)sheet.parents++;render()},
  bookMinus(){if(sheet.parents>0){sheet.parents--;delete S.errors['p'+sheet.parents+'name'];delete S.errors['p'+sheet.parents+'meal']}render()},
  async reserve(){const e=evById(sheet.id),n=sheet.parents;const err={};if(!sheet.meal)err.meal='Choose your dish';
    for(let i=0;i<n;i++){if((sheet.p[i].name||'').trim().length<2)err['p'+i+'name']='Add a name for the guest list';if(!sheet.p[i].meal)err['p'+i+'meal']='Choose a dish'}
    if(Object.keys(err).length){S.errors=err;render();const f=document.querySelector('.sheet .has-err');if(f)f.scrollIntoView({block:'center'});return}
    busy='reserve';render();
    try{const r=await API.rpc('reserve_event',{eid:e.id,meal:sheet.meal,parents:sheet.p.slice(0,n).map(x=>({name:x.name.trim(),relation:x.rel,meal:x.meal}))});
      busy='';S.errors={};sheet=null;await loadEvents();
      if(r&&r.status==='hold_due'){PAYQ=null;view={type:'event',id:e.id};render();toast(r.waitlisted?`One more step: pay the ${money(e.hold,e.cur)} hold to keep your place on the waiting list.`:`One more step: pay the ${money(e.hold,e.cur)} seat hold to keep your seat.`,'ticket');return}
      render();
      toast(r&&r.waitlisted?`You’re on the waiting list. If a seat frees up, we email you.`:r&&r.confirmed?`The ${e.title} is confirmed! Your seat is held; we will message you when payment opens.`:`Seat reserved free. We’ll ask for payment once the event is confirmed.`,'check')}
    catch(x){busy='';render();fail(x)}},
  cancelRes(el){sheet={type:'cancelRes',id:el.dataset.id};render()},
  async cancelDo(el){busy='cancelDo';render();try{const hp=(evById(el.dataset.id)||{}).my;await API.rpc('cancel_reservation',{eid:el.dataset.id});busy='';sheet=null;await loadEvents();render();toast(hp&&hp.holdPaid?'Reservation cancelled. Your seat went back to other members.':'Reservation cancelled. Nothing was charged.','check')}catch(e){busy='';render();fail(e)}},
  engaged(el){if(S.storyFor[el.dataset.id]){sheet=null;render();return}sheet={type:'engaged',id:el.dataset.id,pause:true,pub:false,text:''};render()},
  async storySend(el){const id=el.dataset.id;busy='storySend';render();
    try{await API.insert('stories',{user_id:S.me.id,partner:id,body:(sheet.text||'').trim()||null,may_publish:!!sheet.pub},{returning:false});
      if(sheet.pause!==false){S.me.privacy.vis='hidden';await savePrivacy()}S.storyFor[id]=true;save();busy='';sheet=null;render();toast('Congratulations to you both!','heart')}
    catch(e){busy='';render();fail(e,'story')}},
  hostAsk(){sheet={type:'host',city:myPlace(),lang:'',comm:'',exp:'Community events',rest:'',ok:false};S.errors={};render()},
  async hostSend(){const e={};if((sheet.city||'').trim().length<2)e.hcity='Add your city';if((sheet.lang||'').trim().length<2)e.hlang='Add at least one language';if(!sheet.ok)e.hok='Please agree to continue';S.errors=e;if(Object.keys(e).length){render();return}
    busy='hostSend';render();
    try{await API.insert('host_applications',{user_id:S.me.id,name:S.me.name,city:sheet.city.trim(),languages:sheet.lang.trim(),communities:(sheet.comm||'').trim()||null,experience:sheet.exp||null,restaurants:(sheet.rest||'').trim()||null,consent:true},{returning:false});
      busy='';S.hostSent=true;sheet=null;S.errors={};render();toast('Application sent. We reply within 3 working days.','check')}
    catch(x){busy='';render();fail(x)}},
  restaurantAsk(){sheet={type:'restaurant',org:'',city:S.me?myPlace():'',name:S.me?S.me.name:'',contact:'',seats:'30 to 50',food:'Vegetarian and non-vegetarian'};S.errors={};render()},
  async restaurantSend(){const e={};if((sheet.org||'').trim().length<2)e.rorg='Add the restaurant name';if((sheet.city||'').trim().length<2)e.rcity='Add a city';if((sheet.name||'').trim().length<2)e.rname='Add your name';if((sheet.contact||'').trim().length<5)e.rcontact='Add a phone number or email';S.errors=e;if(Object.keys(e).length){render();return}
    busy='restaurantSend';render();
    try{await API.insert('work_with_us',{role:'restaurant',name:sheet.name.trim(),org:sheet.org.trim(),city:sheet.city.trim(),contact:sheet.contact.trim(),note:`Seats: ${sheet.seats} · Food: ${sheet.food} · From the app`,consent_at:new Date().toISOString()},{returning:false});
      busy='';S.restSent=true;sheet=null;S.errors={};render();toast('Thank you. Our team will call you within 3 working days.','check')}
    catch(x){busy='';render();fail(x)}},
  async admContacted(el){try{await API.rpc('admin_mark_application',{k:el.dataset.k,aid:el.dataset.id});const x=(S.admin.apps||[]).find(a=>a.id===el.dataset.id);if(x)x.status='contacted';render()}catch(e){fail(e)}},
  partnerAsk(){sheet={type:'partner',name:'',city:'',contact:''};S.errors={};render()},
  async partnerSend(){const e={};if((sheet.name||'').trim().length<2)e.pname='Add the bureau name';if((sheet.city||'').trim().length<2)e.pcity='Add a city';if((sheet.contact||'').trim().length<5)e.pcontact='Add a phone number or email';S.errors=e;if(Object.keys(e).length){render();return}
    busy='partnerSend';render();
    try{await API.insert('work_with_us',{role:'bureau',name:S.me.name,org:sheet.name.trim(),city:sheet.city.trim(),contact:sheet.contact.trim(),note:'From the app',consent_at:new Date().toISOString()},{returning:false});
      busy='';S.partnerSent=true;sheet=null;S.errors={};render();toast('Thank you. Our team will call you within 3 working days.','check')}
    catch(x){busy='';render();fail(x)}},
  shareInvite(){const code=S.invite;if(!code)return;const text=`I’m on NeuMarry, matrimony for people living away from home. Join with my code ${code} for 10% off your first Gold. ${CFG.site}`;
    if(navigator.share){navigator.share({text}).catch(()=>{})}else A.copyCode({dataset:{k:text}})},
  copyCode(el){const c=el.dataset.k;const done=()=>toast('Copied.','copy');try{navigator.clipboard.writeText(c).then(done,()=>toast(`Code: ${c} (long-press to copy)`,'copy'))}catch(e){toast(`Code: ${c} (long-press to copy)`,'copy')}},
  deleteAsk(){sheet={type:'deleteAcct'};render()},
  async deleteDo(){busy='deleteDo';render();
    try{const me=S.me;for(const p of (me.photos||[]).concat(me.rejectedPhoto?[me.rejectedPhoto]:[])){try{await API.removeFile('photos',p.path)}catch(e){}}
      for(const v of (me.checks||[])){if(v.path)try{await API.removeFile('verification',v.path)}catch(e){}}
      await API.rpc('delete_my_account');const uid=API.userId();API.forget();try{localStorage.removeItem(LKEY+'.'+uid);localStorage.removeItem('rm.draft.'+uid)}catch(e){}
      busy='';signedOut();toast('Your account and data have been deleted.','check')}
    catch(e){busy='';render();fail(e)}},
  logout(){sheet={type:'logout'};render()},
  async logoutDo(){sheet=null;await API.signOut();signedOut()},
  more(el){sheet={type:'more',id:el.dataset.id,chat:!!el.dataset.chat};render()},
  report(el){sheet={type:'report',id:el.dataset.id,reason:null,note:''};S.errors={};render()},
  async submitReport(el){if(sheet.reason===null||sheet.reason===undefined){S.errors={reason:'Choose a reason'};render();return}const id=el.dataset.id;
    const reasons=['Fake profile or photos','Asked for money or gifts','Asked for visa or immigration help','Rude or inappropriate messages','Already married or in a relationship','Under 18 or a child safety concern','Something else'];
    busy='submitReport';render();
    try{await API.insert('reports',{reporter:S.me.id,reported:id,reason:reasons[sheet.reason],note:(sheet.note||'').trim()||null},{returning:false});
      try{await API.insert('blocks',{blocker:S.me.id,blocked:id},{returning:false})}catch(e){}
      S.reported.push(id);S.blocked.push(id);save();busy='';S.errors={};sheet=null;view=null;render();toast('Report sent. Our safety team reviews every report within 24 hours. You will not see this person again.','shield')}
    catch(e){busy='';render();fail(e)}},
  async block(el){const id=el.dataset.id;const p=byId(id);try{await API.insert('blocks',{blocker:S.me.id,blocked:id},{returning:false});S.blocked.push(id);sheet=null;view=null;render();toast(`${p&&p.first?p.first:'They'} ${p&&p.first?'is':'are'} blocked.`,'x')}catch(e){fail(e)}},
  closeSheet(){sheet=null;S.errors={};render()},
  hostOpen(el){HOST={eid:el.dataset.id,stream:null,loop:null,busy:false,res:null,guests:null,err:''};view={type:'host',id:el.dataset.id,prev:view};render();hostLoadGuests()},
  hostCam(){hostCamStart()},
  hostCode(){const c=((document.getElementById('host-code')||{}).value||'').replace(/\D/g,'');if(c.length!==6){toast('Type the 6-digit door code.','info');return}hostLookup(c)},
  hostNext(){HOST.res=null;render()},
  hostRefresh(){hostLoadGuests()},
  async hostCheckIn(){const r=HOST.res;if(!r||!r.rid||HOST.busy)return;HOST.busy=true;render();
    try{const x=await API.rpc('checkin_do',{rid:r.rid});r.checked_in_at=x&&x.checked_in_at;r.done=true;toast(`${r.name.split(' ')[0]} is checked in.`,'check')}catch(e){toast((e&&e.message)||'Could not check in. Try again.','info')}
    HOST.busy=false;await hostLoadGuests();render()},
  async payEvent(el){const eid=el.dataset.id;if(PAYBUSY)return;PAYBUSY=true;render();
    try{const r=await API.fn('event-pay',{action:'start',eid,web:!!CFG.web});
      if(r&&r.status==='paid'){PAYBUSY=false;await payCheck(eid,true);return}
      if(r&&r.url){payPending(eid);if(CFG.web){location.href=r.url;return}window.open(r.url,'_blank')}
    }catch(e){toast((e&&e.message)||'PayPal is not answering. Try again in a minute.','info')}
    PAYBUSY=false;render()},
  payCheck(el){payCheck(el.dataset.id,false)},
  goPhoto(){sheet=null;if(S.screen==='signup')return;openEdit(1)},
  goVerify(el){sheet=null;if(S.screen==='signup')return;openEdit(5);const n=el&&el.dataset&&+el.dataset.n;if(n&&S.draft){S.draft.vs=n;render()}},
  vGo(el){const d=S.draft;if(!d)return;d.vs=+el.dataset.n||0;save();render();const sc=document.getElementById('su-scroll');if(sc)sc.scrollTop=0},
  vBack(){const d=S.draft;if(!d)return;d.vs=d.vs===1?0:d.vs-1;render();const sc=document.getElementById('su-scroll');if(sc)sc.scrollTop=0},
  vPick(el){const d=S.draft;if(!d)return;const k=el.dataset.k;if(d[k]!==el.dataset.v){d[k]=el.dataset.v;if(k==='rootsType'){d.rootsBlob=null;d.rootsName=''}}save();render()},
  tzSwitch(el){const d=S.draft;if(!d)return;d.country=el.dataset.v;d.state='';d.city='';d.res='';d.reloc='';d.tzAck='';save();render()},
  tzKeep(){const d=S.draft;if(!d)return;d.tzAck=d.country;save();render()},
  vLocate(){const d=S.draft;if(!d||busy)return;
    if(!navigator.geolocation){toast('Location is not available here. Skip this step; your documents are enough.','info');return}
    busy='loc';render();
    navigator.geolocation.getCurrentPosition(async pos=>{const lat=pos.coords.latitude,lng=pos.coords.longitude;
      if(!S.editMode){busy='';d.loc={lat,lng};d.vs=0;render();toast('Location ready. It is checked when you save.','check');return}
      try{const r=await API.rpc('check_location',{lat,lng});busy='';
        if(r&&r.ok===true){await loadMe();d.vs=0;render();toast('Location confirmed.','check')}
        else if(r&&r.ok===false){render();toast(`You seem to be about ${r.km} km from ${S.me.city}. Your documents are enough; try again when you are home.`,'info')}
        else{render();toast('We could not check this city. Your documents are enough.','info')}}
      catch(e){busy='';render();fail(e)}},
    err=>{busy='';render();toast(err&&err.code===1?'Location is off for NeuMarry. You can skip this step; your documents are enough.':'Your location could not be found. Try again outside, or skip this step.','info')},
    {enableHighAccuracy:false,timeout:20000,maximumAge:600000})},
  edit(){openEdit(1)},
  evFilter(el){S.evFilter=el.dataset.k;save();render()},
  upgrade(el){sheet={type:'upgrade',reason:el&&el.dataset?el.dataset.r||'':'',id:el&&el.dataset?el.dataset.id||'':'',pick:'m3'};render()},
  pickPlan(el){sheet.pick=el.dataset.k;render()},
  async betaGold(){busy='betaGold';render();try{const r=await API.rpc('beta_gold');if(!r){busy='';render();toast('The free test period has ended. Gold purchases open in the app soon.','info');return}
    await loadMe();await loadCards();busy='';const back=sheet&&sheet.reason;sheet=null;render();toast(`Gold is on for free during the test.${back==='chat'?' Your chat is open.':''}`,'crown')}catch(e){busy='';render();fail(e)}},
  async endBeta(){try{await API.rpc('end_beta_gold');await loadMe();await loadCards();render();toast('You are on Free now. You can switch Gold on again any time during the test.','info')}catch(e){fail(e)}},
  buySoon(){toast(isNative?'Gold purchases open in the app very soon.':'Gold can be bought in the NeuMarry app for Android. It opens on Google Play very soon.','crown')},
  async buyGold(){const B=Bill();const k=(sheet&&sheet.pick)||'m3';const o=store&&store[k];if(!B||!o||!S.me){A.buySoon();return}
    busy='buyGold';render();let p=null;
    try{const r=await B.purchase({productId:GOLD_PRODUCT,offerToken:o.offerToken,accountId:S.me.id});p=((r&&r.purchases)||[]).find(x=>(x.products||[]).includes(GOLD_PRODUCT))}
    catch(e){busy='';render();const c=String((e&&e.code)||'');if(c==='cancelled')return;if(c==='already_owned'){restorePurchases(true);return}toast(billingError(c),'info');return}
    if(!p){busy='';render();return}
    if(p.state===2){busy='';sheet=null;render();toast('Your payment is pending. Gold switches on as soon as Google Play confirms it.','info');return}
    const back=sheet&&sheet.reason;
    try{const v=await verifyPurchase(p);await loadMe();await loadCards();busy='';sheet=null;render();
      if(v&&v.entitled)toast(back==='chat'?'Welcome to Gold. Your chat is open.':'Welcome to Gold.','crown');else toast('Google Play has not confirmed this payment yet. Gold switches on as soon as it does.','info')}
    catch(e){busy='';sheet=null;render();if(e&&e.code==='purchase_other_account')fail(e);else toast('Payment received. Gold will switch on the next time you open NeuMarry. If it does not, contact us.','info')}},
  async admPayTest(el){if(el)el.disabled=true;try{const eid=await API.rpc('admin_pay_test');await loadEvents();PAYQ=null;view={type:'event',id:typeof eid==='string'?eid:(eid&&(eid.admin_pay_test||Object.values(eid)[0]))};render();const v=document.getElementById('view-scroll');if(v)v.scrollTop=0}catch(e){if(el)el.disabled=false;toast('Could not open the test seat. Try again.','info')}},
  starter(el){const i=document.getElementById('chat-in');if(i){i.value=el.dataset.t;i.focus()}},
  safeMeet(el){const p=byId(el.dataset.id);sheet=null;render();const t=`I am meeting ${p.first||'someone'} from NeuMarry (verified: ID, selfie, roots and city checked). Place: ____ . Time: ____ . I will message you when I am back home.`;
    window.open('https://wa.me/?text='+encodeURIComponent(t),'_blank','noopener')},
  async shareBio(el){if(el)el.disabled=true;let r;try{r=await API.rpc('make_bio_link')}catch(e){if(el)el.disabled=false;toast('Could not make the link. Try again.','info');return}
    const tk=r&&(r.token||(r.make_bio_link&&r.make_bio_link.token));S.bioUntil=r&&(r.expires_at||(r.make_bio_link&&r.make_bio_link.expires_at));render();
    const url='https://neumarry.com/bio.html?t='+encodeURIComponent(tk),t=`My verified NeuMarry profile for the family (the link works for 7 days): ${url}`;
    if(navigator.share){navigator.share({title:'My NeuMarry biodata',text:t}).catch(()=>{})}else window.open('https://wa.me/?text='+encodeURIComponent(t),'_blank','noopener')},
  async stopBio(){try{await API.rpc('stop_bio_links')}catch(e){}S.bioUntil=null;render();toast('Your biodata link is stopped.','check')},
  showAllM(){S.showAllM=true;render()},
  /* Team: move an event to a new date (same time of day) and queue the emails. */
  async admMoveEvent(el){const id=el.dataset.id,inp=document.getElementById('mv-'+id);if(!inp||!inp.value){toast('Choose the new date first.','info');return}
  const old=new Date(el.dataset.t),from=dateInputVal(old,inp.dataset.tz),days=Math.round((Date.parse(inp.value)-Date.parse(from))/864e5);const nw=new Date(old.getTime()+days*864e5);
  busy='mv'+id;render();try{const r=await API.rpc('admin_move_event',{eid:id,new_start:nw.toISOString()});busy='';toast(`Date moved. ${r.emails} ${r.emails===1?'email goes':'emails go'} out within 3 hours.`,'check');loadAdmin();loadEvents().then(render)}
  catch(e){busy='';render();fail(e)}},
  openAdmin(){view={type:'admin'};S.admin={loading:true,queue:[],reports:[],urls:{}};render();loadAdmin()},
  async admApprove(el){await adminReview(el,true)},
  async admReject(el){const sel=document.querySelector(`[data-adm-reason="${el.dataset.id}"]`);const reason=sel&&sel.value;if(!reason){toast('Choose a reason first, so the member knows what to fix.','info');if(sel)sel.focus();return}await adminReview(el,false,reason)},
  async admBan(el){try{await API.rpc('admin_handle_report',{rid:el.dataset.id,ban:true});S.admin.reports=S.admin.reports.filter(r=>r.id!==el.dataset.id);render();toast('Member banned.','shield')}catch(e){fail(e)}},
  async admBanRude(el){const id=el.dataset.id;try{await API.rpc('admin_ban_member',{uid:id});(S.admin.rude||[]).forEach(x=>{if(x.user_id===id)x.banned=true});render();toast('Member banned.','shield')}catch(e){fail(e)}},
  async admDismiss(el){try{await API.rpc('admin_handle_report',{rid:el.dataset.id,ban:false});S.admin.reports=S.admin.reports.filter(r=>r.id!==el.dataset.id);render();toast('Report dismissed.','check')}catch(e){fail(e)}}
};
async function adminReview(el,ok,reason){const id=el.dataset.id,k=el.dataset.k;
  try{await API.rpc('admin_review',{row_kind:k==='photo'?'photo':'verification',rid:id,approve:ok,reason:reason||null});S.admin.queue=S.admin.queue.filter(x=>x.row_id!==id);if(S.admin.counts)S.admin.counts.pending--;render();toast(ok?'Approved.':'Rejected. The member sees the reason.',ok?'check':'x')}catch(e){fail(e)}}
async function loadAdmin(){
  try{const [q,r,c,ap,ru,su,ev]=await Promise.all([API.rpc('admin_queue'),API.rpc('admin_reports'),API.rpc('admin_counts'),API.rpc('admin_applications').catch(()=>[]),API.rpc('admin_rude').catch(()=>[]),API.rpc('admin_signups',{days:30}).catch(()=>[]),API.rpc('admin_events').catch(()=>[]),API.rpc('admin_cities').catch(()=>[]),API.rpc('admin_online').catch(()=>[])]).then(r=>{CITYADM=[r[7]||[],r[8]||[]];return r});
    const queue=(q||[]).map(x=>Object.assign(x,{bucket:x.kind==='photo'?'photos':'verification'}));
    S.admin={loading:false,queue,reports:r||[],counts:c,apps:ap||[],rude:ru||[],signups:su||[],events:ev||[],cities:CITYADM[0],online:CITYADM[1],urls:{}};render();
    const idq=queue.filter(x=>x.kind==='id').map(x=>x.row_id);if(idq.length)API.select('verifications',{select:'id,auto_check',id:'in.('+idq.join(',')+')'}).then(rs=>{S.admin.auto={};(rs||[]).forEach(v=>{if(v.auto_check)S.admin.auto[v.id]=v.auto_check});render()}).catch(()=>{});
    const ph=[...new Set(queue.filter(x=>x.bucket==='photos').map(x=>x.path).concat(queue.map(x=>x.profile_photo).filter(Boolean)))];
    const vf=queue.filter(x=>x.bucket==='verification').map(x=>x.path);
    const [a,b]=await Promise.all([API.signMany('photos',ph,1800),API.signMany('verification',vf,600)]);
    Object.keys(a).forEach(k=>S.admin.urls['photos:'+k]=a[k]);Object.keys(b).forEach(k=>S.admin.urls['verification:'+k]=b[k]);render()}
  catch(e){S.admin={loading:false,queue:[],reports:[],urls:{}};render();fail(e)}}
async function loadInvite(){if(!S.me||!isGold()||!S.me.v.id||S.invite)return;try{S.invite=await API.rpc('my_invite_code');render()}catch(e){}}
function rateHint(){/* Store review prompt comes with the native review plugin after launch. */}
/* ---------- Sign in with Google ----------
   Android: the phone's own Google account sheet (GoogleAuth plugin), no browser.
   Web: Google's button on neumarry.com. Both give an ID token that Supabase checks.
   The old browser hand-off stays only as a fallback. */
function hex(b){return Array.from(new Uint8Array(b),x=>x.toString(16).padStart(2,'0')).join('')}
async function makeNonce(){const b=new Uint8Array(24);crypto.getRandomValues(b);const raw=hex(b);return {raw,hashed:hex(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(raw)))}}
const gsi={state:'',raw:''};
function gsiApi(){return window.google&&window.google.accounts&&window.google.accounts.id}
function gsiInit(){
  if(!CFG.web)return Promise.resolve();
  if(gsi.state==='loading'||gsi.state==='ready'||gsi.state==='failed')return gsi.p||Promise.resolve();
  gsi.state='loading';gsi.err='';gsi.p=gsiLoad();return gsi.p}
async function gsiLoad(){
  try{
    if(!gsiApi())await new Promise((ok,no)=>{const s=document.createElement('script');s.src='https://accounts.google.com/gsi/client';s.async=true;s.onload=ok;s.onerror=()=>no(new Error('script'));document.head.appendChild(s)});
    if(!gsiApi())throw new Error('no api');
    const n=await makeNonce();gsi.raw=n.raw;
    gsiApi().initialize({client_id:CFG.googleClientId,callback:onGsi,nonce:n.hashed,ux_mode:'popup',auto_select:false,context:'signin'});
    gsi.state='ready';syncGsi();
  }catch(e){gsi.state='failed';gsi.err=(e&&e.message)||'error';console.warn('[gsi]',gsi.err)}}
function gsiAfterRender(){if(gsi.state==='ready')syncGsi();else gsiInit()}
function syncGsi(){
  const slot=document.getElementById('gsi-slot'),own=document.getElementById('g-own');if(!slot||!own)return;
  const a=S.auth||{};const ok=gsi.state==='ready'&&!busy&&(a.mode!=='signup'||(a.c18&&a.terms));
  if(ok&&!slot.dataset.done){const w=Math.round(own.getBoundingClientRect().width)||320;
    gsiApi().renderButton(slot,{type:'standard',theme:'outline',size:'large',shape:'pill',text:a.mode==='signup'?'continue_with':'signin_with',logo_alignment:'left',width:Math.max(200,Math.min(400,w)),locale:RM_I18N.lang==='fr'?'fr_CA':'en'});slot.dataset.done='1'}
  slot.hidden=!ok;own.hidden=ok}
async function onGsi(resp){
  const a=S.auth||{};if(a.mode==='signup'){if(!(a.c18&&a.terms)){S.errors={consent:'Tick both boxes to continue. The marketing box is optional.'};render();return}saveConsent(a)}
  busy='auth';render();
  try{await API.signInWithIdToken(resp&&resp.credential,gsi.raw);busy='';gsi.state='';await afterLogin()}
  catch(e){busy='';gsi.state='';render();fail(e)}}
async function googleSignIn(){
  const G=isNative&&Plug().GoogleAuth;
  if(G){busy='auth';render();
    try{const n=await makeNonce();const r=await G.signIn({serverClientId:CFG.googleClientId,nonce:n.hashed});
      await API.signInWithIdToken(r.idToken,n.raw);busy='';await afterLogin()}
    catch(e){busy='';render();const c=String((e&&e.code)||'');if(c==='cancelled')return;
      console.warn('[google]',c,e&&e.message);
      toast(c==='no_account'?'Add a Google account to this phone first, or use email.':e instanceof API.ApiError?e.message:'Google sign-in could not start. Please try again, or use email.','info')}
    return}
  /* Web: Google's own button does the sign-in. If it is still loading, wait for it and show it. */
  if(CFG.web){
    if(gsi.state!=='ready')await gsiInit();
    if(gsi.state==='ready'){syncGsi();toast('Tap the Google button to continue.','info');return}
    toast(`Google sign-in could not load (${gsi.err||'error'}). Check your connection, or use email.`,'info');gsi.state='';return}
  const url=API.googleUrl();
  if(isNative&&Plug().Browser){try{await Plug().Browser.open({url,presentationStyle:'popover'})}catch(e){fail(e)}return}
  location.href=url;
}
let lastAuthUrl='';
async function handleAuthUrl(url){
  if(url===lastAuthUrl)return false;lastAuthUrl=url;
  try{const s=await API.takeRedirect(url);if(!s)return false;
    if(isNative&&Plug().Browser)try{await Plug().Browser.close()}catch(e){}
    if(s.type==='recovery'){S.auth={mode:'reset'};S.screen='auth';render();return true}
    await afterLogin();return true}
  catch(e){toast(e.message||'Sign-in did not finish. Please try again.','info');return false}}

/* ---------- Input events ---------- */
app.addEventListener('click',e=>{const el=e.target.closest('[data-a]');if(!el||!app.contains(el)||el.disabled)return;const fn=A[el.dataset.a];if(fn){e.preventDefault();fn(el)}});
function onBind(e){
  const el=e.target;
  if(el.id==='pick-q'){if(picker){picker.q=el.value;const l=document.getElementById('pick-list');if(l){l.innerHTML=pickRows();l.scrollTop=0}}return}
  if(el.dataset.auth&&S.auth){const k=el.dataset.auth;S.auth[k]=el.type==='checkbox'?el.checked:el.value;
    if(S.errors[k]||(k!=='mkt'&&S.errors.consent&&el.type==='checkbox')){delete S.errors[k];if(el.type==='checkbox'&&S.auth.c18&&S.auth.terms)delete S.errors.consent;const w=el.closest('.fld,.consent');if(w&&!S.errors.consent){w.classList.remove('has-err');const er=w.querySelector('.err');if(er)er.remove()}}
    if(el.type==='checkbox')syncGsi();
    if(k==='pw'||k==='email'){const r=document.getElementById('pw-rules');if(r)r.innerHTML=pwRulesHTML(S.auth.mode==='reset'?Object.assign({email:API.email()},S.auth):S.auth)}
    return}
  if(el.dataset.sheet&&sheet){const ek=({host:{city:'hcity',lang:'hlang',ok:'hok'},partner:{name:'pname',city:'pcity',contact:'pcontact'}}[sheet.type]||{})[el.dataset.sheet];
    if(ek&&S.errors[ek]){const val=el.type==='checkbox'?el.checked:el.value.trim().length>=2;if(val){delete S.errors[ek];const w=el.closest('.fld,.ck');if(w){w.classList.remove('has-err');const er=w.querySelector('.err')||(w.nextElementSibling&&w.nextElementSibling.classList.contains('err')?w.nextElementSibling:null);if(er)er.remove()}}}}
  if(el.dataset.sheet&&sheet&&el.type==='checkbox'){sheet[el.dataset.sheet]=el.checked;return}
  if(el.dataset.sheet&&sheet){const k=el.dataset.sheet;const m=k.match(/^p(\d)(name|rel|meal)$/);
    if(m){sheet.p[+m[1]][m[2]]=el.value;if(S.errors[k]&&(m[2]!=='name'||el.value.trim().length>=2)){delete S.errors[k];const w=el.closest('.fld');if(w){w.classList.remove('has-err');const er=w.querySelector('.err');if(er)er.remove()}}return}
    sheet[k]=k==='reason'?+el.value:el.value;if((k==='reason'||k==='meal')&&S.errors[k]){delete S.errors[k];render()}return}
  const k=el.dataset.bind;if(!k)return;
  const tgt=el.dataset.target;
  if(tgt==='me'&&e.type==='input')return;
  let v=el.type==='checkbox'?el.checked:el.value;
  if(el.hasAttribute('data-num'))v=+v;
  if(tgt==='me'){
    const me=S.me;
    if(k==='paused'){me.privacy.vis=v?'hidden':'verified';savePrivacy();render();toast(v?'Your profile is paused. Nobody new can find you.':'Your profile is visible again.','eye');return}
    if(k==='privacy.incognito'&&v&&!isGold()){el.checked=false;sheet={type:'upgrade',reason:'private',pick:'m3'};render();return}
    applyChange('me',k,v);render();return;
  }
  if(S.screen!=='signup'||!S.draft)return;
  const d=S.draft;
  setPath(d,k,v);
  if(k==='g'&&v&&!d.lookingFor)d.lookingFor=v==='M'?'F':'M';
  if(S.errors[k]){delete S.errors[k];const wrap=el.closest('[data-f]');if(wrap){wrap.classList.remove('has-err');const er=wrap.parentNode.querySelector('#err-'+k.replace(/\./g,'-'))||wrap.querySelector('.err');if(er)er.remove()}}
  if(k==='g'&&S.errors.lookingFor&&d.lookingFor)delete S.errors.lookingFor;
  if(el.hasAttribute('data-rr')&&e.type==='change')render();
  save();
}
app.addEventListener('input',e=>{const el=e.target;
  if(el.dataset&&el.dataset.univq!==undefined){S.univQ=el.value;clearTimeout(S._uq);S._uq=setTimeout(()=>{const pos=el.selectionStart;render();const f=document.getElementById('f-univq');if(f){f.focus();try{f.setSelectionRange(pos,pos)}catch(x){}}},180);return}
  if(el.dataset&&el.dataset.bind==='about'&&S.draft)S.draft.aboutEdited=1;
  onBind(e)});
app.addEventListener('change',e=>{
  const el=e.target;
  if(el.dataset.file){const f=el.files&&el.files[0];if(!f||!S.draft)return;const d=S.draft,kind=el.dataset.file;el.value='';
    if(f.size>15*1024*1024){toast('That file is over 15 MB. Try a smaller one.','info');return}
    if(kind==='id'&&/pdf$/i.test(f.type||f.name)){d.idBlob=f;d.idName=f.name||'ID.pdf';render();toast('ID ready. It is sent when you save.','check');return}
    const DOC={roots:['rootsBlob','rootsName'],status:['statusBlob','statusName'],address:['addrBlob','addrName']}[kind];
    if(DOC&&/pdf$/i.test(f.type||f.name)){d[DOC[0]]=f;d[DOC[1]]=f.name||'Document.pdf';render();toast('Document ready. It is sent when you save.','check');return}
    if(!/^image\//.test(f.type)){toast('Please choose a photo (JPG or PNG).','info');return}
    const r=new FileReader();r.onload=()=>{shrink(r.result,kind==='id'||DOC?1800:kind==='photo'?1280:900,(url,blob)=>{if(!S.draft)return;
      if(kind==='photo'){d.photo=url;d.photoBlob=blob;delete S.errors.photo}else if(kind==='selfie'){d.selfie=url;d.selfieBlob=blob}else if(DOC){d[DOC[0]]=blob;d[DOC[1]]=f.name||'Photo'}else{d.idBlob=blob;d.idName=f.name||'ID photo'}
      render();if(kind==='selfie')toast('Selfie ready. It is sent when you save.','check');if(kind==='id')toast('ID ready. It is sent when you save.','check');if(DOC)toast('Document ready. It is sent when you save.','check')})};
    r.onerror=()=>toast('Could not read that file. Try another.','info');r.readAsDataURL(f);return}
  if(el.id==='pick-q'||el.dataset.admReason!==undefined)return;
  onBind(e);
});
function shrink(src,max,cb){const img=new Image();img.onload=()=>{const s=Math.min(1,max/Math.max(img.width,img.height));const c=document.createElement('canvas');c.width=Math.round(img.width*s);c.height=Math.round(img.height*s);const g=c.getContext('2d');g.fillStyle='#fff';g.fillRect(0,0,c.width,c.height);g.drawImage(img,0,0,c.width,c.height);
  try{const url=c.toDataURL('image/jpeg',.86);c.toBlob(b=>cb(url,b||dataToBlob(url)),'image/jpeg',.86)}catch(e){toast('Could not open that image. Try another.','info')}};img.onerror=()=>{toast('Could not open that image. Try another.','info')};img.src=src}
function dataToBlob(url){const [h,b]=url.split(',');const bin=atob(b);const a=new Uint8Array(bin.length);for(let i=0;i<bin.length;i++)a[i]=bin.charCodeAt(i);return new Blob([a],{type:(h.match(/data:([^;]+)/)||[])[1]||'image/jpeg'})}
app.addEventListener('keydown',e=>{
  if(e.key==='Enter'&&e.target.id==='chat-in'){e.preventDefault();const b=app.querySelector('[data-a="send"]');if(b)A.send(b)}
  if(e.key==='Enter'&&/^au-(email|pw2?)$/.test(e.target.id)){e.preventDefault();if(S.auth&&S.auth.mode==='reset')A.authNewPw();else A.authEmail()}
  if(e.key==='Enter'&&e.target.id==='pick-q'){e.preventDefault();const b=document.querySelector('#pick-list .prow');if(b)A.pickSet(b)}
  if(e.key==='Escape'){if(celebrate)A.celClose();else if(picker)A.pickClose();else if(sheet)A.closeSheet();else if(view)A.closeView()}
});
function goBack(){if(celebrate){A.celClose();return true}if(picker){A.pickClose();return true}if(sheet){A.closeSheet();return true}if(view){A.closeView();return true}
  if(S.screen==='signup'){A.suBack();return true}if(S.screen==='auth'){A.authBack();return true}if(S.screen==='app'&&S.tab!=='matches'){S.tab='matches';save();render();return true}return false}

/* ---------- Keeping things fresh ---------- */
let tick=0,lastFull=Date.now();
async function poll(){
  if(document.hidden||S.screen!=='app'||!S.me||!S.loaded)return;
  tick++;const chatOpen=view&&view.type==='chat';
  if(!(chatOpen&&tick%2===0)&&tick%10!==0)return;
  try{
    let changed=await loadMessages();
    if(chatOpen&&S.unread[view.id]){S.unread[view.id]=0;API.rpc('mark_read',{other:view.id}).catch(()=>{})}
    if(tick%10===0){
      const ints=await API.select('interests',{select:'*'});const me=S.me.id,map={};
      (ints||[]).forEach(i=>{const o=i.from_user===me?i.to_user:i.from_user;const st=i.status==='accepted'?'mutual':i.from_user===me?'sent':i.status==='declined'?'declined':'received';if(!map[o]||st==='mutual')map[o]=st});
      const diff=Object.keys(map).filter(id=>map[id]!==S.interests[id]);
      const newly=diff.filter(id=>map[id]==='mutual'&&S.interests[id]==='sent');
      if(diff.length){S.interests=Object.assign({},S.interests,map);await refreshCards(diff);ensureMatchChats();changed=true;
        if(newly.length&&!celebrate&&!sheet&&!picker)celebrate={id:newly[0]};
        const got=diff.filter(id=>map[id]==='received');if(got.length)toast(`${got.length===1?'Someone new likes':got.length+' new people like'} you.`,'heart')}
      if(Date.now()-lastFull>180e3){lastFull=Date.now();await Promise.all([loadCards(),loadEvents()]);ensureMatchChats();changed=true;API.rpc('touch_seen').catch(()=>{})}
    }
    if(changed&&!picker&&!(document.activeElement&&/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName)&&document.activeElement.id!=='chat-in'))render();
  }catch(e){}
}
setInterval(()=>{const now=Date.now();document.querySelectorAll('[data-until]').forEach(el=>{el.textContent=fmtLeft(+el.dataset.until-now)});poll()},2000);
document.addEventListener('visibilitychange',()=>{if(document.hidden&&S.screen==='app'&&S.loaded)cacheSave();if(!document.hidden&&S.screen==='app'){tick=9;poll();const p=payPending();if(p)payCheck(p,true)}});

/* ---------- Boot ---------- */
async function boot(){
  S.screen='boot';S.bootError='';render();console.info('[boot] start',isNative?'native':'web');
  if(location.hash&&/access_token|error_description/.test(location.hash)){const h=location.href;history.replaceState(null,'',location.pathname+location.search);if(await handleAuthUrl(h))return}
  /* A cold start from the sign-in return link: handle it in the background, never hold up the first screen. */
  if(isNative&&Plug().App){try{Promise.resolve(Plug().App.getLaunchUrl()).then(l=>{if(l&&l.url&&l.url.startsWith(CFG.redirect))handleAuthUrl(l.url)}).catch(()=>{})}catch(e){}}
  console.info('[boot] session',!!API.session());
  if(!API.session()){S.screen='welcome';render();console.info('[boot] welcome shown');return}
  await afterLogin();
  payReturn().catch(()=>{});
  console.info('[boot] signed in, screen',S.screen);
}
window.addEventListener('error',e=>console.error('[js error]',e.message,e.filename,e.lineno));
window.addEventListener('unhandledrejection',e=>console.error('[js rejection]',e.reason&&(e.reason.stack||e.reason.message||e.reason)));
if(isNative&&Plug().App){
  Plug().App.addListener('appUrlOpen',ev=>{if(ev&&ev.url&&ev.url.startsWith(CFG.redirect))handleAuthUrl(ev.url)});
  Plug().App.addListener('backButton',()=>{if(!goBack())Plug().App.exitApp()});
  Plug().App.addListener('resume',()=>{if(liveUpd.apply())return;if(S.screen==='app'){tick=9;poll();const p=payPending();if(p)payCheck(p,true)}});
}
/* A payment that was pending (for example cash at a store) and completes later. */
if(Bill()){try{Bill().addListener('purchasesUpdated',()=>{if(S.screen==='app')restorePurchases(false)})}catch(e){}}
/* ---------- Typing on phones ----------
   When the keyboard opens, the app shrinks to the space above it and the field being
   typed in is scrolled to the middle, so nobody has to close the keyboard to see their text. */
(function(){
  const vv=window.visualViewport;let tallest=window.innerHeight,raf=0;
  const typing=el=>el&&(el.tagName==='TEXTAREA'||(el.tagName==='INPUT'&&!/^(checkbox|radio|button|submit|file|range|date)$/.test(el.type)));
  const reveal=el=>{try{el.scrollIntoView({block:'center',behavior:'smooth'})}catch(e){}};
  function fit(){raf=0;tallest=Math.max(tallest,window.innerHeight);
    const visible=vv?Math.round(vv.height):window.innerHeight;
    const open=tallest-visible>140;
    document.documentElement.classList.toggle('kb',open);
    document.documentElement.style.setProperty('--app-h',open&&vv&&window.innerHeight-visible>80?visible+'px':'100%');
    if(open&&typing(document.activeElement))setTimeout(()=>reveal(document.activeElement),60)}
  const later=()=>{if(!raf)raf=requestAnimationFrame(fit)};
  if(vv)vv.addEventListener('resize',later);
  window.addEventListener('resize',later);
  window.addEventListener('orientationchange',()=>{tallest=0;setTimeout(later,300)});
  document.addEventListener('focusin',e=>{if(typing(e.target))setTimeout(()=>reveal(e.target),320)});
})();
/* Live updates (his ask 30 Oct 2026): new app versions come from neumarry.com/app-update without a Play download.
   Downloaded quietly a few seconds after opening; used the next time the app comes back from the background or opens. */
const liveUpd={id:null,v:null,hid:0,
  U(){return isNative&&Plug().CapacitorUpdater},
  apply(){const U=this.U();if(!U||!this.id||S.screen!=='app'||Date.now()-this.hid<20000)return false;try{cacheSave()}catch(e){}U.set({id:this.id}).catch(()=>{});return true},
  async check(){const U=this.U();if(!U)return;try{
    const cur=await fetch('bundle.json',{cache:'no-store'}).then(r=>r.json()).catch(()=>({}));
    const L=await fetch('https://neumarry.com/app-update/latest.json?t='+Date.now(),{cache:'no-store'}).then(r=>r.json());
    if(!L||!L.version||!L.url||L.version===cur.v||L.version===this.v)return;
    const b=await U.download({url:L.url,version:L.version,checksum:L.checksum||''});await U.next({id:b.id});this.id=b.id;this.v=L.version}catch(e){}}};
if(liveUpd.U()){try{liveUpd.U().notifyAppReady()}catch(e){}setTimeout(()=>liveUpd.check(),5000);setInterval(()=>liveUpd.check(),6*3600e3);
  document.addEventListener('visibilitychange',()=>{if(document.hidden)liveUpd.hid=Date.now()});
  if(Plug().App)Plug().App.addListener('pause',()=>{liveUpd.hid=Date.now()})}

/* ---------- NeuMarry v2 design (his ok 1 Nov 2026 00:29 on mock v2; founder preview first) ----------
   Shown only to the founder accounts until he says ok for everyone. Once a founder signs in on a
   device, that device keeps the new welcome screen too (nm.v2 in localStorage). */
const V2_FOUNDERS=['swapnilbhagatt@gmail.com','aimaster13679@gmail.com'];
/* 1 Nov 04:34: on for everyone (his permission). Local automated tests can still turn it off with nm.v2test=0. */
function V2(){try{if(/127\.0\.0\.1/.test(CFG.url||'')&&localStorage.getItem('nm.v2test')==='0')return false;return true}catch(e){return true}}
Object.assign(IC,{
  brief:'<rect x="3.5" y="7.5" width="17" height="12" rx="2.5"/><path d="M9 7.5V5.5h6v2M3.5 12.5h17"/>',
  book:'<path d="M4 5.5A2.5 2.5 0 016.5 3H20v15H6.5A2.5 2.5 0 004 20.5z"/><path d="M4 20.5A2.5 2.5 0 016.5 18H20v3H6.5"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/>',
  moon:'<path d="M19.5 14.5A8 8 0 019.5 4.5a8 8 0 1010 10z"/>',
  plane:'<path d="M2.5 13.5l19-8-5 15-4-6z"/><path d="M12.5 14.5l9-9"/>',
  kid:'<circle cx="12" cy="6.5" r="2.5"/><path d="M8 21v-5l-2-3 4-2.5h4l4 2.5-2 3v5"/>',
  city:'<path d="M3 21h18M5 21V8l6-3v16M11 21V10h8v11M14 13h2M14 16h2"/>',
  face:'<circle cx="12" cy="12" r="9"/><path d="M9 10h.01M15 10h.01M8.5 14.5c1 1.2 2.2 1.8 3.5 1.8s2.5-.6 3.5-1.8"/>',
  coin:'<circle cx="12" cy="12" r="8.5"/><path d="M14.5 9.5c-.5-1-1.4-1.5-2.5-1.5-1.5 0-2.5.8-2.5 2s1 1.6 2.5 2 2.5.9 2.5 2-1 2-2.5 2c-1.1 0-2-.5-2.5-1.5M12 6.5v11"/>',
  talk:'<path d="M4 5h11v8H8l-4 3z"/><path d="M15 9h5v8l-3-2h-6v-2"/>'
});

/* order of screens: [step, sub-page] ; verification moved to the very end (his ok) */
const V2SEQ=[[1,''],[2,''],[3,'a'],[3,'b'],[4,'a'],[4,'b'],[6,''],[5,'']];
const V2PART={'1':[1,'You'],'2':[2,'Your roots'],'3a':[2,'Your life now'],'3b':[3,'Photo and you'],'4a':[4,'Your future home'],'4b':[4,'Your nature'],'6':[4,'Who you want to meet'],'5':[5,'Get verified']};
const V2CELE={2:['Your roots and life are in','People from your roots show first, with the real distance to you.','Photo and you','about 1 min'],
  3:['Your profile looks great','Others will see a clear photo and a few true lines about you.','What matters to you','about 2 min'],
  6:['Your match profile is ready','We now know what matters to you. One last part: your Trust Passport.','Get verified','about 3 min']};
const LIFE_K=['h','country','state','city','res','reloc','job','edu','marital','createdBy'];
function v2key(){const d=S.draft||{};return S.step===3||S.step===4?S.step+(d.v2b||'a'):String(S.step)}
function v2pos(){const d=S.draft||{};return V2SEQ.findIndex(([s,b])=>s===S.step&&(!b||b===(d.v2b||'a')))}
function v2go(i){const [s,b]=V2SEQ[i];if(S.draft)S.draft.v2b=b||'a';goStep(s)}
function v2err(k){return S.errors[k]?' has-err':''}
function v2chips(k,opts,cur,cls){return `<div class="v2chips${v2err(k)}" data-f="${k}">${opts.map(o=>`<button type="button" class="v2chip${String(cur)===String(o.v)?' on':''}${cls?' '+cls:''}" data-a="chipSet" data-k="${k}" data-v="${esc(o.v)}">${o.pre?o.pre+' ':''}${esc(o.l)}</button>`).join('')}</div>${errOf(k)}`}
function v2opts(k){return (pickerDef(k,'draft').opts||[])}
function v2segs(){const p=(V2PART[v2key()]||[1])[0];return `<div class="v2segs">${[1,2,3,4,5].map(n=>`<i class="${n<p?'d':n===p?'h':''}"></i>`).join('')}</div>`}
function v2head(sub){const [p,l]=V2PART[v2key()]||[1,''];return `<div class="v2head pad"><button class="iconbtn" data-a="suBack" aria-label="Back">${ic('back')}</button>
  <div class="grow"><div class="v2pt"><span>Part ${p} of 5 · ${esc(l)}</span><b>${ic('check')} Saved</b></div>${v2segs()}</div>
  <button class="iconbtn" data-a="v2leave" aria-label="Save and leave">${ic('x')}</button></div>`}
function v2foot(label,extra){return `<div class="v2foot pad">${extra||''}<button class="btn primary block" data-a="suNext"${busy?' disabled':''}>${busy==='save'?spinner('Saving')+' '+esc(S.saveMsg||'Saving'):label} ${busy?'':ic('chev')}</button></div>`}
function v2gain(icn,t){return `<div class="v2gain">${ic(icn)}<span>${t}</span></div>`}

/* ---------- screen 1: welcome ---------- */
function renderWelcomeV2(){
  const arcs=[[78,200,214,104],[96,128,226,118],[238,214,210,104],[150,236,226,118],[60,150,214,104]];
  return `<div class="scroll v2 v2w"><div class="v2w-sky" aria-hidden="true">
   <svg viewBox="0 0 312 300"><defs><radialGradient id="v2gl" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#8DEBC3" stop-opacity=".35"/><stop offset="1" stop-color="#8DEBC3" stop-opacity="0"/></radialGradient></defs>
   <circle cx="156" cy="170" r="130" fill="url(#v2gl)"/><circle cx="156" cy="170" r="104" fill="none" stroke="#fff" stroke-opacity=".14"/>
   <ellipse cx="156" cy="170" rx="104" ry="38" fill="none" stroke="#fff" stroke-opacity=".1"/><ellipse cx="156" cy="170" rx="44" ry="104" fill="none" stroke="#fff" stroke-opacity=".1"/>
   ${arcs.map(([a,b,c,e])=>`<path class="v2arc" d="M${a} ${b}Q${(a+c)/2} ${Math.min(b,e)-70} ${c} ${e}" fill="none" stroke="#A8F0CF" stroke-width="1.6"/><circle cx="${a}" cy="${b}" r="3.5" fill="#FFD7A8"/>`).join('')}
   <circle cx="214" cy="104" r="6" fill="#8DEBC3"/></svg>
   ${[['🇳🇬',18,58],['🇵🇭',74,70],['🇲🇽',4,45],['🇮🇳',40,77],['🇱🇧',27,37],['🇰🇷',80,48]].map(([f,x,y])=>`<span class="v2flag" style="left:${x}%;top:${y}%">${f}</span>`).join('')}
   <span class="v2cityp">${ic('pin')} Your city</span></div>
  <div class="v2w-body pad">
   <p class="v2brand">NEUMARRY</p>
   <h1>Your roots.<br>Your city.<br><em>Your person.</em></h1>
   <p class="v2w-lede">For people who grew up in one country and live in another. Every member is checked with an ID and a live selfie.</p>
   ${v2near()}
   <div class="v2prom">${[['shield','Verified','every member'],['lock','Private','no number shared'],['clock','About 6 min','almost all taps']].map(([i,a,b])=>`<div>${ic(i)}<b>${a}</b><span>${b}</span></div>`).join('')}</div>
   <button class="btn block v2light" data-a="start">Create my profile</button>
   <button class="btn block v2ghost" data-a="login">I already have an account</button>
   <p class="v2w-note">By continuing you agree to our <button class="link" data-a="legal" data-k="terms">Terms</button> and <button class="link" data-a="legal" data-k="privacy">Privacy Policy</button>. 18+ only.</p>
  </div></div>`}

/* live, honest count on the welcome screen (near_count: fully verified members; roots shown from 5 up) */
const V2N={};
function v2near(){const c=tzCountry();if(!c)return '';const n=V2N[c];
  if(n===undefined){V2N[c]=null;API.rpc('near_count',{country_in:c}).then(r=>{V2N[c]=r;if(S.screen==='welcome')render()}).catch(()=>{V2N[c]=0})}
  if(!n)return '';
  return `<div class="v2near"><small>${ic('pin')} ${esc(c)} · live now</small>${n.live>=20?`<b>${n.live.toLocaleString()}</b><span>verified members live here</span>`:`<b>Be one of the first</b><span>We are new in ${esc(c)}. Join now, and you are ready the day people of your roots join near you.</span>`}
   ${n.roots&&n.roots.length?`<div class="v2near-r">${n.roots.slice(0,5).map(x=>`<i>${flag(x.c)||''} ${esc(x.c)} ${x.n}</i>`).join('')}</div>`:''}</div>`}

/* ---------- birthday wheel ---------- */
const MON=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
function v2wheelCols(){const y0=new Date().getFullYear()-18,years=[];for(let y=y0;y>=1951;y--)years.push(y);
  const days=Array.from({length:31},(_,i)=>i+1);return {days,years}}
function v2dobParts(d){const m=/^(\d{4})-(\d{2})-(\d{2})$/.exec(d.dob||'');if(m)return {y:+m[1],m:+m[2]-1,d:+m[3]};const y=new Date().getFullYear()-28;return {y,m:0,d:1,unset:true}}
function v2wheel(d){const {days,years}=v2wheelCols(),p=v2dobParts(d);
  const col=(k,list,lab,cur)=>`<div class="v2wcol" data-wheel="${k}">${list.map(v=>`<div class="v2wit${v===cur&&!p.unset?' on':''}" data-v="${v}">${lab(v)}</div>`).join('')}</div>`;
  return `<div class="v2wheel${v2err('dob')}" data-f="dob"><i class="v2wsel" aria-hidden="true"></i>${col('d',days,v=>v,p.d)}${col('m',MON.map((_,i)=>i),v=>MON[v],p.m)}${col('y',years,v=>v,p.y)}</div>
  <p class="v2note">${ic('lock')} ${d.dob&&!p.unset?`<b>${ageFrom(d.dob)} years</b> · only your age is shown, never the date.`:'Spin to your birthday. Only your age is shown.'}</p>${errOf('dob')}`}
let v2wheelLock=false;
function v2wheelAfter(){const w=document.querySelector('.v2wheel');if(!w)return;const d=S.draft;const p=v2dobParts(d);const H=40;
  v2wheelLock=true;w.querySelectorAll('.v2wcol').forEach(c=>{const k=c.dataset.wheel;const want=k==='d'?p.d:k==='m'?p.m:p.y;const items=[...c.children];const i=items.findIndex(x=>+x.dataset.v===want);c.scrollTop=Math.max(0,i)*H});
  setTimeout(()=>{v2wheelLock=false},80);
  w.querySelectorAll('.v2wcol').forEach(c=>{let t;c.addEventListener('scroll',()=>{if(v2wheelLock)return;clearTimeout(t);t=setTimeout(()=>{
    const cur={};w.querySelectorAll('.v2wcol').forEach(cc=>{const i=Math.round(cc.scrollTop/H);const it=cc.children[Math.min(i,cc.children.length-1)];cur[cc.dataset.wheel]=+it.dataset.v;[...cc.children].forEach(x=>x.classList.toggle('on',x===it))});
    const max=new Date(cur.y,cur.m+1,0).getDate();const dd=Math.min(cur.d,max);
    d.dob=`${cur.y}-${String(cur.m+1).padStart(2,'0')}-${String(dd).padStart(2,'0')}`;delete S.errors.dob;save();w.classList.remove('has-err');const er=document.getElementById('err-dob');if(er)er.remove();
    const n=document.querySelector('.v2wheel+.v2note');if(n)n.innerHTML=`${ic('lock')} <b>${ageFrom(d.dob)} years</b> · only your age is shown, never the date.`},140)},{passive:true})})}

/* ---------- the house that shows the answers (screen 6) ---------- */
function v2house(a){const kids=a[3]===0||a[3]===1,both=a[1]===0,move=a[0]===2,par=a[2]===0||a[2]===1;
  const n=[a[0],a[1],a[2],a[3]].filter(x=>x!==null&&x!==undefined).length;
  return `<svg viewBox="0 0 300 168" class="v2house" aria-hidden="true"><circle cx="250" cy="34" r="16" fill="#FFD7A8"/><path d="M0 150C80 136 220 136 300 150V168H0z" fill="#CDE7D6"/>
  <path d="M80 82L150 30 220 82" fill="#C42E57"/><rect x="92" y="80" width="116" height="74" rx="4" fill="#fff"/><rect x="138" y="112" width="24" height="42" rx="12" fill="#142520"/>
  <rect x="104" y="92" width="26" height="22" rx="4" fill="#FFE6EC"/><rect x="170" y="92" width="26" height="22" rx="4" fill="#FFE6EC"/>
  ${kids?'<g fill="#0E9F6E"><circle cx="112" cy="100" r="3.5"/><rect x="108.5" y="104" width="7" height="8" rx="3"/><circle cx="122" cy="101" r="3"/><rect x="119" y="104.5" width="6" height="7.5" rx="3"/></g>':''}
  ${both?'<g fill="#B8863A"><rect x="174" y="102" width="9" height="7" rx="1.5"/><rect x="185" y="102" width="9" height="7" rx="1.5"/></g>':''}
  ${par?'<g fill="#86697A"><circle cx="232" cy="122" r="4"/><rect x="228" y="127" width="8" height="14" rx="3"/><circle cx="246" cy="123" r="4"/><rect x="242" y="128" width="8" height="13" rx="3"/></g>':''}
  ${move?'<g transform="translate(40 34) rotate(-12)"><path d="M0 8l26-11-7 21-5-8z" fill="#142520"/></g>':''}
  <g transform="translate(40 112)"><path d="M0 40V10" stroke="#24845A" stroke-width="3"/><circle cx="0" cy="8" r="12" fill="#7CCB9E"/></g>
  <text x="150" y="20" text-anchor="middle" font-family="Nunito Sans,sans-serif" font-weight="900" font-size="10" fill="#C42E57" letter-spacing="1.5">${n} OF 4 ADDED</text></svg>`}
const HOME_Q=[[3,'kid'],[1,'brief'],[2,'users'],[0,'plane']];
/* screen 7: one illustrated card per question */
const NAT_ART={5:['#FFE7D6','#F6B7A0','sun'],6:['#E6F4EC','#9FD3B5','coin'],7:['#EDE6FF','#C2B2F4','talk'],4:['#FCF1DE','#E9C98D','star'],8:['#FFE6EC','#FF9DB1','heart']};
const NAT_Q=[5,6,7,4,8];

/* ---------- sign-up v2 ---------- */
function renderSignupV2(){if(!S.editMode)setTimeout(()=>noteStep(S.step),0);
  const d=S.draft,st=S.step,sub=d.v2b||'a';let body='',cta='Continue',foot='';
  if(st===5){let h=renderSignupV2.orig();
    const pass=v2passport(d);h=h.replace('<div class="form pad">','<div class="form pad">'+pass).replace(/Step 5 of 6 · saved/,'Part 5 of 5 · last part');
    return `<div class="v2 v2col">${h}</div>${S.cele2?v2cele():''}`}
  if(st===1){const gn=v2gname();if(!d.name&&gn)d.name=gn;
    const tile=(g,l,s,seed)=>`<button type="button" class="v2gt${d.g===g?' on':''}" data-a="v2g" data-v="${g}"><span class="v2gt-a">${`<svg viewBox="0 0 64 64" aria-hidden="true"><defs><linearGradient id="ng${g}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${g==='F'?'#FFE9A0':'#BDF2DA'}"/><stop offset="1" stop-color="${g==='F'?'#F2C94C':'#3BBF8A'}"/></linearGradient></defs><rect width="64" height="64" rx="20" fill="url(#ng${g})"/>${g==='F'?'<circle cx="32" cy="26" r="11" fill="none" stroke="#fff" stroke-width="5"/><path d="M32 37v15M25 45h14" stroke="#fff" stroke-width="5" stroke-linecap="round"/>':'<circle cx="28" cy="36" r="11" fill="none" stroke="#fff" stroke-width="5"/><path d="M36 28l11-11M38 17h9v9" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'}</svg>`}</span><b>${l}</b><small>${s}</small></button>`;
    body=`<h1 class="v2h">${d.name?`Hi ${esc(d.name.split(' ')[0])}.`:'Hi there.'} <em>Who are you</em> looking for?</h1>
    ${S.v2name||!d.name?inF('name','Your full name','text',d.name,'autocomplete="name" maxlength="60"','Others see only your first name and last initial until you both say yes.')
      :`<div class="v2card v2row">${avatar(null,'sm',true)}<div class="grow"><b>${esc(d.name)}</b><small>${gn?'From your Google account':'Your name'}</small></div><button type="button" class="v2pill" data-a="v2name">Change</button></div>`}
    <div class="v2gts${v2err('g')}" data-f="g">${tile('F','I’m a woman','looking for a man',11)}${tile('M','I’m a man','looking for a woman',42)}</div>${errOf('g')}
    <p class="v2lb">Your birthday · spin</p>${v2wheel(d)}`;
    cta='Next: your roots';}
  else if(st===2){const pop=POP_OC.map(([c])=>c);
    body=`<h1 class="v2h">Where did you <em>grow up?</em></h1>${v2gain('globe','People from your roots appear first in your matches.')}
    <div class="v2flags${v2err('oc')}" data-f="oc">${POP_OC.map(([c,f])=>`<button type="button" class="v2fl${d.oc===c?' on':''}" data-a="chipSet" data-k="oc" data-v="${esc(c)}"><span>${f}</span><b>${esc(c)}</b></button>`).join('')}</div>
    ${pickF('oc',d.oc&&!pop.includes(d.oc)?'Country of origin':'Other country','draft',{ph:'Search all 195 countries'})}
    ${d.oc?pickF('os','State / region','draft',{ph:statesOf(d.oc).length?'Choose a state or region':'Type your region'}):''}
    ${d.oc&&TONGUE_BY_ORIGIN[d.oc]?`<p class="v2lb">Language at home · ${esc(d.oc)}</p>${v2chips('t',TONGUE_BY_ORIGIN[d.oc].slice(0,6).map(x=>({v:x,l:x})),d.t)}`:''}
    ${pickF('t',d.oc&&TONGUE_BY_ORIGIN[d.oc]?'Another language':'Mother tongue','draft',{ph:'Choose a language'})}
    <p class="v2lb">Faith</p>${v2chips('r',RELS.map(x=>({v:x,l:x})),d.r)}
    ${d.r?pickF('c','Community (optional)','draft',{ph:'Choose or type your community',showBlank:true,hint:'Only used when you or a match filter by it.'}):''}
    ${d.r?`<div class="panel" style="padding:4px 16px">${toggle('privacy.showC','Show my community on my profile','Turn off to keep it private. Filters still work.',d.privacy.showC)}</div>`:''}
    ${d.oc?`<div class="v2roots"><span class="v2rf">${flag(d.oc)||'🌍'}</span><div class="grow"><small>YOUR ROOTS CARD</small><b>${esc([d.os,d.t,d.r].filter(Boolean).join(' · ')||d.oc)}</b></div>${ic('sparkle')}</div>`:''}`;}
  else if(st===3&&sub==='a'){if(!d.country){const t=tzCountry();if(t)d.country=t}
    body=`<h1 class="v2h">Your life <em>now</em></h1>${v2gain('pin','Matches show the real distance to you. Your exact address is never shown.')}
    <div class="v2card v2city${v2err('country')}" data-f="country"><div class="v2map" aria-hidden="true"><svg viewBox="0 0 300 70" preserveAspectRatio="none"><path d="M0 50C60 40 90 60 150 48S250 30 300 42V70H0z" fill="#C9DCEA"/><path d="M20 0L60 70M120 0L100 70M200 0L240 70M0 26H300" stroke="#fff" stroke-width="3" opacity=".8"/></svg>${ic('pin')}</div>
     <div class="v2row" style="padding:10px 12px"><div class="grow"><b>${d.country?esc((d.city?d.city+', ':'')+d.country):'Where do you live?'}</b><small>${d.country&&tzCountry()===d.country?'Found from your phone':'Choose below'}</small></div></div></div>
    ${pickF('country','Country you live in','draft',{ph:'Choose a country'})}${tzWarn(d)}
    <div class="row2">${pickF('state','State / province','draft',{ph:'Choose',disabled:!d.country})}${pickF('city','City','draft',{ph:'Choose or type',disabled:!d.country})}</div>
    ${d.country?`<p class="v2lb">Residency in ${esc(d.country)}</p>${v2chips('res',v2opts('res'),d.res)}<p class="v2lb">Open to moving for the right person?</p>${v2chips('reloc',relocOpts(d.country),d.reloc)}`:''}
    <p class="v2lb">What do you do?</p>${pickOrOther('job','',JOBS,'Type your profession')}
    <p class="v2lb">Highest study</p>${pickOrOther('edu','',EDUS,'Type your study')}${collegeBox(d)}
    <p class="v2lb">Height</p>${pickF('h','Your height','draft',{ph:'Select'})}
    <p class="v2lb">Marital status</p>${v2chips('marital',v2opts('marital'),d.marital)}
    <p class="v2lb">Profile created by</p>${v2chips('createdBy',v2opts('createdBy'),d.createdBy)}`;}
  else if(st===3){
    body=`<h1 class="v2h">Your photo <em>studio</em></h1>
    <div class="v2studio${v2err('photo')}" data-f="photo"><label class="v2main">${d.photo?`<img src="${esc(d.photo)}" alt="Your photo">`:`<span class="v2empty">${ic('camera')}<b>Add your best photo</b><small>From your gallery or camera</small></span>`}
      <input type="file" accept="image/*" data-file="photo" aria-label="Profile photo">${d.photo?`<span class="v2pill v2on">${ic('star')} First photo</span>`:''}</label>
     <div class="v2tips"><b>Photos that work</b>${[['face','Face clear, looking at the camera'],['sun','Daylight, no dark filters'],['user','Only you in the first photo']].map(([i,t])=>`<span>${ic(i)}${t}</span>`).join('')}<small>Add more photos, like one with family, from Me after sign-up.</small></div></div>${errOf('photo')}
    <div class="panel" style="padding:4px 16px">${toggle('privacy.blur','Blur my photos until I accept','Only people you have both accepted see them clearly.',d.privacy.blur)}</div>
    <p class="v2lb">Pick 3 that are so you</p><div class="v2chips">${TRAITS.map(([k,l])=>`<button type="button" class="v2chip${(d.traits||[]).includes(k)?' on':''}" data-a="traitTap" data-k="${k}">${l}</button>`).join('')}</div>
    <label class="${fldCls('about')} v2about" data-f="about"><span>About me · we write it from your 3 picks</span><textarea id="f-about" data-bind="about" maxlength="600" placeholder="Pick 3 above and we write this for you. You can change it.">${esc(d.about)}</textarea>${errOf('about')}</label>`;
    cta='Looks good';}
  else if(st===4&&sub==='a'){const a=d.ans;
    body=`<h1 class="v2h">Build your <em>future home</em></h1><div class="v2card v2hc">${v2house(a)}</div>
    ${HOME_Q.map(([qi,icn])=>{const q=QS[qi];return `<div class="v2q${v2err('ans.'+qi)}" data-f="ans.${qi}"><p class="v2qt">${ic(icn)}${esc(q.q)}</p><div class="v2qo">${q.o.map((o,j)=>`<button type="button" class="v2chip${a[qi]===j?' on':''}" data-a="v2ans" data-i="${qi}" data-j="${j}">${esc(o)}</button>`).join('')}</div>${errOf('ans.'+qi)}</div>`}).join('')}`;
    cta='My home is ready';}
  else if(st===4){const a=d.ans;const qi=NAT_Q.find(i=>a[i]===null||a[i]===undefined);const k=NAT_Q.indexOf(qi);
    if(qi!==undefined){const [c1,c2,icn]=NAT_ART[qi];
      body=`<div class="v2rowsp"><h1 class="v2h" style="margin:0">This or <em>that?</em></h1><span class="v2pill">${k+1} of ${NAT_Q.length}</span></div>
      <p class="v2lede">Tap the one that is more you. This is how we match nature, not only profiles.</p>
      <div class="v2nat"><div class="v2nat-art" style="background:linear-gradient(135deg,${c1},${c2})">${ic(icn)}</div><h2>${esc(QS[qi].q)}</h2>
       <div class="v2nat-o">${QS[qi].o.map((o,j)=>`<button type="button" class="v2nat-b" data-a="v2ans" data-i="${qi}" data-j="${j}">${esc(o)}</button>`).join('')}</div></div>
      <div class="v2dots">${NAT_Q.map((i,n)=>`<i class="${a[i]!==null&&a[i]!==undefined?'d':n===k?'h':''}"></i>`).join('')}</div>
      ${k>0?`<button type="button" class="linkbtn v2back" data-a="v2natBack">Back to card ${k}</button>`:''}`;
      return `<div class="v2 v2col">${v2head()}<div class="scroll" id="su-scroll"><div class="form pad">${body}</div></div></div>${S.cele2?v2cele():''}`}
    body=`<h1 class="v2h">Your <em>nature</em>, done.</h1>${v2gain('sparkle','Matches will show where your everyday habits fit.')}
    <div class="v2card">${NAT_Q.map(i=>`<button type="button" class="v2natr" data-a="v2natRedo" data-i="${i}"><small>${esc(QS[i].k)}</small><b>${esc(QS[i].o[a[i]])}</b>${ic('chev')}</button>`).join('')}</div>
    <p class="v2lb">Diet</p>${v2chips('diet',v2opts('diet'),d.diet)}
    <p class="v2lb">Smoking</p>${v2chips('sm',v2opts('sm'),d.sm)}
    <p class="v2lb">Drinking</p>${v2chips('dr',v2opts('dr'),d.dr)}`;}
  else if(st===6){if(!d.prefs)d.prefs=defaultPrefs(d);const pr=d.prefs;
    body=`<h1 class="v2h">Who would you <em>like to meet?</em></h1>${v2gain('heart','We set this from your answers. Change anything, any time.')}
    <div class="row2">${pickF('prefs.ageMin','Age from','draft')}${pickF('prefs.ageMax','Age to','draft')}</div>${errOf('prefs.ageMax')}
    <div class="row2">${pickF('prefs.hMin','Height from','draft')}${pickF('prefs.hMax','Height to','draft')}</div>${errOf('prefs.hMax')}
    ${pickF('prefs.liveCountry','Where they live','draft')}${pr.liveCountry===d.country?pickF('prefs.radius','Distance','draft'):''}
    ${pickF('prefs.oc','Their roots: country','draft')}${pr.oc!=='Any'?pickF('prefs.os','Their roots: state / region','draft'):''}
    ${pickF('prefs.religion','Religion','draft')}
    ${pickF('prefs.community','Community','draft',{disabled:pr.religion==='Any'||!commOf(pr.religion).length,hint:pr.religion==='Any'?'Choose a religion to pick a community.':''})}
    ${pr.community!=='Any'?pickF('prefs.alsoComm','Also open to these communities','draft',{hint:'More communities means more matches.'}):''}
    ${pickF('prefs.timeline','Ready to marry','draft')}`;cta='Next: your Trust Passport';}
  return `<div class="v2 v2col">${v2head()}<div class="scroll" id="su-scroll"><div class="form pad">${body}</div></div>${v2foot(cta,foot)}</div>${S.cele2?v2cele():''}`}
function v2gname(){try{const u=API.session().user||{},m=u.user_metadata||{};return String(m.full_name||m.name||'').trim().slice(0,60)}catch(e){return ''}}

/* ---------- screen 10: Trust Passport ---------- */
function v2passport(d){const me=null;const s1=vState(1,d,me),s2=vState(2,d,me),s3=vState(3,d,me),s4=vState(4,d,me);
  const st=s=>s==='ok'||s==='ready'||s==='wait'?'done':'todo';
  const items=[['face','Live selfie + ID','About 1 min',st(s1)],['globe','Roots','About 40 sec',st(s2)],['city','City','About 1 min',st(s3)],['pin','Location','Optional, 10 sec',s4==='ready'||s4==='ok'?'done':'todo']];
  const nx=items.findIndex(x=>x[3]!=='done');
  return `<div class="v2pass"><div class="v2pass-top">${avatar(null,'md',true)}<div class="grow"><small>NEUMARRY · TRUST PASSPORT</small><b>${esc(d.name||'')}</b><span>${d.oc?flag(d.oc)+' Roots '+esc(d.oc):''}${d.country?' · '+flag(d.country)+' Lives '+esc(d.city||d.country):''}</span></div></div>
   <div class="v2stamps">${items.map(([i,t,s,state],n)=>`<div class="v2st ${state}${n===nx?' nx':''}" style="--r:${[-3,2,-1,2][n]}deg">${state==='done'?`<i class="v2ok">${ic('check')}</i>`:''}${ic(i)}<b>${t}</b><small>${state==='done'?'Ready':n===nx?'Next · '+s:s}</small></div>`).join('')}</div></div>
   <p class="v2note">${ic('lock')} Only our safety team sees documents. Deleted 7 days after the check.</p>`}

/* ---------- celebration between parts ---------- */
function v2cele(){const c=V2CELE[S.cele2.at];if(!c)return '';const p=V2PART[(()=>{const [s,b]=V2SEQ[S.cele2.next];return s===3||s===4?s+(b||'a'):String(s)})()]||[5];
  const cf=Array.from({length:30},(_,i)=>`<i style="left:${(i*37)%100}%;animation-delay:${(i%9)*0.06}s;background:${['#0E9F6E','#B8863A','#2D8A61','#8DEBC3','#E9C98D'][i%5]};--r:${(i*47)%360}deg"></i>`).join('');
  return `<div class="cele v2" role="dialog" aria-live="polite"><div class="cf">${cf}</div><div class="cele-c"><div class="v2seal">${ic('check')}</div><h2>${c[0]}</h2><p>${esc(c[1])}</p>
  <div class="cele-n"><b>Next: ${c[2]} · ${c[3]}</b><span>Part ${p[0]} of 5</span></div>
  ${v2segs().replace('v2segs','v2segs v2segs-c')}<button class="btn primary block" data-a="v2celeGo">Keep going</button><p class="hint" style="text-align:center;margin:8px 0 0">Take a break any time, we save everything.</p></div></div>`}

/* ---------- screen 18: everything is saved ---------- */
function v2leaveSheet(){const i=Math.max(0,v2pos());const left=Math.max(1,Math.round((V2SEQ.length-i)*0.8));
  return sheetShell('Everything is saved',`<div class="v2"><p class="v2lede" style="margin-top:0">You are about ${left} minute${left>1?'s':''} from your matches. Come back any time and pick up right here.</p>
   <div class="v2card" style="margin-top:12px">${v2segs()}<p class="v2note" style="margin-top:10px">${ic('mail')} If you stop now, we email you a reminder after 1 day and once more after 3 days. Nothing more.</p></div></div>`,
   `<button class="btn primary block" data-a="closeSheet">Finish now</button><button class="btn ghost block" data-a="v2out">Log out for now</button>`)}

/* ---------- screen 13: after the last part ---------- */
function v2reveal(){const me=S.me;if(!me)return '';const sent=me.idCheck&&me.selfieCheck;
  const cf=Array.from({length:22},(_,k)=>`<i style="left:${(k*47)%96+2}%;top:${(k*71)%22+4}%;background:${['#0E9F6E','#FFD7A8','#B8863A','#8FE0B5','#C2B2F4'][k%5]};transform:rotate(${k*37}deg)"></i>`).join('');
  return `<div class="v2rev v2" role="dialog" aria-modal="true"><div class="v2rev-cf" aria-hidden="true">${cf}</div>
   <div class="v2rev-c pad"><div class="v2rev-seal">${ic('shield')}</div>
   <h1 class="v2h" style="text-align:center">${sent?'You’re <em>nearly live.</em>':'Your profile is <em>saved.</em>'}</h1>
   <p class="v2lede" style="text-align:center">${sent?'A person on our team checks your Trust Passport, usually within a day. Then you see only verified people, and they see you.':'Finish your Trust Passport from Me. Then you see only verified people, and they see you.'}</p>
   <div class="v2rev-p">${['shield','badge','users','heart'].map((k,i)=>`<span class="nf" style="--r:${[-6,-2,3,7][i]}deg">${ic(k)}</span>`).join('')}</div>
   <button class="btn primary block" data-a="v2revGo">${sent?'See my profile':'Finish my Trust Passport'}</button></div></div>`}

/* ---------- actions and hooks ---------- */
(function(){
  const _suNext=A.suNext,_suBack=A.suBack;
  A.suNext=async function(){if(!V2()||S.editMode)return _suNext.call(A);
    const d=S.draft,i=v2pos(),[st,sub]=V2SEQ[i]||[S.step,''];
    if(st===5){if(busy)return;const e=validateStep(5,d);S.errors=e;if(Object.keys(e).length){showErrors();return}
      S.step=6;S.v2fin=1;await _suNext.call(A);if(S.screen==='signup'){S.step=5;S.v2fin=0;render()}else{S.v2rev=1;render()}return}
    let e=validateStep(st,d);
    if(st===3&&sub==='a')e=Object.fromEntries(Object.entries(e).filter(([k])=>LIFE_K.includes(k)));
    if(st===3&&sub==='b')e=Object.fromEntries(Object.entries(e).filter(([k])=>!LIFE_K.includes(k)));
    if(st===4&&sub==='a')e=Object.fromEntries(Object.entries(e).filter(([k])=>['ans.0','ans.1','ans.2','ans.3'].includes(k)));
    if(st===3&&sub==='b'&&!d.photo)e.photo='Add one clear photo of you';
    S.errors=e;if(Object.keys(e).length){showErrors();return}
    if(V2CELE[i]){S.cele2={at:i,next:i+1};render();return}
    v2go(i+1)};
  A.suBack=function(){if(!V2()||S.editMode)return _suBack.call(A);if(S.cele2){S.cele2=null;render();return}
    if(S.step===5&&S.draft&&S.draft.vs)return _suBack.call(A);
    const i=v2pos();if(i>0)v2go(i-1);else{sheet={type:'v2leave'};render()}};
  Object.assign(A,{
    v2g(el){const d=S.draft;d.g=el.dataset.v;d.lookingFor=d.g==='M'?'F':'M';delete S.errors.g;delete S.errors.lookingFor;save();render()},
    v2name(){S.v2name=1;render();const f=document.getElementById('f-name');if(f)f.focus()},
    v2ans(el){const d=S.draft;d.ans[+el.dataset.i]=+el.dataset.j;delete S.errors['ans.'+el.dataset.i];save();render()},
    v2natBack(){const d=S.draft;const qi=NAT_Q.find(i=>d.ans[i]===null||d.ans[i]===undefined);const k=NAT_Q.indexOf(qi);if(k>0){d.ans[NAT_Q[k-1]]=null;render()}},
    v2natRedo(el){S.draft.ans[+el.dataset.i]=null;render()},
    v2celeGo(){const n=S.cele2.next;S.cele2=null;v2go(n)},
    v2leave(){sheet={type:'v2leave'};render()},
    v2out(){sheet={type:'logout'};render()},
    v2revGo(){S.v2rev=0;S.tab='me';render()}
  });
  const _rs=renderSheet;renderSheet=function(){return sheet&&sheet.type==='v2leave'?v2leaveSheet():_rs()};
  const _rw=renderWelcome;renderWelcome=function(){return V2()?renderWelcomeV2():_rw()};
  const _su=renderSignup;renderSignupV2.orig=_su;renderSignup=function(){return V2()&&!S.editMode&&!S.suInter?renderSignupV2():_su()};
  const _r=render;render=function(){_r();if(V2()){if(S.screen==='signup'&&S.step===1)v2wheelAfter();if(S.screen==='app'&&S.v2rev&&!app.querySelector('.v2rev'))app.insertAdjacentHTML('beforeend',v2reveal())}};
})();

/* ---------- Family Mixers v2 (his ok 1 Nov 01:01; founder preview) ---------- */
const TALK=['Which festival food from home do you miss most, and who made it best?','What is one thing your city here taught you that home never did?',
 'Which song takes you straight back to where you grew up?','What would your grandmother say is the secret of a good marriage?',
 'Where in the world would you take your family for one perfect week?','What tradition from home do you want your own family to keep?'];
const V2E={crowd:{},quiet:{},tt:0};
function evNow(e){const t=Date.now(),s=e.date.getTime();const m=parseInt(e.dur)||3;return {live:t>=s-15*60e3&&t<=s+m*3600e3+30*60e3,after:t>=s}}
function v2evHero(){const me0=S.me||{};const evs=events().filter(e=>e.status!=='cancelled');if(!evs.length)return '';
  const near=e=>e.city&&me0.city&&e.city.toLowerCase()===String(me0.city).toLowerCase()?0:e.country===me0.country?1:2;
  const e=evs.slice().sort((a,b)=>near(a)-near(b)||a.date-b.date)[0];const f=fmtDay(e.date,e.tz),[wc,wl,mc,ml]=e.seats;
  const bar=(l,n,cap,c)=>`<div class="v2bar"><div><span>${l}</span><b>${n} of ${cap}</b></div><i><u style="width:${cap?Math.round(n/cap*100):0}%;background:${c}"></u></i></div>`;
  return `<button class="v2evh v2" data-a="openEvent" data-id="${e.id}"><span class="v2evh-art">${evArt(e,true)}</span>
   <span class="v2evh-b"><small>${near(e)===0?'Your city · ':''}${esc(e.city||e.country)}</small><b>${esc(e.title)} · ${esc(f.short||f.long)}</b><em>${e.time} · ${esc(e.dur)} · ages ${e.age}</em>
   ${bar('Women',wc-wl,wc,'var(--rose)')}${bar('Men',mc-ml,mc,'#2E5E8C')}
   <span class="v2evh-f"><span class="v2pill">${ic('users')} ${e.parents?'Parents welcome':'Members only'}</span><span class="v2go">See the evening ${ic('chev')}</span></span></span></button>`}
function v2evExtras(e){const c=V2E.crowd[e.id],rv=e.my,n=evNow(e);
  if(c===undefined){V2E.crowd[e.id]=null;API.rpc('event_crowd',{eid:e.id}).then(r=>{V2E.crowd[e.id]=r;render()}).catch(()=>{V2E.crowd[e.id]=0})}
  const crowd=c&&c.booked?`<div class="panel v2"><p class="v2lb" style="margin:0 0 8px">Who is coming · ${c.booked} booked</p>${c.roots.length?`<div class="v2chips">${c.roots.map(x=>`<span class="v2pill">${flag(x.c)||''} ${esc(x.c)} ${x.n}</span>`).join('')}${c.others?`<span class="v2pill" style="background:var(--sunk);color:var(--ink)">+${c.others} more</span>`:''}</div>`:`<p class="v2lede" style="margin:0">Roots show here once 2 or more guests share a country.</p>`}
   <p class="v2note" style="margin-top:8px">${ic('shield')} All verified · ages ${e.age}${c.parents?` · ${c.parents} parent${c.parents>1?'s':''} coming too`:''}. No names before the evening.</p></div>`:'';
  const paid=rv&&rv.status==='paid';
  const live=paid&&n.live?`<button class="v2act" data-a="v2talk"><span class="ibox">${ic('chat')}</span><span><b>Table talk cards</b><small>Easy questions for your table, from many roots</small></span>${ic('chev')}</button>`:'';
  const quiet=paid&&n.after?`<button class="v2act" data-a="v2quiet" data-id="${e.id}"><span class="ibox">${ic('heart')}</span><span><b>Quiet yes</b><small>Say privately whom you would like to see again. Only mutual yeses are shown, next morning.</small></span>${ic('chev')}</button>`:'';
  return live+quiet+crowd}
function v2talkSheet(){const k=V2E.tt%TALK.length;return sheetShell('Table talk',`<div class="v2"><div class="v2tt"><small>EVERYONE ANSWERS · 1 MIN EACH</small><p>${esc(TALK[k])}</p><span>Card ${k+1} of ${TALK.length}</span></div>
  <p class="v2note" style="margin-top:10px">${ic('info')} No scores, no wrong answers. Pass the phone around if you like.</p></div>`,`<button class="btn primary block" data-a="v2talkNext">Next card</button>`)}
function v2quietSheet(){const q=V2E.quiet[sheet.id]||{};
  if(q.err)return sheetShell('Quiet yes',`<div class="v2"><p class="v2lede" style="margin:0">${q.err==='not_checked_in'?'Quiet yes opens for guests who were checked in at the door.':'Quiet yes opens when the evening starts.'}</p></div>`);
  if(!q.list)return sheetShell('Quiet yes',`<div class="v2" style="padding:20px 0;text-align:center">${spinner('Loading')}</div>`);
  const reveal=q.list[0]&&q.list[0].reveal?new Date(q.list[0].reveal):null,open=!reveal||Date.now()<reveal.getTime();
  const mut=q.mutual||[];
  return sheetShell('Quiet yes',`<div class="v2"><h2 class="v2h" style="font-size:22px;margin:0">Who would you like to <em>see again?</em></h2>
   <p class="v2lede" style="margin:6px 0 12px">Only you see your answers. If you both say yes, we show you both ${reveal?'from '+esc(fmtTime(reveal))+' '+esc(fmtDay(reveal).long):'next morning'}. Nobody learns about a "no".</p>
   ${!open?(mut.length?`<div class="v2card" style="display:grid;gap:8px"><b>You both said yes</b>${mut.map(m=>`<button class="v2act" data-a="open" data-id="${m.id}"><span class="ibox">${ic('heart')}</span><span><b>${esc(m.first)}</b><small>Open the profile and send an interest</small></span>${ic('chev')}</button>`).join('')}</div>`:`<div class="v2card"><b>No mutual yes this time.</b><p class="v2lede" style="margin:4px 0 0">That is normal after one evening. Your matches and the next Mixer are waiting.</p></div>`):
    (q.list.length?q.list.map(p=>`<button class="v2qp${p.yes?' on':''}" data-a="v2quietTap" data-id="${p.id}">${p.photo&&urlOf(p.photo)?`<img src="${esc(urlOf(p.photo))}" alt="">`:`<span class="v2qi">${esc(initials(p.first))}</span>`}<span><b>${esc(p.first)}, ${p.age}</b><small>${flag(p.origin)||''} ${esc(p.origin||'')}</small></span><i>${ic('heart')}</i></button>`).join(''):`<p class="v2lede">Nobody else is checked in yet.</p>`)}
   <p class="v2note" style="margin-top:12px">${ic('lock')} Private by design. Your family sees nothing here.</p></div>`)}
async function v2quietLoad(eid){V2E.quiet[eid]={};render();
  try{const list=await API.rpc('quiet_people',{eid});await signPaths(list.map(x=>x.photo).filter(Boolean));let mutual=[];
    if(list[0]&&Date.now()>=Date.parse(list[0].reveal))mutual=await API.rpc('quiet_mutual',{eid});V2E.quiet[eid]={list,mutual}}
  catch(err){V2E.quiet[eid]={err:String((err&&(err.message||err.code))||'').includes('not_started')?'not_started':'not_checked_in'}}render()}
(function(){
  const _re=renderEvents;renderEvents=function(){const h=_re();if(!V2())return h;return h.replace('<div class="main-inner pad">','<div class="main-inner pad">'+v2evHero())};
  const _rv=renderEventView;renderEventView=function(id){const h=_rv(id);if(!V2()||!h)return h;const e=evById(id);const k='<div class="pad" style="display:grid;gap:14px;padding-block:16px 26px">';
    return h.replace(k,k+v2evExtras(e))};
  const _rs2=renderSheet;renderSheet=function(){if(sheet&&sheet.type==='v2talk')return v2talkSheet();if(sheet&&sheet.type==='v2quiet')return v2quietSheet();return _rs2()};
  Object.assign(A,{
    v2talk(){sheet={type:'v2talk'};render()},
    v2talkNext(){V2E.tt++;render()},
    v2quiet(el){const id=el.dataset.id;sheet={type:'v2quiet',id};v2quietLoad(id)},
    async v2quietTap(el){const eid=sheet.id,q=V2E.quiet[eid];const p=q&&q.list&&q.list.find(x=>x.id===el.dataset.id);if(!p)return;
      p.yes=!p.yes;render();try{await API.rpc('quiet_set',{eid,to_user:p.id,yes:p.yes})}catch(err){p.yes=!p.yes;render();toast('Quiet yes is closed for this evening.','info')}}
  });
})();

/* ---------- Restaurant link (team only) and Host your city (his ok 1 Nov 01:01, screens 25 and 26) ---------- */
(function(){
  const _rv=renderEventView;renderEventView=function(id){const h=_rv(id);if(!h||!(S.me&&S.me.isAdmin))return h;
    const k='<div class="pad" style="display:grid;gap:14px;padding-block:16px 26px">';
    return h.replace(k,k+`<button class="v2act v2" data-a="v2partner" data-id="${id}"><span class="ibox">${ic('home')}</span><span><b>Restaurant link (team only)</b><small>Private page with guest numbers and dinner count, no names</small></span>${ic('chev')}</button>`)};
  const _re=renderEvents;renderEvents=function(){const h=_re();return V2()?h.replace('data-a="hostAsk"','data-a="v2hostInfo"'):h};
  const _rs=renderSheet;renderSheet=function(){
    if(sheet&&sheet.type==='v2partner')return sheetShell('Restaurant link',`<div class="v2">${sheet.url?`<p class="v2lede" style="margin:0 0 10px">Send this to the restaurant. It shows only numbers: guests, parents, dinner choices and timings. It stops 2 days after the evening.</p>
      <div class="v2card" style="word-break:break-all;font-weight:800">${esc(sheet.url)}</div>`:sheet.err?`<p class="v2lede">${esc(sheet.err)}</p>`:`<div style="text-align:center;padding:16px">${spinner('Making the link')}</div>`}</div>`,
      sheet.url?`<button class="btn primary block" data-a="copyCode" data-k="${esc(sheet.url)}">${ic('copy')} Copy link</button>`:'');
    if(sheet&&sheet.type==='v2host')return sheetShell('Host Family Mixers',`<div class="v2"><h2 class="v2h" style="font-size:22px;margin:0">Host Family Mixers <em>in your city</em></h2>
      <p class="v2lede" style="margin:6px 0 12px">Warm, organised people who know their community. You welcome about 60 guests and their families, and keep the evening easy.</p>
      <div class="v2card" style="display:grid;gap:10px">${[['clock','One evening a month','About 5 hours with setup'],['shield','You are verified first','ID, roots and city, like every member'],['users','We give you everything','Guest list, table cards and the check-in app'],['sparkle','CA$100 for every event','Training included']].map(([i,a,b])=>`<div class="v2row" style="align-items:flex-start"><span class="ibox" style="width:34px;height:34px;border-radius:11px;display:grid;place-items:center;background:var(--rose-soft);color:var(--rose-deep);flex:none">${ic(i)}</span><div><b style="font-size:14px">${a}</b><small>${b}</small></div></div>`).join('')}</div></div>`,
      `<button class="btn primary block" data-a="hostAsk">${S.hostSent?'See my application':'Apply in 2 minutes'}</button>`);
    return _rs()};
  Object.assign(A,{
    async v2partner(el){const id=el.dataset.id;sheet={type:'v2partner',id};render();
      try{const t=await API.rpc('admin_partner_link',{eid:id});if(sheet&&sheet.type==='v2partner'){sheet.url=CFG.site+'partner.html?k='+t;render()}}
      catch(err){if(sheet&&sheet.type==='v2partner'){sheet.err='Could not make the link. Try again.';render()}}},
    v2hostInfo(){sheet={type:'v2host'};render()}
  });
})();

/* ---------- Match card: 3 rings Roots / Life plan / Nature with a "why" line (mock screen 14) ---------- */
function v2rings(p){const me=S.me;if(!me||!me.ans)return null;const c=compat(p);
  const ag=is=>is.reduce((s,i)=>{const d=Math.abs((me.ans[i]??1)-(p.ans[i]??1));return s+(d===0?1:d===1?.5:0)},0)/is.length;
  const pc=x=>Math.max(1,Math.min(99,Math.round(x*100)));
  return {roots:pc(c.roots*.7+c.loc*.3),life:pc(ag([0,1,2,3,8])*.8+c.pref*.2),nature:pc(ag([4,5,6,7])*.7+c.life*.3)}}
function v2ringRow(p){const r=v2rings(p);if(!r)return '';
  const one=(n,col,l,s)=>`<div class="v2ring"><span style="--p:${n}%;--c:${col}"><b>${n}%</b></span><em>${l}</em><small>${esc(s)}</small></div>`;
  const me=S.me,a=i=>QS[i].o[p.ans[i]]||'';
  const rootsSub=p.oc===me.oc?(p.t===me.t&&p.t?p.t:'Same roots'):(p.oc||'');
  return `<div class="v2rings v2">${one(r.roots,'var(--rose)','Roots',rootsSub)}${one(r.life,'var(--gold)','Life plan',(QS[8].o[p.ans[8]]||'').replace(/^Within/,'Marry within'))}${one(r.nature,'var(--good)','Nature',me.ans[5]===p.ans[5]?'Same weekends':(QS[5].o[p.ans[5]]||''))}</div>`}
(function(){
  const _card=card;card=function(p){const h=_card(p);if(!V2())return h;
    return h.replace('<ul class="nm-why">',v2ringRow(p)+'<ul class="nm-why">')};
})();

/* ---------- Reply to a part of a profile (mock screen 15) ---------- */
function v2replyOpts(p){const me=S.me,out=[];
  if(p.oc===me.oc&&p.os&&p.os===me.os)out.push(`We are both from ${p.os}!`);else if(p.oc===me.oc)out.push(`Another ${p.oc} family abroad, nice to see you here`);
  if(p.t&&p.t===me.t)out.push(`We could talk in ${p.t}`);
  const RP={0:['We both want to stay in our city','We are both open to moving within the country','We are both open to another country'],1:['Full careers for both of us, same here','Deciding careers together sounds right to me','Same view on home and career'],
   2:['Living with parents, same for me','A home near our parents, same here','Independent but close to family, same here'],3:['Kids early, same for me','Same pace on kids','I am also not sure yet about kids'],5:['Family weekends are my favourite too','Weekends with friends, same here','Travel weekends, same here']};
  for(const i of [0,3,1,2,5]){if(out.length>=3)break;const a=p.ans[i];if(me.ans[i]===a&&RP[i]&&RP[i][a])out.push(RP[i][a])}
  out.push('I would love to know more about you');return out.slice(0,4)}
function v2noteFrom(id){const i=(RAW.ints||[]).find(x=>x.from_user===id&&x.to_user===(S.me&&S.me.id)&&x.note);return i?i.note:''}
(function(){
  const _pv=renderProfileView;renderProfileView=function(id,isMe){const h=_pv(id,isMe);if(!V2()||isMe)return h;const p=byId(id);if(!p)return h;
    const k=`<div class="panel"><h3>About</h3><p class="notr">${esc(p.about)}</p></div>`;if(!h.includes(k))return h;
    const got=v2noteFrom(id);const st=S.interests[id];const cur=(S.v2note||{})[id]||'';
    const box=got?`<div class="panel v2 v2got"><p class="v2lb" style="margin:0 0 6px">${esc(p.first||'They')} replied to your profile</p><p class="v2q">“${esc(got)}”</p></div>`
      :(!st||st==='none')&&!locked(p)?`<div class="panel v2"><p class="v2lb" style="margin:0 0 8px">Reply to this · one tap</p><div class="v2chips">${v2replyOpts(p).map(o=>`<button type="button" class="v2chip${cur===o?' on':''}" data-a="v2note" data-id="${id}" data-v="${esc(o)}">${esc(o)}</button>`).join('')}</div>
        <p class="v2note" style="margin-top:8px">${ic('heart')} ${cur?'Sent together with your interest.':'Pick one, then send your interest. A reply is easier to answer than “hi”.'}</p></div>`:'';
    return h.replace(k,k+box)};
  const _int=A.interest;A.interest=async function(el){const id=el.dataset.id,note=V2()&&(S.v2note||{})[id];
    if(!note||S.interests[id]==='received'||needVerified()||!isGold())return _int.call(A,el);
    const p=byId(id);S.interests[id]='sent';S.passed=S.passed.filter(x=>x!==id);save();render();
    try{await API.insert('interests',{from_user:S.me.id,to_user:id,note:note.slice(0,140),note_on:'About'},{returning:false});toast(`Interest and your reply sent to ${p.first}.`,'heart')}
    catch(e){delete S.interests[id];render();fail(e)}};
  A.v2note=function(el){S.v2note=S.v2note||{};const id=el.dataset.id;S.v2note[id]=S.v2note[id]===el.dataset.v?'':el.dataset.v;render()};
})();

/* ---------- Family circle (mock screen 17): share people from your matches with family ---------- */
const FAM={list:null,busy:false};
function famLoad(){if(FAM.list||FAM.busy)return;FAM.busy=true;API.rpc('my_family_shares').then(r=>{FAM.list=r||[];FAM.busy=false;render()}).catch(()=>{FAM.list=[];FAM.busy=false})}
function famHas(id){return (FAM.list||[]).some(x=>x.id===id)}
function famBlock(){famLoad();const L=FAM.list||[];if(!L.length)return `<div class="panel v2"><p class="v2lb" style="margin:0 0 6px">Family circle</p><p class="v2lede" style="margin:0">Tap <b>Share with family</b> on anyone in your matches. Your family sees them on your private link and tells you 👍 or 🤔. They never talk to your matches.</p></div>`;
  return `<div class="panel v2"><div class="v2rowsp"><p class="v2lb" style="margin:0">Family circle · ${L.length} shared</p>${S.bioUntil?'':`<button class="v2pill" data-a="shareBio">Send link</button>`}</div>
   <div style="display:grid;gap:8px;margin-top:10px">${L.map(x=>{const p=byId(x.id);const nm=p?shown(p):'Member';const rs=x.reactions||[];
    return `<button class="v2famr" data-a="open" data-id="${x.id}">${p?avatar(p,'sm'):''}<span><b>${esc(nm)}${p?', '+p.age:''}</b><small>${rs.length?rs.slice(0,2).map(r=>`${r.reaction==='good'?'👍 Looks good':'🤔 Let’s talk'}${r.who?' · '+esc(r.who):''}`).join(' &nbsp; '):'No answer yet'}</small></span>${ic('chev')}</button>`}).join('')}</div>
   <p class="v2note" style="margin-top:8px">${ic('lock')} Family sees first name, age, work, roots and city only. No photos or contacts. You decide.</p></div>`}
(function(){
  const _me=renderMe;renderMe=function(){const h=_me();if(!V2())return h;const k='<button class="likes nm-bio" data-a="shareBio">';return h.includes(k)?h.replace(k,famBlock()+k):h};
  const _pv=renderProfileView;renderProfileView=function(id,isMe){const h=_pv(id,isMe);if(!V2()||isMe)return h;const p=byId(id);if(!p||locked(p)||!(p.v&&p.v.id&&p.v.selfie&&p.v.roots&&p.v.lives))return h;famLoad();
    const on=famHas(id);const btn=`<button class="v2act v2" data-a="v2fam" data-id="${id}" style="${on?'background:var(--good-soft,#E9F5EE);border-color:var(--good)':''}"><span class="ibox">${ic('users')}</span><span><b>${on?'Shared with your family':'Share with family'}</b><small>${on?'Tap to remove. Your family sees first name, age, work, roots and city.':'Your family sees safe facts on your private link and answers 👍 or 🤔'}</small></span>${ic(on?'check':'chev')}</button>`;
    const k='<div class="panel"><h3>About</h3>';return h.includes(k)?h.replace(k,btn+k):h};
  A.v2fam=async function(el){const id=el.dataset.id,on=!famHas(id);
    try{await API.rpc('family_share',{target:id,on_:on});FAM.list=null;famLoad();toast(on?'Shared with your family. Send them your biodata link from Me.':'Removed from your family circle.',on?'users':'check')}
    catch(e){toast(String((e&&(e.message||e.code))||'').includes('max_10')?'You can share up to 10 people. Remove one first.':'Could not share. Try again.','info')}};
})();

/* ---------- Live selfie ring + guided ID capture (mock screens 11 and 12) ----------
   Selfie: front camera, three short prompts (look straight, a little right, a little left) while the ring fills;
   the straight-ahead frame is kept. ID: back camera with a frame guide; after the tap we check light and
   sharpness on the phone and ask for a retake if needed. Falls back to the normal file picker when the
   camera is not allowed. Our team still checks every selfie and ID by hand. */
const CAM={on:false,mode:'',stream:null,step:0,checks:[],err:'',shot:null,timer:null};
const SELFIE_STEPS=['Look straight at the camera','Now turn a little to your right','Now a little to your left','Hold still…'];
function camLayer(){if(!CAM.on)return '';const sf=CAM.mode==='selfie';const pct=sf?Math.min(100,Math.round(CAM.step/3*100)):0;
  return `<div class="v2cam v2" role="dialog" aria-label="${sf?'Live selfie':'Scan your ID'}">
   <div class="v2cam-top"><span class="v2pill" style="background:rgba(255,255,255,.12);color:#fff">${ic(sf?'camera':'id')} ${sf?'Stamp 1 · Live selfie':'Stamp 1 · ID'}</span><button class="iconbtn" data-a="camClose" aria-label="Close" style="color:#fff">${ic('x')}</button></div>
   ${CAM.err?`<div class="v2cam-err"><p>${esc(CAM.err)}</p><span class="btn primary file">${ic(sf?'camera':'plus')}${sf?'Take a selfie instead':'Choose a photo instead'}<input type="file" accept="image/*" ${sf?'capture="user" data-file="selfie"':'data-file="id"'} aria-label="Choose photo"></span></div>`:
   sf?`<div class="v2ring-wrap"><svg viewBox="0 0 240 240" class="v2ring-svg"><circle cx="120" cy="120" r="112" fill="none" stroke="rgba(255,255,255,.15)" stroke-width="8"/><circle cx="120" cy="120" r="112" fill="none" stroke="#8FE0B5" stroke-width="8" stroke-linecap="round" stroke-dasharray="704" stroke-dashoffset="${704-704*pct/100}" transform="rotate(-90 120 120)"/></svg><video id="cam-v" playsinline muted autoplay class="v2cam-v sf"></video></div>
     <h2 class="v2h" style="color:#fff;text-align:center;margin-top:22px">${esc(SELFIE_STEPS[Math.min(CAM.step,3)])}</h2><p class="v2cam-s">${pct}% · keep your face inside the circle</p>`
   :`<div class="v2id-wrap"><video id="cam-v" playsinline muted autoplay class="v2cam-v"></video><i class="c1"></i><i class="c2"></i><i class="c3"></i><i class="c4"></i></div>
     <h2 class="v2h" style="color:#fff;text-align:center;margin-top:18px">Hold your ID <em style="color:#A8F0CF">inside the frame</em></h2>
     ${CAM.checks.length?`<div class="v2cam-ck">${CAM.checks.map(([ok,t])=>`<span class="${ok?'ok':'no'}">${ic(ok?'check':'x')}${esc(t)}</span>`).join('')}</div>`:'<p class="v2cam-s">Flat, all 4 corners visible, no glare</p>'}
     <button class="v2shut" data-a="camShot" aria-label="Take photo"><i></i></button>`}
   <p class="v2cam-f">${ic('lock')} ${sf?'Used only to match your ID. Never shown on your profile.':'Only our safety team sees it. Deleted 7 days after the check.'}</p></div>`}
async function camOpen(mode){CAM.on=true;CAM.mode=mode;CAM.step=0;CAM.checks=[];CAM.err='';render();
  try{if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)throw new Error('none');
    CAM.stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:mode==='selfie'?'user':'environment',width:{ideal:1280}},audio:false});
    const v=document.getElementById('cam-v');if(v){v.srcObject=CAM.stream;await v.play().catch(()=>{})}
    if(mode==='selfie')camSelfieRun()}
  catch(e){CAM.err=mode==='selfie'?'The camera is not allowed, so we cannot do the live check here.':'The camera is not allowed here.';render()}}
function camStop(){clearTimeout(CAM.timer);if(CAM.stream){CAM.stream.getTracks().forEach(t=>t.stop());CAM.stream=null}CAM.on=false}
function camFrame(maxW){const v=document.getElementById('cam-v');if(!v||!v.videoWidth)return null;const s=Math.min(1,maxW/v.videoWidth);
  const c=document.createElement('canvas');c.width=Math.round(v.videoWidth*s);c.height=Math.round(v.videoHeight*s);const x=c.getContext('2d');
  if(CAM.mode==='selfie'){x.translate(c.width,0);x.scale(-1,1)}x.drawImage(v,0,0,c.width,c.height);return c}
function camQuality(c){const x=c.getContext('2d'),w=Math.min(320,c.width),h=Math.round(c.height*w/c.width);const t=document.createElement('canvas');t.width=w;t.height=h;t.getContext('2d').drawImage(c,0,0,w,h);
  const d=t.getContext('2d').getImageData(0,0,w,h).data;let sum=0,lap=0,n=0;const g=i=>.299*d[i]+.587*d[i+1]+.114*d[i+2];
  for(let y=1;y<h-1;y+=2)for(let xx=1;xx<w-1;xx+=2){const i=(y*w+xx)*4;const v=g(i);sum+=v;const l=4*v-g(i-4)-g(i+4)-g(i-w*4)-g(i+w*4);lap+=l*l;n++}
  return {light:sum/n,sharp:lap/n}}
function camGive(c,kind){c.toBlob(b=>{if(!b)return;const f=new File([b],kind==='selfie'?'selfie.jpg':'id.jpg',{type:'image/jpeg'});
  const inp=document.createElement('input');inp.type='file';inp.dataset.file=kind;inp.style.display='none';app.appendChild(inp);
  try{const dt=new DataTransfer();dt.items.add(f);inp.files=dt.files;inp.dispatchEvent(new Event('change',{bubbles:true}))}catch(e){toast('Could not use the camera photo. Choose a photo instead.','info')}
  setTimeout(()=>inp.remove(),2000)},'image/jpeg',.9)}
function camSelfieRun(){let keep=null;const tick=()=>{if(!CAM.on)return;
  if(CAM.step===0){const c=camFrame(900);if(c)keep=c}
  CAM.step++;render();const v=document.getElementById('cam-v');if(v&&CAM.stream&&!v.srcObject){v.srcObject=CAM.stream;v.play().catch(()=>{})}
  if(CAM.step>=3){CAM.timer=setTimeout(()=>{if(!CAM.on)return;const c=keep||camFrame(900);camStop();render();if(c)camGive(c,'selfie')},700);return}
  CAM.timer=setTimeout(tick,1600)};CAM.timer=setTimeout(tick,1800)}
(function(){
  const _r=render;render=function(){_r();if(CAM.on){app.insertAdjacentHTML('beforeend',camLayer());const v=document.getElementById('cam-v');if(v&&CAM.stream){v.srcObject=CAM.stream;v.play().catch(()=>{})}}};
  Object.assign(A,{
    camSelfie(){camOpen('selfie')},camId(){camOpen('id')},
    camClose(){camStop();render()},
    camShot(){const c=camFrame(1800);if(!c)return;const q=camQuality(c);
      const ok=[[q.light>60&&q.light<235,q.light<=60?'Too dark: find more light':q.light>=235?'Too bright: avoid glare':'Good light'],[q.sharp>120,q.sharp>120?'Sharp':'A bit blurry: hold steady']];
      CAM.checks=ok;if(ok.every(x=>x[0])){camStop();render();camGive(c,'id')}else render()}
  });
  const _gb=goBack;goBack=function(){if(CAM.on){camStop();render();return true}return _gb()};
})();

/* ---------- Voice intro (mock screen 9): record up to 30 s, our team listens, then matches can play it ---------- */
const VPROMPTS=['A Sunday with me looks like…','My family is…','I am proud of…','Back home, I miss…'];
const VREC={rec:null,chunks:[],t0:0,timer:null,sec:0,blob:null,url:'',prompt:VPROMPTS[0],state:'idle',err:''};
const VOICE={me:undefined,of:{},urls:{}};
function vrecBox(where){const r=VREC;const has=!!r.blob;const mine=VOICE.me;
  return `<div class="v2card v2voice" data-w="${where}"><div class="v2rowsp"><b>${ic('mic')} Say hello in your voice</b><small class="v2pill" style="background:var(--sunk);color:var(--ink)">optional · 30 sec</small></div>
   <div class="v2chips" style="margin-top:8px">${VPROMPTS.map(p=>`<button type="button" class="v2chip${r.prompt===p?' on':''}" data-a="vPrompt" data-v="${esc(p)}">${esc(p)}</button>`).join('')}</div>
   ${r.err?`<p class="v2note" style="margin-top:8px">${ic('info')} ${esc(r.err)}</p>`:''}
   <div class="v2vrow">${r.state==='rec'?`<button class="v2mic on" data-a="vStop" aria-label="Stop"><i></i></button><span><b>Recording · 0:${String(r.sec).padStart(2,'0')}</b><small>Tap to stop. Stops by itself at 0:30.</small></span>`
     :has?`<audio controls src="${esc(r.url)}" preload="metadata"></audio>`
     :`<button class="v2mic" data-a="vStart" aria-label="Record">${ic('mic')}</button><span><b>Tap and talk</b><small>Speak about “${esc(r.prompt.replace('…',''))}”. No phone numbers or contacts.</small></span>`}</div>
   ${has&&r.state!=='rec'?`<div class="v2rowsp" style="margin-top:8px"><button class="btn ghost sm" data-a="vRedo">${ic('refresh')}Record again</button>${where==='me'?`<button class="btn primary sm" data-a="vSend">Send for a quick check</button>`:`<small class="v2note">${ic('check')} Sent when you finish</small>`}</div>`:''}
   ${where==='me'&&mine&&!has?`<p class="v2note" style="margin-top:8px">${mine.status==='approved'?`${ic('check')} Your voice intro is live on your profile.`:mine.status==='pending'?`${ic('clock')} Our team listens to it, usually within a day.`:`${ic('info')} Not approved${mine.note?': '+esc(mine.note):''}. Record a new one.`}</p>`:''}
   <p class="v2note" style="margin-top:6px">${ic('lock')} Only verified members you can see will hear it. Our team listens first.</p></div>`}
async function vStartRec(){const r=VREC;r.err='';
  try{const st=await navigator.mediaDevices.getUserMedia({audio:true});const mt=['audio/webm;codecs=opus','audio/mp4','audio/webm'].find(t=>window.MediaRecorder&&MediaRecorder.isTypeSupported&&MediaRecorder.isTypeSupported(t))||'';
    r.rec=new MediaRecorder(st,mt?{mimeType:mt}:undefined);r.chunks=[];r.rec.ondataavailable=e=>{if(e.data&&e.data.size)r.chunks.push(e.data)};
    r.rec.onstop=()=>{st.getTracks().forEach(t=>t.stop());clearInterval(r.timer);r.blob=new Blob(r.chunks,{type:r.rec.mimeType||'audio/webm'});r.url=URL.createObjectURL(r.blob);r.state='idle';if(r.sec<2){r.blob=null;r.err='That was very short. Try again and talk a little longer.'}if(S.draft)S.draft.voiceBlob=r.blob;render()};
    r.rec.start();r.state='rec';r.sec=0;r.t0=Date.now();r.timer=setInterval(()=>{r.sec=Math.floor((Date.now()-r.t0)/1000);if(r.sec>=30){r.rec.stop()}else render()},500);render()}
  catch(e){r.err='The microphone is not allowed here. You can add a voice intro later from Me.';render()}}
async function vUpload(blob,prompt,secs){const uid=API.userId();const ext=/mp4/.test(blob.type)?'m4a':'webm';const path=`${uid}/intro-${Date.now()}.${ext}`;
  await API.upload('voice',path,blob);await API.rpc('voice_save',{p:path,prm:prompt,secs:Math.max(1,Math.min(40,secs||1))});VOICE.me=undefined}
function vMeLoad(){if(VOICE.me!==undefined)return;VOICE.me=null;API.rpc('voice_of',{uid:API.userId()}).then(r=>{VOICE.me=r||null;render()}).catch(()=>{})}
function vOfLoad(id){if(VOICE.of[id]!==undefined)return;VOICE.of[id]=null;API.rpc('voice_of',{uid:id}).then(async r=>{VOICE.of[id]=r||0;if(r&&r.path){try{const u=await API.signMany('voice',[r.path],3600);VOICE.urls[id]=u[r.path]}catch(e){}}render()}).catch(()=>{VOICE.of[id]=0})}
(function(){
  /* sign-up: on the photo studio step, under "Pick 3" */
  const _su=renderSignupV2;renderSignupV2=function(){const h=_su();if(S.step===3&&(S.draft.v2b||'a')==='b'){const k='<p class="v2lb">Pick 3 that are so you</p>';return h.replace(k,vrecBox('su')+k)}return h};
  renderSignupV2.orig=_su.orig;
  /* after the profile is saved, send the voice intro */
  const _nx=A.suNext;A.suNext=async function(){const vb=S.draft&&S.draft.voiceBlob,pr=VREC.prompt,sec=VREC.sec;await _nx.call(A);
    if(vb&&S.screen==='app'){try{await vUpload(vb,pr,sec);VREC.blob=null;toast('Your voice intro is with our team for a quick listen.','check')}catch(e){}}};
  const _me=renderMe;renderMe=function(){const h=_me();if(!V2())return h;vMeLoad();const k='<button class="likes nm-bio" data-a="shareBio">';return h.includes(k)?h.replace(k,vrecBox('me')+k):h};
  const _pv=renderProfileView;renderProfileView=function(id,isMe){const h=_pv(id,isMe);if(!V2()||isMe)return h;vOfLoad(id);const v=VOICE.of[id],u=VOICE.urls[id];if(!v||!u)return h;
    const box=`<div class="panel v2"><p class="v2lb" style="margin:0 0 8px">${ic('mic')} Hear ${esc((byId(id)||{}).first||'them')}${v.prompt?' · '+esc(v.prompt):''}</p><audio controls preload="none" src="${esc(u)}" style="width:100%"></audio></div>`;
    const k='<div class="panel"><h3>About</h3>';return h.includes(k)?h.replace(k,box+k):h};
  Object.assign(A,{
    vPrompt(el){VREC.prompt=el.dataset.v;render()},vStart(){vStartRec()},vStop(){if(VREC.rec&&VREC.rec.state==='recording')VREC.rec.stop()},
    vRedo(){VREC.blob=null;VREC.url='';if(S.draft)S.draft.voiceBlob=null;render()},
    async vSend(el){if(!VREC.blob)return;el.disabled=true;try{await vUpload(VREC.blob,VREC.prompt,VREC.sec);VREC.blob=null;toast('Sent. Our team listens to it, usually within a day.','check');vMeLoad()}catch(e){el.disabled=false;toast('Could not send. Try again.','info')}render()}
  });
  /* team: voice intros to check, at the top of the review queue */
  const _ra=renderAdmin;renderAdmin=function(){const h=_ra();const a=S.admin||{};if(a.voices===undefined){a.voices=null;S.admin=a;
      API.rpc('admin_voice_queue').then(async L=>{a.voices=L||[];const u=L&&L.length?await API.signMany('voice',L.map(x=>x.path),3600).catch(()=>({})):{};a.vurls=u;render()}).catch(()=>{a.voices=[]})}
    const L=a.voices||[];if(!L.length)return h;
    const box=`<div class="panel v2"><h3>Voice intros to check (${L.length})</h3><p class="hint">Approve only if there is no phone number, contact, money talk or anything rude.</p>${L.map(x=>`<div class="v2card" style="margin-top:8px"><b>${esc(x.full_name)}</b> <small class="hint">${esc(x.prompt||'')} · ${x.seconds||'?'} s</small><audio controls preload="none" src="${esc((a.vurls||{})[x.path]||'')}" style="width:100%;margin-top:6px"></audio><div class="v2rowsp" style="margin-top:6px"><button class="btn ghost sm" data-a="vAdm" data-id="${x.user_id}" data-ok="0">Not ok</button><button class="btn primary sm" data-a="vAdm" data-id="${x.user_id}" data-ok="1">Approve</button></div></div>`).join('')}</div>`;
    const k='id="view-scroll"><div class="pad" style="display:grid;gap:14px;padding-block:16px 26px">';return h.includes(k)?h.replace(k,k+box):h};
  A.vAdm=async function(el){const ok=el.dataset.ok==='1';try{await API.rpc('admin_voice',{uid:el.dataset.id,ok,why:ok?null:'Please record again without contact details.'});S.admin.voices=S.admin.voices.filter(x=>x.user_id!==el.dataset.id);render();toast(ok?'Voice intro approved.':'Sent back.','check')}catch(e){toast('Could not save. Try again.','info')}};
})();

/* ---------- Safe talk (mock screen 16): privacy line, scam shield, and plan a call in both time zones ---------- */
function tzOfP(p){return TZCITY[p.cityName||p.city]||TZC[p.country]||undefined}
function hourIn(d,tz){try{return +new Intl.DateTimeFormat('en-US',{timeZone:tz,hour:'numeric',hourCycle:'h23'}).format(d)}catch(e){return d.getHours()}}
function callSlots(theirs){const out=[],now=new Date();const ok=h=>h>=9&&h<=21;
  for(let d=1;d<=10&&out.length<6;d++){for(const h of [19,20,18,11,16,9,21,8,22,7,13]){const s=new Date(now);s.setDate(now.getDate()+d);s.setHours(h,0,0,0);
    if(ok(s.getHours())&&(!theirs||ok(hourIn(s,theirs)))){out.push(s);break}}}
  if(!out.length){for(let d=1;d<=6;d++){const s=new Date(now);s.setDate(now.getDate()+d);s.setHours(19,0,0,0);out.push(s)}}return out}
function fmtSlot(d,tz){try{return d.toLocaleString('en-US',{timeZone:tz,weekday:'short',day:'numeric',month:'short',hour:'numeric',minute:'2-digit'})}catch(e){return d.toLocaleString('en-US',{weekday:'short',hour:'numeric',minute:'2-digit'})}}
(function(){
  const _cv=renderChatView;renderChatView=function(id){const h=_cv(id);if(!V2()||!canChat(id))return h;const p=byId(id);
    const top=`<div class="v2safe v2"><span>${ic('lock')} Your numbers stay private</span><span>${ic('shield')} Scam shield on</span><button class="v2pill" data-a="callPlan" data-id="${id}">${ic('video')} Plan a call</button></div>`;
    const k='<div class="scroll" id="chat-scroll">';return h.replace(k,top+k)};
  const _rs=renderSheet;renderSheet=function(){if(!sheet||sheet.type!=='callPlan')return _rs();const p=byId(sheet.id);if(!p)return _rs();
    const mine=Intl.DateTimeFormat().resolvedOptions().timeZone,theirs=tzOfP(p);const sl=callSlots(theirs);
    return sheetShell('Plan a video call',`<div class="v2"><p class="v2lede" style="margin:0 0 10px">Times that are between 9 am and 9 pm for both of you. Pick one. We send ${esc(p.first||'them')} a message with the time in both your time zones. Share a video link only when you both are ready, and never move to a chat outside NeuMarry before you have met on video.</p>
     <div style="display:grid;gap:8px">${sl.map((s,i)=>`<button class="v2qp${sheet.pick===i?' on':''}" data-a="callPick" data-i="${i}"><span><b>${esc(fmtSlot(s,mine))}</b><small>${theirs&&theirs!==mine?`${esc(p.first||'Them')}: ${esc(fmtSlot(s,theirs))}`:'Same time zone'}</small></span><i>${ic('check')}</i></button>`).join('')}</div></div>`,
     `<button class="btn primary block" data-a="callSend"${sheet.pick===undefined?' disabled':''}>Send this time</button>`)};
  Object.assign(A,{
    callPlan(el){sheet={type:'callPlan',id:el.dataset.id};render()},
    callPick(el){sheet.pick=+el.dataset.i;render()},
    async callSend(){const p=byId(sheet.id);if(!p||sheet.pick===undefined)return;const mine=Intl.DateTimeFormat().resolvedOptions().timeZone,theirs=tzOfP(p);const s=callSlots(theirs)[sheet.pick];
      const x=`Would you like a video call on ${fmtSlot(s,mine)} my time${theirs&&theirs!==mine?` (${fmtSlot(s,theirs)} your time)`:''}?`;
      const id=sheet.id;sheet=null;render();const ci=document.getElementById('chat-in');if(ci){ci.value=x;A.send({dataset:{id}})}}
  });
})();

/* ---------- Booking and ticket, new look (mock screens 22 + 23) ---------- */
(function(){
  const _rs=renderSheet;renderSheet=function(){const h=_rs();if(!V2()||!sheet||sheet.type!=='book')return h;return h.replace('<div class="sheet"','<div class="sheet v2book"')};
  const _tp=ticketPanel;ticketPanel=function(e){const h=_tp(e);if(!V2())return h;const t=TICKET&&TICKET.eid===e.id?TICKET.d:null;
    if(!t||t.error||t.checked_in_at)return h.replace('class="panel ticket','class="panel ticket v2tk');
    const rv=e.my||{};const meal=MEALS[rv.meal]||rv.meal||'';const par=(rv.parents||[]);
    return `<div class="v2tkt v2"><span class="v2pill" style="background:rgba(255,255,255,.12);color:#fff">${ic('sparkle')} ${esc(fmtDay(e.date,e.tz).long)} · ${esc(e.time)}</span>
     <h3>See you there, <em>${esc((S.me&&S.me.name||'').split(' ')[0])}</em></h3>
     <div class="v2tkt-q">${h.match(/<div class="qrbox"[\s\S]*?<\/p>/)?h.match(/<div class="qrbox"[\s\S]*?<\/p>/)[0]:''}</div>
     <div class="v2tkt-g">${[['Guests',par.length?`You + ${par.length}`:'You'],['Dinner',meal||'Included'],['Doors open',e.time]].map(([a,b])=>`<div><small>${a}</small><b>${esc(b)}</b></div>`).join('')}</div>
     <p class="v2note" style="color:rgba(255,255,255,.75)">${ic('lock')} A screenshot will not work. Show this screen at the door.</p></div>`};
})();

/* host check-in, new look (mock screen 24) */
(function(){const _h=renderHostView;renderHostView=function(eid){const h=_h(eid);return V2()?h.replace('<div class="view" role="dialog" aria-label="Check-in">','<div class="view v2host" role="dialog" aria-label="Check-in">'):h}})();

/* ---------- App look like the website (his ok 1 Nov 16:35 on mock handoff/mocks/app-look) ----------
   Founder accounts first: welcome map (website world map, flying heart, "tap your flag" chips), plum top band on
   Matches, plum "nearly live" reveal and plum event ticket. Reading screens (profiles, chat) stay cream.
   A device remembers it once a founder has signed in there (nm.look2), like the earlier v2 preview. */
function LOOK2(){try{if(/127\.0\.0\.1/.test(CFG.url||'')&&localStorage.getItem('nm.look2test')==='0')return false;return true}catch(e){return true}}
const JM_SVG="<svg class=\"jm-svg\" viewBox=\"0 0 700 260\" aria-hidden=\"true\"><path class=\"jm-land\" d=\"M221.0 9.2h0M226.2 9.2h0M231.4 9.2h0M236.6 9.2h0M241.8 9.2h0M247.0 9.2h0M252.2 9.2h0M257.4 9.2h0M262.6 9.2h0M267.8 9.2h0M273.0 9.2h0M278.2 9.2h0M283.4 9.2h0M288.6 9.2h0M293.8 9.2h0M299.0 9.2h0M527.8 9.2h0M533.0 9.2h0M538.2 9.2h0M543.4 9.2h0M548.6 9.2h0M553.8 9.2h0M176.8 14.4h0M228.8 14.4h0M234.0 14.4h0M239.2 14.4h0M244.4 14.4h0M249.6 14.4h0M254.8 14.4h0M260.0 14.4h0M265.2 14.4h0M270.4 14.4h0M275.6 14.4h0M280.8 14.4h0M286.0 14.4h0M291.2 14.4h0M296.4 14.4h0M483.6 14.4h0M488.8 14.4h0M494.0 14.4h0M499.2 14.4h0M504.4 14.4h0M509.6 14.4h0M514.8 14.4h0M520.0 14.4h0M525.2 14.4h0M530.4 14.4h0M535.6 14.4h0M540.8 14.4h0M546.0 14.4h0M551.2 14.4h0M556.4 14.4h0M561.6 14.4h0M566.8 14.4h0M572.0 14.4h0M577.2 14.4h0M96.2 19.6h0M101.4 19.6h0M106.6 19.6h0M111.8 19.6h0M117.0 19.6h0M122.2 19.6h0M127.4 19.6h0M132.6 19.6h0M137.8 19.6h0M143.0 19.6h0M148.2 19.6h0M153.4 19.6h0M158.6 19.6h0M163.8 19.6h0M169.0 19.6h0M174.2 19.6h0M179.4 19.6h0M184.6 19.6h0M189.8 19.6h0M195.0 19.6h0M231.4 19.6h0M236.6 19.6h0M241.8 19.6h0M247.0 19.6h0M252.2 19.6h0M257.4 19.6h0M262.6 19.6h0M267.8 19.6h0M273.0 19.6h0M278.2 19.6h0M283.4 19.6h0M288.6 19.6h0M293.8 19.6h0M387.4 19.6h0M392.6 19.6h0M397.8 19.6h0M403.0 19.6h0M470.6 19.6h0M475.8 19.6h0M481.0 19.6h0M486.2 19.6h0M491.4 19.6h0M496.6 19.6h0M501.8 19.6h0M507.0 19.6h0M512.2 19.6h0M517.4 19.6h0M522.6 19.6h0M527.8 19.6h0M533.0 19.6h0M538.2 19.6h0M543.4 19.6h0M548.6 19.6h0M553.8 19.6h0M559.0 19.6h0M564.2 19.6h0M569.4 19.6h0M574.6 19.6h0M579.8 19.6h0M585.0 19.6h0M590.2 19.6h0M595.4 19.6h0M600.6 19.6h0M605.8 19.6h0M611.0 19.6h0M616.2 19.6h0M621.4 19.6h0M626.6 19.6h0M631.8 19.6h0M637.0 19.6h0M642.2 19.6h0M647.4 19.6h0M652.6 19.6h0M657.8 19.6h0M663.0 19.6h0M668.2 19.6h0M10.4 24.8h0M15.6 24.8h0M20.8 24.8h0M26.0 24.8h0M31.2 24.8h0M36.4 24.8h0M41.6 24.8h0M46.8 24.8h0M52.0 24.8h0M57.2 24.8h0M62.4 24.8h0M67.6 24.8h0M72.8 24.8h0M78.0 24.8h0M83.2 24.8h0M88.4 24.8h0M93.6 24.8h0M98.8 24.8h0M104.0 24.8h0M109.2 24.8h0M114.4 24.8h0M119.6 24.8h0M124.8 24.8h0M130.0 24.8h0M135.2 24.8h0M140.4 24.8h0M145.6 24.8h0M150.8 24.8h0M156.0 24.8h0M161.2 24.8h0M166.4 24.8h0M171.6 24.8h0M176.8 24.8h0M182.0 24.8h0M187.2 24.8h0M192.4 24.8h0M197.6 24.8h0M202.8 24.8h0M208.0 24.8h0M234.0 24.8h0M239.2 24.8h0M244.4 24.8h0M249.6 24.8h0M254.8 24.8h0M260.0 24.8h0M265.2 24.8h0M270.4 24.8h0M275.6 24.8h0M374.4 24.8h0M379.6 24.8h0M384.8 24.8h0M390.0 24.8h0M395.2 24.8h0M400.4 24.8h0M405.6 24.8h0M410.8 24.8h0M416.0 24.8h0M421.2 24.8h0M426.4 24.8h0M431.6 24.8h0M436.8 24.8h0M442.0 24.8h0M447.2 24.8h0M452.4 24.8h0M457.6 24.8h0M462.8 24.8h0M468.0 24.8h0M473.2 24.8h0M478.4 24.8h0M483.6 24.8h0M488.8 24.8h0M494.0 24.8h0M499.2 24.8h0M504.4 24.8h0M509.6 24.8h0M514.8 24.8h0M520.0 24.8h0M525.2 24.8h0M530.4 24.8h0M535.6 24.8h0M540.8 24.8h0M546.0 24.8h0M551.2 24.8h0M556.4 24.8h0M561.6 24.8h0M566.8 24.8h0M572.0 24.8h0M577.2 24.8h0M582.4 24.8h0M587.6 24.8h0M592.8 24.8h0M598.0 24.8h0M603.2 24.8h0M608.4 24.8h0M613.6 24.8h0M618.8 24.8h0M624.0 24.8h0M629.2 24.8h0M634.4 24.8h0M639.6 24.8h0M644.8 24.8h0M650.0 24.8h0M655.2 24.8h0M660.4 24.8h0M665.6 24.8h0M670.8 24.8h0M676.0 24.8h0M681.2 24.8h0M686.4 24.8h0M691.6 24.8h0M696.8 24.8h0M7.8 30.0h0M13.0 30.0h0M18.2 30.0h0M23.4 30.0h0M28.6 30.0h0M33.8 30.0h0M39.0 30.0h0M44.2 30.0h0M49.4 30.0h0M54.6 30.0h0M59.8 30.0h0M65.0 30.0h0M70.2 30.0h0M75.4 30.0h0M80.6 30.0h0M85.8 30.0h0M91.0 30.0h0M96.2 30.0h0M101.4 30.0h0M106.6 30.0h0M111.8 30.0h0M117.0 30.0h0M122.2 30.0h0M127.4 30.0h0M132.6 30.0h0M137.8 30.0h0M143.0 30.0h0M148.2 30.0h0M153.4 30.0h0M158.6 30.0h0M163.8 30.0h0M169.0 30.0h0M174.2 30.0h0M179.4 30.0h0M184.6 30.0h0M189.8 30.0h0M195.0 30.0h0M200.2 30.0h0M205.4 30.0h0M210.6 30.0h0M215.8 30.0h0M236.6 30.0h0M241.8 30.0h0M247.0 30.0h0M252.2 30.0h0M257.4 30.0h0M293.8 30.0h0M299.0 30.0h0M304.2 30.0h0M309.4 30.0h0M361.4 30.0h0M366.6 30.0h0M371.8 30.0h0M377.0 30.0h0M382.2 30.0h0M387.4 30.0h0M392.6 30.0h0M397.8 30.0h0M403.0 30.0h0M408.2 30.0h0M413.4 30.0h0M418.6 30.0h0M423.8 30.0h0M429.0 30.0h0M434.2 30.0h0M439.4 30.0h0M444.6 30.0h0M449.8 30.0h0M455.0 30.0h0M460.2 30.0h0M465.4 30.0h0M470.6 30.0h0M475.8 30.0h0M481.0 30.0h0M486.2 30.0h0M491.4 30.0h0M496.6 30.0h0M501.8 30.0h0M507.0 30.0h0M512.2 30.0h0M517.4 30.0h0M522.6 30.0h0M527.8 30.0h0M533.0 30.0h0M538.2 30.0h0M543.4 30.0h0M548.6 30.0h0M553.8 30.0h0M559.0 30.0h0M564.2 30.0h0M569.4 30.0h0M574.6 30.0h0M579.8 30.0h0M585.0 30.0h0M590.2 30.0h0M595.4 30.0h0M600.6 30.0h0M605.8 30.0h0M611.0 30.0h0M616.2 30.0h0M621.4 30.0h0M626.6 30.0h0M631.8 30.0h0M637.0 30.0h0M642.2 30.0h0M647.4 30.0h0M652.6 30.0h0M657.8 30.0h0M663.0 30.0h0M668.2 30.0h0M673.4 30.0h0M678.6 30.0h0M683.8 30.0h0M689.0 30.0h0M694.2 30.0h0M699.4 30.0h0M10.4 35.2h0M15.6 35.2h0M20.8 35.2h0M26.0 35.2h0M31.2 35.2h0M36.4 35.2h0M41.6 35.2h0M46.8 35.2h0M52.0 35.2h0M57.2 35.2h0M62.4 35.2h0M67.6 35.2h0M72.8 35.2h0M78.0 35.2h0M83.2 35.2h0M88.4 35.2h0M93.6 35.2h0M98.8 35.2h0M104.0 35.2h0M109.2 35.2h0M114.4 35.2h0M119.6 35.2h0M124.8 35.2h0M130.0 35.2h0M135.2 35.2h0M140.4 35.2h0M145.6 35.2h0M150.8 35.2h0M156.0 35.2h0M161.2 35.2h0M166.4 35.2h0M171.6 35.2h0M176.8 35.2h0M182.0 35.2h0M187.2 35.2h0M192.4 35.2h0M197.6 35.2h0M202.8 35.2h0M208.0 35.2h0M213.2 35.2h0M234.0 35.2h0M239.2 35.2h0M244.4 35.2h0M249.6 35.2h0M254.8 35.2h0M353.6 35.2h0M358.8 35.2h0M364.0 35.2h0M369.2 35.2h0M374.4 35.2h0M379.6 35.2h0M384.8 35.2h0M390.0 35.2h0M395.2 35.2h0M400.4 35.2h0M405.6 35.2h0M410.8 35.2h0M416.0 35.2h0M421.2 35.2h0M426.4 35.2h0M431.6 35.2h0M436.8 35.2h0M442.0 35.2h0M447.2 35.2h0M452.4 35.2h0M457.6 35.2h0M462.8 35.2h0M468.0 35.2h0M473.2 35.2h0M478.4 35.2h0M483.6 35.2h0M488.8 35.2h0M494.0 35.2h0M499.2 35.2h0M504.4 35.2h0M509.6 35.2h0M514.8 35.2h0M520.0 35.2h0M525.2 35.2h0M530.4 35.2h0M535.6 35.2h0M540.8 35.2h0M546.0 35.2h0M551.2 35.2h0M556.4 35.2h0M561.6 35.2h0M566.8 35.2h0M572.0 35.2h0M577.2 35.2h0M582.4 35.2h0M587.6 35.2h0M592.8 35.2h0M598.0 35.2h0M603.2 35.2h0M608.4 35.2h0M613.6 35.2h0M618.8 35.2h0M624.0 35.2h0M629.2 35.2h0M634.4 35.2h0M639.6 35.2h0M644.8 35.2h0M650.0 35.2h0M655.2 35.2h0M660.4 35.2h0M665.6 35.2h0M670.8 35.2h0M676.0 35.2h0M681.2 35.2h0M13.0 40.4h0M18.2 40.4h0M23.4 40.4h0M28.6 40.4h0M33.8 40.4h0M39.0 40.4h0M44.2 40.4h0M49.4 40.4h0M54.6 40.4h0M65.0 40.4h0M70.2 40.4h0M75.4 40.4h0M80.6 40.4h0M85.8 40.4h0M91.0 40.4h0M96.2 40.4h0M101.4 40.4h0M106.6 40.4h0M111.8 40.4h0M117.0 40.4h0M122.2 40.4h0M127.4 40.4h0M132.6 40.4h0M137.8 40.4h0M143.0 40.4h0M148.2 40.4h0M153.4 40.4h0M158.6 40.4h0M163.8 40.4h0M169.0 40.4h0M174.2 40.4h0M179.4 40.4h0M184.6 40.4h0M189.8 40.4h0M195.0 40.4h0M200.2 40.4h0M205.4 40.4h0M210.6 40.4h0M215.8 40.4h0M351.0 40.4h0M356.2 40.4h0M361.4 40.4h0M366.6 40.4h0M371.8 40.4h0M377.0 40.4h0M382.2 40.4h0M387.4 40.4h0M392.6 40.4h0M397.8 40.4h0M403.0 40.4h0M408.2 40.4h0M413.4 40.4h0M418.6 40.4h0M423.8 40.4h0M429.0 40.4h0M434.2 40.4h0M439.4 40.4h0M444.6 40.4h0M449.8 40.4h0M455.0 40.4h0M460.2 40.4h0M465.4 40.4h0M470.6 40.4h0M475.8 40.4h0M481.0 40.4h0M486.2 40.4h0M491.4 40.4h0M496.6 40.4h0M501.8 40.4h0M507.0 40.4h0M512.2 40.4h0M517.4 40.4h0M522.6 40.4h0M527.8 40.4h0M533.0 40.4h0M538.2 40.4h0M543.4 40.4h0M548.6 40.4h0M553.8 40.4h0M559.0 40.4h0M564.2 40.4h0M569.4 40.4h0M574.6 40.4h0M579.8 40.4h0M585.0 40.4h0M590.2 40.4h0M595.4 40.4h0M600.6 40.4h0M605.8 40.4h0M611.0 40.4h0M616.2 40.4h0M621.4 40.4h0M626.6 40.4h0M631.8 40.4h0M637.0 40.4h0M642.2 40.4h0M647.4 40.4h0M652.6 40.4h0M657.8 40.4h0M663.0 40.4h0M20.8 45.6h0M26.0 45.6h0M31.2 45.6h0M72.8 45.6h0M78.0 45.6h0M83.2 45.6h0M88.4 45.6h0M93.6 45.6h0M98.8 45.6h0M104.0 45.6h0M109.2 45.6h0M114.4 45.6h0M119.6 45.6h0M124.8 45.6h0M130.0 45.6h0M135.2 45.6h0M140.4 45.6h0M145.6 45.6h0M150.8 45.6h0M156.0 45.6h0M161.2 45.6h0M166.4 45.6h0M171.6 45.6h0M176.8 45.6h0M182.0 45.6h0M187.2 45.6h0M192.4 45.6h0M197.6 45.6h0M202.8 45.6h0M208.0 45.6h0M213.2 45.6h0M218.4 45.6h0M332.8 45.6h0M358.8 45.6h0M364.0 45.6h0M369.2 45.6h0M374.4 45.6h0M379.6 45.6h0M384.8 45.6h0M390.0 45.6h0M395.2 45.6h0M400.4 45.6h0M405.6 45.6h0M410.8 45.6h0M416.0 45.6h0M421.2 45.6h0M426.4 45.6h0M431.6 45.6h0M436.8 45.6h0M442.0 45.6h0M447.2 45.6h0M452.4 45.6h0M457.6 45.6h0M462.8 45.6h0M468.0 45.6h0M473.2 45.6h0M478.4 45.6h0M483.6 45.6h0M488.8 45.6h0M494.0 45.6h0M499.2 45.6h0M504.4 45.6h0M509.6 45.6h0M514.8 45.6h0M520.0 45.6h0M525.2 45.6h0M530.4 45.6h0M535.6 45.6h0M540.8 45.6h0M546.0 45.6h0M551.2 45.6h0M556.4 45.6h0M561.6 45.6h0M566.8 45.6h0M572.0 45.6h0M577.2 45.6h0M582.4 45.6h0M587.6 45.6h0M592.8 45.6h0M598.0 45.6h0M603.2 45.6h0M608.4 45.6h0M613.6 45.6h0M618.8 45.6h0M634.4 45.6h0M639.6 45.6h0M644.8 45.6h0M650.0 45.6h0M655.2 45.6h0M660.4 45.6h0M85.8 50.8h0M91.0 50.8h0M96.2 50.8h0M101.4 50.8h0M106.6 50.8h0M111.8 50.8h0M117.0 50.8h0M122.2 50.8h0M127.4 50.8h0M132.6 50.8h0M137.8 50.8h0M143.0 50.8h0M148.2 50.8h0M153.4 50.8h0M158.6 50.8h0M163.8 50.8h0M169.0 50.8h0M174.2 50.8h0M179.4 50.8h0M184.6 50.8h0M189.8 50.8h0M195.0 50.8h0M200.2 50.8h0M205.4 50.8h0M210.6 50.8h0M215.8 50.8h0M221.0 50.8h0M325.0 50.8h0M335.4 50.8h0M361.4 50.8h0M366.6 50.8h0M371.8 50.8h0M377.0 50.8h0M382.2 50.8h0M387.4 50.8h0M392.6 50.8h0M397.8 50.8h0M403.0 50.8h0M408.2 50.8h0M413.4 50.8h0M418.6 50.8h0M423.8 50.8h0M429.0 50.8h0M434.2 50.8h0M439.4 50.8h0M444.6 50.8h0M449.8 50.8h0M455.0 50.8h0M460.2 50.8h0M465.4 50.8h0M470.6 50.8h0M475.8 50.8h0M481.0 50.8h0M486.2 50.8h0M491.4 50.8h0M496.6 50.8h0M501.8 50.8h0M507.0 50.8h0M512.2 50.8h0M517.4 50.8h0M522.6 50.8h0M527.8 50.8h0M533.0 50.8h0M538.2 50.8h0M543.4 50.8h0M548.6 50.8h0M553.8 50.8h0M559.0 50.8h0M564.2 50.8h0M569.4 50.8h0M574.6 50.8h0M579.8 50.8h0M585.0 50.8h0M590.2 50.8h0M595.4 50.8h0M600.6 50.8h0M605.8 50.8h0M611.0 50.8h0M647.4 50.8h0M652.6 50.8h0M657.8 50.8h0M88.4 56.0h0M93.6 56.0h0M98.8 56.0h0M104.0 56.0h0M109.2 56.0h0M114.4 56.0h0M119.6 56.0h0M124.8 56.0h0M130.0 56.0h0M135.2 56.0h0M140.4 56.0h0M145.6 56.0h0M150.8 56.0h0M156.0 56.0h0M161.2 56.0h0M166.4 56.0h0M171.6 56.0h0M176.8 56.0h0M182.0 56.0h0M187.2 56.0h0M192.4 56.0h0M197.6 56.0h0M202.8 56.0h0M208.0 56.0h0M213.2 56.0h0M218.4 56.0h0M223.6 56.0h0M228.8 56.0h0M322.4 56.0h0M327.6 56.0h0M332.8 56.0h0M338.0 56.0h0M348.4 56.0h0M353.6 56.0h0M358.8 56.0h0M364.0 56.0h0M369.2 56.0h0M374.4 56.0h0M379.6 56.0h0M384.8 56.0h0M390.0 56.0h0M395.2 56.0h0M400.4 56.0h0M405.6 56.0h0M410.8 56.0h0M416.0 56.0h0M421.2 56.0h0M426.4 56.0h0M431.6 56.0h0M436.8 56.0h0M442.0 56.0h0M447.2 56.0h0M452.4 56.0h0M457.6 56.0h0M462.8 56.0h0M468.0 56.0h0M473.2 56.0h0M478.4 56.0h0M483.6 56.0h0M488.8 56.0h0M494.0 56.0h0M499.2 56.0h0M504.4 56.0h0M509.6 56.0h0M514.8 56.0h0M520.0 56.0h0M525.2 56.0h0M530.4 56.0h0M535.6 56.0h0M540.8 56.0h0M546.0 56.0h0M551.2 56.0h0M556.4 56.0h0M561.6 56.0h0M566.8 56.0h0M572.0 56.0h0M577.2 56.0h0M582.4 56.0h0M587.6 56.0h0M592.8 56.0h0M598.0 56.0h0M603.2 56.0h0M608.4 56.0h0M613.6 56.0h0M91.0 61.2h0M96.2 61.2h0M101.4 61.2h0M106.6 61.2h0M111.8 61.2h0M117.0 61.2h0M122.2 61.2h0M127.4 61.2h0M132.6 61.2h0M137.8 61.2h0M143.0 61.2h0M148.2 61.2h0M153.4 61.2h0M158.6 61.2h0M163.8 61.2h0M169.0 61.2h0M174.2 61.2h0M179.4 61.2h0M184.6 61.2h0M189.8 61.2h0M195.0 61.2h0M200.2 61.2h0M205.4 61.2h0M210.6 61.2h0M215.8 61.2h0M221.0 61.2h0M340.6 61.2h0M345.8 61.2h0M351.0 61.2h0M356.2 61.2h0M361.4 61.2h0M366.6 61.2h0M371.8 61.2h0M377.0 61.2h0M382.2 61.2h0M387.4 61.2h0M392.6 61.2h0M397.8 61.2h0M403.0 61.2h0M408.2 61.2h0M413.4 61.2h0M418.6 61.2h0M423.8 61.2h0M429.0 61.2h0M434.2 61.2h0M439.4 61.2h0M444.6 61.2h0M449.8 61.2h0M455.0 61.2h0M460.2 61.2h0M465.4 61.2h0M470.6 61.2h0M475.8 61.2h0M481.0 61.2h0M486.2 61.2h0M491.4 61.2h0M496.6 61.2h0M501.8 61.2h0M507.0 61.2h0M512.2 61.2h0M517.4 61.2h0M522.6 61.2h0M527.8 61.2h0M533.0 61.2h0M538.2 61.2h0M543.4 61.2h0M548.6 61.2h0M553.8 61.2h0M559.0 61.2h0M564.2 61.2h0M569.4 61.2h0M574.6 61.2h0M579.8 61.2h0M585.0 61.2h0M590.2 61.2h0M595.4 61.2h0M600.6 61.2h0M605.8 61.2h0M611.0 61.2h0M616.2 61.2h0M93.6 66.4h0M98.8 66.4h0M104.0 66.4h0M109.2 66.4h0M114.4 66.4h0M119.6 66.4h0M124.8 66.4h0M130.0 66.4h0M135.2 66.4h0M140.4 66.4h0M145.6 66.4h0M150.8 66.4h0M156.0 66.4h0M161.2 66.4h0M166.4 66.4h0M171.6 66.4h0M176.8 66.4h0M182.0 66.4h0M187.2 66.4h0M192.4 66.4h0M197.6 66.4h0M202.8 66.4h0M208.0 66.4h0M213.2 66.4h0M332.8 66.4h0M338.0 66.4h0M343.2 66.4h0M348.4 66.4h0M353.6 66.4h0M358.8 66.4h0M364.0 66.4h0M369.2 66.4h0M374.4 66.4h0M379.6 66.4h0M384.8 66.4h0M390.0 66.4h0M395.2 66.4h0M400.4 66.4h0M405.6 66.4h0M410.8 66.4h0M416.0 66.4h0M421.2 66.4h0M426.4 66.4h0M431.6 66.4h0M436.8 66.4h0M442.0 66.4h0M447.2 66.4h0M452.4 66.4h0M457.6 66.4h0M462.8 66.4h0M468.0 66.4h0M473.2 66.4h0M478.4 66.4h0M483.6 66.4h0M488.8 66.4h0M494.0 66.4h0M499.2 66.4h0M504.4 66.4h0M509.6 66.4h0M514.8 66.4h0M520.0 66.4h0M525.2 66.4h0M530.4 66.4h0M535.6 66.4h0M540.8 66.4h0M546.0 66.4h0M551.2 66.4h0M556.4 66.4h0M561.6 66.4h0M566.8 66.4h0M572.0 66.4h0M577.2 66.4h0M582.4 66.4h0M587.6 66.4h0M592.8 66.4h0M598.0 66.4h0M603.2 66.4h0M608.4 66.4h0M613.6 66.4h0M96.2 71.6h0M101.4 71.6h0M106.6 71.6h0M111.8 71.6h0M117.0 71.6h0M122.2 71.6h0M127.4 71.6h0M132.6 71.6h0M137.8 71.6h0M143.0 71.6h0M148.2 71.6h0M153.4 71.6h0M158.6 71.6h0M163.8 71.6h0M169.0 71.6h0M174.2 71.6h0M179.4 71.6h0M184.6 71.6h0M189.8 71.6h0M195.0 71.6h0M200.2 71.6h0M205.4 71.6h0M340.6 71.6h0M345.8 71.6h0M351.0 71.6h0M356.2 71.6h0M361.4 71.6h0M366.6 71.6h0M371.8 71.6h0M377.0 71.6h0M382.2 71.6h0M387.4 71.6h0M392.6 71.6h0M397.8 71.6h0M403.0 71.6h0M408.2 71.6h0M413.4 71.6h0M418.6 71.6h0M423.8 71.6h0M429.0 71.6h0M434.2 71.6h0M439.4 71.6h0M444.6 71.6h0M449.8 71.6h0M455.0 71.6h0M460.2 71.6h0M465.4 71.6h0M470.6 71.6h0M475.8 71.6h0M481.0 71.6h0M486.2 71.6h0M491.4 71.6h0M496.6 71.6h0M501.8 71.6h0M507.0 71.6h0M512.2 71.6h0M517.4 71.6h0M522.6 71.6h0M527.8 71.6h0M533.0 71.6h0M538.2 71.6h0M543.4 71.6h0M548.6 71.6h0M553.8 71.6h0M559.0 71.6h0M564.2 71.6h0M569.4 71.6h0M574.6 71.6h0M579.8 71.6h0M585.0 71.6h0M590.2 71.6h0M595.4 71.6h0M600.6 71.6h0M605.8 71.6h0M611.0 71.6h0M626.6 71.6h0M93.6 76.8h0M98.8 76.8h0M104.0 76.8h0M109.2 76.8h0M114.4 76.8h0M119.6 76.8h0M124.8 76.8h0M130.0 76.8h0M135.2 76.8h0M140.4 76.8h0M145.6 76.8h0M150.8 76.8h0M156.0 76.8h0M161.2 76.8h0M166.4 76.8h0M171.6 76.8h0M176.8 76.8h0M182.0 76.8h0M187.2 76.8h0M192.4 76.8h0M197.6 76.8h0M322.4 76.8h0M327.6 76.8h0M332.8 76.8h0M338.0 76.8h0M343.2 76.8h0M369.2 76.8h0M374.4 76.8h0M379.6 76.8h0M384.8 76.8h0M390.0 76.8h0M395.2 76.8h0M400.4 76.8h0M405.6 76.8h0M410.8 76.8h0M416.0 76.8h0M421.2 76.8h0M426.4 76.8h0M431.6 76.8h0M436.8 76.8h0M442.0 76.8h0M447.2 76.8h0M452.4 76.8h0M457.6 76.8h0M462.8 76.8h0M468.0 76.8h0M473.2 76.8h0M478.4 76.8h0M483.6 76.8h0M488.8 76.8h0M494.0 76.8h0M499.2 76.8h0M504.4 76.8h0M509.6 76.8h0M514.8 76.8h0M520.0 76.8h0M525.2 76.8h0M530.4 76.8h0M535.6 76.8h0M540.8 76.8h0M546.0 76.8h0M551.2 76.8h0M556.4 76.8h0M561.6 76.8h0M566.8 76.8h0M572.0 76.8h0M577.2 76.8h0M582.4 76.8h0M587.6 76.8h0M592.8 76.8h0M96.2 82.0h0M101.4 82.0h0M106.6 82.0h0M111.8 82.0h0M117.0 82.0h0M122.2 82.0h0M127.4 82.0h0M132.6 82.0h0M137.8 82.0h0M143.0 82.0h0M148.2 82.0h0M153.4 82.0h0M158.6 82.0h0M163.8 82.0h0M169.0 82.0h0M174.2 82.0h0M179.4 82.0h0M184.6 82.0h0M189.8 82.0h0M325.0 82.0h0M330.2 82.0h0M335.4 82.0h0M371.8 82.0h0M382.2 82.0h0M387.4 82.0h0M392.6 82.0h0M397.8 82.0h0M403.0 82.0h0M408.2 82.0h0M413.4 82.0h0M418.6 82.0h0M423.8 82.0h0M429.0 82.0h0M434.2 82.0h0M439.4 82.0h0M444.6 82.0h0M449.8 82.0h0M455.0 82.0h0M460.2 82.0h0M465.4 82.0h0M470.6 82.0h0M475.8 82.0h0M481.0 82.0h0M486.2 82.0h0M491.4 82.0h0M496.6 82.0h0M501.8 82.0h0M507.0 82.0h0M512.2 82.0h0M517.4 82.0h0M522.6 82.0h0M527.8 82.0h0M533.0 82.0h0M538.2 82.0h0M543.4 82.0h0M548.6 82.0h0M553.8 82.0h0M559.0 82.0h0M564.2 82.0h0M569.4 82.0h0M574.6 82.0h0M585.0 82.0h0M590.2 82.0h0M616.2 82.0h0M621.4 82.0h0M104.0 87.2h0M109.2 87.2h0M114.4 87.2h0M119.6 87.2h0M124.8 87.2h0M130.0 87.2h0M135.2 87.2h0M140.4 87.2h0M145.6 87.2h0M150.8 87.2h0M156.0 87.2h0M161.2 87.2h0M166.4 87.2h0M171.6 87.2h0M176.8 87.2h0M182.0 87.2h0M187.2 87.2h0M322.4 87.2h0M327.6 87.2h0M348.4 87.2h0M353.6 87.2h0M358.8 87.2h0M405.6 87.2h0M410.8 87.2h0M416.0 87.2h0M421.2 87.2h0M426.4 87.2h0M431.6 87.2h0M436.8 87.2h0M442.0 87.2h0M447.2 87.2h0M452.4 87.2h0M457.6 87.2h0M462.8 87.2h0M468.0 87.2h0M473.2 87.2h0M478.4 87.2h0M483.6 87.2h0M488.8 87.2h0M494.0 87.2h0M499.2 87.2h0M504.4 87.2h0M509.6 87.2h0M514.8 87.2h0M520.0 87.2h0M525.2 87.2h0M530.4 87.2h0M535.6 87.2h0M540.8 87.2h0M546.0 87.2h0M551.2 87.2h0M556.4 87.2h0M561.6 87.2h0M566.8 87.2h0M572.0 87.2h0M577.2 87.2h0M592.8 87.2h0M613.6 87.2h0M618.8 87.2h0M106.6 92.4h0M111.8 92.4h0M117.0 92.4h0M122.2 92.4h0M127.4 92.4h0M132.6 92.4h0M137.8 92.4h0M143.0 92.4h0M148.2 92.4h0M153.4 92.4h0M158.6 92.4h0M163.8 92.4h0M169.0 92.4h0M174.2 92.4h0M179.4 92.4h0M184.6 92.4h0M330.2 92.4h0M335.4 92.4h0M340.6 92.4h0M345.8 92.4h0M351.0 92.4h0M356.2 92.4h0M413.4 92.4h0M418.6 92.4h0M423.8 92.4h0M429.0 92.4h0M434.2 92.4h0M439.4 92.4h0M444.6 92.4h0M449.8 92.4h0M455.0 92.4h0M460.2 92.4h0M465.4 92.4h0M470.6 92.4h0M475.8 92.4h0M481.0 92.4h0M486.2 92.4h0M491.4 92.4h0M496.6 92.4h0M501.8 92.4h0M507.0 92.4h0M512.2 92.4h0M517.4 92.4h0M522.6 92.4h0M527.8 92.4h0M533.0 92.4h0M538.2 92.4h0M543.4 92.4h0M548.6 92.4h0M553.8 92.4h0M559.0 92.4h0M564.2 92.4h0M569.4 92.4h0M574.6 92.4h0M579.8 92.4h0M605.8 92.4h0M109.2 97.6h0M114.4 97.6h0M119.6 97.6h0M124.8 97.6h0M130.0 97.6h0M135.2 97.6h0M140.4 97.6h0M145.6 97.6h0M150.8 97.6h0M156.0 97.6h0M161.2 97.6h0M166.4 97.6h0M171.6 97.6h0M176.8 97.6h0M322.4 97.6h0M327.6 97.6h0M332.8 97.6h0M338.0 97.6h0M343.2 97.6h0M348.4 97.6h0M353.6 97.6h0M358.8 97.6h0M364.0 97.6h0M369.2 97.6h0M374.4 97.6h0M384.8 97.6h0M390.0 97.6h0M395.2 97.6h0M410.8 97.6h0M416.0 97.6h0M421.2 97.6h0M426.4 97.6h0M431.6 97.6h0M436.8 97.6h0M442.0 97.6h0M447.2 97.6h0M452.4 97.6h0M457.6 97.6h0M462.8 97.6h0M468.0 97.6h0M473.2 97.6h0M478.4 97.6h0M483.6 97.6h0M488.8 97.6h0M494.0 97.6h0M499.2 97.6h0M504.4 97.6h0M509.6 97.6h0M514.8 97.6h0M520.0 97.6h0M525.2 97.6h0M530.4 97.6h0M535.6 97.6h0M540.8 97.6h0M546.0 97.6h0M551.2 97.6h0M556.4 97.6h0M561.6 97.6h0M566.8 97.6h0M572.0 97.6h0M577.2 97.6h0M582.4 97.6h0M117.0 102.8h0M122.2 102.8h0M127.4 102.8h0M132.6 102.8h0M137.8 102.8h0M143.0 102.8h0M148.2 102.8h0M153.4 102.8h0M174.2 102.8h0M319.8 102.8h0M325.0 102.8h0M330.2 102.8h0M335.4 102.8h0M340.6 102.8h0M345.8 102.8h0M351.0 102.8h0M356.2 102.8h0M361.4 102.8h0M366.6 102.8h0M371.8 102.8h0M377.0 102.8h0M382.2 102.8h0M387.4 102.8h0M392.6 102.8h0M397.8 102.8h0M403.0 102.8h0M413.4 102.8h0M418.6 102.8h0M423.8 102.8h0M429.0 102.8h0M434.2 102.8h0M439.4 102.8h0M444.6 102.8h0M449.8 102.8h0M455.0 102.8h0M460.2 102.8h0M465.4 102.8h0M470.6 102.8h0M475.8 102.8h0M481.0 102.8h0M486.2 102.8h0M491.4 102.8h0M496.6 102.8h0M501.8 102.8h0M507.0 102.8h0M512.2 102.8h0M517.4 102.8h0M522.6 102.8h0M527.8 102.8h0M533.0 102.8h0M538.2 102.8h0M543.4 102.8h0M548.6 102.8h0M553.8 102.8h0M559.0 102.8h0M564.2 102.8h0M569.4 102.8h0M574.6 102.8h0M579.8 102.8h0M119.6 108.0h0M124.8 108.0h0M130.0 108.0h0M135.2 108.0h0M140.4 108.0h0M145.6 108.0h0M317.2 108.0h0M322.4 108.0h0M327.6 108.0h0M332.8 108.0h0M338.0 108.0h0M343.2 108.0h0M348.4 108.0h0M353.6 108.0h0M358.8 108.0h0M364.0 108.0h0M369.2 108.0h0M374.4 108.0h0M379.6 108.0h0M384.8 108.0h0M390.0 108.0h0M395.2 108.0h0M400.4 108.0h0M405.6 108.0h0M416.0 108.0h0M421.2 108.0h0M426.4 108.0h0M431.6 108.0h0M436.8 108.0h0M442.0 108.0h0M447.2 108.0h0M452.4 108.0h0M457.6 108.0h0M462.8 108.0h0M468.0 108.0h0M473.2 108.0h0M478.4 108.0h0M483.6 108.0h0M488.8 108.0h0M494.0 108.0h0M499.2 108.0h0M504.4 108.0h0M509.6 108.0h0M514.8 108.0h0M520.0 108.0h0M525.2 108.0h0M530.4 108.0h0M535.6 108.0h0M540.8 108.0h0M546.0 108.0h0M551.2 108.0h0M556.4 108.0h0M561.6 108.0h0M566.8 108.0h0M572.0 108.0h0M577.2 108.0h0M122.2 113.2h0M127.4 113.2h0M132.6 113.2h0M137.8 113.2h0M143.0 113.2h0M314.6 113.2h0M319.8 113.2h0M325.0 113.2h0M330.2 113.2h0M335.4 113.2h0M340.6 113.2h0M345.8 113.2h0M351.0 113.2h0M356.2 113.2h0M361.4 113.2h0M366.6 113.2h0M371.8 113.2h0M377.0 113.2h0M382.2 113.2h0M387.4 113.2h0M392.6 113.2h0M397.8 113.2h0M403.0 113.2h0M408.2 113.2h0M418.6 113.2h0M423.8 113.2h0M429.0 113.2h0M434.2 113.2h0M439.4 113.2h0M444.6 113.2h0M449.8 113.2h0M481.0 113.2h0M486.2 113.2h0M491.4 113.2h0M496.6 113.2h0M501.8 113.2h0M507.0 113.2h0M512.2 113.2h0M517.4 113.2h0M522.6 113.2h0M527.8 113.2h0M533.0 113.2h0M538.2 113.2h0M543.4 113.2h0M548.6 113.2h0M553.8 113.2h0M559.0 113.2h0M564.2 113.2h0M569.4 113.2h0M130.0 118.4h0M135.2 118.4h0M140.4 118.4h0M145.6 118.4h0M150.8 118.4h0M156.0 118.4h0M161.2 118.4h0M306.8 118.4h0M312.0 118.4h0M317.2 118.4h0M322.4 118.4h0M327.6 118.4h0M332.8 118.4h0M338.0 118.4h0M343.2 118.4h0M348.4 118.4h0M353.6 118.4h0M358.8 118.4h0M364.0 118.4h0M369.2 118.4h0M374.4 118.4h0M379.6 118.4h0M384.8 118.4h0M390.0 118.4h0M395.2 118.4h0M400.4 118.4h0M405.6 118.4h0M410.8 118.4h0M421.2 118.4h0M426.4 118.4h0M431.6 118.4h0M436.8 118.4h0M442.0 118.4h0M447.2 118.4h0M452.4 118.4h0M488.8 118.4h0M494.0 118.4h0M499.2 118.4h0M504.4 118.4h0M509.6 118.4h0M525.2 118.4h0M530.4 118.4h0M535.6 118.4h0M540.8 118.4h0M546.0 118.4h0M551.2 118.4h0M556.4 118.4h0M561.6 118.4h0M137.8 123.6h0M143.0 123.6h0M148.2 123.6h0M153.4 123.6h0M158.6 123.6h0M163.8 123.6h0M169.0 123.6h0M309.4 123.6h0M314.6 123.6h0M319.8 123.6h0M325.0 123.6h0M330.2 123.6h0M335.4 123.6h0M340.6 123.6h0M345.8 123.6h0M351.0 123.6h0M356.2 123.6h0M361.4 123.6h0M366.6 123.6h0M371.8 123.6h0M377.0 123.6h0M382.2 123.6h0M387.4 123.6h0M392.6 123.6h0M397.8 123.6h0M403.0 123.6h0M408.2 123.6h0M413.4 123.6h0M423.8 123.6h0M429.0 123.6h0M434.2 123.6h0M439.4 123.6h0M444.6 123.6h0M486.2 123.6h0M491.4 123.6h0M496.6 123.6h0M501.8 123.6h0M533.0 123.6h0M538.2 123.6h0M543.4 123.6h0M548.6 123.6h0M553.8 123.6h0M585.0 123.6h0M150.8 128.8h0M156.0 128.8h0M161.2 128.8h0M166.4 128.8h0M171.6 128.8h0M306.8 128.8h0M312.0 128.8h0M317.2 128.8h0M322.4 128.8h0M327.6 128.8h0M332.8 128.8h0M338.0 128.8h0M343.2 128.8h0M348.4 128.8h0M353.6 128.8h0M358.8 128.8h0M364.0 128.8h0M369.2 128.8h0M374.4 128.8h0M379.6 128.8h0M384.8 128.8h0M390.0 128.8h0M395.2 128.8h0M400.4 128.8h0M405.6 128.8h0M410.8 128.8h0M416.0 128.8h0M426.4 128.8h0M431.6 128.8h0M436.8 128.8h0M488.8 128.8h0M494.0 128.8h0M499.2 128.8h0M540.8 128.8h0M546.0 128.8h0M551.2 128.8h0M582.4 128.8h0M169.0 134.0h0M174.2 134.0h0M309.4 134.0h0M314.6 134.0h0M319.8 134.0h0M325.0 134.0h0M330.2 134.0h0M335.4 134.0h0M340.6 134.0h0M345.8 134.0h0M351.0 134.0h0M356.2 134.0h0M361.4 134.0h0M366.6 134.0h0M371.8 134.0h0M377.0 134.0h0M382.2 134.0h0M387.4 134.0h0M392.6 134.0h0M397.8 134.0h0M403.0 134.0h0M408.2 134.0h0M413.4 134.0h0M418.6 134.0h0M423.8 134.0h0M429.0 134.0h0M491.4 134.0h0M496.6 134.0h0M538.2 134.0h0M543.4 134.0h0M548.6 134.0h0M553.8 134.0h0M579.8 134.0h0M585.0 134.0h0M171.6 139.2h0M176.8 139.2h0M182.0 139.2h0M192.4 139.2h0M197.6 139.2h0M202.8 139.2h0M208.0 139.2h0M317.2 139.2h0M322.4 139.2h0M327.6 139.2h0M332.8 139.2h0M338.0 139.2h0M343.2 139.2h0M348.4 139.2h0M353.6 139.2h0M358.8 139.2h0M364.0 139.2h0M369.2 139.2h0M374.4 139.2h0M379.6 139.2h0M384.8 139.2h0M390.0 139.2h0M395.2 139.2h0M400.4 139.2h0M405.6 139.2h0M410.8 139.2h0M416.0 139.2h0M421.2 139.2h0M426.4 139.2h0M431.6 139.2h0M436.8 139.2h0M494.0 139.2h0M540.8 139.2h0M551.2 139.2h0M582.4 139.2h0M587.6 139.2h0M189.8 144.4h0M195.0 144.4h0M200.2 144.4h0M205.4 144.4h0M210.6 144.4h0M215.8 144.4h0M221.0 144.4h0M319.8 144.4h0M325.0 144.4h0M330.2 144.4h0M335.4 144.4h0M340.6 144.4h0M345.8 144.4h0M351.0 144.4h0M356.2 144.4h0M361.4 144.4h0M366.6 144.4h0M371.8 144.4h0M377.0 144.4h0M382.2 144.4h0M387.4 144.4h0M392.6 144.4h0M397.8 144.4h0M403.0 144.4h0M408.2 144.4h0M413.4 144.4h0M418.6 144.4h0M423.8 144.4h0M429.0 144.4h0M434.2 144.4h0M501.8 144.4h0M538.2 144.4h0M585.0 144.4h0M590.2 144.4h0M187.2 149.6h0M192.4 149.6h0M197.6 149.6h0M202.8 149.6h0M208.0 149.6h0M213.2 149.6h0M218.4 149.6h0M223.6 149.6h0M228.8 149.6h0M234.0 149.6h0M322.4 149.6h0M327.6 149.6h0M332.8 149.6h0M338.0 149.6h0M343.2 149.6h0M348.4 149.6h0M353.6 149.6h0M358.8 149.6h0M364.0 149.6h0M369.2 149.6h0M374.4 149.6h0M379.6 149.6h0M384.8 149.6h0M390.0 149.6h0M395.2 149.6h0M400.4 149.6h0M405.6 149.6h0M410.8 149.6h0M416.0 149.6h0M421.2 149.6h0M426.4 149.6h0M431.6 149.6h0M540.8 149.6h0M572.0 149.6h0M577.2 149.6h0M184.6 154.8h0M189.8 154.8h0M195.0 154.8h0M200.2 154.8h0M205.4 154.8h0M210.6 154.8h0M215.8 154.8h0M221.0 154.8h0M226.2 154.8h0M231.4 154.8h0M236.6 154.8h0M361.4 154.8h0M366.6 154.8h0M371.8 154.8h0M377.0 154.8h0M382.2 154.8h0M387.4 154.8h0M392.6 154.8h0M397.8 154.8h0M403.0 154.8h0M408.2 154.8h0M413.4 154.8h0M418.6 154.8h0M423.8 154.8h0M429.0 154.8h0M538.2 154.8h0M564.2 154.8h0M569.4 154.8h0M574.6 154.8h0M182.0 160.0h0M187.2 160.0h0M192.4 160.0h0M197.6 160.0h0M202.8 160.0h0M208.0 160.0h0M213.2 160.0h0M218.4 160.0h0M223.6 160.0h0M228.8 160.0h0M234.0 160.0h0M239.2 160.0h0M364.0 160.0h0M369.2 160.0h0M374.4 160.0h0M379.6 160.0h0M384.8 160.0h0M390.0 160.0h0M395.2 160.0h0M400.4 160.0h0M405.6 160.0h0M410.8 160.0h0M416.0 160.0h0M421.2 160.0h0M540.8 160.0h0M561.6 160.0h0M566.8 160.0h0M572.0 160.0h0M179.4 165.2h0M184.6 165.2h0M189.8 165.2h0M195.0 165.2h0M200.2 165.2h0M205.4 165.2h0M210.6 165.2h0M215.8 165.2h0M221.0 165.2h0M226.2 165.2h0M231.4 165.2h0M236.6 165.2h0M241.8 165.2h0M247.0 165.2h0M252.2 165.2h0M366.6 165.2h0M371.8 165.2h0M377.0 165.2h0M382.2 165.2h0M387.4 165.2h0M392.6 165.2h0M397.8 165.2h0M403.0 165.2h0M408.2 165.2h0M413.4 165.2h0M418.6 165.2h0M543.4 165.2h0M564.2 165.2h0M569.4 165.2h0M611.0 165.2h0M616.2 165.2h0M182.0 170.4h0M187.2 170.4h0M192.4 170.4h0M197.6 170.4h0M202.8 170.4h0M208.0 170.4h0M213.2 170.4h0M218.4 170.4h0M223.6 170.4h0M228.8 170.4h0M234.0 170.4h0M239.2 170.4h0M244.4 170.4h0M249.6 170.4h0M254.8 170.4h0M260.0 170.4h0M265.2 170.4h0M364.0 170.4h0M369.2 170.4h0M374.4 170.4h0M379.6 170.4h0M384.8 170.4h0M390.0 170.4h0M395.2 170.4h0M400.4 170.4h0M405.6 170.4h0M410.8 170.4h0M416.0 170.4h0M618.8 170.4h0M624.0 170.4h0M184.6 175.6h0M189.8 175.6h0M195.0 175.6h0M200.2 175.6h0M205.4 175.6h0M210.6 175.6h0M215.8 175.6h0M221.0 175.6h0M226.2 175.6h0M231.4 175.6h0M236.6 175.6h0M241.8 175.6h0M247.0 175.6h0M252.2 175.6h0M257.4 175.6h0M262.6 175.6h0M267.8 175.6h0M366.6 175.6h0M371.8 175.6h0M377.0 175.6h0M382.2 175.6h0M387.4 175.6h0M392.6 175.6h0M397.8 175.6h0M403.0 175.6h0M408.2 175.6h0M413.4 175.6h0M418.6 175.6h0M553.8 175.6h0M559.0 175.6h0M564.2 175.6h0M621.4 175.6h0M626.6 175.6h0M631.8 175.6h0M187.2 180.8h0M192.4 180.8h0M197.6 180.8h0M202.8 180.8h0M208.0 180.8h0M213.2 180.8h0M218.4 180.8h0M223.6 180.8h0M228.8 180.8h0M234.0 180.8h0M239.2 180.8h0M244.4 180.8h0M249.6 180.8h0M254.8 180.8h0M260.0 180.8h0M265.2 180.8h0M369.2 180.8h0M374.4 180.8h0M379.6 180.8h0M384.8 180.8h0M390.0 180.8h0M395.2 180.8h0M400.4 180.8h0M405.6 180.8h0M410.8 180.8h0M416.0 180.8h0M189.8 186.0h0M195.0 186.0h0M200.2 186.0h0M205.4 186.0h0M210.6 186.0h0M215.8 186.0h0M221.0 186.0h0M226.2 186.0h0M231.4 186.0h0M236.6 186.0h0M241.8 186.0h0M247.0 186.0h0M252.2 186.0h0M257.4 186.0h0M262.6 186.0h0M366.6 186.0h0M371.8 186.0h0M377.0 186.0h0M382.2 186.0h0M387.4 186.0h0M392.6 186.0h0M397.8 186.0h0M403.0 186.0h0M408.2 186.0h0M413.4 186.0h0M418.6 186.0h0M600.6 186.0h0M605.8 186.0h0M611.0 186.0h0M197.6 191.2h0M202.8 191.2h0M208.0 191.2h0M213.2 191.2h0M218.4 191.2h0M223.6 191.2h0M228.8 191.2h0M234.0 191.2h0M239.2 191.2h0M244.4 191.2h0M249.6 191.2h0M254.8 191.2h0M260.0 191.2h0M369.2 191.2h0M374.4 191.2h0M379.6 191.2h0M384.8 191.2h0M390.0 191.2h0M395.2 191.2h0M400.4 191.2h0M405.6 191.2h0M410.8 191.2h0M416.0 191.2h0M431.6 191.2h0M436.8 191.2h0M592.8 191.2h0M598.0 191.2h0M603.2 191.2h0M608.4 191.2h0M613.6 191.2h0M618.8 191.2h0M624.0 191.2h0M200.2 196.4h0M205.4 196.4h0M210.6 196.4h0M215.8 196.4h0M221.0 196.4h0M226.2 196.4h0M231.4 196.4h0M236.6 196.4h0M241.8 196.4h0M247.0 196.4h0M252.2 196.4h0M257.4 196.4h0M366.6 196.4h0M371.8 196.4h0M377.0 196.4h0M382.2 196.4h0M387.4 196.4h0M392.6 196.4h0M397.8 196.4h0M403.0 196.4h0M408.2 196.4h0M413.4 196.4h0M429.0 196.4h0M434.2 196.4h0M585.0 196.4h0M590.2 196.4h0M595.4 196.4h0M600.6 196.4h0M605.8 196.4h0M611.0 196.4h0M616.2 196.4h0M621.4 196.4h0M626.6 196.4h0M202.8 201.6h0M208.0 201.6h0M213.2 201.6h0M218.4 201.6h0M223.6 201.6h0M228.8 201.6h0M234.0 201.6h0M239.2 201.6h0M244.4 201.6h0M249.6 201.6h0M254.8 201.6h0M369.2 201.6h0M374.4 201.6h0M379.6 201.6h0M384.8 201.6h0M390.0 201.6h0M395.2 201.6h0M400.4 201.6h0M405.6 201.6h0M410.8 201.6h0M431.6 201.6h0M577.2 201.6h0M582.4 201.6h0M587.6 201.6h0M592.8 201.6h0M598.0 201.6h0M603.2 201.6h0M608.4 201.6h0M613.6 201.6h0M618.8 201.6h0M624.0 201.6h0M629.2 201.6h0M634.4 201.6h0M200.2 206.8h0M205.4 206.8h0M210.6 206.8h0M215.8 206.8h0M221.0 206.8h0M226.2 206.8h0M231.4 206.8h0M236.6 206.8h0M241.8 206.8h0M247.0 206.8h0M252.2 206.8h0M371.8 206.8h0M377.0 206.8h0M382.2 206.8h0M387.4 206.8h0M392.6 206.8h0M397.8 206.8h0M403.0 206.8h0M408.2 206.8h0M429.0 206.8h0M434.2 206.8h0M569.4 206.8h0M574.6 206.8h0M579.8 206.8h0M585.0 206.8h0M590.2 206.8h0M595.4 206.8h0M600.6 206.8h0M605.8 206.8h0M611.0 206.8h0M616.2 206.8h0M621.4 206.8h0M626.6 206.8h0M631.8 206.8h0M637.0 206.8h0M642.2 206.8h0M202.8 212.0h0M208.0 212.0h0M213.2 212.0h0M218.4 212.0h0M223.6 212.0h0M228.8 212.0h0M234.0 212.0h0M239.2 212.0h0M374.4 212.0h0M379.6 212.0h0M384.8 212.0h0M390.0 212.0h0M395.2 212.0h0M400.4 212.0h0M405.6 212.0h0M572.0 212.0h0M577.2 212.0h0M582.4 212.0h0M587.6 212.0h0M592.8 212.0h0M598.0 212.0h0M603.2 212.0h0M608.4 212.0h0M613.6 212.0h0M618.8 212.0h0M624.0 212.0h0M629.2 212.0h0M634.4 212.0h0M639.6 212.0h0M644.8 212.0h0M200.2 217.2h0M205.4 217.2h0M210.6 217.2h0M215.8 217.2h0M221.0 217.2h0M226.2 217.2h0M231.4 217.2h0M236.6 217.2h0M371.8 217.2h0M377.0 217.2h0M382.2 217.2h0M387.4 217.2h0M392.6 217.2h0M397.8 217.2h0M403.0 217.2h0M569.4 217.2h0M574.6 217.2h0M579.8 217.2h0M585.0 217.2h0M590.2 217.2h0M595.4 217.2h0M600.6 217.2h0M605.8 217.2h0M611.0 217.2h0M616.2 217.2h0M621.4 217.2h0M626.6 217.2h0M631.8 217.2h0M637.0 217.2h0M642.2 217.2h0M197.6 222.4h0M202.8 222.4h0M208.0 222.4h0M213.2 222.4h0M218.4 222.4h0M223.6 222.4h0M228.8 222.4h0M234.0 222.4h0M374.4 222.4h0M379.6 222.4h0M384.8 222.4h0M390.0 222.4h0M395.2 222.4h0M572.0 222.4h0M577.2 222.4h0M582.4 222.4h0M587.6 222.4h0M592.8 222.4h0M598.0 222.4h0M603.2 222.4h0M608.4 222.4h0M613.6 222.4h0M618.8 222.4h0M624.0 222.4h0M629.2 222.4h0M634.4 222.4h0M639.6 222.4h0M644.8 222.4h0M200.2 227.6h0M205.4 227.6h0M210.6 227.6h0M215.8 227.6h0M221.0 227.6h0M226.2 227.6h0M231.4 227.6h0M382.2 227.6h0M387.4 227.6h0M569.4 227.6h0M574.6 227.6h0M579.8 227.6h0M585.0 227.6h0M616.2 227.6h0M621.4 227.6h0M626.6 227.6h0M631.8 227.6h0M637.0 227.6h0M642.2 227.6h0M197.6 232.8h0M202.8 232.8h0M208.0 232.8h0M213.2 232.8h0M218.4 232.8h0M223.6 232.8h0M624.0 232.8h0M629.2 232.8h0M634.4 232.8h0M639.6 232.8h0M686.4 232.8h0M195.0 238.0h0M200.2 238.0h0M205.4 238.0h0M210.6 238.0h0M215.8 238.0h0M221.0 238.0h0M683.8 238.0h0M689.0 238.0h0M694.2 238.0h0M197.6 243.2h0M202.8 243.2h0M208.0 243.2h0M213.2 243.2h0M686.4 243.2h0M195.0 248.4h0M200.2 248.4h0M205.4 248.4h0M210.6 248.4h0M678.6 248.4h0M683.8 248.4h0M197.6 253.6h0M202.8 253.6h0M195.0 258.8h0M200.2 258.8h0\"/><path class=\"jm-arc\" data-i=\"0\" d=\"M496.0 116.0Q338.6 -16.4 181.2 72.6\"/><path class=\"jm-arc\" data-i=\"1\" d=\"M356.0 141.0Q252.6 41.4 149.2 100.4\"/><path class=\"jm-arc\" data-i=\"2\" d=\"M584.0 134.0Q517.3 71.6 450.6 109.6\"/><path class=\"jm-arc\" data-i=\"3\" d=\"M136.0 114.0Q150.4 58.2 164.8 76.2\"/><path class=\"jm-arc\" data-i=\"4\" d=\"M411.6 92.2Q302.2 7.4 192.8 69.0\"/><path class=\"jm-arc\" data-i=\"5\" d=\"M595.6 87.0Q619.0 45.5 642.4 227.8\"/><path class=\"jm-arc\" data-i=\"6\" d=\"M378.0 56.0Q352.7 35.4 327.4 53.4\"/><path class=\"jm-arc\" data-i=\"7\" d=\"M415.8 159.0Q377.8 21.4 339.8 57.0\"/><path class=\"jm-arc\" data-i=\"8\" d=\"M246.0 184.0Q283.9 47.2 321.8 82.6\"/><path class=\"jm-arc\" data-i=\"9\" d=\"M478.0 100.0Q422.4 21.4 366.8 55.0\"/><path class=\"jm-arc\" data-i=\"10\" d=\"M548.0 92.0Q320.9 -66.1 93.8 61.4\"/><path class=\"jm-arc\" data-i=\"11\" d=\"M552.0 130.0Q591.0 93.2 630.0 235.6\"/><path class=\"jm-arc\" data-i=\"12\" d=\"M338.0 144.2Q265.0 33.8 192.0 78.6\"/><path class=\"jm-arc\" data-i=\"13\" d=\"M192.0 150.8Q262.3 35.0 332.6 79.2\"/><path class=\"jm-arc\" data-i=\"14\" d=\"M400.0 108.0Q379.2 51.0 358.4 69.0\"/><path class=\"jm-arc\" data-i=\"15\" d=\"M186.0 124.0Q183.2 54.6 180.4 72.6\"/><path class=\"jm-arc\" data-i=\"16\" d=\"M402.0 62.0Q256.9 -23.3 111.8 58.0\"/><path class=\"jm-arc\" data-i=\"17\" d=\"M448.0 96.0Q275.8 -4.4 103.6 92.0\"/><path class=\"jm-arc\" data-i=\"18\" d=\"M616.0 87.0Q355.6 -61.4 95.2 84.4\"/><path class=\"jm-arc\" data-i=\"19\" d=\"M566.0 164.0Q556.8 139.4 547.6 157.4\"/><path class=\"jm-arc\" data-i=\"20\" d=\"M390.0 218.0Q480.9 167.1 571.8 223.8\"/><path class=\"jm-arc\" data-i=\"21\" d=\"M386.0 168.0Q367.4 25.9 348.7 58.3\"/><path class=\"jm-arc\" data-i=\"22\" d=\"M212.0 228.0Q278.2 21.0 344.4 77.2\"/><path class=\"jm-arc\" data-i=\"23\" d=\"M190.0 180.0Q184.8 88.1 179.6 108.4\"/><path class=\"jm-arc\" data-i=\"24\" d=\"M474.0 64.0Q534.0 29.9 594.0 85.0\"/><path class=\"jm-arc\" data-i=\"25\" d=\"M328.0 96.0Q338.9 37.2 349.8 55.2\"/><path class=\"jm-arc\" data-i=\"26\" d=\"M311.0 131.0Q327.9 40.7 344.7 62.2\"/><path class=\"jm-arc\" data-i=\"27\" d=\"M530.0 40.0Q459.9 0.3 389.8 39.6\"/><path class=\"jm-arc\" data-i=\"28\" d=\"M144.0 82.0Q241.9 1.7 339.8 57.0\"/><path class=\"jm-arc\" data-i=\"29\" d=\"M136.0 46.0Q293.3 -43.9 450.6 109.6\"/><path class=\"jm-arc\" data-i=\"30\" d=\"M608.0 210.0Q648.8 186.2 689.6 233.6\"/><circle class=\"jm-to\" data-i=\"0\" cx=\"181.2\" cy=\"72.6\" r=\"3\"/><circle class=\"jm-to\" data-i=\"1\" cx=\"149.2\" cy=\"100.4\" r=\"3\"/><circle class=\"jm-to\" data-i=\"2\" cx=\"450.6\" cy=\"109.6\" r=\"3\"/><circle class=\"jm-to\" data-i=\"3\" cx=\"164.8\" cy=\"76.2\" r=\"3\"/><circle class=\"jm-to\" data-i=\"4\" cx=\"192.8\" cy=\"69.0\" r=\"3\"/><circle class=\"jm-to\" data-i=\"5\" cx=\"642.4\" cy=\"227.8\" r=\"3\"/><circle class=\"jm-to\" data-i=\"6\" cx=\"327.4\" cy=\"53.4\" r=\"3\"/><circle class=\"jm-to\" data-i=\"7\" cx=\"339.8\" cy=\"57.0\" r=\"3\"/><circle class=\"jm-to\" data-i=\"8\" cx=\"321.8\" cy=\"82.6\" r=\"3\"/><circle class=\"jm-to\" data-i=\"9\" cx=\"366.8\" cy=\"55.0\" r=\"3\"/><circle class=\"jm-to\" data-i=\"10\" cx=\"93.8\" cy=\"61.4\" r=\"3\"/><circle class=\"jm-to\" data-i=\"11\" cx=\"630.0\" cy=\"235.6\" r=\"3\"/><circle class=\"jm-to\" data-i=\"12\" cx=\"192.0\" cy=\"78.6\" r=\"3\"/><circle class=\"jm-to\" data-i=\"13\" cx=\"332.6\" cy=\"79.2\" r=\"3\"/><circle class=\"jm-to\" data-i=\"14\" cx=\"358.4\" cy=\"69.0\" r=\"3\"/><circle class=\"jm-to\" data-i=\"15\" cx=\"180.4\" cy=\"72.6\" r=\"3\"/><circle class=\"jm-to\" data-i=\"16\" cx=\"111.8\" cy=\"58.0\" r=\"3\"/><circle class=\"jm-to\" data-i=\"17\" cx=\"103.6\" cy=\"92.0\" r=\"3\"/><circle class=\"jm-to\" data-i=\"18\" cx=\"95.2\" cy=\"84.4\" r=\"3\"/><circle class=\"jm-to\" data-i=\"19\" cx=\"547.6\" cy=\"157.4\" r=\"3\"/><circle class=\"jm-to\" data-i=\"20\" cx=\"571.8\" cy=\"223.8\" r=\"3\"/><circle class=\"jm-to\" data-i=\"21\" cx=\"348.7\" cy=\"58.3\" r=\"3\"/><circle class=\"jm-to\" data-i=\"22\" cx=\"344.4\" cy=\"77.2\" r=\"3\"/><circle class=\"jm-to\" data-i=\"23\" cx=\"179.6\" cy=\"108.4\" r=\"3\"/><circle class=\"jm-to\" data-i=\"24\" cx=\"594.0\" cy=\"85.0\" r=\"3\"/><circle class=\"jm-to\" data-i=\"25\" cx=\"349.8\" cy=\"55.2\" r=\"3\"/><circle class=\"jm-to\" data-i=\"26\" cx=\"344.7\" cy=\"62.2\" r=\"3\"/><circle class=\"jm-to\" data-i=\"27\" cx=\"389.8\" cy=\"39.6\" r=\"3\"/><circle class=\"jm-to\" data-i=\"28\" cx=\"339.8\" cy=\"57.0\" r=\"3\"/><circle class=\"jm-to\" data-i=\"29\" cx=\"450.6\" cy=\"109.6\" r=\"3\"/><circle class=\"jm-to\" data-i=\"30\" cx=\"689.6\" cy=\"233.6\" r=\"3\"/></svg>";
const JM_FLAGS="<button type=\"button\" class=\"jm-flag\" data-a=\"jmFlag\" data-i=\"0\" style=\"left:71.71%;top:47.31%\">🇮🇳</button><button type=\"button\" class=\"jm-flag\" data-a=\"jmFlag\" data-i=\"1\" style=\"left:51.71%;top:54.23%\">🇳🇬</button><button type=\"button\" class=\"jm-flag\" data-a=\"jmFlag\" data-i=\"2\" style=\"left:84.43%;top:51.54%\">🇵🇭</button><button type=\"button\" class=\"jm-flag\" data-a=\"jmFlag\" data-i=\"3\" style=\"left:18.57%;top:43.85%\">🇲🇽</button><button type=\"button\" class=\"jm-flag\" data-a=\"jmFlag\" data-i=\"4\" style=\"left:58.80%;top:36.23%\">🇱🇧</button><button type=\"button\" class=\"jm-flag\" data-a=\"jmFlag\" data-i=\"5\" style=\"left:84.23%;top:32.69%\">🇰🇷</button><button type=\"button\" class=\"jm-flag\" data-a=\"jmFlag\" data-i=\"6\" style=\"left:54.00%;top:20.38%\">🇵🇱</button><button type=\"button\" class=\"jm-flag\" data-a=\"jmFlag\" data-i=\"7\" style=\"left:60.40%;top:61.92%\">🇰🇪</button><button type=\"button\" class=\"jm-flag\" data-a=\"jmFlag\" data-i=\"8\" style=\"left:35.14%;top:70.77%\">🇧🇷</button><button type=\"button\" class=\"jm-flag\" data-a=\"jmFlag\" data-i=\"9\" style=\"left:68.86%;top:36.92%\">🇵🇰</button><button type=\"button\" class=\"jm-flag\" data-a=\"jmFlag\" data-i=\"10\" style=\"left:78.29%;top:35.38%\">🇨🇳</button><button type=\"button\" class=\"jm-flag\" data-a=\"jmFlag\" data-i=\"11\" style=\"left:79.14%;top:50.00%\">🇻🇳</button><button type=\"button\" class=\"jm-flag\" data-a=\"jmFlag\" data-i=\"12\" style=\"left:46.86%;top:56.62%\">🇬🇭</button><button type=\"button\" class=\"jm-flag\" data-a=\"jmFlag\" data-i=\"13\" style=\"left:27.43%;top:59.92%\">🇨🇴</button><button type=\"button\" class=\"jm-flag\" data-a=\"jmFlag\" data-i=\"14\" style=\"left:55.29%;top:45.77%\">🇪🇬</button><button type=\"button\" class=\"jm-flag\" data-a=\"jmFlag\" data-i=\"15\" style=\"left:27.57%;top:45.00%\">🇯🇲</button><button type=\"button\" class=\"jm-flag\" data-a=\"jmFlag\" data-i=\"16\" style=\"left:59.14%;top:22.69%\">🇺🇦</button><button type=\"button\" class=\"jm-flag\" data-a=\"jmFlag\" data-i=\"17\" style=\"left:63.43%;top:40.00%\">🇮🇷</button><button type=\"button\" class=\"jm-flag\" data-a=\"jmFlag\" data-i=\"18\" style=\"left:89.57%;top:33.46%\">🇯🇵</button><button type=\"button\" class=\"jm-flag\" data-a=\"jmFlag\" data-i=\"19\" style=\"left:80.86%;top:63.85%\">🇮🇩</button><button type=\"button\" class=\"jm-flag\" data-a=\"jmFlag\" data-i=\"20\" style=\"left:55.71%;top:83.85%\">🇿🇦</button><button type=\"button\" class=\"jm-flag\" data-a=\"jmFlag\" data-i=\"21\" style=\"left:55.14%;top:64.62%\">🇨🇩</button><button type=\"button\" class=\"jm-flag\" data-a=\"jmFlag\" data-i=\"22\" style=\"left:30.29%;top:87.69%\">🇦🇷</button><button type=\"button\" class=\"jm-flag\" data-a=\"jmFlag\" data-i=\"23\" style=\"left:26.86%;top:73.46%\">🇵🇪</button><button type=\"button\" class=\"jm-flag\" data-a=\"jmFlag\" data-i=\"24\" style=\"left:67.71%;top:21.92%\">🇰🇿</button><button type=\"button\" class=\"jm-flag\" data-a=\"jmFlag\" data-i=\"25\" style=\"left:46.29%;top:36.92%\">🇲🇦</button><button type=\"button\" class=\"jm-flag\" data-a=\"jmFlag\" data-i=\"26\" style=\"left:43.00%;top:48.08%\">🇸🇳</button><button type=\"button\" class=\"jm-flag\" data-a=\"jmFlag\" data-i=\"27\" style=\"left:75.71%;top:15.38%\">🇷🇺</button><button type=\"button\" class=\"jm-flag\" data-a=\"jmFlag\" data-i=\"28\" style=\"left:20.57%;top:31.54%\">🇺🇸</button><button type=\"button\" class=\"jm-flag\" data-a=\"jmFlag\" data-i=\"29\" style=\"left:19.43%;top:17.69%\">🇨🇦</button><button type=\"button\" class=\"jm-flag\" data-a=\"jmFlag\" data-i=\"30\" style=\"left:86.86%;top:80.77%\">🇦🇺</button>";
const JM_D=[["🇮🇳", "India", "Toronto"], ["🇳🇬", "Nigeria", "Houston"], ["🇵🇭", "Philippines", "Dubai"], ["🇲🇽", "Mexico", "Chicago"], ["🇱🇧", "Lebanon", "Montréal"], ["🇰🇷", "Korea", "Sydney"], ["🇵🇱", "Poland", "Dublin"], ["🇰🇪", "Kenya", "London"], ["🇧🇷", "Brazil", "Lisbon"], ["🇵🇰", "Pakistan", "Berlin"], ["🇨🇳", "China", "Vancouver"], ["🇻🇳", "Vietnam", "Melbourne"], ["🇬🇭", "Ghana", "New York"], ["🇨🇴", "Colombia", "Madrid"], ["🇪🇬", "Egypt", "Milan"], ["🇯🇲", "Jamaica", "Brampton"], ["🇺🇦", "Ukraine", "Calgary"], ["🇮🇷", "Iran", "Los Angeles"], ["🇯🇵", "Japan", "San Francisco"], ["🇮🇩", "Indonesia", "Singapore"], ["🇿🇦", "South Africa", "Perth"], ["🇨🇩", "DR Congo", "Brussels"], ["🇦🇷", "Argentina", "Barcelona"], ["🇵🇪", "Peru", "Miami"], ["🇰🇿", "Kazakhstan", "Seoul"], ["🇲🇦", "Morocco", "Amsterdam"], ["🇸🇳", "Senegal", "Paris"], ["🇷🇺", "Russia", "Helsinki"], ["🇺🇸", "USA", "London"], ["🇨🇦", "Canada", "Dubai"], ["🇦🇺", "Australia", "Auckland"]];
const JM_CHIPS=[[0, "🇮🇳", "India", "India"], [1, "🇳🇬", "Nigeria", "Nigeria"], [2, "🇵🇭", "Philippines", "Philippines"], [3, "🇲🇽", "Mexico", "Mexico"], [4, "🇱🇧", "Lebanon", "Lebanon"], [5, "🇰🇷", "Korea", "South Korea"], [6, "🇵🇱", "Poland", "Poland"], [7, "🇰🇪", "Kenya", "Kenya"], [8, "🇧🇷", "Brazil", "Brazil"], [9, "🇵🇰", "Pakistan", "Pakistan"], [10, "🇨🇳", "China", "China"], [11, "🇻🇳", "Vietnam", "Vietnam"], [12, "🇬🇭", "Ghana", "Ghana"], [13, "🇨🇴", "Colombia", "Colombia"], [14, "🇪🇬", "Egypt", "Egypt"], [15, "🇯🇲", "Jamaica", "Jamaica"], [16, "🇺🇦", "Ukraine", "Ukraine"], [17, "🇮🇷", "Iran", "Iran"], [18, "🇯🇵", "Japan", "Japan"], [19, "🇮🇩", "Indonesia", "Indonesia"], [20, "🇿🇦", "South Africa", "South Africa"], [21, "🇨🇩", "DR Congo", "Democratic Republic of the Congo"], [22, "🇦🇷", "Argentina", "Argentina"], [23, "🇵🇪", "Peru", "Peru"], [24, "🇰🇿", "Kazakhstan", "Kazakhstan"], [25, "🇲🇦", "Morocco", "Morocco"], [26, "🇸🇳", "Senegal", "Senegal"], [27, "🇷🇺", "Russia", "Russia"], [28, "🇺🇸", "USA", "United States"], [29, "🇨🇦", "Canada", "Canada"], [30, "🇦🇺", "Australia", "Australia"]];
const JM={i:0,mine:false,timer:null,raf:0};
function jmHint(){try{return localStorage.getItem('nm.rootsHint')||''}catch(e){return ''}}
function jmBlock(){const h=jmHint();
  return `<div class="jm" id="jm"><div class="jm-head"><span>Roots here, home there</span><b class="jm-n">1 / ${JM_D.length}</b></div>
   <div class="jm-box">${JM_SVG}${JM_FLAGS}<span class="jm-heart" aria-hidden="true">♥</span></div>
   <div class="jm-cap" aria-live="polite"><span class="jm-big"></span><span class="jm-txt"></span></div></div>
   <p class="jm-ask">Where did you grow up? <small>Tap your flag</small></p>
   <div class="jm-chips">${JM_CHIPS.map(([j,f,n,c])=>`<button type="button" class="jm-chip${h===c?' on':''}" data-a="jmPick" data-j="${j}" data-c="${esc(c)}">${f} ${esc(n)}</button>`).join('')}<button type="button" class="jm-chip" data-a="jmOther">🌍 Other</button></div>`}
function jmShow(k,yours){const r=document.getElementById('jm');if(!r)return;JM.i=k;cancelAnimationFrame(JM.raf);
  r.querySelectorAll('.on').forEach(e=>e.classList.remove('on'));
  const arc=r.querySelector(`.jm-arc[data-i="${k}"]`);if(!arc)return;const L=arc.getTotalLength();arc.style.setProperty('--len',L);
  r.querySelectorAll(`[data-i="${k}"]`).forEach(e=>e.classList.add('on'));
  const d=JM_D[k];r.querySelector('.jm-n').textContent=(k+1)+' / '+JM_D.length;
  r.querySelector('.jm-big').textContent=d[0]+' → 🏠';
  r.querySelector('.jm-txt').innerHTML=yours?`Your roots: <b>${esc(d[1])}</b><br>Verified people with these roots near you show first.`:`Grew up in <b>${esc(d[1])}</b><br>lives in <b>${esc(d[2])}</b>`;
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const svg=r.querySelector('.jm-svg'),heart=r.querySelector('.jm-heart'),vb=svg.viewBox.baseVal,t0=performance.now();
  (function step(t){const p=Math.min(1,Math.max(0,(t-t0)/1300)),pt=arc.getPointAtLength(L*p);heart.style.opacity=p<1?1:0;
    heart.style.left=(pt.x/vb.width*100)+'%';heart.style.top=(pt.y/vb.height*100)+'%';if(p<1)JM.raf=requestAnimationFrame(step)})(t0)}
function jmLoop(){clearInterval(JM.timer);if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  JM.timer=setInterval(()=>{if(!document.getElementById('jm')){clearInterval(JM.timer);return}if(!JM.mine)jmShow((JM.i+1)%JM_D.length,false)},3200)}
function jmAfter(){if(!document.getElementById('jm'))return;const h=jmHint(),c=JM_CHIPS.find(x=>x[3]===h);
  if(c){JM.mine=true;jmShow(c[0],true)}else{JM.mine=false;jmShow(JM.i,false);jmLoop()}}
function renderWelcomeLook2(){return renderWelcomeV2().replace(/<div class="v2w-sky"[\s\S]*?<\/span><\/div>\n  <div class="v2w-body pad">/,'<div class="v2w-body pad v2w-look2">')
  .replace('<p class="v2brand">NEUMARRY</p>','<p class="v2brand">NEUMARRY</p>')
  .replace(/(<p class="v2w-lede">[\s\S]*?<\/p>)/,'$1'+jmBlock())}
(function(){
  Object.assign(A,{
    jmPick(el){const c=el.dataset.c;try{localStorage.setItem('nm.rootsHint',c)}catch(e){}JM.mine=true;clearInterval(JM.timer);
      document.querySelectorAll('.jm-chip').forEach(b=>b.classList.toggle('on',b===el));jmShow(+el.dataset.j,true)},
    jmOther(){try{localStorage.removeItem('nm.rootsHint')}catch(e){}JM.mine=false;document.querySelectorAll('.jm-chip').forEach(b=>b.classList.remove('on'));
      const t=document.querySelector('.jm-txt');if(t)t.innerHTML='Every country is welcome. You pick your roots in the first steps.';jmLoop()},
    jmFlag(el){JM.mine=false;jmShow(+el.dataset.i,false);jmLoop()}
  });
  const _bd=blankDraft;blankDraft=function(){const d=_bd();const h=jmHint();if(h&&!d.oc)d.oc=h;return d};
  const _rw=renderWelcome;renderWelcome=function(){return V2()?renderWelcomeLook2():_rw()};
  const _r=render;render=function(){_r();const on=LOOK2();document.documentElement.classList.toggle('look2',on);if(S.screen==='welcome')jmAfter();if(on&&S.screen==='app'){const t=app.querySelector('.topbar');if(t)t.classList.add('plum')}
    /* phone status bar + bottom bar take the colour of the screen (his ask 1 Nov 18:30: top and bottom must match) */
    const de=document.documentElement,pt=S.screen==='welcome'||(on&&S.screen==='app'&&!view&&!!app.querySelector('.topbar.plum'));
    de.classList.toggle('edge-t',pt);de.classList.toggle('edge-b',S.screen==='welcome');
    const st=S.screen==='welcome'?'DARK':'LIGHT';/* header B (his ok 6 Nov 15:40): blush header, dark status icons */if(st!==render._bar){render._bar=st;try{const B=Plug().SystemBars;if(B&&B.setStyle)B.setStyle({style:st}).catch(()=>{})}catch(e){}}};
})();

/* ---------- Premium world map (6 Nov 2026, his rule: no dotted map) ----------
   Real country shapes: Natural Earth 1:110m (public domain) via world-atlas, Equal Earth projection, made by gen.mjs.
   PM.draw({vb:[x,y,w,h], theme:'dark'|'light', hl:{countryId:colour}, arcs:[[cityA,cityB,colour]], pins:[[city,label,colour,dx,dy]],
            seq:[{hl,arcs,pins}...] (cycles every 3 s), fs: label size in map units, grid:true}) -> SVG string */
const PM=(function(){
 const D={"w":1000,"h":470,"scale":186.74837507712687,"tx":500,"ty":261.017321720731,"land":"M989.1,326.7L990,326.1L990.6,327.2L989.4,329.1L987.6,329.6L986.2,329.1L986.5,327.5L988,326.2ZM995.4,323.2L993.4,324.1L991.4,324.9L991.5,323.5L993.1,322.7L994,322.5L996,321.4L996,321.4L995.4,323.2ZM4,321.4L4,321.4L4,321.4L4.5,321.2L4.7,323L4.6,323.2L4.6,323.2L4,321.4ZM622.9,121.9L624.3,124.3L626.8,125L628.9,126.7L632.7,127.3L636.4,126.4L636.5,125.6L635.5,123.3L635,119.8L632.7,118.7L632.8,116.4L631.1,116.3L631,113.5L633.5,114.3L635.4,113.3L633.1,111.3L631.9,109.5L630.1,110.3L630.5,112.7L629.2,110.6L628.8,109.8L629.1,108.5L628.3,107.3L625.2,106.3L623.3,103.4L621.8,102.6L621.4,101.6L623.8,101.9L623.3,99.6L625.2,99.1L627.4,99.6L626.9,96.5L625.9,94.6L623.6,94.8L621.4,94L619,95.4L617,96L616.4,97.9L614.2,98.4L612.7,101.6L615.6,104.6L615.9,106.7L619.5,110.5L621.2,112.2L623,114.5L624.2,114.6L625.2,115.5L623.2,115.8L623.4,118.3L623.2,119.5L622.5,120.2ZM153.2,37.5L153.2,37.5L155.1,39.1L156.6,41.1L154.1,42.4L154.6,43L156.8,41.4L161.6,41.7L162.1,43.7L158.5,44.7L154.9,44.9L151.3,47.1L149.7,47.6L147.9,47.5L147.7,46.7L146.1,46.1L147.2,45.1L145.8,44.7L143.1,45L143.3,44.3L145.1,43.5L141.8,44L141,45L138.2,45.9L138.2,45.9L153.2,37.5ZM861.8,45.9L861.8,46L860.9,46.9L858,46.8L861.8,48L866.2,49.9L868.1,50.5L869.9,51.5L870.4,52.1L865.8,51.6L862.8,53.4L861.4,53.7L860.7,55.4L859.9,56.9L860.8,58.1L855.3,56.3L852.5,58.3L850.3,57.4L849.7,58.5L846.4,58.1L848,59.8L848.7,62.3L850.1,63.3L853.4,63.9L857.9,67.8L856,67.9L857.8,70.2L860.2,71.3L857.9,72.7L860.8,75.9L858.2,76.6L860.6,79.5L860.2,82.2L857.2,80.2L851.8,76.1L843.7,69.9L840.3,66.2L840.2,64.6L838.8,63.3L841.5,62.8L841.1,59.5L841.3,56.9L842.3,54.9L839.1,51.5L836.9,51.7L838.5,53.7L836.9,56.4L831,53.4L826.8,54.2L827,58.4L830.8,59.9L826.8,60.6L823.9,60.9L821.7,59L818,58.6L816.9,59.9L809.8,59.5L803.7,60.2L802.4,65.3L800.5,71.7L804.4,72L807.2,73.8L810,74.4L810,73L812.7,73.2L819,76.3L821.4,78.7L822.4,81.6L825.4,85.1L828.5,89.8L828.6,94.2L829.5,96.3L829,99.9L828.5,103.5L828.3,105.4L826.3,107.3L824.8,107.3L822.2,105.8L820.5,108.1L820.9,109.2L819.8,109L819.4,110.1L819.4,111.2L821,113.5L820.2,114.2L820.1,114.8L819.8,115.7L818.4,116.3L817.9,117.2L818.7,118.6L818.6,118.9L819.9,119.5L822.2,120.9L826.6,124.8L828.4,127L830.6,130.9L830.6,132.8L828.6,133.4L827.3,134.8L825.1,135.1L823.9,133.3L823.1,130.7L820.1,127.2L821.7,126.6L818.3,123.8L816.8,123.2L816.8,123.8L816.2,124.1L815.8,123.4L815,123.1L814,122.6L813.8,121.1L814.2,120.7L813.6,120.1L813.3,118.4L812.8,117.8L811.1,117.5L809.4,116.6L806.5,117.5L805.5,119.1L803.3,120L803.8,118.5L802.6,117.2L803.3,115L800.9,113.3L799.5,114.4L798,116.7L797.6,118.8L795.2,119L794.8,120.5L797.3,122.7L799.7,123.3L800.5,124.8L803.1,125.8L804.6,123.4L807.6,124.7L809.2,124.8L810.6,126.5L807.5,127.5L807.2,129.3L805.6,131L805.4,133.3L809.1,135.2L811.7,138.6L814.7,141.7L817.7,144.4L818.8,147L817.5,147.9L818.9,149.8L820.9,150.9L821.7,153.7L822.1,156.5L820.8,156.8L820.3,160.7L819.8,165.4L818.7,169.7L816.1,173L813.2,176L810.3,176.4L809.1,178.1L807.8,176.9L806.8,178.7L803.5,180.5L800.8,181.1L800.9,184.9L799.4,185.1L798,182.5L798.3,181.1L794.4,179.9L793.2,180.5L790.4,183.6L788.9,187.1L788.9,189.6L791.8,193.5L795.4,198.3L798.3,200.6L800.6,203.6L803,210.5L803.6,217L801.6,219.5L798.7,221.9L796.8,225L793.7,228.5L792.5,226.1L793,223.6L790.6,221.5L788.2,220.9L786.9,219L785,215.1L782.2,213.4L779.9,213.4L779.9,210.5L777.4,210.5L777.8,214.6L777,220.1L776.4,223.4L776.9,226.1L778.7,226.3L780.2,229.7L781,233L782.7,235.1L784.4,235.5L786,237.5L786.7,237.9L788.5,240.1L789.8,242.7L790.1,245.2L789.9,246.9L790.2,248.2L790.5,250.5L791.5,251.5L792.7,254.8L792.7,256.1L790.7,256.4L788,253.6L784.6,250.6L784.2,248.6L782.4,246.1L781.9,243L780.8,240.9L780.9,238.2L780.2,236.6L779,235.1L778.4,233.3L776.7,231.1L775.2,229.4L774.9,231.6L774.2,229.5L774.3,227.1L774.8,223.5L774.2,220.8L774.7,217.9L773.5,215.7L773.2,211.6L771.8,209.7L770.2,205.2L768.9,200.5L767.2,197.5L765.7,199.3L763,202L761.4,201.6L759.6,200.8L759.7,196.2L758.5,192.7L755.5,188.5L755.6,187.2L753.9,186.7L751.4,183.7L750.2,181.8L749.6,180L748.7,178.2L747.1,176.1L744.6,175.9L745.2,177.4L744.8,179.5L743.4,178.7L743.2,179.4L742.3,179L741.2,178.7L741.1,180L739.3,179.9L736.1,180.7L736.8,183.4L735.8,185.6L732.3,188.1L730,192.4L728.3,194.7L726,197.1L726.2,198.8L725,199.8L722.7,201.1L721.4,201.3L721,204.1L722.2,208.9L722.7,212L721.9,215.6L722.5,221.9L721.1,222.1L720.1,225L721,226.2L718.5,227.3L717.8,229.8L716.7,230.9L713.8,227.4L712.1,222.2L710.7,218.4L709.6,216.6L707.7,213L706.6,208.4L705.8,206L702.7,200.9L700.5,193.8L699,189.1L698.3,184.6L697.2,181.2L693.6,183.4L691.6,183L687.4,178.5L688.4,177.2L687.4,175.8L683.7,172.7L681.6,171.8L680.3,169.2L677.7,166.5L672.9,167.2L668.5,167.2L664.9,167.7L659.6,166.7L656.6,165.8L653.5,165.4L651.6,161L650.2,160.4L648.3,161L645.9,162.7L642.4,161.5L639.3,158.8L636.6,157.8L634.3,154.5L631.5,149.8L630.2,150.3L628.4,149.2L627.6,150.5L626,150.4L626.8,151.9L626.7,152.7L628,155.4L629.5,158.4L630.9,159.2L631.6,160.5L633.6,162L634,163.5L633.9,164.6L634.4,165.9L635.3,166.9L635.9,168L636.4,168.9L635.8,166.3L636.3,164.4L636.9,164L637.9,165.2L638.3,167.3L638,169.4L638.7,170.7L639.1,170.6L639.4,171.6L641.4,171L643.7,171.1L645.3,171.2L646.8,168.8L648.4,166.5L649.8,164.2L650.3,163L650.7,163.3L650.7,164.8L650.5,165.5L651.3,168.3L652.9,170.8L654.6,172.1L656.6,172.5L658.3,173.2L659.8,175.3L660.7,176.5L661.8,176.9L661.9,177.7L661.2,179.9L660.9,180.9L660,182.1L659.3,184.6L658,184.4L657.6,185.3L657.4,187.1L658,189.6L657.8,190L656.5,190L655,191.4L654.9,193.2L654.4,194L652.7,193.9L651.7,194.9L651.9,196.4L650.7,197.4L649.1,197L647.4,198.3L646.1,198.5L644.2,199.5L643.9,201.1L643.9,202.4L641.3,204L637,205.7L634.7,208.3L633.5,208.5L632.7,208.3L631.2,209.9L629.5,210.6L627.2,210.8L626.5,211L625.9,212L625.2,212.2L624.9,213.2L623.5,213.1L622.6,213.6L620.7,213.4L619.8,211.2L619.8,209.2L619.3,208.1L618.5,205.3L617.6,203.8L618.2,203.6L617.8,201.9L618,201.2L617.8,199.6L617.3,198L616.4,196.9L616.1,195.4L614.6,194.1L612.8,191L611.8,188L609.7,185.5L608.4,184.9L606.3,181.4L605.8,178.9L605.7,176.8L603.7,172.8L602.3,171.3L600.8,170.6L599.7,168.5L599.7,167.7L598.8,165.9L597.9,165.1L596.6,162.4L594.7,159.5L593.1,157.1L591.7,157.1L591.9,155.2L591.9,154L592.1,152.5L591.9,152L591.4,153.5L591.1,156.1L590.6,158L590,158.6L589,157.4L587.6,155.9L585.2,150.8L585,151.1L586.5,154.8L588.5,158.4L591.1,163.9L592.2,165.9L593.3,167.9L596.1,171.9L595.6,172.5L595.9,174.9L599.4,178.1L599.9,178.9L601.1,182.4L600.6,183.1L601.3,186.9L602.6,191.3L603.7,192.2L605.3,193.5L607.2,197.8L608.2,201.2L609.9,203L613.9,206.5L615.5,208.6L617.2,210.8L618.1,212.1L619.6,213.2L620.3,214.3L620.3,215.9L618.8,216.8L620,217.8L620.9,218.5L621.6,220L622.9,221.6L624.3,221.6L626.9,220.7L629.9,220.2L632.3,219.1L633.6,218.8L634.6,218.1L636.2,218L637,217.9L638.3,217.4L639.7,217L641,215.7L642,215.7L642.1,216.7L642,218.9L642.2,220.9L641.7,222.2L641.1,226.3L639.9,230.5L638.4,235.3L636.2,240.8L633.9,245.1L630.7,250.2L627.9,253.3L623.7,257L621.1,259.9L618.1,264.5L617.4,266.5L616.8,267.4L614.8,268.9L614.1,270.5L613,270.8L612.6,273.4L611.7,274.9L611.1,277.5L609.9,278.7L609.9,278.7L608.5,283.3L608.6,285.5L610.4,286.9L610.4,287.8L609.6,290.1L609.7,291.3L609.5,293.1L610.4,295.4L611.4,299.1L612.3,299.9L612.7,301.6L612.4,305.3L612.6,308.6L612.3,314.5L612.7,316.3L611.7,318.9L610.5,321.5L608.5,323.8L605.9,325.2L602.7,327L599.3,331L598.2,331.6L596.1,334.2L594.9,335.1L594.5,337.7L595.6,340.5L595.9,342.6L595.9,343.7L596.3,343.5L595.9,347.1L595.4,348.7L595.9,349.4L595.4,350.8L594.1,352.1L591.8,353.3L588.4,355.3L587.1,356.6L587.2,358.1L587.9,358.4L587.4,360.2L586.5,362.8L585.9,365.8L585.1,367.4L583.1,369.1L582.5,369.7L581.2,371.4L580.3,373.2L578.5,375.7L575.2,379.3L573.1,381.4L571,382.9L568.2,384.3L566.9,384.5L566.4,385.4L564.9,384.9L563.6,385.6L560.8,384.9L559.2,385.3L558.2,385.1L555.4,386.5L553.2,387L551.5,388.3L550.3,388.4L549.3,387.2L548.5,387.1L547.5,385.6L547.3,386.1L547,385.1L547.2,383.1L546.5,380.8L547.4,380.2L547.5,377.5L546,374.3L544.9,371.3L544.8,371.3L543.2,366.7L541.4,364.1L540.5,361.5L540,358L539.5,355.4L538.8,349.9L538.9,345.5L538.6,343.6L537.6,342.1L536.3,339.1L535,334.7L534.5,332.4L532.3,328.8L532.2,326L532,323.6L532.5,320.4L533.5,317L533.7,315.4L534.6,312L535.3,310.5L537,308L537.9,306.4L538.2,303.6L538.1,301.5L537.3,300.1L536.6,297.9L535.9,295.6L536.1,294.8L537,293.3L536.2,289.7L535.6,287.2L534.2,284.8L534.5,284.1L534.1,282.9L533.4,280.1L531.1,276.1L528.3,272.3L526.4,269.1L524.7,265.2L524.8,264L525.4,262.8L526.1,260L526.7,257.2L526.1,256.6L527.1,252.4L527.5,249.4L526.4,246.9L525.1,246.3L524.5,244.6L523.8,244L523.8,243L520.9,244.3L519.9,244.1L518.8,245L516.5,244.9L515,242.5L514.1,239.8L512.1,237.3L510,237.4L507.5,237.4L505.2,237.8L503,238.6L498.6,240.8L497,242.1L494.5,243.2L492,242.1L490.7,242.2L488.8,241.4L487,241.5L483.6,242.1L481.7,243.2L478.9,244.6L478.4,244.5L477.6,244.5L474.8,242.7L472.2,239.9L469.9,237.8L468,235.4L467.2,235.1L465.2,233.6L463.8,231.6L463.3,230.2L463,227.4L461.8,225.2L460.8,223.7L460.1,223.2L459.4,222.5L459.1,220.8L458.7,220L457.9,219.4L456.4,217.8L455.3,217.6L454.7,216.5L454.7,215.9L453.9,215.2L453.7,214.4L453.3,211.5L453.7,209.8L452.6,206.9L451.3,205.6L452.5,204.9L453.9,202.3L454.6,200.4L454.5,198.4L455.3,196.6L455.7,193.1L455.6,189.5L455.3,187.7L455.6,185.8L455,184.1L453.6,182.5L453.8,181L454,179.3L455.1,178.3L456,176.4L455.9,175.2L456.9,172.6L458.5,170.3L459.5,169.8L460.3,167.7L460.4,165.7L461.5,163.5L463.3,162.2L465.1,158.6L465.2,158.6L466.6,157.2L469.1,156.8L471.2,154.4L472.6,153.5L474.9,150.5L474.4,146.2L475.5,143.2L475.9,141.4L477.6,139L480.2,137.5L482.2,136.1L484,132.5L484.9,130.5L486.7,130.5L488.3,131.9L490.7,131.7L493.3,132.4L494.4,132.5L496.9,130.6L499.7,130L501.3,128.6L503.7,127.6L508,127L512.2,126.7L513.5,127.2L515.9,125.9L518.6,125.9L519.6,126.7L521.3,126.5L524,125.1L525.8,125.5L525.8,127.2L527.9,126L528.1,126.6L527,128.3L527,129.8L527.9,130.7L527.7,133.6L526.1,135.3L526.7,137.2L528,137.2L528.7,138.9L529.7,139.4L532.8,140.6L533.9,140.3L536.1,140.9L539.6,142.4L541,145.5L543.4,146.2L547.2,147.6L550.1,149.4L551.3,148.4L552.4,146.8L551.6,144.2L552.3,142.5L554.1,140.9L555.8,140.4L559.4,141.1L560.4,142.7L561.4,142.7L562.3,143.3L564.9,143.7L565.6,144.8L569.1,144.8L571.7,145.7L574.4,146.7L575.6,147.2L577.5,146.1L578.5,145.1L580.8,144.9L582.7,145.3L583.6,147L584.1,145.9L586.2,146.7L588.3,146.9L589.5,146L590.1,144.9L589.9,144.7L590.4,143.1L590.6,140.5L590.8,139.6L590.9,139.6L591.4,136.8L592.4,134.4L592.4,134.2L591.8,131.6L592.2,130.2L591,128.7L591.8,127.5L590.3,127.7L588.1,127L586.6,128.9L582.8,129.3L580.5,127.5L577.7,127.4L577.3,128.8L575.6,129.2L572.9,127.4L570.2,127.4L568.3,124.1L566.2,122.3L567.1,119.7L565.4,118.1L567.7,115L571.5,114.9L572.2,112.4L577,112.8L579.6,110.7L582.3,109.8L586.4,109.7L591.1,112L594.9,113.3L597.7,112.8L599.8,113.1L602.4,111.4L602.5,110L601.4,107.8L599.8,106.6L598.3,106.3L597.2,105.3L593.6,102.6L590.6,101.4L588.1,99.6L589.8,99.1L591.2,96.5L589.6,95.3L592.8,94.1L592.6,93.4L590.6,93.9L588.7,94.1L587.4,95.1L585.2,95.3L583.4,96.4L583.8,98.1L583.9,98.3L585.2,99.1L587.6,98.9L587.4,100L584.8,100.6L581.9,102.4L580.5,101.7L580.7,100.3L577.9,99.4L578.2,98.8L580.3,97.7L579.9,97.4L579.5,97L575.7,96.2L575.3,95.1L573.2,95.5L572.6,97.2L571.1,99.5L571.3,100.3L570.2,100.9L569.4,100.6L569.4,104.4L568.3,105.7L567.7,108L568.8,109.8L569.2,111.1L571.6,112.1L571.2,112.9L568.3,113.1L567.4,114.1L565.5,115.9L564.6,114.3L564.5,113.7L563,113.6L561.7,113.3L558.8,114.1L560.7,116L559.5,116.5L558.1,116.5L556.6,114.8L556.2,115.5L557,117.5L558.4,119L557.5,119.7L559.1,121.3L560.4,122.2L560.7,124.1L558.3,123.2L559.2,124.9L557.6,125.3L558.9,128.2L557.2,128.3L555,126.8L553.8,124.1L553.1,121.9L552,120.4L550.5,118.5L550.3,117.6L549.8,117.4L549.7,116.6L548.2,115.5L547.9,114L547.9,111.8L548.1,110.8L547.6,110.3L547.1,110L546.3,109L545.2,108.3L542.8,107.2L541.3,106L538.9,105.1L536.7,102.7L537.2,102.5L536,101.2L535.8,100.1L534.3,99.6L533.6,101L532.8,99.9L532.8,98.9L532.9,98.8L533.4,98.5L531.5,98.1L529.6,99.2L529.8,100.7L529.6,101.6L530.5,103.2L532.9,104.8L534.3,107.4L537.2,110L539.1,110L539.8,110.7L539.2,111.4L541.5,112.5L543.4,113.5L545.6,115.2L545.9,115.8L545.6,117L544.1,115.4L541.9,114.9L541,117L542.9,118.2L542.7,120L541.7,120.2L540.6,123L539.5,123.3L539.5,122.2L539.9,120.5L540.3,119.8L539.2,117.9L538.4,116.2L537.3,115.8L536.5,114.4L534.8,113.8L533.7,112.5L531.8,112.3L529.8,110.8L527.4,108.7L525.7,106.9L524.7,103.8L523.5,103.4L521.5,102.4L520.4,102.8L519.1,104.2L518.1,104.5L515.9,106.3L511.1,105.4L507.6,106.4L507.3,108.4L507.5,110.2L505.2,112.4L502,113.1L501.8,114.1L500.3,116L499.3,118.6L500.3,120.5L498.8,122L498.3,124.1L496.4,124.8L494.5,127.4L491.3,127.4L488.9,127.4L487.3,128.6L486.3,129.8L485.1,129.5L484.1,128.4L483.5,126.5L481.1,126L480.1,126.8L478.8,126.4L477.4,126.7L477.9,124.1L477.8,122.1L476.7,121.8L476.1,120.5L476.4,118.4L477.4,117.2L477.7,115.8L478.3,113.9L478.3,112.5L477.8,111.3L477.8,110.3L478,108L477.1,106.6L480.6,104.3L483.6,104.9L486.8,104.9L489.4,105.4L491.4,105.2L495.4,105.3L496.6,103.4L497.1,97.2L494.7,94L493,92.5L489.4,91.3L489.3,89.1L492.3,88.4L496.2,89.2L495.5,85.8L497.7,87.1L503.1,84.8L503.8,82.4L505.8,81.8L507.6,81.3L508.8,80.5L510.6,76.3L513.7,75.1L515.5,75.2L515.9,74.6L517.8,74.4L518.3,75L519.7,73.6L519.1,72.6L518.9,71L517.9,69.5L517.7,66.8L518,66L518.6,65.2L520.5,65.1L521.2,64.3L522.9,63.6L522.9,65L522.3,65.8L522.7,66.6L523.9,67L523.4,68L522.8,67.7L521.3,69.6L522,71L522.1,72L524.4,72.7L524.5,73.7L526.7,73.2L527.9,72.4L530.5,73.5L531.7,74.4L533.1,73.6L536.5,72.3L539.2,71.3L541.4,71.8L541.7,72.5L543.9,72.5L544.2,71.3L547.1,70.4L546.3,68.1L546,66.1L546.8,64.4L548.7,63.5L550.8,65.5L552.5,65.5L552.6,63.4L552.5,61.9L551.8,62.2L550.2,61.3L549.8,59.8L552.3,59.1L554.9,58.8L557.3,59.2L559.5,59.1L561.6,57.7L559.1,56.5L555.3,56.7L551.8,57.6L548.5,58.2L547,56.8L544.8,56L544.8,53.6L543.4,51.4L544.1,50L545.7,48.6L549.7,46.1L551,45.6L550.5,44.7L547.5,43.7L544.2,44.3L542.6,45.8L543.2,47.2L540.3,49.1L536.7,51.1L535.7,54.5L537.5,56.2L539.7,57.6L538.2,60.4L536.1,61L535.8,65.4L534.9,67.9L532.2,67.7L531.2,69.8L528.6,69.9L527.7,67.4L525.6,64.4L523.6,60.7L522,59.1L518,62.1L515.2,62.7L512.2,61.4L511.3,58.6L510.4,52.9L512.2,51.4L517.5,49.4L521.3,47.1L524.6,44L528.8,39.9L531.8,38.3L536.6,35.9L540.6,35L543.8,35.1L546.3,33.6L549.7,33.7L553,33.3L559.3,34.7L557.1,35.2L559.5,36.4L561.3,35.7L564.8,36.9L570.3,37.3L578.5,39.6L580.4,40.6L581.1,42L579.3,43.1L576.3,43.7L566.9,42.1L565.5,42.3L569.3,43.9L569.8,44.9L570.7,47.2L573.5,47.9L575.3,48.5L575.2,47.4L573.6,46.4L574.6,45.6L580,47L581.5,46.4L579.5,44.8L583.3,42.7L585.2,42.8L587.3,43.5L587.8,42.1L585.7,40.8L586.1,39.6L584.1,38.3L589.8,39L591.4,40.1L589.1,40.4L589.6,41.5L591.5,42.3L594.3,41.8L594.2,40.5L597.8,39.5L603.6,37.7L605.1,37.8L603.9,39.1L606.4,39.3L607.4,38.6L611,38.5L613.4,37.7L616.3,38.9L617.7,37.6L615,36.4L615.6,35.8L621.6,36.4L624.7,37L633.2,39.3L633.8,38.2L631.1,37.2L630.7,36.8L628.3,36.6L628.3,35.7L626.2,34.2L625.7,33.6L628,32L628,30.4L629.1,30.1L634.4,30.5L635.5,31.5L634.9,32.9L636.5,33.5L638.1,34.8L639.7,37.4L642.8,38.6L643,40L641.3,43L643.7,43.3L644,42.5L645.8,42L645.5,41L646.5,40L644.5,38.8L644.3,37.5L642.1,37.3L640.8,36.2L640.8,34.3L637.2,32.8L639.6,31.6L638.1,30.4L639,30.4L640.8,31.3L641.5,33L643.8,33.4L641.8,32.1L644.4,31.4L648.1,31.3L652.5,32.3L649.5,30.8L647.7,29.1L650.6,28.7L655.1,28.8L658.9,28.6L656.5,27.8L657.6,26.8L659.7,26.7L662.4,26L667,25.8L667.1,25.4L671.7,25.3L673.5,25.6L676.7,24.8L680,24.8L679.8,24.3L680.8,23.7L684.3,23.1L687.8,23.6L685.8,23.9L690.1,24.1L691.5,24.8L692.7,24.4L697.9,24.5L702.8,25.1L705,25.7L705.5,26.4L704.1,26.9L700.5,27.7L699.7,28.2L702.2,28.4L705.4,28.8L706.7,28.5L709,29.6L709.2,29.1L711.8,28.9L718.1,29.2L719.6,29.9L727.6,30.2L726,28.9L730.3,29.2L733.2,29.2L737.4,30.1L739.8,31.2L739.8,31.9L744.1,33.3L748.1,34L747.2,32.1L751.4,32.9L753.9,32.5L758.3,33L758.9,32.5L762.4,32.8L758.5,31.1L759.8,30.4L778.4,31.5L781.7,32.6L788.9,33.9L796,33.6L800.2,33.9L803.1,34.7L805.2,36.1L808.5,36.6L810.4,36.2L813.7,36.2L818,36.5L821.2,36.3L827.7,38.1L828.9,37.4L825.2,36.2L824.5,35.3L831.5,35.9L835.3,35.8L842.5,36.7L846.8,37.5L861.8,45.9ZM230.5,36.1L233.4,36.5L235.1,37.5L236.8,37.7L239.7,36.8L242.8,36.2L245.4,36.5L249.4,35.6L253.2,35.2L253.4,35.9L255.4,35.5L257.1,34.6L258.1,34.8L259,36.5L263.3,35.2L261.6,36.7L264.4,36.4L265.9,35.8L268,35.9L269.9,36.7L273.5,37.4L275.8,37.8L277.8,37.6L279.2,38.7L275.3,39.7L278.3,40.1L283.9,39.9L285.9,39.5L286.7,40.8L289.9,39.7L288.9,38.8L290.9,38.2L293.4,38.1L295.1,37.9L296.2,38.3L296.9,39.4L299.3,39.3L301.8,40.2L305.1,39.9L307.9,39.9L309,38.7L311,38.3L313.4,39L311.5,40.9L314.3,39.3L315.8,39.3L318.6,37.3L317.8,36.1L316.3,35.4L318.6,33.3L322.2,32L324.4,32.3L325.4,33.1L326,35.2L323.3,36.1L326.5,36.5L324.6,38.5L328.6,37L329.8,38.2L327.9,39.7L328.5,41.1L331.9,39.6L334.8,37.9L336.8,35.7L339.4,35.9L342,36.2L343.7,37.1L343,38.1L340.7,39.2L341.1,40.3L340.1,41.3L335,42.8L332,43.1L330.5,42.5L329,43.6L325.5,45.4L324.1,46.4L320.5,47.9L317.5,48.1L315,49.1L313.7,50.6L311,50.9L306.9,52.8L302.4,55.5L300,57.5L297.6,60.4L300.4,60.9L299.6,63.3L299.1,65.3L302.6,64.8L305.8,65.9L307.3,66.9L308,68.2L310.3,69L311.9,70.1L315.5,70.3L317.7,70.5L315.9,72.9L315,75.7L314.8,78.9L316.7,81.6L319,80.7L321.8,77.8L323.1,73.3L322.3,71.9L326.6,70.6L330.3,68.7L332.6,66.8L333.4,65L333.3,62.8L331.9,60.8L336.2,58.1L336.7,55.9L338.6,52.1L340.4,51.5L343.5,52.2L345.5,52.4L347.6,51.8L349,52.6L350.7,54L350.7,55L354.3,55.1L353,57.2L351.9,60.4L353.6,60.8L354.4,62.3L358.2,60.9L361.8,58.1L363.8,56.9L364.3,59.2L365.4,62.5L366.2,65.6L364.6,67.3L366.8,68.8L368.1,70.4L371.3,71.1L372.4,72L372.3,74.3L373.9,74.7L374.4,75.8L373.3,78.9L371.2,80L369.2,81L365,82.1L361.2,84.5L357.1,85L352.4,84.3L349,84.3L346.5,84.5L343.6,86.6L340.1,88L335,91.9L331.1,94.7L333.4,94.2L338.8,90.3L344.8,87.8L348.4,87.5L349.9,88.9L346.8,90.9L346.3,94.2L346.2,96.5L348.8,98.1L352.9,97.6L356.5,94.2L355.9,96.4L357,97.5L353.4,99.5L347.4,101.4L344.6,102.7L341.1,104.9L339.3,104.7L340.2,102L345.3,99.5L341.4,99.6L338.6,99.9L338.6,101L335.5,102.5L332.6,103.6L329.7,104.5L327.7,106.4L327,107.1L326.4,108.8L326.6,110.5L327.6,110.6L327.7,109.4L328.2,110.1L327.7,111L325.8,111.6L324.7,111.5L322.7,112.1L321.5,112.2L320,112.4L317.6,113.3L321.5,112.7L322,113.3L318.2,114.3L316.6,114.3L316.8,113.9L315.7,114.8L316.4,115L315.1,117.3L312.3,119.8L312.5,119L312,118.8L311.4,118L311.3,119.8L311.7,120.4L311.4,121.6L310.1,122.9L307.8,125.6L307.6,125.4L309.2,123.2L308.3,121.9L309,119.1L308,120.6L307.8,122.7L306.3,122.2L307.7,123.2L306.7,126.4L307.4,126.6L307.3,127.8L306.5,131.2L304.1,133.7L301.2,134.7L298.9,136.7L297.5,136.9L295.8,138.2L295.1,139.3L291.6,141.6L289.6,143.2L287.8,145.3L286.7,147.7L286.5,150.2L286.5,153.2L287,155.7L286.6,157.2L286.9,161.3L286.2,163.7L285.8,165.1L284.6,167.3L283.7,167.7L282.5,167.3L282.4,165.7L281.6,164.9L280.9,161.8L280.4,159.1L280.3,157.7L281.5,155.4L281.3,153.4L280.1,150.5L279.2,150L276.1,151.6L275.7,151.4L274.9,149.8L273.5,148.9L270.4,149.3L268.2,148.9L266.1,149.2L264.8,149.7L265,150.7L264.6,152.1L264.9,152.8L264.3,153.2L263.4,152.7L262.3,153.4L260.4,153.3L259,151.4L256.6,151.9L254.9,151L253.2,151.3L250.7,152.1L247.5,154.7L244.4,156.2L242.4,157.9L241.3,159.5L240.6,162L240.2,163.7L240.4,164.9L238.5,168.1L237.3,170.6L235.9,175.5L235.2,177.3L235.2,179.2L235.6,181L235.5,183.8L236.7,186.6L236.9,188.7L237.6,190.5L240.3,191.4L241.2,193L243.8,191.9L245.9,191.6L248.1,190.9L249.9,190.3L252,188.8L253,186.6L253.9,183.6L254.6,182.5L256.6,181.6L259.7,180.7L262,180.8L263.8,180.5L264.2,181.3L263.8,183.1L261.9,185.2L260.8,187.5L261.2,188.1L260.5,189.7L259.3,192.6L258.8,191.6L258.2,191.7L258.1,192.2L258.6,192.2L258.4,193.2L257.7,194.8L257.8,195.4L257.3,196.7L257.4,197.1L256.8,198.9L256.1,199.9L255.6,200L254.8,201.3L255.6,202L256,201.4L256.7,201.9L257,202.1L257.7,201.4L258.5,201.4L258.7,201.7L259.1,201.5L260.4,201.8L261.6,201.7L262.6,201.3L263,200.9L263.8,201.1L264.5,201.3L265.2,201.2L265.8,200.9L267,201.4L267.4,201.5L268.1,202.2L268.8,203L269.7,203.6L270.3,204.6L270,205L269.8,205.8L269.9,207.2L269.1,208.4L268.6,209.9L268.3,211.6L268.3,212.5L268.2,214.2L267.8,214.6L267.3,216.2L267.4,217.2L266.7,218.1L266.8,219.1L267.1,219.8L267.6,221.8L268.6,223.3L269.7,224.9L270.6,226.3L270.5,227.1L271.6,227.2L271.9,226.9L272.6,227.8L274,227.6L275.3,226.6L277,225.9L278,224.7L279.6,225L279.4,225.3L281,225.5L282.2,226.1L283,227.2L284,228.3L285.4,228.4L287.7,225.8L288.9,225.4L289,224.1L289.8,221L291.5,219.2L293.3,219.2L293.6,218.4L295.7,218.7L298.1,216.8L299.3,216L300.8,214.2L301.7,214.4L302.4,215.4L301.7,216.6L301.5,217.5L299.9,217.9L300.6,219.6L300.4,221.6L299,223.8L299.9,226.8L301.1,226.5L301.9,223.8L301.2,222.5L301.2,219.7L304.8,218.1L304.6,216.4L305.7,215.2L306.5,217.8L308.4,217.9L310,220L310.1,221.2L312.5,221.2L315.6,220.9L317,222.5L319.1,223L320.8,221.8L320.9,220.9L324.3,220.7L327.7,220.6L325.2,221.7L326.1,223.5L328.3,223.8L330.3,225.6L330.5,228.6L332,228.5L333,229.4L334.8,230.8L336.4,233.3L336.4,235.2L337.5,235.3L338.9,237.1L339.9,238.4L343.3,239.2L343.6,238.5L345.9,238.2L348.8,239.3L349.8,239.7L351.8,240.6L354.7,243.8L355.1,245.3L356.1,245.1L356.7,247.2L358.2,253.8L359.7,254.4L359.8,257.1L357.6,260.2L358.5,261.3L363.5,261.9L363.6,265.7L365.7,263.2L369.2,264.6L373.9,266.9L375.3,269.1L374.9,271.2L378.1,270L383.6,272L387.8,271.9L392,275L395.7,279.2L397.8,280.3L400.2,280.5L401.3,281.7L402.3,286.5L402.9,288.8L401.9,295L400.6,297.4L396.9,302.6L395.3,306.9L393.4,310.1L392.7,310.2L392.1,312.9L392.8,319.9L392.4,325.6L392.3,328L391.5,329.5L391.5,334.4L389.1,339.2L389,342.9L387,344.5L386.6,346.7L383.6,346.7L379.6,348.1L377.9,349.7L375,350.7L372.2,353.6L370.4,357.1L370.4,359.8L371.1,361.8L371.2,365.4L370.8,367.1L369.3,369L367.4,375.2L365.7,377.9L364.2,379.6L363.7,382.8L362.4,384.8L361.7,387L359.2,388.8L357.2,388.2L355.8,388.5L353.2,387.1L351.4,387.2L349.4,385.3L349.7,387.1L353.6,390L353.8,392.3L355.7,393.8L356,395.4L354.7,399.7L351.4,401.5L346.6,402.2L343.7,401.8L344.8,403.8L345,406.2L346,407.9L344.9,409L342.5,409.5L339.7,408.3L339,409.1L340.4,412.3L342.4,413.3L343.4,412.3L344.7,414L342.7,415L341.5,416.9L342.2,420.1L342.2,421.8L340,421.8L338.7,423.4L338.9,425.7L342.1,427.9L344.6,428.6L344.9,431.3L342.8,433L342.7,436.5L341.1,437.6L340.8,439L342.9,442L345.2,443.7L344.2,443.5L342.2,443.5L341.4,444.2L339.9,445.2L340.8,447.9L339.9,447.9L336.9,447L333.3,445L329.6,443.4L328,441.6L327.8,439.9L325.7,438L323,432.9L322.7,430L324.1,427.7L320.1,426.8L321.2,424L319.9,418.8L323,420L321.8,413.4L319.8,412.5L320.6,416.5L318.9,416.1L317.9,411.5L316.6,405.5L316.9,403.2L315.1,400L313.7,396.3L314.7,396.2L314.6,390.7L314.8,385.3L314.5,380.2L312.6,375L312.6,372.1L311.3,367.7L311.8,363.4L310.9,356.5L310.3,349.1L309.7,341L308.5,335L307.2,329.8L304.2,327.7L303.7,326.2L297.8,322.5L292.3,318.4L289.9,316.1L288.4,313L288.7,312L285.8,307.1L282.4,300.2L279.2,292.7L277.9,291L276.9,288.2L274.5,285.7L272.5,284.2L273.3,282.5L271.8,278.9L272.5,276.3L274.7,273.9L276.1,271.1L275.5,269.4L274.4,271.2L272.7,269.5L273.3,268.4L272.7,265L273.7,264.4L274.2,262.1L275.3,259.7L275.1,258.1L276.7,257.3L278.6,255.8L278.2,254.6L279.3,254.3L279.2,252.4L279.9,251.1L281.3,250.8L282.5,248.4L283.6,246.5L282.6,245.6L283.3,243.4L282.8,239.9L283.4,238.9L283.1,235.7L282.1,233.7L281.3,232.6L280.8,230.6L281.6,229.6L280.9,229.3L280.4,228.1L279.1,227.1L277.9,227.3L277.2,228.6L276,229.6L275.4,229.7L275.1,230.5L276.3,232.5L275.5,233L275,233.5L273.7,233.7L273.4,231.5L273,232.1L272.1,231.9L271.6,230.4L270.5,230.1L269.8,229.7L268.6,229.7L268.5,230.5L268.2,230L266.7,229.1L266.2,228.3L266.6,227.7L266.5,226.9L265.8,225.9L264.8,225.2L263.9,224.7L263.8,223.6L263.1,223L263.2,224.1L262.6,225L262,223.9L261.2,223.5L260.9,222.8L261,221.6L261.5,220.5L260.7,219.9L261.5,219.2L260.6,218L259.5,216.5L259,215.3L258,214.1L256.8,212.4L257.2,211.8L257.6,212.4L257.8,212.1L257.5,210.9L256.7,210.6L256.3,211.5L254.7,211.4L253.7,211.1L252.7,210.3L251.1,210.1L250.5,209.3L249.1,208.7L247.4,208.6L246.2,207.9L245,206.3L242.5,202.3L241.2,201.1L239.2,200.2L237.6,200.4L235.1,201.8L233.7,202.2L231.9,201.2L229.9,200.5L227.7,198.8L225.7,198.3L222.9,196.6L221,194.8L220.5,193.8L219,193.6L216.4,192.4L215.6,190.8L213.1,188.7L212.3,186.4L212.1,184.6L213.1,184.2L213,183.2L213.9,182.2L214.2,181L213.7,179.3L213.8,177.9L213.4,176.1L212,172.5L210.1,169.6L209.5,167.4L207.7,165.9L207.4,165.1L208.6,162.9L207.5,162L206.5,160.3L206.7,157.8L205.3,157.5L204.5,155.7L203.8,154L204.1,152.9L203.7,150.2L203.8,147.5L204.4,146.2L203.1,144.8L202.2,145L201.1,144L200.1,145.4L199.8,147.1L199,149.7L199.4,151.2L200.4,153.6L200.5,154.4L200.8,154.7L200.7,155.9L201.2,155.8L200.9,158.1L201.4,159L201.6,160.3L202.6,162.1L202.4,165.4L202.7,167L202.9,168.7L202.5,170.5L203.8,170.7L204.4,172.3L204.9,173.9L204.6,174.6L203.1,175.9L202.6,175.9L202.6,173.7L201.4,171.6L200,169.9L198.9,169L199.8,166.3L200,164.4L199.1,163.3L197.8,161.7L197.3,162.2L197,161.2L195.6,160.4L194.8,158.3L195.1,158L196.1,158.2L197.6,156.9L198.2,155.3L197.1,152.8L196,151.8L195.9,149.7L195.8,147.4L195.8,144.6L196,141.5L196.4,139.7L195.6,137.7L194.6,137.3L194.8,136.3L193.4,136.2L192.9,135.3L190.7,134.9L190.3,134.4L190.9,132.5L190.1,129.1L190.5,124.4L191,123.7L190.5,122.6L190.1,119.8L191.3,117.1L191,115.3L193.2,112.6L194.8,109.9L195.6,107.4L198.5,104.4L200.7,101.6L202.9,98.7L205.4,94.6L206.6,92L207,90.6L207.7,90L210.3,91L209.5,93.9L210.7,93.1L212.1,90.6L213.2,88.2L212.9,88.1L210.6,85.2L210,84L206.8,82.8L207.7,80.2L209.6,78.4L207.7,77.2L209.4,74.9L208.6,72.9L209.9,71.5L209.6,70.4L208.5,69.6L210.3,67.2L209.6,65.1L211.1,62.6L209.2,62.4L205.9,62.3L204.2,61.6L202.8,58.9L201.3,58.5L198.6,57.6L195.4,57.8L192.7,56.6L191.5,55.6L188.5,56.1L186.8,57.8L185.4,58L182.3,58.5L179.4,59.4L176.4,59.9L177.9,58.4L182,56L185.2,55.2L185.4,54.6L181,56L177.4,57.6L172.1,59.4L172.1,60.7L167.7,62.5L164.1,63.6L160.9,64.4L159,65.6L153.9,67L151.7,68.2L147.7,69.4L146.4,69.2L143.5,69.9L140.1,70.9L137.2,71.8L132.4,72.6L132.6,72.1L136.6,70.8L139.8,70L143.9,68.5L147,68.2L149.5,67.1L154.4,65.5L155.6,65L158.3,64L161.2,62L164.2,60.5L160.7,61.3L160.6,60.9L158.3,61.8L158.6,60.5L156.8,61.4L157.6,60.1L154.2,61.2L152.8,61.2L154.7,59.6L156.3,58.7L156.2,57.8L152.7,58.3L152.6,57.1L152,56.5L153.9,55.1L153.8,54.1L156.7,52.7L160.3,51.3L162.8,50.1L164.7,50L165.6,50.3L168.9,49.2L170.1,49.4L172.7,48.7L173.9,47.7L173.4,47.2L176.2,46.4L174.9,46.4L172,46.9L170.6,47.4L169.8,46.9L166.6,47.1L164.5,46.6L165,45.7L164.6,44.4L168.8,43.5L175,42.4L176.6,42.4L174.6,43.5L178.9,43.4L179.4,42.1L178.3,41.3L178.6,40.3L178.2,39.4L176.6,38.7L179.5,37.7L183,37.6L187,36.7L189,35.8L192.5,34.9L194.8,34.7L199.8,33.9L201.3,34L205.8,33L208.1,33.4L208,34.2L209.5,33.9L212.5,34L211.7,34.4L214.1,34.7L216.3,34.5L219.3,35.1L222.7,35.3L223.8,35.5L226.8,35.2L228.8,35.8ZM326.7,51.8L329,50.7L331.8,50.7L331.4,51.2L328.1,52.5L326.6,52.4ZM352.4,30.5L351.1,29.6L351.7,29L352.7,28.9L356.8,29.1L359.1,30L358.9,30.4L357,30.4L355,30.3L352.8,30.6ZM333.6,52.7L334.9,51.9L335.7,52L335.9,52.5L334.2,53.7L333.5,53.5L333.4,52.8ZM330.5,27L328.8,27.6L326.3,27.4L324.6,27L326.3,26.4L329.3,26L330.3,26.5ZM334,23.4L333.2,23.4L330,23.3L329.9,23L333.4,23L334.4,23.2ZM330.7,21.8L332.3,22.2L331.3,22.7L328.4,23L327.3,22.7L327.1,22.2L327.6,21.7L329.8,21.8ZM339.5,27.9L336.7,27.7L332.4,27.2L332.7,26.3L333.2,25.6L332.1,25L328.6,24.8L327,24.4L328.3,23.9L331.9,23.9L333.4,24.4L336.9,24.4L338,24.8L337,25.3L338.7,25.7L339.5,26L341.8,26.1L344.3,26.2L347.5,25.9L351.3,25.8L354.1,25.9L355.5,26.4L355.4,27L353.8,27.5L350.8,27.8L348.7,27.6L343.2,27.8ZM304.3,22.6L306.5,22.8L305.4,23.1L301.6,23.5L299.6,23.1L301.5,22.7ZM305.9,21.8L307.8,22L305.4,22.3L302.5,22.3L302.7,22.1L305,21.7ZM372.6,81.3L370.7,83.2L368.2,85.7L370.1,84.7L371.4,85.4L370.3,86.4L372,87.2L373.4,86.5L375.4,87.4L373.9,89.6L375.7,89.1L375.5,90.7L375.7,92.6L373.8,95.2L372.7,95.4L371.3,94.8L372.6,92.3L372.1,91.9L368.5,94.5L367.1,94.4L369.3,93L367.2,92.3L364.6,92.4L360.1,92.4L360.1,91.5L361.9,90.4L361.2,89.6L363.8,87.8L367.9,83.1L370,81.4L372.3,80.4L373.3,80.6ZM331.6,45.7L333.2,46.4L335,47.1L334.3,48.2L336,48L336.9,48.8L334.5,49.5L331.8,49L331.4,47.9L328.4,49.2L324.6,50.4L325,49L322,49.2L324.7,48.1L326.4,46.3L328.8,44.3L330,44.4L329.6,45.4L330.9,45.1ZM353.5,31.2L355.9,30.6L359.3,31.4L361.2,32.3L360.8,33L364.6,32.6L365.6,33.8L369.6,34.5L370.7,35.3L371.3,37.1L367.1,38L370.7,39.3L373.5,39.8L375.1,41.7L378.1,41.8L376.6,43.3L371.6,45.9L369.7,45L367.9,42.9L365.1,43.1L364.1,44.4L365.3,45.7L367.4,46.7L367.9,47.3L367.8,49.6L366.1,51.3L363.9,50.6L359.9,48.7L361.6,50.8L362.9,52.2L362.7,53L357.7,52.1L354.1,50.7L352.4,49.6L353.5,48.9L351.3,47.7L349.1,46.6L348.7,47.3L342.6,47.6L341.4,46.9L344,45.2L347.8,45.2L352.1,44.9L352,44.1L353.4,43L357.5,41L357.6,40L357.4,39.3L355.2,38.4L351.8,37.7L353.4,37.2L352.4,36L350.8,35.9L349.8,35.2L348.3,35.8L344.6,36L338.1,35.6L334.6,35L331.7,34.7L330.8,34.1L333.6,33.3L330.9,33.2L332.1,31.4L335,29.9L337.6,29.2L342.8,28.8L340.4,29.9L340.8,30.9L343.8,29.6L349.1,28.9L350.7,30.6L349.4,31.7ZM327.4,28.3L331.2,28.3L334.3,28.7L330,30.2L327.5,30.5L324.1,31.8L322.1,31.7L322.5,30.2L323.4,29.4L325.2,28.7ZM279.9,25.3L284.5,24.2L289.3,23.4L292,23.4L294.7,23.2L293.1,24.2L291,24.7L289.3,24.8L285.1,25.4L281.9,25.6ZM203,73.6L205.4,73.4L201.7,76.6L201.6,78.8L200.7,78.8L200.5,77.5L200.9,76.2L200.6,75.4L201.3,74.1L202.3,73.2ZM316.2,21.2L319.4,21.4L323.6,21.8L324.3,22.4L324.3,22.9L321.6,22.7L319.2,22.3L315.4,22.3L317.5,21.9L315.8,21.7ZM210.5,89.6L209,90L206.2,88.7L206.3,87.6L205.1,86.6L205.3,85.7L203.4,85.2L203.8,83.6L204.6,82.9L206.4,83.6L207.5,84L209.4,84.3L209.4,85.3L209.4,86.7L210.8,88ZM278.8,27.8L280.9,28.1L285.5,28.2L286.6,28.7L287.7,29.3L284.8,29.8L278.7,30.9L274.8,32.2L273.8,33L267.7,33.8L267.7,33L264.7,32.1L266.5,31.3L269.5,30.1L272.7,29L272.3,28ZM306.4,25.7L308.3,25.4L310.1,25.5L309.5,26.2L307.5,26.9L301.1,27.2L295.7,27.8L292.8,27.9L293.3,27.4L297.9,26.7L289.5,26.9L287.3,26.6L291.7,25.2L294,24.8L298.4,25.3L300.4,26.1L303.4,26.2L302.6,24.8L304.9,24.3L306.6,24.5L306.3,25.2ZM303.4,30L304.7,30.7L303.9,32.4L303,33.7L305.2,34.6L307.6,35.5L306.5,36.3L303.2,36.5L303.6,37.2L302.2,38L299,37.6L296.3,37.1L294,37.2L289.6,37.9L284.3,38.2L280.7,38.4L280.7,37.4L278.8,36.9L276.8,37.1L276.3,35.6L277.8,35.4L281.2,35.1L283.7,35.2L286.6,34.8L283.5,34.4L279.2,34.5L276.6,34.5L276.5,33.8L281.8,33.1L278.8,33.1L276.2,32.6L279.5,31.3L281.6,30.6L287.9,29.6L289.4,29.9L287.5,30.7L292.2,30.2L293.7,31.1L296.9,30.2L297.9,30.8L297.4,32.5L299.2,31.7L300,30L301.9,29.7ZM313.9,30.6L313.1,29.5L316.2,28.7L318,29.1L321.5,28.9L321.5,29.4L318.9,30.1L320.9,30.9L318.9,32.5L315.1,33.2L313.4,33L312.9,32.3L309.7,31L310.4,30.4ZM304.3,29.1L306.8,29.1L307.8,29.4L304.9,30.5L303.4,29.4ZM324.5,24.4L325.2,25.1L324.4,25.8L322.3,26.9L319.1,27.1L317.5,26.8L318.5,26L315.4,26.1L316.6,25L318.5,25L321.8,24.5L324.2,24.6ZM334.4,19.8L335.9,19.5L337.8,19.5L337.3,19.2L341.3,19.2L342.9,19.7L345.6,19.9L348.2,20.1L348.8,20.8L350.5,21.2L347.8,21.5L343.6,22.4L340.4,22.5L336.9,22.3L335.6,21.9L336.1,21.4L337.8,21.1L334.6,21.1L333.1,20.8L332.6,20.3ZM343.4,18.6L346.1,18.4L348.1,18.4L351.6,18.3L354.5,18L356.6,18L358.1,18.2L359.9,17.8L362.3,17.7L365.4,17.6L370.6,17.6L371.4,17.7L376.5,17.5L380.1,17.6L383.7,17.6L388.2,17.7L391.8,17.8L394.7,18L394.5,18.2L390,18.6L385.7,18.8L384,19L387.7,19L383.2,19.5L380.2,19.8L376.5,20.7L372.7,20.8L371.4,21.1L366,21.2L368.3,21.3L366.9,21.5L367.8,22.1L365.7,22.5L362.7,22.9L361.4,23.4L358.5,23.8L358.5,24.1L361.6,24L361.3,24.4L355.8,25.2L351.5,24.8L346,25L343.5,24.9L340.2,24.8L340.7,24.1L344.3,23.8L344.4,22.9L345.6,22.8L349.7,23.4L348.2,22.5L345.6,22.3L347.5,21.8L350.9,21.6L351.8,21.2L349.8,20.7L349.6,20.2L354.3,20.2L355.6,20.3L358.7,20L354.9,19.8L348.8,19.9L346.1,19.6L345.1,19.2L343.4,18.9ZM352.7,40.6L351,41.2L348.7,41.3L349,40.3L350.7,39.2L352.7,38.9L353.8,39.5L353.2,40.3ZM315.6,36.5L316,37.3L314.1,37.9L312.1,37.3L310.3,37.6L308.6,36.7L310.9,36.1L313.1,35.2L314.6,35.8L315.4,36.1ZM350.4,85.6L351.3,85.3L354.1,86.1L355.9,87.3L355.8,87.8L354.6,87.9L352,87ZM348.2,94.1L348.5,95.6L350.1,96L352.3,95.9L350.7,97.2L349.7,97.4L347.2,96.1L347,95ZM76.3,185.9L76.7,186.2L77,186.7L77.3,188L77.1,188.2L75.8,189L74.7,189.5L74.1,190.1L73.6,189.6L74,188.6L74,187.2L74.3,186.8L75,186.2L75.1,185.5L75.3,185.2L75.5,185.3ZM75.6,183.4L75.2,183.8L74.2,184.1L74,183.3L73.8,183L73.9,182.8L74.2,182.5L75.1,182.8ZM74.1,181.9L73.8,182.3L72.4,182.2L72.8,181.7ZM71.4,179.9L71.5,180.1L71.8,181.3L71.6,181.5L71.4,181.5L70.5,181.4L70.5,180.5L70.5,180.4ZM68.4,178.1L68.2,178.9L67.7,179.3L67,178.6L67.3,178.4L67.8,178ZM149.2,56.8L150.5,57L149.4,58L147.6,58.4L146.8,57.9L146.5,57.2ZM169.3,63L170.6,63.2L170.5,64L167.1,65.2L163.7,66.2L163.4,65.6L164.6,64.3L167.7,63.4ZM150.5,48.7L151,49.1L152.7,48.9L153.4,49.5L154.9,49.8L154.4,50L152,50.5L151.3,50L151.1,49.6L149.1,49.7L149,49.5ZM895.8,270.9L900.5,273.5L905.6,275.6L907.4,277.6L908.8,279.5L909,281.7L913.5,284L914,286L911.4,286.4L911.7,288.9L913.9,291.4L915.1,295.4L916.8,295.3L916.4,296.9L918.5,297.6L917.5,298.3L920.2,299.8L919.7,300.9L917.8,301.2L917.3,300.2L915,299.8L912.3,299.2L910.5,296.8L909.2,294.8L908.2,291.5L904.7,289.8L902.2,290.9L900.4,292.2L900.4,294.9L898,296.2L896.5,295.6L893.6,295.4L891.6,292.3L888.8,291.6L888,292.7L884.4,292.8L886,289.7L887.9,288.7L887.6,284.6L886.5,281.4L881.3,278.2L879,277.9L875,274.4L874.1,276.2L873,276.6L872.4,275.2L872.5,273.5L870.4,271.7L873.5,270.3L875.5,270.4L875.3,269.4L871.2,269.4L870.1,267.1L867.6,266.4L866.5,264.6L870.3,263.6L871.7,262.4L876.2,264L876.7,265.4L877.3,271.5L880.1,273.8L882.6,269.7L885.9,267.5L888.4,267.5L890.7,268.8L892.8,270.1ZM928.2,274.9L929.2,276.1L929.4,278L928.4,279L928.1,276.8L927.5,275.3L926.3,274.1L924.8,272.5L922.8,271.4L923.7,270.5L925.1,271.5L926,272.4L927.2,273.3ZM923.8,283.1L922.2,284L920.7,284.9L919.2,284.9L917,283.8L915.5,282.7L915.8,281.6L918.3,282.1L919.9,281.8L920.4,280L920.8,279.9L920.9,281.9L922.6,281.6L923.5,280.4L925.1,279L925,276.8L926.7,276.7L927.2,277.3L927,279.4L925.9,281.7L924.4,282ZM933.7,281.2L934.5,282.1L935.6,284.5L936.8,285.7L936.2,286.8L935.4,287.2L934.4,285.7L933.4,283.3L933.1,280.4L933.5,280.1ZM849,296.5L846.8,299.3L844.3,300.1L844.1,299.6L844.5,298.4L846,296.1L848.9,294.6L849.3,293.7L851.8,292.9L853.8,292.7L854.7,292.3L855.7,292.7L854.6,293.7L851.5,295.4ZM875.6,287.1L875.6,284.2L876.2,282.9L876.9,281.6L877.4,282.7L877.3,284.5ZM823.5,240.4L825.5,237.8L826.6,234.9L827.8,234.8L829.4,236.7L829.6,238.4L831.5,239.4L834,240.6L833.9,242.1L832,242.2L832.6,244.1L830.6,245.4L829.2,248.8L831.4,252.4L830.9,254.1L834.1,257.6L830.8,258.1L829.9,260.6L830,264.1L827.3,266.6L827.1,270.4L825.8,276.2L825.4,274.8L822.2,276.5L821.2,274.2L819.2,274L817.8,272.8L814.4,274.2L813.5,272.3L811.6,272.6L809.3,272.1L809,267L807.7,266L806.3,262.8L805.9,259.4L806.2,255.9L807.9,253.4L809.9,254.7L812.1,254L812.6,250.8L813.7,250.1L817.1,249.3L819,246.3L820.2,243.9L821.3,242.5ZM863.1,271.6L866.1,272.7L867,275.6L864.7,274L862.4,273.7L860.8,274L858.9,273.8L859.6,271.8ZM855.9,275.4L854,274.7L853.5,273L856.4,272.9L857,274.1ZM859.1,252.8L859.4,254.9L861,255.2L861.3,256.7L861.2,260L859.8,259.7L859.3,262L860.5,264L859.7,264.4L858.6,262L857.7,257.2L858.2,254.2ZM845.2,257.7L848.4,257.5L851.1,254.8L851.6,255.6L849.4,259.4L847.3,260.1L844.6,259.4L839.9,259.6L837.5,260.1L837.1,263L839.5,266.3L841.1,264.6L846.3,263.3L846.1,265.1L844.9,264.5L843.6,266.8L841.1,268.2L843.6,273.1L843,274.4L845.3,278.7L845.1,281.2L843.6,282.3L842.6,281L844.1,277.9L841.3,279.4L840.6,278.3L841.1,276.9L839.2,274.6L839.5,271L837.6,272.1L837.7,276.5L837.4,281.9L835.6,282.5L834.5,281.4L835.5,277.9L835.3,274.2L834.1,274.2L833.3,271.6L834.6,269.1L835,266.1L836.5,260.4L837.1,258.9L839.4,256.1L841.6,257.2ZM835.2,299.7L831.9,297.1L834.6,296.3L835.9,297.5L836.7,298.6L836.4,299.6ZM838.9,293.3L840.8,293L843.5,291.6L842.8,293.7L838.5,294.7L834.9,294.3L835,292.9L837.3,292.1ZM830.4,292.6L832.2,292.3L832.7,293.9L829.4,294.6L827.4,295.1L825.9,295.1L827.1,293L828.6,292.9L829.5,291.6ZM803.7,285.3L804,286.6L809.3,287L810.1,285.4L815.1,287.3L815.9,289.7L820.1,290.4L823.3,292.6L819.9,294.1L817,292.5L814.5,292.6L811.6,292.4L809.1,291.7L805.9,290.3L803.9,289.9L802.7,290.4L797.8,288.8L797.4,287.2L794.9,286.9L797.1,283.3L800.4,283.5L802.6,285ZM793.1,265.1L793.5,267.8L794.4,269.9L796.5,270.2L797.8,272.6L796.9,277.3L796.4,283.1L793.3,283.2L791.1,280.1L787.7,277L786.6,274.7L784.6,271.6L783.3,268.8L781.2,263.5L778.7,260.3L777.9,257.1L776.8,254.1L774.2,251.7L772.7,248.5L770.5,246.4L767.4,242.2L767,240.3L768.8,240.5L773.2,241.2L775.9,244.9L778.1,247.4L779.7,249L782.5,253.1L785.4,253.1L787.8,255.7L789.4,258.9L791.6,260.6L790.5,263.7L792,265ZM344.5,444.5L346,445.8L348.1,447.9L351.8,449.6L355.3,450.3L354.9,451.6L352.9,451.8L351.3,450.8L351.1,451.9L349.6,452.8L348.5,452.7L347.1,452.5L345.1,451.6L342.5,451.2L338.9,449.7L335.9,448.2L331.1,445.1L333.3,445.7L337.4,447.5L340.9,448.5L341.4,447.3L341.2,445.3L342.7,444.1ZM303.4,193.3L301.7,192.7L300.3,193L298.7,192.7L297.3,193.4L296,192.2L296.4,191.1L298.9,191.6L300.9,191.9L302,191.1L301,189.5L301.2,188.1L299.6,187.5L300.4,186.5L302,186.6L304.3,187.2L304.7,186.6L306.9,186.6L308.3,187.5L309.1,187.5L309.4,188.8L310.9,188.7L310.6,189.8L311.8,189.9L313,191.3L311.7,192.8L310.5,192L309.3,192.1L308.4,191.9L307.8,192.6L306.7,192.8L306.4,191.9L305.4,192.5L304,195L303.4,194.4ZM661.3,19.4L664.8,19.2L668.7,19.7L673.9,20.7L674.7,21.7L671.1,21.8L665.8,21.5L662.4,21.1L660.2,20.3L657.6,20.1ZM679.2,21.2L684.5,21.9L684.6,22.4L675.3,22.9L676.5,21.3L677.8,21.2ZM748.6,25.3L753.5,25.3L761.3,26.1L761.7,27.2L755,27.2L752.5,27.5L747.4,26.5L746.7,25.5ZM767.5,26.4L772.7,26.8L771.6,27.4L768.5,27.3L764.1,26.7L763.7,26.2ZM757.4,29.5L758.1,28.9L760.1,28.7L763.7,29.3L764.7,29.8L761.9,29.8L757.8,29.6ZM577.4,19.8L580.6,19.7L583.2,19.6L583.8,19.9L584.6,19.7L586.1,19.5L588.8,19.7L588.3,19.9L586,20L584.5,20.1L584.4,20.3L582.5,20.4L580.4,20.2L581.2,19.9ZM598.1,28.9L601.6,27.5L600.6,26.8L604.2,26L609.4,25.1L615.2,24.8L617.8,24.3L621.2,24.1L622.8,24.7L622,25.1L616.2,25.8L611.2,26.5L606.6,28L604.9,29.6L603,31.2L604.3,32.7L608.8,34.2L607.8,34.3L601.5,34.1L600.5,33.3L596.8,32.8L596,31.8L597.7,31.5L597.1,30.5L599.9,29.1ZM820.8,74.5L824.3,77.3L827,80.1L830.7,83L837.8,88.2L833.5,87.2L835.9,91.6L840.8,94.7L842.5,96.8L839.2,95L839.6,97.4L837,94.8L834.8,91.8L831.7,88.6L830.3,86.3L826.8,82.4L822.7,79.6L819.2,75.7L819.9,74.4L817.7,73.1L818.3,72.7ZM840,34L838.1,34.1L836.7,33.5L837.6,32.7L840,34ZM162.4,32.7L162.4,32.7L162.4,32.7L162.8,32.6L164.4,32.6L166.1,33.2L165.5,33.4L162.7,33.8L160,34L160,34L162.4,32.7ZM289.7,161.6L291,161.3L292.7,161.5L292.6,162.4L289.6,162.9ZM293.1,160.7L294.8,162.3L293.8,164.9L293.4,164.4L293.8,162.6L293,161.1ZM290.5,167.3L291.3,167.4L291.6,170.4L291.1,172.5L290.4,172.7L290.2,170.6L289.4,169.6ZM360.4,442.2L362.4,440.5L364.7,441.2L365.6,440.1L367.9,441.4L367.6,442.4L364.9,443.2L363.5,442.2L362.1,443.5ZM526.3,20.8L526.9,20.4L529.4,20.4L531.7,20.8L537.6,21.6L533.4,22.1L532.6,23L531.1,23.2L530.5,24.3L528.3,24.4L524.4,23.6L525.9,23.1L523.2,22.7L519.6,21.7L518.1,20.8L522.8,20.4L523.8,20.8ZM547.5,20.4L545.1,21L540.1,21.1L534.9,20.9L534.5,20.6L532,20.6L530,20.1L535.3,19.8L537.9,20.1L539.5,19.8L544,20ZM543.6,23L539.8,23.5L536.6,23.2L537.7,22.8L536.6,22.5L540.1,22.2L541,22.7ZM420.4,18L426.4,17.5L432.3,17.6L434.6,17.3L440.6,17.2L454.1,17.3L464.5,17.9L461.3,18.2L454.8,18.3L445.6,18.3L446.4,18.5L452.4,18.4L457.5,18.7L460.9,18.4L462.2,18.7L460.2,19.3L464.7,18.9L473,18.6L478.1,18.8L479,19.2L471.9,19.8L470.9,20.1L465.3,20.3L469.3,20.3L467.1,21.1L465.5,21.8L465.2,23.2L467.2,24.1L464.4,24.1L461.3,24.6L464.5,25.3L464.6,26.6L462.6,26.7L464.7,28L460.6,28.1L462.6,28.8L461.8,29.4L459.2,29.6L456.6,29.6L458.6,30.8L458.5,31.5L455,30.8L453.9,31.3L456.3,31.7L458.5,32.8L458.8,34.3L455.4,34.6L454.1,33.9L452.1,32.9L452.4,34.1L449.9,35.1L454.9,35.2L457.5,35.3L451.9,37L446.3,38.5L440.4,39.2L438.2,39.2L435.9,40L432.5,42.2L427.7,43.7L426.3,43.8L423.4,44.4L420.4,44.9L418.1,46.3L417.5,47.8L415.9,49.4L411.8,51.2L412,53.1L410.3,55.1L408.3,57.5L405.3,57.7L403,55.7L398.8,55.6L397.3,54.3L396.9,51.9L394.7,49L394.4,47.5L395.1,45.5L393.4,43.5L395,41.9L394,41.2L397.3,38.7L400.6,38L401.8,37.2L403,35.7L400.4,36.3L399.2,36.6L397.4,36.9L395.4,36.3L396,35L397.3,34L399.1,34L402.7,34.4L400.1,33.3L398.7,32.7L396.7,32.9L395.4,32.5L398.5,30.8L397.8,30.2L397,29.1L395.9,27.4L394,26.8L394.5,26.2L390.2,25.3L386.5,25.2L381.7,25.3L377.2,25.4L375.5,24.9L373.1,24.1L378.1,23.6L381.8,23.6L374.5,23.2L371,22.7L371.6,22.2L378.7,21.7L385.6,21.1L386.6,20.7L382.2,20.3L384.1,19.9L390.6,19.2L393.2,19.1L392.8,18.7L397,18.5L402.4,18.4L407.6,18.3L409.3,18.6L414.1,18.1L418,18.5L420.4,18.5L423.8,18.8L420,18.3ZM661.4,432.8L662.5,433.7L664.6,434.1L664.4,434.6L663.2,436L659.5,436.2L660.2,434.6L661,433.4ZM521.4,107.9L522.9,106.6L523.5,109.4L522.8,111.9L521.6,111.2L521,109ZM318.5,191.6L319.8,191.9L320.2,192.7L319.4,193.6L317.4,193.6L315.7,193.7L315.8,192.1L316.3,191.6ZM287.6,191.7L289.4,192L290.7,192.9L291,193.9L289,194L288.1,194.6L286.7,194L285.3,192.7L285.8,191.8L287,191.6ZM277.9,174.6L280.2,174.8L282.3,174.9L284.6,176.1L285.4,177.4L288,177L288.8,177.9L290.7,180.1L292.1,181.8L293,181.7L294.5,182.4L294.1,183.5L296.1,183.6L297.9,185.1L297.4,186L295.5,186.4L293.7,186.6L291.9,186.3L287.9,186.7L290.1,184.7L289.1,183.7L287.4,183.5L286.7,182.4L286.4,180.3L284.8,180.5L282.5,179.5L281.8,178.7L278.4,178.2L277.6,177.5L278.8,176.6L276.2,176.4L273.9,178.3L272.7,178.3L272.2,179.2L270.7,179.6L269.7,179.2L271.3,178.1L272.2,176.8L273.6,176L275.1,175.3L277.2,175ZM637.5,308L638.2,309.6L638.7,312L638.8,316.5L639.4,318.3L638.9,320L638.4,321.1L637.6,319L637,320.1L637.3,322.8L636.9,324.4L636.1,325.2L635.6,328.3L634.1,332.6L632.2,337.7L629.7,344.6L628.1,349.6L626.3,353.8L624,354.6L621.5,356.2L620.1,355.2L618.1,354L617.6,352.1L617.8,348.9L617.2,346L617.2,343.4L618,340.7L619.3,340.1L619.4,338.9L621,336.1L621.5,333.8L621,332.1L620.7,329.7L620.7,326.4L621.9,324.3L622.4,321.9L623.8,321.8L625.4,321L626.5,320.4L627.7,320.3L629.4,318.2L631.9,315.9L632.9,314L632.6,312.5L633.7,312.9L635.5,310.3L635.7,308.1L636.7,306.4ZM961,320.7L962.1,322.9L961,323.3L960.6,321.7ZM960,319.9L959.9,318.9L960.7,316L961.7,317.2L961.3,320.2L960.7,319.7ZM567.3,132L567,133L563.4,133.3L563.3,132.7L560.2,132.1L560.5,130.6L562,131.8L564,131.6L565.9,131.8L565.9,132.4ZM486.1,74.1L486.4,76.1L484.6,78.6L480.4,80.3L477.2,79.9L479.3,76.9L478.3,74L481.5,71.9L483.2,70.6L485.1,70.5L487.4,72.2ZM950.6,339.8L951.9,342.1L952.6,343.7L951.3,344.6L950.2,343.6L948.9,342L947.9,340.1L947.1,337.5L947.1,336.3L948.3,336.3L949.4,337.6L950.1,338.8ZM951.6,300.6L952.2,301.8L950.2,301.8L949.6,299.5L951.1,300.4ZM951,297.2L950.4,297.9L948.9,294.7L948.7,292.4L949.6,292.4L950.2,295.4ZM948.5,298.3L947.4,298.4L945.7,298L945.3,297.4L945.7,295.9L947.4,296.5L948.2,297.3ZM946.2,291.3L946.7,292.5L946.7,293.3L944.7,291.7L943.4,290.3L942.5,289.1L943,288.7L944.1,289.6ZM939.7,287.5L940.7,288.8L940.1,289L938.9,288.1L938,286.6L938.2,286ZM940.1,405.9L937.6,407.7L934.5,409.9L931.5,411.2L931.8,410.3L931.1,409.8L934.8,407.2L935.5,405.4L933.9,404.1L935,402.9L937.7,401.7L940.2,399.2L941.7,397L942.4,394.8L942.9,394.2L942.7,392.8L942.8,389.8L943.5,387.4L944.6,387.1L944.7,389L946,389.9L944.6,392.9L943.8,396.4L945.5,394.2L946,395.1L944.4,397.6L945.6,398.7L947.1,399L949.6,397.7L950.5,398.1L947.6,401L945.2,402.9L943.4,402.9L941.9,403.9L940.9,405.3ZM912.5,417.1L916.1,415.5L919,413.8L922.2,411.4L923.8,410.6L925.7,408.8L928.7,407.3L928.1,408.7L927.5,410L930.4,408.7L930,410.1L928.8,411.4L926.6,412.9L922.8,415.3L920.4,416.5L919.9,418.1L918,418.1L914.9,419.3L912.3,421.3L907.9,424.5L904.7,425.9L902.7,426.7L900.5,426.7L900,425.7L897.6,425.4L898.3,424.3L901.7,422L907.6,418.9L909.7,418.3ZM865.7,408.3L867,408.5L864.4,412.4L862.7,413.5L860.5,416L860.3,415.2L856.9,417.4L856.5,417.2L855.1,417.1L855.7,414.4L856.9,412.3L857.5,409.5L858.6,408L860.1,408.3L861.7,409.4L863.3,408.9ZM827.9,379.5L824.3,381.2L821.7,382L820.3,383.8L818.7,385.2L816.5,385.3L814.7,385.6L812.7,385L810.7,385.4L808.9,385.5L806.5,387.3L805.8,387.2L804.1,388.1L802.3,389.2L800.5,389.1L798.8,389.1L797.1,386.9L796,386.3L796.9,384.3L798.4,383.8L799.2,383.1L799.7,381.8L801,379.4L801.6,377.4L801.6,373.8L802,371.9L802.9,369.9L802.7,367.6L803,366.5L802.4,365.1L803,362.3L802.5,359.5L802.6,358L803.3,359.5L803.5,356.2L804.5,357.3L804.8,358.7L805.4,356.8L804.9,354L805.1,352.9L804.8,351.8L805.7,349.7L806.5,348.8L807.4,347L807.7,344.9L809.6,342.3L809,345L810.9,342.5L813.4,341.3L815.1,339.8L817.6,338.4L818.9,338.2L819.5,338.6L822,337.2L823.8,336.8L824.4,336L825.2,335.7L826.7,335.8L829.9,334.7L831.8,333.1L833,331.1L835,329.3L835.5,327.8L836.1,325.8L838.7,322.6L839.1,325.8L840.5,325.1L839.9,323.3L841.2,321.5L842.2,322.3L843.1,319.5L845,317.7L846,316.2L847.5,315.6L847.8,314.6L848.9,315L849.1,314.1L850.4,313.5L851.9,313L853.6,314.7L854.7,316.9L856.4,317L858.1,317.3L857.9,315.3L859.8,312.3L861.3,311.3L861,310.4L862.6,308.2L864.5,306.9L865.9,307.4L868.3,306.7L868.6,304.8L866.8,303.5L868.3,303L870,303.9L871.2,305.4L873.4,306.4L874.3,306L875.8,307.2L877.6,306.1L878.6,306.4L879.4,305.7L880.3,307.6L879.2,309.6L877.9,311.1L876.9,311.2L876.9,312.7L875.7,314.5L874.3,316.4L874.3,317.4L876,319.5L877.9,320.7L879,321.9L880.4,324.1L881.2,324.1L882.4,325.1L882.5,326.2L884.8,327.5L886.9,326.2L888,324.2L889,322.6L889.8,320.5L891.4,317.6L891.4,315.8L891.8,314.7L892,312.6L892.9,309.8L893.6,309L893.4,307.8L894.5,305.8L895.4,303.7L895.6,302.7L896.9,301.3L897.4,303.1L897.1,305.4L897.8,305.9L897.6,307.5L898.2,309.4L898,311.5L897.6,312.8L897.9,315.7L900,314.3L900.6,315.9L901.6,317.4L900.9,319L900.7,322.2L900.6,324L901.2,324.5L901.1,327.6L900.2,329.6L900.4,332L902.7,334L904.1,335.7L905.4,337.3L904.8,338.2L905.5,340.5L905.2,344.4L906.5,343.6L907,345.2L907.9,344.6L906.9,348.5L907.9,350.7L908.6,352.1L909.5,355L909,357.8L908.1,359.9L906.9,362.1L906.7,365.1L905,368.2L903.7,369.8L901.4,373L900.4,375L898.5,377.5L895.6,380.6L892.7,382.3L890.2,385L888.3,386.7L885.8,389.6L883.8,391.3L881.5,393.8L879.7,396.1L879.2,397.2L876.9,398.3L874,398.4L870.8,399.8L868.8,401.1L866.3,402.5L865.2,401L864.1,400.5L865.6,398.7L863.8,399.4L860.1,401.8L858.5,400.9L857.4,400.3L856.1,400.1L854.3,399.1L853.9,397.1L855,394.6L855.4,392.9L854.9,391.5L852.7,391.1L854.5,389.4L855.3,386.9L852.7,389.3L850.1,389.9L852.5,388L854,386L855.9,384.4L857,381.8L853.3,384.7L851.1,385.9L848.6,388.6L847.4,387.2L848.5,385.4L848.1,382.9L847.4,381.6L848.3,380.8L846,378.7L844.2,378.7L842.5,377L837.7,377.3L833.8,378.5L830.3,379.7ZM728.7,232.6L728.5,236.5L727.4,237.6L725,238.5L723.5,235.5L722.7,230L723.5,223.9L725.6,226L727.1,228.7ZM800,192.8L797.5,191.6L796.8,188.5L797.7,186.8L800.4,185.8L802,185.9L803,187.3L802.2,188.9L802,191ZM827.3,170.2L827.5,176L827.2,179L824.9,175.9L823.8,173.2L824.2,169.7L825.4,167L827,168ZM537.2,122.5L539,122.2L538.3,124.8L538.8,125.8L538.3,127.6L536.3,126.3L535,125.9L531.4,124.2L531.6,122.5L534.6,122.8ZM521.6,113.4L522.7,112.4L524.3,114.7L524.2,119.1L523,118.8L522.1,119.9L521.1,119.1L520.8,115.1L520.2,113.3ZM527.2,67.9L528,69.3L526.9,71.5L524.4,69.9L524,68.8ZM493,75.4L493,75.4L493.4,73.7L491.9,72L491.9,72L489.2,71.5L488.7,70.8L489.6,69.5L488.9,68.8L487.6,70.1L487.6,67.5L486.6,66.1L487.5,63.4L489.3,61.3L491,61.5L493.6,61.3L491.2,64.1L493.4,63.7L495.8,63.7L495.2,65.9L493.1,68.3L495.4,68.5L495.6,68.7L497.5,72L499,72.4L500.4,75.6L501.1,76.7L503.8,77.3L503.6,79.1L502.4,79.9L503.3,81.4L501.3,82.9L498.2,82.9L494.3,83.7L493.2,83.1L491.6,84.5L489.5,84.2L487.9,85.3L486.6,84.7L490.1,81.6L492.2,81L492.2,81L488.6,80.5L488,79.4L490.4,78.5L489.2,77L489.7,75.1ZM471.3,42.7L470.6,44.1L472.7,45.6L469.8,47.3L463.7,48.9L461.9,49.3L459.3,49L453.8,48.3L456,47.2L451.8,46.1L455.5,45.7L455.5,45.1L451.4,44.5L453.1,43.1L456.2,42.8L459,44.3L462.2,43.1L464.6,43.7L468,42.6ZM835.3,213.2L833.4,210.3L835.8,210.5L837,211.8L836.8,215ZM841.7,223.4L842.3,222.3L842.3,220L843.8,219.8L843.7,222.3L845.2,218.7L845.5,222.2L844.7,223.5L844.1,225.8L843.3,227L841.3,224.4ZM853.1,229.2L853.6,231.7L854,233.9L853.4,237.3L852,233.5L850.9,235.4L852,238.2L851.3,239.9L847.9,237.7L846.8,235L847.5,233.2L845.6,231.4L844.8,233L843.5,232.8L841.6,234.9L841.1,233.8L841.9,230.7L843.5,229.6L844.9,228.2L846,229.9L848.1,228.9L848.3,227.2L850.3,227.1L849.7,224.2L852.2,226L852.7,227.9ZM830.7,225.9L827.4,229.4L828.4,226.8L830.2,224.5L831.5,221.9L832.5,218.2L833.4,221.2L831.8,223.3ZM835.3,192.7L835.2,194.2L836.8,196.9L836.7,199.9L835.4,201.2L835.5,204.1L836.7,207.1L838.3,207.5L839.4,207.1L843.3,209.1L843.4,211.2L844.4,212.1L844.4,213.8L842,212L840.6,210L840.1,211.4L838,209.1L835.5,209.7L834,208.9L833.9,207.3L834.6,206.4L833.6,205.5L833.5,206.9L831.7,204.7L831,203.1L830.1,199.6L831.5,200.8L830.5,195L830.6,191.6L832.2,191.7L834.2,192.7L834.8,191.7ZM839.5,218L838.7,216.2L840.6,217.4L842.4,217.3L842.6,218.9L841.5,220.5L839.9,221.6L839.5,219.9ZM848.6,215.2L850.1,219.4L847.8,218.4L848,219.6L849,221.9L847.8,222.8L847.4,220.1L846.5,219.9L845.7,217.7L847.4,218L847.1,216.6L845,213.7L847.6,213.8ZM854.9,119L854.8,122.4L856.9,125.8L857.6,128.5L859,130.2L859.1,132.6L856.7,134.2L852.3,134.4L850.8,138.3L848.3,137L846.9,134.4L842.8,135.2L840.6,136.8L837.6,136.8L841.5,139.4L842.6,145.2L841.6,146.7L839.7,145.3L838.9,142.2L836.8,141.2L834.6,138.9L836.5,137.8L836.7,135.6L838.4,133.9L839,131.6L843.5,130.6L846.6,131.2L845.8,125.3L848.5,126.9L850.2,123.5L850.8,122.2L849.8,118.2L846.9,114.5L846.6,112.5L848.8,111.9L853.2,116.4ZM850.6,103.6L851.3,102.3L854.6,105.8L851.6,106.7L851.8,109.9L846.4,107.7L847.5,111.2L844.8,111.3L842.2,108.1L841.7,105.6L844.1,105.4L841.5,101.1L840.3,98.7L845.7,101.9L848.4,103ZM841.9,138.3L842.3,136.2L844,136.6L844.3,135.2L846.5,135.9L847.5,137.1L847.1,139.2L845.5,138.1L844.6,138.9L844.9,140.9L842.7,139.9ZM583.8,132.6L584,132.5L584.2,131.7L586.1,131.8L588.3,130.8L586.7,132.2L587,132.8L587.1,133.1L584.7,134.5L583.4,134L582.6,132.7ZM328.2,220.4L329.9,219.9L330.5,220.1L330.2,222.9L327.8,223.3L327.3,222.9L328.2,221.9Z","borders":"M612.3,299.9L610,302.1L606.9,303.6L605.2,303.5L604.2,304.6L602.3,304.7L601.5,305.2L598.2,304.1L596.1,304.4L595.5,299.3L594.7,297.6L594.1,296.6L591.4,295.9L589.9,294.7L588.1,294.1L587,293.5L585.9,292.5L584.5,287.8L582.9,285.7L582.4,283.5L582.7,281.5L582.3,278L583.4,277.9L584.5,276.5L585.6,274.5L586.3,273.7L586.3,272.5L585.7,271.6L585.5,270.1L586.3,269.7L586.5,267.4L585.4,265.3L586.4,264.9L589.5,264.9L595.2,264.6L595.7,265L605.8,272.7L605.9,274.9L609.9,278.7M453.8,181L453.8,181L460,180.7L460.3,179.4L461.5,177.7L462.6,172.7L466.4,168.9L467.9,164.3L468.7,164.1L469.7,161.3L471.9,160.9L472.9,161.4L474.1,161.4L475,160.6L476.6,160.5L476.6,158.5L477,158.5L477,158.8L476.9,159.5L476.8,164.9L468,164.7L467.8,173.9L465.3,174.2L464.5,176.1L464.9,181.3L454.2,181.3L453.6,182.5M209.9,71.5L212.4,70.2L214,68.4L211.9,66.7L212.8,63.7L213.5,61.8L212.7,60.7L212.5,59.6L212.8,58.3L209.7,59.1L206.1,60.6L206.1,58.9L205.9,57.8L204.6,57.1L202.6,57L219.6,43.7L230.5,36.1M338.6,99.9L337.7,98.2L339.3,94L338.6,93.1L336.8,93.6L336.4,92.8L333.6,95.1L331.9,97.5L330.5,98.9L329.3,99.4L328.5,99.6L327.9,100.3L323.5,100.3L319.8,100.4L318.5,100.9L315,103.2L314.6,103.4L313.3,104.7L311.1,104.7L308.7,104.7L307.4,105.2L307.5,105.8L307.3,106.8L307.2,107.1L303.3,108.7L300.6,109.2L297,110.9L296.4,110.9L295.8,110.4L295.7,110L295.9,109.6L296.9,108.5L298.8,106.7L300.3,104.9L301,102.1L301.8,99.3L300,97.8L300.6,97.3L300.4,96.9L299.7,96.9L299.5,96.4L299.7,95.7L299.1,96L298.5,95.9L298.8,95.6L298.4,95.3L298.6,94.5L297.2,93.5L295.8,92.5L294.1,91.3L292.5,90.2L289.9,91.1L289.2,91.1L286.7,90.3L284.6,90.7L282.8,89.8L280.7,89.3L279.2,89.1L278.7,88.6L279.3,87L278.5,87L277.8,88.2L273,88.2L265,88.2L257,88.2L250,88.2L243,88.2L236.1,88.2L229,88.2L226.7,88.2L219.8,88.2L213.2,88.2M240.4,164.9L239.3,165L237.6,164.2L235.9,163.1L235.6,161.5L235.8,159L234.9,156.9L234.6,154.9L234.1,152.5L232.7,151.1L230.5,151.1L227.9,153.9L226.1,152.8L225.1,151.8L225.1,149.9L224.9,148L223.9,146.5L223,145.4L222.5,144.2L218,144.2L217.5,145.6L215.4,145.6L210.2,145.6L205.2,143.2L202,141.5L202.6,140.8L199.1,141.2L196,141.5M617,96L615.6,95.5L615.4,94L613.3,91.9L611.6,92L609,90L609.7,87.7L608.9,87.1L609.7,83.9L612.6,85.6L612.3,83.4L616,80.2L619.5,80.2L625.3,82.2L628.4,83.4L630.4,82.1L634,82.1L637.5,83.6L637.9,82.7L641.2,82.8L641.2,81.5L636.7,79.5L638.3,78.1L637.5,77.3L639.4,76.6L636.9,74.6L637.5,73.7L645.5,72.7L646.2,72L651.3,71L652.7,69.9L657,70.5L659.2,73.3L661.2,72.7L664.5,73.6L665.1,75.1L667.2,75L671.4,72.3L671,73.2L675.1,75.4L684.1,82.6L684.5,81.1L688.6,82.8L691.4,82.1L693,82.6L695,84.3L697,84.8L698.6,86.1L701.4,85.7L703.6,87.5L702.9,89.5L701.1,89.8L702.6,92.8L702,94.2L696.8,93.2L697.7,98.7L696.8,99.4L692.6,100.6L697.1,106.1L695.8,106.9L696.7,108.8L695,108.3L693.3,107.1L689.6,106.8L685.5,106.7L684.8,107.1L680.8,105.7L679.6,106.4L680,108.3L675.5,107.2L674.1,107.6L674,109L672.9,109.6L670.4,111.9L670.1,114.2L669.2,114.2L668,112.7L664.8,112.6L663.4,109.9L662.2,109.9L661.3,106.7L657.6,104.4L653.5,104.6L650.8,105.1L647.6,102.2L645.2,101L640.7,98.8L640.2,98.5L634.6,100.4L638.1,112.1L636.9,112.3L634.5,109.7L632.6,108.8L630,109.5L629.2,110.6M674,109L674.9,109.3L673.6,111.4L675.8,112.6L677.3,111.8L680.8,113.5L678.5,115.9L676.5,115.6L675.5,115.6L674.8,114.7L674.8,113.2L671.8,114L671.7,116.1L671.1,117.9L668.9,117.7L668.7,119.2L670.8,120L672.1,122.4L671.7,125.8L669.6,125.1L668.2,125.1L667.7,123L663.9,121.6L660.8,120L658.7,118.4L655.2,116.2L653,112.8L652,112.2L649.3,112.4L648.2,111.7L647.1,109.2L643.3,107.5L641.8,109.3L640,110.4L640.9,112.1L638.1,112.1M893.6,295.4L895,283.2L895.8,270.9M848.9,294.6L849.1,295.3L849,296.5M807.9,253.4L808.4,256L810.3,258.1L812.1,257.3L813.9,257.6L815.5,255.7L816.9,255.3L819.5,256.4L821.8,255.6L823.1,250.3L824.2,249L824.9,244.7L828.1,244.7L830.6,245.4M351.3,450.8L349.9,450.7L347.5,450.7L344.5,444.5M344.2,443.5L341.9,443.1L336.2,442.7L334.4,441L333.4,438.8L332,439L330.7,438L329,434.8L330.2,433.5L330.1,431.6L329.2,430.1L329.3,427.5L328.5,423.4L327.5,421.6L328.3,421L327.6,419.8L326.2,419.2L326.5,417.9L325,416.7L323,413L323.8,412.3L322,408.4L321.4,405L321.1,402.1L322.2,400.9L320.4,397.7L319.4,394.6L320.7,392.4L319.8,389.6L320.3,386.3L319.5,383.1L318.7,382.5L315.9,376.5L316.6,372.9L315.6,369.5L315.8,366.3L316.8,363L318.2,360.8L317.1,359.4L317.5,358.2L316.2,352.3L318.8,350.5L319.1,346.7L318.6,345.8L320.3,342.6L324,343.4L326,346.1L326.6,343.1L329.7,343.3L330.3,344.1L336.2,350L338.5,350.5L342.2,353.2L345.2,354.6L345.8,356.2L344.1,361.6L347,362.6L350,363.1L352,362.5L354,359.8L353.9,356.7L355.2,356L356.8,358L357.2,360.9L355.3,362.8L353.8,364.3L351.4,367.7L348.8,372.5L348.7,375.3L348.7,378.9L349.5,382.3L349.1,383.1L349.4,385.3M307.2,329.8L308.5,328.9L309,327L310.6,329.5L311.4,332.1L313,333.7L312.7,337.2L314.8,341.3L316.7,346.3L318.6,345.8M585.9,292.5L584.8,292.1L581,292.8L580.3,293.2L579.4,295.6L580,297.3L579.3,301.7L578.9,305.5L579.6,306.1L581.5,307.6L582.3,306.9L582.3,310.9L580.2,310.9L579.2,308.9L578.2,307.3L576.1,306.7L575.5,304.8L573.8,306L571.6,305.4L570.7,303.7L569,303.4L567.6,303.5L567.5,302.3L566.6,302.2L565.3,302L563.6,302.6L562.4,302.5L561.7,302.8L561.9,298.4L561,297L560.9,294.7L561.3,292.4L560.8,290.9L560.8,288.6L557.4,288.6L557.6,287.2L556.2,287.2L556.1,287.9L554.3,288.1L553.6,290.2L553.2,291.2L551.6,290.7L550.7,291.2L548.8,291.5L547.8,289.5L547.2,288.3L546.4,286L545.7,283.2L537.5,283.2L536.5,283.6L535.7,283.6L534.5,284.1M534.1,282.9L534.8,282.5L534.9,280.9L535.4,279.9L536.4,279.1L537.2,279.5L538.1,278L539.7,278.1L539.8,279.1L540.9,279.8L542.5,277.4L544.2,275.6L544.9,274.4L544.8,271.3L546.1,267.6L547.4,265.7L549.2,263.8L549.5,262.6L549.6,261.2L550.1,259.9L549.9,257.8L550.2,254.4L550.8,252.1L551.6,250L551.8,247.8L552,245.1L553.1,243.2L554.6,242L556.9,243.3L558.7,244.7L560.7,245L562.8,245.8L563.7,243.5L564,243.2L565.3,243.6L568.4,241.7L569.5,242.5L570.4,242.4L570.8,241.5L571.9,241.1L574,241.5L575.8,241.6L576.7,241.2L578.5,244.3L579.7,244.8L580.5,244.2L581.8,244.4L583.3,243.6L584,245.2L586.5,247.7L586.4,252.2L587.5,252.7L586.6,254L585.5,255L584.5,257L583.9,258.8L583.7,261.8L583.1,263.2L583.1,266.1L582.2,267.1L582.1,269.4L581.7,269.7L581.5,271.8L582.1,273.5L582.3,278M616.8,267.4L615.1,264.3L615,250.5L617.4,246.2L618.1,245L619.9,244.9L622.4,242.3L626,242.1L633.6,230.8L635.4,227.7L636.5,225.3L636.4,223.4L636.2,219.6L636.1,218.1L636.2,218M595.2,264.6L595.2,260.6L596,259.1L597.4,256.6L598.4,253.8L597.1,249.5L596.7,247.6L595.4,244.9L597,242.7L598.9,240.2L600.4,240.8L600.4,243L601.4,244.2L603.3,244.2L607,247.4L607.8,247.4L608.5,247.3L609.1,247.8L611,248.1L611.8,246.5L614.3,244.9L615.5,246.2L617.4,246.2M605.3,193.5L604.1,195.6L602.1,196.2L601.3,197.4L601.2,199.8L600.4,205.3L600.8,206.8L600.5,210L599.6,213.6L598,215.5L596.9,218.3L596.7,219.9L595.4,220.9L594.7,224.8L594.9,228.2L594.8,225.3L594.4,225.2L594.3,223.4L594,222.1L592.5,220.6L592,217.9L592.2,215.1L590.9,214.9L590.8,215.7L589.1,215.9L589.8,217L590.2,219.2L588.7,221.3L587.4,224L586,224.4L583.6,222.2L582.6,223L582.3,224.1L580.9,224.8L580.8,225.5L578,225.5L577.6,224.8L575.6,224.6L574.6,225.3L573.9,225L572.4,222.8L571.8,221.7L569.9,222.3L569.1,224L568.5,227.4L567.6,228.1L566.7,228.5L568.7,229.9L566.5,228.3L565.5,227.2L565.3,226L565.7,224.5L565.7,222.9L564,220.6L563.6,219L563.6,218.1L562.6,217L562.5,214.8L561.9,213.4L560.9,213.6L561.1,212.2L561.8,210.7L561.4,209.1L562.3,208L561.7,207.1L562.3,204.8L563.5,202.1L565.9,202.3L565.1,187.7L565,186.2L568.2,186.2L567.7,178.9L578.6,178.9L589.2,178.9L599.9,178.9M563.6,219L561.9,219.6L560.5,221.2L558.6,225.3L556,227L553.3,226.8L552.5,227.1L552.8,228.4L551.4,229.7L550.2,231.2L546.7,232.7L546,231.8L545.5,231.7L545,232.7L542.7,233L543.2,232L542.2,229.4L541.8,227.8L540.6,227.2L538.9,225L539.5,223.2L540.8,223.6L541.6,223.3L543.1,223.4L541.5,219.9L541.6,217.5L541.4,215L540.2,212.6L540.5,210.8L538.7,210.7L538.6,208.3L537.5,207L538.5,202.1L542,198.6L542,193.8L542.8,186.3L543.3,184.7L542.1,183.5L542.1,182.3L541,181.4L540.1,175.7L542.8,173.8L553.9,180.7L565.1,187.7M304.3,187.2L304.2,189.2L303.8,190.6L303,191.2L303.6,192.3L303.4,193.3M547.1,70.4L549.5,70.9L550.6,71.3L550.4,72.1L550.7,72.8L546.6,72.8L543.9,72.5M820.9,109.2L820.1,108.6L819,107L820.2,106.9L818,103.2L815.4,100.5L816.7,99.4L820,99.9L819.3,96.9L817.5,93.5L817.6,92.4L816.6,89.7L813.4,90.6L812.4,91.8L808.8,91.8L805.6,89L801.1,86.8L796.3,85.9L793.1,83L790.8,81.2L788.9,80L785,77.1L782.1,76.1L778,75.2L775.1,75.3L772.7,75.8L772,77.2L773.8,77.9L775.1,79.5L774.6,80.4L775,83.5L776,84.8L774.1,86.6L770.5,85.5L767.9,85.8L766,84.8L764.4,84.5L762.5,86.5L759.8,87L758.1,87.8L754.9,87.3L752.7,87.3L750.3,85.8L747,84.4L744.5,84L741.8,84.4L740,84.9L735.9,83.7L734,81.5L730.8,80.8L728.5,80.4L725.1,79.2L724.7,82.2L726.8,83.9L725.8,86L722,85.3L719.6,85.1L717.2,83.8L714.8,83.7L712.2,82.8L709.6,84.2L706.6,86.8L704.4,87.3L703.6,87.5M619.5,110.5L618.4,111.8L618.1,112.6L617,112.4L614.8,110.4L614.1,110.3L612.4,109.6L611.3,108.3L608.9,107.6L607.5,108.1L607,107.5L603.3,106L599.6,105.5L597.4,104.9L597.2,105.3M590.6,93.9L590.3,92.5L591.4,91.7L593.6,91.5L593.7,90.5L592.8,88.8L593.4,87.2L593.1,86.4L589.5,85.4L588.1,85.4L586.3,84.1L584.7,84.5L581.5,83.5L581.4,82.9L580.3,81.7L578.5,81.5L578.1,80.6L578.5,80L576.7,78.4L574.4,78.7L573.7,78.5L573.2,79.2L572.4,79.1L571.4,77.2L570.7,76.3L571,76L572.9,76.1L573.6,75.5L572.8,74.8L571.2,74.3L571.2,73.8L570.2,73.3L568.4,71.5L568.7,70.7L568.2,69.4L565.9,68.8L564.8,69.1L564.3,68.4L561.8,67.8L560.8,66.2L560.3,64.9L559.2,64.3L559.9,63.4L558.7,61L559.9,59.5L559.5,59.1M559.1,56.5L562.8,53.4L564.3,52L564.8,50.8L561.3,49.2L561.7,47.7L559.4,46L560.2,44.1L557.2,41.7L558.5,40.1L555.2,38.7L555,37.3L556.5,37.2L559.5,36.4M579.9,97.4L580.4,96.6L582.2,97.3L583,97.4L583.4,98L583.8,98.1M555,37.3L555.4,36L552.8,35.2L550,35.9L549.4,37.3L547.8,38.2L545.6,37.7L543.1,37.8L540.8,36.7L539.7,37.3L538.5,37.3L538.5,38.6L534.8,38.3L534.5,39.5L532.6,39.4L531.6,40.9L530,43.3L527.3,46.4L528.1,47.1L527.5,48L525.5,48L524.5,50.2L524.9,53.3L526.4,54.6L526,57.5L524.4,59.2L523.6,60.7M543.2,366.7L544.6,365L545.6,366L545.9,367.5L547.1,367.7L548.7,368.4L550.1,368.1L552.6,366.3L553.4,353.2L554.1,353.7L555.5,357.1L555.1,359.3L555.6,360.5L557.6,360.2L559,358.6L560.3,357.5L561.1,355.8L562.4,355L563.5,355.4L564.8,356.4L566.9,356.6L568.7,355.7L569.1,354.6L569.6,352.9L571.1,352.6L572,351.3L573.1,348.9L575.7,346.2L579.7,343.5L580.8,343.5L582.1,344.2L583,343.7L584.5,344.1L585.3,349.2L585.8,351.7L585,355.7L585.1,357L583.8,356.4L583,356.6L582.7,357.7L581.8,359L581.7,360.2L583.1,362.2L584.7,361.8L585.4,360.2L587.4,360.2M576.5,368.1L575.4,367L574.1,367.7L572.6,369.1L571,371.3L572.7,374L573.6,373.7L574.2,372.5L575.8,372L576.3,370.9L577.3,369.1L576.5,368.1M258.2,191.7L257.7,191.7L256.3,193.9L255.9,193.5L255.5,193.7L255.4,194.2L252.9,194.2L250.3,194.2L250,196.3L248.7,196.3L249.5,197.5L250.4,198.4L250.6,199.2L251,199.4L250.7,200.6L247.2,200.7L245.4,203.7L245.7,204.4L245.2,205.2L245,206.3M348.8,372.5L350.4,372.1L353.6,374.8L354.5,374.7L357.7,377L360.1,378.9L362,381.2L361.2,382.9L362.4,384.8M353.9,356.7L354.1,354.6L354.2,352.5L353.9,350.5L352.8,349.8L351.9,350.4L350.9,350.3L350.4,348.9L349.6,345.5L349,344.5L347,343.5L346,344.2L343,343.5L342.5,338.6L341.5,336.5L342.2,335.8L341.7,333.7L342.3,332.1L342.4,329.2L341.5,326.9L339.9,325.8L339.4,324.4L339.6,322.2L334.3,322.1L332.8,317.8L333.6,317.7L333.4,316.1L332.8,315L332.4,312.9L330.7,311.8L329,311.8L327.7,310.7L325.8,310L324.6,308.6L321.4,308L318.1,304.6L318.2,302.1L317.7,300.7L317.8,297.9L314.2,298.5L312.8,299.9L310.5,301.4L310,302.6L308.5,302.6L306.5,302.3L304.9,303L303.6,302.5L303.4,296.8L301.2,299L298.8,298.9L297.6,296.9L295.7,296.7L296.2,295.1L294.5,292.8L293.1,289.4L293.8,288.8L293.7,287.2L295.3,286.1L294.9,284L295.6,282.7L295.7,281L298.8,278.4L301.1,277.7L301.5,277.1L304,277.3L305,266.9L305.1,265.3L304.6,263.1L303.4,261.7L303.4,259L305,258.3L305.5,258.7L305.6,257.3L304,256.9L304,254.5L309.5,254.6L310.4,253.3L311.2,254.5L311.7,256.7L312.2,256.3L313.8,258.3L315.9,258L316.5,256.9L318.6,256L319.8,255.4L320.1,253.8L322.1,252.7L322,251.9L319.6,251.6L319.3,249.2L319.4,246.7L318.2,245.7L318.7,245.3L320.8,245.8L323,246.8L323.8,245.9L325.9,245.3L329.1,243.9L330.1,242.4L329.8,241.4L331.3,241.2L331.9,242.1L331.5,243.7L332.4,244.3L333,246L332.2,247.4L331.7,250.6L332.4,252.5L332.5,254.3L334.3,256L335.6,256.2L335.9,255.5L336.8,255.3L338.1,254.7L339,253.6L340.6,254L341.3,253.8L342.8,254.1L343.1,253.4L342.6,252.6L342.9,251.5L344,251.9L345.4,251.5L346.9,252.3L348.2,253.1L349,252L349.7,252.2L350,253.2L351.4,253L352.5,251.5L353.4,248.8L355.1,245.3M341.5,336.5L341.3,335.4L338.5,333.5L336,333.5L331.3,334.5L330.5,337.7L330.7,339.7L330.3,344.1M309,327L310.2,323L308.6,319.9L309.1,318.6L308.4,317.3L309.3,315.4L309,312.2L308.9,309.6L309.4,308.3L306.5,302.3M274.7,273.9L275.1,275.5L274.3,276.4L274.4,277.8L275.6,277.5L276.7,277.9L278,279.8L279.5,278.2L279.9,275.7L281.6,272.4L284.9,270.9L287.9,266.9L288.7,264.5L288.3,261.6L289.1,261.2L291,263L291.9,264.8L293.2,265.8L294.9,269.8L297,270.2L298.5,269.2L299.5,269.9L301.2,269.6L303.4,271.3L301.7,275.2L302.5,275.3L304,277.3M288.3,261.6L287.1,260.7L285.8,259.4L285,260L282.6,259.5L281.9,257.9L281.4,258L278.6,255.8M282.1,233.7L282.6,231.9L283.5,232.2L284.1,231L283.6,228.8L284,228.3M301.7,216.6L299.9,217.3L299,219.1L297.8,220.2L296.9,221.6L296.3,224.3L295.4,226.5L296.8,226.7L297.1,228.4L297.6,229.3L297.7,230.8L297.3,232.2L297.4,233L298.1,233.3L298.6,234.6L302.3,234.2L303.9,234.7L305.7,238L306.8,237.6L308.8,237.8L310.4,237.3L311.4,238L310.8,240L310.1,241.3L309.8,244L310.3,246.5L311.1,247.6L311.2,248.5L309.7,250.3L310.7,251.2L311.4,252.5L312.2,256.3M268.2,230L268.4,229.2L268.7,228.4L268.6,227.8L269.1,227.3L268.5,226.8L268.6,225.2L269.7,224.9M261.5,219.2L261.9,218.7L263.7,219.7L264.3,219.2L265.2,219.5L265.6,220.3L266.4,220.6L267.1,219.8M257.8,212.1L258.7,212L259.1,211.1L259.6,211.1L259.7,209.2L260.4,209.2L261,209.2L261.7,208.2L262.4,208.9L262.8,208.5L263.3,208L264.4,207L264.6,206.2L264.8,206.3L265.3,205.4L265.6,205.3L266,205.8L266.5,206L267.2,205.5L267.9,205.5L268.9,205.1L269.4,204.5L270.3,204.6M256.7,210.6L257.1,209.1L256.7,208.7L256.2,208.5L254.9,208.9L254.9,208.4L254.1,207.8L253.6,207.1L252.9,206.7L253.6,205.8L253.5,205.1L253.8,204.4L255.2,203.3L256.7,201.9M250.5,209.3L250.6,208.8L251.7,207.8L252.3,207.4L252.2,207L252.9,206.7M255.4,194.2L254.9,197.1L254,201.3L254.8,201.3M333,229.4L330.7,231.6L330.4,233L331.3,234.4L330.6,235.1L328.8,235.7L328.8,237.5L328,238.5L329.8,241.4M339.9,238.4L339.4,241.8L337.6,242.8L337.8,243.7L337.2,245.7L338.4,248.4L339.3,248.4L339.6,250.5L341.3,253.8M348.8,239.3L347.3,242.5L347.4,245.1L348.5,247.3L348,249L347.7,250.7L346.9,252.3M505.8,81.8L506.1,82.8L507.2,82.9L508.3,84.1L509.9,85.5L511.1,85.2L513.2,86.6L513.7,86.8L514.4,86.8L515.5,87.6L518.9,88.1L517.8,90.2L517.6,92.3L517,92.8L515.9,92.5L516,93.3L514.4,95L514.4,96.4L515.5,95.9L516.3,97.3L516.3,98.2L517,99.3L516.2,100.3L517,102.7L518.3,103.1L518.1,104.5M507.3,108.4L504.5,108.8L501.7,107.3L500.8,108L496.3,106.6L495.4,105.3M579.7,343.5L578.1,341.9L576.1,341.3L575.4,339L575.5,337.7L574.3,337.3L571.5,333.3L570.7,331.2L570.2,330.5L569.3,327.6L572.4,328L573.2,328.4L574.2,328.3L575.8,325.9L578.4,322.9L579.4,322.6L579.8,321.3L581.4,319.8L583.5,319.3L583.6,320.7L585.9,320.6L587.2,321.4L587.7,322.3L589,322.6L590.4,323.8L590.1,328.4L589.4,331L589.1,333.7L589.4,334.8L589,337L588.5,337.3L587.6,339.9L584.5,344.1M553.4,353.2L553.9,342.6L556.6,342.5L557.3,329.5L559.4,329.3L563.6,328L564.6,329.6L566.4,328.1L567.3,328.1L568.8,327.3L569.3,327.6M532.2,326L533.6,325.2L535.2,324.6L537,324.7L538.6,326.4L539,326.1L550.2,326L552,327.8L558.6,328.3L563.7,326.8L566,325.9L567.8,326.1L568.8,327L568.8,327.3M454.6,200.4L455.6,199.2L457,199.5L458.3,198.7L459.9,198.7L461.2,199.8L463,200.8L464.6,203.5L466.4,206L466.4,208.3L466.9,210.5L468,211.5L468.2,213L468,214.1L467.6,214.3L466.1,214.1L465.9,214.5L465.3,214.6L463.3,213.6L462,213.6L456.8,213.4L456.1,213.9L455.2,213.7L453.7,214.4M453.3,211.5L455.8,211.6L456.5,211L457,211L458,210.2L459.2,210.9L460.4,211L461.6,210.2L461.1,209.1L460.2,209.7L459.3,209.7L458.2,208.8L457.4,208.8L456.7,209.7L453.7,209.8M466.4,206L467.3,205.4L467.8,203.2L468.7,203.1L470.6,204.1L472.2,203.4L473.2,203.6L473.7,202.8L484.7,202.8L485.4,200.2L484.9,199.7L483.8,183.8L482.7,168.2L486.8,168.1L495.8,176L505,183.9L505.6,185.6L507.3,186.7L508.6,187.3L508.6,189.6L511.7,189.3L511.7,197.7L510.3,200.2L510,202.5L507.6,203.1L503.8,203.4L502.8,204.7L501,204.9L499.3,204.9L498.6,204.2L497.1,204.7L494.5,206.3L493.9,207.4L491.8,209.1L491.4,210L490.2,210.8L488.9,210.3L488.1,211.2L487.7,213.8L485.5,216.9L485.5,218.1L484.8,219.7L484.9,221.9L483.8,222.5L483.1,222.9L482.7,221.3L481.9,221.7L481.4,221.7L480.9,222.8L478.8,222.7L478,222.2L477.6,222.5L476.8,221.4L476.9,220.3L476.6,219.9L476,220.2L476.1,219L476.7,218.1L475.6,216.5L475.3,215.5L474.6,214.6L474.1,214.5L473.4,215.1L472.5,215.6L471.7,216.4L470.6,216.1L469.8,215.1L469.3,215L468.6,215.5L468.2,215.5L468,214.1M476.9,159.5L486.8,168.1M505.2,237.8L504.5,235.2L504.6,226.6L504.1,225.8L504,223.9L503,222.6L502.2,221.5L502.5,219.5L503.5,219.1L504,217.5L505.4,217.1L506,216L506.9,214.9L507.9,214.9L510,217.1L509.9,218.3L510.6,220.5L510,222L510.3,223.1L509,225.4L508.1,226.5L507.6,228.9L507.7,231.3L507.5,237.4M540.2,212.6L539.4,212.8L539.4,214L538.9,214.1L536.9,210L536.2,209.8L534.1,211.9L532,210.8L530.5,210.6L529.7,211.1L528,211L526.4,212.6L525,212.7L521.6,210.8L520.3,211.7L518.9,211.6L517.9,210.2L515.1,208.8L512.1,209.3L511.4,210.1L511,212.2L510.2,213.7L510,217.1M506,216L506,213.5L502.8,212.6L502.7,210.8L501.2,208.4L500.8,206.7L501,204.9M511.7,189.3L515.5,187.6L523.3,180.4L532.4,173.5L536.7,175.1L538.3,177.1L540.1,175.7M539.4,214L540.5,215.5L540.2,216.2L540.1,217.4L537.8,220.3L537.1,222.7L536.7,224.6L536.1,225.5L535.6,228.1L534.1,229.7L533.7,231.6L533.1,233.1L532.9,234.6L531,235.9L529.4,234.4L528.3,234.4L526.7,236.6L525.8,236.7L524.5,240.3L523.8,243M542.7,233L541.4,236.8L540.7,237.5L540.5,240.4L540.8,242L540.6,243.1L541.9,245.1L542.2,246.5L543.2,248.4L544.5,249.6L544.6,251.3L544.9,252.4L544.7,254.5L542.5,253.6L540.2,252.6L536.7,252.4L536.4,252.2L534.7,252.7L533,252.2L531.7,252.5L527.1,252.4M503,238.6L502.3,237.3L501.6,234.9L501.4,233L502,229.6L501.3,228.3L501,225.3L501,222.6L499.9,220.6L500.1,219.5L502.5,219.5M492,242.1L492.1,240.6L490.9,237.4L491.7,233.1L492.8,230L492.1,224.6L491.7,221.8L491.8,219.7L496.6,219.5L497.9,219.8L498.8,219.2L500.1,219.5M484.9,221.9L486.2,222.7L486.7,224L487.9,224.7L488.9,223.8L490.2,223.7L492.1,224.6M478.4,244.5L478.6,241.4L478.9,240.9L478.8,239.4L477.6,237.9L476.7,237.6L475.9,236.6L476.5,234.9L476.3,233.1L476.4,232L476.8,232L477,230.3L476.8,229.6L477.1,229.1L478.1,228.6L477.5,225.6L476.8,224.1L477.1,222.8L477.6,222.5M476.4,232L475.6,231.9L475,233.4L474.2,233.4L473.7,232.6L473.9,231.1L472.8,228.8L472,229.2L471.4,229.3L470.6,229.5L470.7,228.1L470.3,227.1L470.4,226L469.8,224.5L469,223.1L466.8,223.1L466.1,223.8L465.4,223.9L464.9,224.7L464.5,225.8L463,227.4M457.9,219.4L459.2,217.6L460,217.6L460.7,217L461.3,217L461.8,216.5L461.6,215.3L461.9,214.9L462,213.6M468,235.4L468.7,234.2L468.8,233.1L470.1,231L471.4,229.3M551.8,247.8L550,247.6L548.1,246.9L546.4,248.9L544.9,252.4M568.7,229.9L570.2,231.5L570.3,232.7L572.2,234.6L573.4,236.3L574.1,238.5L576.2,240L576.7,241.2M536.4,279.1L535.4,277.8L534.5,278.4L533.4,280.1M531.1,276.1L533.3,274L532.2,271.5L533.2,270.5L535.1,270.1L535.3,268.4L536.8,270.2L539.3,270.4L540.1,268.6L540.5,266.1L540.2,263.1L538.9,260.9L540.1,256.5L539.4,255.7L537.3,256L536.5,254.1L536.7,252.4M526.7,257.2L527.6,257L531.7,257L531.7,252.5M591.4,295.9L592.7,297.5L593.3,300.7L592.8,301.7L592.1,304.8L592.5,307.9L591.5,309.2L590.5,312.6L592,313.6L583.4,316.7L583.5,319.3M563.7,326.8L562,324.5L560.3,321.4L560.8,309.6L566.6,309.6L566.4,308.4L566.9,307L566.5,305.2L566.8,303.4L566.6,302.2M596.1,304.4L595.2,307.3L595.7,312.1L596.7,312.1L597.6,313.3L598.7,316L598.6,320.8L597.4,321.5L596.4,324.1L594.7,321.8L594.7,319.2L595.3,317.5L595.3,316L594.2,315L593.4,315.4L592,313.6M585.4,360.2L585.3,358.6L585.1,357M581.5,271.8L583.2,272.1L584,269.9L585.5,270.1M590.9,139.6L591.8,139.6L591.9,139L592.6,138.9L592.8,140.3L592.6,140.8L592.6,140.9L592.3,142L591.3,141.5L591.1,143.8L591.8,144.2L591.2,144.6L591.2,145.6L592.3,145.1L592.6,146.4L591.9,152L591.6,151.1L589.5,146M592.4,134.2L593.6,134.4L594.2,135.7L593,137L592.6,138.9M592.3,142L592.6,144.1L592.3,145.1M529.7,139.4L529.7,142L528.5,143L527.7,144.1L526,145.5L526.3,146.9L526.1,148.4L524.9,149.2L523.6,143L521.9,141.6L521.9,140.7L519.7,138.7L519.4,136.1L520.9,134.2L521.4,131.4L520.9,128.2L521.3,126.5M477,158.5L477.1,154.4L481.4,151.8L484.1,151.2L486.2,150.3L487.3,148.5L490.3,147.2L490.5,144.6L492,144.3L493.2,143L496.6,142.4L497.1,141.1L496.4,140.3L495.5,136.7L495.4,134.6L494.4,132.5M524.9,149.2L525.8,152.3L526,153.9L525.6,156.8L525.9,158.4L525.6,160.4L525.9,162.6L524.9,164.1L526.5,166.7L526.7,168.3L527.7,170.3L528.9,169.6L531.1,171.3L532.4,173.5M592.6,140.9L595.7,142.2L600.2,138.6L601.9,142.8L601.5,143.3L596.5,145L599.6,148.5L598.8,149.1L598.5,150.3L596.6,150.8L596.1,152L595.1,153.1L592.1,152.5M649.8,164.2L650.5,165.5M651.3,168.3L649.9,168.3L650,170.7L650.6,171.2L649.5,171.9L649.7,173.3L649.1,174.8L649.3,176.3L648.8,177.1L640.4,175.2L638.9,171.6L638.7,170.7M638,169.4L637.3,169.6L636.4,168.9M628,155.4L626.1,155.5L625.2,153.8L622.8,153.5L624.2,150.1L626,150.4M600.2,138.6L605.4,135L605.7,130.9L605,128.4L606.3,127.6L607.2,125.5L608.2,125L611.2,125.4L612.2,126.3L613.3,125.7L615.8,129.7L617.6,130.7L618.2,132.7L617.1,133.9L617,136.5L619.4,139.8L622.9,141.7L624.7,144.3L624.7,146.8L625.5,146.8L625.9,148.7L627.6,150.5M622.8,153.5L617.9,153.2L609.4,146.1L605.2,143.7L601.9,142.8M646.1,198.5L645,195.9L642.2,189.8L650,186.2L650.8,178.9L649.3,176.3M785,215.1L783.7,210.6L785,207.5L788.4,206.8L791.1,207.3L793.6,208.8L794.5,206.2L797.1,207.6L798.2,210.1L798.5,214.5L794.2,217.4L795.8,219.7L792.9,220L790.6,221.5M786,237.5L785.2,239.1L783.4,239.5L783,237.6L780.6,235.9L780.2,236.6M774.8,223.5L775.7,219.7L776.8,216.2L775.2,212.8L775,211.1L774.4,209L772.1,206L771.2,204.2L772,203.5L772.5,200.2L770.9,197.8L768.7,195.1L766.7,191.9L767.7,191.2L768.2,187.2L770,187.1L771.3,185.5L772.7,184.6L774.1,185.8L774.7,188L776.6,188.1L776.8,192L777.5,195.3L779.9,193.1L780.9,193.8L782.5,193.6L782.8,192.4L784.9,192.6L787.6,195.6L788.5,199.3L791.3,202.5L791.7,205.6L791.1,207.3M772.7,184.6L772.9,183.3L774.7,180.9L775.1,181.8L776.6,181.9L775.2,177.7L776.4,177.2L778.7,180L780.8,183.4L784.1,183.4L785.9,186.6L784.4,187.5L783.9,188.9L787.7,191.1L790.9,195.4L793.2,198.7L795.8,201.2L797,203.9L797.1,207.6M751.4,183.7L750.6,180.8L751.6,181.3L751.1,178.7L752.2,177.9L751.6,176.3L751.9,175.1L751.1,171.3L753.4,172.2L753.9,169.2L753.5,167.4L754.2,164.4L753.5,162.4L756.3,159.9L758.4,160.6L757.5,158.4L758.2,157.7L757.6,156.4L759.1,156.1L760.6,158.2L762,159.1L762.9,161.8L763.7,164.7L762,167.7L762.8,172L765.5,171.4L767,174.7L768.9,175.4L768.8,178.4L771.2,179.8L772.5,180.5L774.2,179.4L774.7,180.9M776.4,177.2L777.7,176.3L779.8,176.3L782.4,175.9L784.1,174L785.8,175.3L788.4,176L788.6,178.1L790.2,179.5L793.2,180.5M822.2,120.9L822.3,121.7L821.3,121.9L819.6,122.1L819.5,123.6L818.3,123.5L818.3,123.8M809.4,116.6L810.2,114.5L811.8,112.8L812.1,110.5L813.9,111.5L816.1,111.6L814.6,109.9L817.5,108.5L817.3,106.7L820.1,108.6M770.5,85.5L771,87.8L771.5,90.7L773,92L774,91.6L776.7,92.1L777.7,91L780.3,91.9L783.9,94L784.4,95.1L782.3,94.8L779.1,95.2L778.1,96.1L777.7,98.1L774.8,99.3L773.4,101L770.6,100.3L769,100.1L769,102.1L770.5,103.3L771.5,104.3L770.5,105.4L769.7,107.1L767.5,108.2L763.9,108.3L760.5,109.4L758.6,111.2L757,110.2L754,110.2L749.3,108.2L746.7,107.7L743.7,108.2L738.2,107.5L735.6,107.5L733.2,105.7L730.6,102.7L728.9,102.4L725,100.4L721.6,100L718.4,99.5L716.9,98.1L715.9,94.5L713,92.1L709,90.9L706.2,89.4L704.4,87.3M751.1,178.7L748.3,173L747.6,173L747.7,175.3L745.8,173.4L746.1,171.4L747.3,171.2L747.7,168.1L746,167.5L743.6,167.5L740.9,167.1L740,164.6L738.7,164.4L736.2,162.9L735.9,165.3L738.3,167.2L736.9,168.5L736.6,169.8L738.5,170.8L738.6,173L740.1,175.7L741.2,178.7M683.7,172.7L685,170.3L691,170.3L689.8,167.3L687.9,165.4L687.1,162.7L685,161.1L687.1,157.4L690.3,157.6L692.2,153.9L692.9,150.4L694.6,146.9L693.9,144.4L695.6,142.4L693,140.7L691.4,138.4L689.7,135.4L690.5,133.9L694.6,134.7L697.3,134.2L698.9,131.4L702.9,135.3L703.5,138.1L705.1,139.9L705.5,141.6L703.5,141.2L705.4,145L708.5,147.2L712.9,149.6L711.6,151.2L711.5,154.5L714.4,155.9L717.3,157.6L721.3,159.6L725.1,160L727.1,161.9L729.2,162.2L732.6,163L734.9,163L734.8,161.6L733.8,159.3L733.6,157.8L735,157L736,159.8L736.3,160.5L739.1,161.9L740.6,161.3L742.9,161.6L745,161.5L744.6,159.3L743.2,158.1L745.2,157.7L746.8,155.1L749.2,152.8L751.7,153.7L753.1,152.2L755,154.4L754.6,155.9L757.6,156.4M736,159.8L737,157.2L738.2,156.3L740.3,157.1L741.8,157.2L743.2,158.1M712.9,149.6L713.7,148.8L716.1,149.9L719.4,152.2L721,152.7L722.4,154.4L724.6,155.1L727.2,156.6L730.4,157.4L733.6,157.8M664.9,167.7L665.1,163.6L668.6,161.7L668.1,160.1L666.7,159.5L666,156.4L663.2,154.9L661.7,152.7L660,150.9L664.8,152.7L667.3,152.2L669,152.6L669.4,151.8L671.3,152.1L674.4,150.7L673.8,147.7L674.8,145.7L676.7,145.7L676.8,144.8L678.6,144.3L679.7,144.6L680.4,143.7L679.8,141.6L680.3,139.5L681.7,138.6L680.1,136.4L682.6,136.5L683,135.2L682.5,133.9L683.3,132.5L682.6,130.8L681.5,129.4L682.6,127.9L685.1,127.2L687.9,126.8L689,126.2L690.3,125.8L692.7,127.4L694.3,130L698.9,131.4M671.7,125.8L672.6,126.2L674.1,125.1L675.2,125.8L675.5,124.3L677.1,124.3L677.3,123.8L677.1,122.5L677.9,121.3L679.5,122.1L679.5,123.1L680.3,123.3L681,126.1L682.3,127.2L683,126.5L684,126.1L685.1,124.6L686.9,124.9L689.5,124.9L690.3,125.8M660,150.9L661.7,147.7L661,145.5L658.9,144.9L658.2,142.7L656.8,139.9L657.4,138.1L656.2,137.5L656.3,135.1L656.3,130.8L659.2,132.1L661,131.7L661.2,130.1L663,129.6L664.2,128.6L664,125.9L665.9,125.3L666,124.1L667.4,125L668.2,125.1M676.5,115.6L675.9,116.6L673,116L673.4,117.9L676,117.7L679.5,118.7L684,118.2L685.7,121.3L686.4,120.9L688.2,121.7L688.5,123L689.5,124.9M696.7,108.8L696.7,109.5L693.5,111.2L693.1,112.5L690.1,112.9L690,115L687.2,114.5L685.7,115.2L683.8,116.7L684.5,117.5L684,118.2M656.3,130.8L655.3,128L653.4,127.9L649.7,124.9L647.6,124.5L644.4,122.9L642.5,122.5L641.6,123.2L639.9,123.1L638.6,125L636.5,125.6M613.3,125.7L611.4,123L611.7,122L610.2,118.2L611.7,117.3L612.3,118.5L613.9,120.1L615.7,120.5L616.6,120.4L619,118L619.9,117.7L620.9,118.7L620.4,120.3L622.3,122.1L622.9,121.9M592.2,130.2L592.8,129.5L593.4,128.8L593.2,126.9L594.1,127.6L596.8,126.6L598.2,127.3L600.3,127.2L603,126L604.4,126L607.2,125.5M615.7,120.5L614.3,118.6L614.2,118.1L613.1,118.1L612.2,117.2L611.7,117.3L610.5,116.3L608.5,115.5L608.4,113.9L607.7,112.8L611,112.3L611.7,113.1L612.8,113.7L612.5,114.5L614.1,115.6L613.6,116.7L614.8,117.6L616.1,118.1L616.6,120.4M539.7,37.3L542.5,38.2L545.9,39.6L546.7,42.8L547.5,43.7M572.4,79.1L570.4,79.2L569.9,79.9L570,81.3L569,81.1L567,81.2L566.3,80.5L565.5,81L564.6,80.6L562.8,80.5L560.1,79.8L557.7,79.6L556,79.7L554.9,80.5L553.8,80.6L553.5,79.3L552.6,78L553.9,77.4L553.7,76.3L552.9,75.2L552.6,74L554.8,74L557,72.9L557.3,71.4L558.9,70.5L558.5,69.3L559.7,68.8L561.8,67.8M571.1,99.5L569.9,98.9L568.9,99.4L567.7,98.9L568.3,98.5L568.5,97.5L569,96.5L568.7,95.9L569.2,95.7L569.5,96.1L570.9,96.2L571.5,96L571,95.6L571.1,95.2L570.1,94.4L569.6,93.1L568.6,92.6L568.6,91.6L567.4,90.8L566.4,90.7L564.5,89.7L563,90L562.5,90.5L561.5,90.5L561.1,91.2L559.4,91.5L558.6,91.9L557.4,91.2L555.9,91.2L554.4,90.9L553.5,91.5L553.2,90.7L551.8,89.9L552.1,88.7L552.6,87.9L553.2,88.1L552.4,86.7L554.1,84.3L555.2,83.9L555.3,83.1L553.8,80.6M552.6,87.9L550.3,86.8L548.6,87.2L547.5,86.9L546.2,87.5L544.9,86.5L544,86.9L543.8,86.7L542.6,85.2L540.9,85L540.5,84.1L538.9,83.8L538.7,84.6L537.3,83.9L537.4,83.1L535.7,82.9L534.5,81.9L533.3,80.1L533.4,79.1L532.7,77.6L531.8,76.6L532.3,75.8L531.7,74.4M550.7,72.8L551.9,73.1L552.6,74M553.5,91.5L552.1,92.1L551.3,94.2L550.1,96.3L548.3,96.9L546.8,96.7L545,97.5L544.2,98L542.1,97.4L540.2,96.1L539.4,95.7L538.9,94.7L538.5,94.6M539.9,90.8L539.9,92L538.5,92L539.1,92.7L538.5,94.6L538.1,95.2L536,95.2L534.8,95.9L532.9,95.7L529.4,94.9L528.8,93.8L526.5,94.4L526.3,95L524.8,94.5L523.6,94.4L522.5,93.9L522.8,93.1L522.7,92.6L523.4,92.4L524.6,93.3L524.9,92.5L527,92.6L528.6,92.1L529.8,92.1L530.6,92.8L530.7,92.3L530.3,90.3L531.1,89.9L531.8,88.5L533.6,89.5L534.8,88.3L535.6,88L537.5,88.9L538.6,88.8L539.7,89.4L539.6,89.7L539.9,90.8L541.2,91.6L542.1,91.9L544,91.5L544.2,90.9L545.1,90.8L546.2,90.3L546.5,90.5L547.5,90.2L548,89.5L548.7,89.3L551.3,90.2L551.8,89.9M567.7,98.9L567.1,97.4L567.1,96.1L566.8,94.8L565.1,93L564.2,91.7L563.3,90.8L562.5,90.5M569.4,104.4L567.9,104.1L566,103L563.2,103.7L562.1,104.5L558.5,104.3L556.6,103.8L555.7,104.1L554.8,102.8L554.3,102.2L554.8,101.7L554.2,101.3L553.5,102L552,101.1L551.6,99.8L550.1,99.1L549.7,98.1L548.3,96.9M546.3,68.1L548.7,67.3L552.4,67.5L554.5,67.2L554.9,67.8L556.1,67.9L558.5,69.3M552.6,63.4L554.3,63L555.3,63.3L557.4,64.3L559.2,64.3M534.5,81.9L533.5,82.2L532.8,81.9L532.3,82.5L530.7,83L529.9,83.8L528.3,84.4L528.8,85.3L529.1,86.5L530.4,87.2L531.8,88.5M522.7,92.6L520.1,91.7L519.6,92.3L517.6,92.3M514.4,86.8L514.5,85.5L514,84.8L514.2,82.8L513.7,79.8L515,79.8L515.6,78.7L516,76.1L515.5,75.2M518.9,71L520.6,71.4L522,71M568.8,109.8L566.6,109.4L564.2,110.4L564.4,112L562.2,112.3L560.3,111.2L558.5,112.1L556.6,112L556.2,109.9L554.9,108.8L555.2,108.4L554.9,108L555.2,107L556,106L554.7,104.6L554.3,103.5L554.8,102.8M564.2,110.4L565.6,111.3L565.1,113.3L564.5,113.7M550.3,117.6L551.3,116L551.3,114.9L552.1,114.5L552,113.6L553.6,113.3L554.5,112.6L555.8,112.7L556.2,112.1L556.6,112M602.4,111.4L605,111.2L607.7,112.8M547.6,110.3L547.4,109.2L548.3,107.7L548.5,108.3L549.1,108L549.7,108.8L550.3,109.2L550.6,110.3L550.4,111.4L550.9,112.8L552,113.6M545,97.5L545.7,98.7L546.6,99.6L545.8,100.8L544.6,100.1L543,100.2L540.8,99.6L539.7,99.7L539.3,100.4L538.3,99.6L538,100.9L539.3,102.4L539.9,103.4L541.1,104.6L542.1,105.3L543.1,106.6L545.4,107.8L545.2,108.3M532.9,98.8L534.6,98.9L535,98.4L535.8,98.9L536.8,99L536.7,98.1L537.5,97.8L537.6,96.5L539.4,95.7M524.8,94.5L524.7,95.8L523.7,96.3L521.9,95.9L521.4,97.2L520.3,97.3L519.8,96.8L518.6,97.8L517.4,98L516.3,97.3M513.2,86.6L513.4,84.9L514,84.8M507.6,81.3L509.3,81.5L511.4,80.9L512.9,82.1L514.2,82.8M477.8,110.3L478.7,109.4L479.7,109L480.3,110.5L481.7,110.5L482.2,110.1L483.6,110.3L484.2,111.9L483.1,112.7L483,115.3L482.5,115.8L482.4,117.3L481.3,117.6L482.2,119.5L481.5,121.7L482.3,122.7L481.9,123.6L480.9,124.9L481.1,126M483.2,70.6L483.6,72.1L483.1,73.5L484.4,73.5L486.1,74.1M532.9,95.7L532.7,97.2L533.4,98.5M611,112.3L611.5,111.8L613.6,112.7L615,112.9L615.2,112.5L613.6,110.8L614.1,110.3M820.2,243.9L821.6,245.9L822.1,244.6L823.5,244.7L823.5,242.3L823.5,240.4M539.7,89.4L540,88.7L541,88.7L541.8,88.4L541.8,88.2L542.3,88L542.3,87.3L542.9,87.2L543.2,86.7L543.8,86.7M619.6,213.2L618.8,214.1L617.6,213.8L616.6,212.6L615.3,210.4L614,209.2L613.2,207.9L610.7,206.4L608.8,206.4L608.1,205.6L606.5,206.4L604.7,204.8L604,207.5L600.8,206.8M617.8,199.6L618.9,198.4L618.5,196.9L619.1,195.1L620.3,196L621,195.7L624.2,195.6L624.7,196L627.4,196.3L628.4,196.2L629.2,197.4L630.5,196.8L632.1,192.9L634.5,191.2L642.2,189.8M587,132.8L586.7,132.7L586.3,133L585.9,132.9L585.8,133L585.7,132.7L585.5,132.5L585,132.4L584.3,132.7L583.8,132.6M567.7,178.9L566.9,165.6L565.9,153L564.9,150.1L565.4,148L564.8,146.5L565.6,144.8M598.9,240.2L597.2,236.1L595.8,235.2L595.3,233.7L593.9,231.9L592.1,231.6L593,229.5L594.5,229.4L594.9,228.2M617.6,213.8L616.7,215.4L615.8,217.2L616.1,218.2L616.2,219.3L617.8,219.4L618.4,219.1L619.1,219.8L618.5,221.1L619.7,223.2L620.8,225L621.9,226.3L631.2,230.8L633.6,230.8M620,217.8L619.1,219.8M585.4,265.3L583.7,266.5L583.1,266.1M586.5,247.7L587.7,246.7L589.4,247.6L591.7,246.7L593.7,246.7L595.4,244.9M545.8,100.8L546.7,100.8L546.2,102.2L547.5,103.4L547.3,104.9L546.7,105L546.3,105.3L545.6,106L545.4,107.8M550.6,110.3L551,110.4L551,109.7L552.4,109.2L552.9,109.1L553.7,108.9L554.9,108.8M552.9,109.1L552.8,108.8L553.1,108.5L553.3,107.7L552.9,107.7L552.4,107.1L552,107L551.6,106.5L551.1,106.3L550.7,105.8L550.3,106L550.1,107L549.5,107.3L549.7,107L548.7,106.3L547.8,106L547.4,105.6L546.7,105M549.5,107.3L549.1,108","c":{"124":"M213.2,88.2L212.9,88.1L210.6,85.2L210,84L206.8,82.8L207.7,80.2L209.6,78.4L207.7,77.2L209.4,74.9L208.6,72.9L209.9,71.5L212.4,70.2L214,68.4L211.9,66.7L212.8,63.7L213.5,61.8L212.7,60.7L212.5,59.6L212.8,58.3L209.7,59.1L206.1,60.6L206.1,58.9L205.9,57.8L204.6,57.1L202.6,57L219.6,43.7L230.5,36.1L233.4,36.5L235.1,37.5L236.8,37.7L239.7,36.8L242.8,36.2L245.4,36.5L249.4,35.6L253.2,35.2L253.4,35.9L255.4,35.5L257.1,34.6L258.1,34.8L259,36.5L263.3,35.2L261.6,36.7L264.4,36.4L265.9,35.8L268,35.9L269.9,36.7L273.5,37.4L275.8,37.8L277.8,37.6L279.2,38.7L275.3,39.7L278.3,40.1L283.9,39.9L285.9,39.5L286.7,40.8L289.9,39.7L288.9,38.8L290.9,38.2L293.4,38.1L295.1,37.9L296.2,38.3L296.9,39.4L299.3,39.3L301.8,40.2L305.1,39.9L307.9,39.9L309,38.7L311,38.3L313.4,39L311.5,40.9L314.3,39.3L315.8,39.3L318.6,37.3L317.8,36.1L316.3,35.4L318.6,33.3L322.2,32L324.4,32.3L325.4,33.1L326,35.2L323.3,36.1L326.5,36.5L324.6,38.5L328.6,37L329.8,38.2L327.9,39.7L328.5,41.1L331.9,39.6L334.8,37.9L336.8,35.7L339.4,35.9L342,36.2L343.7,37.1L343,38.1L340.7,39.2L341.1,40.3L340.1,41.3L335,42.8L332,43.1L330.5,42.5L329,43.6L325.5,45.4L324.1,46.4L320.5,47.9L317.5,48.1L315,49.1L313.7,50.6L311,50.9L306.9,52.8L302.4,55.5L300,57.5L297.6,60.4L300.4,60.9L299.6,63.3L299.1,65.3L302.6,64.8L305.8,65.9L307.3,66.9L308,68.2L310.3,69L311.9,70.1L315.5,70.3L317.7,70.5L315.9,72.9L315,75.7L314.8,78.9L316.7,81.6L319,80.7L321.8,77.8L323.1,73.3L322.3,71.9L326.6,70.6L330.3,68.7L332.6,66.8L333.4,65L333.3,62.8L331.9,60.8L336.2,58.1L336.7,55.9L338.6,52.1L340.4,51.5L343.5,52.2L345.5,52.4L347.6,51.8L349,52.6L350.7,54L350.7,55L354.3,55.1L353,57.2L351.9,60.4L353.6,60.8L354.4,62.3L358.2,60.9L361.8,58.1L363.8,56.9L364.3,59.2L365.4,62.5L366.2,65.6L364.6,67.3L366.8,68.8L368.1,70.4L371.3,71.1L372.4,72L372.3,74.3L373.9,74.7L374.4,75.8L373.3,78.9L371.2,80L369.2,81L365,82.1L361.2,84.5L357.1,85L352.4,84.3L349,84.3L346.5,84.5L343.6,86.6L340.1,88L335,91.9L331.1,94.7L333.4,94.2L338.8,90.3L344.8,87.8L348.4,87.5L349.9,88.9L346.8,90.9L346.3,94.2L346.2,96.5L348.8,98.1L352.9,97.6L356.5,94.2L355.9,96.4L357,97.5L353.4,99.5L347.4,101.4L344.6,102.7L341.1,104.9L339.3,104.7L340.2,102L345.3,99.5L341.4,99.6L338.6,99.9L337.7,98.2L339.3,94L338.6,93.1L336.8,93.6L336.4,92.8L333.6,95.1L331.9,97.5L330.5,98.9L329.3,99.4L328.5,99.6L327.9,100.3L323.5,100.3L319.8,100.4L318.5,100.9L315,103.2L314.6,103.4L313.3,104.7L311.1,104.7L308.7,104.7L307.4,105.2L307.5,105.8L307.3,106.8L307.2,107.1L303.3,108.7L300.6,109.2L297,110.9L296.4,110.9L295.8,110.4L295.7,110L295.9,109.6L296.9,108.5L298.8,106.7L300.3,104.9L301,102.1L301.8,99.3L300,97.8L300.6,97.3L300.4,96.9L299.7,96.9L299.5,96.4L299.7,95.7L299.1,96L298.5,95.9L298.8,95.6L298.4,95.3L298.6,94.5L297.2,93.5L295.8,92.5L294.1,91.3L292.5,90.2L289.9,91.1L289.2,91.1L286.7,90.3L284.6,90.7L282.8,89.8L280.7,89.3L279.2,89.1L278.7,88.6L279.3,87L278.5,87L277.8,88.2L273,88.2L265,88.2L257,88.2L250,88.2L243,88.2L236.1,88.2L229,88.2L226.7,88.2L219.8,88.2ZM326.7,51.8L329,50.7L331.8,50.7L331.4,51.2L328.1,52.5L326.6,52.4ZM352.4,30.5L351.1,29.6L351.7,29L352.7,28.9L356.8,29.1L359.1,30L358.9,30.4L357,30.4L355,30.3L352.8,30.6ZM333.6,52.7L334.9,51.9L335.7,52L335.9,52.5L334.2,53.7L333.5,53.5L333.4,52.8ZM330.5,27L328.8,27.6L326.3,27.4L324.6,27L326.3,26.4L329.3,26L330.3,26.5ZM334,23.4L333.2,23.4L330,23.3L329.9,23L333.4,23L334.4,23.2ZM330.7,21.8L332.3,22.2L331.3,22.7L328.4,23L327.3,22.7L327.1,22.2L327.6,21.7L329.8,21.8ZM339.5,27.9L336.7,27.7L332.4,27.2L332.7,26.3L333.2,25.6L332.1,25L328.6,24.8L327,24.4L328.3,23.9L331.9,23.9L333.4,24.4L336.9,24.4L338,24.8L337,25.3L338.7,25.7L339.5,26L341.8,26.1L344.3,26.2L347.5,25.9L351.3,25.8L354.1,25.9L355.5,26.4L355.4,27L353.8,27.5L350.8,27.8L348.7,27.6L343.2,27.8ZM304.3,22.6L306.5,22.8L305.4,23.1L301.6,23.5L299.6,23.1L301.5,22.7ZM305.9,21.8L307.8,22L305.4,22.3L302.5,22.3L302.7,22.1L305,21.7ZM372.6,81.3L370.7,83.2L368.2,85.7L370.1,84.7L371.4,85.4L370.3,86.4L372,87.2L373.4,86.5L375.4,87.4L373.9,89.6L375.7,89.1L375.5,90.7L375.7,92.6L373.8,95.2L372.7,95.4L371.3,94.8L372.6,92.3L372.1,91.9L368.5,94.5L367.1,94.4L369.3,93L367.2,92.3L364.6,92.4L360.1,92.4L360.1,91.5L361.9,90.4L361.2,89.6L363.8,87.8L367.9,83.1L370,81.4L372.3,80.4L373.3,80.6ZM331.6,45.7L333.2,46.4L335,47.1L334.3,48.2L336,48L336.9,48.8L334.5,49.5L331.8,49L331.4,47.9L328.4,49.2L324.6,50.4L325,49L322,49.2L324.7,48.1L326.4,46.3L328.8,44.3L330,44.4L329.6,45.4L330.9,45.1ZM353.5,31.2L355.9,30.6L359.3,31.4L361.2,32.3L360.8,33L364.6,32.6L365.6,33.8L369.6,34.5L370.7,35.3L371.3,37.1L367.1,38L370.7,39.3L373.5,39.8L375.1,41.7L378.1,41.8L376.6,43.3L371.6,45.9L369.7,45L367.9,42.9L365.1,43.1L364.1,44.4L365.3,45.7L367.4,46.7L367.9,47.3L367.8,49.6L366.1,51.3L363.9,50.6L359.9,48.7L361.6,50.8L362.9,52.2L362.7,53L357.7,52.1L354.1,50.7L352.4,49.6L353.5,48.9L351.3,47.7L349.1,46.6L348.7,47.3L342.6,47.6L341.4,46.9L344,45.2L347.8,45.2L352.1,44.9L352,44.1L353.4,43L357.5,41L357.6,40L357.4,39.3L355.2,38.4L351.8,37.7L353.4,37.2L352.4,36L350.8,35.9L349.8,35.2L348.3,35.8L344.6,36L338.1,35.6L334.6,35L331.7,34.7L330.8,34.1L333.6,33.3L330.9,33.2L332.1,31.4L335,29.9L337.6,29.2L342.8,28.8L340.4,29.9L340.8,30.9L343.8,29.6L349.1,28.9L350.7,30.6L349.4,31.7ZM327.4,28.3L331.2,28.3L334.3,28.7L330,30.2L327.5,30.5L324.1,31.8L322.1,31.7L322.5,30.2L323.4,29.4L325.2,28.7ZM279.9,25.3L284.5,24.2L289.3,23.4L292,23.4L294.7,23.2L293.1,24.2L291,24.7L289.3,24.8L285.1,25.4L281.9,25.6ZM203,73.6L205.4,73.4L201.7,76.6L201.6,78.8L200.7,78.8L200.5,77.5L200.9,76.2L200.6,75.4L201.3,74.1L202.3,73.2ZM316.2,21.2L319.4,21.4L323.6,21.8L324.3,22.4L324.3,22.9L321.6,22.7L319.2,22.3L315.4,22.3L317.5,21.9L315.8,21.7ZM210.5,89.6L209,90L206.2,88.7L206.3,87.6L205.1,86.6L205.3,85.7L203.4,85.2L203.8,83.6L204.6,82.9L206.4,83.6L207.5,84L209.4,84.3L209.4,85.3L209.4,86.7L210.8,88ZM278.8,27.8L280.9,28.1L285.5,28.2L286.6,28.7L287.7,29.3L284.8,29.8L278.7,30.9L274.8,32.2L273.8,33L267.7,33.8L267.7,33L264.7,32.1L266.5,31.3L269.5,30.1L272.7,29L272.3,28ZM306.4,25.7L308.3,25.4L310.1,25.5L309.5,26.2L307.5,26.9L301.1,27.2L295.7,27.8L292.8,27.9L293.3,27.4L297.9,26.7L289.5,26.9L287.3,26.6L291.7,25.2L294,24.8L298.4,25.3L300.4,26.1L303.4,26.2L302.6,24.8L304.9,24.3L306.6,24.5L306.3,25.2ZM303.4,30L304.7,30.7L303.9,32.4L303,33.7L305.2,34.6L307.6,35.5L306.5,36.3L303.2,36.5L303.6,37.2L302.2,38L299,37.6L296.3,37.1L294,37.2L289.6,37.9L284.3,38.2L280.7,38.4L280.7,37.4L278.8,36.9L276.8,37.1L276.3,35.6L277.8,35.4L281.2,35.1L283.7,35.2L286.6,34.8L283.5,34.4L279.2,34.5L276.6,34.5L276.5,33.8L281.8,33.1L278.8,33.1L276.2,32.6L279.5,31.3L281.6,30.6L287.9,29.6L289.4,29.9L287.5,30.7L292.2,30.2L293.7,31.1L296.9,30.2L297.9,30.8L297.4,32.5L299.2,31.7L300,30L301.9,29.7ZM313.9,30.6L313.1,29.5L316.2,28.7L318,29.1L321.5,28.9L321.5,29.4L318.9,30.1L320.9,30.9L318.9,32.5L315.1,33.2L313.4,33L312.9,32.3L309.7,31L310.4,30.4ZM304.3,29.1L306.8,29.1L307.8,29.4L304.9,30.5L303.4,29.4ZM324.5,24.4L325.2,25.1L324.4,25.8L322.3,26.9L319.1,27.1L317.5,26.8L318.5,26L315.4,26.1L316.6,25L318.5,25L321.8,24.5L324.2,24.6ZM334.4,19.8L335.9,19.5L337.8,19.5L337.3,19.2L341.3,19.2L342.9,19.7L345.6,19.9L348.2,20.1L348.8,20.8L350.5,21.2L347.8,21.5L343.6,22.4L340.4,22.5L336.9,22.3L335.6,21.9L336.1,21.4L337.8,21.1L334.6,21.1L333.1,20.8L332.6,20.3ZM343.4,18.6L346.1,18.4L348.1,18.4L351.6,18.3L354.5,18L356.6,18L358.1,18.2L359.9,17.8L362.3,17.7L365.4,17.6L370.6,17.6L371.4,17.7L376.5,17.5L380.1,17.6L383.7,17.6L388.2,17.7L391.8,17.8L394.7,18L394.5,18.2L390,18.6L385.7,18.8L384,19L387.7,19L383.2,19.5L380.2,19.8L376.5,20.7L372.7,20.8L371.4,21.1L366,21.2L368.3,21.3L366.9,21.5L367.8,22.1L365.7,22.5L362.7,22.9L361.4,23.4L358.5,23.8L358.5,24.1L361.6,24L361.3,24.4L355.8,25.2L351.5,24.8L346,25L343.5,24.9L340.2,24.8L340.7,24.1L344.3,23.8L344.4,22.9L345.6,22.8L349.7,23.4L348.2,22.5L345.6,22.3L347.5,21.8L350.9,21.6L351.8,21.2L349.8,20.7L349.6,20.2L354.3,20.2L355.6,20.3L358.7,20L354.9,19.8L348.8,19.9L346.1,19.6L345.1,19.2L343.4,18.9ZM352.7,40.6L351,41.2L348.7,41.3L349,40.3L350.7,39.2L352.7,38.9L353.8,39.5L353.2,40.3ZM315.6,36.5L316,37.3L314.1,37.9L312.1,37.3L310.3,37.6L308.6,36.7L310.9,36.1L313.1,35.2L314.6,35.8L315.4,36.1ZM350.4,85.6L351.3,85.3L354.1,86.1L355.9,87.3L355.8,87.8L354.6,87.9L352,87ZM348.2,94.1L348.5,95.6L350.1,96L352.3,95.9L350.7,97.2L349.7,97.4L347.2,96.1L347,95Z","276":"M531.7,74.4L532.3,75.8L531.8,76.6L532.7,77.6L533.4,79.1L533.3,80.1L534.5,81.9L533.5,82.2L532.8,81.9L532.3,82.5L530.7,83L529.9,83.8L528.3,84.4L528.8,85.3L529.1,86.5L530.4,87.2L531.8,88.5L531.1,89.9L530.3,90.3L530.7,92.3L530.6,92.8L529.8,92.1L528.6,92.1L527,92.6L524.9,92.5L524.6,93.3L523.4,92.4L522.7,92.6L520.1,91.7L519.6,92.3L517.6,92.3L517.8,90.2L518.9,88.1L515.5,87.6L514.4,86.8L514.5,85.5L514,84.8L514.2,82.8L513.7,79.8L515,79.8L515.6,78.7L516,76.1L515.5,75.2L515.9,74.6L517.8,74.4L518.3,75L519.7,73.6L519.1,72.6L518.9,71L520.6,71.4L522,71L522.1,72L524.4,72.7L524.5,73.7L526.7,73.2L527.9,72.4L530.5,73.5Z","356":"M757.6,156.4L758.2,157.7L757.5,158.4L758.4,160.6L756.3,159.9L753.5,162.4L754.2,164.4L753.5,167.4L753.9,169.2L753.4,172.2L751.1,171.3L751.9,175.1L751.6,176.3L752.2,177.9L751.1,178.7L748.3,173L747.6,173L747.7,175.3L745.8,173.4L746.1,171.4L747.3,171.2L747.7,168.1L746,167.5L743.6,167.5L740.9,167.1L740,164.6L738.7,164.4L736.2,162.9L735.9,165.3L738.3,167.2L736.9,168.5L736.6,169.8L738.5,170.8L738.6,173L740.1,175.7L741.2,178.7L741.1,180L739.3,179.9L736.1,180.7L736.8,183.4L735.8,185.6L732.3,188.1L730,192.4L728.3,194.7L726,197.1L726.2,198.8L725,199.8L722.7,201.1L721.4,201.3L721,204.1L722.2,208.9L722.7,212L721.9,215.6L722.5,221.9L721.1,222.1L720.1,225L721,226.2L718.5,227.3L717.8,229.8L716.7,230.9L713.8,227.4L712.1,222.2L710.7,218.4L709.6,216.6L707.7,213L706.6,208.4L705.8,206L702.7,200.9L700.5,193.8L699,189.1L698.3,184.6L697.2,181.2L693.6,183.4L691.6,183L687.4,178.5L688.4,177.2L687.4,175.8L683.7,172.7L685,170.3L691,170.3L689.8,167.3L687.9,165.4L687.1,162.7L685,161.1L687.1,157.4L690.3,157.6L692.2,153.9L692.9,150.4L694.6,146.9L693.9,144.4L695.6,142.4L693,140.7L691.4,138.4L689.7,135.4L690.5,133.9L694.6,134.7L697.3,134.2L698.9,131.4L702.9,135.3L703.5,138.1L705.1,139.9L705.5,141.6L703.5,141.2L705.4,145L708.5,147.2L712.9,149.6L711.6,151.2L711.5,154.5L714.4,155.9L717.3,157.6L721.3,159.6L725.1,160L727.1,161.9L729.2,162.2L732.6,163L734.9,163L734.8,161.6L733.8,159.3L733.6,157.8L735,157L736,159.8L736.3,160.5L739.1,161.9L740.6,161.3L742.9,161.6L745,161.5L744.6,159.3L743.2,158.1L745.2,157.7L746.8,155.1L749.2,152.8L751.7,153.7L753.1,152.2L755,154.4L754.6,155.9Z","404":"M609.9,278.7L605.9,274.9L605.8,272.7L595.7,265L595.2,264.6L595.2,260.6L596,259.1L597.4,256.6L598.4,253.8L597.1,249.5L596.7,247.6L595.4,244.9L597,242.7L598.9,240.2L600.4,240.8L600.4,243L601.4,244.2L603.3,244.2L607,247.4L607.8,247.4L608.5,247.3L609.1,247.8L611,248.1L611.8,246.5L614.3,244.9L615.5,246.2L617.4,246.2L615,250.5L615.1,264.3L616.8,267.4L614.8,268.9L614.1,270.5L613,270.8L612.6,273.4L611.7,274.9L611.1,277.5Z","410":"M818.3,123.8L818.3,123.5L819.5,123.6L819.6,122.1L821.3,121.9L822.3,121.7L822.2,120.9L826.6,124.8L828.4,127L830.6,130.9L830.6,132.8L828.6,133.4L827.3,134.8L825.1,135.1L823.9,133.3L823.1,130.7L820.1,127.2L821.7,126.6Z","422":"M592.6,138.9L591.9,139L591.8,139.6L590.9,139.6L591.4,136.8L592.4,134.4L592.4,134.2L593.6,134.4L594.2,135.7L593,137Z","484":"M196,141.5L199.1,141.2L202.6,140.8L202,141.5L205.2,143.2L210.2,145.6L215.4,145.6L217.5,145.6L218,144.2L222.5,144.2L223,145.4L223.9,146.5L224.9,148L225.1,149.9L225.1,151.8L226.1,152.8L227.9,153.9L230.5,151.1L232.7,151.1L234.1,152.5L234.6,154.9L234.9,156.9L235.8,159L235.6,161.5L235.9,163.1L237.6,164.2L239.3,165L240.4,164.9L238.5,168.1L237.3,170.6L235.9,175.5L235.2,177.3L235.2,179.2L235.6,181L235.5,183.8L236.7,186.6L236.9,188.7L237.6,190.5L240.3,191.4L241.2,193L243.8,191.9L245.9,191.6L248.1,190.9L249.9,190.3L252,188.8L253,186.6L253.9,183.6L254.6,182.5L256.6,181.6L259.7,180.7L262,180.8L263.8,180.5L264.2,181.3L263.8,183.1L261.9,185.2L260.8,187.5L261.2,188.1L260.5,189.7L259.3,192.6L258.8,191.6L258.2,191.7L257.7,191.7L256.3,193.9L255.9,193.5L255.5,193.7L255.4,194.2L252.9,194.2L250.3,194.2L250,196.3L248.7,196.3L249.5,197.5L250.4,198.4L250.6,199.2L251,199.4L250.7,200.6L247.2,200.7L245.4,203.7L245.7,204.4L245.2,205.2L245,206.3L242.5,202.3L241.2,201.1L239.2,200.2L237.6,200.4L235.1,201.8L233.7,202.2L231.9,201.2L229.9,200.5L227.7,198.8L225.7,198.3L222.9,196.6L221,194.8L220.5,193.8L219,193.6L216.4,192.4L215.6,190.8L213.1,188.7L212.3,186.4L212.1,184.6L213.1,184.2L213,183.2L213.9,182.2L214.2,181L213.7,179.3L213.8,177.9L213.4,176.1L212,172.5L210.1,169.6L209.5,167.4L207.7,165.9L207.4,165.1L208.6,162.9L207.5,162L206.5,160.3L206.7,157.8L205.3,157.5L204.5,155.7L203.8,154L204.1,152.9L203.7,150.2L203.8,147.5L204.4,146.2L203.1,144.8L202.2,145L201.1,144L200.1,145.4L199.8,147.1L199,149.7L199.4,151.2L200.4,153.6L200.5,154.4L200.8,154.7L200.7,155.9L201.2,155.8L200.9,158.1L201.4,159L201.6,160.3L202.6,162.1L202.4,165.4L202.7,167L202.9,168.7L202.5,170.5L203.8,170.7L204.4,172.3L204.9,173.9L204.6,174.6L203.1,175.9L202.6,175.9L202.6,173.7L201.4,171.6L200,169.9L198.9,169L199.8,166.3L200,164.4L199.1,163.3L197.8,161.7L197.3,162.2L197,161.2L195.6,160.4L194.8,158.3L195.1,158L196.1,158.2L197.6,156.9L198.2,155.3L197.1,152.8L196,151.8L195.9,149.7L195.8,147.4L195.8,144.6Z","554":"M940.1,405.9L937.6,407.7L934.5,409.9L931.5,411.2L931.8,410.3L931.1,409.8L934.8,407.2L935.5,405.4L933.9,404.1L935,402.9L937.7,401.7L940.2,399.2L941.7,397L942.4,394.8L942.9,394.2L942.7,392.8L942.8,389.8L943.5,387.4L944.6,387.1L944.7,389L946,389.9L944.6,392.9L943.8,396.4L945.5,394.2L946,395.1L944.4,397.6L945.6,398.7L947.1,399L949.6,397.7L950.5,398.1L947.6,401L945.2,402.9L943.4,402.9L941.9,403.9L940.9,405.3ZM912.5,417.1L916.1,415.5L919,413.8L922.2,411.4L923.8,410.6L925.7,408.8L928.7,407.3L928.1,408.7L927.5,410L930.4,408.7L930,410.1L928.8,411.4L926.6,412.9L922.8,415.3L920.4,416.5L919.9,418.1L918,418.1L914.9,419.3L912.3,421.3L907.9,424.5L904.7,425.9L902.7,426.7L900.5,426.7L900,425.7L897.6,425.4L898.3,424.3L901.7,422L907.6,418.9L909.7,418.3Z","566":"M507.5,237.4L507.7,231.3L507.6,228.9L508.1,226.5L509,225.4L510.3,223.1L510,222L510.6,220.5L509.9,218.3L510,217.1L510.2,213.7L511,212.2L511.4,210.1L512.1,209.3L515.1,208.8L517.9,210.2L518.9,211.6L520.3,211.7L521.6,210.8L525,212.7L526.4,212.6L528,211L529.7,211.1L530.5,210.6L532,210.8L534.1,211.9L536.2,209.8L536.9,210L538.9,214.1L539.4,214L540.5,215.5L540.2,216.2L540.1,217.4L537.8,220.3L537.1,222.7L536.7,224.6L536.1,225.5L535.6,228.1L534.1,229.7L533.7,231.6L533.1,233.1L532.9,234.6L531,235.9L529.4,234.4L528.3,234.4L526.7,236.6L525.8,236.7L524.5,240.3L523.8,243L520.9,244.3L519.9,244.1L518.8,245L516.5,244.9L515,242.5L514.1,239.8L512.1,237.3L510,237.4Z","608":"M835.3,213.2L833.4,210.3L835.8,210.5L837,211.8L836.8,215ZM841.7,223.4L842.3,222.3L842.3,220L843.8,219.8L843.7,222.3L845.2,218.7L845.5,222.2L844.7,223.5L844.1,225.8L843.3,227L841.3,224.4ZM853.1,229.2L853.6,231.7L854,233.9L853.4,237.3L852,233.5L850.9,235.4L852,238.2L851.3,239.9L847.9,237.7L846.8,235L847.5,233.2L845.6,231.4L844.8,233L843.5,232.8L841.6,234.9L841.1,233.8L841.9,230.7L843.5,229.6L844.9,228.2L846,229.9L848.1,228.9L848.3,227.2L850.3,227.1L849.7,224.2L852.2,226L852.7,227.9ZM830.7,225.9L827.4,229.4L828.4,226.8L830.2,224.5L831.5,221.9L832.5,218.2L833.4,221.2L831.8,223.3ZM835.3,192.7L835.2,194.2L836.8,196.9L836.7,199.9L835.4,201.2L835.5,204.1L836.7,207.1L838.3,207.5L839.4,207.1L843.3,209.1L843.4,211.2L844.4,212.1L844.4,213.8L842,212L840.6,210L840.1,211.4L838,209.1L835.5,209.7L834,208.9L833.9,207.3L834.6,206.4L833.6,205.5L833.5,206.9L831.7,204.7L831,203.1L830.1,199.6L831.5,200.8L830.5,195L830.6,191.6L832.2,191.7L834.2,192.7L834.8,191.7ZM839.5,218L838.7,216.2L840.6,217.4L842.4,217.3L842.6,218.9L841.5,220.5L839.9,221.6L839.5,219.9ZM848.6,215.2L850.1,219.4L847.8,218.4L848,219.6L849,221.9L847.8,222.8L847.4,220.1L846.5,219.9L845.7,217.7L847.4,218L847.1,216.6L845,213.7L847.6,213.8Z","616":"M552.6,74L552.9,75.2L553.7,76.3L553.9,77.4L552.6,78L553.5,79.3L553.8,80.6L555.3,83.1L555.2,83.9L554.1,84.3L552.4,86.7L553.2,88.1L552.6,87.9L550.3,86.8L548.6,87.2L547.5,86.9L546.2,87.5L544.9,86.5L544,86.9L543.8,86.7L542.6,85.2L540.9,85L540.5,84.1L538.9,83.8L538.7,84.6L537.3,83.9L537.4,83.1L535.7,82.9L534.5,81.9L533.3,80.1L533.4,79.1L532.7,77.6L531.8,76.6L532.3,75.8L531.7,74.4L533.1,73.6L536.5,72.3L539.2,71.3L541.4,71.8L541.7,72.5L543.9,72.5L546.6,72.8L550.7,72.8L551.9,73.1Z","724":"M481.1,126L480.9,124.9L481.9,123.6L482.3,122.7L481.5,121.7L482.2,119.5L481.3,117.6L482.4,117.3L482.5,115.8L483,115.3L483.1,112.7L484.2,111.9L483.6,110.3L482.2,110.1L481.7,110.5L480.3,110.5L479.7,109L478.7,109.4L477.8,110.3L478,108L477.1,106.6L480.6,104.3L483.6,104.9L486.8,104.9L489.4,105.4L491.4,105.2L495.4,105.3L496.3,106.6L500.8,108L501.7,107.3L504.5,108.8L507.3,108.4L507.5,110.2L505.2,112.4L502,113.1L501.8,114.1L500.3,116L499.3,118.6L500.3,120.5L498.8,122L498.3,124.1L496.4,124.8L494.5,127.4L491.3,127.4L488.9,127.4L487.3,128.6L486.3,129.8L485.1,129.5L484.1,128.4L483.5,126.5Z","784":"M638.7,170.7L639.1,170.6L639.4,171.6L641.4,171L643.7,171.1L645.3,171.2L646.8,168.8L648.4,166.5L649.8,164.2L650.5,165.5L651.3,168.3L649.9,168.3L650,170.7L650.6,171.2L649.5,171.9L649.7,173.3L649.1,174.8L649.3,176.3L648.8,177.1L640.4,175.2L638.9,171.6Z","826":"M486.1,74.1L484.4,73.5L483.1,73.5L483.6,72.1L483.2,70.6L485.1,70.5L487.4,72.2ZM493,75.4L493,75.4L493.4,73.7L491.9,72L491.9,72L489.2,71.5L488.7,70.8L489.6,69.5L488.9,68.8L487.6,70.1L487.6,67.5L486.6,66.1L487.5,63.4L489.3,61.3L491,61.5L493.6,61.3L491.2,64.1L493.4,63.7L495.8,63.7L495.2,65.9L493.1,68.3L495.4,68.5L495.6,68.7L497.5,72L499,72.4L500.4,75.6L501.1,76.7L503.8,77.3L503.6,79.1L502.4,79.9L503.3,81.4L501.3,82.9L498.2,82.9L494.3,83.7L493.2,83.1L491.6,84.5L489.5,84.2L487.9,85.3L486.6,84.7L490.1,81.6L492.2,81L492.2,81L488.6,80.5L488,79.4L490.4,78.5L489.2,77L489.7,75.1Z","840":"M213.2,88.2L219.8,88.2L226.7,88.2L229,88.2L236.1,88.2L243,88.2L250,88.2L257,88.2L265,88.2L273,88.2L277.8,88.2L278.5,87L279.3,87L278.7,88.6L279.2,89.1L280.7,89.3L282.8,89.8L284.6,90.7L286.7,90.3L289.2,91.1L289.9,91.1L292.5,90.2L294.1,91.3L295.8,92.5L297.2,93.5L298.6,94.5L298.4,95.3L298.8,95.6L298.5,95.9L299.1,96L299.7,95.7L299.5,96.4L299.7,96.9L300.4,96.9L300.6,97.3L300,97.8L301.8,99.3L301,102.1L300.3,104.9L298.8,106.7L296.9,108.5L295.9,109.6L295.7,110L295.8,110.4L296.4,110.9L297,110.9L300.6,109.2L303.3,108.7L307.2,107.1L307.3,106.8L307.5,105.8L307.4,105.2L308.7,104.7L311.1,104.7L313.3,104.7L314.6,103.4L315,103.2L318.5,100.9L319.8,100.4L323.5,100.3L327.9,100.3L328.5,99.6L329.3,99.4L330.5,98.9L331.9,97.5L333.6,95.1L336.4,92.8L336.8,93.6L338.6,93.1L339.3,94L337.7,98.2L338.6,99.9L338.6,101L335.5,102.5L332.6,103.6L329.7,104.5L327.7,106.4L327,107.1L326.4,108.8L326.6,110.5L327.6,110.6L327.7,109.4L328.2,110.1L327.7,111L325.8,111.6L324.7,111.5L322.7,112.1L321.5,112.2L320,112.4L317.6,113.3L321.5,112.7L322,113.3L318.2,114.3L316.6,114.3L316.8,113.9L315.7,114.8L316.4,115L315.1,117.3L312.3,119.8L312.5,119L312,118.8L311.4,118L311.3,119.8L311.7,120.4L311.4,121.6L310.1,122.9L307.8,125.6L307.6,125.4L309.2,123.2L308.3,121.9L309,119.1L308,120.6L307.8,122.7L306.3,122.2L307.7,123.2L306.7,126.4L307.4,126.6L307.3,127.8L306.5,131.2L304.1,133.7L301.2,134.7L298.9,136.7L297.5,136.9L295.8,138.2L295.1,139.3L291.6,141.6L289.6,143.2L287.8,145.3L286.7,147.7L286.5,150.2L286.5,153.2L287,155.7L286.6,157.2L286.9,161.3L286.2,163.7L285.8,165.1L284.6,167.3L283.7,167.7L282.5,167.3L282.4,165.7L281.6,164.9L280.9,161.8L280.4,159.1L280.3,157.7L281.5,155.4L281.3,153.4L280.1,150.5L279.2,150L276.1,151.6L275.7,151.4L274.9,149.8L273.5,148.9L270.4,149.3L268.2,148.9L266.1,149.2L264.8,149.7L265,150.7L264.6,152.1L264.9,152.8L264.3,153.2L263.4,152.7L262.3,153.4L260.4,153.3L259,151.4L256.6,151.9L254.9,151L253.2,151.3L250.7,152.1L247.5,154.7L244.4,156.2L242.4,157.9L241.3,159.5L240.6,162L240.2,163.7L240.4,164.9L239.3,165L237.6,164.2L235.9,163.1L235.6,161.5L235.8,159L234.9,156.9L234.6,154.9L234.1,152.5L232.7,151.1L230.5,151.1L227.9,153.9L226.1,152.8L225.1,151.8L225.1,149.9L224.9,148L223.9,146.5L223,145.4L222.5,144.2L218,144.2L217.5,145.6L215.4,145.6L210.2,145.6L205.2,143.2L202,141.5L202.6,140.8L199.1,141.2L196,141.5L196.4,139.7L195.6,137.7L194.6,137.3L194.8,136.3L193.4,136.2L192.9,135.3L190.7,134.9L190.3,134.4L190.9,132.5L190.1,129.1L190.5,124.4L191,123.7L190.5,122.6L190.1,119.8L191.3,117.1L191,115.3L193.2,112.6L194.8,109.9L195.6,107.4L198.5,104.4L200.7,101.6L202.9,98.7L205.4,94.6L206.6,92L207,90.6L207.7,90L210.3,91L209.5,93.9L210.7,93.1L212.1,90.6ZM76.3,185.9L76.7,186.2L77,186.7L77.3,188L77.1,188.2L75.8,189L74.7,189.5L74.1,190.1L73.6,189.6L74,188.6L74,187.2L74.3,186.8L75,186.2L75.1,185.5L75.3,185.2L75.5,185.3ZM75.6,183.4L75.2,183.8L74.2,184.1L74,183.3L73.8,183L73.9,182.8L74.2,182.5L75.1,182.8ZM74.1,181.9L73.8,182.3L72.4,182.2L72.8,181.7ZM71.4,179.9L71.5,180.1L71.8,181.3L71.6,181.5L71.4,181.5L70.5,181.4L70.5,180.5L70.5,180.4ZM68.4,178.1L68.2,178.9L67.7,179.3L67,178.6L67.3,178.4L67.8,178ZM149.2,56.8L150.5,57L149.4,58L147.6,58.4L146.8,57.9L146.5,57.2ZM169.3,63L170.6,63.2L170.5,64L167.1,65.2L163.7,66.2L163.4,65.6L164.6,64.3L167.7,63.4ZM230.5,36.1L219.6,43.7L202.6,57L204.6,57.1L205.9,57.8L206.1,58.9L206.1,60.6L209.7,59.1L212.8,58.3L212.5,59.6L212.7,60.7L213.5,61.8L212.8,63.7L211.9,66.7L214,68.4L212.4,70.2L209.9,71.5L209.6,70.4L208.5,69.6L210.3,67.2L209.6,65.1L211.1,62.6L209.2,62.4L205.9,62.3L204.2,61.6L202.8,58.9L201.3,58.5L198.6,57.6L195.4,57.8L192.7,56.6L191.5,55.6L188.5,56.1L186.8,57.8L185.4,58L182.3,58.5L179.4,59.4L176.4,59.9L177.9,58.4L182,56L185.2,55.2L185.4,54.6L181,56L177.4,57.6L172.1,59.4L172.1,60.7L167.7,62.5L164.1,63.6L160.9,64.4L159,65.6L153.9,67L151.7,68.2L147.7,69.4L146.4,69.2L143.5,69.9L140.1,70.9L137.2,71.8L132.4,72.6L132.6,72.1L136.6,70.8L139.8,70L143.9,68.5L147,68.2L149.5,67.1L154.4,65.5L155.6,65L158.3,64L161.2,62L164.2,60.5L160.7,61.3L160.6,60.9L158.3,61.8L158.6,60.5L156.8,61.4L157.6,60.1L154.2,61.2L152.8,61.2L154.7,59.6L156.3,58.7L156.2,57.8L152.7,58.3L152.6,57.1L152,56.5L153.9,55.1L153.8,54.1L156.7,52.7L160.3,51.3L162.8,50.1L164.7,50L165.6,50.3L168.9,49.2L170.1,49.4L172.7,48.7L173.9,47.7L173.4,47.2L176.2,46.4L174.9,46.4L172,46.9L170.6,47.4L169.8,46.9L166.6,47.1L164.5,46.6L165,45.7L164.6,44.4L168.8,43.5L175,42.4L176.6,42.4L174.6,43.5L178.9,43.4L179.4,42.1L178.3,41.3L178.6,40.3L178.2,39.4L176.6,38.7L179.5,37.7L183,37.6L187,36.7L189,35.8L192.5,34.9L194.8,34.7L199.8,33.9L201.3,34L205.8,33L208.1,33.4L208,34.2L209.5,33.9L212.5,34L211.7,34.4L214.1,34.7L216.3,34.5L219.3,35.1L222.7,35.3L223.8,35.5L226.8,35.2L228.8,35.8ZM150.5,48.7L151,49.1L152.7,48.9L153.4,49.5L154.9,49.8L154.4,50L152,50.5L151.3,50L151.1,49.6L149.1,49.7L149,49.5Z","076":"M362.4,384.8L361.2,382.9L362,381.2L360.1,378.9L357.7,377L354.5,374.7L353.6,374.8L350.4,372.1L348.8,372.5L351.4,367.7L353.8,364.3L355.3,362.8L357.2,360.9L356.8,358L355.2,356L353.9,356.7L354.1,354.6L354.2,352.5L353.9,350.5L352.8,349.8L351.9,350.4L350.9,350.3L350.4,348.9L349.6,345.5L349,344.5L347,343.5L346,344.2L343,343.5L342.5,338.6L341.5,336.5L342.2,335.8L341.7,333.7L342.3,332.1L342.4,329.2L341.5,326.9L339.9,325.8L339.4,324.4L339.6,322.2L334.3,322.1L332.8,317.8L333.6,317.7L333.4,316.1L332.8,315L332.4,312.9L330.7,311.8L329,311.8L327.7,310.7L325.8,310L324.6,308.6L321.4,308L318.1,304.6L318.2,302.1L317.7,300.7L317.8,297.9L314.2,298.5L312.8,299.9L310.5,301.4L310,302.6L308.5,302.6L306.5,302.3L304.9,303L303.6,302.5L303.4,296.8L301.2,299L298.8,298.9L297.6,296.9L295.7,296.7L296.2,295.1L294.5,292.8L293.1,289.4L293.8,288.8L293.7,287.2L295.3,286.1L294.9,284L295.6,282.7L295.7,281L298.8,278.4L301.1,277.7L301.5,277.1L304,277.3L305,266.9L305.1,265.3L304.6,263.1L303.4,261.7L303.4,259L305,258.3L305.5,258.7L305.6,257.3L304,256.9L304,254.5L309.5,254.6L310.4,253.3L311.2,254.5L311.7,256.7L312.2,256.3L313.8,258.3L315.9,258L316.5,256.9L318.6,256L319.8,255.4L320.1,253.8L322.1,252.7L322,251.9L319.6,251.6L319.3,249.2L319.4,246.7L318.2,245.7L318.7,245.3L320.8,245.8L323,246.8L323.8,245.9L325.9,245.3L329.1,243.9L330.1,242.4L329.8,241.4L331.3,241.2L331.9,242.1L331.5,243.7L332.4,244.3L333,246L332.2,247.4L331.7,250.6L332.4,252.5L332.5,254.3L334.3,256L335.6,256.2L335.9,255.5L336.8,255.3L338.1,254.7L339,253.6L340.6,254L341.3,253.8L342.8,254.1L343.1,253.4L342.6,252.6L342.9,251.5L344,251.9L345.4,251.5L346.9,252.3L348.2,253.1L349,252L349.7,252.2L350,253.2L351.4,253L352.5,251.5L353.4,248.8L355.1,245.3L356.1,245.1L356.7,247.2L358.2,253.8L359.7,254.4L359.8,257.1L357.6,260.2L358.5,261.3L363.5,261.9L363.6,265.7L365.7,263.2L369.2,264.6L373.9,266.9L375.3,269.1L374.9,271.2L378.1,270L383.6,272L387.8,271.9L392,275L395.7,279.2L397.8,280.3L400.2,280.5L401.3,281.7L402.3,286.5L402.9,288.8L401.9,295L400.6,297.4L396.9,302.6L395.3,306.9L393.4,310.1L392.7,310.2L392.1,312.9L392.8,319.9L392.4,325.6L392.3,328L391.5,329.5L391.5,334.4L389.1,339.2L389,342.9L387,344.5L386.6,346.7L383.6,346.7L379.6,348.1L377.9,349.7L375,350.7L372.2,353.6L370.4,357.1L370.4,359.8L371.1,361.8L371.2,365.4L370.8,367.1L369.3,369L367.4,375.2L365.7,377.9L364.2,379.6L363.7,382.8Z","036":"M865.7,408.3L867,408.5L864.4,412.4L862.7,413.5L860.5,416L860.3,415.2L856.9,417.4L856.5,417.2L855.1,417.1L855.7,414.4L856.9,412.3L857.5,409.5L858.6,408L860.1,408.3L861.7,409.4L863.3,408.9ZM827.9,379.5L824.3,381.2L821.7,382L820.3,383.8L818.7,385.2L816.5,385.3L814.7,385.6L812.7,385L810.7,385.4L808.9,385.5L806.5,387.3L805.8,387.2L804.1,388.1L802.3,389.2L800.5,389.1L798.8,389.1L797.1,386.9L796,386.3L796.9,384.3L798.4,383.8L799.2,383.1L799.7,381.8L801,379.4L801.6,377.4L801.6,373.8L802,371.9L802.9,369.9L802.7,367.6L803,366.5L802.4,365.1L803,362.3L802.5,359.5L802.6,358L803.3,359.5L803.5,356.2L804.5,357.3L804.8,358.7L805.4,356.8L804.9,354L805.1,352.9L804.8,351.8L805.7,349.7L806.5,348.8L807.4,347L807.7,344.9L809.6,342.3L809,345L810.9,342.5L813.4,341.3L815.1,339.8L817.6,338.4L818.9,338.2L819.5,338.6L822,337.2L823.8,336.8L824.4,336L825.2,335.7L826.7,335.8L829.9,334.7L831.8,333.1L833,331.1L835,329.3L835.5,327.8L836.1,325.8L838.7,322.6L839.1,325.8L840.5,325.1L839.9,323.3L841.2,321.5L842.2,322.3L843.1,319.5L845,317.7L846,316.2L847.5,315.6L847.8,314.6L848.9,315L849.1,314.1L850.4,313.5L851.9,313L853.6,314.7L854.7,316.9L856.4,317L858.1,317.3L857.9,315.3L859.8,312.3L861.3,311.3L861,310.4L862.6,308.2L864.5,306.9L865.9,307.4L868.3,306.7L868.6,304.8L866.8,303.5L868.3,303L870,303.9L871.2,305.4L873.4,306.4L874.3,306L875.8,307.2L877.6,306.1L878.6,306.4L879.4,305.7L880.3,307.6L879.2,309.6L877.9,311.1L876.9,311.2L876.9,312.7L875.7,314.5L874.3,316.4L874.3,317.4L876,319.5L877.9,320.7L879,321.9L880.4,324.1L881.2,324.1L882.4,325.1L882.5,326.2L884.8,327.5L886.9,326.2L888,324.2L889,322.6L889.8,320.5L891.4,317.6L891.4,315.8L891.8,314.7L892,312.6L892.9,309.8L893.6,309L893.4,307.8L894.5,305.8L895.4,303.7L895.6,302.7L896.9,301.3L897.4,303.1L897.1,305.4L897.8,305.9L897.6,307.5L898.2,309.4L898,311.5L897.6,312.8L897.9,315.7L900,314.3L900.6,315.9L901.6,317.4L900.9,319L900.7,322.2L900.6,324L901.2,324.5L901.1,327.6L900.2,329.6L900.4,332L902.7,334L904.1,335.7L905.4,337.3L904.8,338.2L905.5,340.5L905.2,344.4L906.5,343.6L907,345.2L907.9,344.6L906.9,348.5L907.9,350.7L908.6,352.1L909.5,355L909,357.8L908.1,359.9L906.9,362.1L906.7,365.1L905,368.2L903.7,369.8L901.4,373L900.4,375L898.5,377.5L895.6,380.6L892.7,382.3L890.2,385L888.3,386.7L885.8,389.6L883.8,391.3L881.5,393.8L879.7,396.1L879.2,397.2L876.9,398.3L874,398.4L870.8,399.8L868.8,401.1L866.3,402.5L865.2,401L864.1,400.5L865.6,398.7L863.8,399.4L860.1,401.8L858.5,400.9L857.4,400.3L856.1,400.1L854.3,399.1L853.9,397.1L855,394.6L855.4,392.9L854.9,391.5L852.7,391.1L854.5,389.4L855.3,386.9L852.7,389.3L850.1,389.9L852.5,388L854,386L855.9,384.4L857,381.8L853.3,384.7L851.1,385.9L848.6,388.6L847.4,387.2L848.5,385.4L848.1,382.9L847.4,381.6L848.3,380.8L846,378.7L844.2,378.7L842.5,377L837.7,377.3L833.8,378.5L830.3,379.7Z"}};
 const A1=1.340264,A2=-0.081106,A3=0.000893,A4=0.003796,M=Math.sqrt(3)/2;
 function pt(lon,lat){const l=lon*Math.PI/180,p=lat*Math.PI/180;const t=Math.asin(M*Math.sin(p)),t2=t*t,t6=t2*t2*t2;
  const x=l*Math.cos(t)/(M*(A1+3*A2*t2+t6*(7*A3+9*A4*t2)));const y=t*(A1+A2*t2+t6*(A3+A4*t2));return [D.tx+D.scale*x,D.ty-D.scale*y]}
 const C={lagos:[3.4,6.5,'Lagos','566'],toronto:[-79.4,43.7,'Toronto','124'],montreal:[-73.6,45.5,'Montreal','124'],calgary:[-114.1,51,'Calgary','124'],
  busan:[129,35.2,'Busan','410'],sydney:[151.2,-33.9,'Sydney','036'],guad:[-103.3,20.7,'Guadalajara','484'],madrid:[-3.7,40.4,'Madrid','724'],
  beirut:[35.5,33.9,'Beirut','422'],ahmd:[72.6,23,'Ahmedabad','356'],london:[-0.1,51.5,'London','826'],manila:[121,14.6,'Manila','608'],
  dubai:[55.3,25.2,'Dubai','784'],nairobi:[36.8,-1.3,'Nairobi','404'],berlin:[13.4,52.5,'Berlin','276'],sao:[-46.6,-23.5,'São Paulo','076'],
  warsaw:[21,52.2,'Warsaw','616'],chicago:[-87.6,41.9,'Chicago','840'],houston:[-95.4,29.8,'Houston','840'],auck:[174.8,-36.8,'Auckland','554'],
  singapore:[103.8,1.35,'Singapore','702'],gujarat:[71.2,22.3,'Gujarat','356']};
 const P=k=>pt(C[k][0],C[k][1]);
 const TH={dark:{land:'#22352C',edge:'#2E463A',border:'#0A0C0B',grid:'rgba(255,255,255,.05)',txt:'#fff',soft:'rgba(255,255,255,.14)'},
          light:{land:'#E2EEDC',edge:'#D0E3C9',border:'#FFFFFF',grid:'rgba(20,16,24,.05)',txt:'#141018',soft:'rgba(20,16,24,.08)'}};
 let uid=0;
 function arc(a,b){const[x1,y1]=P(a),[x2,y2]=P(b),d=Math.hypot(x2-x1,y2-y1);return `M${x1.toFixed(1)} ${y1.toFixed(1)} Q${((x1+x2)/2).toFixed(1)} ${((y1+y2)/2-d*.3).toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}`}
 function layer(g,t,fs,id,anim,dur,vb,part){const hl=g.hl||{};
  const cs=Object.entries(hl).map(([cid,col])=>D.c[cid]?`<path d="${D.c[cid]}" fill="${col}" opacity=".9"/>`:'').join('');
  const as=(g.arcs||[]).map(([a,b,col],i)=>{const d=arc(a,b);col=col||'#E2136E';return `<path d="${d}" fill="none" stroke="${col}" stroke-width="${fs*.55}" opacity=".35" filter="url(#${id}b)" pathLength="1" stroke-dasharray="1" class="pmA" style="${dur?`animation:pmSeqDraw ${dur}s ${anim}s infinite both`:''}"/><path d="${d}" fill="none" stroke="${col}" stroke-width="${fs*.22}" stroke-linecap="round" pathLength="1" stroke-dasharray="1" class="pmA" style="${dur?`animation:pmSeqDraw ${dur}s ${anim}s infinite both`:''}"/><circle r="${fs*.32}" fill="#fff"><animateMotion dur="${2.8+i*.3}s" repeatCount="indefinite" path="${d}"/></circle>`}).join('');
  const ps=(g.pins||[]).map(([k,lab,col,dx,dy],i)=>{const[x,y]=P(k);col=col||'#E2136E';const r=fs*.42;const w=lab?lab.length*fs*.58+fs*1.4:0;const tx=Math.min(Math.max(x+(dx||0)*fs,vb[0]+w/2+fs*.3),vb[0]+vb[2]-w/2-fs*.3),ty=Math.min(Math.max(y+(dy===undefined?-1.6:dy)*fs,vb[1]+fs*1.1),vb[1]+vb[3]-fs*1.1);
   const dark=col==='#FFC93C'||col==='#FFFFFF';
   return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}" fill="${col}" stroke="${t.border}" stroke-width="${fs*.12}"/><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}" fill="none" stroke="${col}" stroke-width="${fs*.1}" class="pmP" style="transform-origin:${x.toFixed(1)}px ${y.toFixed(1)}px;animation-delay:${i*.4}s"/>${lab?`<g><rect x="${(tx-w/2).toFixed(1)}" y="${(ty-fs*.8).toFixed(1)}" width="${w.toFixed(1)}" height="${(fs*1.5).toFixed(1)}" rx="${(fs*.75).toFixed(1)}" fill="${col}"/><text x="${tx.toFixed(1)}" y="${(ty+fs*.33).toFixed(1)}" text-anchor="middle" fill="${dark?'#141018':'#fff'}" style="font:800 ${fs}px var(--b,var(--f-body,system-ui))">${lab}</text></g>`:''}`}).join('');
  return part==='under'?cs:part==='over'?as+ps:cs+as+ps}
 function draw(o){const t=TH[o.theme||'dark'];const id='pm'+(uid++);const vb=o.vb||[0,40,1000,400];const fs=(o.fsr||.036)*vb[2];
  let grid='';if(o.grid!==false){for(let lat=-60;lat<=80;lat+=20){let d='';for(let lon=-180;lon<=180;lon+=10){const[x,y]=pt(lon,lat);d+=(lon===-180?'M':'L')+x.toFixed(0)+' '+y.toFixed(0)}grid+=`<path d="${d}" fill="none" stroke="${t.grid}" stroke-width="1"/>`}
   for(let lon=-180;lon<=180;lon+=30){let d='';for(let lat=-60;lat<=84;lat+=6){const[x,y]=pt(lon,lat);d+=(lat===-60?'M':'L')+x.toFixed(0)+' '+y.toFixed(0)}grid+=`<path d="${d}" fill="none" stroke="${t.grid}" stroke-width="1"/>`}}
  const base=`<path d="${D.land}" fill="${t.land}" stroke="${t.edge}" stroke-width="${.0008*vb[2]}"/>`;
  const sq=(part)=>o.seq?o.seq.map((g,i)=>`<g class="pmS" style="animation-delay:${(i-o.seq.length)*3}s;animation-duration:${o.seq.length*3}s">${layer(g,t,fs,id,(i-o.seq.length)*3,o.seq.length*3,vb,part)}</g>`).join(''):'';const seqU=sq('under'),seq=sq('over');
  return `<svg viewBox="${vb.join(' ')}" class="pm" style="width:100%;height:100%;display:block" preserveAspectRatio="xMidYMid meet" role="img" aria-label="${o.label||'World map'}"><defs><filter id="${id}b" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="${fs*.35}"/></filter></defs>${grid}${base}${layer(o,t,fs,id,0,0,vb,'under')}${seqU}<path d="${D.borders}" fill="none" stroke="${t.border}" stroke-width="${(o.bw||.0009)*vb[2]}"/>${layer(o,t,fs,id,0,0,vb,'over')}${seq}</svg>`}
 /* bounding box (in map units) around a list of places, with padding, at a given aspect ratio */
 function fit(keys,aspect,pad){const ps=keys.map(P);let x0=Math.min(...ps.map(p=>p[0])),x1=Math.max(...ps.map(p=>p[0])),y0=Math.min(...ps.map(p=>p[1])),y1=Math.max(...ps.map(p=>p[1]));
  pad=pad||60;x0-=pad;x1+=pad;y0-=pad;y1+=pad;let w=x1-x0,h=y1-y0;if(w/h<aspect){const nw=h*aspect;x0-=(nw-w)/2;w=nw}else{const nh=w/aspect;y0-=(nh-h)/2;h=nh}return [x0,y0,w,h].map(v=>+v.toFixed(1))}
 const CSS='.pmA{animation:pmDraw 1.6s ease both}.pmP{animation:pmPing 2.2s ease-out infinite}.pmS{opacity:0;animation-name:pmShow;animation-iteration-count:infinite;animation-timing-function:ease}.pmS .pmA{animation:pmDraw 1.6s ease both}@keyframes pmSeqDraw{0%{stroke-dashoffset:1}12%,100%{stroke-dashoffset:0}}@keyframes pmDraw{from{stroke-dashoffset:1}to{stroke-dashoffset:0}}@keyframes pmPing{0%{transform:scale(1);opacity:.9}100%{transform:scale(3.4);opacity:0}}@keyframes pmShow{0%{opacity:0}5%,30%{opacity:1}34%,100%{opacity:0}}@media (prefers-reduced-motion:reduce){.pmA,.pmP{animation:none}.pmS{animation:none}.pmS:first-of-type{opacity:1}}';
 return {draw,fit,pt,P,C,CSS};
})();

/* ---------- C3 design (his ok 6 Nov 2026 ~18:0x on mock handoff/mocks/style-c-v3, artifact Q3Mnvq886di4FtScZrHAWC) ----------
   LIVE FOR EVERYONE (his ok 6 Nov 2026, 'C3 live for everyone'); before that admin-only preview.
   Local tests can switch it off with localStorage nm.c3test=0. */
const C3_ADMIN='swapnilbhagatt@gmail.com';
function C3(){try{const loc=/127\.0\.0\.1/.test(CFG.url||'');if(loc&&localStorage.getItem('nm.c3test')==='0')return false;
  return true}catch(e){return false}}

const C3CITY={lagos:[3.4,6.5,'Lagos','🇳🇬'],toronto:[-79.4,43.7,'Toronto','🇨🇦'],busan:[129,35.2,'Busan','🇰🇷'],sydney:[151.2,-33.9,'Sydney','🇦🇺'],
 guad:[-103.3,20.7,'Guadalajara','🇲🇽'],madrid:[-3.7,40.4,'Madrid','🇪🇸'],beirut:[35.5,33.9,'Beirut','🇱🇧'],montreal:[-73.6,45.5,'Montreal','🇨🇦'],
 ahmd:[72.6,23,'Ahmedabad','🇮🇳'],london:[-0.1,51.5,'London','🇬🇧'],manila:[121,14.6,'Manila','🇵🇭'],dubai:[55.3,25.2,'Dubai','🇦🇪'],
 nairobi:[36.8,-1.3,'Nairobi','🇰🇪'],berlin:[13.4,52.5,'Berlin','🇩🇪'],sao:[-46.6,-23.5,'São Paulo','🇧🇷'],warsaw:[21,52.2,'Warsaw','🇵🇱'],chicago:[-87.6,41.9,'Chicago','🇺🇸'],auck:[174.8,-36.8,'Auckland','🇳🇿']};
function c3km(a,b){const R=6371,r=Math.PI/180,[l1,p1]=[C3CITY[a][0]*r,C3CITY[a][1]*r],[l2,p2]=[C3CITY[b][0]*r,C3CITY[b][1]*r];
  return Math.round(2*R*Math.asin(Math.sqrt(Math.sin((p2-p1)/2)**2+Math.cos(p1)*Math.cos(p2)*Math.sin((l2-l1)/2)**2))/10)*10}
const C3SEQ=[['lagos','toronto'],['busan','sydney'],['guad','madrid']];
function c3map(){return PM.draw({vb:[0,30,1000,440],fsr:.03,label:'World map: where members grew up and where they live now',seq:[
  {hl:{'566':'#FFC93C','124':'#0E9F6E'},arcs:[['lagos','toronto']],pins:[['lagos','🇳🇬 Lagos','#FFC93C',0,1.8],['toronto','🇨🇦 Toronto','#0E9F6E']]},
  {hl:{'410':'#FFC93C','036':'#0E9F6E'},arcs:[['busan','sydney']],pins:[['busan','🇰🇷 Busan','#FFC93C'],['sydney','🇦🇺 Sydney','#0E9F6E',0,1.8]]},
  {hl:{'484':'#FFC93C','724':'#0E9F6E'},arcs:[['guad','madrid']],pins:[['guad','🇲🇽 Guadalajara','#FFC93C',0,1.8],['madrid','🇪🇸 Madrid','#0E9F6E']]}]})}
const c3cyc=(arr,cls)=>`<span class="c3cyc ${cls||''}"><span>${arr.concat(arr[0]).map(t=>`<b>${esc(t)}</b>`).join('')}</span></span>`;
function renderWelcomeC3(){
  return `<div class="scroll c3w"><div class="c3topl"><p class="c3kick">NeuMarry · verified matrimony</p><button class="c3lang notr" data-a="lang" aria-label="Language">${ic('globe')}<span>${esc((LANGS_ALL.find(x=>x[0]===RM_I18N.lang)||LANGS_ALL[0])[1])}</span></button></div>
   <div class="c3map">${c3map()}<span class="c3dist">✈ ${c3cyc(C3SEQ.map(([a,b])=>c3km(a,b).toLocaleString('en-US')+' km from home'))}</span></div>
   <div class="c3w-body pad">
    <h1 class="c3h1">Born in ${c3cyc(['Lagos.','Busan.','Guadalajara.'],'y')}Living in ${c3cyc(['Toronto.','Sydney.','Madrid.'],'p')}Ready to marry.</h1>
    <p class="c3lede">Verified matrimony for marrying someone of your roots, in the country you live in now.</p>
    ${v2near()}
    <div class="c3chips">${['💍 Marriage only','🪪 Every member checked','👪 Family can join'].map(t=>`<span>${t}</span>`).join('')}</div>
    <button class="btn block c3cta" data-a="start">Draw your roots line →</button>
    <button class="btn block c3ghost" data-a="login">I already have an account</button>
    <p class="c3note">Lines on the map are examples. By continuing you agree to our <button class="link" data-a="legal" data-k="terms">Terms</button> and <button class="link" data-a="legal" data-k="privacy">Privacy Policy</button>. 18+ only. <span class="c3credit">Map © OpenFreeMap · © OpenStreetMap · Natural Earth</span></p>
   </div></div>`}

/* introduction card: marriage facts first, photo smaller, 3 scores, why we introduced you */
function c3facts(p){const me=S.me||{},ma=me.ans||[],pa=p.ans||[];const rows=[[8,'💍'],[0,'🏡'],[2,'👪'],[3,'👶']];
  return rows.filter(([i])=>pa[i]!==undefined&&pa[i]!==null&&QS[i].o[pa[i]]).slice(0,4).map(([i,e])=>{const same=ma[i]===pa[i];
    return `<div class="c3fact"><b>${e} ${esc(QS[i].o[pa[i]])}</b><small class="${same?'ok':''}">${same?'Same as you':esc(i===8?'When to marry':QS[i].k)}</small></div>`}).join('')}
function c3card(p){const c=compat(p),st=S.interests[p.id],lk=locked(p)&&!(st==='received'&&p.gold),r=v2rings(p);
  const why=whyChips(p).slice(0,3).map(w=>w.t);const ok=checksDone(p)===5;
  return `<article class="mcard nm-card c3card${lk?' lockd':''}" id="card-${p.id}">
   <button class="c3ph" data-a="open" data-id="${p.id}" aria-label="${lk?`See this ${c.total}% match with Gold`:`Open ${esc(shown(p))}'s profile`}">${avatar(p,'cover')}
    <span class="c3tags"><span class="c3route">${flag(p.oc)} ${esc(p.os||p.oc)} → ${esc(p.cityName)}</span>${ok?`<span class="c3ok">${ic('check')}Verified</span>`:''}${st==='received'?`<span class="c3ok rose">${ic('heart')}Sent you interest</span>`:''}</span></button>
   <div class="c3body">
    <div class="c3nm"><b>${esc(shown(p))}, ${p.age}</b><small>${lk?`${ic('lock')} Name, photos and profile with Gold`:`${esc(p.job||'')}${p.job?' · ':''}${esc(distLabel(p))}`}</small></div>
    <div class="c3facts">${c3facts(p)}</div>
    ${r?`<div class="c3sc"><div><b class="r">${r.roots}%</b><small>Roots</small></div><div><b class="l">${r.life}%</b><small>Life plan</small></div><div><b class="n">${r.nature}%</b><small>Nature</small></div></div>`:''}
    ${why.length?`<div class="c3why"><b>Why we introduced you</b><span>${why.map(esc).join(' · ')}</span></div>`:''}
    <div class="mact">${lk?`<button class="btn gold" data-a="upgrade" data-r="profile" data-id="${p.id}">${ic('crown')}See ${p.g==='F'?'her':'his'} profile</button>`:actionBar(p)}</div>
   </div></article>`}

/* interest accepted: calm rings, no confetti, the path shown, no timer */
const C3STEPS=['Introduced','Talking','Video call','Families','Meet'];
function c3pathMini(now){return `<div class="c3pm">${C3STEPS.map((t,i)=>`<div class="${i<now?'d':i===now?'n':''}"><i>${i<now?'✓':i+1}</i><span>${t}</span></div>`).join('')}</div>`}
function renderCelebrateC3(){const p=byId(celebrate.id);if(!p)return '';
  return `<div class="celebrate c3cel" role="dialog" aria-label="Interest accepted">
   <div class="c3rings"><svg viewBox="0 0 250 150" aria-hidden="true"><circle cx="92" cy="75" r="68"/><circle cx="158" cy="75" r="68"/></svg>${avatar(null,'cel',true)}${avatar(p,'cel')}</div>
   <p class="c3kick g">✓ Interest accepted</p>
   <h2>You and ${esc(p.first||'your match')}<br>both said yes.</h2>
   <p>Take your time: there is no timer here. Photos are unlocked${canChat(p.id)?' and chat is open':''}.</p>
   ${c3pathMini(1)}
   <div class="btns"><button class="btn c3cta" data-a="celChat" data-id="${p.id}">${ic('chat')}Start talking</button><button class="btn c3ghost dk" data-a="celClose">Later</button></div></div>`}

/* marriage path for one match (from chat): every step comes from real data, nothing invented */
function c3path(id){const p=byId(id);if(!p)return '';famLoad();const m=S.chats[id]||[];
  const talk=m.some(x=>x.f==='me')&&m.some(x=>x.f!=='me'&&x.f!=='sys'),fam=famHas(id);
  const st=[['done','Introduced','You were introduced on NeuMarry',''],['done','Interest accepted','You both said yes',''],
   [talk?'done':'now','Talking','Safe chat, numbers stay private',talk?'':'Open chat'],
   [talk?'now':'','First video call','At a time good for you both','Plan a call'],
   [fam?'done':'','Families talk',fam?'Shared with your family':'Share with family, they reply on your private link',fam?'':'Share'],
   ['','Meet in person',(NO_EVENTS?'Meet in a public place':'Meet in a public place, or at a Family Mixer'),''],['','Decide together','Only when you both feel ready','']];
  const act={'Open chat':`data-a="closeSheet"`,'Plan a call':`data-a="callPlan" data-id="${id}"`,'Share':`data-a="v2fam" data-id="${id}"`};
  return sheetShell('Your path with '+(p.first||'your match'),`<div class="c3path">${st.map(([c,t,s,a],i)=>`<div class="c3step ${c}"><i>${c==='done'?'✓':i+1}</i><div><b>${t}</b><small>${esc(s)}</small></div>${a?`<button class="v2pill" ${act[a]}>${a}</button>`:''}</div>`).join('')}
   <p class="c3calm"><b>No pressure.</b> Move to a step only when you both choose it. Either of you can pause or end kindly at any time.</p></div>`)}

(function(){
  const _rw=renderWelcome;renderWelcome=function(){return C3()?renderWelcomeC3():_rw()};
  const _card=card;card=function(p){return C3()?c3card(p):_card(p)};
  const _cel=renderCelebrate;renderCelebrate=function(){return C3()?renderCelebrateC3():_cel()};
  const _rm=renderMatches;renderMatches=function(){const h=_rm();return C3()?h.replace('<h2>Today’s introductions</h2>','<h2><span class="c3kick r">Today</span>Introduced to you</h2>'):h};
  const _cv=renderChatView;renderChatView=function(id){const h=_cv(id);if(!C3())return h;
    return h.replace(`<button class="iconbtn" data-a="more" data-id="${id}" data-chat="1"`,`<button class="v2pill c3pbtn" data-a="c3path" data-id="${id}">Your path</button><button class="iconbtn" data-a="more" data-id="${id}" data-chat="1"`)};
  const _rs=renderSheet;renderSheet=function(){return sheet&&sheet.type==='c3path'?c3path(sheet.id):_rs()};
  Object.assign(A,{c3path(el){sheet={type:'c3path',id:el.dataset.id};render()}});
  const _r=render;render=function(){const on=C3();document.documentElement.classList.toggle('c3',on);_r()};
})();

/* ---------- Admin panel v3 (his ok 6 Nov on mock handoff/mocks/admin-panel) ----------
   For the admin email only (C3()). Home = command center from admin_overview(); Robots = robot diary (bot_runs);
   Help = help inbox (help_requests) + members who stopped (admin_signups) with a ready email; Checks = the existing review queue.
   Every number is real; a box with no data is hidden. */
const A3={tab:'home',ov:null,help:null,bot:null,runs:null,open:null,busy:false,list:null,mem:null};
const A3HELP=['A bank statement, a utility bill or a lease from the last 3 months, with your name and address, works. You can hide account numbers.',
 'Stand facing a window, hold the phone at eye level and follow the 3 prompts. It takes 30 seconds.',
 'Thank you for writing. We fixed it on our side; please try again and tell us if it works.'];
const A3MAIL={'Signed up, did not start the form':['Your NeuMarry profile is waiting','start your profile: it takes about 6 minutes, almost all taps.'],
 default:['Can we help you finish?','finish your profile. If anything is unclear, just reply to this email and our team will help.']};
async function a3load(){if(A3.busy)return;A3.busy=true;try{const [ov,hl]=await Promise.all([API.rpc('admin_overview').catch(()=>null),API.rpc('admin_help_list').catch(()=>[])]);A3.ov=ov;A3.help=hl||[]}finally{A3.busy=false;render()}}
function a3kpi(n,l,s,c,go){return n===null||n===undefined?'':`<button class="a3k" style="--c:${c}" data-a="a3go" data-k="${go||''}" aria-label="${esc(l)}: ${esc(String(n))}. Open details"><b>${esc(String(n))}</b><span>${esc(l)}</span>${s?`<small>${esc(s)}</small>`:''}<em class="a3more">Details ›</em></button>`}
function a3bars(vals){const m=Math.max(1,...vals);return `<div class="a3bars" aria-label="Sign-ups per day, last 30 days">${vals.map((v,i)=>`<button class="a3bc" data-a="a3go" data-k="day:${vals.length-1-i}" aria-label="${v} sign-ups, ${vals.length-1-i} days ago"><i style="height:${Math.max(3,Math.round(v/m*100))}%;${i===vals.length-1?'background:#FFC93C':''}"></i></button>`).join('')}</div><p class="a3m a3hint">Tap a day to see who joined</p>`}
function a3home(){if(A3.list)return a3list();const o=A3.ov;if(!o)return `<div class="a3c">${spinner('Loading')}</div>`;const f=o.funnel_7d||{};const bots=o.bots||[];const failed=bots.filter(b=>b.status==='failed'&&b.finished_at&&Date.now()-new Date(b.finished_at)<864e5);/* only fresh failures need him (9 Nov fix: old one-time na-db-create stayed forever) */
  const d=o.signups_today-o.signups_yesterday;const vals=o.signups_30d||[];const tot=vals.reduce((a,b)=>a+b,0);const src=Object.entries(o.sources_30d||{}).sort((a,b)=>b[1]-a[1]);
  const need=[o.checks_waiting>0?['shield',`${o.checks_waiting} waiting for checks`,o.oldest_wait_hours!=null?`Oldest ${o.oldest_wait_hours} h · promise 24 h`:'','checks']:null,
    o.reports_open>0?['flag',`${o.reports_open} open report${o.reports_open>1?'s':''}`,'Answer within 24 h','checks']:null,
    o.help_open>0?['chat',`${o.help_open} member${o.help_open>1?'s':''} asked for help`,'Help inbox','help']:null,
    ...failed.map(b=>['alert',`${b.bot} failed`,b.summary||'','robots'])].filter(Boolean);
  return `<div class="a3g">${a3kpi(o.signups_today,'Sign-ups today',d?`${d>0?'▲':'▼'} ${Math.abs(d)} vs yesterday`:'same as yesterday','#3BBF8A','today')}${a3kpi(o.live,'Live members','fully verified','#12A36B','live')}${a3kpi(o.checks_waiting,'Waiting for checks',o.oldest_wait_hours!=null?`oldest ${o.oldest_wait_hours} h`:'','#FFC93C','tab:checks')}${a3kpi(o.reports_open,'Open reports','','#FF6B6B','tab:checks')}</div>
   ${need.length?`<div class="a3c"><div class="a3h"><b>Needs you now</b><span>${need.length}</span></div>${need.map(([i,t,s,go])=>`<button class="a3n" data-a="a3tab" data-k="${go}">${ic(i)}<span><b>${esc(t)}</b><small>${esc(s)}</small></span><em>Open</em></button>`).join('')}</div>`:`<div class="a3c a3ok">${ic('check')} Nothing needs you right now.</div>`}
   ${f.accounts?`<div class="a3c"><div class="a3h"><b>Sign-up journey</b><span>last 7 days · tap to see</span></div>${[['Made an account',f.accounts,'f0'],['Started the profile',f.profiles,'f1'],['Sent documents',f.documents,'f2'],['Live',f.live,'f3']].map(([t,n,k])=>`<div class="a3f a3fb" role="button" tabindex="0" data-a="a3go" data-k="${k}"><span>${t}</span><div><i style="width:${Math.max(2,Math.round(n/f.accounts*100))}%"></i></div><b>${n} ›</b></div>`).join('')}</div>`:''}
   ${tot?`<div class="a3c"><div class="a3h"><b>Sign-ups per day</b><span>${tot} in 30 days</span></div>${a3bars(vals)}</div>`:''}
   ${src.length?`<div class="a3c"><div class="a3h"><b>Where they came from</b><span>30 days</span></div>${src.slice(0,6).map(([k,n])=>`<div class="a3f"><span>${esc(k)}</span><div><i style="width:${Math.round(n/src[0][1]*100)}%;background:#9D7CFF"></i></div><b>${n}</b></div>`).join('')}</div>`:''}`}
function a3ago(ts){if(!ts)return '';const m=Math.round((Date.now()-new Date(ts).getTime())/60000);return m<60?`${m} min ago`:m<1440?`${Math.round(m/60)} h ago`:`${Math.round(m/1440)} d ago`}
function a3robots(){const o=A3.ov;if(!o)return `<div class="a3c">${spinner('Loading')}</div>`;const bots=o.bots||[];
  if(A3.bot){const runs=A3.runs;return `<button class="a3back" data-a="a3bot" data-k="">${ic('back')} All robots</button><div class="a3c"><div class="a3h"><b>${esc(A3.bot)}</b><span>last runs</span></div>
   ${runs===null?spinner('Loading'):runs.length?`<div class="a3tl">${runs.slice(0,14).reverse().map(r=>`<i class="${r.status}" title="${esc(r.status)}"></i>`).join('')}</div>${runs.map(r=>`<div class="a3r"><span class="a3d ${r.status}"></span><span><b>${esc(r.job||'')} · ${r.status==='ok'?'OK':r.status==='failed'?'Failed':'Running'}</b><small>${esc(r.summary||'')}</small><small>${esc(a3ago(r.finished_at))}</small></span>${r.run_url?`<a class="a3lnk" href="${esc(r.run_url)}" target="_blank" rel="noopener">Log</a>`:''}</div>`).join('')}`:'<p class="a3m">No runs yet.</p>'}</div>`}
  if(!bots.length)return `<div class="a3c"><p class="a3m">Each robot writes here after its next run (social posts, reports, Play, event mails, Search Console, photo check). Nothing has run since this panel started.</p></div>`;
  return bots.map(b=>`<button class="a3c a3bt ${b.status}" data-a="a3bot" data-k="${esc(b.bot)}"><span class="a3h"><span class="a3d ${b.status}"></span><b>${esc(b.bot)}</b><span>${b.status==='ok'?'OK':b.status==='failed'?'Failed':'Running'}</span></span><small>${esc(b.summary||'')}</small><small>${esc(a3ago(b.finished_at))}</small></button>`).join('')}
function a3help(){const L=A3.help;const su=(S.admin&&S.admin.signups)||[];
  const stuck=su.filter(x=>x.step&&!/live/i.test(x.step)&&x.email&&(Date.now()-new Date(x.created_at).getTime())>864e5);
  const groups={};stuck.forEach(x=>{(groups[x.step]=groups[x.step]||[]).push(x)});
  const open=A3.open&&(L||[]).find(x=>x.id===A3.open);
  return `${open?`<div class="a3c"><div class="a3h"><b>${esc(open.name||'Member')}</b><span>${esc(open.step||'')}</span></div><div class="a3q">${esc(open.message)}</div>${open.answer?`<div class="a3a">${esc(open.answer)}</div>`:''}
    <div class="a3chips">${A3HELP.map((t,i)=>`<button data-a="a3ready" data-i="${i}">${['Documents','Selfie tips','Fixed it'][i]}</button>`).join('')}</div>
    <textarea id="a3ans" rows="3" maxlength="1000" aria-label="Your answer" placeholder="Write your answer">${esc(open.answer||'')}</textarea>
    <div class="a3btns"><button class="btn primary sm" data-a="a3send" data-solved="0">Send</button><button class="btn ghost sm" data-a="a3send" data-solved="1">Send and mark solved</button></div></div>`:''}
   <div class="a3c"><div class="a3h"><b>Help inbox</b><span>${(L||[]).filter(x=>x.status==='open').length} open</span></div>
    ${L===null?spinner('Loading'):(L.length?L.slice(0,30).map(x=>`<button class="a3r a3hl ${x.status}" data-a="a3open" data-k="${x.id}"><span class="a3d ${x.status==='open'?'run':'ok'}"></span><span><b>${esc(x.name||'Member')} · ${esc(x.step||'')}</b><small>${esc(x.message)}</small><small>${esc(a3ago(x.created_at))}</small></span></button>`).join(''):'<p class="a3m">No questions yet. Members ask from the "Need help?" button.</p>')}</div>
   <div class="a3c"><div class="a3h"><b>Members who stopped</b><span>1+ day, last 30 days</span></div>
    ${Object.keys(groups).length?Object.entries(groups).map(([st,arr])=>`<details class="a3grp"><summary><b>${esc(st)}</b><em>${arr.length}</em></summary>${arr.slice(0,25).map(x=>{const t=A3MAIL[st]||A3MAIL.default;const nm=(x.full_name||x.google_name||'').split(' ')[0]||'there';
      const body=`Hi ${nm},\n\nThank you for joining NeuMarry. We noticed you have not had a chance to ${t[1]}\n\nOpen the app: https://neumarry.com/app\n\nSwapnil, NeuMarry team\nsupport@neumarry.com`;
      return `<div class="a3r"><span><b>${esc(x.full_name||x.google_name||x.email)}</b><small>${esc(x.city||'')}${x.city?' · ':''}${esc(a3ago(x.created_at))}${x.reminded_at?' · auto reminder sent':''}</small></span><a class="a3lnk" href="mailto:${esc(x.email)}?subject=${encodeURIComponent(t[0])}&body=${encodeURIComponent(body)}">Email</a></div>`}).join('')}</details>`).join(''):'<p class="a3m">Nobody is stuck for more than a day.</p>'}
    <p class="a3m">Automatic emails already go after 1 and 3 days. "Email" opens your mail app with a ready message; you press send. Keep it to 2 messages a week per person.</p></div>`}
function a3tabsHtml(){const o=A3.ov;const t=A3.tab;const chk=o?o.checks_waiting+o.reports_open:0;
  return `<div class="a3tabs pad" role="tablist">${[['home','Home'],['members','Members'],['activity','Activity'],['money','Money'],['events','Events'],['robots','Robots'],['help','Help'],['checks','Checks']].map(([k,l])=>`<button role="tab" aria-selected="${t===k}" class="${t===k?'on':''}" data-a="a3tab" data-k="${k}">${l}${k==='checks'&&chk?` <em>${chk}</em>`:''}${k==='help'&&o&&o.help_open?` <em>${o.help_open}</em>`:''}${k==='robots'&&o&&(o.bots||[]).some(b=>b.status==='failed')?' <em class="r">!</em>':''}</button>`).join('')}</div>`}
function renderAdmin3(){const t=A3.tab;
  return `<div class="view a3v" role="dialog" aria-label="Admin panel"><div class="a3top pad"><button class="iconbtn" data-a="a3up" aria-label="Back">${ic('back')}</button><div class="grow"><p class="a3kick">NeuMarry admin · <span>● live</span></p><h2>${{home:'Command center',members:'Members',activity:'Activity',money:'Money',events:'Events',robots:'Robots',help:'Help members'}[t]||'Command center'}</h2></div><button class="iconbtn" data-a="a3reload" aria-label="Refresh">${ic('refresh')}</button></div>
   ${a3tabsHtml()}
   <div class="scroll"><div class="a3body pad">${A3.mem?a3member():t==='members'?a3members():t==='activity'?a3activity():t==='money'?a3money():t==='events'?a3events():t==='robots'?a3robots():t==='help'?a3help():a3home()}</div></div></div>`}
(function(){
  if(!IC.refresh)Object.assign(IC,{refresh:'<path d="M20 11a8 8 0 1 0-2.3 5.7M20 4v7h-7"/>',alert:'<path d="M12 4l9 16H3z"/><path d="M12 10v4M12 17h.01"/>'});
  if(!IC.alert)IC.alert='<path d="M12 4l9 16H3z"/><path d="M12 10v4M12 17h.01"/>';
  const _ra=renderAdmin;renderAdmin=function(){if(!C3()||A3.tab==='checks'){const h=_ra();return C3()?h.replace(/^(\s*<div class="view)([^>]*>)/,'$1 a3chk$2<div class="a3chkbar">'+a3tabsHtml()+'</div>'):h}return renderAdmin3()};
  Object.assign(A,{
    a3tab(el){A3.tab=el.dataset.k;A3.open=null;if(A3.tab!=='robots')A3.bot=null;render();if(A3.tab==='checks'){const s=document.querySelector('.view .scroll');if(s)s.scrollTop=0}},
    a3reload(){A3.ov=null;A3.help=null;render();a3load()},
    async a3bot(el){A3.bot=el.dataset.k||null;A3.runs=null;render();if(A3.bot){try{A3.runs=await API.rpc('admin_bot_runs',{p_bot:A3.bot,p_limit:30})}catch(e){A3.runs=[]}render()}},
    a3mf(el){const k=el.dataset.k||'';A3.mf=A3.mf===k?'':k;render()},
    a3open(el){A3.open=+el.dataset.k;render();const s=document.querySelector('.a3v .scroll');if(s)s.scrollTop=0},
    a3ready(el){const t=document.getElementById('a3ans');if(t){t.value=A3HELP[+el.dataset.i];t.focus()}},
    async a3send(el){const t=document.getElementById('a3ans');const v=(t&&t.value||'').trim();if(!v){toast('Write an answer first','x');return}
      try{await API.rpc('admin_help_answer',{p_id:A3.open,p_answer:v,p_solved:el.dataset.solved==='1'});toast('Answer sent','check');A3.open=null;a3load()}catch(e){fail(e)}}
  });
  const _oa=A.openAdmin;A.openAdmin=function(){A3.tab='home';A3.bot=null;A3.open=null;A3.list=null;A3.mem=null;A3.ev=null;A3.st=null;A3.mlist=undefined;_oa.apply(this,arguments);if(C3())a3load()};
})();


/* Every item in the admin panel opens its details (his ask 6 Nov ~19:xx). Lists come from admin_signups (last 30 days, real rows). */
const A3F=[[x=>true,'Made an account'],[x=>!/^Signed up/.test(x.step||''),'Started the profile'],[x=>!/^(Signed up|Profile started|No )/.test(x.step||''),'Sent documents'],[x=>/live/i.test(x.step||''),'Live']];
function a3rows(){return (S.admin&&S.admin.signups)||[]}
function a3daysAgo(ts){const d=new Date(ts);const t=new Date();d.setHours(0,0,0,0);t.setHours(0,0,0,0);return Math.round((t-d)/864e5)}
function a3list(){const L=A3.list;const rows=a3rows().filter(L.f);
  return `<button class="a3back" data-a="a3up">${ic('back')} Back</button><div class="a3c"><div class="a3h"><b>${esc(L.title)}</b><span>${rows.length}</span></div>
   ${S.admin&&S.admin.loading?spinner('Loading'):rows.length?rows.slice(0,200).map(x=>`<button class="a3r" data-a="a3mem" data-k="${esc(x.user_id)}"><span class="a3d ${/live/i.test(x.step||'')?'ok':'run'}"></span><span><b>${esc(x.full_name||x.google_name||x.email||'Member')}</b><small>${esc(x.step||'')}</small><small>${esc([x.city,x.country].filter(Boolean).join(', '))}${x.city||x.country?' · ':''}${esc(a3ago(x.created_at))}</small></span><em>›</em></button>`).join(''):`<p class="a3m">No members here in the last 30 days.</p>`}
   <p class="a3m">${esc(L.note||'Members who joined in the last 30 days.')}</p></div>`}
function a3member(){const id=A3.mem;const m=A3.memd&&A3.memd.id===id?A3.memd:null;const x=a3rows().find(r=>r.user_id===id)||{};
  const back=`<button class="a3back" data-a="a3up">${ic('back')} Back</button>`;
  if(!m)return back+`<div class="a3c">${A3.memd===false?`<p class="a3m">Could not load this member.</p>`:spinner('Loading')}</div>`;
  const dt=t=>t?new Date(t).toLocaleString([], {day:'numeric',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'}):'';
  const row=(k,v)=>v===null||v===undefined||v===''?'':`<div class="a3kv"><span>${esc(k)}</span><b>${esc(String(v))}</b></div>`;
  const age=m.dob?Math.floor((Date.now()-new Date(m.dob))/3156e7):null;
  const num=(n,l)=>`<div class="a3k sm"><b>${esc(String(n||0))}</b><span>${esc(l)}</span></div>`;
  return back+`<div class="a3c"><div class="a3h"><b>${esc(m.name||'Member')}</b><span>${esc([m.gender,age].filter(Boolean).join(' · '))}</span></div>
   <div class="a3step ${m.live?'ok':''}">${esc(m.banned?'Banned':m.step||'')}</div>${m.plan&&m.plan!=='free'?`<span class="a3step ok">${esc(String(m.plan).toUpperCase())}</span>`:''}
   ${row('Email',m.email)}${row('Signed in with',m.provider)}${row('Lives in',[m.city,m.country].filter(Boolean).join(', '))}${row('Roots',m.roots)}${row('Language',m.tongue)}${row('Religion',m.religion)}${row('Work',m.job)}${row('Education',m.education)}${row('Marital status',m.marital)}${row('Came from',m.source)}</div>
  <div class="a3c"><div class="a3h"><b>Activity</b><span>all time</span></div><div class="a3g">${num(m.interests_sent,'Interests sent')}${num(m.interests_got,'Interests received')}${num(m.matches,'Matches')}${num(m.chats,'Chats')}${num(m.messages_sent,'Messages sent')}${num(m.messages_7d,'Messages, 7 days')}</div>
   ${row('Joined',dt(m.joined))}${row('Last active',dt(m.last_seen))}${row('Last sign-in',dt(m.last_sign_in))}${row('Sign-ins',x.logins)}${row('Minutes on the form',x.form_minutes)}${row('Phone time zone',x.phone_tz)}${row('Phone language',x.phone_lang)}</div>
  <div class="a3c"><div class="a3h"><b>Checks</b><span>${m.photos} photo${m.photos===1?'':'s'}</span></div>${(m.docs||[]).length?m.docs.map(d=>`<div class="a3kv"><span>${esc(d.kind)}</span><b>${esc(d.status)} · ${esc(dt(d.at))}</b></div>`).join(''):'<p class="a3m">No documents sent yet.</p>'}</div>
  <div class="a3c"><div class="a3h"><b>Money</b><span>Gold and tickets</span></div>
   ${(m.gold||[]).map(g=>`<div class="a3kv"><span>Gold · ${esc(g.source)}</span><b>${esc(g.product)} · until ${esc(dt(g.to))}${g.renew?' · renews':''}</b></div>`).join('')}
   ${(m.tickets||[]).map(t=>`<div class="a3kv"><span>${esc(t.event)}</span><b>${esc(t.status)} · ${money(t.cents,t.cur)}${t.in?' · checked in':''}</b></div>`).join('')}
   ${!(m.gold||[]).length&&!(m.tickets||[]).length?'<p class="a3m">No payments yet.</p>':''}</div>
  <div class="a3c"><div class="a3h"><b>Safety</b></div>${row('Reports against',m.reports_against)}${row('Warned messages',m.flagged)}<p class="a3m">Chat text stays private; only the numbers show here.</p>
   ${m.email?`<a class="btn primary block" href="mailto:${esc(m.email)}">${ic('mail')} Email this member</a>`:''}</div>`}
async function a3loadMem(id){A3.memd=null;try{A3.memd=await API.rpc('admin_member',{p_uid:id})||false}catch(e){A3.memd=false}render()}
async function a3loadStats(){if(A3.stB)return;A3.stB=true;try{A3.st=await API.rpc('admin_stats')}catch(e){A3.st=false}finally{A3.stB=false;render()}}
function a3need(){if(A3.st===undefined||A3.st===null){a3loadStats();return `<div class="a3c">${spinner('Loading')}</div>`}if(A3.st===false)return `<div class="a3c"><p class="a3m">Could not load. Pull to refresh or tap ⟳.</p></div>`;return ''}
function a3kv2(k,n,max,col,act){return `<div class="a3f${act?' a3fb':''}" ${act?`role="button" tabindex="0" ${act}`:''}><span>${esc(k)}</span><div><i style="width:${Math.max(2,Math.round(n/Math.max(1,max)*100))}%;background:${col}"></i></div><b>${n}</b></div>`}
function a3members(){const L=A3.mlist;if(L===undefined){A3.mlist=null;a3search('')}
  return `<div class="a3c"><input id="a3q" type="search" class="a3in" placeholder="Search name, email, city or country" aria-label="Search members" value="${esc(A3.mq||'')}" data-a3q="1">
   ${(A3.st&&A3.st.members)?(()=>{const M=A3.st.members;return `<div class="a3g">${[['Members',M.total,''],['Women',M.women,'w'],['Men',M.men,'m'],['Live',M.live,'live'],['Gold',M.gold,'gold'],['Banned',M.banned,'ban']].map(([l,n,k])=>`<button class="a3k sm${(A3.mf||'')===k?' on':''}" data-a="a3mf" data-k="${k}" aria-pressed="${(A3.mf||'')===k}"><b>${n}</b><span>${l}</span></button>`).join('')}</div>`})():(a3loadStats(),'')}
   ${A3.mlist===null?spinner('Loading'):a3mfl().length?a3mfl().map(x=>`<button class="a3r" data-a="a3mem" data-k="${esc(x.id)}"><span class="a3d ${x.banned?'failed':/live/i.test(x.step||'')?'ok':'run'}"></span><span><b>${esc(x.full_name||x.email||'Member')}${x.gold?' · Gold':''}</b><small>${esc(x.step||'')}</small><small>${esc([x.city,x.country].filter(Boolean).join(', '))}${x.origin_country?' · roots '+esc(x.origin_country):''} · joined ${esc(a3ago(x.created_at))}</small></span><em>›</em></button>`).join(''):'<p class="a3m">No members found.</p>'}</div>
   ${A3.st&&A3.st.members?['countries','roots','cities'].map(k=>{const a=A3.st.members[k]||[];return a.length?`<div class="a3c"><div class="a3h"><b>${{countries:'Where they live',roots:'Their roots',cities:'Top cities'}[k]}</b><span>tap to see</span></div>${a.map(r=>a3kv2(r.k,r.n,a[0].n,'#9D7CFF',`data-a="a3find" data-k="${esc(String(r.k).split(',')[0])}"`)).join('')}</div>`:''}).join(''):''}`}
/* member tiles filter the list (9 Nov fix: tapping Women/Men/Gold did nothing) */
function a3mfl(){const f=A3.mf||'',L=A3.mlist||[];return L.filter(x=>!f||(f==='w'?/^f/i.test(x.gender||''):f==='m'?/^m/i.test(x.gender||''):f==='live'?/live/i.test(x.step||''):f==='gold'?x.gold:f==='ban'?x.banned:true))}
async function a3search(q){A3.mq=q;A3.mlist=null;render();try{A3.mlist=await API.rpc('admin_members',{p_q:q||null,p_limit:100})}catch(e){A3.mlist=[]}render()}
function a3activity(){const w=a3need();if(w)return w;const a=A3.st.activity;const d=a.days_14||[];const mx=Math.max(1,...d.map(x=>x.active));const mm=Math.max(1,...d.map(x=>x.messages));
  const k=(n,l,s,c,go)=>`<button class="a3k" style="--c:${c}" ${go?`data-a="a3go" data-k="${go}"`:'data-a="a3tab" data-k="members"'}><b>${n}</b><span>${l}</span>${s?`<small>${s}</small>`:''}<em class="a3more">Details ›</em></button>`;
  return `<div class="a3g">${k(a.active_today,'Active today','opened the app','#12A36B')}${k(a.active_7d,'Active, 7 days','',  '#9D7CFF')}${k(a.messages_today,'Messages today',`${a.messages_7d} in 7 days`,'#3BBF8A')}${k(a.chats_7d,'Chats, 7 days','pairs talking','#FFC93C')}${k(a.interests_7d,'Interests, 7 days',`${a.accepted_7d} accepted`,'#FF8A3D')}${k(a.matches_all,'Matches','all time','#12A36B')}</div>
   <div class="a3c"><div class="a3h"><b>Active members per day</b><span>14 days</span></div><div class="a3bars">${d.map(x=>`<i style="height:${Math.max(3,Math.round(x.active/mx*100))}%" title="${x.active}"></i>`).join('')}</div></div>
   <div class="a3c"><div class="a3h"><b>Messages per day</b><span>14 days</span></div><div class="a3bars">${d.map(x=>`<i style="height:${Math.max(3,Math.round(x.messages/mm*100))}%;background:#3BBF8A" title="${x.messages}"></i>`).join('')}</div></div>
   <div class="a3c"><div class="a3h"><b>Day by day</b></div>${d.slice().reverse().map(x=>`<div class="a3kv"><span>${esc(new Date(x.d).toLocaleDateString([], {weekday:'short',day:'numeric',month:'short'}))}</span><b>${x.active} active · ${x.messages} messages · ${x.interests} interests</b></div>`).join('')}</div>
   ${a.flagged_7d?`<button class="a3c a3n" data-a="a3tab" data-k="checks">${ic('alert')}<span><b>${a.flagged_7d} warned message${a.flagged_7d>1?'s':''} in 7 days</b><small>Money or scam words; see Checks</small></span><em>Open</em></button>`:''}`}
function a3money(){const w=a3need();if(w)return w;const M=A3.st.money||{};const T=M.tickets||[];
  return `<div class="a3g">${T.map(t=>`<div class="a3k" style="--c:#12A36B"><b>${money(t.paid_30d,t.cur)}</b><span>Tickets, 30 days</span><small>${money(t.paid_all,t.cur)} all time · ${t.count_all} paid</small></div>`).join('')}
    <button class="a3k" style="--c:#FFC93C" data-a="a3tab" data-k="members"><b>${M.gold_active??0}</b><span>Gold active</span><small>${M.gold_new_30d??0} new in 30 days · ${M.gold_renewing??0} renewing</small><em class="a3more">Members ›</em></button></div>
   ${T.length?`<div class="a3c"><div class="a3h"><b>Event tickets</b><span>per currency</span></div>${T.map(t=>`<div class="a3kv"><span>${esc(t.cur)} paid (before tax)</span><b>${money(t.paid_all,t.cur)}</b></div><div class="a3kv"><span>of it to restaurants (meals)</span><b>${money(t.meals_all,t.cur)}</b></div><div class="a3kv"><span>NeuMarry share</span><b>${money(t.paid_all-t.meals_all,t.cur)}</b></div>${t.refunded_all?`<div class="a3kv"><span>Refunded</span><b>${money(t.refunded_all,t.cur)}</b></div>`:''}`).join('')}</div>`:''}
   ${(M.gold_by_product||[]).length?`<div class="a3c"><div class="a3h"><b>Gold plans</b><span>active</span></div>${M.gold_by_product.map(r=>a3kv2(r.k,r.n,M.gold_by_product[0].n,'#FFC93C')).join('')}<p class="a3m">Gold money arrives through Google Play / App Store; the exact amounts after store fees are in the store report.</p></div>`:''}
   ${(M.payouts||[]).length?`<div class="a3c"><div class="a3h"><b>Payouts to hosts and partners</b></div>${M.payouts.map(p=>`<div class="a3kv"><span>${esc(p.status)} · ${p.n}</span><b>${money(p.cents,p.cur)}</b></div>`).join('')}</div>`:''}
   <div class="a3c"><div class="a3h"><b>Latest payments</b><span>${(M.recent||[]).length}</span></div>${(M.recent||[]).length?M.recent.map(r=>`<button class="a3r" data-a="a3mem" data-k="${esc(r.uid)}"><span class="a3d ok"></span><span><b>${esc(r.kind)} · ${esc(r.who||'Member')}</b><small>${esc(r.what||'')}${r.cents!=null?' · '+money(r.cents,r.cur):''}</small><small>${esc(a3ago(r.at))}</small></span><em>›</em></button>`).join(''):'<p class="a3m">No payments yet.</p>'}</div>`}
function a3events(){const w=a3need();if(w)return w;const E=A3.st.events||[];if(!E.length)return `<div class="a3c"><p class="a3m">No events in the last 60 days or coming up.</p></div>`;
  if(A3.ev){const e=E.find(x=>x.id===A3.ev);if(e){const row=(k,v)=>`<div class="a3kv"><span>${k}</span><b>${esc(String(v))}</b></div>`;
    return `<button class="a3back" data-a="a3up">${ic('back')} All events</button><div class="a3c"><div class="a3h"><b>${esc(e.title)}</b><span>${esc(e.status)}</span></div>
     ${row('When',new Date(e.starts_at).toLocaleString([], {weekday:'short',day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'}))}${row('Where',[e.city,e.country].filter(Boolean).join(', '))}
     ${a3kv2('Women',e.women,e.seats_women,'#3BBF8A')}${a3kv2('Men',e.men,e.seats_men,'#9D7CFF')}
     ${row('Seats',`${e.women}/${e.seats_women} women · ${e.men}/${e.seats_men} men`)}${row('Paid tickets',e.paid)}${row('Money (before tax)',money(e.cents,e.currency))}${row('Checked in at the door',e.checked_in)}</div>`}}
  return E.map(e=>`<button class="a3c a3ev" data-a="a3ev" data-k="${esc(e.id)}"><span class="a3h"><b>${esc(e.title)}</b><span>${esc(e.status)}</span></span><small>${esc(new Date(e.starts_at).toLocaleDateString([], {day:'numeric',month:'short'}))} · ${esc(e.city||'')}</small>
    <span class="a3seat"><i style="width:${Math.round(e.women/Math.max(1,e.seats_women)*100)}%;background:#3BBF8A"></i></span><span class="a3seat"><i style="width:${Math.round(e.men/Math.max(1,e.seats_men)*100)}%;background:#9D7CFF"></i></span>
    <small>${e.women}/${e.seats_women} women · ${e.men}/${e.seats_men} men · ${money(e.cents,e.currency)}</small><em class="a3more">Details ›</em></button>`).join('')}
(function(){
  Object.assign(A,{
    a3go(el){const k=el.dataset.k||'';
      if(k.startsWith('tab:')){A3.tab=k.slice(4);A3.list=null;A3.mem=null;render();return}
      if(k==='today')A3.list={title:'Sign-ups today',f:x=>a3daysAgo(x.created_at)===0};
      else if(k==='live')A3.list={title:'Live members (joined in 30 days)',f:x=>/live/i.test(x.step||''),note:'Fully verified members who joined in the last 30 days.'};
      else if(k.startsWith('day:')){const n=+k.slice(4);A3.list={title:n===0?'Sign-ups today':n===1?'Sign-ups yesterday':`Sign-ups ${n} days ago`,f:x=>a3daysAgo(x.created_at)===n}}
      else if(/^f\d$/.test(k)){const [fn,t]=A3F[+k[1]];A3.list={title:t+' (last 7 days)',f:x=>a3daysAgo(x.created_at)<7&&fn(x),note:'Members who joined in the last 7 days and reached this step.'}}
      A3.mem=null;render();const sc=document.querySelector('.a3v .scroll');if(sc)sc.scrollTop=0},
    a3mem(el){A3.mem=el.dataset.k;a3loadMem(A3.mem);render();const sc=document.querySelector('.a3v .scroll');if(sc)sc.scrollTop=0},
    a3up(){if(A3.mem)A3.mem=null;else if(A3.ev)A3.ev=null;else if(A3.list)A3.list=null;else if(A3.open)A3.open=null;else if(A3.bot)A3.bot=null;else if(A3.tab!=='home')A3.tab='home';else{A.closeView();return}render()}
  });
  /* phone back button and the top back arrow: one step back inside the admin panel first, then close it */
  const _gb=goBack;goBack=function(){if(view&&view.type==='admin'&&!sheet&&!picker&&!celebrate&&(A3.mem||A3.ev||A3.list||A3.open||A3.bot||A3.tab!=='home')){A.a3up();return true}return _gb()};
  const _ta=A.a3tab;A.a3tab=function(el){A3.list=null;A3.mem=null;A3.ev=null;return _ta.apply(this,arguments)};
  Object.assign(A,{a3ev(el){A3.ev=el.dataset.k;render();const sc=document.querySelector('.a3v .scroll');if(sc)sc.scrollTop=0},
    a3find(el){A3.tab='members';const q=el.dataset.k||'';render();a3search(q)}});
  let a3t=null;document.addEventListener('input',e=>{if(e.target&&e.target.dataset&&e.target.dataset.a3q){clearTimeout(a3t);const v=e.target.value;a3t=setTimeout(()=>{a3search(v.trim());setTimeout(()=>{const i=document.getElementById('a3q');if(i){i.focus();i.setSelectionRange(v.length,v.length)}},50)},450)}});
  const _rl=A.a3reload;A.a3reload=function(){A3.st=null;A3.mlist=undefined;if(A3.mem)a3loadMem(A3.mem);return _rl.apply(this,arguments)};
})();

/* member side: "Need help?" sheet (C3 preview first). The question goes to the team's help inbox; answers show here. */
const H3={mine:null};
function h3sheet(){const mine=H3.mine;const topics=['Which document works?','My upload failed','I cannot take a selfie','Something else'];
  return sheetShell('Need help? Ask our team',`<p class="hint">A real person answers, usually within a few hours. Your question stays private.</p>
   <div class="a3chips lt">${topics.map((t,i)=>`<button data-a="h3topic" data-k="${esc(t)}" class="${(sheet.topic||topics[0])===t?'on':''}">${esc(t)}</button>`).join('')}</div>
   <textarea id="h3msg" rows="3" maxlength="500" aria-label="Your question" placeholder="Write your question"></textarea>
   <button class="btn primary block" data-a="h3send">Send to the team</button>
   ${mine&&mine.length?`<div class="h3list"><p class="v2lb">Your questions</p>${mine.slice(0,5).map(x=>`<div class="h3it"><b>${esc(x.message)}</b>${x.answer?`<p>${esc(x.answer)}</p>`:'<small>Waiting for the team</small>'}</div>`).join('')}</div>`:''}`)}
(function(){
  const _rs=renderSheet;renderSheet=function(){return sheet&&sheet.type==='h3help'?h3sheet():_rs()};
  Object.assign(A,{
    async h3open(){sheet={type:'h3help',step:S.screen==='app'?(S.tab||''):'Sign-up'};render();try{H3.mine=await API.select('help_requests',{select:'message,answer,status,created_at',user_id:'eq.'+API.userId(),order:'created_at.desc',limit:5})}catch(e){H3.mine=[]}render()},
    h3topic(el){sheet.topic=el.dataset.k;const v=(document.getElementById('h3msg')||{}).value;render();const t=document.getElementById('h3msg');if(t&&v)t.value=v},
    async h3send(){const t=document.getElementById('h3msg');const v=(t&&t.value||'').trim();if(!v){toast('Write your question first','x');return}
      try{await API.rpc('help_ask',{p_step:String(sheet.step||'').slice(0,60),p_topic:String(sheet.topic||'Which document works?').slice(0,60),p_message:v});sheet=null;render();toast('Sent. Our team will answer here.','check')}
      catch(e){if(/too_many/.test(String(e&&e.message||e)))toast('You have sent 5 questions today. We will answer them soon.','x');else fail(e)}}
  });
  /* the button: on Matches while not live, and on Me (admin preview only) */
  const _nl=renderNotLive;renderNotLive=function(){const h=_nl();return C3()?h.replace(/<\/div><\/div>\s*$/,`<button class="btn ghost block h3btn" data-a="h3open">${ic('chat')} Need help? Ask our team</button></div></div>`):h};
})();


/* ---------- Language picker (his ok 6 Nov 2026: 18 languages, Rs 0 forever) ----------
   Only languages whose fixed file ships with the app are listed (window.NM_AVAIL from index.html, plus English and French).
   Names are shown in their own script and never translated (notr). */
const LANGS_ALL=[['en','English','English'],['fr','Français','French'],['es','Español','Spanish'],['ar','العربية','Arabic'],['hi','हिन्दी','Hindi'],
 ['pt','Português','Portuguese'],['zh','中文 (简体)','Chinese'],['bn','বাংলা','Bengali'],['ur','اردو','Urdu'],['ru','Русский','Russian'],['id','Bahasa Indonesia','Indonesian'],
 ['de','Deutsch','German'],['ja','日本語','Japanese'],['tr','Türkçe','Turkish'],['ko','한국어','Korean'],['vi','Tiếng Việt','Vietnamese'],['fil','Filipino','Filipino'],['sw','Kiswahili','Swahili']];
function langSheet(){const av=['en','fr'].concat(window.NM_AVAIL||[]);const cur=RM_I18N.lang;
  return sheetShell('Language',`<div class="lgl notr">${LANGS_ALL.filter(x=>av.indexOf(x[0])>=0).map(([k,n,e])=>`<button class="lgr${k===cur?' on':''}" data-a="setLang" data-k="${k}" lang="${k}" aria-pressed="${k===cur}"><span><b>${esc(n)}</b><small>${esc(e)}</small></span>${k===cur?ic('check'):''}</button>`).join('')}</div>
   <p class="hint">Translated by AI. Names, about text and chats are never translated.</p>`)}
(function(){const _rs=renderSheet;renderSheet=function(){return sheet&&sheet.type==='lang'?langSheet():_rs()}})();


/* ---------- Easy join (his ok 6 Nov 2026 on the Easy Join mock, built 7 Nov) ----------
   A member goes LIVE with an approved photo + ID + live selfie (each checked by a person).
   Roots and city become trust badges (shown on profiles, members with all badges are introduced first);
   EVENTS still need ID + selfie + roots + city. The server decides who is on the new rule (rpc my_join_rule:
   admin first, then everyone once app_flags.easy_join is on); the app only follows it. */
(function(){
  /* 9 Nov fix: the opening screen showed the old 'not live' page for a moment, then switched: remember the join rule */
  try{if(S.join===undefined){const j=JSON.parse(localStorage.getItem('nm.join')||'null');if(j)S.join=j}}catch(e){}
  /* rings and stamps draw once per app open, not again on every refresh (his 9 Nov: 'photo me 2 baar round ghumna') */
  document.addEventListener('animationend',e=>{if(e.animationName==='tpdraw'||e.animationName==='tpthud')document.documentElement.classList.add('nm-drawn')});
  const EJ=()=>!!(S.join&&S.join.easy);
  const basicV=()=>{const v=S.me&&S.me.v;return !!v&&!!v.id&&!!v.selfie};
  const canBrowse=()=>verified()||(EJ()&&basicV());
  const seenKey=()=>'nm.liveSeen.'+(S.me&&S.me.id||'');
  const _lm=loadMe;loadMe=async function(){const r=await _lm();
    if(r){try{S.join=await API.rpc('my_join_rule');try{localStorage.setItem('nm.join',JSON.stringify(S.join||null))}catch(x){}}catch(e){if(!S.join)S.join=null}
      try{localStorage.setItem('nm.easy',EJ()?'1':'0')}catch(e){}}
    return r};
  isLive=function(){return canBrowse()&&photoOk()};
  const _nv=needVerified;needVerified=function(ev){if(!ev&&canBrowse())return false;return _nv(ev)};

  const badge=(ok,t)=>`<span class="ej-chip ${ok?'y':'n'}">${ok?ic('check'):'+'} ${esc(t)}</span>`;
  /* Matches while not live: 2 steps (photo, ID + selfie); roots and city shown as optional badges */
  const _nl=renderNotLive;renderNotLive=function(){if(!EJ())return _nl();
    const me=S.me,n=S.fitN||0,who=me.lookingFor==='F'?'women':'men';
    const ph=photoOk()?'ok':me.photoPending?'wait':(me.rejectedPhoto?'rej':'todo');
    const id=vState(1,{},me),st=[ph,id],done=st.filter(x=>x==='ok').length,allIn=st.every(x=>x==='ok'||x==='wait');
    const r=vState(2,{},me),c=vState(3,{},me);
    return `<div class="topbar pad"><div class="grow"><div class="hello">${greet()}, <em>${esc(me.name.split(' ')[0])}</em></div><div class="sub">2 steps and you are live</div></div></div>
  <div class="scroll" id="main"><div class="main-inner pad">
   <div class="nearby golive">${n?`<div class="nb-n"><b>${n}</b><span>verified ${who} already fit what you are looking for</span></div>`:`<span class="gl-h">${ic('shield')}<b>Every member is checked by a person</b></span>`}
    <div class="seats"><span>${done} of 2 steps done</span><span class="sb"><i style="width:${done*50}%"></i></span></div></div>
   <div class="vsteps">
    ${vStep(1,st[0],'Profile photo','A clear photo of you, checked by our team','goPhoto')}
    ${vStep(2,st[1],'ID and live selfie','Passport or national ID + a 30-second selfie','goVerify')}</div>
   ${allIn?`<div class="callout">${ic('clock')}<span><b>Everything is with our team.</b> We check within 24 hours. Your profile goes live the moment the last check is approved.</span></div>`:
     `<button class="btn primary block" data-a="${st[0]==='ok'||st[0]==='wait'?'goVerify':'goPhoto'}">${ic('shield')}${st[0]==='ok'||st[0]==='wait'?'Verify ID and selfie':'Add your photo'}</button>`}
   <div class="sec-h"><h2>Trust badges</h2><small>Add any time</small></div>
   <div class="ej-badges">
    <button type="button" class="ej-bdg${r==='ok'?' ok':''}" data-a="goVerify" data-n="2">${ic('globe')}<b>Roots</b><small>${r==='ok'?'Proven':r==='wait'?'With our team':'A document that shows where you come from'}</small></button>
    <button type="button" class="ej-bdg${c==='ok'?' ok':''}" data-a="goVerify" data-n="3">${ic('pin')}<b>City</b><small>${c==='ok'?'Proven':c==='wait'?'With our team':'Proof of where you live now'}</small></button></div>
   <p class="note">${NO_EVENTS?'Members with all badges are introduced first.':'Needed for events. Members with all badges are introduced first.'}</p>
   ${C3()?`<button class="btn ghost block h3btn" data-a="h3open">${ic('chat')} Need help? Ask our team</button>`:''}
  </div></div>`};

  /* Live but roots / city not proven yet: one calm card on Matches (first time), then a small reminder */
  const _vb=verifyBanner;verifyBanner=function(){if(!EJ()||verified()||!basicV())return _vb();const me=S.me;
    const r=vState(2,{},me),c=vState(3,{},me);let seen=false;try{seen=localStorage.getItem(seenKey())==='1'}catch(e){}
    const chips=badge(true,'ID')+badge(true,'Live selfie')+badge(true,'Photo')+badge(r==='ok','Roots')+badge(c==='ok','City');
    if(!seen)return `<div class="ej-live"><div class="ej-ring">${ic('check')}</div><b>Your profile is live</b><small>Verified members who fit you can now see you, and you can see them.</small>
      <div class="ej-chips">${chips}</div>
      <button class="btn primary block" data-a="goVerify" data-n="${r==='ok'?3:2}">Add roots and city · 2 min</button>
      <button class="link" data-a="ejSeen">Later</button>
      <small>${NO_EVENTS?'Optional now. With all 5 badges you are introduced first.':'Optional now. With all 5 badges you can book events and you are introduced first.'}</small></div>`;
    if(r==='wait'&&(c==='wait'||c==='ok')||c==='wait'&&r==='ok')return `<div class="callout">${ic('clock')}<span>Your documents are with our team, usually within 24 hours.</span></div>`;
    return `<div class="callout">${ic('shield')}<span>${NO_EVENTS?'Add your roots and city badges to be introduced first.':'Add your roots and city badges to book events and be introduced first.'} <button class="link" data-a="goVerify" data-n="${r==='ok'?3:2}">Add now</button></span></div>`};

  /* "Send interest" gate while the basic check is not done yet */
  const _rs=renderSheet;renderSheet=function(){if(!sheet||sheet.type!=='verifyGate'||sheet.ev||!EJ())return _rs();const me=S.me;
    const st=vState(1,{},me),wait=st==='ok'||st==='wait';
    return sheetShell('Verify to send interests',`<div class="callout">${ic('shield')}<span>Every member you write to has shown a real ID and a live selfie. They expect the same from you.</span></div>
     <div class="vsteps">${vStep(1,st,'ID and live selfie','Passport or national ID + a 30-second selfie','goVerify')}</div>
     ${wait?'<p class="hint">Your ID and selfie are with our team, usually within 24 hours.</p>':`<p class="hint">${esc(WHY_LINE)}</p>`}`,
     `<button class="btn ghost" data-a="closeSheet">Not now</button>${wait?'':`<button class="btn primary" data-a="goVerify" data-n="1">Continue</button>`}`)};

  /* Welcome promise follows the rule this device last saw (honest for each rule) */
  const _rw=renderWelcome;renderWelcome=function(){const h=_rw();let on=false;try{on=localStorage.getItem('nm.easy')==='1'}catch(e){}
    return on?h.replace('🪪 Every member checked','🪪 ID + live selfie, every member').replace('👪 Family can join','🌍 Roots and city badges'):h};

  Object.assign(A,{ejSeen(){try{localStorage.setItem(seenKey(),'1')}catch(e){}render()}});
})();

/* ---------- Trust Passport (his ok 7 Nov 2026): 5 stamps x 20% = "% verified", shown on every profile,
   with what is still left. Numbers come only from real checks. Only where easy join is on (EJ). ---------- */
(function(){
  const EJ=()=>!!(S.join&&S.join.easy);
  const ST=[['photo','Photo','camera'],['id','ID','id'],['selfie','Live selfie','scan'],['roots','Roots','globe'],['lives','City','pin']];
  const stOf=p=>{const v=p.v||{};return {photo:true,id:!!v.id,selfie:!!v.selfie,roots:!!v.roots,lives:!!v.lives}};
  const meSt=()=>{const me=S.me,ph=photoOk()?'ok':me.photoPending?'wait':me.rejectedPhoto?'rej':'todo';
    const ck=(c,ok)=>ok?'ok':(c&&c.status==='pending')?'wait':(c&&c.status==='rejected')?'rej':'todo';
    return {photo:ph,id:ck(me.idCheck,me.v.id),selfie:ck(me.selfieCheck,me.v.selfie),roots:vState(2,{},me)==='ok'?'ok':vState(2,{},me),lives:vState(3,{},me)==='ok'?'ok':vState(3,{},me)}};
  const pctOf=o=>Object.values(o).filter(x=>x===true||x==='ok').length*20;
  window.NM_TP={pctOf,stOf};
  const ring=(pct,sz,lab)=>{const r=sz/2-5,c=2*Math.PI*r;return `<span class="tp-ring${pct===100?' full':''}" style="width:${sz}px;height:${sz}px" role="img" aria-label="${pct}% verified">
    <svg viewBox="0 0 ${sz} ${sz}" aria-hidden="true"><circle cx="${sz/2}" cy="${sz/2}" r="${r}" class="bg"/><circle cx="${sz/2}" cy="${sz/2}" r="${r}" class="fg" style="stroke-dasharray:${c.toFixed(1)};--o:${(c*(1-pct/100)).toFixed(1)};--c:${c.toFixed(1)}"/></svg>
    <b>${pct}%</b>${lab?`<small>${lab}</small>`:''}</span>`};
  const stamps=(o,dark)=>`<div class="tp-st${dark?'':' lt'}">${ST.map(([k,t,i],n)=>{const s=o[k]===true?'ok':o[k]===false?'todo':o[k];
    return `<span class="tp-s ${s}" style="--d:${n*.14}s"><i>${s==='ok'?ic('check'):s==='wait'?ic('clock'):ic(i)}</i><small>${t}</small></span>`}).join('')}</div>`;
  const left=o=>ST.filter(([k])=>!(o[k]===true||o[k]==='ok')).map(([,t])=>t);
  function pass(o,title,sub,foot){const pct=pctOf(o);
    return `<div class="tpp"><div class="tp-top"><div class="tp-tx"><small>TRUST PASSPORT</small><b>${title}</b><span>${sub}</span></div>${ring(pct,84,'verified')}</div>${stamps(o,true)}${foot||''}</div>`}
  const tile=(k,o,why)=>{const [,t,i]=ST.find(x=>x[0]===k),s=o[k],lab={ok:'Done',wait:'Checking',rej:'Upload again',todo:'Start'}[s]||'Start';
    const act=k==='photo'?'goPhoto':'goVerify',n={id:1,selfie:1,roots:2,lives:3}[k]||'';
    return `<button type="button" class="tp-tile ${s}" data-a="${act}" data-n="${n}"><i>${s==='ok'?ic('check'):ic(i)}</i><span><b>${t}</b><small>${why}</small></span><em>${lab}${s==='todo'||s==='rej'?' →':''}</em></button>`};
  const WHY={photo:'A clear photo of you, checked by a person',id:'Passport or national ID',selfie:'A 30-second live selfie',roots:'A document from where you grew up',lives:'Proof of the city you live in now'};

  /* Matches while not live */
  const _nl=renderNotLive;renderNotLive=function(){if(!EJ())return _nl();const me=S.me,o=meSt(),n=S.fitN||0,who=me.lookingFor==='F'?'women':'men';
    const need=['photo','id','selfie'].filter(k=>o[k]!=='ok'),allIn=need.every(k=>o[k]==='wait'),nx=need.find(k=>o[k]!=='wait');
    const sub=allIn?'With our team · usually within 24 hours':need.length+(need.length===1?' stamp':' stamps')+' and you are live';
    return `<div class="topbar pad"><div class="grow"><div class="hello">${greet()}, <em>${esc(me.name.split(' ')[0])}</em></div><div class="sub">${sub}</div></div></div>
  <div class="scroll" id="main"><div class="main-inner pad tp-page">
   ${pass(o,pctOf(o)+'% verified',allIn?'Your stamps are with our team':(NO_EVENTS?'Live at 60%. Introduced first at 100%.':'Live at 60%. Events at 100%.'),n?`<div class="tp-foot">${ic('heart')}<span><b>${n}</b> verified ${who} already fit what you are looking for</span></div>`:'')}
   ${nx?`<button type="button" class="tp-next" data-a="${nx==='photo'?'goPhoto':'goVerify'}" data-n="1"><small>YOUR NEXT STAMP</small><b>${nx==='photo'?'Add your photo':'ID and live selfie'}</b><span>${nx==='photo'?'About 1 minute':'About 2 minutes · checked by a person'}</span><i>${ic('back','flipx')}</i></button>`:
     `<div class="callout">${ic('clock')}<span><b>Everything is with our team.</b> We check within 24 hours. Your profile goes live the moment the last check is approved.</span></div>`}
   <div class="sec-h"><h2>To go live</h2><small>60%</small></div>
   <div class="tp-tiles">${['photo','id','selfie'].map(k=>tile(k,o,WHY[k])).join('')}</div>
   <div class="sec-h"><h2>For 100%</h2><small>${NO_EVENTS?'introduced first':'events · introduced first'}</small></div>
   <div class="tp-tiles">${['roots','lives'].map(k=>tile(k,o,WHY[k])).join('')}</div>
   <p class="note">Every member sees your % and which stamps you have. Your documents are never shown.</p>
   ${C3()?`<button class="btn ghost block h3btn" data-a="h3open">${ic('chat')} Need help? Ask our team</button>`:''}
  </div></div>`};

  /* Live, not 100% yet */
  const _vb=verifyBanner;verifyBanner=function(){if(!EJ()||verified()||!(S.me.v.id&&S.me.v.selfie))return _vb();const o=meSt(),pct=pctOf(o),l=left(o);
    let seen=false;try{seen=localStorage.getItem('nm.liveSeen.'+S.me.id)==='1'}catch(e){}
    const wait=['roots','lives'].filter(k=>o[k]==='wait').length,todo=['roots','lives'].filter(k=>o[k]!=='ok'&&o[k]!=='wait');
    if(!seen)return `<div class="tp-live">${pass(o,'You are live','Verified members who fit you can now see you',
      `<div class="tp-foot col"><span>${l.length?`${l.join(' + ')} left for 100%: ${NO_EVENTS?'be introduced first.':'book events and be introduced first.'}`:''}</span>
      ${todo.length?`<button class="btn primary block" data-a="goVerify" data-n="${todo[0]==='roots'?2:3}">Get to 100% · about 2 min</button>`:''}<button class="link tp-later" data-a="ejSeen">Later</button></div>`)}</div>`;
    return `<button type="button" class="tp-strip" data-a="${todo.length?'goVerify':'tab'}" data-n="${todo[0]==='lives'?3:2}" data-k="me">${ring(pct,48)}<span><b>${pct}% verified</b><small>${wait&&!todo.length?'Your documents are with our team':l.join(' + ')+(NO_EVENTS?' left · 100% is introduced first':' left · 100% gets events')}</small></span>${todo.length?`<em>Add →</em>`:''}</button>`};

  /* Event gate: passport + what is missing */
  const _rs=renderSheet;renderSheet=function(){if(!sheet||sheet.type!=='verifyGate'||!sheet.ev||!EJ())return _rs();const o=meSt(),miss=ST.map(x=>x[0]).filter(k=>o[k]!=='ok');
    return sheetShell('Events need 100%',`${pass(o,pctOf(o)+'% verified','Everyone in the room is 100% verified')}
     <div class="tp-tiles">${miss.map(k=>tile(k,o,WHY[k])).join('')}</div><p class="hint">${esc(WHY_LINE)}</p>`,`<button class="btn ghost" data-a="closeSheet">Not now</button>`)};

  /* Other members: % on cards, passport on the profile */
  const _cs=checksSeal;checksSeal=function(p){if(!EJ())return _cs(p);const pct=pctOf(stOf(p));return `<span class="nm-seal${pct===100?'':' part'}">${ic('check')}${pct}% verified</span>`};
  const _cr=checksRow;checksRow=function(p){if(!EJ())return _cr(p);const o=stOf(p),pct=pctOf(o),l=left(o);
    return `<div class="tp-mini">${ring(pct,64)}<span><b>${pct===100?'100% verified':pct+'% verified'}</b><small>${l.length?'Not proven yet: '+l.join(', '):'Every stamp proven with documents'}</small></span></div>${stamps(o,false)}`};
  const _c3=c3card;c3card=function(p){const h=_c3(p);if(!EJ())return h;const pct=pctOf(stOf(p));
    return h.replace(/<span class="c3ok">[\s\S]*?Verified<\/span>/,'').replace('<span class="c3tags">',`<span class="tp-badge${pct===100?' full':''}">${ring(pct,30)}<b>${pct===100?'100% verified':pct+'%'}</b></span><span class="c3tags">`)};

  /* Me: passport at the top */
  const _me=renderMe;renderMe=function(){const h=_me();if(!EJ())return h;const o=meSt(),pct=pctOf(o),l=left(o),k='<div class="panel"><div class="me-card">';
    const nx=ST.map(x=>x[0]).find(x=>o[x]==='todo'||o[x]==='rej');
    return h.replace(k,pass(o,pct+'% verified',l.length?l.join(' + ')+' left':'Every stamp done',nx?`<div class="tp-foot col"><button class="btn primary block" data-a="${nx==='photo'?'goPhoto':'goVerify'}" data-n="${{id:1,selfie:1,roots:2,lives:3}[nx]||''}">Add ${ST.find(x=>x[0]===nx)[1]}</button></div>`:'')+k)};

  const _rw=renderWelcome;renderWelcome=function(){const h=_rw();return h.replace('🪪 ID + live selfie, every member','🪪 % verified on every profile')};
})();


/* ---------- Fun inside (his ask 7 Nov 2026: inside as fun as the C3 + full-redesign mocks) ----------
   Admin first: only for swapnilbhagatt@gmail.com (and the device it signed in on) until he says ok for everyone.
   Profile: real map with the roots line; Me: avatar ring + 4 colour tiles; Events: ticket card; Chats: stage pills + roots line. */
function FUN(){try{if(/127\.0\.0\.1/.test(CFG.url||'')){const t=localStorage.getItem('nm.funtest');if(t)return t==='1'}
  const e=String((API.email&&API.email())||'').toLowerCase();if(e===C3_ADMIN){try{localStorage.setItem('nm.fun','1')}catch(x){}return true}
  if(e)return false;return localStorage.getItem('nm.fun')==='1'}catch(e){return false}}
(function(){
  const ll=o=>{try{return coordsOf(o)}catch(e){return null}};
  const ctryLL=n=>{const c=(typeof COUNTRIES!=='undefined'?COUNTRIES:[]).find(x=>x[0]===n);return c?[c[4],c[5]]:null};
  const flagOf=n=>{try{return flag(n)}catch(e){return ''}};
  /* a real map with one roots line: where p grew up -> where p lives */
  function rootsMap(p,h){const o=ll({country:p.oc,state:p.os})||ctryLL(p.oc),d=(p.lat!=null?[p.lat,p.lng]:null)||ll({country:p.country,state:p.state,city:p.cityName})||ctryLL(p.country);
    if(!o||!d)return '';const k1='fo'+p.id.slice(0,6),k2='fd'+p.id.slice(0,6);
    PM.C[k1]=[o[1],o[0],p.os||p.oc,''];PM.C[k2]=[d[1],d[0],p.cityName,''];
    const vb=PM.fit([k1,k2],390/(h||170),125);/* more room: labels never cut, calmer map (9 Nov his 'gich gich') */const far=Math.round(dist(o[0],o[1],d[0],d[1]));
    const svg=PM.draw({vb,fsr:.035,grid:false,label:`Map: ${p.os||p.oc} to ${p.cityName}`,arcs:[[k1,k2,'#0E9F6E']],
      pins:[[k1,`${flagOf(p.oc)} ${p.os||p.oc}`,'#FFC93C',0,1.9],[k2,`${flagOf(p.country)} ${p.cityName}`,'#0E9F6E']]});
    return {svg,far}}
  const dist=(a,b,c,d)=>{const R=6371,t=x=>x*Math.PI/180,x=Math.sin(t(c-a)/2)**2+Math.cos(t(a))*Math.cos(t(c))*Math.sin(t(d-b)/2)**2;return 2*R*Math.asin(Math.sqrt(x))};

  const _rl=routeLine;routeLine=function(p){if(!FUN())return _rl(p);const m=rootsMap(p,170);if(!m)return _rl(p);const me=S.me||{};
    const same=p.oc===me.oc&&p.os===me.os,sameC=p.oc===me.oc;
    return `<div class="fu-map"><div class="fu-mapsvg">${m.svg}</div><div class="fu-mapft"><span>${p.g==='F'?'Her':'His'} roots line · ${m.far.toLocaleString(RM_I18N.locale)} km from home</span><b class="${same||sameC?'ok':''}">${same?'Same roots as you':sameC?'Roots like yours':esc(distLabel(p))}</b></div></div>`};

  /* Me: avatar ring + 4 colour tiles */
  const _me=renderMe;renderMe=function(){const h=_me();if(!FUN())return h;const me=S.me,pct=completeness(me),tp=window.NM_TP?window.NM_TP:null;
    const vp=[photoOk(),me.v.id,me.v.selfie,me.v.roots,me.v.lives].filter(Boolean).length;const fam=(typeof FAM!=='undefined'&&FAM.list)?FAM.list.length:0;
    const r=40,c=2*Math.PI*r;const parts=me.name.trim().split(/\s+/);
    const hero=`<div class="fu-me"><span class="fu-av"><svg viewBox="0 0 90 90" aria-hidden="true"><circle cx="45" cy="45" r="${r}" class="bg"/><circle cx="45" cy="45" r="${r}" class="fg" style="stroke-dasharray:${c.toFixed(1)};--o:${(c*(1-pct/100)).toFixed(1)};--c:${c.toFixed(1)}"/></svg>${avatar(null,'md',true)}</span>
      <span class="fu-mtx"><b>${esc(parts[0])}${parts[1]?' '+esc(parts[1][0])+'.':''}, ${me.age}</b><small>${flagOf(me.oc)} ${esc(me.os||me.oc)} → ${flagOf(me.country)} ${esc(myPlace())}</small><em>Profile ${pct}%${pct<100?' · make it 100%':''}</em></span></div>
     <div class="fu-tiles">
      <button type="button" class="fu-t v" data-a="${vp<5?'goVerify':'funGo'}" data-n="${me.v.id&&me.v.selfie?(me.v.roots?3:2):1}" data-k=".vrow"><span>${ic('shield')}<small>${vp} / 5</small></span><b>Trust Passport</b><em>${vp===5?'All stamps done':(5-vp)+(5-vp===1?' stamp left':' stamps left')}</em></button>
      <button type="button" class="fu-t y" data-a="funGo" data-k=".v2card,.panel.v2"><span>${ic('users')}<small>${fam?fam+' shared':''}</small></span><b>Family circle</b><em>${fam?'Your family sees them':'Share a match with family'}</em></button>
      <button type="button" class="fu-t k" data-a="funGo" data-k=".v2voice"><span>${ic('mic')}</span><b>Voice intro</b><em>30 s · optional</em></button>
      <button type="button" class="fu-t p" data-a="${isGold()?'funGo':'upgrade'}" data-k=".likes" data-r="me"><span>${ic('crown')}</span><b>Gold</b><em>${isGold()?'Gold is on':'See who likes you'}</em></button></div>`;
    let out=h.replace(/<div class="panel"><div class="me-card">[\s\S]*?<\/div><\/div>/,hero+'<div class="panel fu-mepanel">');
    const a=out.indexOf('<div class="tpp">'),b=out.indexOf('<div class="fu-me">');if(a>=0&&b>a)out=out.slice(0,a)+out.slice(b);return out};

  /* Events: ticket look */
  const _ec=evCard;evCard=function(e){if(!FUN())return _ec(e);const f=fmtDay(e.date,e.tz),[wc,wl,mc,ml]=e.seats,rv=e.my,mine=evMine(e);
    const bar=(t,a,b,cls)=>`<span class="fu-bar ${cls}"><span>${t}</span><i><s style="width:${b?Math.round(a/b*100):0}%"></s></i><small>${a} / ${b}</small></span>`;
    return `<div class="fu-tk"><button class="fu-tkm" data-a="openEvent" data-id="${e.id}" aria-label="${esc(e.title)}, ${esc(f.long)}">
      <small class="fu-k">${esc(e.title)} · ${esc(e.city||e.area)}</small><b class="fu-date">${f.wd} ${f.day} ${f.mon}</b>
      <span class="fu-meta">${esc(e.time)} · ${esc(e.area)} · ages ${esc(e.age)}${e.parents?' · parents welcome':''}</span>
      <span class="fu-price"><b>${money(e.priceM,e.cur)}</b><small>dinner incl.</small></span></button>
     <div class="fu-perf" aria-hidden="true"></div>
     <div class="fu-tkb">${bar('Women',wc-wl,wc,'w')}${bar('Men',mc-ml,mc,'m')}
      <div class="fu-tka">${rv?`<span class="fu-own">${ic('check')}${rv.status==='paid'?'Booked':rv.wait?'Waiting list':'Reserved'}</span>`:mine.seatsLeft||mine.waitLeft?`<button class="btn primary sm" data-a="openEvent" data-id="${e.id}">${mine.seatsLeft?'Reserve':'Join waiting list'}</button>`:`<span class="fu-own off">Full</span>`}<button class="btn ghost sm" data-a="openEvent" data-id="${e.id}">See the evening</button></div></div></div>`};
  const feat=()=>`<div class="fu-feat"><span>${ic('eye')}<b>See the real person</b></span><span>${ic('users')}<b>Families meet</b></span><span>${ic('shield')}<b>Only verified</b></span></div>`;
  let heroEv=null;
  const _vh=v2evHero;v2evHero=function(){if(!FUN())return _vh();const me0=S.me||{};const evs=events().filter(e=>e.status!=='cancelled');if(!evs.length)return '';
    const near=e=>e.city&&me0.city&&e.city.toLowerCase()===String(me0.city).toLowerCase()?0:e.country===me0.country?1:2;
    const e=evs.slice().sort((a,b)=>near(a)-near(b)||a.date-b.date)[0];heroEv=evCard(e);
    return `<div class="fu-evh"><small>EVENTS · DINNER INCLUDED</small><b>Meet in real life</b></div>${heroEv}${feat()}`};
  const _re=renderEvents;renderEvents=function(){heroEv=null;let h=_re();if(!FUN())return h;
    if(heroEv){const a=h.indexOf(heroEv),b=h.lastIndexOf(heroEv);if(b>a)h=h.slice(0,b)+h.slice(b+heroEv.length)}
    return h.replace('<div class="sec-h"><h2>Upcoming events</h2></div>','<div class="sec-h"><h2>More events</h2></div>')};

  /* Chats: where each match stands on the path + my roots line */
  const stageOf=p=>{const m=(S.chats||{})[p.id]||[];const talk=m.some(x=>x.f==='me')&&m.some(x=>x.f!=='me'&&x.f!=='sys');let fam=false;try{fam=famHas(p.id)}catch(e){}
    return fam?['Families talk','y']:talk?['Talking','p']:m.length?['Said hello','v']:['New match','k']};
  const _rc=renderConnections;renderConnections=function(){let h=_rc();if(!FUN())return h;
    h=h.replace(/(data-a="openchat" data-id="([^"]+)">[\s\S]*?<\/b>)/g,(m,a,id)=>{const p=byId(id);if(!p)return m;const [t,c]=stageOf(p);return a+`<span class="fu-stage ${c}">${t}</span>`});const me=S.me;const m=rootsMap({id:'me0000',oc:me.oc,os:me.os,country:me.country,state:me.state,cityName:myPlace().split(',')[0],lat:me.lat,lng:me.lng,g:me.g},170);
    return m?h.replace(/<\/div><\/div>\s*$/,`<div class="fu-myline"><div class="fu-mapsvg">${m.svg}</div><p>Your roots line · ${m.far.toLocaleString(RM_I18N.locale)} km. Every chat is a step towards someone who knows both places.</p></div></div></div>`):h};

  Object.assign(A,{funGo(el){const sel=el&&el.dataset&&el.dataset.k;const x=sel&&document.querySelector('#main '+sel.split(',').join(',#main '));if(x)x.scrollIntoView({behavior:'smooth',block:'start'})}});
})();


/* ---------- Glass look (his ok 7 Nov 2026 on mock Dkp9Rekpj8aCetG37FxU8G: 'ab live kar do', wants it today) ----------
   Live for everyone since his 'Ok for all' (8 Nov 2026); before that admin-only.
   Dark glass by default, light glass when the phone is set to light (html.gl + html.gl-lt). Styles: 'Glass look' block at the end of app/css/app.css.
   Local tests: localStorage nm.glasstest = '1' / '0'. */
function GLASS(){try{if(/127\.0\.0\.1/.test(CFG.url||'')){const t=localStorage.getItem('nm.glasstest');if(t)return t==='1'}
  return true}catch(e){return true}}  /* LIVE FOR EVERYONE (his 'Ok for all', 8 Nov 2026) */
(function(){
  const mq=window.matchMedia?matchMedia('(prefers-color-scheme: light)'):null;
  const apply=()=>{const on=GLASS();const h=document.documentElement;h.classList.toggle('gl',on);
    let lt=false;try{const t=localStorage.getItem('nm.glassmode');lt=t!=='dark'   /* default LIGHT (his rule 8 Nov 13:46); dark only when chosen with the theme button */}catch(e){}
    h.classList.toggle('gl-lt',on&&lt);
    const m=document.querySelector('meta[name=theme-color]');if(m&&on)m.setAttribute('content',lt?'#F7F8F5':'#0A0C0B')};
  const _r=render;render=function(){apply();_r()};
  try{mq&&mq.addEventListener&&mq.addEventListener('change',()=>{apply()})}catch(e){}
  apply();
})();


/* ---------- Inside premium: screens 7-11 of mock handoff/mocks/inside-premium (his ok: live for everyone) ----------
   7 Today's introductions as a deck of glass cards, 8 'Both said yes' moment, 9 profile top with a floating glass card,
   10 'Two journeys' real map, 11 story (marriage plan path, family, nature stars).
   Real member data only: photos stay locked/blurred exactly as before (avatar()), no invented numbers;
   'Active today' shows only when the server says so (active_today). Follows the glass look (needs C3 + GLASS).
   Styles: 'Inside premium' block at the end of app/css/app.css. Local tests: localStorage nm.pxtest = '1' / '0'. */
function PX(){try{if(/127\.0\.0\.1/.test(CFG.url||'')){const t=localStorage.getItem('nm.pxtest');if(t)return t==='1'}
  return C3()&&GLASS()}catch(e){return false}}
if(!IC.share)Object.assign(IC,{share:'<circle cx="18" cy="5.5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="18.5" r="2.5"/><path d="M8.2 10.8l7.6-4.1M8.2 13.2l7.6 4.1"/>'});
(function(){
  const LOGO=`<svg class="px-logo" viewBox="0 0 32 22" aria-hidden="true"><path class="c1" d="M11.60 18.59c-0.82 0 -8.2 -4.76 -8.2 -10.25 0 -2.71 2.13 -4.92 4.76 -4.92 1.48 0 2.71 0.74 3.44 1.89 0.74 -1.15 1.97 -1.89 3.44 -1.89 2.62 0 4.76 2.21 4.76 4.92 0 5.49 -7.38 10.25 -8.2 10.25z"/><path class="c2" d="M20.40 18.59c-0.82 0 -8.2 -4.76 -8.2 -10.25 0 -2.71 2.13 -4.92 4.76 -4.92 1.48 0 2.71 0.74 3.44 1.89 0.74 -1.15 1.97 -1.89 3.44 -1.89 2.62 0 4.76 2.21 4.76 4.92 0 5.49 -7.38 10.25 -8.2 10.25z"/></svg>`;
  const fl=n=>{try{return flag(n)||''}catch(e){return ''}};
  const her=p=>p.g==='F'?'Her':'His',she=p=>p.g==='F'?'her':'his';
  const has=(p,i)=>p&&p.ans&&p.ans[i]!==undefined&&p.ans[i]!==null&&!isNaN(p.ans[i])&&QS[i]&&QS[i].o[p.ans[i]]!==undefined;
  const same=(p,i)=>has(p,i)&&S.me&&S.me.ans&&S.me.ans[i]===p.ans[i];
  const lt=()=>document.documentElement.classList.contains('gl-lt');
  const fmt=n=>Math.round(n).toLocaleString(RM_I18N.locale);
  const km2=(a,b)=>{const R=6371,t=x=>x*Math.PI/180,x=Math.sin(t(b[0]-a[0])/2)**2+Math.cos(t(a[0]))*Math.cos(t(b[0]))*Math.sin(t(b[1]-a[1])/2)**2;return 2*R*Math.asin(Math.sqrt(x))};
  const ll=o=>{try{return coordsOf(o)}catch(e){return null}};
  /* short labels for answers (same order as QS[i].o) */
  const SH={8:['Marry within a year','Marry in 1–2 years','Marry when it feels right'],2:['With parents','Near parents','Independent'],
    1:['Two careers','Decide together','Home-focused'],5:['Family weekends','Out with friends','Travel lover'],6:['Saver','Balanced','Enjoys now'],
    7:['Talks it out','Space, then talk','Lets it pass'],3:['Kids early','Kids, no rush','Kids: not sure'],4:['Daily faith','Festivals','Personal faith']};
  const settle=p=>[`Stay in ${p.cityName}`,'Open to moving','Open to abroad'][p.ans[0]];

  /* ===== 7. Today's introductions: deck of full-photo glass cards ===== */
  function facts(p){const out=[];if(has(p,8))out.push(['rings',SH[8][p.ans[8]],same(p,8)]);if(has(p,0))out.push(['city',settle(p),same(p,0)]);if(has(p,2))out.push(['users',SH[2][p.ans[2]],same(p,2)]);return out}
  function fit(n){return `<span class="px-fit" style="--p:${n}%" aria-label="${n}% fit"><b>${n}%</b><small>fit</small></span>`}
  function deckActs(p,lk){const st=S.interests[p.id],sl=S.shortlist.includes(p.id);
    const save=`<button class="px-rb" data-a="shortlist" data-id="${p.id}" aria-label="${sl?'Remove from saved':'Save for later'}" aria-pressed="${sl}"${sl?' data-on="1"':''}>${ic('star')}</button>`;
    if(lk)return `<button class="btn gold px-wide" data-a="upgrade" data-r="profile" data-id="${p.id}">${ic('crown')}See ${she(p)} profile</button>`;
    if(st==='mutual')return `${save}<button class="px-big" data-a="openchat" data-id="${p.id}" aria-label="Chat with ${esc(shown(p))}">${ic('chat')}</button><span class="px-rb px-ghost" aria-hidden="true"></span>`;
    if(st==='received')return `<button class="px-rb" data-a="decline" data-id="${p.id}" aria-label="Decline">${ic('x')}</button><button class="px-big" data-a="accept" data-id="${p.id}" aria-label="Accept ${esc(shown(p))}'s interest">${ic('heart')}</button>${save}`;
    if(st==='sent')return `<span class="px-sent">${ic('check')}Interest sent</span>${save}`;
    return `<button class="px-rb" data-a="pass" data-id="${p.id}" aria-label="Not for me">${ic('x')}</button><button class="px-big" data-a="interest" data-id="${p.id}" aria-label="Send interest to ${esc(shown(p))}">${ic('heart')}</button>${save}`}
  function deckCard(p){const c=compat(p),st=S.interests[p.id],lk=locked(p)&&!(st==='received'&&p.gold);const f=facts(p),n=f.filter(x=>x[2]).length,ok=checksDone(p);
    return `<div class="px-slide"><article class="mcard px-card${lk?' lockd':''}">
     <button class="px-ph" data-a="open" data-id="${p.id}" aria-label="${lk?`See this ${c.total}% match with Gold`:`Open ${esc(shown(p))}'s profile`}">${p.photos&&p.photos[0]?`<img class="px-bl" src="${esc(p.photos[0])}" alt="" aria-hidden="true">`:''}${avatar(p,'cover')}<span class="px-fade"></span>
      <span class="px-route">${fl(p.oc)} ${esc(p.os||p.oc)} <i>→</i> ${fl(p.country)} ${esc(p.cityName)}</span>${fit(c.total)}
      ${st==='received'?`<span class="px-likes">${ic('heart')}Likes you</span>`:''}
      <span class="px-gc"><span class="px-nm"><b>${esc(shown(p))}, ${p.age}</b><small>${lk?`${ic('lock')} Name and photos with Gold`:`${esc(p.job||'')}${p.job?' · ':''}${esc(distLabel(p))}`}</small></span>
       <span class="px-ok${ok===5?'':' part'}">${ic('shield')}${ok} of 5</span>
       ${f.length?`<span class="px-facts">${f.map(([i,t,s])=>`<span class="${s?'s':''}">${ic(i)}${esc(t)}</span>`).join('')}</span>`:''}
       ${n?`<span class="px-same">${ic('sparkle')}${n===f.length&&n>1?`Same plans as you, in all ${n===3?'three':'of them'}`:`Same as you in ${n} of ${f.length}`}</span>`:''}</span></button>
     <div class="px-acts">${deckActs(p,lk)}</div></article></div>`}
  const _ib=introBlock;introBlock=function(list){if(!PX())return _ib(list);const it=introsToday(list);if(!it.length)return '';
    return `<div class="sec-h px-sh"><h2>Today’s introductions${it.length>1?` <span class="px-of" aria-hidden="true">1 / ${it.length}</span>`:''}</h2><small>${ic('clock')}New in <span data-until="${midnight()}">${fmtLeft(midnight()-Date.now())}</span></small></div>
    <div class="px-deckw${it.length>1?' many':''}"><div class="px-deck" onscroll="var i=Math.round(this.scrollLeft/this.clientWidth),w=this.parentNode,d=w.nextElementSibling,o=w.previousElementSibling.querySelector('.px-of');if(o)o.textContent=(i+1)+' / '+this.children.length;if(d)[].forEach.call(d.children,function(e,j){e.classList.toggle('on',j===i)})">${it.map(deckCard).join('')}</div></div>
    ${it.length>1?`<div class="nm-dots px-dots" aria-hidden="true">${it.map((_,i)=>`<i class="${i?'':'on'}"></i>`).join('')}</div>`:''}`};

  /* ===== Bento Matches (his ok 7 Nov 02:42 on mock K9PGagZvdiBRTzTqNaQLzM): Today / Likes tiles above the deck, Event / Trust tiles below. Real data only. ===== */
  const _ib2=introBlock;introBlock=function(list){const deck=_ib2(list);if(!PX())return deck;
    const it=introsToday(list),recv=PROFILES.filter(p=>S.interests[p.id]==='received');const me=S.me||{v:{}};
    let vp=0;try{vp=[photoOk(),me.v.id,me.v.selfie,me.v.roots,me.v.lives].filter(Boolean).length}catch(e){}
    let ev=null;try{ev=(S.events||[]).filter(e=>e&&e.date&&new Date(e.date)>Date.now()).sort((a,b)=>new Date(a.date)-new Date(b.date))[0]||null}catch(e){}
    const evDay=ev?(()=>{try{return new Date(ev.date).toLocaleDateString(RM_I18N.locale,{weekday:'short',day:'numeric',month:'short'})}catch(e){return ''}})():'';
    const top=`<div class="pxb"><div class="pxt lemon"><p class="eb">Today</p><b class="pxn">${it.length}</b><p class="pxs">introductions · new in <span data-until="${midnight()}">${fmtLeft(midnight()-Date.now())}</span></p></div>
     ${recv.length?`<button class="pxt mint" data-a="goLikes"><p class="eb">Likes you</p><b class="pxn">${recv.length}</b><p class="pxs">say yes to start chatting</p></button>`
      :`<button class="pxt mint" data-a="tab" data-k="connections"><p class="eb">Saved</p><b class="pxn">${(S.shortlist||[]).length}</b><p class="pxs">people you saved</p></button>`}</div>`;
    const bot=`<div class="pxb">${ev?`<button class="pxt leaf" data-a="tab" data-k="events"><span class="pxi">${ic('cal')}</span><b class="pxh">${esc(ev.name||'Family Mixer')}</b><p class="pxs">${esc(ev.city||'')}${evDay?' · '+esc(evDay):''}</p></button>`:''}
     <button class="pxt" data-a="tab" data-k="me"><span class="pxr" style="--p:${vp*20}%"><b>${vp*20}%</b></span><b class="pxh">Trust Passport</b><p class="pxs">${vp>=5?'All stamps done':(5-vp)+' stamp'+(5-vp===1?'':'s')+' left'}</p></button></div>`;
    return (deck?top+deck:top)+bot};
  /* ===== 8. Both said yes ===== */
  const qs=p=>{const me=S.me,out=[];if(p.oc===me.oc&&p.os&&p.os===me.os)out.push(`What do you miss most about ${p.os}?`);else if(p.oc===me.oc)out.push(`How does your family keep ${p.oc} traditions in ${p.cityName}?`);
    if(same(p,5))out.push(['What does a family weekend look like for you?','Where do you like to go out with friends?','Where is the next trip you dream of?'][p.ans[5]]);
    out.push(`What made you move to ${p.cityName}?`);out.push('What do you enjoy most about your work?');return [...new Set(out)].slice(0,2)};
  const _cel=renderCelebrate;renderCelebrate=function(){if(!PX())return _cel();const p=byId(celebrate.id);if(!p)return '';const chat=canChat(p.id);
    const conf=Array.from({length:18},(_,i)=>`<i style="left:${(i*37+11)%96}%;animation-delay:${(i*.17).toFixed(2)}s;animation-duration:${(3.2+i%5*.4).toFixed(1)}s"></i>`).join('');
    return `<div class="celebrate px-cel" role="dialog" aria-label="It’s a match"><div class="px-conf" aria-hidden="true">${conf}</div>
     <div class="px-pair"><span class="px-glow" aria-hidden="true"></span><span class="px-a l">${avatar(null,'cel',true)}</span><span class="px-a r">${avatar(p,'cel')}</span><span class="px-heart">${LOGO}</span></div>
     <p class="px-kick">It’s a match</p><h2>You and ${esc(p.first||'your match')} both said yes</h2>
     <p class="px-sub">Photos are unlocked${chat?' and chat is open':''}. Your phone numbers stay private.</p>
     ${chat?`<div class="px-qs"><small>Start with a question</small>${qs(p).map(q=>`<button class="px-q" data-a="pxAsk" data-id="${p.id}" data-t="${esc(q)}"><span>${esc(q)}</span>${ic('send')}</button>`).join('')}</div>`:''}
     <div class="btns"><button class="btn primary px-cta" data-a="celChat" data-id="${p.id}">${ic('chat')}Say hello${p.first?' to '+esc(p.first):''}</button><button class="btn ghost px-later" data-a="celClose">Keep looking</button></div></div>`};

  /* ===== 10. Two journeys: her roots line and yours on a real map ===== */
  function journeys(p){const me=S.me;const o1=ll({country:p.oc,state:p.os}),d1=(p.lat!=null?[p.lat,p.lng]:null)||ll({country:p.country,state:p.state,city:p.cityName});
    const o2=ll({country:me.oc,state:me.os}),d2=(me.lat!=null?[me.lat,me.lng]:null)||ll({country:me.country,state:me.state,city:me.city});if(!o1||!d1||!o2||!d2)return '';
    const k=p.id.slice(0,6),K=['px1'+k,'px2'+k,'px3'+k,'px4'+k];const one=sameCity(p);const L=lt();const cityCol=L?'#14231C':'#FFFFFF';
    PM.C[K[0]]=[o1[1],o1[0],'',''];PM.C[K[1]]=[d1[1],d1[0],'',''];PM.C[K[2]]=[o2[1],o2[0],'',''];PM.C[K[3]]=[d2[1],d2[0],'',''];
    const sameRoots=km2(o1,o2)<30,myCity=(me.city||me.state||'').split(',')[0];
    const pins=[[K[0],`${fl(p.oc)} ${p.os||p.oc}${sameRoots?' · both':''}`,'#0E9F6E',0,1.9]];if(!sameRoots)pins.push([K[2],`${fl(me.oc)} ${me.os||me.oc}`,'#FFC93C',0,1.9]);
    pins.push([K[1],`${one?'':fl(p.country)+' '}${p.cityName}`,one?cityCol:'#0E9F6E']);if(!one)pins.push([K[3],`${fl(me.country)} ${myCity}`,'#FFC93C']);
    const vb=PM.fit(K,326/210,80);
    const svg=PM.draw({vb,theme:L?'light':'dark',fsr:.042,grid:false,label:`Map: ${p.os||p.oc} to ${p.cityName}, and ${me.os||me.oc} to ${myCity}`,arcs:[[K[0],K[1],'#0E9F6E'],[K[2],K[3],'#FFC93C']],pins});
    const a=km2(o1,d1),b=km2(o2,d2);
    const fact=(i,k,v)=>v?`<div class="px-fct">${ic(i)}<span><small>${k}</small><b>${esc(v)}</b></span></div>`:'';
    return `<section class="px-sec" id="px-roots"><div class="px-h"><h2>${one?'Two journeys, one city':'Two journeys'}</h2>${one?`<span class="px-chip r">${ic('pin')}${esc(p.cityName)}</span>`:`<span class="px-chip">${esc(distLabel(p))}</span>`}</div>
     <div class="px-map">${svg}</div>
     <div class="px-roads"><div class="px-road h"><small>${her(p)} road</small><b>${fmt(a)} km</b><span>${esc(p.os||p.oc)} → ${esc(p.cityName)}</span></div><div class="px-road y"><small>Your road</small><b>${fmt(b)} km</b><span>${esc(me.os||me.oc)} → ${esc(myCity)}</span></div></div>
     <div class="px-fcts">${fact('globe','Roots',[p.os,p.oc].filter(Boolean).join(', '))}${fact('talk','Mother tongue',p.t)}${fact('home','Lives',[p.cityName,p.res].filter(Boolean).join(' · '))}${fact('book','Studied',p.edu)}</div></section>`}

  /* ===== 11. Story: marriage plan path, family, nature stars ===== */
  function plan(p){if(!has(p,8))return '';const st=[['Now','Getting to know',1]];
    st.push([['Within a year','In 1–2 years','When it feels right'][p.ans[8]],'Marriage',1]);
    if(has(p,0))st.push(['Then',settle(p).replace(/^Open to /,'Open to '),0]);if(has(p,3))st.push(['Later',['Kids early','Kids, no rush','Kids: not sure'][p.ans[3]],0]);
    return `<section class="px-sec px-card2" id="px-plan"><div class="px-h"><h3>Marriage plan</h3>${same(p,8)?`<span class="px-chip r">Same as you</span>`:''}</div>
     <ol class="px-path" style="--n:${st.length}">${st.map(([a,b,on],i)=>`<li class="${on?'on':''}${i===1?' now':''}"><i></i><b>${esc(a)}</b><span>${esc(b)}</span></li>`).join('')}</ol></section>`}
  function family(p){const t=[];if(has(p,2))t.push(['home','Family home',SH[2][p.ans[2]],same(p,2)]);if(has(p,3))t.push(['kid','Children',['Early','No rush','Not sure'][p.ans[3]],same(p,3)]);
    if(has(p,4))t.push(['sun','Faith',SH[4][p.ans[4]],same(p,4)]);if(p.createdBy)t.push(['users','Profile by',String(p.createdBy),false]);if(!t.length)return '';
    return `<section class="px-sec px-card2" id="px-fam"><div class="px-h"><h3>Family</h3>${t.some(x=>x[3])?`<span class="px-lg">${ic('heart')}also you</span>`:''}</div>
     <div class="px-fam">${t.map(([i,k,v,s])=>`<div class="${s?'s':''}"><span class="px-ib">${ic(i)}</span><b>${esc(v)}</b><small>${k}</small></div>`).join('')}</div></section>`}
  function nature(p){const n=[];for(const i of [5,1,6,7])if(has(p,i))n.push([SH[i][p.ans[i]],same(p,i),QS[i].k]);
    if(p.diet)n.push([p.diet,!!S.me.diet&&dietGroup(S.me.diet)===dietGroup(p.diet),'Food']);if(n.length<2)return '';
    const pos=n.map((_,i)=>[i%2?172:16,22+i*27]);const H=pos[pos.length-1][1]+20;
    const line=pos.map((q,i)=>(i?'L':'M')+q[0]+' '+q[1]).join('');
    return `<section class="px-sec px-card2" id="px-nat"><div class="px-h"><h3>${her(p)} nature</h3>${n.some(x=>x[1])?`<span class="px-lg"><i></i>also you</span>`:''}</div>
     <svg class="px-stars" viewBox="0 0 326 ${H}" width="100%" aria-hidden="true"><path d="${line}" class="ln"/>${n.map(([t,s],i)=>{const [x,y]=pos[i];return `<g class="${s?'s':''}" style="animation-delay:${(i*.35).toFixed(2)}s"><circle cx="${x}" cy="${y}" r="${s?7:5}" class="st"/><text x="${x+14}" y="${y+4.5}">${esc(t)}</text></g>`}).join('')}</svg>
     <ul class="sr">${n.map(([t,s,k])=>`<li>${esc(k)}: ${esc(t)}${s?', same as you':''}</li>`).join('')}</ul></section>`}

  /* ===== 9. Profile top: full photo, glass buttons, floating glass card, 3 round tiles ===== */
  function famOk(p){return typeof V2==='function'&&V2()&&!locked(p)&&p.v&&p.v.id&&p.v.selfie&&p.v.roots&&p.v.lives}
  function tiles(p){const st=S.interests[p.id],sl=S.shortlist.includes(p.id),lk=locked(p)&&!(st==='received'&&p.gold);let fo=false;try{fo=famOk(p)&&famHas(p.id)}catch(e){}
    const t=(a,i,l,on,x)=>`<button class="px-tile${on?' on':''}" data-a="${a}" data-id="${p.id}"${x||''}>${ic(i)}<span>${l}</span></button>`;
    const first=lk?t('upgrade','crown','Gold',1,' data-r="profile"'):st==='mutual'?t('openchat','chat','Chat',1):st==='received'?t('accept','heart','Accept',1):st==='sent'?`<span class="px-tile done" role="status">${ic('check')}<span>Sent</span></span>`:t('interest','heart','Interest',1);
    const fam=famOk(p)?t('v2fam','users',fo?'Shared':'Family',fo,` aria-label="${fo?'Shared with your family. Tap to remove':'Share with family'}"`):`<button class="px-tile" data-a="pxGo" data-k="#px-fam,#px-chk">${ic('users')}<span>Family</span></button>`;
    return `<div class="px-tiles">${first}${fam}${t('shortlist','star',sl?'Saved':'Save',sl,` aria-pressed="${sl}"`)}</div>`}
  function top(p){const c=compat(p),nm=shown(p);const meta=[p.job,p.r,p.t].filter(Boolean).join(' · ');
    return `<div class="px-top"><div class="px-tph">${p.photos&&p.photos[0]?`<img class="px-bl" src="${esc(p.photos[0])}" alt="" aria-hidden="true">`:''}${avatar(p,'xl')}<span class="px-fade"></span></div>
     <div class="px-tb"><button class="px-cb" data-a="closeView" aria-label="Back">${ic('back')}</button><span class="grow"></span>
      ${famOk(p)?`<button class="px-cb" data-a="v2fam" data-id="${p.id}" aria-label="Share with family">${ic('share')}</button>`:''}<button class="px-cb" data-a="more" data-id="${p.id}" aria-label="More options">${ic('more')}</button></div>
     <div class="px-float"><div class="px-fh"><h2>${esc(nm)}, ${p.age}</h2>${fit(c.total)}</div>
      <div class="px-meta">${p.activeToday?`<span class="px-on"><i></i>Active today</span>`:''}<span>${ic('pin')}${esc(distLabel(p))}</span>${checksSeal(p)}</div>
      ${meta?`<p class="px-job">${esc(meta)}</p>`:''}${tiles(p)}
      <nav class="px-tabs" aria-label="Profile sections"><button data-a="pxGo" data-k="#px-roots">Journeys</button><button data-a="pxGo" data-k="#px-plan,#px-fam">Story</button><button data-a="pxGo" data-k="#px-nat">Nature</button><button data-a="pxGo" data-k="#px-chk">Checks</button></nav></div></div>`}
  const _pv=renderProfileView;renderProfileView=function(id,isMe){const h=_pv(id,isMe);if(!PX()||isMe)return h;const p=byId(id);if(!p)return h;
    const a=h.indexOf('<div class="pv-top">'),k='<div class="pad" style="display:grid;gap:14px;padding-block:16px 26px">',b=h.indexOf(k);if(a<0||b<a)return h;
    let rest=h.slice(b+k.length);const rl=`<div class="panel">${routeLine(p)}</div>`;rest=rest.replace(rl,'');const tp=timelinePill(p);if(tp)rest=rest.replace(tp,'');
    rest=rest.replace('<div class="panel"><h3>Checked by NeuMarry</h3>','<div class="panel" id="px-chk"><h3>Checked by NeuMarry</h3>');
    let j='';try{j=journeys(p)}catch(e){j=''}
    return h.slice(0,a).replace('class="view"','class="view px-view"')+top(p)+k.replace('class="pad"','class="pad px-body"')+j+plan(p)+family(p)+nature(p)+rest};

  /* real 'active today' from the server when it sends it; nothing shown otherwise */
  const _cfs=cardFromServer;cardFromServer=function(c){const o=_cfs(c);o.activeToday=c.active_today===true;return o};

  Object.assign(A,{
    pxGo(el){const sel=(el.dataset.k||'').split(',');for(const s of sel){const x=document.querySelector(s.trim());if(x){x.scrollIntoView({behavior:'smooth',block:'start'});return}}},
    pxAsk(el){const t=el.dataset.t;A.celChat(el);setTimeout(()=>{const i=document.getElementById('chat-in');if(i){i.value=t;i.focus()}},60)}});
})();

/* ---------- Roots Live (his ok 7 Nov 2026 04:26 "ok for all", mock handoff/mocks/roots-live, artifact DAiRLchNmUvmqK6xe971qJ) ----------
   A live 3D globe (MapLibre GL, free; map imagery Natural Earth relief from tiles.openfreemap.org, country shapes world-atlas 110m)
   on Welcome and at the top of Matches; introductions as glass cards led by each member's Roots Signature (a living pattern made
   from their id, never a face); 'What you share' rings + their local time on the profile; Bridge clocks in chat; signature on Me.
   Real data only. The map lives in ONE persistent element per place and is re-attached after every render (no reload, no flicker).
   No WebGL / offline: the old SVG map stays. Local tests: localStorage nm.rltest = '1' / '0'. Styles: 'Roots Live' block in app.css. */
function RL(){try{if(/127\.0\.0\.1/.test(CFG.url||'')){const t=localStorage.getItem('nm.rltest');if(t)return t==='1'}return PX()}catch(e){return false}}
const RLX=(function(){
  const lt=()=>document.documentElement.classList.contains('gl-lt');
  let loading=null,CJ=null,GL=null;
  function webgl(){if(GL!==null)return GL;try{const c=document.createElement('canvas');GL=!!(c.getContext('webgl2')||c.getContext('webgl'))}catch(e){GL=false}return GL}
  function load(){if(window.maplibregl)return Promise.resolve();if(loading)return loading;
    loading=new Promise((res,rej)=>{const l=document.createElement('link');l.rel='stylesheet';l.href='js/vendor/maplibre-gl.css';document.head.appendChild(l);
      const s=document.createElement('script');s.src='js/vendor/maplibre-gl.js';s.onload=res;s.onerror=()=>{loading=null;rej()};document.head.appendChild(s)});return loading}
  function data(){return CJ?Promise.resolve(CJ):fetch('js/vendor/countries110.json').then(r=>r.json()).then(j=>CJ=j)}
  const ALIAS={'United States':'United States of America','Dominican Republic':'Dominican Rep.','Bosnia and Herzegovina':'Bosnia and Herz.','Czech Republic':'Czechia','Ivory Coast':"Côte d'Ivoire",'DR Congo':'Dem. Rep. Congo','Korea':'South Korea'};
  const nm=n=>ALIAS[n]||n;
  function gc(a,b,n=80){const r=x=>x*Math.PI/180,d=x=>x*180/Math.PI;const[l1,p1]=a.map(r),[l2,p2]=b.map(r);
    const D=2*Math.asin(Math.sqrt(Math.sin((p2-p1)/2)**2+Math.cos(p1)*Math.cos(p2)*Math.sin((l2-l1)/2)**2));if(!D)return [a,b];const out=[];
    for(let i=0;i<=n;i++){const f=i/n,A=Math.sin((1-f)*D)/Math.sin(D),B=Math.sin(f*D)/Math.sin(D);const x=A*Math.cos(p1)*Math.cos(l1)+B*Math.cos(p2)*Math.cos(l2),y=A*Math.cos(p1)*Math.sin(l1)+B*Math.cos(p2)*Math.sin(l2),z=A*Math.sin(p1)+B*Math.sin(p2);
      let lon=d(Math.atan2(y,x));if(out.length){const pl=out[out.length-1][0];while(lon-pl>180)lon-=360;while(lon-pl<-180)lon+=360}out.push([lon,d(Math.atan2(z,Math.sqrt(x*x+y*y)))])}return out}
  function style(dk){const L=dk?false:lt();return {version:8,projection:{type:'globe'},sky:{'atmosphere-blend':['interpolate',['linear'],['zoom'],0,1,5,.6,7,0]},
    sources:{relief:{type:'raster',tiles:['https://tiles.openfreemap.org/natural_earth/ne2sr/{z}/{x}/{y}.png'],tileSize:512,maxzoom:6,attribution:'© Natural Earth · OpenFreeMap'},
      cc:{type:'geojson',data:CJ.c},bb:{type:'geojson',data:CJ.b},arcs:{type:'geojson',data:{type:'FeatureCollection',features:[]}},com:{type:'geojson',data:{type:'FeatureCollection',features:[]}}},
    layers:[{id:'bg',type:'background',paint:{'background-color':L?'#CFE9DE':'#0A1410'}},
      {id:'relief',type:'raster',source:'relief',paint:L?{'raster-saturation':.1,'raster-contrast':.08,'raster-hue-rotate':-22}:{'raster-saturation':-.3,'raster-brightness-max':.45,'raster-contrast':.15,'raster-hue-rotate':-18}},
      {id:'land',type:'fill',source:'cc',paint:{'fill-color':L?'#9FDCBE':'#3E6B55','fill-opacity':L?.32:.18}},
      {id:'hl',type:'fill',source:'cc',filter:['in',['get','n'],['literal',[]]],paint:{'fill-color':['coalesce',['get','hc'],L?'#FFD23F':'#FFD95C'],'fill-opacity':L?.5:.4}},
      {id:'hl2',type:'fill',source:'cc',filter:['in',['get','n'],['literal',[]]],paint:{'fill-color':L?'#2FBF86':'#5FD3A2','fill-opacity':L?.4:.32}},
      {id:'bd',type:'line',source:'bb',paint:{'line-color':L?'rgba(255,255,255,.85)':'rgba(200,255,230,.16)','line-width':['interpolate',['linear'],['zoom'],0,.4,4,1]}},
      {id:'arcG',type:'line',source:'arcs',layout:{'line-cap':'round'},paint:{'line-color':['get','c'],'line-width':7,'line-blur':6,'line-opacity':.45}},
      {id:'arc',type:'line',source:'arcs',layout:{'line-cap':'round'},paint:{'line-color':['get','c'],'line-width':2,'line-opacity':.95}},
      {id:'comG',type:'circle',source:'com',paint:{'circle-radius':10,'circle-color':['get','c'],'circle-blur':1,'circle-opacity':.7}},
      {id:'com',type:'circle',source:'com',paint:{'circle-radius':3.5,'circle-color':'#FFFFFF','circle-stroke-color':['get','c'],'circle-stroke-width':2}}]}}
  const live={};/* key -> {el,map,sig,theme,markers,anim,touched} */
  const reduce=()=>{try{return matchMedia('(prefers-reduced-motion: reduce)').matches}catch(e){return false}};
  function ang(a,b){const r=x=>x*Math.PI/180;return Math.acos(Math.min(1,Math.sin(r(a[1]))*Math.sin(r(b[1]))+Math.cos(r(a[1]))*Math.cos(r(b[1]))*Math.cos(r(a[0]-b[0]))))*180/Math.PI}
  function apply(E,o){const m=E.map;const L=o.dark?false:lt();const g=L?'#0E9F6E':'#5FD3A2',y=L?'#D9A800':'#FFD95C';
    const fs=(o.arcs||[]).filter(a=>a[0]&&a[1]).map(([a,b,c],i)=>({type:'Feature',properties:{c:c==='y'?y:g},geometry:{type:'LineString',coordinates:gc(a,b)}}));
    m.getSource('arcs').setData({type:'FeatureCollection',features:fs});
    m.setFilter('hl',['in',['get','n'],['literal',(o.roots||[]).map(nm)]]);m.setFilter('hl2',['in',['get','n'],['literal',(o.lives||[]).map(nm)]]);
    E.markers.forEach(x=>x.remove());E.markers=(o.pins||[]).filter(p=>p.ll).map(p=>{const el=document.createElement('button');el.type='button';el.className='rl-mk'+(p.cls?' '+p.cls:'');el.innerHTML=p.html;
      if(p.a){el.dataset.a=p.a;if(p.k)el.dataset.k=p.k;if(p.id)el.dataset.id=p.id}
      el.addEventListener('click',ev=>{E.touched=true;if(p.fly)m.flyTo({center:p.ll,zoom:Math.max(m.getZoom(),2.2),duration:1400});if(p.go)p.go(ev)});
      return new maplibregl.Marker({element:el,anchor:p.anchor||'bottom'}).setLngLat(p.ll).addTo(m)});
    hide(E);cancelAnimationFrame(E.anim);if(reduce())return;
    let t0=performance.now();const step=now=>{if(!E.map)return;if(!E.el.isConnected||document.hidden||(E.fr=(E.fr||0)+1)%2){E.anim=requestAnimationFrame(step);return}const f=((now-t0)/2600)%1;
      m.getSource('com').setData({type:'FeatureCollection',features:fs.map((F,i)=>{const cs=F.geometry.coordinates;return{type:'Feature',properties:{c:F.properties.c},geometry:{type:'Point',coordinates:cs[Math.floor(((f+i*.17)%1)*(cs.length-1))]}}})});
      if(o.spin&&!E.touched&&!m.isMoving()&&E.el.isConnected){const c=m.getCenter();m.setCenter([c.lng+o.spin,c.lat])}E.anim=requestAnimationFrame(step)};E.anim=requestAnimationFrame(step)}
  function hide(E){if(!E.map)return;const c=E.map.getCenter();const taken=E.markers.filter(x=>x.getElement().classList.contains('open')).map(x=>E.map.project(x.getLngLat()));E.markers.forEach(x=>{const l=x.getLngLat(),el=x.getElement(),f=el.classList.contains('p15f');let v=ang([c.lng,c.lat],[l.lng,l.lat])<=(f?64:72);
    if(v&&f&&!el.classList.contains('open')){const q=E.map.project(l),H=E.map.getContainer().clientHeight;if(q.y<52||q.y>H-62||taken.some(t=>Math.abs(t.x-q.x)<27&&Math.abs(t.y-q.y)<27))v=false;else taken.push(q)}el.style.visibility=v?'visible':'hidden'})}
  function kill(k){const E=live[k];if(!E)return;cancelAnimationFrame(E.anim);try{E.map&&E.map.remove()}catch(e){}delete live[k]}
  /* place the persistent map for `key` into every .rl-slot[data-rl=key] after a render */
  function attach(){if(!webgl())return;const here=new Set([...document.querySelectorAll('.rl-slot[data-rl]')].map(x=>x.dataset.rl));Object.keys(live).forEach(k=>{if(!here.has(k)&&k==='welcome')kill(k)});
    document.querySelectorAll('.rl-slot[data-rl]').forEach(slot=>{const k=slot.dataset.rl,o=OPTS[k]&&OPTS[k]();if(!o)return;
      const theme=o.dark?'d':lt()?'l':'d';let E=live[k];if(E&&E.theme!==theme){kill(k);E=null}
      if(!E){E=live[k]={el:document.createElement('div'),markers:[],theme,sig:'',touched:false};E.el.className='rl-map';
        Promise.all([load(),data()]).then(()=>{if(live[k]!==E)return;
          E.map=new maplibregl.Map({container:E.el,style:style(o.dark),center:o.center,zoom:o.zoom,attributionControl:k==='welcome'?false:{compact:true},dragRotate:false,pitchWithRotate:false,touchPitch:false,fadeDuration:0,cooperativeGestures:false});
          if(o.padB)E.map.setPadding({top:40,bottom:o.padB,left:0,right:0});['mousedown','touchstart','wheel'].forEach(e=>E.map.on(e,()=>E.touched=true));E.map.on('move',()=>hide(E));
          E.map.on('load',()=>{E.ready=true;E.sig='';sync(k)})}).catch(()=>{slot.classList.add('rl-off')})}
      if(E.el.parentNode!==slot){slot.appendChild(E.el);if(E.map){E.map.resize();if(o.fit&&!E.touched)E.map.setZoom(o.fit())}}
      slot.classList.add('rl-on');if(E.ready)sync(k)})}
  function sync(k){const E=live[k];if(!E||!E.ready)return;const o=OPTS[k]();const s=JSON.stringify([o.arcs,o.roots,o.lives,(o.pins||[]).map(p=>[p.ll,p.html,p.cls])]);if(s===E.sig)return;E.sig=s;apply(E,o)}
  const OPTS={};
  return {attach,OPTS,kill,live,webgl,fly:(k,ll,z)=>{const E=live[k];if(E&&E.map){E.touched=true;E.map.flyTo({center:ll,zoom:z||2.4,duration:1400})}}};
})();
/* ---------- Roots Signature: a living pattern from a member's id (shown where a face would be; never a face) ---------- */
function rlSig(seed,ini,layers){let h=2166136261;for(const c of String(seed)){h^=c.charCodeAt(0);h=Math.imul(h,16777619)}let a=h>>>0;
  const R=()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};
  const d=!document.documentElement.classList.contains('gl-lt');const id='rs'+(h%1e7)+(layers||4);
  const pal=d?[['#7EE7BC','#FFE27A'],['#B8F08A','#5FD3A2'],['#FFE27A','#9FE6C6'],['#5FD3A2','#D4F2B6']]:[['#0E9F6E','#E8B800'],['#5DBB2E','#0E9F6E'],['#E8B800','#3CC28C'],['#0E7A55','#9BD86A']];
  let defs='',lay='';const n=layers||4;
  for(let L=0;L<n;L++){const k=3+Math.floor(R()*6),ph=R()*6.28,A=26+L*7+R()*6,B=10+R()*14,C=R()*.35;const p=pal[L%4];let path='';
    for(let i=0;i<=200;i++){const t=i/200*Math.PI*2;const r=A+B*Math.cos(k*t+ph)+C*B*Math.cos((k*2+1)*t);path+=(i?'L':'M')+(100+r*Math.cos(t)).toFixed(1)+' '+(100+r*Math.sin(t)).toFixed(1)}
    defs+=`<linearGradient id="${id}g${L}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${p[0]}"/><stop offset="1" stop-color="${p[1]}"/></linearGradient>`;
    lay+=`<g class="rl-r" style="animation-duration:${40+L*18}s;animation-direction:${L%2?'reverse':'normal'}"><path d="${path}Z" fill="url(#${id}g${L})" fill-opacity="${d?.10:.13}" stroke="url(#${id}g${L})" stroke-width="${L===n-1?1.6:1.1}"/></g>`}
  const dots=Array.from({length:16},(_,i)=>{const t=i/16*6.28,r=84+R()*8;return `<circle cx="${(100+r*Math.cos(t)).toFixed(1)}" cy="${(100+r*Math.sin(t)).toFixed(1)}" r="${(1+R()*1.6).toFixed(1)}" fill="${pal[i%4][0]}" opacity=".7"/>`}).join('');
  return `<svg class="rl-sig" viewBox="0 0 200 200" aria-hidden="true"><defs>${defs}</defs><g class="rl-br">${lay}<g class="rl-r" style="animation-duration:120s">${dots}</g></g>${ini?`<circle cx="100" cy="100" r="19" fill="${d?'#13201A':'#FFFFFF'}" stroke="${d?'rgba(255,255,255,.18)':'#E6F3EC'}" stroke-width="2"/><text x="100" y="105.5" text-anchor="middle" font-weight="800" font-size="14" fill="${d?'#E2FFF2':'#0B4D36'}">${esc(ini)}</text>`:''}</svg>`}
(function(){
  const fl=n=>{try{return flag(n)||''}catch(e){return ''}};
  const ll=o=>{try{const c=coordsOf(o);return c?[c[1],c[0]]:null}catch(e){return null}};
  const tzOf=p=>(typeof TZCITY!=='undefined'&&TZCITY[p.cityName||p.city])||(typeof TZC!=='undefined'&&TZC[p.country])||null;
  const hhmm=tz=>{try{return fmtTime(new Date(),tz)}catch(e){return ''}};
  const meRoot=()=>{const me=S.me||{};return ll({country:me.oc,state:me.os})};
  const meHome=()=>{const me=S.me||{};return (me.lat!=null?[me.lng,me.lat]:null)||ll({country:me.country,state:me.state,city:me.city})};
  const pHome=p=>(p.lat!=null?[p.lng,p.lat]:null)||ll({country:p.country,state:p.state,city:p.cityName});

  /* ===== Welcome: live globe instead of the flat map ===== */
  const W=[[[3.38,6.52],[-79.38,43.65],'Nigeria','Canada'],[[129.07,35.18],[151.21,-33.87],'South Korea','Australia'],[[-103.35,20.66],[-3.7,40.42],'Mexico','Spain'],
    [[72.57,23.02],[-0.12,51.5],'India','United Kingdom'],[[120.98,14.6],[55.27,25.2],'Philippines','United Arab Emirates'],[[35.5,33.89],[-46.63,-23.55],'Lebanon','Brazil']];
  RLX.OPTS.welcome=()=>({dark:!!document.querySelector('.c3w')&&!document.documentElement.classList.contains('gl-lt'),center:[60,20],zoom:RLX.fitWel(),fit:RLX.fitWel,spin:.035,arcs:W.map((w,i)=>[w[0],w[1],i%2?'y':'g']),roots:W.filter((_,i)=>i%2).map(w=>w[2]),lives:W.filter((_,i)=>!(i%2)).map(w=>w[3]),pins:[]});
  RLX.fitWel=function(){/* zoom so the WHOLE sphere fits the box above the caption (his rule: globe whole, never cut) */
    const e=document.querySelector('.rl-wel');const w=e&&e.clientWidth||Math.min(innerWidth,500),h=e&&e.clientHeight||330;
    const cap=e&&e.closest('.c3map')&&e.closest('.c3map').querySelector('.c3dist');const ch=cap?cap.offsetHeight+6:0;
    const D=Math.max(120,Math.min(w*.9,(h-ch)*.92));if(e){e.style.setProperty("--ch",ch+"px");e.style.setProperty("--gd",D+"px");e.style.setProperty('--gcy',((h-ch)/2)+'px')}
    if(e&&!e._ro&&window.ResizeObserver){let lh=h;e._ro=new ResizeObserver(()=>{if(Math.abs(e.clientHeight-lh)<4)return;lh=e.clientHeight;clearTimeout(e._rt);e._rt=setTimeout(()=>{try{const E=RLX.live&&RLX.live.welcome;const z=RLX.fitWel();if(E&&E.map&&!E.touched)E.map.setZoom(z)}catch(_){}},120)});e._ro.observe(e)}
    return Math.log2(Math.PI*D/512)-RLX.GZ};RLX.GZ=-0.176;
  addEventListener('resize',()=>{clearTimeout(RLX._rt);RLX._rt=setTimeout(()=>{try{const E=RLX.live&&RLX.live.welcome;if(E&&E.map&&!E.touched)E.map.setZoom(RLX.fitWel())}catch(_){}},150)});
  const _c3m=c3map;c3map=function(){return RL()&&RLX.webgl()?`<div class="rl-slot rl-wel" data-rl="welcome"><div class="rl-fb">${_c3m()}</div></div>`:_c3m()};

  /* ===== Matches: globe tile + introductions as signature cards ===== */
  RLX.OPTS.home=()=>{const it=(RLX._it||[]);const r=meRoot(),me=S.me||{};
    const pins=[];if(r)pins.push({ll:r,html:`<i></i>${esc(me.os||me.oc||'')} · your roots`,cls:'root'});
    const h0=meHome();const gs=atlasGroups();if(h0&&!gs.some(g=>g.city===me.city))pins.push({ll:h0,html:`<i></i>You · ${esc(me.city||me.country||'')}`,cls:'me'});
    gs.forEach(g=>{pins.push({ll:g.ll,html:`<i></i>${esc(g.city)} <b>${g.n}</b>${g.city===me.city?' · you':''}`,cls:S.rlCity===g.key?'on sel':'on',fly:true,go:()=>{S.rlCity=g.key;S.rlF=S.rlF||{};render()}})});
    const arcs=it.map(p=>[ll({country:p.oc,state:p.os}),pHome(p),'g']).concat(r&&h0?[[r,h0,'y']]:[]);
    const c=r||h0||[20,20];return {padB:it.length?150:0,center:[c[0],Math.max(-20,Math.min(40,c[1]))],zoom:innerWidth<500?1.15:1.5,spin:-.03,arcs,roots:[me.oc].concat(it.map(p=>p.oc)).filter(Boolean),lives:[me.country].concat(it.map(p=>p.country)).filter(Boolean),pins}};
  function atlasGroups(){const me=S.me||{};const all=(RLX._all||[]).filter(p=>!S.blocked.includes(p.id));const same=all.filter(p=>p.oc&&p.oc===me.oc);const L=same.length?same:all;const m={};
    L.forEach(p=>{const k=(p.cityName||'')+'|'+(p.country||'');if(!p.cityName)return;(m[k]=m[k]||{key:k,city:p.cityName,country:p.country,list:[],ll:pHome(p)}).list.push(p)});
    return Object.values(m).filter(g=>g.ll).map(g=>Object.assign(g,{n:g.list.length})).sort((a,b)=>b.n-a.n).slice(0,14)}
  RLX.atlasGroups=atlasGroups;
  const famGood=id=>{try{const x=(FAM.list||[]).find(y=>y.id===id);return !!(x&&(x.reactions||[]).some(r=>r.reaction==='good'))}catch(e){return false}};
  const why=(p,n)=>{try{return whyChips(p).slice(0,n).map(w=>w.t)}catch(e){return []}};
  function acts(p,lk){const st=S.interests[p.id],sl=S.shortlist.includes(p.id);
    const save=`<button class="rl-b" data-a="shortlist" data-id="${p.id}" aria-label="${sl?'Remove from saved':'Save for later'}" aria-pressed="${sl}"${sl?' data-on="1"':''}>${ic('star')}</button>`;
    if(lk)return `<button class="btn gold rl-wide" data-a="upgrade" data-r="profile" data-id="${p.id}">${ic('crown')}See profile with Gold</button>`;
    if(st==='mutual')return `${save}<button class="rl-go" data-a="openchat" data-id="${p.id}">${ic('chat')}Open the Bridge</button>`;
    if(st==='received')return `<button class="rl-b" data-a="decline" data-id="${p.id}" aria-label="Not now">${ic('x')}</button><button class="rl-go" data-a="accept" data-id="${p.id}">${ic('heart')}${(()=>{try{return v2noteFrom(p.id)}catch(e){return ''}})()?'Say yes & answer':'Say yes'}</button>${save}`;
    if(st==='sent')return `<span class="rl-sent">${ic('check')}Interest sent</span>${save}`;
    return `<button class="rl-b" data-a="pass" data-id="${p.id}" aria-label="Not now">${ic('x')}</button><button class="rl-go" data-a="interest" data-id="${p.id}">${ic('heart')}I'm interested</button>${save}`}
  function card(p){const c=compat(p),st=S.interests[p.id],lk=locked(p)&&!(st==='received'&&p.gold);const tz=tzOf(p);
    return `<article class="rl-card"><button class="rl-top" data-a="open" data-id="${p.id}" aria-label="${lk?`See this ${c.total}% match with Gold`:`Open ${esc(shown(p))}'s profile`}">
      <span class="rl-sgw">${rlSig(p.id,'',4)}${st==='received'?`<span class="rl-likes">${ic('heart')}Likes you</span>`:famGood(p.id)?`<span class="rl-likes y">${ic('users')}Family likes</span>`:''}</span>
      <span class="rl-who"><b>${esc(shown(p))}, ${p.age}</b><small>${fl(p.oc)} ${esc(p.os||p.oc||'')} → ${fl(p.country)} ${esc(p.cityName||'')}</small>
       ${tz?`<small>${ic('clock')}${esc(hhmm(tz))} there</small>`:''}${why(p,2).map(w=>`<small class="rl-why">${ic('check')}${esc(w)}</small>`).join('')}<span class="rl-fit">${c.total}% shared</span></span></button>
     <div class="rl-acts">${acts(p,lk)}</div></article>`}
  const _ib3=introBlock;introBlock=function(list){const prev=_ib3(list);if(!RL())return prev;const it=introsToday(list);RLX._it=it;RLX._all=list||[];
    const a=prev.indexOf('<div class="pxb">'),b=prev.lastIndexOf('<div class="pxb">');const top=a>=0&&a!==b?prev.slice(a,prev.indexOf('<div class="sec-h px-sh">')>0?prev.indexOf('<div class="sec-h px-sh">'):b):'';const bot=b>=0?prev.slice(b):'';
    const me=S.me||{};const globe=RLX.webgl()?`<div class="rl-tile rl-home"><div class="rl-slot" data-rl="home"></div><div class="rl-cap"><p class="eb">${esc(me.oc||'')} roots · worldwide</p><b>${it.length?`${it.length} introduction${it.length>1?'s':''} today`:'Your roots line'}</b></div></div>`:'';
    let city=null;if(S.rlCity){city=atlasGroups().find(g=>g.key===S.rlCity)||null;if(!city)S.rlCity=null}
    if(city){const F=S.rlF||{},me2=S.me||{};let L=city.list.slice();if(F.plan)L=L.filter(p=>me2.ans&&p.ans&&p.ans[8]===me2.ans[8]);if(F.ver)L=L.filter(p=>checksDone(p)===5);if(F.fam)L=L.filter(p=>me2.ans&&p.ans&&p.ans[2]===me2.ans[2]);
      const chip=(k,l)=>`<button class="rl-chip${F[k]?' on':''}" data-a="rlF" data-k="${k}">${l}</button>`;
      const sheet=`<div class="rl-sheet${globe?' over':''}"><div class="sec-h rl-sh"><h2>${esc(city.city)} · ${city.n}</h2><button class="rl-chip" data-a="rlCity">${ic('x')}Today</button></div>
       <div class="rl-chips">${chip('plan','Same marriage plan')}${chip('fam','Same family plan')}${chip('ver','Fully verified')}</div>
       ${L.length?`<div class="rl-cards">${L.map(card).join('')}</div>`:`<p class="rl-none">No one here with these filters yet. Try fewer filters.</p>`}</div>`;
      return globe+sheet+top+bot}
    const cards=it.length?`<div class="rl-sheet${globe?' over':''}"><div class="sec-h rl-sh"><h2>Today for you</h2><small>${ic('clock')}New in <span data-until="${midnight()}">${fmtLeft(midnight()-Date.now())}</span></small></div><div class="rl-cards">${it.map(card).join('')}</div></div>`:'';
    return globe+cards+top+bot};

  A.rlCity=function(){S.rlCity=null;render();try{const g=RLX.OPTS.home();RLX.fly('home',g.center,innerWidth<500?1.15:1.5)}catch(e){}};
  /* ===== Question-first: an interest always starts with a question from their story ===== */
  const _int=A.interest;A.interest=async function(el){const id=el.dataset.id;if(!RL()||!id)return _int(el);const note=(S.v2note||{})[id];
    if(!note){S.rlAsk=id;render();return}S.rlAsk=null;return _int(el)};
  A.rlAskPick=function(el){S.v2note=S.v2note||{};S.v2note[el.dataset.id]=el.dataset.v;render()};
  A.rlAskClose=function(){S.rlAsk=null;render()};
  function askSheet(){const p=byId(S.rlAsk);if(!p){S.rlAsk=null;return ''}let Q=[];try{Q=v2replyOpts(p).slice(0,3)}catch(e){}
    Q=Q.concat([`What made you choose ${p.cityName}?`,'What does a family weekend look like for you?']).filter((x,i,a)=>x&&a.indexOf(x)===i).slice(0,5);const cur=(S.v2note||{})[p.id]||'';
    return `<div class="rl-askw" role="dialog" aria-label="Start with a question"><div class="rl-ask"><div class="rl-askh"><span class="rl-sgw" style="width:64px;height:64px">${rlSig(p.id,'',3)}</span><div><p class="eb">No blank likes</p><b>Start with a question from ${esc(p.first||shown(p))}'s story</b></div><button class="rl-b" data-a="rlAskClose" aria-label="Close">${ic('x')}</button></div>
     <p class="rl-askp">When ${esc(p.first||'they')} says yes, the Bridge opens with your question on top.</p>
     <div class="rl-qs">${Q.map(q=>`<button class="rl-q${cur===q?' on':''}" data-a="rlAskPick" data-id="${p.id}" data-v="${esc(q)}"><span>${esc(q)}</span><i></i></button>`).join('')}</div>
     <button class="rl-go" data-a="interest" data-id="${p.id}"${cur?'':' disabled'}>${ic('send')}Send question</button></div></div>`}
  A.rlPage=function(el){const pg=el.parentNode.nextElementSibling;if(pg){const c=pg.children[+el.dataset.k];pg.scrollTo({left:c.offsetLeft-pg.offsetLeft,behavior:'smooth'})}};
  A.rlF=function(el){S.rlF=S.rlF||{};S.rlF[el.dataset.k]=!S.rlF[el.dataset.k];render()};
  /* ===== Profile: 'What you share' rings + their local time ===== */
  const _pv=renderProfileView;renderProfileView=function(id,isMe){const html=_pv(id,isMe);if(!RL()||isMe)return html;const p=byId(id);if(!p)return html;
    let c;try{c=compat(p)}catch(e){return html}const tz=tzOf(p);const cl=v=>{v=+v||0;if(v<=1)v*=100;return Math.max(0,Math.min(100,Math.round(v)))};
    const ring=[['Values',c.values],['Life plans',c.life],['What you both want',c.pref]].filter(x=>typeof x[1]==='number').map(([l,v])=>({l,v:cl(v)}));if(!ring.length)ring.push({l:'Overall',v:cl(c.total)});
    const col=['#0E9F6E','#E2B500','#7CCB3E'];
    const blk=`<section class="rl-share"><div class="rl-rings"><svg viewBox="0 0 120 120" aria-hidden="true">${ring.map((r,i)=>{const R=50-i*13;return `<circle cx="60" cy="60" r="${R}" fill="none" stroke="${col[i]}" stroke-opacity=".15" stroke-width="9"/><circle class="rl-ring" cx="60" cy="60" r="${R}" fill="none" stroke="${col[i]}" stroke-width="9" stroke-linecap="round" pathLength="1" style="--o:${(1-r.v/100).toFixed(2)};animation-delay:${.15+i*.15}s" transform="rotate(-90 60 60)"/>`}).join('')}</svg>
      <div class="rl-rl"><p class="eb">What you share</p>${ring.map((r,i)=>`<div><i style="background:${col[i]}"></i>${esc(r.l)}<span>${r.v}%</span></div>`).join('')}</div></div>
      ${tz?`<p class="rl-tz">${ic('clock')}${esc(hhmm(tz))} in ${esc(p.cityName||p.country)} now</p>`:''}</section>`;
    const wy=why(p,3);const wblk=wy.length?`<section class="rl-whyb"><p class="eb">Why you were introduced</p>${wy.map(w=>`<div>${ic('check')}${esc(w)}</div>`).join('')}</section>`:'';
    const fblk=famGood(id)?`<div class="rl-fam rl-famp"><span class="rl-fi">${ic('users')}</span><div class="rl-ft"><b>Your family gave a 👍</b><small>They read the safe facts you shared. Only you see this.</small></div></div>`:'';
    const A_=i=>{try{return p.ans&&p.ans[i]!=null&&QS[i].o[p.ans[i]]?QS[i].o[p.ans[i]]:''}catch(e){return ''}};
    const CH=[['Roots',[['Grew up',[p.os,p.oc].filter(Boolean).join(', ')],['Mother tongue',p.t],['Faith',p.r]]],
      ['City',[['Lives in',[p.cityName,p.country].filter(Boolean).join(', ')],['Work',p.job],['Studied',p.edu],['Settling',A_(0)]]],
      ['Marriage',[['When',A_(8)],['Careers',A_(1)],['Children',A_(3)]]],
      ['Family',[['Family home',A_(2)],['Faith at home',A_(4)]]],
      ['Nature',[['Weekends',A_(5)],['Money',A_(6)],['Disagreements',A_(7)]]]].map(([t,r])=>[t,r.filter(x=>x[1])]).filter(c=>c[1].length);
    const book=CH.length?`<section class="rl-book"><p class="eb">Life Book · swipe the pages</p><div class="rl-tabs">${CH.map((c,i)=>`<button class="rl-chip${i?'':' on'}" data-a="rlPage" data-k="${i}">${String(i+1).padStart(2,'0')} · ${c[0]}</button>`).join('')}</div>
      <div class="rl-pages" onscroll="var i=Math.round(this.scrollLeft/(this.children[0].offsetWidth+10));[].forEach.call(this.previousElementSibling.children,function(c,j){c.classList.toggle('on',i===j)})">${CH.map((c,i)=>`<div class="rl-page"><span class="rl-no">${String(i+1).padStart(2,'0')}</span><b class="rl-pt">${c[0]}</b>${c[1].map(([k,v])=>`<div class="rl-kv"><span>${k}</span><b>${esc(v)}</b></div>`).join('')}</div>`).join('')}</div></section>`:'';
    let h2=html,vb='';const vm=h2.match(/<div class="panel v2"><p class="v2lb"[\s\S]*?<\/audio><\/div>/);if(vm){vb=vm[0].replace('class="panel v2"','class="panel v2 rl-voice"');h2=h2.replace(vm[0],'')}
    const k=h2.indexOf('<section');if(!(S.v2note||{})[id])h2=h2.replace(/(data-a="interest"[^>]*>[\s\S]{0,400}?)Send interest</g,'$1Ask a question<');return k>0?h2.slice(0,k)+vb+wblk+fblk+blk+book+h2.slice(k):h2};

  /* ===== Bridge: both local times on top of the chat ===== */
  const _cv=renderChatView;renderChatView=function(id){const html=_cv(id);if(!RL())return html;const p=byId(id),me=S.me||{};if(!p)return html;
    const tz1=(typeof TZCITY!=='undefined'&&TZCITY[me.city])||(typeof TZC!=='undefined'&&TZC[me.country])||undefined,tz2=tzOf(p)||undefined;
    const bar=`<div class="rl-bridge"><div><b>${esc(hhmm(tz1))}</b><small>You · ${esc(me.city||me.country||'')}</small></div><span aria-hidden="true">${ic('globe')}</span><div class="r"><b>${esc(hhmm(tz2))}</b><small>${esc(p.first||shown(p))} · ${esc(p.cityName||p.country||'')}</small></div></div>`;
    let fam='';try{famLoad();const on=famHas(id);const tz3=(typeof TZC!=='undefined'&&TZC[me.oc])||null;
      fam=`<div class="rl-fam"><span class="rl-fi">${ic('users')}</span><div class="rl-ft"><b>Family Room</b><small>${on?'Shared with your family. They see safe facts and react, never photos or contacts.':'Let your family read along: safe facts only, never photos or contacts.'}</small>${tz3?`<small class="rl-ftz">${esc(me.os||me.oc)} · ${esc(hhmm(tz3))}</small>`:''}</div>
       <button class="rl-fb2${on?' on':''}" data-a="v2fam" data-id="${id}">${on?ic('check')+'Shared':'Invite family'}</button></div>`}catch(e){}
    const k=html.indexOf('id="chat-scroll"');if(k<0)return html;const s=html.lastIndexOf('<',k);return html.slice(0,s)+bar+fam+html.slice(s)};

  /* ===== Me: your Roots Signature ===== */
  const _me=renderMe;renderMe=function(){let html=_me();if(!RL())return html;const me=S.me||{};
    const t=`<div class="rl-mesig"><span class="rl-sgw">${rlSig(me.id||me.name||'me',initials(me.name)||'',4)}</span><div><p class="eb">Your Roots Signature</p><b>${esc(me.os||me.oc||'')} → ${esc(me.city||me.country||'')}</b><small>A pattern only you have. It shows on your introduction card.</small></div></div>`;
    html=html.replace(/<button class="likes" data-a="openAdmin">[\s\S]*?<\/button>/,'');const ad=me.isAdmin?`<button class="rl-admin" data-a="openAdmin"><span>${ic('shield')}</span><div><b>Admin panel</b><small>Members, reports, robots</small></div><i>›</i></button>`:'';
    const k=html.indexOf('<div class="scroll');if(k<0)return html;const e=html.indexOf('>',k)+1;return html.slice(0,e)+ad+t+html.slice(e)};


  /* ===== Sign-up: your Roots Signature grows with every part (zero typing; seed = your own answers) ===== */
  const _vh=v2head;v2head=function(sub){const h=_vh(sub);if(!RL())return h;const d=S.draft||{};const [pp]=V2PART[v2key()]||[1];
    const seed=[d.name,d.oc,d.os,d.country,d.city,(d.ans||[]).join('')].join('|');
    return h.replace('<div class="grow">',`<span class="rl-hsig" title="Your Roots Signature">${rlSig(seed,'',Math.max(1,Math.min(4,pp)))}</span><div class="grow">`)};

  /* ===== Events: a globe tile with every upcoming event (tap a pin = open that event) ===== */
  RLX.OPTS.events=()=>{let evs=[];try{evs=events().filter(e=>e.date>Date.now()-864e5)}catch(e){}const me=S.me||{};const h0=meHome();
    const pins=evs.slice(0,12).map(e=>({ll:ll({country:e.country,city:e.city}),html:`<i></i>${esc(e.city||'')}`,cls:'on',a:'openEvent',id:e.id}));
    if(h0)pins.unshift({ll:h0,html:`<i></i>You`,cls:'me'});const c=h0||(pins[0]&&pins[0].ll)||[0,20];
    return {center:[c[0],Math.max(-20,Math.min(45,c[1]))],zoom:innerWidth<500?0.55:1.1,spin:0,arcs:[],roots:[],lives:[me.country].filter(Boolean),pins}};
  const _re=renderEvents;renderEvents=function(){const h=_re();if(!RL()||!RLX.webgl())return h;const k=h.indexOf('<div class="main-inner pad">');if(k<0)return h;const e=k+'<div class="main-inner pad">'.length;
    let n=0;try{n=events().filter(x=>x.date>Date.now()).length}catch(x){}
    return h.slice(0,e)+`<div class="rl-tile rl-evt"><div class="rl-slot" data-rl="events"></div><div class="rl-cap"><p class="eb">Family tables near you</p><b>${n} upcoming event${n===1?'':'s'}</b></div></div>`+h.slice(e)};
  const _are=afterRenderEvents;afterRenderEvents=function(){const r=_are.apply(this,arguments);try{if(S.screen==='events'){const seen=new Set();document.querySelectorAll('#app .fu-tk').forEach(c=>{const b=c.querySelector('[data-id]');const id=b&&b.dataset.id;if(!id)return;if(seen.has(id))c.remove();else seen.add(id)})}if(RL()){RLX.attach();if(S.rlAsk&&S.screen!=='welcome'){const d=document.createElement('div');d.innerHTML=askSheet();if(d.firstChild)app.appendChild(d.firstChild)}}}catch(e){}return r};
})();

/* ---------- Opening, loading and pull-to-refresh animations (his ask 7 Nov 12:53) ----------
   1. index.html draws the logo animation before any script runs; here we remove it once the first real screen is drawn.
   2. spinner(): two hearts that draw themselves in a loop instead of a plain ring.
   3. Pull down at the top of a main screen: our hearts draw with the pull, beat while fresh data loads. */
(function(){
  const HP1='M11.60 18.59c-0.82 0 -8.2 -4.76 -8.2 -10.25 0 -2.71 2.13 -4.92 4.76 -4.92 1.48 0 2.71 0.74 3.44 1.89 0.74 -1.15 1.97 -1.89 3.44 -1.89 2.62 0 4.76 2.21 4.76 4.92 0 5.49 -7.38 10.25 -8.2 10.25z';
  const HP2='M20.40 18.59c-0.82 0 -8.2 -4.76 -8.2 -10.25 0 -2.71 2.13 -4.92 4.76 -4.92 1.48 0 2.71 0.74 3.44 1.89 0.74 -1.15 1.97 -1.89 3.44 -1.89 2.62 0 4.76 2.21 4.76 4.92 0 5.49 -7.38 10.25 -8.2 10.25z';
  const hearts=(cls)=>`<svg class="${cls}" viewBox="0 0 32 22" aria-hidden="true"><path class="a" pathLength="1" d="${HP1}"/><path class="b" pathLength="1" d="${HP2}"/></svg>`;
  spinner=function(label){return `<span class="spin nm-hl" role="status" aria-label="${esc(label||'Loading')}">${hearts('')}</span>`};
  const _a2=afterRenderEvents;afterRenderEvents=function(){const r=_a2.apply(this,arguments);try{if((S.screen!=='boot'||S.bootError)&&window.nmSplashDone)window.nmSplashDone()}catch(e){}return r};
  /* pull to refresh */
  let P=null,busyR=false;
  function el(){let e=document.getElementById('nm-ptr');if(!e){e=document.createElement('div');e.id='nm-ptr';e.setAttribute('aria-hidden','true');e.innerHTML=`<span class="pb">${hearts('ph')}</span>`;document.body.appendChild(e)}return e}
  function canPull(t){if(busyR||view||sheet||picker||S.screen!=='app')return null;const m=document.getElementById('main');if(!m||!m.contains(t)||m.scrollTop>0)return null;if(t.closest&&t.closest('.rl-home,.rl-evt,.maplibregl-map,input,textarea,select'))return null;return m}
  document.addEventListener('touchstart',e=>{if(e.touches.length!==1)return;const m=canPull(e.target);P=m?{y:e.touches[0].clientY,d:0}:null},{passive:true});
  document.addEventListener('touchmove',e=>{if(!P)return;const d=e.touches[0].clientY-P.y;if(d<=0){if(P.d)set(0);P.d=0;return}P.d=d;set(d)},{passive:true});
  document.addEventListener('touchend',()=>{if(!P)return;const d=P.d;P=null;if(d>=110)go();else set(0,true)},{passive:true});
  document.addEventListener('touchcancel',()=>{if(!P)return;P=null;set(0,true)},{passive:true});/* 9 Nov fix: the hearts tile stayed half-visible over the header when the phone cancelled the touch */
  function set(d,back){const e=el(),p=Math.min(1,d/110),y=Math.min(84,d*.55);e.classList.toggle('back',!!back);e.classList.toggle('ready',p>=1);e.style.transform=`translate(-50%,${y-60}px)`;e.style.opacity=d?Math.min(1,p*1.6):0;e.style.setProperty('--p',1-p)}
  async function go(){busyR=true;const e=el();e.classList.add('go');e.classList.remove('back');e.style.transform='translate(-50%,24px)';e.style.opacity=1;e.style.setProperty('--p',0);
    const t0=Date.now();try{await loadAll();cacheSave&&cacheSave()}catch(x){}const w=Math.max(0,700-(Date.now()-t0));setTimeout(()=>{render();e.classList.remove('go');set(0,true);busyR=false},w)}
})();

/* ---------- Plan 15 (his ok 7 Nov 2026 23:28 on mocks handoff/mocks/plan15/*.pdf) ----------
   The new NeuMarry: 4 doors (Settle In, Events & Friends, Membership, For Business). Shown only when the
   server says plan15 is on (app_flags.plan15, admin first). The old matrimony screens stay in the code,
   hidden while plan15 is on. Bottom bar: Home · Settle In · Events · Me. Styles: 'Plan 15' block in app.css.
   Real data only: a section with no data is not shown. Money: test mode until his payment account is ready. */
Object.assign(IC,{
  key:'<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M17 6l3 3M15 8l2 2"/>',
  plane2:'<path d="M2 16l20-8-6 12-3-5-5 3z"/><path d="M13 15l3-3"/>',
  brief:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>',
  tag2:'<path d="M3 12V4a1 1 0 0 1 1-1h8l9 9-9 9z"/><circle cx="8" cy="8" r="1.6"/>',
  party:'<path d="M4 20l5-14 9 9z"/><path d="M14 4v2M19 9h2M17 6l2-2"/>',
  tv2:'<rect x="3" y="5" width="18" height="12" rx="2"/><path d="M8 21h8M12 17v4"/>',
  bus2:'<rect x="4" y="3" width="16" height="15" rx="3"/><path d="M4 11h16M8 21v-3M16 21v-3"/>',
  ball2:'<circle cx="12" cy="12" r="9"/><path d="M12 7l4 3-1.5 5h-5L8 10z"/>',
  store2:'<path d="M4 9l1-5h14l1 5M4 9h16v11H4zM9 20v-6h6v6"/>',
  bed2:'<path d="M3 18V8M3 14h18v4M21 14v-2a3 3 0 0 0-3-3h-7v5"/><circle cx="7" cy="11" r="2"/>',
  star2:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
  home2:'<path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
  chev2:'<path d="M9 5l7 7-7 7"/>', back2:'<path d="M15 5l-7 7 7 7"/>', tick2:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  lock2:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  shield2:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
  mega2:'<path d="M3 10v4h3l7 5V5L6 10z"/><path d="M17 9a4 4 0 0 1 0 6"/>',
  chart:'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>'
});
const P15={d:null,busy:'',v:null};
const P15_PUBLIC=true;  /* public first screens of the new NeuMarry (launch 8 Nov 2026) */
const em15=e=>`${(e&&e.raw)||''} ${(e&&e.code)||''} ${(e&&e.message)||e}`;
const FL15=[['Canada',-106,57],['United States',-98,39],['Mexico',-102,23],['Brazil',-51,-10],['Argentina',-64,-34],['Colombia',-73,4],['Peru',-75,-9],['Chile',-71,-30],['United Kingdom',-2,53],['Ireland',-8,53],['France',2,46.5],['Spain',-3.7,40],['Portugal',-8,39.5],['Germany',10,51],['Italy',12.5,42.5],['Netherlands',5.3,52.2],['Poland',19,52],['Sweden',16,62],['Norway',9,61],['Greece',22,39],['Turkey',35,39],['Ukraine',31,49],['Egypt',30,26.5],['Morocco',-6,32],['Nigeria',8,9.5],['Ghana',-1,7.9],['Kenya',38,0.2],['Ethiopia',39.5,8.6],['South Africa',24,-29],['Lebanon',35.8,33.9],['Saudi Arabia',45,24],['United Arab Emirates',54,24],['Iran',53,32],['Pakistan',69,30],['India',79,22],['Nepal',84,28.2],['Bangladesh',90,23.7],['Sri Lanka',80.7,7.8],['China',104,35],['South Korea',127.8,36.3],['Japan',138,36.5],['Philippines',122,12.5],['Vietnam',106,16],['Thailand',101,15],['Malaysia',102,4],['Indonesia',113,-1],['Singapore',103.8,1.35],['Australia',134,-25],['New Zealand',172,-41],['Russia',90,60]];
const fg15=n=>{try{return flag(n)||''}catch(e){return ''}};
try{if(typeof RLX!=='undefined'&&RLX.OPTS&&RLX.OPTS.welcome)RLX.OPTS.p15=()=>Object.assign({},RLX.OPTS.welcome(),{zoom:innerWidth<380?0.95:innerWidth<500?1.05:1.35,padB:66,
  pins:FL15.filter(c=>fg15(c[0])).map(c=>({ll:[c[1],c[2]],anchor:'center',cls:'p15f',html:`<span class="p15fg">${fg15(c[0])}</span><b>${esc(c[0])}</b>`,fly:true,
    go:ev=>{const b=ev.currentTarget;const was=b.classList.contains('open');document.querySelectorAll('.rl-mk.p15f.open').forEach(x=>x.classList.remove('open'));if(!was)b.classList.add('open')}}))})}catch(e){}
function P15on(){return !!(P15.d&&P15.d.on)}
async function load15(){try{P15.d=await API.rpc('my15',{});try{localStorage.setItem('nm.p15.'+(API.userId()||''),JSON.stringify(P15.d))}catch(e){}}catch(e){}}
function warm15(){try{const o=JSON.parse(localStorage.getItem('nm.p15.'+(API.userId()||''))||'null');if(o&&!P15.d)P15.d=o}catch(e){}}
const p15price=k=>{const c=P15.d&&P15.d.prices&&P15.d.prices[k];return c==null?'':money(c,(P15.d&&P15.d.cur)||'USD')};
/* launch prices (owner ok 9 Nov 2026): honest note, never a struck-through fake old price */
const p15later=k=>{const c=P15.d&&P15.d.later&&P15.d.later[k];return c==null?'':money(c,(P15.d&&P15.d.cur)||'USD')};
const p15launch=(keys,who)=>{if(!keys.some(k=>p15later(k)))return '';return `<div class="p15-g p15-launch"><span>${ic('tick2')} Launch prices: join now and your price stays as long as you stay. Later prices are for new ${who} only.</span></div>`};
/* price with tags (his 9 Nov 16:51): LAUNCH PRICE above the price now, highlighted LATER above the later price; no strike-through */
const p15tag=(k,unit)=>{const l=p15later(k);return `<span class="p15-lp">${l?'<i class="lt">LAUNCH PRICE</i>':''}<b>${p15price(k)}</b><small>${unit}</small>${l?`<span class="lat"><i>LATER</i>${l}</span>`:''}</span>`};
/* Plan key sent to the server (his ok 9 Nov 18:31): Expert Pro = 'expert_pro'; 6 months = '<plan>_6' (pay 5), 12 months = '<plan>_12' (pay 10).
   The free 14 days are always the normal plan; Pro and prepay start when paid. */
const planKey15=base=>{const f=P15.f||{};const b=(base==='expert_plan'&&f.xp==='pro')?'expert_pro':(base==='expert_plan'&&f.xp==='elite')?'expert_elite':base;const m=f.mo||'1';return m==='6'||m==='12'?b+'_'+m:b};
/* prepay (his rule 11 Nov 2026 19:05/19:39: nothing free): 1 month, 6 months = 10% off, 12 months = 20% off; prices in the member's money */
const prepay15=(k,cc)=>{const c=cc!=null?cc:P15.d&&P15.d.prices&&P15.d.prices[k];if(c==null)return '';const m=P15.f.mo||'1';const pr=P15.d&&P15.d.prices||{};const cur=(P15.d&&P15.d.cur)||'USD';
  const opt=[['1','1 month',c,'per month'],['6','6 months',pr[k+'_6']!=null?pr[k+'_6']:Math.round(c*6*.9),'10% off'],['12','12 months',pr[k+'_12']!=null?pr[k+'_12']:Math.round(c*12*.8),'20% off']];
  return `<div class="p15-g p15-prepay"><b>How long?</b><div class="p15-pp">${opt.map(([v,l,amt,note])=>`<button class="p15-ppo${m===v?' on':''}" data-a="p15f" data-k="mo" data-val="${v}"><span>${l}</span><b>${money(amt,cur)}</b><small>${note}</small></button>`).join('')}</div><small class="p15-ppn">Pay once, no automatic charges.</small></div>`};
const trial15=()=>false; /* no free trials (his rule 11 Nov 2026 19:39) */
const p15top=(t,back)=>`<div class="p15-top">${back?`<button class="p15-tb" data-a="p15back" aria-label="Back">${ic('back2')}</button>`:'<span class="p15-tb ghost"></span>'}<h1>${esc(t)}</h1><span class="p15-tb ghost"></span></div>`;
const PH15={'Life Partner':'rings','Settle In':'house','Events & Friends':'hall','Membership':'keys','For Business':'store','Find a Room':'room','Travel Buddy for Parents':'plane','Job Referral':'office','Trusted Experts':'docs','Moving-Out Sale':'sofa','Friend Meetups':'table','Watch Parties':'stadium','Festivals':'lantern','Day Trips':'trip','Sports Leagues':'league'};
const ph15=t=>PH15[t]?`<span class="p15-ph"><img src="img/p15/${PH15[t]}.webp" alt="" loading="lazy" decoding="async"></span>`:'';
const p15tile=(icn,tone,t,d,act,extra)=>`<button class="p15-g p15-t" data-a="${act}">${ph15(t)}<span class="p15-b ${tone}">${ic(icn)}</span><b>${esc(t)}</b><small>${esc(d)}</small>${extra||''}</button>`;
function p15wrap(inner){return `<div class="scroll p15s" id="main"><div class="main-inner p15">${inner}</div></div>`}
function home15(){
  const me=S.me||{};
  return p15wrap(`<div class="p15-brand"><img src="img/icon-192.png" alt=""><b>NeuMarry</b><button class="p15-theme" data-a="p15theme" aria-label="${document.documentElement.classList.contains('gl-lt')?'Dark theme':'Light theme'}">${ic(document.documentElement.classList.contains('gl-lt')?'moon':'sun')}</button><span class="p15-city">${ic('pin')}${esc(me.city||me.country||'')}</span></div>
  <h2 class="p15-h1">Your people,<br>wherever you live</h2><p class="p15-sub">Rooms, jobs, parents' travel, events and friends: all in one place.</p>
  ${(typeof RL==='function'&&RL()&&RLX.webgl())?`<div class="p15-earth"><div class="rl-slot" data-rl="p15"></div><span class="p15-earth-h">${ic('globe')} Spin it · tap a flag</span><span class="p15-earth-t">One app for people living abroad, in every country</span></div>`:''}
  <div class="p15-bento">
   <button class="p15-g p15-t span2 row" data-a="tab" data-k="settle">${ph15('Settle In')}<span class="p15-b mint big">${ic('key')}</span><span class="tx"><b>Settle In</b><small>Room, job, parents' travel, trusted experts</small></span>${ic('chev2')}</button>
   ${p15tile('party','lem','Events & Friends','Meetups, watch parties, festivals, trips','tab" data-k="ev15')}
   ${p15tile('star2','fern','Membership',naOn()?'NeuAmigo Plus':'NeuMarry Plus and Verified Tick','p15open" data-v="plus')}
   <button class="p15-g p15-t span2 row" data-a="p15open" data-v="biz">${ph15('For Business')}<span class="p15-b mint">${ic('store2')}</span><span class="tx"><b>For Business</b><small>Agents, hosts, event services, ads</small></span>${ic('chev2')}</button>
   <button class="p15-g p15-t span2 row" data-a="p15life">${ph15('Life Partner')}<span class="p15-b lem">${ic('heart')}</span><span class="tx"><b>Life Partner</b><small>Verified matrimony: meet someone from your roots</small></span>${ic('chev2')}</button>
  </div>`)}
function settle15(){
  const t=[['bed2','mint','Find a Room','Rooms and roommates, by area and budget','rooms'],['plane2','lem','Travel Buddy for Parents','A verified buddy on the same flight','buddy'],
    ['brief','fern','Job Referral','Ask people inside the company','referral'],['shield2','mint','Trusted Experts','Licensed agents, consultants, movers','experts'],['tag2','lem','Moving-Out Sale','Buy and sell when people move','sale']];
  return p15wrap(p15top('Settle In')+`<p class="p15-sub">Everything for your first months in a new country.</p><div class="p15-bento">${t.map((x,i)=>p15tile(x[0],x[1],x[2],x[3],'p15open" data-v="'+x[4],'').replace('p15-t"','p15-t'+(i===0?' span2':'')+'"')).join('')}</div>`)}
function events15(){
  const t=[['heart','mint','Friend Meetups','Dinner tables, walks, games','meetups'],['tv2','lem','Watch Parties','Big matches on a big screen','watch'],['party','fern','Festivals','Diwali, Eid, Lunar New Year, Christmas','festival'],
    ['bus2','mint','Day Trips','Bus trips with a host','trip'],['ball2','lem','Sports Leagues','Join a team or find players','league']];
  return p15wrap(p15top('Events & Friends')+`<p class="p15-sub">Hosts from your city run them. You just book a seat.</p><div class="p15-bento">${t.map((x,i)=>p15tile(x[0],x[1],x[2],x[3],'p15open" data-v="ev-'+x[4],'').replace('p15-t"','p15-t'+(i===0?' span2':'')+'"')).join('')}</div>
  <button class="p15-g p15-row" data-a="p15open" data-v="club"><span class="p15-b lem">${ic('party')}</span><span class="tx"><b>Weekend Club Membership</b><small>${P15.d&&P15.d.club?'Active · no booking fee':'No booking fee · book 48 hours early'}</small></span>${ic('chev2')}</button>
  <button class="p15-g p15-row" data-a="p15open" data-v="tickets"><span class="p15-b mint">${ic('qr')}</span><span class="tx"><b>My Tickets</b><small>QR tickets for the events you booked</small></span>${ic('chev2')}</button>
  ${P15.d&&!P15.d.plus?`<button class="p15-g p15-row" data-a="p15open" data-v="plus"><span class="p15-b lem">${ic('star2')}</span><span class="tx"><b>Event details open with Plus</b><small>You can see names and dates for free</small></span>${ic('chev2')}</button>`:''}`)}
function plus15(){const d=P15.d||{};
  const perks=[['bed2','Find a Room','Contact and address of every room · new homes 1 hour before everyone'],['party','Events & Friends','Full event details, book 24 hours early'],['shield2','Trusted Experts','Name, contact and chat with every expert (prices are open to all)'],['chat','Sellers and agents','Chat with landlords, agents and sellers']];
  return p15wrap(p15top('Membership',true)+`<div class="p15-g p15-hero"><span class="p15-b lem big">${ic('star2')}</span><h2>NeuMarry Plus</h2><small>${d.plus?`Active until ${esc(new Date(d.plusUntil).toLocaleDateString(RM_I18N.locale,{day:'numeric',month:'short',year:'numeric'}))}`:'One membership opens everything'}</small></div>
  <div class="p15-g p15-list">${perks.map(p=>`<div class="p15-li"><span class="p15-b mint">${ic(p[0])}</span><span class="tx"><b>${p[1]}</b><small>${p[2]}</small></span>${ic('tick2')}</div>`).join('')}</div>
  ${d.plus?'':`<div class="p15-2"><button class="p15-g p15-pr${P15.y?'':' on'}" data-a="p15yr" data-y="0">${p15tag('plus_m','per month')}</button><button class="p15-g p15-pr${P15.y?' on':''}" data-a="p15yr" data-y="1">${p15tag('plus_y','per year · save 35%')}</button></div>${p15launch(['plus_m','plus_y'],'members')}
  <button class="p15-btn" data-a="p15buyPlus"${P15.busy==='plus'?' disabled':''}>${P15.busy==='plus'?'Starting…':'Start Plus'}</button><p class="p15-ex">${d.payTest?'Test mode: no real money is taken.':'Cancel any time. No hidden charges.'}</p>`}
  ${naOn()?'':`<button class="p15-g p15-row" data-a="p15open" data-v="tick"><span class="p15-b mint">${ic('shield2')}</span><span class="tx"><b>Verified Tick</b><small>${d.tick?'Active':'People trust you faster'}</small></span>${ic('chev2')}</button>`}`)}
function tick15(){const d=P15.d||{},v=(S.me&&S.me.v)||{},idOk=!!(v.id&&v.selfie);
  const st=(ok,n,t,s)=>`<div class="p15-step"><span class="p15-dot${ok?'':' off'}">${ok?ic('tick2'):n}</span><span><b>${t}</b><small>${s}</small></span></div>`;
  return p15wrap(p15top('Verified Tick',true)+`<p class="p15-sub">People trust you faster: rooms, buddies and referrals say yes sooner.</p>
  <div class="p15-g p15-steps">${st(true,1,'Phone or email','Checked when you signed in · free')}${st(!!v.id,2,'Photo of your ID','Passport, PR card or driving licence')}${st(!!v.selfie,3,'Quick selfie check','Only to match the ID, never shown')}</div>
  <div class="p15-g p15-note">${ic('lock2')} Your ID photo is deleted after the check (7 days at most). We keep only "verified: yes".</div>
  ${d.tick?`<div class="p15-g p15-note">${ic('tick2')} Your tick is active until ${esc(new Date(d.tickUntil).toLocaleDateString(RM_I18N.locale,{day:'numeric',month:'short',year:'numeric'}))}.</div>`:
   idOk?`<button class="p15-btn" data-a="p15buyTick"${P15.busy==='tick'?' disabled':''}>${P15.busy==='tick'?'Adding…':`Get the tick · ${p15price('tick')}`}</button>${d.payTest?'<p class="p15-ex">Test mode: no real money is taken.</p>':''}`:
   `<button class="p15-btn" data-a="verify">Check my ID first</button><p class="p15-ex">The tick costs ${p15price('tick')} once your ID check is done.</p>`}`)}
function soon15(t){return p15wrap(p15top(t,true)+`<div class="p15-g p15-note">${ic('clock')} This part is being built now. It opens for everyone together with the rest of the new NeuMarry.</div>`)}
const P15V={plus:plus15,tick:tick15};
const P15T={host:'Host Plans',biz:'For Business',rooms:'Find a Room',buddy:'Travel Buddy for Parents',referral:'Job Referral',experts:'Trusted Experts',sale:'Moving-Out Sale','ev-meetups':'Friend Meetups','ev-watch':'Watch Parties','ev-festival':'Festivals','ev-trip':'Day Trips','ev-league':'Sports Leagues'};
(function(){
  const _rm=renderMatches;renderMatches=function(){if(!P15on()||(P15.mat&&!P15.v))return _rm();
    if(P15.v)return (P15V[P15.v]||(()=>soon15(P15T[P15.v]||'')))();
    return S.tab==='settle'?settle15():S.tab==='ev15'?events15():home15()};
  const _me=renderMe;renderMe=function(){if(P15on()&&P15.v){return (P15V[P15.v]||(()=>soon15(P15T[P15.v]||'')))()}return _me()};
  const _ar=afterRenderEvents;afterRenderEvents=function(vk){_ar(vk);document.documentElement.classList.toggle('p15on',P15on()&&S.screen==='app'&&!P15.mat);if(!P15on())return;if(P15.mat){mat15bar();return}const nav=document.querySelector('.navwrap .nav');if(!nav)return;
    const cur=P15.v&&S.tab==='me'?'me':S.tab==='settle'||S.tab==='ev15'||S.tab==='me'?S.tab:'matches';
    nav.className='nav n4';nav.innerHTML=[['matches','Home','home2'],['settle','Settle In','key'],['ev15','Events','party'],['me','Me','user']].map(([k,l,i])=>
      `<button data-a="tab" data-k="${k}" class="${cur===k?'on':''}" aria-current="${cur===k?'page':'false'}">${ic(i)}<span>${l}</span></button>`).join('')};
  const _tab=A.tab;A.tab=function(el){P15.v=null;return _tab(el)};
  Object.assign(A,{
    p15open(el){P15.v=el.dataset.v;view=null;sheet=null;render();const m=document.getElementById('main');if(m)m.scrollTop=0},
    p15back(){P15.v=null;render()},
    p15yr(el){P15.y=el.dataset.y==='1';render()},
    async p15buyPlus(){if(P15.busy)return;P15.busy='plus';render();try{await API.rpc('buy_plus15',{yearly:!!P15.y});await load15();toast('NeuMarry Plus is active.','star2')}catch(e){toast(em15(e).includes('not open')?'Payments open soon.':'Could not start Plus. Please try again.','info')}P15.busy='';render()},
    async p15buyTick(){if(P15.busy)return;P15.busy='tick';render();try{await API.rpc('buy_tick15',{});await load15();toast('Your Verified Tick is active.','shield2')}catch(e){toast(em15(e).includes('ID and selfie')?'Please finish your ID check first.':'Could not add the tick. Please try again.','info')}P15.busy='';render()}
  });
  const _la=loadAll;loadAll=async function(){await Promise.all([_la(),load15()])};
  /* fast open: plan15 state comes from this phone at once, and loads beside the profile (never before it) */
  const _lm=loadMe;loadMe=async function(){warm15();const q=load15();const r=await _lm();await q;return r};
})();

/* ---------- Plan 15 phase 2: Events & Friends screens (list, detail, booking, tickets with QR) ---------- */
const EVK={'ev-meetups':['meetup','Friend Meetups','heart','mint'],'ev-watch':['watch','Watch Parties','tv2','lem'],'ev-festival':['festival','Festivals','party','fern'],'ev-trip':['trip','Day Trips','bus2','mint'],'ev-league':['league','Sports Leagues','ball2','lem']};
const WHO15={women:'Women only',men:'Men only',u30:'Under 30','30plus':'30 and over'};
P15.ev={};P15.n=1;
async function loadEv15(k){try{P15.ev[k]=await API.rpc('events15',{k,cty:''})}catch(e){P15.ev[k]=[]}render()}
const evWhen=e=>new Date(e.startsAt).toLocaleString(RM_I18N.locale,{weekday:'short',day:'numeric',month:'short',hour:'numeric',minute:'2-digit'});
function evList15(v){const [k,t,icn,tone]=EVK[v],list=P15.ev[k];if(list===undefined){loadEv15(k);return p15wrap(p15top(t,true)+spinner('Loading'))}
  return p15wrap(p15top(t,true)+(list.length?list.map(e=>`<button class="p15-g p15-row" data-a="p15open" data-v="evd:${e.id}"><span class="p15-b ${tone} big">${ic(icn)}</span><span class="tx"><b>${esc(e.title)}</b><small>${esc(evWhen(e))} · ${esc(e.city)}</small>${e.who!=='all'?`<small class="p15-acc">${esc(WHO15[e.who]||'')}</small>`:''}</span><span class="p15-pr0"><b>${money(e.price,e.currency)}</b><small>${e.left?`${e.left} left`:'Full'}</small></span></button>`).join(''):
   `<div class="p15-g p15-note">${ic('cal')} No ${esc(t.toLowerCase())} in your city yet. Hosts add new ones every week.</div>`)+
   `<button class="p15-g p15-row" data-a="p15open" data-v="host"><span class="p15-b fern">${ic('mega2')}</span><span class="tx"><b>Host your own</b><small>Host Plan from ${p15price('host_basic')} a month</small></span>${ic('chev2')}</button>`)}
const D15=()=>!(P15.d&&P15.d.payTest);
const PAYM15=[['PayPal','PayPal'],['Bank transfer','Bank transfer'],['e-Transfer','e-Transfer'],['Cash at the door','Cash at the door']];
function payHowForm15(f){f.pm=f.pm||'PayPal';return `<label>How guests pay you</label>${chips15('pm',PAYM15,f.pm)}${f.pm==='Cash at the door'?'':`<input id="p15-pd" maxlength="120" placeholder="${f.pm==='PayPal'?'e.g. paypal.me/yourname':f.pm==='e-Transfer'?'e.g. your e-Transfer email':'e.g. bank name and account details'}" value="${esc(f.pd||'')}">`}<small>Shown only to people who book. Guests pay you directly; NeuMarry never holds this money.</small>`}
const payHowTxt15=f=>f.pm==='Cash at the door'?'Cash at the door':`${f.pm}: ${(f.pd||'').trim()}`;
function evFind(id){for(const k in P15.ev){const e=(P15.ev[k]||[]).find(x=>x.id===id);if(e)return e}return null}
function evDetail15(id){const e=evFind(id);if(!e)return p15wrap(p15top('Event',true)+`<div class="p15-g p15-note">This event is not open any more.</div>`);
  const kk=Object.keys(EVK).find(x=>EVK[x][0]===e.kind)||'ev-meetups',[,,icn,tone]=EVK[kk],fee=(P15.d&&P15.d.prices&&P15.d.prices.booking_fee)||0;
  return p15wrap(p15top(EVK[kk][1],true)+`<div class="p15-g p15-evhero">${ph15(EVK[kk][1])?`<div class="art ph">${ph15(EVK[kk][1])}</div>`:`<div class="art ${tone}">${ic(icn)}</div>`}<div class="p15-pad"><span class="p15-pill">${esc(EVK[kk][1])}</span><h2>${esc(e.title)}</h2><small>Hosted by ${esc(e.host)}${e.hostRating?` · ${Number(e.hostRating).toFixed(1)} rating`:''}</small></div></div>
  <div class="p15-kv"><div><small>When</small><b>${esc(evWhen(e))}</b></div><div><small>Where</small><b>${esc(e.locked?e.city:(e.venue||e.city))}</b></div><div><small>Seats left</small><b>${e.left} / ${e.seats}</b></div></div>
  ${e.locked?`<button class="p15-g p15-row" data-a="p15open" data-v="plus"><span class="p15-b lem">${ic('lock2')}</span><span class="tx"><b>Place and details open with Plus</b><small>Or book a seat: they show on your ticket</small></span>${ic('chev2')}</button>`:
   (e.notes||[]).length?`<div class="p15-g p15-steps">${e.notes.map(n=>`<div class="p15-step"><span class="p15-dot">${ic('tick2')}</span><span><b>${esc(n)}</b></span></div>`).join('')}</div>`:''}
  ${e.left?`<div class="p15-qty"><span>Adults</span><button data-a="p15n" data-d="-1" aria-label="Fewer adults">−</button><b>${P15.n}</b><button data-a="p15n" data-d="1" aria-label="More adults">+</button></div>
  ${e.price?`<div class="p15-qty"><span>Kids 12 and under · half price</span><button data-a="p15k" data-d="-1" aria-label="Fewer kids">−</button><b>${P15.k||0}</b><button data-a="p15k" data-d="1" aria-label="More kids">+</button></div>`:''}
  ${D15()?(()=>{const kids=P15.k||0,seats=P15.n+kids,tick=e.price*P15.n+Math.round(e.price/2)*kids,mem=!!(P15.d&&P15.d.club),cur=(P15.d&&P15.d.cur)||'USD',bf=(P15.d&&P15.d.prices&&P15.d.prices['bf_'+seats])||fee*seats;
    return `<div class="p15-buy"><span><b>${e.price?money(tick,e.currency):'No ticket price'}</b><small>${e.price?(mem?'to the organizer · booking fee '+money(0,cur)+' (member)':'to the organizer + '+money(bf,cur)+' booking fee'):'no booking fee'}</small></span><button class="p15-btn" data-a="p15book" data-id="${e.id}"${P15.busy==='book'?' disabled':''}>${P15.busy==='book'?'Booking…':e.price&&!mem?`Book · ${money(bf,cur)} fee`:`Book ${seats} seat${seats>1?'s':''}`}</button></div>
  ${e.price&&!mem?`<button class="p15-g p15-row" data-a="p15open" data-v="club"><span class="p15-b lem">${ic('star2')}</span><span class="tx"><b>Weekend Club members pay no booking fee</b><small>And book 48 hours before everyone</small></span>${ic('chev2')}</button>`:''}
  <p class="p15-ex">${e.price?'You pay the ticket money straight to the organizer; your ticket shows how. NeuAmigo only takes the booking fee. You cancel 24 hours before or earlier: tell the organizer, who returns the ticket money.':'Your seat is saved on your ticket.'}</p>`})():
  `<div class="p15-buy"><span><b>${money(e.price,e.currency)}</b><small>+ ${money(fee,e.currency)} booking fee per seat</small></span><button class="p15-btn" data-a="p15book" data-id="${e.id}"${P15.busy==='book'?' disabled':''}>${P15.busy==='book'?'Booking…':`Pay ${money(e.price*P15.n+fee*P15.n,e.currency)}`}</button></div>
  <p class="p15-ex">Host cancels: all money back. You cancel 48 hours before: ticket money back, booking fee kept.${P15.d&&P15.d.payTest?' Test mode: no real money is taken.':''}</p>`}`:`<div class="p15-g p15-note">${ic('info')} This event is full.</div>`}`)}
function tickets15(){const l=P15.tk;if(l===undefined){API.rpc('my_tickets15',{}).then(r=>{P15.tk=r;render()}).catch(()=>{P15.tk=[];render()});return p15wrap(p15top('My Tickets',true)+spinner('Loading'))}
  return p15wrap(p15top('My Tickets',true)+(l.length?l.map(t=>`<div class="p15-g p15-ticket"><span class="p15-pill">${ic('tick2')} ${t.direct?'Booked':'Paid'} · ${t.qty} ${t.event.kind==='league'?'team':`seat${t.qty>1?'s':''}`}</span><h2>${esc(t.event.title)}</h2><small>${esc(evWhen(t.event))} · ${esc(t.event.venue||t.event.city)}</small>
    ${t.direct&&t.toHost?`<div class="p15-g p15-paybox"><small>Pay the ${t.event.kind==='league'?'organiser':'host'}</small><b>${money(t.toHost,t.currency)}</b><span>${esc(t.payHow||'Ask the host how to pay')}</span><small>Write ${esc(t.code.slice(-6).toUpperCase())} in the payment note.</small><span class="p15-pill${t.hostPaid?'':' y'}">${t.hostPaid?'Host confirmed your payment':'Waiting for the host to confirm'}</span></div>`:''}
    <div class="p15-qr">${qrSvg15(t.code)}</div><small>Show this at the door</small>
    ${new Date(t.event.startsAt)-Date.now()>48*36e5?`<button class="p15-btn ghost" data-a="p15cancelT" data-id="${t.id}">${t.direct?'Cancel booking':'Cancel and get ticket money back'}</button>`:''}</div>`).join(''):`<div class="p15-g p15-note">${ic('cal')} No tickets yet. Book a seat in Events &amp; Friends.</div>`))}
function qrSvg15(c){try{const q=qrcode(0,'M');q.addData('NM15:'+c);q.make();return q.createSvgTag({cellSize:6,margin:2,scalable:true})}catch(e){return ''}}
Object.keys(EVK).forEach(k=>P15V[k]=()=>evList15(k));
/* Weekend Club Membership (his final ok 11 Nov 2026 18:21): one weekend or one month, adult or family (2 adults + 3 kids).
   Ticket money always goes to the organizer; members pay no booking fee and book 48 hours before everyone. Pay once, nothing renews. */
function club15v(){const d=P15.d||{},t=P15.ct||'month',f=P15.cf||'f';const k='wc_'+(t==='weekend'?'weekend':'month')+'_'+f;
  const perks=[['tick2','Booking fee: none','Others pay a booking fee on every seat'],['clock','Book 48 hours early','Your seats before the big events fill up'],['party','Members-only nights','Some nights are just for members'],['star2','Season points and badges','Points are just for fun, no money value']];
  return p15wrap(p15top('Weekend Club',true)+`<div class="p15-g p15-hero"><span class="p15-b lem big">${ic('party')}</span><h2>Weekend Club Membership</h2><small>${d.club?`Active until ${esc(new Date(d.clubUntil).toLocaleDateString(RM_I18N.locale,{day:'numeric',month:'short'}))}`:'Ticket money goes to the organizer. Your membership makes every booking easier.'}</small></div>
  <div class="p15-2"><button class="p15-g p15-pr${t==='weekend'?' on':''}" data-a="p15cf" data-k="ct" data-val="weekend"><b>One weekend</b></button><button class="p15-g p15-pr${t==='month'?' on':''}" data-a="p15cf" data-k="ct" data-val="month"><b>One month</b></button></div>
  <div class="p15-2"><button class="p15-g p15-pr${f==='a'?' on':''}" data-a="p15cf" data-k="cf" data-val="a">${p15tag('wc_'+(t==='weekend'?'weekend':'month')+'_a','adult')}</button><button class="p15-g p15-pr${f==='f'?' on':''}" data-a="p15cf" data-k="cf" data-val="f">${p15tag('wc_'+(t==='weekend'?'weekend':'month')+'_f','family · 2 adults + 3 kids')}</button></div>
  <div class="p15-g p15-list">${perks.map(p=>`<div class="p15-li"><span class="p15-b mint">${ic(p[0])}</span><span class="tx"><b>${p[1]}</b><small>${p[2]}</small></span>${ic('tick2')}</div>`).join('')}</div>
  ${p15launch([k],'members')}
  <button class="p15-btn" data-a="p15buyClub" data-k="${k}"${P15.busy==='club'?' disabled':''}>${P15.busy==='club'?'Starting…':`Join · ${p15price(k)}`}</button>
  <p class="p15-ex">Pay once. Nothing renews by itself. Kids 12 and under pay half the ticket price at every event.</p>`)}
/* Organizer Seat Credits: 1 credit = 1 booked seat; back when a guest cancels 24 hours before. Ticket money is 100% the organizer's. */
function credits15v(){const d=P15.d||{},n=d.seatCredits||0;
  const packs=[['sc_100','100 seats'],['sc_500','500 seats'],['sc_1000','1,000 seats']];
  return p15wrap(p15top('Seat Credits',true)+`<div class="p15-g p15-hero"><span class="p15-b lem big">${ic('qr')}</span><h2>${n.toLocaleString('en')} credits</h2><small>1 credit = 1 booked seat · never expire · back if a guest cancels 24 hours before</small></div>
  <div class="p15-g p15-list">${packs.map(([k,l])=>`<button class="p15-li" data-a="p15buyCredits" data-k="${k}" style="width:100%;border:0;background:transparent;color:inherit;text-align:left"><span class="p15-b mint">${ic('qr')}</span><span class="tx"><b>${l}</b><small>${p15price(k)}</small></span>${ic('chev2')}</button>`).join('')}</div>
  <p class="p15-ex">Your ticket money is 100% yours, paid to you directly. Seats open for booking only while you have credits.</p>`)}
P15V.club=club15v;P15V.credits=credits15v;

P15V.tickets=tickets15;
(function(){
  const _o=P15V;const get=v=>v&&v.startsWith('evd:')?()=>evDetail15(v.slice(4)):null;
  const _rm=renderMatches;renderMatches=function(){if(P15on()&&P15.v&&get(P15.v))return get(P15.v)();return _rm()};
  const _me=renderMe;renderMe=function(){if(P15on()&&P15.v&&get(P15.v))return get(P15.v)();return _me()};
  Object.assign(A,{
    p15n(el){P15.n=Math.max(1,Math.min(10-(P15.k||0),P15.n+Number(el.dataset.d)));render()},
    p15cf(el){P15[el.dataset.k]=el.dataset.val;render()},
    async p15buyClub(el){if(P15.busy)return;P15.busy='club';render();try{await API.rpc('buy_club15',{prod:el.dataset.k});await load15();toast('Your Weekend Club membership is active.','star2')}catch(e){if(!P15.shownAt||Date.now()-P15.shownAt>1500)toast('Could not start the membership. Please try again.','info')}P15.busy='';render()},
    async p15buyCredits(el){if(P15.busy)return;P15.busy='cr';render();try{const r=await API.rpc('buy_seat_credits15',{prod:el.dataset.k});await load15();toast(`You now have ${(r&&r.credits)||''} Seat Credits.`,'tick2')}catch(e){if(!P15.shownAt||Date.now()-P15.shownAt>1500)toast(em15(e).includes('organizers only')?'Seat Credits are for event organizers.':'Could not add credits. Please try again.','info')}P15.busy='';render()},
    p15k(el){P15.k=Math.max(0,Math.min(10-P15.n,(P15.k||0)+Number(el.dataset.d)));render()},
    async p15book(el){if(P15.busy)return;const id=el.dataset.id,e=evFind(id);if(!e)return;P15.busy='book';render();
      try{const r=await API.rpc('book15',{eid:id,n:P15.n,kids:P15.k||0});P15.tk=undefined;P15.ev[e.kind]=undefined;P15.n=1;P15.k=0;P15.v='tickets';toast(r&&r.direct&&r.toHost?'Booked. Pay the host as your ticket shows.':'Booked. Your ticket is ready.','tick2')}
      catch(x){const m=em15(x);toast(m.includes('members book first')||m.includes('plus members')?'For the first 48 hours only members can book.':m.includes('seats are not open')?'Seats for this event open soon.':m.includes('not enough')?'Not enough seats left.':m.includes('not open')?'Payments open soon.':'Could not book. Please try again.','info')}
      P15.busy='';render()},
    async p15cancelT(el){try{const r=await API.rpc('cancel_ticket15',{tid:el.dataset.id});P15.tk=undefined;toast(r&&r.direct?(r.hostPaid?'Cancelled. Ask the host to send your ticket money back.':'Cancelled.'):'Cancelled. Ticket money comes back.','tick2')}catch(x){toast(em15(x).includes('too late')?'Less than 48 hours left, so it can no longer be cancelled.':'Could not cancel. Please try again.','info')}render()}
  });
  const _open=A.p15open;A.p15open=function(el){P15.n=1;return _open(el)};
})();

/* ---------- Plan 15 phase 2b: host side (Host Plans, create event by taps, dashboard, door check) ---------- */
P15.f={};
const hostBiz15=()=>((P15.d&&P15.d.biz)||[]).find(b=>b.kind==='host');
const planOn15=b=>!!(b&&b.planUntil&&new Date(b.planUntil)>Date.now());
function chips15(key,opts,cur){return `<div class="p15-chips">${opts.map(([v,l])=>`<button class="p15-chip${String(cur)===String(v)?' on':''}" data-a="p15f" data-k="${key}" data-val="${esc(v)}">${esc(l)}</button>`).join('')}</div>`}
function hostPlans15(){const b=hostBiz15(),f=P15.f,me=S.me||{};
  const plans=[['host_basic','Host Basic','2 events a month · up to 50 seats'],['host_pro','Host Pro','10 events a month · up to 300 seats'],['host_big','Host Big','Unlimited events · 1,000+ seats · festivals']];
  if(!f.plan)f.plan='host_pro';
  return p15wrap(p15top('Host Plans',true)+`<p class="p15-sub">${D15()?`You set the ticket price and guests pay it straight to you. Buyers pay NeuMarry a ${p15price('booking_fee')} booking fee.`:`You set the ticket price. We keep 10% of each ticket; buyers pay a ${p15price('booking_fee')} booking fee.`}</p>
  ${b?`<div class="p15-g p15-note">${ic('tick2')}<span>Host name: <b>${esc(b.name)}</b>${planOn15(b)?` · ${esc((plans.find(p=>p[0]===b.plan)||[])[1]||'')} active until ${esc(new Date(b.planUntil).toLocaleDateString(RM_I18N.locale,{day:'numeric',month:'short'}))}`:''}</span></div>`:
   `<div class="p15-g p15-form"><label>Host name people will see</label><input id="p15-hn" maxlength="60" placeholder="e.g. Lagos Nights Club" value="${esc(f.hn||'')}"><small>City: ${esc(me.city||'')} ${esc(me.country||'')}</small></div>`}
  ${plans.map(([k,t,d])=>`<button class="p15-g p15-plan${f.plan===k?' on':''}" data-a="p15f" data-k="plan" data-val="${k}"><span><b>${t}</b><small>${d}</small></span><span class="p15-pr0">${p15tag(k,'/month')}</span></button>`).join('')}
  ${prepay15(f.plan||'host_pro')}
  ${p15launch(['host_basic','host_pro','host_big'],'hosts')}
  <div class="p15-g p15-note">${ic('tick2')} ${D15()?'Bookings, QR entry and guest list done for you · ticket money comes to you directly':'Tickets, QR entry, refunds and payouts done for you'} · guests' phone numbers stay private</div>
  <button class="p15-btn" data-a="p15hostBuy"${P15.busy==='host'?' disabled':''}>${P15.busy==='host'?'Starting…':planOn15(b)?'Renew for one more month':trial15()?'Start 14 days free · no card':'Start hosting'}</button>${P15.d&&P15.d.payTest?'<p class="p15-ex">Test mode: no real money is taken.</p>':''}
  ${planOn15(b)?`<button class="p15-g p15-row" data-a="p15open" data-v="hostboard"><span class="p15-b mint">${ic('chart')}</span><span class="tx"><b>Host Dashboard</b><small>Your events, seats and money</small></span>${ic('chev2')}</button>`:''}`)}
function days15(){const out=[];for(let i=1;i<=21;i++){const d=new Date(Date.now()+i*864e5);out.push([d.toLocaleDateString('en-CA'),d.toLocaleDateString(RM_I18N.locale,{weekday:'short',day:'numeric',month:'short'})])}return out}
function newEv15(){const f=P15.f;f.kind=f.kind||'meetup';f.day=f.day||days15()[5][0];f.hr=f.hr||'19:00';f.seats=f.seats||'20';f.price=f.price||'15';f.who=f.who||'all';
  return p15wrap(p15top('New Event',true)+`<div class="p15-g p15-form">
  <label>What kind</label>${chips15('kind',[['meetup','Friend Meetup'],['watch','Watch Party'],['festival','Festival'],['trip','Day Trip']],f.kind)}
  <label>Event name</label><input id="p15-et" maxlength="90" placeholder="e.g. Cricket final on the big screen" value="${esc(f.et||'')}">
  <label>Day</label>${chips15('day',days15().slice(0,14),f.day)}
  <label>Start time</label>${chips15('hr',[['10:00','10 am'],['13:00','1 pm'],['17:00','5 pm'],['19:00','7 pm'],['20:00','8 pm']],f.hr)}
  <label>Place (shown to Plus members and ticket holders)</label><input id="p15-ev" maxlength="120" placeholder="e.g. Hall 2, Square One" value="${esc(f.ev||'')}">
  <label>Seats</label>${chips15('seats',[['6','6'],['12','12'],['20','20'],['50','50'],['100','100'],['200','200']],f.seats)}
  <label>Ticket price</label>${chips15('price',[['0','Free'],['8','8'],['12','12'],['15','15'],['25','25'],['40','40']],f.price)}
  <label>Who can come</label>${chips15('who',[['all','Everyone'],['women','Women only'],['men','Men only'],['u30','Under 30'],['30plus','30 and over']],f.who)}${D15()&&f.price!=='0'?payHowForm15(f):''}</div>
  <button class="p15-btn" data-a="p15evCreate"${P15.busy==='ev'?' disabled':''}>${P15.busy==='ev'?'Saving…':'Publish event'}</button>`)}
function board15(){const l=P15.hb;if(l===undefined){API.rpc('host_board15',{}).then(r=>{P15.hb=r;render()}).catch(()=>{P15.hb=[];render()});return p15wrap(p15top('Host Dashboard',true)+spinner('Loading'))}
  return p15wrap(p15top('Host Dashboard',true)+`<button class="p15-g p15-row" data-a="p15open" data-v="credits"><span class="p15-b lem">${ic('qr')}</span><span class="tx"><b>Seat Credits: ${((P15.d&&P15.d.seatCredits)||0).toLocaleString('en')}</b><small>1 credit = 1 booked seat · add more</small></span>${ic('chev2')}</button>`+(l.length?l.map(e=>`<div class="p15-g p15-hb"><div class="p15-hbh"><b>${esc(e.title)}</b><span class="p15-pill${e.status==='open'?'':' y'}">${e.status==='open'?'Open':e.status==='cancelled'?'Cancelled':'Done'}</span></div>
    <small>${esc(evWhen(e))} · ${e.sold} of ${e.seats} seats sold · ${e.checkedIn} checked in</small><div class="p15-bar"><i style="width:${Math.round(100*e.sold/Math.max(1,e.seats))}%"></i></div>
    ${e.direct||D15()?`<div class="p15-kv"><div><small>Tickets</small><b>${money(e.tickets,e.currency)}</b></div><div><small>Paid to you</small><b class="p15-acc">${money(e.got,e.currency)}</b></div><div><small>Still to get</small><b>${money(e.toGet,e.currency)}</b></div></div>
    <button class="p15-g p15-row" data-a="p15open" data-v="guests:${e.id}"><span class="p15-b mint">${ic('user')}</span><span class="tx"><b>Guests and payments</b><small>${esc(e.payHow||'Add how guests pay you')}</small></span>${ic('chev2')}</button>`:
    `<div class="p15-kv"><div><small>Tickets</small><b>${money(e.tickets,e.currency)}</b></div><div><small>NeuMarry</small><b>${money(e.cut,e.currency)}</b></div><div><small>You get</small><b class="p15-acc">${money(e.yours,e.currency)}</b></div></div>`}
    ${e.status==='open'?`<div class="p15-2"><button class="p15-btn ghost" data-a="p15promote" data-id="${e.id}">Promote · ${p15price('event_promote')}</button><button class="p15-btn ghost" data-a="p15hostCancel" data-id="${e.id}">Cancel event</button></div>`:''}</div>`).join(''):
    `<div class="p15-g p15-note">${ic('cal')} No events yet. Publish your first one.</div>`)+
  `<div class="p15-2"><button class="p15-btn ghost" data-a="p15open" data-v="door">${ic('qr')} Door check</button><button class="p15-btn" data-a="p15open" data-v="newev">New event</button></div>
  <p class="p15-ex">${D15()?'Guests pay you directly. Mark each payment in Guests and payments.':'Your money is paid to your bank after each event.'} Guests' phone numbers are never shown.</p>`)}
function door15(){const r=P15.dr;
  return p15wrap(p15top('Door Check',true)+`<p class="p15-sub">Scan the guest's ticket, or type the code under it.</p>
  ${'BarcodeDetector' in window?`<button class="p15-btn" data-a="p15scan">${ic('qr')} Scan with camera</button><video id="p15-cam" playsinline muted class="p15-cam${P15.cam?'':' off'}"></video>`:''}
  <div class="p15-g p15-form"><label>Ticket code</label><input id="p15-code" maxlength="40" autocomplete="off" placeholder="18 letters and numbers"></div><button class="p15-btn ghost" data-a="p15check">Check ticket</button>
  ${r?`<div class="p15-g p15-res ${r.ok?'ok':'no'}">${ic(r.ok?'tick2':'info')}<span><b>${r.ok?`Welcome in: ${r.qty} seat${r.qty>1?'s':''}${r.collect?` · collect ${money(r.collect,r.currency)}`:''}`:r.why==='already in'?'Already used':r.why==='not paid'?'Ticket not paid':r.why==='not your event'?'Ticket for another event':'Ticket not found'}</b><small>${esc(r.event||'')}</small></span></div>`:''}`)}
Object.assign(P15V,{host:hostPlans15,newev:newEv15,hostboard:board15,door:door15});
(function(){
  Object.assign(A,{
    p15f(el){const k=el.dataset.k;['p15-hn','p15-et','p15-ev','p15-pd'].forEach(id=>{const x=document.getElementById(id);if(x)P15.f[id.slice(4)]=x.value});P15.f[k]=el.dataset.val;render()},
    async p15hostBuy(){if(P15.busy)return;const x=document.getElementById('p15-hn');if(x)P15.f.hn=x.value.trim();let b=hostBiz15();const me=S.me||{};
      if(!b&&(P15.f.hn||'').length<2){toast('Please write your host name.','info');return}
      P15.busy='host';render();
      try{let id=b&&b.id;if(!id)id=await API.rpc('biz_upsert15',{k:'host',nm:P15.f.hn,cty:me.city||'',ctry:me.country||'',lg:[],ab:'',cat:'',lic:''});
        const tr=trial15()&&!planOn15(b);await API.rpc(tr?'start_trial15':'buy_biz_plan15',{bid:id,prod:tr?(P15.f.plan||'host_pro'):planKey15(P15.f.plan||'host_pro')});await load15();P15.hb=undefined;P15.v='hostboard';toast(tr?'Your 14 free days have started.':'Your host plan is active.','tick2')}
      catch(e){toast(em15(e).includes('not open')?'Payments open soon.':'Could not start the plan. Please try again.','info')}P15.busy='';render()},
    async p15evCreate(){if(P15.busy)return;const f=P15.f,b=hostBiz15();['et','ev','pd'].forEach(k=>{const x=document.getElementById('p15-'+k);if(x)f[k]=x.value.trim()});
      if(!b||!planOn15(b)){P15.v='host';render();return}
      if((f.et||'').length<4){toast('Please write the event name (4 letters or more).','info');return}
      if((f.ev||'').length<3){toast('Please write the place.','info');return}
      const pay=D15()&&f.price!=='0';if(pay&&(f.pm||'PayPal')!=='Cash at the door'&&(f.pd||'').length<4){toast('Please write how guests pay you.','info');return}
      const me=S.me||{},tz=(window.TZCITY&&TZCITY[me.city])||Intl.DateTimeFormat().resolvedOptions().timeZone;
      const st=new Date(f.day+'T'+f.hr+':00');P15.busy='ev';render();
      try{const nid=await API.rpc('event_create15',{bid:b.id,k:f.kind,t:f.et,cty:me.city||'',ctry:me.country||'',ven:f.ev,st:st.toISOString(),n:Number(f.seats),pc:Number(f.price)*100,cur:(CMAP[me.country]&&CMAP[me.country][3])||'USD',nts:[],lg:[],wh:f.who});
        if(pay)await API.rpc('event_payhow15',{eid:nid,txt:payHowTxt15(f)});
        P15.f={};P15.hb=undefined;P15.ev={};P15.v='hostboard';toast('Your event is live.','tick2')}
      catch(e){const m=em15(e);toast(m.includes('limit')?'Your plan allows no more events this month.':m.includes('too many seats')?'Too many seats for your plan.':m.includes('host plan')?'Your host plan has ended. Please renew.':'Could not publish. Please try again.','info')}P15.busy='';render()},
    async p15promote(el){try{await API.rpc('promote15',{eid:el.dataset.id});P15.ev={};toast('Promoted: top of your city for 7 days.','tick2')}catch(e){toast('Could not promote. Please try again.','info')}},
    async p15hostCancel(el){if(!confirm15(D15()?'Cancel this event? Guests get their booking fee back as a free booking. Please return the ticket money you received.':'Cancel this event? Every guest gets all money back.'))return;try{const n=await API.rpc('host_cancel15',{eid:el.dataset.id});P15.hb=undefined;P15.ev={};toast(D15()?`Cancelled. ${n} guest${n===1?'':'s'} told.`:`Cancelled. ${n} ticket${n===1?'':'s'} refunded.`,'tick2')}catch(e){toast('Could not cancel. Please try again.','info')}render()},
    async p15check(){const x=document.getElementById('p15-code');const c=(x&&x.value||'').trim().replace(/^NM15:/,'');if(!c)return;try{P15.dr=await API.rpc('checkin15',{c})}catch(e){P15.dr={ok:false,why:'not found'}}render()},
    async p15scan(){try{const v=document.getElementById('p15-cam');const s=await navigator.mediaDevices.getUserMedia({video:{facingMode:'environment'}});P15.cam=s;v.srcObject=s;v.classList.remove('off');await v.play();
      const det=new BarcodeDetector({formats:['qr_code']});const loop=async()=>{if(!P15.cam)return;try{const r=await det.detect(v);if(r[0]){const c=r[0].rawValue.replace(/^NM15:/,'');s.getTracks().forEach(t=>t.stop());P15.cam=null;P15.dr=await API.rpc('checkin15',{c});render();return}}catch(e){}requestAnimationFrame(loop)};loop()}
      catch(e){toast('Camera is not allowed. Type the code instead.','info')}}
  });
  const _back=A.p15back;A.p15back=function(el){if(P15.cam){P15.cam.getTracks().forEach(t=>t.stop());P15.cam=null}P15.dr=null;
    const up={newev:'hostboard',door:'hostboard',hostboard:'host',credits:'hostboard'};if(up[P15.v]){P15.v=up[P15.v];render();return}return _back(el)};
})();
function confirm15(m){try{return window.confirm(m)}catch(e){return true}}

/* ---------- Plan 15: Sports Leagues (team registration, points table, need a player, organiser) ---------- */
P15.lg={};
const lgBiz15=()=>((P15.d&&P15.d.biz)||[]).find(b=>b.kind==='league');
function leagueDetail15(e){const L=P15.lg[e.id];if(L===undefined){API.rpc('league15',{eid:e.id}).then(r=>{P15.lg[e.id]=r||{teams:[]};render()}).catch(()=>{P15.lg[e.id]={teams:[]};render()});return p15wrap(p15top('Sports Leagues',true)+spinner('Loading'))}
  const mine=L.teams.find(t=>t.mine),f=P15.f;
  return p15wrap(p15top('Sports Leagues',true)+`<div class="p15-g p15-pad"><span class="p15-pill">${ic('ball2')} ${esc(e.sport||'League')}</span><h2>${esc(e.title)}</h2><small>Starts ${esc(evWhen(e))} · ${L.teams.length} of ${e.seats} teams · organiser ${esc(e.host)}</small></div>
  <div class="p15-sec"><b>Points table</b></div>
  ${L.teams.length?`<div class="p15-g">${L.teams.map((t,i)=>`<div class="p15-li"><b class="p15-rank">${i+1}</b><span class="tx"><b>${esc(t.name)}</b>${t.need?`<small class="p15-acc">Needs ${t.need} player${t.need>1?'s':''}${t.mine&&t.asks?` · ${t.asks} asked to join`:''}</small>`:''}</span>
    ${L.own?`<span class="p15-pts"><button data-a="p15pts" data-id="${t.id}" data-p="${t.points-1}" aria-label="Minus">−</button><b>${t.points}</b><button data-a="p15pts" data-id="${t.id}" data-p="${t.points+1}" aria-label="Plus">+</button></span>`:
      `<b>${t.points}</b>${t.need&&!t.mine?(t.asked?'<span class="p15-pill">Asked</span>':`<button class="p15-chip" data-a="p15ask" data-id="${t.id}">Ask to join</button>`):''}`}</div>`).join('')}</div>`:`<div class="p15-g p15-note">${ic('ball2')} No teams yet. Be the first to register.</div>`}
  ${!mine&&!L.own&&e.left?`<div class="p15-g p15-form"><label>Your team name</label><input id="p15-tn" maxlength="40" placeholder="e.g. Toronto Lions CC" value="${esc(f.tn||'')}">
    <label>Players you still need</label>${chips15('need',[['0','None'],['1','1'],['2','2'],['3','3'],['5','5']],f.need||'0')}</div>
   <div class="p15-buy"><span><b>${money(e.price,e.currency)}</b><small>${D15()&&e.price?`team fee, paid to the organiser + ${p15price('booking_fee')} booking fee`:'team fee for the season'}</small></span><button class="p15-btn" data-a="p15team" data-id="${e.id}"${P15.busy==='team'?' disabled':''}>${P15.busy==='team'?'Registering…':D15()&&e.price?`Register · ${p15price('booking_fee')} fee`:'Register team'}</button></div>
   ${P15.d&&P15.d.payTest?'<p class="p15-ex">Test mode: no real money is taken.</p>':''}`:mine?`<div class="p15-g p15-note">${ic('tick2')}<span>Your team <b>${esc(mine.name)}</b> is in this league.</span></div>`:''}`)}
function newLeague15(){const f=P15.f;f.sport=f.sport||'Cricket';f.teams=f.teams||'12';f.fee=f.fee||'500';f.day=f.day||days15()[13][0];
  return p15wrap(p15top('New League',true)+`<div class="p15-g p15-form">
   <label>Sport</label>${chips15('sport',[['Cricket','Cricket'],['Football','Football'],['Volleyball','Volleyball'],['Basketball','Basketball'],['Kabaddi','Kabaddi'],['Badminton','Badminton']],f.sport)}
   <label>League name</label><input id="p15-ln" maxlength="90" placeholder="e.g. GTA Weekend Cricket League" value="${esc(f.ln||'')}">
   <label>Grounds</label><input id="p15-lv" maxlength="120" placeholder="e.g. Brampton grounds" value="${esc(f.lv||'')}">
   <label>Number of teams</label>${chips15('teams',[['6','6'],['8','8'],['12','12'],['16','16'],['20','20']],f.teams)}
   <label>Team fee for the season</label>${chips15('fee',[['200','200'],['500','500'],['800','800'],['1000','1,000'],['1500','1,500']],f.fee)}
   <label>First match day</label>${chips15('day',days15().slice(6,20),f.day)}${D15()?payHowForm15(f):''}</div>
   <p class="p15-ex">${D15()?`Teams pay the fee straight to you. Captains pay NeuMarry a ${p15price('booking_fee')} booking fee.`:'We keep 5% of each team fee. The rest is paid to you.'}</p>
   <button class="p15-btn" data-a="p15lgCreate"${P15.busy==='lg'?' disabled':''}>${P15.busy==='lg'?'Saving…':'Publish league'}</button>`)}
function lgPlan15(){const b=lgBiz15(),f=P15.f,me=S.me||{};
  return p15wrap(p15top('Run a League',true)+`<p class="p15-sub">${D15()?'Teams register in the app and pay the season fee to you.':'Teams register and pay the season fee in the app.'} Points table and "need a player" are done for you.</p>
  ${b?`<div class="p15-g p15-note">${ic('tick2')}<span>Organiser: <b>${esc(b.name)}</b>${planOn15(b)?' · plan active':''}</span></div>`:`<div class="p15-g p15-form"><label>Organiser name people will see</label><input id="p15-on" maxlength="60" placeholder="e.g. GTA Cricket Club" value="${esc(f.on||'')}"><small>City: ${esc(me.city||'')} ${esc(me.country||'')}</small></div>`}
  <div class="p15-g p15-plan on"><span><b>League Organiser Plan</b><small>Leagues, teams, fees, points table</small></span><span class="p15-pr0"><b>${p15price('league_plan')}</b><small>/month</small></span></div>
  ${planOn15(b)?`<button class="p15-btn" data-a="p15open" data-v="newleague">New league</button>`:`<button class="p15-btn" data-a="p15lgBuy"${P15.busy==='lgp'?' disabled':''}>${P15.busy==='lgp'?'Starting…':'Start plan'}</button>${P15.d&&P15.d.payTest?'<p class="p15-ex">Test mode: no real money is taken.</p>':''}`}`)}
Object.assign(P15V,{lgplan:lgPlan15,newleague:newLeague15});
(function(){
  const _ed=evDetail15;evDetail15=function(id){const e=evFind(id);if(e&&e.kind==='league')return leagueDetail15(e);return _ed(id)};
  const _el=evList15;evList15=function(v){let h=_el(v);if(v==='ev-league')h=h.replace(`data-v="host"><span class="p15-b fern">${ic('mega2')}</span><span class="tx"><b>Host your own</b><small>Host Plan from ${p15price('host_basic')} a month</small>`,`data-v="lgplan"><span class="p15-b fern">${ic('ball2')}</span><span class="tx"><b>Run a league</b><small>Organiser Plan ${p15price('league_plan')} a month</small>`);return h};
  const _f=A.p15f;A.p15f=function(el){['p15-tn','p15-ln','p15-lv','p15-on','p15-pd'].forEach(id=>{const x=document.getElementById(id);if(x)P15.f[id.slice(4)]=x.value});return _f(el)};
  Object.assign(A,{
    async p15team(el){if(P15.busy)return;const x=document.getElementById('p15-tn');const nm=(x&&x.value||'').trim();if(nm.length<2){toast('Please write your team name.','info');return}
      P15.busy='team';render();const id=el.dataset.id;
      try{const r=await API.rpc('team_join15',{eid:id,nm,need:Number(P15.f.need||0)});P15.lg[id]=undefined;P15.f={};P15.tk=undefined;if(r&&r.direct&&r.toHost){P15.v='tickets';toast('Team registered. Pay the organiser as My Tickets shows.','tick2')}else toast('Your team is registered.','tick2')}
      catch(x){const m=em15(x);toast(m.includes('full')?'This league is full.':m.includes('already')?'You already have a team here.':m.includes('not open')?'Payments open soon.':'Could not register. Please try again.','info')}P15.busy='';render()},
    async p15ask(el){try{await API.rpc('ask_team15',{tid:el.dataset.id});P15.lg={};toast('The captain can see you want to join.','tick2')}catch(x){toast('Could not send. Please try again.','info')}render()},
    async p15pts(el){try{await API.rpc('team_points15',{tid:el.dataset.id,pts:Number(el.dataset.p)});P15.lg={}}catch(x){toast('Could not save points.','info')}render()},
    async p15lgBuy(){if(P15.busy)return;const x=document.getElementById('p15-on');if(x)P15.f.on=x.value.trim();let b=lgBiz15();const me=S.me||{};
      if(!b&&(P15.f.on||'').length<2){toast('Please write the organiser name.','info');return}P15.busy='lgp';render();
      try{const id=b?b.id:await API.rpc('biz_upsert15',{k:'league',nm:P15.f.on,cty:me.city||'',ctry:me.country||'',lg:[],ab:'',cat:'',lic:''});await API.rpc('buy_biz_plan15',{bid:id,prod:'league_plan'});await load15();toast('Your organiser plan is active.','tick2')}
      catch(e){toast(em15(e).includes('not open')?'Payments open soon.':'Could not start the plan. Please try again.','info')}P15.busy='';render()},
    async p15lgCreate(){if(P15.busy)return;const f=P15.f,b=lgBiz15();['ln','lv','pd'].forEach(k=>{const x=document.getElementById('p15-'+k);if(x)f[k]=x.value.trim()});
      if(!b||!planOn15(b)){P15.v='lgplan';render();return}if((f.ln||'').length<4){toast('Please write the league name.','info');return}if((f.lv||'').length<3){toast('Please write the grounds.','info');return}
      if(D15()&&(f.pm||'PayPal')!=='Cash at the door'&&(f.pd||'').length<4){toast('Please write how teams pay you.','info');return}
      const me=S.me||{};P15.busy='lg';render();
      try{const id=await API.rpc('event_create15',{bid:b.id,k:'league',t:f.ln,cty:me.city||'',ctry:me.country||'',ven:f.lv,st:new Date(f.day+'T10:00:00').toISOString(),n:Number(f.teams),pc:Number(f.fee)*100,cur:(CMAP[me.country]&&CMAP[me.country][3])||'USD',nts:[],lg:[],wh:'all'});
        await API.rpc('league_set_sport15',{eid:id,sp:f.sport});if(D15())await API.rpc('event_payhow15',{eid:id,txt:payHowTxt15(f)});P15.f={};P15.ev={};P15.v='ev-league';toast('Your league is live.','tick2')}
      catch(e){toast('Could not publish. Please try again.','info')}P15.busy='';render()}
  });
  const _bk=A.p15back;A.p15back=function(el){const up={newleague:'lgplan',lgplan:'ev-league'};if(up[P15.v]){P15.v=up[P15.v];render();return}return _bk(el)};
})();

/* ---------- Plan 15: Settle In screens (Find a Room, Post a Room, Travel Buddy, Job Referral, Trusted Experts, Moving-Out Sale) ---------- */
const cur15=()=>(CMAP[(S.me||{}).country]&&CMAP[(S.me||{}).country][3])||'USD';
const lockRow15=t=>`<div class="p15-lockrow">${ic('lock2')} ${t}</div>`;
function rooms15v(){const l=P15.rooms;if(l===undefined){API.rpc('rooms15',{maxrent:Number(P15.f.max||0)*100}).then(r=>{P15.rooms=r;render()}).catch(()=>{P15.rooms=[];render()});return p15wrap(p15top('Find a Room',true)+spinner('Loading'))}
  const TY={private:'Private room',shared:'Shared room',whole:'Whole place'};
  return p15wrap(p15top('Find a Room',true)+chips15('max',[['0','Any rent'],['700','Under 700'],['900','Under 900'],['1200','Under 1,200'],['1800','Under 1,800']],P15.f.max||'0')+
   (l.length?l.map(r=>`<div class="p15-g p15-room"><div class="p15-rh"><span class="tx"><b>${esc(r.title)}</b><small>${esc(r.area)} · ${esc(TY[r.type]||'')} · from ${esc(new Date(r.from).toLocaleDateString(RM_I18N.locale,{day:'numeric',month:'short'}))}</small></span><span class="p15-pr0"><b>${money(r.rent,r.currency)}</b><small>/month</small></span></div>
     <div class="p15-tags">${r.top?'<span class="p15-pill y">Top</span>':''}${r.verified?`<span class="p15-pill">${ic('tick2')} Verified</span>`:''}${(r.tags||[]).map(t=>`<span class="p15-pill">${esc(t)}</span>`).join('')}${r.agent?`<span class="p15-pill">Agent: ${esc(r.agent)}</span>`:''}</div>
     ${r.locked?`<button class="p15-unlock" data-a="p15open" data-v="plus">${ic('lock2')} Contact and address open with NeuMarry Plus</button>`:`<div class="p15-contact">${ic('pin')} ${esc(r.address||r.area)}<br>${ic('chat')} ${esc(r.contact)}</div>${r.mine?`<button class="p15-btn ghost" data-a="p15taken" data-id="${r.id}">Mark as taken</button>`:''}`}</div>`).join(''):
   `<div class="p15-g p15-note">${ic('bed2')} No rooms in your city at this rent yet. New rooms are posted every day.</div>`)+
   `<button class="p15-g p15-row" data-a="p15open" data-v="postroom"><span class="p15-b mint">${ic('home2')}</span><span class="tx"><b>Post a Room</b><small>${p15price('room_post')} for 30 days · agents: Agent Plan</small></span>${ic('chev2')}</button>`)}
function postRoom15(){const f=P15.f;f.rt=f.rt||'private';f.rent=f.rent||'800';f.av=f.av||days15()[6][0];
  return p15wrap(p15top('Post a Room',true)+`<div class="p15-g p15-form">
   <label>Room type</label>${chips15('rt',[['private','Private room'],['shared','Shared room'],['whole','Whole place']],f.rt)}
   <label>Title</label><input id="p15-rtl" maxlength="90" placeholder="e.g. Bright room near the station" value="${esc(f.rtl||'')}">
   <label>Area</label><input id="p15-rar" maxlength="60" placeholder="e.g. Scarborough" value="${esc(f.rar||'')}">
   <label>Rent per month (${esc(cur15())})</label>${chips15('rent',[['500','500'],['650','650'],['800','800'],['1000','1,000'],['1300','1,300'],['1800','1,800']],f.rent)}
   <label>Available from</label>${chips15('av',days15().slice(0,14),f.av)}
   <label>Good to know</label>${chips15('tg',[['Furnished','Furnished'],['Women only','Women only'],['Near transit','Near transit'],['Vegetarian kitchen','Vegetarian kitchen'],['No smoking','No smoking']],f.tg||'')}
   <label>Phone or email for replies (shown only to Plus members)</label><input id="p15-rct" maxlength="80" placeholder="+1 416 …" value="${esc(f.rct||'')}">
   <label>Street address (optional, Plus members only)</label><input id="p15-rad" maxlength="120" value="${esc(f.rad||'')}"></div>
   <button class="p15-g p15-plan${f.top?' on':''}" data-a="p15f" data-k="top" data-val="${f.top?'':'1'}"><span><b>Show at Top</b><small>First in your city for 7 days</small></span><span class="p15-pr0"><b>+${p15price('room_top')}</b></span></button>
   <button class="p15-btn" data-a="p15roomPost"${P15.busy==='room'?' disabled':''}>${P15.busy==='room'?'Posting…':`Post room · ${p15price('room_post')}${f.top?' + '+p15price('room_top'):''}`}</button>${P15.d&&P15.d.payTest?'<p class="p15-ex">Test mode: no real money is taken. Agents with the Agent Plan post for free.</p>':''}`)}
function buddy15v(){const l=P15.bd;if(l===undefined){API.rpc('buddy_mine15',{}).then(r=>{P15.bd=r;render()}).catch(()=>{P15.bd=[];render()});return p15wrap(p15top('Travel Buddy for Parents',true)+spinner('Loading'))}
  const f=P15.f;f.role=f.role||'family';f.fd=f.fd||days15()[9][0];
  const SN={met:'Met at the gate',changed:'Changed planes',landed:'Landed'};
  return p15wrap(p15top('Travel Buddy',true)+`<p class="p15-sub">A verified member on the same flight helps your parents at every step. You see each step live.</p>
  ${l.map(b=>`<div class="p15-g p15-pad"><div class="p15-rh"><span class="tx"><b>${esc(b.from)} → ${esc(b.to)}</b><small>${esc(new Date(b.date).toLocaleDateString(RM_I18N.locale,{weekday:'short',day:'numeric',month:'short'}))}${b.flight?' · '+esc(b.flight):''} · ${b.role==='family'?'My parents':'I can help'}</small></span><span class="p15-pill${b.status==='open'?' y':''}">${b.status==='open'?'Open':b.status==='matched'?'Matched':'Done'}</span></div>
    ${b.role==='family'&&b.status==='open'?(b.matches?`<div class="p15-buy"><span><b>${p15price('buddy')}</b><small>${b.matches} buddy on this flight · match fee</small></span><button class="p15-btn" data-a="p15bmatch" data-id="${b.id}">Get my buddy</button></div>`:`<div class="p15-note0">${ic('clock')} No buddy on this route yet. We show one here as soon as someone posts.</div>`):''}
    ${b.buddy?`<div class="p15-li"><span class="p15-b mint">${ic('user')}</span><span class="tx"><b>${esc(b.buddy.name)}${b.buddy.verified?' · Verified':''}</b><small>${esc((b.buddy.langs||[]).join(', '))}</small></span></div>`:''}
    ${(b.steps||[]).length?`<div class="p15-steps">${b.steps.map(s=>`<div class="p15-step"><span class="p15-dot">${ic('tick2')}</span><span><b>${SN[s.s]||''}</b><small>${esc(new Date(s.at).toLocaleTimeString(RM_I18N.locale,{hour:'numeric',minute:'2-digit'}))}</small></span></div>`).join('')}</div>`:''}
    ${b.role==='buddy'&&b.status==='matched'?`<div class="p15-chips">${['met','changed','landed'].map(s=>`<button class="p15-chip" data-a="p15bstep" data-id="${b.id}" data-s="${s}">${SN[s]}</button>`).join('')}</div>`:''}</div>`).join('')}
  <div class="p15-g p15-form"><label>Who is flying</label>${chips15('role',[['family','My parents need help'],['buddy','I am flying and can help']],f.role)}
   <label>From city</label><input id="p15-fc" maxlength="60" placeholder="e.g. Lagos" value="${esc(f.fc||'')}"><label>To city</label><input id="p15-tc" maxlength="60" placeholder="e.g. Toronto" value="${esc(f.tc||(S.me||{}).city||'')}">
   <label>Flight day</label>${chips15('fd',days15(),f.fd)}<label>Flight number (optional)</label><input id="p15-fno" maxlength="10" placeholder="e.g. BA75" value="${esc(f.fno||'')}"></div>
  <button class="p15-btn" data-a="p15bpost">${f.role==='family'?'Find a buddy':'Offer to help'}</button><p class="p15-ex">The thank-you for the buddy is paid by the family directly.</p>`)}
function ref15v(){const d=P15.rf;if(d===undefined){Promise.all([API.rpc('refs_mine15',{}),API.rpc('companies15',{q:P15.f.q||''})]).then(([a,b])=>{P15.rf=a;P15.co=b;render()}).catch(()=>{P15.rf={asked:[],inbox:[],credits:0};P15.co=[];render()});return p15wrap(p15top('Job Referral',true)+spinner('Loading'))}
  const co=P15.co||[],f=P15.f,ST={sent:'Waiting',referred:'Referred',declined:'Not this time',expired:'No reply · credit back'};
  return p15wrap(p15top('Job Referral',true)+`<p class="p15-sub">People who work there can refer you inside their company. No reply in 7 days? You get the request back.</p>
  ${f.co?`<div class="p15-g p15-form"><label>Company</label><b>${esc(f.co)}</b><label>Link to the job</label><input id="p15-jl" maxlength="400" placeholder="https://…" value="${esc(f.jl||'')}"><label>Short note (optional)</label><input id="p15-jn" maxlength="300" value="${esc(f.jn||'')}"></div>
    <div class="p15-buy"><span><b>${d.credits?`${d.credits} credit${d.credits>1?'s':''}`:p15price('ref_1')}</b><small>${d.credits?'one is used':'one request'}</small></span><button class="p15-btn" data-a="p15refAsk">Send request</button></div><button class="p15-btn ghost" data-a="p15f" data-k="co" data-val="">Choose another company</button>`:
   `<div class="p15-g p15-list">${co.length?co.map(c=>`<button class="p15-li p15-libtn" data-a="p15f" data-k="co" data-val="${esc(c.company)}"><span class="p15-b fern">${ic('brief')}</span><span class="tx"><b>${esc(c.company)}</b><small>${c.people} member${c.people>1?'s':''} inside</small></span>${ic('chev2')}</button>`).join(''):`<div class="p15-note0">${ic('brief')} No companies yet. Work somewhere? Add yours below so others can ask you.</div>`}</div>
    <button class="p15-g p15-row" data-a="p15refPack"><span class="p15-b lem">${ic('star2')}</span><span class="tx"><b>5 Job Referrals</b><small>${p15price('ref_5')} instead of ${money(((P15.d&&P15.d.prices&&P15.d.prices.ref_1)||0)*5,'USD')}</small></span>${ic('chev2')}</button>`}
  ${d.asked.length?`<div class="p15-sec"><b>Your requests</b></div><div class="p15-g">${d.asked.map(q=>`<div class="p15-li"><span class="tx"><b>${esc(q.company)}</b><small>${esc(new Date(q.at).toLocaleDateString(RM_I18N.locale,{day:'numeric',month:'short'}))}</small></span><span class="p15-pill${q.status==='sent'?' y':''}">${ST[q.status]}</span></div>`).join('')}</div>`:''}
  ${d.inbox.length?`<div class="p15-sec"><b>People asking you</b></div>${d.inbox.map(q=>`<div class="p15-g p15-pad"><b>${esc(q.name)}</b><small style="display:block">${esc(q.note)}</small><a class="p15-link" href="${esc(q.link)}" target="_blank" rel="noopener">Open the job</a>${q.status==='sent'?`<div class="p15-2"><button class="p15-btn ghost" data-a="p15refAns" data-id="${q.id}" data-y="0">Not this time</button><button class="p15-btn" data-a="p15refAns" data-id="${q.id}" data-y="1">I referred them</button></div>`:`<span class="p15-pill">${ST[q.status]}</span>`}</div>`).join('')}`:''}
  ${d.me?(d.me.verified?`<div class="p15-g p15-note">${ic('shield2')}<span>You refer people at <b>${esc(d.me.company)}</b> · work email checked.</span></div>`:
    `<div class="p15-g p15-form"><label>Check your work email at ${esc(d.me.company)}</label><small>People can ask you only after this check. We use the email only to send a code, then delete it.</small>
     ${f.codeSent?`<input id="p15-wc" inputmode="numeric" maxlength="6" autocomplete="one-time-code" placeholder="6-digit code" value="${esc(f.wc||'')}">`:`<input id="p15-we" type="email" inputmode="email" maxlength="120" placeholder="you@company.com" value="${esc(f.we||'')}">`}</div>
     ${f.codeSent?`<button class="p15-btn" data-a="p15refCode"${P15.busy==='rc'?' disabled':''}>Check the code</button><button class="p15-btn ghost" data-a="p15refAgain">Send a new code</button>`:`<button class="p15-btn" data-a="p15refSend"${P15.busy==='rs'?' disabled':''}>${P15.busy==='rs'?'Sending…':'Send me a code'}</button>`}`):`<div class="p15-g p15-form"><label>I work at (company name)</label><input id="p15-myco" maxlength="60" value="${esc(f.myco||'')}"><label>Company website</label><input id="p15-mydom" maxlength="60" placeholder="e.g. samplebank.com" value="${esc(f.mydom||'')}"></div><button class="p15-btn ghost" data-a="p15refMe">Let people ask me</button>`}`)}
function experts15v(){const k=P15.f.ek||'expert',cat=P15.f.ec||'',key=k+cat,l=(P15.ex||{})[key];
  if(l===undefined){API.rpc('experts15',{k,cat}).then(r=>{P15.ex=Object.assign(P15.ex||{},{[key]:r});render();const ids=(r||[]).map(x=>x.id).filter(Boolean);if(ids.length)API.rpc('biz_seen15',{ids}).catch(()=>{})}).catch(()=>{P15.ex=Object.assign(P15.ex||{},{[key]:[]});render()});return p15wrap(p15top('Trusted Experts',true)+spinner('Loading'))}
  const myx=((P15.d&&P15.d.biz)||[]).find(x=>x.kind==='expert'&&x.plan==='expert_pro'&&planOn15(x));
  return p15wrap(p15top('Trusted Experts',true)+(myx?`<div class="p15-g p15-note">${ic('star2')} Expert Pro: <b>${Number(myx.seen||0)}</b> people saw your page in the last 30 days.</div>`:'')+chips15('ek',[['expert','Experts'],['agent','Rental agents']],k)+(k==='expert'?chips15('ec',[['','All'],['Immigration','Immigration'],['Tax','Tax'],['Insurance','Insurance'],['Movers','Movers']],cat):'')+
   (l.length?l.map(b=>`<div class="p15-g p15-pad"><div class="p15-rh"><span class="tx"><b>${esc(b.name)}</b><small>${esc(b.city)}${b.langs&&b.langs.length?' · '+esc(b.langs.join(', ')):''}</small></span>${b.sponsored?'<span class="p15-pill y">Sponsored</span>':b.top?'<span class="p15-pill y">Top Spot</span>':''}</div>
     <div class="p15-tags">${b.checked?`<span class="p15-pill">${ic('shield2')} Licence checked</span>`:''}${b.category?`<span class="p15-pill">${esc(b.category)}</span>`:''}</div>${b.about?`<small style="display:block;margin-top:6px">${esc(b.about)}</small>`:''}
     ${b.locked?`<button class="p15-unlock" data-a="p15open" data-v="plus">${ic('lock2')} Prices and contact open with NeuMarry Plus</button>`:
      `${(b.services||[]).map(s=>`<div class="p15-li"><span class="tx"><b>${esc(s.title)}</b><small>${esc(s.detail)}</small></span><b>${money(s.price,s.currency)}</b></div>`).join('')}<button class="p15-btn" data-a="p15connect" data-id="${b.id}">${ic('chat')} Connect me</button><p class="p15-ex">Your name and email go to this expert only after you tap Connect me.</p>`}</div>`).join(''):
   `<div class="p15-g p15-note">${ic('shield2')} No ${k==='agent'?'rental agents':'experts'} here yet. They join every week.</div>`)+
   `<button class="p15-g p15-row" data-a="p15open" data-v="expplan"><span class="p15-b fern">${ic('store2')}</span><span class="tx"><b>Are you an expert or agent?</b><small>Expert Plan ${p15price('expert_plan')} · Agent Plan ${p15price('agent_plan')} a month</small></span>${ic('chev2')}</button>`)}
function sale15v(){const l=P15.sl;if(l===undefined){API.rpc('sales15',{}).then(r=>{P15.sl=r;render()}).catch(()=>{P15.sl=[];render()});return p15wrap(p15top('Moving-Out Sale',true)+spinner('Loading'))}
  const f=P15.f;
  return p15wrap(p15top('Moving-Out Sale',true)+(l.length?`<div class="p15-bento">${l.map(s=>`<div class="p15-g p15-item"><span class="p15-b lem big">${ic('tag2')}</span><b>${esc(s.title)}</b><small>${esc(s.area)}${s.leaving?` · leaving ${esc(new Date(s.leaving).toLocaleDateString(RM_I18N.locale,{day:'numeric',month:'short'}))}`:''}</small>
     <div class="p15-rh"><b class="p15-price">${money(s.price,s.currency)}</b>${s.top?'<span class="p15-pill y">Top</span>':''}</div>
     ${s.mine?(s.status==='open'?`<button class="p15-chip" data-a="p15saleTop" data-id="${s.id}">Show at Top ${p15price('sale_top')}</button>`:`<span class="p15-pill">${s.status==='paid'?'Paid · waiting for pickup':'Done'}</span>`):
       s.bought?(s.status==='paid'?`<button class="p15-chip on" data-a="p15saleGot" data-id="${s.id}">I got it</button>`:'<span class="p15-pill">Done</span>'):`<button class="p15-chip on" data-a="p15saleBuy" data-id="${s.id}">Buy</button>`}</div>`).join('')}</div>`:
   `<div class="p15-g p15-note">${ic('tag2')} Nothing for sale in your city yet.</div>`)+
   `<div class="p15-g p15-note">${ic('shield2')} Paying here opens soon. Until then nothing is charged.</div>
   <div class="p15-g p15-form"><label>Sell something</label><input id="p15-st" maxlength="60" placeholder="e.g. 3-seat sofa" value="${esc(f.st||'')}">
    <label>Price (${esc(cur15())})</label>${chips15('sp',[['10','10'],['25','25'],['50','50'],['100','100'],['150','150'],['300','300']],f.sp||'50')}
    <label>Pick-up area</label><input id="p15-sa" maxlength="60" placeholder="e.g. Etobicoke" value="${esc(f.sa||'')}"></div>
   <button class="p15-btn" data-a="p15salePost">Post · Seller Plan ${p15price('seller_plan')} a month</button>${P15.d&&P15.d.payTest?'<p class="p15-ex">Test mode: no real money is taken.</p>':''}`)}
function expPlan15(){const f=P15.f;f.ek2=f.ek2||'expert';const b=((P15.d&&P15.d.biz)||[]).find(x=>x.kind===f.ek2),me=S.me||{};
  return p15wrap(p15top('Expert or Agent',true)+chips15('ek2',[['expert','I am an expert'],['agent','I am a rental agent']],f.ek2)+
  `<div class="p15-g p15-form"><label>Business name</label><input id="p15-xn" maxlength="60" value="${esc(f.xn||(b&&b.name)||'')}">
   ${f.ek2==='expert'?`<label>What you do</label>${chips15('xc',[['Immigration','Immigration'],['Tax','Tax'],['Insurance','Insurance'],['Movers','Movers']],f.xc||'Immigration')}`:''}
   <label>Licence number (checked by us before your page shows "Licence checked")</label><input id="p15-xl" maxlength="40" value="${esc(f.xl||'')}">
   <label>One line about you</label><input id="p15-xa" maxlength="160" value="${esc(f.xa||'')}">
   ${f.ek2==='expert'?`<label>Your services and prices (${esc(cur15())})</label>${[0,1,2].map(i=>`<div class="p15-svc"><input id="p15-s${i}t" maxlength="80" placeholder="Service ${i+1}" value="${esc(f['s'+i+'t']||'')}"><input id="p15-s${i}p" inputmode="numeric" maxlength="6" placeholder="Price" value="${esc(f['s'+i+'p']||'')}"></div>`).join('')}`:''}
   <small>City: ${esc(me.city||'')} ${esc(me.country||'')}</small></div>
   ${f.ek2==='expert'?`<button class="p15-g p15-plan${f.xp==='pro'||f.xp==='elite'?'':' on'}" data-a="p15f" data-k="xp" data-val="std"><span><b>Expert Plan</b><small>Your page with services and prices · documents you share show as shared, not checked by NeuAmigo</small></span><span class="p15-pr0">${p15tag('expert_plan','/month')}</span></button>
   <button class="p15-g p15-plan${f.xp==='pro'?' on':''}" data-a="p15f" data-k="xp" data-val="pro"><span><b>Expert Pro <i class="p15-spon">Sponsored</i></b><small>Everything in Expert · shown first in Trusted Experts in your city, marked "Sponsored" · see how many people saw your page</small></span><span class="p15-pr0">${p15tag('expert_pro','/month')}</span></button>
   <button class="p15-g p15-plan${f.xp==='elite'?' on':''}" data-a="p15f" data-k="xp" data-val="elite"><span><b>Expert Elite <i class="p15-spon">Sponsored</i></b><small>Everything in Pro · only 3 per category in each city · new requests reach you first · a report every month</small></span><span class="p15-pr0">${p15tag('expert_elite','/month')}</span></button>`:`<div class="p15-g p15-plan on"><span><b>${f.ek2==='expert'?'Expert Plan':'Agent Plan'}</b><small>${f.ek2==='expert'?'Your page with services and prices · documents you share show as shared, not checked by NeuAmigo':'Post rooms for your clients · documents you share show as shared, not checked by NeuAmigo'}</small></span><span class="p15-pr0">${p15tag(f.ek2==='expert'?'expert_plan':'agent_plan','/month')}</span></div>`}
   ${prepay15(f.ek2==='expert'?(f.xp==='pro'?'expert_pro':f.xp==='elite'?'expert_elite':'expert_plan'):'agent_plan')}
   ${p15launch([f.ek2==='expert'?'expert_plan':'agent_plan'],f.ek2==='expert'?'experts':'agents')}
   <button class="p15-btn" data-a="p15expBuy"${P15.busy==='exp'?' disabled':''}>${P15.busy==='exp'?'Starting…':trial15()&&!(b&&planOn15(b))?'Start 14 days free · no card':`Start ${f.ek2==='expert'?(f.xp==='pro'?'Expert Pro':f.xp==='elite'?'Expert Elite':'Expert Plan'):'Agent Plan'} · ${p15price(f.ek2==='expert'?(f.xp==='pro'?'expert_pro':f.xp==='elite'?'expert_elite':'expert_plan'):'agent_plan')} a month`}</button>
   ${b&&planOn15(b)?`<button class="p15-g p15-row" data-a="p15open" data-v="leads"><span class="p15-b mint">${ic('chat')}</span><span class="tx"><b>People who asked you</b><small>Only members who tapped Connect me</small></span>${ic('chev2')}</button>${f.ek2==='expert'?`<button class="p15-btn ghost" data-a="p15xTop" data-id="${b.id}">Top Spot for 30 days · ${p15price('expert_top')}</button>`:''}`:''}`)}
function leads15v(){const b=((P15.d&&P15.d.biz)||[]).find(x=>x.kind===(P15.f.ek2||'expert'));const l=P15.ld;
  if(!b)return p15wrap(p15top('People who asked',true));if(l===undefined){API.rpc('leads15',{bid:b.id}).then(r=>{P15.ld=r;render()}).catch(()=>{P15.ld=[];render()});return p15wrap(p15top('People who asked',true)+spinner('Loading'))}
  return p15wrap(p15top('People who asked',true)+(l.length?`<div class="p15-g">${l.map(x=>`<div class="p15-li"><span class="p15-b mint">${ic('user')}</span><span class="tx"><b>${esc(x.name)}</b><small>${esc(x.email||'')}${x.note?' · '+esc(x.note):''}</small></span></div>`).join('')}</div>`:`<div class="p15-g p15-note">${ic('chat')} Nobody yet. Members see your page in Trusted Experts.</div>`))}
Object.assign(P15V,{rooms:rooms15v,postroom:postRoom15,buddy:buddy15v,referral:ref15v,experts:experts15v,sale:sale15v,expplan:expPlan15,leads:leads15v});
(function(){
  const keep=['p15-we','p15-wc','p15-rtl','p15-rar','p15-rct','p15-rad','p15-fc','p15-tc','p15-fno','p15-jl','p15-jn','p15-myco','p15-mydom','p15-st','p15-sa','p15-xn','p15-xl','p15-xa','p15-s0t','p15-s0p','p15-s1t','p15-s1p','p15-s2t','p15-s2p'];
  const grab=()=>keep.forEach(id=>{const x=document.getElementById(id);if(x)P15.f[id.slice(4)]=x.value.trim()});
  const _f=A.p15f;A.p15f=function(el){grab();const k=el.dataset.k;if(k==='max')P15.rooms=undefined;if(k==='ek'||k==='ec')P15.ex=P15.ex;if(k==='co'){P15.f.jl='';P15.f.jn=''}return _f(el)};
  const err=(m,map)=>{m=em15(m);for(const k in map)if(m.includes(k))return map[k];const own=/(Paying here opens soon\. Until then nothing is charged\.|This is not available in the app yet\.|PayPal could not open\. Please try again\.)/.exec(m);if(own)return own[1];return m.includes('not open')?'Payments open soon.':'Something went wrong. Please try again.'};
  const run=async(busy,fn,ok,map)=>{if(P15.busy)return;grab();P15.busy=busy;render();try{await fn();if(ok)toast(ok,'tick2')}catch(e){toast(err(e,map||{}),'info')}P15.busy='';render()};
  Object.assign(A,{
    p15roomPost(){const f=P15.f;grab();if((f.rtl||'').length<4){toast('Please write a short title.','info');return}if((f.rar||'').length<2){toast('Please write the area.','info');return}if((f.rct||'').length<5){toast('Please add a phone or email for replies.','info');return}
      run('room',async()=>{await API.rpc('room_post15',{t:f.rtl,ar:f.rar,rt:f.rt,rent:Number(f.rent)*100,cur:cur15(),av:f.av,tg:f.tg?[f.tg]:[],lg:[],ct:f.rct,adr:f.rad||'',top:!!f.top});P15.f={};P15.rooms=undefined;P15.v='rooms'},'Your room is posted for 30 days.')},
    p15taken(el){run('tk',async()=>{await API.rpc('room_taken15',{rid:el.dataset.id});P15.rooms=undefined},'Marked as taken.')},
    p15bpost(){const f=P15.f;grab();if((f.fc||'').length<2||(f.tc||'').length<2){toast('Please write both cities.','info');return}
      run('bp',async()=>{await API.rpc('buddy_post15',{r:f.role,fc:f.fc,tc:f.tc,fd:f.fd,fno:f.fno||'',lg:[]});P15.f={};P15.bd=undefined},f.role==='family'?'Trip saved. We show a buddy here when one is on your flight.':'Thank you. A family on your flight can now find you.')},
    p15bmatch(el){run('bm',async()=>{await API.rpc('buddy_match15',{bid:el.dataset.id});P15.bd=undefined},'Your buddy is matched.',{'no buddy':'The buddy is no longer available. We keep looking.'})},
    p15bstep(el){run('bs',async()=>{await API.rpc('buddy_step15',{bid:el.dataset.id,st:el.dataset.s});P15.bd=undefined},'The family can see this step now.')},
    p15refAsk(){const f=P15.f;grab();if(!/^https?:\/\//i.test(f.jl||'')){toast('Please paste the full job link (https://…).','info');return}
      run('ra',async()=>{await API.rpc('ref_ask15',{co:f.co,link:f.jl,nt:f.jn||''});P15.f={};P15.rf=undefined},'Request sent. Reply within 7 days, or you get it back.',{'no one there':'Nobody from this company is here now.'})},
    p15refSend(){const f=P15.f;grab();if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.we||'')){toast('Please write your work email.','info');return}
      run('rs',async()=>{await API.fn('ref-email',{email:f.we});P15.f.codeSent=true},'Code sent. Check your work email.',{'domain':'This email is not at your company website. Please use your work email.','wait':'Please wait a minute before asking for a new code.','send':'The email could not be sent. Please try again.'})},
    p15refCode(){const f=P15.f;grab();if(!/^\d{6}$/.test(f.wc||'')){toast('Please type the 6-digit code.','info');return}
      run('rc',async()=>{const ok=await API.rpc('ref_verify15',{c:f.wc});if(!ok)throw new Error('wrong code');P15.f.codeSent=false;P15.f.wc='';P15.f.we='';P15.rf=undefined},'Checked. People can now ask you for a referral.',{'wrong code':'That code is not right. Please check it.','expired':'The code has expired. Please ask for a new one.','too many':'Too many tries. Please ask for a new code.'})},
    p15refAgain(){P15.f.codeSent=false;P15.f.wc='';render()},
    p15refPack(){run('rp',async()=>{await API.rpc('ref_pack15',{});P15.rf=undefined},'5 referral credits added.')},
    p15refAns(el){run('rn',async()=>{await API.rpc('ref_answer15',{qid:el.dataset.id,yes:el.dataset.y==='1'});P15.rf=undefined},'Thank you. They can see your answer.')},
    p15refMe(){const f=P15.f;grab();if((f.myco||'').length<2||!(f.mydom||'').includes('.')){toast('Please write the company and its website.','info');return}
      run('rm',async()=>{await API.rpc('referrer_set15',{co:f.myco,dom:f.mydom,lg:[]});P15.rf=undefined},'Saved. Now check your work email below.')},
    p15connect(el){run('cn',async()=>{await API.rpc('connect15',{bid:el.dataset.id,nt:''})},'Sent. The expert will contact you by email.',{'plus needed':'Connect opens with NeuMarry Plus.'})},
    p15expBuy(){const f=P15.f;grab();const me=S.me||{},k=f.ek2||'expert';const ob0=((P15.d&&P15.d.biz)||[]).find(x=>x.kind===k),tr0=trial15()&&!(ob0&&planOn15(ob0));if((f.xn||'').length<2){toast('Please write your business name.','info');return}
      run('exp',async()=>{const id=await API.rpc('biz_upsert15',{k,nm:f.xn,cty:me.city||'',ctry:me.country||'',lg:[],ab:f.xa||'',cat:k==='expert'?(f.xc||'Immigration'):'',lic:f.xl||''});
        if(k==='expert')await API.rpc('service_set15',{bid:id,items:[0,1,2].map(i=>({title:f['s'+i+'t']||'',detail:'',price:Math.round(Number(f['s'+i+'p']||0)*100),currency:cur15()}))});
        const ob=((P15.d&&P15.d.biz)||[]).find(x=>x.kind===k),tr=trial15()&&!(ob&&planOn15(ob));const base=k==='expert'?'expert_plan':'agent_plan';await API.rpc(tr?'start_trial15':'buy_biz_plan15',{bid:id,prod:tr?base:planKey15(base)});await load15();P15.ex={}},tr0?'Your 14 free days have started. Your page shows in Trusted Experts.':'Your plan is active. Your page shows in Trusted Experts.')},
    p15xTop(el){run('xt',async()=>{await API.rpc('biz_top15',{bid:el.dataset.id});P15.ex={}},'Top Spot for 30 days.')},
    p15salePost(){const f=P15.f;grab();if((f.st||'').length<3){toast('Please write what you sell.','info');return}
      run('sp',async()=>{await API.rpc('sale_post15',{t:f.st,pc:Number(f.sp||50)*100,cur:cur15(),ar:f.sa||'',lv:null});P15.f={};P15.sl=undefined},'Posted.')},
    p15saleBuy(el){run('sb',async()=>{await API.rpc('sale_buy15',{sid:el.dataset.id});P15.sl=undefined},'Paid. Pick it up, then tap "I got it".',{'sold':'Someone bought it first.'})},
    p15saleGot(el){run('sg',async()=>{await API.rpc('sale_got15',{sid:el.dataset.id});P15.sl=undefined},'Thank you. The seller gets the money now.')},
    p15saleTop(el){run('st',async()=>{await API.rpc('sale_top15',{sid:el.dataset.id});P15.sl=undefined},'Shown at the top for 7 days.')}
  });
  const _bk=A.p15back;A.p15back=function(el){const up={postroom:'rooms',expplan:'experts',leads:'expplan'};if(up[P15.v]){P15.v=up[P15.v];render();return}return _bk(el)};
  const _o=A.p15open;A.p15open=function(el){const v=el.dataset.v;if(v==='rooms')P15.rooms=undefined;if(v==='buddy')P15.bd=undefined;if(v==='referral')P15.rf=undefined;if(v==='experts')P15.ex={};if(v==='sale')P15.sl=undefined;if(v==='leads')P15.ld=undefined;return _o(el)};
})();

/* ---------- Plan 15 phase 5: For Business hub, Event Services, Ad Spot, Sponsored box, new Me ---------- */
Object.assign(PH15,{'Host Plans':'hall','Event Services':'catering','Ad Spot':'city','Expert or Agent':'docs','League Organiser':'league'});
const bizOf15=k=>((P15.d&&P15.d.biz)||[]).find(b=>b.kind===k);
const until15=d=>new Date(d).toLocaleDateString(RM_I18N.locale,{day:'numeric',month:'short'});
function biz15v(){
  const st=k=>{const b=bizOf15(k);return planOn15(b)?`<span class="p15-pill">${ic('tick2')} Active</span>`:''};
  const row=(t,d,v,k)=>`<button class="p15-g p15-t span2 row" data-a="p15open" data-v="${v}">${ph15(t)}<span class="tx"><b>${esc(t)}</b><small>${esc(d)}</small></span>${k?st(k):''}${ic('chev2')}</button>`;
  return p15wrap(p15top('For Business',true)+`<p class="p15-sub">Reach people who just moved to your city. You pay a plan first; members find you inside NeuMarry.</p><div class="p15-bento">
   ${row('Host Plans','Run meetups, watch parties, festivals and trips · from '+p15price('host_basic')+' a month','host','host')}
   ${row('League Organiser','Run a sports league · '+p15price('league_plan')+' a month','lgplan','league')}
   ${row('Expert or Agent','Licensed experts and rental agents · from '+p15price('expert_plan')+' a month','expplan','expert')}
   ${row('Event Services','Catering, decor, music, photos for hosts · '+p15price('services_plan')+' a month','svcplan','services')}
   ${row('Ad Spot','One clear "Sponsored" box in your city · '+p15price('ad_spot')+' a month','adspot','')}</div>
   <button class="p15-g p15-row" data-a="p15open" data-v="services"><span class="p15-b mint">${ic('party')}</span><span class="tx"><b>Hosting an event?</b><small>Find catering, decor, music and photos near you</small></span>${ic('chev2')}</button>
   <div class="p15-g p15-note">${ic('shield2')} No hidden charges. Plans run month to month; you can stop any time.</div>`)}
const SVC15=[['Catering','Catering'],['Decor','Decor'],['Music','DJ & music'],['Photo','Photo & video'],['Venue','Venues']];
function svc15v(){const cat=P15.f.sc||'',key='services'+cat,l=(P15.ex||{})[key];
  if(l===undefined){API.rpc('experts15',{k:'services',cat}).then(r=>{P15.ex=Object.assign(P15.ex||{},{[key]:r});render()}).catch(()=>{P15.ex=Object.assign(P15.ex||{},{[key]:[]});render()});return p15wrap(p15top('Event Services',true)+spinner('Loading'))}
  return p15wrap(p15top('Event Services',true)+`<div class="p15-g p15-hero ph">${ph15('Event Services')}<small>Food, decor, music and photos for your event, from businesses in your city.</small></div>`+chips15('sc',[['','All']].concat(SVC15),cat)+
   (l.length?l.map(b=>`<div class="p15-g p15-pad"><div class="p15-rh"><span class="tx"><b>${esc(b.name)}</b><small>${esc(b.city)}</small></span>${b.top?'<span class="p15-pill y">Top Spot</span>':''}</div>
     <div class="p15-tags">${b.category?`<span class="p15-pill">${esc((SVC15.find(x=>x[0]===b.category)||[0,b.category])[1])}</span>`:''}</div>${b.about?`<small style="display:block;margin-top:6px">${esc(b.about)}</small>`:''}
     ${b.locked&&!(b.services&&b.services.length)?`<button class="p15-unlock" data-a="p15open" data-v="host">${ic('lock2')} Prices and booking open for hosts and Plus members</button>`:
      `${(b.services||[]).map(s=>`<div class="p15-li"><span class="tx"><b>${esc(s.title)}</b>${s.detail?`<small>${esc(s.detail)}</small>`:''}</span><b>${money(s.price,s.currency)}</b></div>`).join('')}<button class="p15-btn" data-a="p15svcAsk" data-id="${b.id}">${ic('chat')} Request booking</button><p class="p15-ex">Your name and email go to this business only after you tap Request booking. You agree the price with them directly.</p>`}</div>`).join(''):
   `<div class="p15-g p15-note">${ic('store2')} No event services in your city yet. They join every week.</div>`)+
   `<button class="p15-g p15-row" data-a="p15open" data-v="svcplan"><span class="p15-b fern">${ic('store2')}</span><span class="tx"><b>Do you run an event business?</b><small>Event Services Plan ${p15price('services_plan')} a month</small></span>${ic('chev2')}</button>`)}
function svcPlan15(){const f=P15.f,b=bizOf15('services'),me=S.me||{};
  return p15wrap(p15top('Event Services Plan',true)+`<div class="p15-g p15-hero ph">${ph15('Event Services')}<small>Hosts in your city see your prices and send you booking requests.</small></div>
  <div class="p15-g p15-form"><label>Business name</label><input id="p15-vn" maxlength="60" value="${esc(f.vn||(b&&b.name)||'')}">
   <label>What you do</label>${chips15('vc',SVC15,f.vc||'Catering')}
   <label>One line about you</label><input id="p15-va" maxlength="160" value="${esc(f.va||'')}">
   <label>Your services and prices (${esc(cur15())})</label>${[0,1,2].map(i=>`<div class="p15-svc"><input id="p15-v${i}t" maxlength="80" placeholder="Service ${i+1}" value="${esc(f['v'+i+'t']||'')}"><input id="p15-v${i}p" inputmode="numeric" maxlength="6" placeholder="Price" value="${esc(f['v'+i+'p']||'')}"></div>`).join('')}
   <small>City: ${esc(me.city||'')} ${esc(me.country||'')}</small></div>
  <button class="p15-btn" data-a="p15svcBuy"${P15.busy==='svc'?' disabled':''}>${P15.busy==='svc'?'Starting…':planOn15(b)?`Save and add a month · ${p15price('services_plan')}`:`Start Event Services Plan · ${p15price('services_plan')} a month`}</button>
  ${planOn15(b)?`<div class="p15-g p15-note">${ic('tick2')} Your plan is active until ${esc(until15(b.planUntil))}.</div>
   <button class="p15-g p15-row" data-a="p15open" data-v="svcleads"><span class="p15-b mint">${ic('chat')}</span><span class="tx"><b>Booking requests</b><small>Hosts who tapped Request booking</small></span>${ic('chev2')}</button>
   <button class="p15-btn ghost" data-a="p15xTop" data-id="${b.id}">Top Spot for 30 days · ${p15price('services_top')}</button>`:''}
  ${P15.d&&P15.d.payTest?'<p class="p15-ex">Test mode: no real money is taken.</p>':''}`)}
function svcLeads15(){const b=bizOf15('services'),l=P15.vl;if(!b)return p15wrap(p15top('Booking requests',true));
  if(l===undefined){API.rpc('leads15',{bid:b.id}).then(r=>{P15.vl=r;render()}).catch(()=>{P15.vl=[];render()});return p15wrap(p15top('Booking requests',true)+spinner('Loading'))}
  return p15wrap(p15top('Booking requests',true)+(l.length?`<div class="p15-g">${l.map(x=>`<div class="p15-li"><span class="p15-b mint">${ic('user')}</span><span class="tx"><b>${esc(x.name)}</b><small>${esc(x.email||'')}${x.note?' · '+esc(x.note):''}</small></span></div>`).join('')}</div>`:`<div class="p15-g p15-note">${ic('chat')} No requests yet. Hosts see your page in Event Services.</div>`))}
function adSpot15(){const f=P15.f,l=P15.ads,me=S.me||{};
  if(l===undefined){API.rpc('ads_mine15',{}).then(r=>{P15.ads=r;render()}).catch(()=>{P15.ads=[];render()});return p15wrap(p15top('Ad Spot',true)+spinner('Loading'))}
  const n=v=>Number(v||0).toLocaleString(RM_I18N.locale);
  return p15wrap(p15top('Ad Spot',true)+`<div class="p15-g p15-hero ph">${ph15('Ad Spot')}<small>One "Sponsored" box on the Home screen of members in ${esc(me.city||'your city')}. Real views and taps, counted for you.</small></div>
  ${l.length?`<div class="p15-sec"><b>Your ads</b></div>${l.map(a=>`<div class="p15-g p15-pad"><div class="p15-rh"><span class="tx"><b>${esc(a.title)}</b><small>${esc(a.city)} · ${esc(new Date(a.month).toLocaleDateString(RM_I18N.locale,{month:'long',year:'numeric'}))}</small></span><span class="p15-pill${a.status==='live'?'':' y'}">${({live:'Live',check:'Waiting for check',removed:'Not approved',ended:'Ended'})[a.status]||''}</span></div>
    <div class="p15-kv"><div><small>Views</small><b>${n(a.views)}</b></div><div><small>Taps</small><b>${n(a.taps)}</b></div><div><small>Tap rate</small><b>${a.views?(a.taps/a.views*100).toFixed(1)+'%':'–'}</b></div></div></div>`).join('')}`:''}
  <div class="p15-g p15-form"><label>Headline (4 to 60 letters)</label><input id="p15-at" maxlength="60" placeholder="e.g. Fresh home-style food, delivered" value="${esc(f.at||'')}">
   <label>One more line (optional)</label><input id="p15-ab" maxlength="90" value="${esc(f.ab||'')}">
   <label>Link (https://…)</label><input id="p15-au" maxlength="300" inputmode="url" placeholder="https://" value="${esc(f.au||'')}">
   <label>Month</label>${chips15('afs',[['0','Normal · '+p15price('ad_spot')],['1','Festival season · '+p15price('ad_spot_festival')]],f.afs||'0')}</div>
  <div class="p15-g p15-note">${ic('shield2')} Every ad is checked by us before it shows. It always carries the word "Sponsored". No ads for money transfers, loans, visas or anything against the law.</div>
  <button class="p15-btn" data-a="p15adBuy"${P15.busy==='ad'?' disabled':''}>${P15.busy==='ad'?'Sending…':`Buy one month · ${p15price(f.afs==='1'?'ad_spot_festival':'ad_spot')}`}</button>
  ${P15.d&&P15.d.payTest?'<p class="p15-ex">Test mode: no real money is taken.</p>':''}`)}
/* the one Sponsored box on Home: real ad of this city, or nothing */
function adBox15(){const a=P15.ad;if(a===undefined){P15.ad=null;API.rpc('ad_for15',{}).then(r=>{P15.ad=r||null;if(r)render()}).catch(()=>{});return ''}
  if(!a)return '';return `<button class="p15-g p15-ad" data-a="p15adTap" data-id="${esc(a.id)}"><span class="p15-pill">Sponsored</span><b>${esc(a.title)}</b>${a.body?`<small>${esc(a.body)}</small>`:''}<span class="p15-ad-go">${ic('chev2')}</span></button>`}
function me15(){const me=S.me||{},d=P15.d||{},biz=(d.biz||[]).filter(b=>b.kind!=='advertiser');
  const BK={host:['Host Plans','hostboard'],league:['League Organiser','lgplan'],expert:['Expert or Agent','expplan'],agent:['Expert or Agent','expplan'],services:['Event Services','svcplan']};
  const row=(icn,tone,t,s,a,v)=>`<button class="p15-g p15-row" data-a="${a}"${v?` data-v="${v}"`:''}><span class="p15-b ${tone}">${ic(icn)}</span><span class="tx"><b>${t}</b><small>${s}</small></span>${ic('chev2')}</button>`;
  return p15wrap(p15top('Me')+`<div class="p15-g p15-pad p15-mehd"><span class="p15-av">${esc(((me.name||'?').trim()[0]||'?').toUpperCase())}</span><span class="tx"><b>${esc(me.name||'')}${d.tick?` <span class="p15-pill">${ic('shield2')} Verified</span>`:''}</b><small>${esc([me.city,me.country].filter(Boolean).join(', '))}</small></span></div>
  <div class="p15-sec"><b>Membership</b></div>
  ${row('star2','lem','NeuMarry Plus',d.plus?'Active until '+esc(until15(d.plusUntil)):'Full details, early booking · '+p15price('plus_m')+' a month','p15open','plus')}
  ${row('shield2','mint','Verified Tick',d.tick?'Active until '+esc(until15(d.tickUntil)):'People trust you faster · '+p15price('tick'),'p15open','tick')}
  <div class="p15-sec"><b>My things</b></div>
  ${row('party','fern','My Tickets','Your seats with their QR codes','p15open','tickets')}
  ${row('bed2','mint','My rooms, trips and requests','Find a Room, Travel Buddy, Job Referral','tab" data-k="settle','')}
  ${biz.length?`<div class="p15-sec"><b>My business</b></div>${biz.map(b=>{const k=BK[b.kind]||['For Business','biz'];return row('store2','fern',esc(b.name||k[0]),esc(k[0])+' · '+(planOn15(b)?'active until '+esc(until15(b.planUntil)):'plan not active'),'p15open',k[1])}).join('')}`:''}
  ${row('mega2','lem','For Business','Hosts, experts, event services, ads','p15open','biz')}
  ${me.isAdmin?row('chart','mint','Admin panel','Members, payments and checks','openAdmin','')+row('mega2','mint','Ads to check','Approve or remove new Ad Spot ads','p15open','adcheck'):''}
  <div class="p15-sec"><b>Help and account</b></div>
  <div class="p15-g">
   <button class="p15-li p15-libtn" data-a="lang"><span class="p15-b mint">${ic('globe')}</span><span class="tx"><b>Language</b><small>${esc((LANGS_ALL.find(x=>x[0]===RM_I18N.lang)||LANGS_ALL[0])[1])}</small></span>${ic('chev2')}</button>
   <button class="p15-li p15-libtn" data-a="helpOpen"><span class="p15-b mint">${ic('mail')}</span><span class="tx"><b>Help and contact</b><small>Questions, complaints, Grievance Officer</small></span>${ic('chev2')}</button>
   <button class="p15-li p15-libtn" data-a="legal" data-k="terms"><span class="p15-b mint">${ic('info')}</span><span class="tx"><b>Terms of Service</b></span>${ic('chev2')}</button>
   <button class="p15-li p15-libtn" data-a="legal" data-k="privacy"><span class="p15-b mint">${ic('lock2')}</span><span class="tx"><b>Privacy Policy</b></span>${ic('chev2')}</button>
   <button class="p15-li p15-libtn" data-a="deleteAsk"><span class="p15-b mint">${ic('trash')}</span><span class="tx"><b>Delete my account</b><small>Permanently remove your data</small></span>${ic('chev2')}</button></div>
  <button class="p15-btn ghost" data-a="logout">Log out</button>
  <p class="p15-ex">NeuMarry ${esc(CFG.version)} · ${esc(API.email())}</p>`)}
function adCheck15(){const l=P15.ac;if(l===undefined){API.rpc('ads_check15',{}).then(r=>{P15.ac=r||[];render()}).catch(()=>{P15.ac=[];render()});return p15wrap(p15top('Ads to check',true)+spinner('Loading'))}
  return p15wrap(p15top('Ads to check',true)+(l.length?l.map(a=>`<div class="p15-g p15-pad"><span class="p15-pill">Sponsored</span><h2 style="margin:8px 0 2px">${esc(a.title)}</h2>${a.body?`<small style="display:block">${esc(a.body)}</small>`:''}<small style="display:block;margin-top:6px">${esc(a.by)} · ${esc(a.city)}</small><a class="p15-link" href="${esc(a.url)}" target="_blank" rel="noopener">Open the link</a>
   <div class="p15-2"><button class="p15-btn ghost" data-a="p15adRev" data-id="${a.id}" data-y="0">Remove</button><button class="p15-btn" data-a="p15adRev" data-id="${a.id}" data-y="1">Approve</button></div></div>`).join(''):`<div class="p15-g p15-note">${ic('tick2')} No ads waiting.</div>`))}
Object.assign(P15V,{adcheck:adCheck15,biz:biz15v,services:svc15v,svcplan:svcPlan15,svcleads:svcLeads15,adspot:adSpot15});
(function(){
  const keep=['p15-vn','p15-va','p15-v0t','p15-v0p','p15-v1t','p15-v1p','p15-v2t','p15-v2p','p15-at','p15-ab','p15-au'];
  const grab=()=>keep.forEach(id=>{const x=document.getElementById(id);if(x)P15.f[id.slice(4)]=x.value.trim()});
  const _f=A.p15f;A.p15f=function(el){grab();return _f(el)};
  const err=(m,map)=>{m=em15(m);for(const k in map)if(m.includes(k))return map[k];const own=/(Paying here opens soon\. Until then nothing is charged\.|This is not available in the app yet\.|PayPal could not open\. Please try again\.)/.exec(m);if(own)return own[1];return m.includes('not open')?'Payments open soon.':'Something went wrong. Please try again.'};
  const run=async(busy,fn,ok,map)=>{if(P15.busy)return;grab();P15.busy=busy;render();try{await fn();if(ok)toast(ok,'tick2')}catch(e){toast(err(e,map||{}),'info')}P15.busy='';render()};
  const _rm=renderMe;renderMe=function(){if(P15on()&&!P15.v&&!P15.mat)return me15();return _rm()};
  const _h=home15;home15=function(){const h=_h();const a=adBox15();return a?h.replace(/<\/div><\/div>$/,a+'</div></div>'):h};
  Object.assign(A,{
    p15svcAsk(el){run('va',async()=>{await API.rpc('connect15',{bid:el.dataset.id,nt:'Event booking request'})},'Sent. The business will contact you by email.',{'plus needed':'Booking opens for hosts and Plus members.'})},
    p15svcBuy(){const f=P15.f;grab();const me=S.me||{};if((f.vn||'').length<2){toast('Please write your business name.','info');return}
      const items=[0,1,2].map(i=>({title:f['v'+i+'t']||'',detail:'',price:Math.round(Number(f['v'+i+'p']||0)*100),currency:cur15()})).filter(x=>x.title);
      if(!items.length){toast('Please add at least one service with its price.','info');return}
      if(items.some(x=>!(x.price>0))){toast('Please write a price for every service.','info');return}
      run('svc',async()=>{const id=await API.rpc('biz_upsert15',{k:'services',nm:f.vn,cty:me.city||'',ctry:me.country||'',lg:[],ab:f.va||'',cat:f.vc||'Catering',lic:''});
        await API.rpc('service_set15',{bid:id,items});await API.rpc('buy_biz_plan15',{bid:id,prod:'services_plan'});await load15();P15.ex={}},'Your plan is active. Hosts can find you in Event Services.')},
    p15adBuy(){const f=P15.f;grab();const me=S.me||{};if((f.at||'').length<4){toast('Please write a headline (at least 4 letters).','info');return}if(!/^https:\/\/[^\s.]+\.[^\s]+$/i.test(f.au||'')){toast('Please paste a full link starting with https://','info');return}
      run('ad',async()=>{await API.rpc('ad_buy15',{nm:me.name||'Advertiser',t:f.at,bd:f.ab||'',u:f.au,festival:f.afs==='1'});P15.f={};P15.ads=undefined;await load15()},'Received. We check your ad, then it goes live in your city.',{'details':'Please check the headline and link.'})},
    p15adRev(el){run('ar',async()=>{await API.rpc('ad_review15',{aid:el.dataset.id,ok:el.dataset.y==='1'});P15.ac=undefined},el.dataset.y==='1'?'Approved. It is live now.':'Removed.')},
    p15adTap(el){const a=P15.ad;if(!a)return;try{API.rpc('ad_tap15',{aid:a.id})}catch(e){}try{window.open(a.url,'_blank','noopener')}catch(e){}}
  });
  const _bk=A.p15back;A.p15back=function(el){const up={svcplan:'biz',svcleads:'svcplan',adspot:'biz',services:'biz',adcheck:null};if(up[P15.v]){P15.v=up[P15.v];render();return}return _bk(el)};
  const _o=A.p15open;A.p15open=function(el){const v=el.dataset.v;if(v==='services')P15.ex={};if(v==='adspot')P15.ads=undefined;if(v==='svcleads')P15.vl=undefined;if(v==='adcheck')P15.ac=undefined;return _o(el)};
})();

/* ---------- Plan 15 admin: 'New app' tab in the admin panel (real rows only; every number opens its details) ---------- */
(function(){
  if(typeof renderAdmin3!=='function')return;
  const BKN={host:'Hosts',league:'League organisers',expert:'Experts',agent:'Rental agents',services:'Event services',advertiser:'Advertisers'};
  const mny=(c,cur)=>money(c,cur||'USD');const LB={league_fee:'League team fees',sale_item:'Moving-out sale items',ticket:'Event tickets'};
  async function load(){try{A3.p15=await API.rpc('admin15',{})}catch(e){A3.p15=false}try{A3.p15ads=await API.rpc('ads_check15',{})||[]}catch(e){A3.p15ads=[]}render()}
  const kpi=(n,l,s,k)=>`<button class="a3k${String(n).length>9?' a3k-l':''}" style="--c:#3BBF8A" data-a="a3p15" data-k="${k}" aria-label="${esc(l)}: ${esc(String(n))}. Open details"><b>${esc(String(n))}</b><span>${esc(l)}</span>${s?`<small>${esc(s)}</small>`:''}<em class="a3more">Details ›</em></button>`;
  function a3new(){const o=A3.p15;if(o===undefined){A3.p15=null;load()}
    if(!o)return `<div class="a3c">${o===false?'<p class="a3m">Could not load. Tap refresh.</p>':spinner('Loading')}</div>`;
    const k=A3.p15k,paid=o.paid30||[],tot={};paid.forEach(p=>{tot[p.currency]=(tot[p.currency]||0)+Number(p.cents)});const test=paid.length&&paid.every(p=>p.test);
    const bz=Object.values(o.biz||{}).reduce((a,b)=>a+b,0),lic=o.lic||[],ads=A3.p15ads||[];
    const back=`<button class="a3back" data-a="a3p15" data-k="">${ic('back')} Back</button>`;
    if(k==='money')return back+`<div class="a3c"><div class="a3h"><b>Paid, last 30 days</b><span>${test?'test mode':''}</span></div>${paid.length?paid.map(p=>`<div class="a3kv"><span>${esc(LB[p.product]||p.label)} · ${p.n}×</span><b>${esc(mny(p.cents,p.currency))}</b></div>`).join(''):'<p class="a3m">Nothing paid yet.</p>'}</div>
      <div class="a3c"><div class="a3h"><b>Our share from tickets</b><span>10% + booking fees</span></div>${(o.cut30||[]).length?o.cut30.map(c=>`<div class="a3kv"><span>${c.seats} seat${c.seats>1?'s':''}</span><b>${esc(mny(c.cents,c.currency))}</b></div>`).join(''):'<p class="a3m">No tickets sold yet.</p>'}</div>`;
    if(k==='biz')return back+`<div class="a3c"><div class="a3h"><b>Businesses with an active plan</b><span>${bz}</span></div>${Object.keys(o.biz||{}).length?Object.entries(o.biz).map(([x,n])=>`<div class="a3kv"><span>${esc(BKN[x]||x)}</span><b>${n}</b></div>`).join(''):'<p class="a3m">None yet.</p>'}</div>`;
    if(k==='members')return back+`<div class="a3c"><div class="a3h"><b>Members</b><span>now</span></div><div class="a3kv"><span>NeuMarry Plus active</span><b>${o.plus}</b></div><div class="a3kv"><span>Verified Tick active</span><b>${o.tick}</b></div></div>`;
    if(k==='live')return back+`<div class="a3c"><div class="a3h"><b>Live in the app</b><span>now</span></div><div class="a3kv"><span>Upcoming events</span><b>${o.events}</b></div><div class="a3kv"><span>Rooms posted</span><b>${o.rooms}</b></div><div class="a3kv"><span>Moving-out sale items</span><b>${o.sales}</b></div></div>`;
    const need=lic.length+ads.length,m=Object.entries(tot).map(([c,v])=>mny(v,c)).join(' + ')||mny(0,'USD');
    return `<div class="a3g">${kpi(m,'Paid in 30 days',test?'test mode, no real money':`${paid.reduce((a,p)=>a+Number(p.n),0)} payments`,'money')}${kpi(o.plus,'Plus members',`${o.tick} with Verified Tick`,'members')}${kpi(bz,'Businesses',`active plans`,'biz')}${kpi(o.events,'Upcoming events',`${o.rooms} rooms · ${o.sales} sale items`,'live')}</div>
     ${(o.days30||[]).some(Boolean)?`<div class="a3c"><div class="a3h"><b>Payments per day</b><span>30 days</span></div><div class="a3bars">${(()=>{const v=o.days30,mx=Math.max(1,...v);return v.map((n,i)=>`<i data-a="a3p15" data-k="money" role="button" aria-label="${n} payments, ${v.length-1-i} days ago" style="height:${Math.max(3,Math.round(n/mx*100))}%"></i>`).join('')})()}</div></div>`:''}
     ${need?'':`<div class="a3c a3ok">${ic('check')} Nothing waiting for you.</div>`}
     ${ads.length?`<div class="a3c"><div class="a3h"><b>Ads to check</b><span>${ads.length}</span></div>${ads.map(a=>`<div class="a3r"><span><b>${esc(a.title)}</b><small>${esc(a.body||'')}</small><small>${esc(a.by)} · ${esc(a.city)} · <a class="a3lnk" href="${esc(a.url)}" target="_blank" rel="noopener">link</a></small></span></div><div class="a3btns"><button class="btn ghost sm" data-a="a3p15ad" data-id="${a.id}" data-y="0">Remove</button><button class="btn primary sm" data-a="a3p15ad" data-id="${a.id}" data-y="1">Approve</button></div>`).join('')}</div>`:''}
     ${lic.length?`<div class="a3c"><div class="a3h"><b>Licences to check</b><span>${lic.length}</span></div>${lic.map(b=>`<div class="a3r"><span><b>${esc(b.name)}</b><small>${esc(BKN[b.kind]||b.kind)}${b.category?' · '+esc(b.category):''} · ${esc([b.city,b.country].filter(Boolean).join(', '))}</small><small>Licence: ${esc(b.licence)}${b.active?'':' · plan not active'}</small></span></div><div class="a3btns"><button class="btn ghost sm" data-a="a3p15lic" data-id="${b.id}" data-y="0">Not valid</button><button class="btn primary sm" data-a="a3p15lic" data-id="${b.id}" data-y="1">Licence checked</button></div>`).join('')}
       <p class="a3m">Check the number on the official register of that country before you tap "Licence checked".</p></div>`:''}`}
  const _t=a3tabsHtml;a3tabsHtml=function(){const h=_t();return P15on()?h.replace('<button role="tab"',`<button role="tab" aria-selected="${A3.tab==='new'}" class="${A3.tab==='new'?'on':''}" data-a="a3tab" data-k="new">New app</button><button role="tab"`):h};
  const _h=a3home;a3home=function(){return A3.tab==='new'?a3new():_h()};
  const _r=renderAdmin3;renderAdmin3=function(){const h=_r();return A3.tab==='new'?h.replace(/<h2>[^<]*<\/h2>/,'<h2>New app</h2>'):h};
  const run=async(fn,ok)=>{try{await fn();toast(ok,'check')}catch(e){toast('Could not save. Please try again.','x')}A3.p15=undefined;render()};
  Object.assign(A,{
    a3p15(el){A3.p15k=el.dataset.k||null;render();const s=document.querySelector('.a3v .scroll');if(s)s.scrollTop=0},
    a3p15ad(el){run(()=>API.rpc('ad_review15',{aid:el.dataset.id,ok:el.dataset.y==='1'}),el.dataset.y==='1'?'Approved. It is live now.':'Removed.')},
    a3p15lic(el){run(()=>API.rpc('admin_biz_verify15',{bid:el.dataset.id,ok:el.dataset.y==='1'}),el.dataset.y==='1'?'Marked as licence checked.':'Licence removed from the page.')}
  });
  const _rl=A.a3reload;A.a3reload=function(){A3.p15=undefined;return _rl.apply(this,arguments)};
  const _tb=A.a3tab;A.a3tab=function(el){A3.p15k=null;if(el.dataset.k==='new')A3.p15=undefined;return _tb(el)};
  const _up=A.a3up;if(_up)A.a3up=function(){if(A3.tab==='new'&&A3.p15k){A3.p15k=null;render();return}return _up.apply(this,arguments)};
})();

/* Every product page opens with its own HD photo (his ask 8 Nov 00:14: people understand by seeing). */
(function(){
  const VPH={'ev-meetups':'Friend Meetups','ev-watch':'Watch Parties','ev-festival':'Festivals','ev-trip':'Day Trips','ev-league':'Sports Leagues',rooms:'Find a Room',postroom:'Find a Room',buddy:'Travel Buddy for Parents',referral:'Job Referral',experts:'Trusted Experts',sale:'Moving-Out Sale',host:'Host Plans',lgplan:'League Organiser',expplan:'Expert or Agent'};
  Object.keys(VPH).forEach(v=>{const f=P15V[v];if(typeof f!=='function')return;P15V[v]=function(){const h=f.apply(this,arguments);const i=h.indexOf('<div class="p15-top">');if(i<0||h.includes('p15-hero ph'))return h;
    const j=h.indexOf('</h1>',i);const k=j<0?-1:h.indexOf('</div>',j);if(k<0)return h;return h.slice(0,k+6)+`<div class="p15-banner">${ph15(VPH[v])}</div>`+h.slice(k+6)}});
})();

/* Google Play for member products inside the Android app (his Play rule, 8 Nov 2026). When the server says a payment
   is needed and this phone has Google Play billing, Play's own payment sheet opens; the server checks the purchase
   with Google (play15) and keeps it as a credit; then the same action runs again and uses that credit.
   Plus is a Play subscription. Business plans and Ad Spot are not sold inside the app. */
(function(){
  const FN={buy_tick15:'nm_tick',ref_pack15:'nm_ref_5',ref_ask15:'nm_ref_1',sale_top15:'nm_sale_top',room_post15:'nm_room_post'};
  const BYP={tick:'nm_tick',tick_renew:'nm_tick',room_post:'nm_room_post',room_top:'nm_room_top',ref_1:'nm_ref_1',ref_5:'nm_ref_5',sale_top:'nm_sale_top'};
  const notOpen=e=>/payments are not open yet/.test(em15(e));
  async function playBuy(pid,sub,yearly){const B=Bill();if(!B||!S.me)throw new Error('payments are not open yet');
    const r=await B.getProducts(sub?{ids:[pid]}:{ids:[pid],type:'inapp'});const pd=((r&&r.products)||[]).find(x=>x.productId===pid);
    if(!pd)throw new Error('store_unavailable');let args={productId:pid,accountId:S.me.id};
    if(sub){const o=(pd.offers||[]).find(x=>x.basePlanId===(yearly?'plus-y':'plus-m')&&!x.offerId)||(pd.offers||[])[0];if(!o)throw new Error('store_unavailable');args.offerToken=o.offerToken}
    let res;try{res=await B.purchase(args)}catch(e){const c=String((e&&e.code)||'');if(c==='cancelled'){P15.lastCancel=Date.now();const x=new Error('cancelled');x.code='cancelled';throw x}throw new Error(c==='billing_3'?'Google Play billing is not available on this phone.':'Google Play could not finish the payment.')}
    const p=((res&&res.purchases)||[]).find(x=>(x.products||[]).includes(pid));if(!p){P15.lastCancel=Date.now();throw new Error('cancelled')}
    if(p.state===2)throw new Error('Your payment is pending. It switches on when Google Play confirms it.');
    return API.fn('play15',{productId:pid,purchaseToken:p.purchaseToken})}
  P15.playBuy=playBuy;
  /* OFF (owner 8 Nov 2026 09:24: "sab kuch website par bechenge abhi ke liye"): nothing is sold inside the Android app for now. */
  const PLAY_ON=false;
  const _rpc=API.rpc.bind(API);
  if(PLAY_ON)API.rpc=async function(name,args){
    if(name==='buy_plus15'&&Bill()&&P15.d&&!P15.d.payTest){const v=await playBuy('neumarry_plus',true,!!(args&&args.yearly));if(!v||!v.entitled)throw new Error('Google Play has not confirmed this payment yet.');return v}
    let tries=0;
    for(;;){try{return await _rpc(name,args)}catch(e){
      if(!(FN[name]&&Bill()&&notOpen(e))||tries>=2)throw e;
      const m=/not open yet: (\w+)/.exec(em15(e));const pid=(m&&BYP[m[1]])||(name==='room_post15'&&args&&args.top&&tries?'nm_room_top':FN[name]);
      tries++;await playBuy(pid,false)}}};
  /* a cancelled Play sheet says nothing */
  const _t=toast;toast=function(m,i){if(m==='cancelled'||/^Something went wrong/.test(m)&&P15.lastCancel&&Date.now()-P15.lastCancel<1500)return;return _t.apply(this,arguments)};
})();

/* Website payments with PayPal (owner 8 Nov 2026 09:38: personal PayPal until the company bank + GST). When an action
   needs a payment, the website opens PayPal for that one product; after paying, the member comes back to the app,
   the payment is checked with PayPal, and the same action runs again and uses it. Nothing is sold inside the
   Android app (Google's rule); there the member sees a plain note. Payments that go on to other members (tickets,
   team fees, sale items) open later with a licensed payment partner. */
(function(){
  const KEY='nm.pp15';
  const _rpc=API.rpc.bind(API);
  const need=e=>{const m=/payments are not open yet: (\w+)/.exec(em15(e));return m&&m[1]};
  API.rpc=async function(name,args){
    try{return await _rpc(name,args)}catch(e){
      const own=(t,raw)=>{toast(t,'info');P15.shownAt=Date.now();P15.shownMsg=t;const x=new Error(t);x.raw=raw;return x};
      if(/p2p payments coming soon/.test(em15(e)))throw own('Paying here opens soon. Until then nothing is charged.','p2p coming soon');
      const prod=need(e);if(!prod)throw e;
      if(isNative)throw own('This is not available in the app yet.','not in app');
      let r;try{r=await API.fn('pay15',{action:'start',product:prod,web:true,site:(typeof naOn==='function'&&naOn())?'neuamigo':'neumarry'})}catch(z){throw own('PayPal could not open. Please try again.','paypal')}
      if(!r||!r.url)throw own('PayPal could not open. Please try again.','paypal');
      try{localStorage.setItem(KEY,JSON.stringify({order:r.order,name,args,at:Date.now(),v:P15.v}))}catch(z){}
      location.href=r.url;
      await new Promise(()=>{})}};
  /* back from PayPal: check the payment, then finish what the member started */
  async function resume(){let p=null;try{p=JSON.parse(localStorage.getItem(KEY)||'null')}catch(e){}
    const q=new URLSearchParams(location.search).get('pp15');if(!p||!p.order){if(q)history.replaceState(null,'',location.pathname);return}
    if(q==='cancel'||Date.now()-p.at>36e5){try{localStorage.removeItem(KEY)}catch(e){}history.replaceState(null,'',location.pathname);if(q==='cancel')toast('Payment cancelled. Nothing was charged.','info');return}
    let r=null;for(let i=0;i<4;i++){try{r=await API.fn('pay15',{action:'check',order:p.order})}catch(e){r=null}if(r&&r.status!=='waiting')break;await new Promise(f=>setTimeout(f,1500))}
    if(!r||r.status!=='paid'){toast(r&&r.status==='waiting'?'PayPal has not confirmed it yet. Please open this again in a minute.':'The payment did not go through. Nothing was charged.','info');if(!r||r.status!=='waiting'){try{localStorage.removeItem(KEY)}catch(e){}}return}
    try{localStorage.removeItem(KEY)}catch(e){}history.replaceState(null,'',location.pathname);
    try{await _rpc(p.name,p.args);await load15();P15.v=['book15','team_join15'].includes(p.name)?'tickets':(p.v||null);Object.keys(P15).forEach(k=>{if(['rooms','bd','rf','sl','ld','ads','tk'].includes(k))P15[k]=undefined});P15.ex={};render();toast('Paid with PayPal. Done.','tick2')}
    catch(e){await load15();render();toast('Paid. Please tap the button once more to finish.','info')}}
  const _lm=loadMe;loadMe=async function(){const r=await _lm.apply(this,arguments);if(P15on())setTimeout(resume,300);return r};
  /* the note shown above is the only one: the screen's own error toast right after it stays quiet */
  const _t=toast;toast=function(m){if(P15.shownAt&&Date.now()-P15.shownAt<1500&&m!==P15.shownMsg)return;return _t.apply(this,arguments)};
})();


/* ---------- Plan 15 go-live: short sign-up + "Life Partner" (the matrimony part, as before) (owner 8 Nov 2026) ---------- */
const join15={};
function cOpts15(sel){return (typeof COUNTRIES!=='undefined'?COUNTRIES:[]).map(c=>`<option value="${esc(c[0])}"${c[0]===sel?' selected':''}>${c[6]||''} ${esc(c[0])}</option>`).join('')}
function renderJoin15(){const j=join15,e=j.err||{};
  return `<div class="p15join"><div class="scroll p15s" id="main"><div class="main-inner p15">
   <div class="p15-brand"><img src="img/icon-192.png" alt=""><b>NeuMarry</b></div>
   <h2 class="p15-h1">Welcome. Three quick things.</h2><p class="p15-sub">So we can show rooms, events and people near you.</p>
   <div class="p15-g p15-form">
    <label for="j-name">Your name</label><input id="j-name" maxlength="60" autocomplete="name" value="${esc(j.name||'')}">${e.name?`<small class="p15-err">${esc(e.name)}</small>`:''}
    <label for="j-ctry">Country you live in</label><select id="j-ctry"><option value="">Choose</option>${cOpts15(j.ctry)}</select>
    <label for="j-city">City</label><input id="j-city" maxlength="60" autocomplete="address-level2" placeholder="e.g. Toronto" value="${esc(j.city||'')}">
    <label for="j-oc">Where you grew up (your roots)</label><select id="j-oc"><option value="">Choose</option>${cOpts15(j.oc)}</select>${e.ctry?`<small class="p15-err">${esc(e.ctry)}</small>`:''}
   </div>
   <div class="p15-g p15-form">
    <label class="p15-ck"><input type="checkbox" id="j-18"${j.c18?' checked':''}><span>I am 18 or older.</span></label>
    <label class="p15-ck"><input type="checkbox" id="j-terms"${j.terms?' checked':''}><span>I agree to the <a href="#" data-a="legal" data-k="terms">Terms of Service</a> and the <a href="#" data-a="legal" data-k="privacy">Privacy Policy</a>.</span></label>
    <label class="p15-ck"><input type="checkbox" id="j-mk"${j.mk?' checked':''}><span>Optional: send me event news by email. I can stop it any time.</span></label>${e.ck?`<small class="p15-err">${esc(e.ck)}</small>`:''}
   </div>
   <button class="p15-btn" data-a="p15join"${j.busy?' disabled':''}>${j.busy?'Saving…':'Start'}</button>
   <button class="p15-btn ghost" data-a="logout">Log out</button>
  </div></div></div>`}
function mat15bar(){const m=document.querySelector('#app .main-inner');if(!m||m.querySelector('.p15-matback'))return;const b=document.createElement('button');b.className='p15-matback';b.dataset.a='p15matExit';b.innerHTML=ic('back2')+'<span>NeuMarry home</span>';m.insertBefore(b,m.firstChild)}
(function(){
  const _mfs=meFromServer;meFromServer=function(m){const r=_mfs(m);r.p15light=!!(m&&m.profile&&m.profile.p15_light);return r};
  const _ss=startSignup;startSignup=function(){if(P15on()&&!P15.lifeFlow){S.screen='p15join';render();return}return _ss.apply(this,arguments)};
  const _r=render;render=function(){document.documentElement.classList.toggle('p15mat',P15on()||P15_PUBLIC);if(S.screen==='p15join'){let html=renderJoin15()+(sheet?renderSheet():'');if(typeof brand15==='function')html=brand15(html);app.innerHTML=html;return}return _r.apply(this,arguments)};
  const grab=()=>{const v=id=>{const x=document.getElementById(id);return x?(x.type==='checkbox'?x.checked:x.value.trim()):undefined};
    Object.assign(join15,{name:v('j-name'),ctry:v('j-ctry'),city:v('j-city'),oc:v('j-oc'),c18:v('j-18'),terms:v('j-terms'),mk:v('j-mk')})};
  Object.assign(A,{
    async p15join(){grab();const j=join15,e={};if((j.name||'').length<2)e.name='Please write your name.';if(!j.ctry||!j.oc)e.ctry='Please choose both countries.';if(!(j.c18&&j.terms))e.ck='Please tick the first two boxes.';
      j.err=e;if(Object.keys(e).length){render();return}j.busy=true;render();
      try{saveConsent({mkt:!!j.mk});await API.rpc('p15_join',{nm:j.name,ctry:j.ctry,cty:j.city||'',oc:j.oc,mk:!!j.mk});location.reload()}
      catch(x){j.busy=false;render();toast('Could not save. Please try again.','info')}},
    p15life(){const me=S.me||{};if(!me.p15light){P15.mat=true;P15.v=null;S.tab='matches';render();return}
      sheet={type:'p15life'};render()},
    p15lifeGo(){sheet=null;P15.lifeFlow=true;const me=S.me||{};startSignup();if(S.draft){Object.assign(S.draft,{name:S.draft.name||me.name||'',country:S.draft.country||me.country||'',city:S.draft.city||me.city||'',oc:S.draft.oc||me.oc||''});render()}},
    p15matExit(){P15.mat=false;P15.v=null;S.tab='matches';view=null;render()}
  });
  const _sh=renderSheet;renderSheet=function(){if(sheet&&sheet.type==='p15life')return sheetShell('Life Partner',`<p>Meet someone from your roots for marriage. Your marriage profile takes about 10 minutes: a few details, a photo, and an ID and selfie check, so everyone here is real.</p><p class="hint">Only for people who are 18 or older, legally free to marry, and looking for a marriage partner. You can leave it any time.</p>`,`<button class="btn ghost" data-a="closeSheet">Not now</button><button class="btn primary" data-a="p15lifeGo">Make my profile</button>`);return _sh.apply(this,arguments)};
  const _n=A.suNext;A.suNext=async function(){const r=await _n.apply(this,arguments);if(P15.lifeFlow&&S.screen==='app'){P15.lifeFlow=false;try{await API.rpc('p15_life_on',{});await loadMe()}catch(e){}P15.mat=true;S.tab='matches';render()}return r};
  const _cancel=A.suBack;A.suBack=function(){if(P15.lifeFlow&&S.step===1&&!S.editMode){P15.lifeFlow=false;S.draft=null;S.screen='app';render();return}return _cancel.apply(this,arguments)};
})();
/* In-app key points of the Terms and Privacy for the new NeuMarry (from the approved Part B / section 10, owner ok 8 Nov 00:40). */
(function(){
  const T15=['Terms of Service: the key points',['You must be 18 or older. One account per person, in your real name.',
    'NeuMarry is a platform: hosts, experts, agents, sellers and buddies are independent members or businesses, not our staff.',
    'Every price and fee is shown before you pay. Nothing is sold inside the Android app for now; payments are made on neumarry.com.',
    'Event tickets and team fees are paid straight to the host, to the details shown on your ticket; NeuMarry only takes the booking fee. If the host cancels, the host returns your money and your booking fee comes back as a free booking.',
    'Life Partner (matrimony) is only for people who are legally free to marry; ID and selfie are checked as before.',
    'We can suspend accounts that break these rules, including fake listings, harassment and asking for money.']];
  const P15P=['Privacy Policy: the key points',['We collect only what you give for each service (rooms, trips, referrals, events, your business page) and use it to provide it and keep members safe.',
    'Your phone number and email are never shown to other members, except the contact you choose to add to a room post or a business page.',
    'When you tap Connect me or Request booking, only that one business receives your name and email.',
    'We never see or store your full card or bank numbers. Payment records are kept for 8 years because tax law requires it.',
    'You can correct or delete your data at any time: Me, then Delete my account.',
    'Questions or complaints go to our Grievance Officer, who replies within 30 days.']];
  const OLD={terms:LEGAL.terms,privacy:LEGAL.privacy};
  const _sh=renderSheet;renderSheet=function(){if(sheet&&sheet.type==='legal'){const on=P15on()&&!P15.mat;LEGAL.terms=on?T15:OLD.terms;LEGAL.privacy=on?P15P:OLD.privacy}return _sh.apply(this,arguments)};
})();
/* Public first screens for the new NeuMarry (before sign-in): switched on with P15_PUBLIC on launch day. */
(function(){
  if(!P15_PUBLIC)return;
  const fix=h=>h.replace('NeuMarry · verified matrimony','NeuMarry · for people living abroad')
    .replace(/Ready to marry\./,'Your people are here.')
    .replace('Verified matrimony for marrying someone of your roots, in the country you live in now.','Rooms, job referrals, a flight buddy for your parents, events and friends.')
    .replace(/<div class="c3chips">[\s\S]*?<\/div>/,`<div class="c3chips">${['🏠 Rooms','✈️ Flight buddy','🎉 Events','💼 Referrals'].map(t=>`<span>${t}</span>`).join('')}</div>`)
    .replace('Draw your roots line →','Create my account →');
  if(typeof renderWelcomeC3==='function'){const _w=renderWelcomeC3;renderWelcomeC3=function(){return fix(_w.apply(this,arguments))}}
  const _w0=renderWelcome;renderWelcome=function(){return fix(_w0.apply(this,arguments))};
  const _a=renderAuth;renderAuth=function(){return _a.apply(this,arguments).replace('I am 18 or older, and I am joining NeuMarry to find a marriage partner.','I am 18 or older.')
    .replace('Choose how you want to sign in. Next you build your profile and upload an ID and a selfie, so everyone here is real.','Choose how you want to sign in. Then three quick things, and you are in.')
    .replace(/, including how NeuMarry verifies members and uses my details to suggest matches\./,'.')
    .replace('Optional: send me event invitations and offers by email and WhatsApp. I can stop them at any time.','Optional: send me event news by email. I can stop it any time.')};
  document.documentElement.classList.add('p15pub');
  if(typeof v2near==='function'){const _v=v2near;v2near=function(){return ''}}
})();

/* ---------- Plan 15 direct pay: host's guest list ("Guests and payments") (owner ok 8 Nov 2026 11:44) ---------- */
P15.gs={};
function guests15(eid){const l=P15.gs[eid],e=(P15.hb||[]).find(x=>x.id===eid);
  if(l===undefined){API.rpc('host_guests15',{eid}).then(r=>{P15.gs[eid]=r||[];render()}).catch(()=>{P15.gs[eid]=[];render()});return p15wrap(p15top('Guests and payments',true)+spinner('Loading'))}
  const f=P15.f;if(e&&f.pmFor!==eid){f.pmFor=eid;const m=/^(PayPal|Bank transfer|e-Transfer): (.*)$/.exec(e.payHow||'');f.pm=e.payHow==='Cash at the door'?'Cash at the door':m?m[1]:'PayPal';f.pd=m?m[2]:''}
  return p15wrap(p15top('Guests and payments',true)+(e?`<div class="p15-g p15-pad"><h2>${esc(e.title)}</h2><small>${esc(evWhen(e))} · ${e.sold} of ${e.seats} booked</small></div>`:'')+
   (l.length?`<div class="p15-g">${l.map(g=>`<div class="p15-li"><span class="tx"><b>${esc(g.name)}</b><small>${e&&e.kind==='league'?'Team':`${g.qty} seat${g.qty>1?'s':''}`}</small><small>Code ${esc(g.code)}</small><small>${g.toHost?money(g.toHost,g.currency):'Free'}${g.in?' · checked in':''}</small></span>
     ${g.direct&&g.toHost?`<button class="p15-chip${g.hostPaid?' on':''}" data-a="p15gpaid" data-id="${g.id}" data-e="${eid}" data-y="${g.hostPaid?0:1}">${g.hostPaid?'Paid ✓':'Mark paid'}</button>`:''}</div>`).join('')}</div>`:
    `<div class="p15-g p15-note">${ic('user')} No bookings yet.</div>`)+
   `<div class="p15-g p15-form">${payHowForm15(f)}</div><button class="p15-btn ghost" data-a="p15paysave" data-e="${eid}">Save payment details</button>
   <p class="p15-ex">Guests write their code in the payment note, so you can match each payment.</p>`)}
(function(){
  const get=v=>v&&v.startsWith('guests:')?()=>guests15(v.slice(7)):null;
  const _rm=renderMatches;renderMatches=function(){if(P15on()&&P15.v&&get(P15.v))return get(P15.v)();return _rm()};
  const _me=renderMe;renderMe=function(){if(P15on()&&P15.v&&get(P15.v))return get(P15.v)();return _me()};
  Object.assign(A,{
    async p15gpaid(el){try{await API.rpc('host_paid15',{tid:el.dataset.id,yes:el.dataset.y==='1'});P15.gs[el.dataset.e]=undefined;P15.hb=undefined;API.rpc('host_board15',{}).then(r=>{P15.hb=r;render()})}catch(e){toast('Could not save. Please try again.','info')}render()},
    async p15paysave(el){const f=P15.f,x=document.getElementById('p15-pd');if(x)f.pd=x.value.trim();if(f.pm!=='Cash at the door'&&(f.pd||'').length<4){toast('Please write how guests pay you.','info');return}
      try{await API.rpc('event_payhow15',{eid:el.dataset.e,txt:payHowTxt15(f)});P15.hb=undefined;API.rpc('host_board15',{}).then(r=>{P15.hb=r;render()});toast('Saved. Guests see it on their ticket.','tick2')}catch(e){toast('Could not save. Please try again.','info')}}
  });
  const _bk=A.p15back;A.p15back=function(el){if(P15.v&&P15.v.startsWith('guests:')){P15.v='hostboard';P15.f={};render();return}return _bk(el)};
})();

/* Theme button in the Home header (his rule 8 Nov 2026 13:46: light by default, dark only if the member picks it). */
Object.assign(A,{p15theme(){const lt=document.documentElement.classList.contains('gl-lt');try{localStorage.setItem('nm.glassmode',lt?'dark':'light')}catch(e){}render()}});

/* ---------- part13: City picker on Home (his ok 8 Nov 2026 17:49) ----------
   The pin chip shows the city you are in NOW (saved on this phone), not only the profile city.
   Tap it: search a city or 'Use my location' (nearest city, phone asks permission once).
   If the phone's time zone shows another country than the chosen city, Home asks once: change city? Never silent. */
const WORLD15 = `Surat|India|21.17|72.83;Mumbai|India|19.08|72.88;Delhi|India|28.61|77.21;Bengaluru|India|12.97|77.59;Ahmedabad|India|23.02|72.57;Hyderabad|India|17.39|78.49;Chennai|India|13.08|80.27;Kolkata|India|22.57|88.36;Pune|India|18.52|73.86;Jaipur|India|26.91|75.79;Vadodara|India|22.31|73.18;Rajkot|India|22.30|70.80;Chandigarh|India|30.73|76.78;Lucknow|India|26.85|80.95;Kochi|India|9.93|76.27;Goa|India|15.49|73.83;Indore|India|22.72|75.86;Amritsar|India|31.63|74.87;Noida|India|28.54|77.39;Gurugram|India|28.46|77.03;
Lagos|Nigeria|6.52|3.38;Abuja|Nigeria|9.08|7.40;Accra|Ghana|5.60|-0.19;Nairobi|Kenya|-1.29|36.82;Johannesburg|South Africa|-26.20|28.05;Cairo|Egypt|30.04|31.24;Casablanca|Morocco|33.57|-7.59;Addis Ababa|Ethiopia|9.03|38.74;Kampala|Uganda|0.35|32.58;Dakar|Senegal|14.72|-17.47;
Manila|Philippines|14.60|120.98;Cebu|Philippines|10.32|123.89;Jakarta|Indonesia|-6.21|106.85;Bangkok|Thailand|13.76|100.50;Ho Chi Minh City|Vietnam|10.82|106.63;Hanoi|Vietnam|21.03|105.85;Seoul|South Korea|37.57|126.98;Busan|South Korea|35.18|129.08;Tokyo|Japan|35.68|139.69;Osaka|Japan|34.69|135.50;Beijing|China|39.90|116.40;Shanghai|China|31.23|121.47;Shenzhen|China|22.54|114.06;Taipei|Taiwan|25.03|121.57;Kuala Lumpur|Malaysia|3.14|101.69;Karachi|Pakistan|24.86|67.01;Lahore|Pakistan|31.55|74.34;Islamabad|Pakistan|33.68|73.05;Dhaka|Bangladesh|23.81|90.41;Kathmandu|Nepal|27.72|85.32;Colombo|Sri Lanka|6.93|79.86;
Riyadh|Saudi Arabia|24.71|46.68;Jeddah|Saudi Arabia|21.49|39.19;Doha|Qatar|25.29|51.53;Abu Dhabi|United Arab Emirates|24.45|54.38;Sharjah|United Arab Emirates|25.35|55.42;Muscat|Oman|23.59|58.41;Beirut|Lebanon|33.89|35.50;Amman|Jordan|31.95|35.93;Istanbul|Turkey|41.01|28.98;Tehran|Iran|35.69|51.39;Tel Aviv|Israel|32.09|34.78;
Mexico City|Mexico|19.43|-99.13;Guadalajara|Mexico|20.66|-103.35;Monterrey|Mexico|25.69|-100.32;São Paulo|Brazil|-23.55|-46.63;Rio de Janeiro|Brazil|-22.91|-43.17;Buenos Aires|Argentina|-34.60|-58.38;Bogotá|Colombia|4.71|-74.07;Lima|Peru|-12.05|-77.04;Santiago|Chile|-33.45|-70.67;Kingston|Jamaica|18.02|-76.80;Port of Spain|Trinidad and Tobago|10.65|-61.52;
Warsaw|Poland|52.23|21.01;Kraków|Poland|50.06|19.94;Kyiv|Ukraine|50.45|30.52;Bucharest|Romania|44.43|26.10;Budapest|Hungary|47.50|19.04;Prague|Czech Republic|50.08|14.44;Athens|Greece|37.98|23.73;Moscow|Russia|55.76|37.62;Helsinki|Finland|60.17|24.94;Luxembourg|Luxembourg|49.61|6.13`
  .split(';').map(s => s.trim()).filter(Boolean).map(s => { const p = s.split('|'); return [p[0], p[1], '', +p[2], +p[3]] });
const TZC15 = {'Asia/Calcutta':'India','Asia/Kolkata':'India','America/Toronto':'Canada','America/Vancouver':'Canada','America/Edmonton':'Canada','America/Winnipeg':'Canada','America/Halifax':'Canada','America/Regina':'Canada','America/St_Johns':'Canada','America/Montreal':'Canada',
  'America/New_York':'United States','America/Chicago':'United States','America/Denver':'United States','America/Los_Angeles':'United States','America/Phoenix':'United States','America/Anchorage':'United States','America/Detroit':'United States','Pacific/Honolulu':'United States',
  'Australia/Sydney':'Australia','Australia/Melbourne':'Australia','Australia/Brisbane':'Australia','Australia/Perth':'Australia','Australia/Adelaide':'Australia','Australia/Hobart':'Australia','Australia/Darwin':'Australia',
  'Europe/London':'United Kingdom','Europe/Dublin':'Ireland','Asia/Dubai':'United Arab Emirates','Asia/Singapore':'Singapore','Pacific/Auckland':'New Zealand','Europe/Berlin':'Germany','Europe/Paris':'France','Europe/Amsterdam':'Netherlands','Europe/Madrid':'Spain','Europe/Rome':'Italy','Europe/Lisbon':'Portugal','Europe/Warsaw':'Poland','Europe/Zurich':'Switzerland','Europe/Stockholm':'Sweden','Europe/Oslo':'Norway','Europe/Copenhagen':'Denmark','Europe/Brussels':'Belgium','Europe/Vienna':'Austria',
  'Asia/Manila':'Philippines','Africa/Lagos':'Nigeria','Africa/Accra':'Ghana','Africa/Nairobi':'Kenya','Africa/Johannesburg':'South Africa','Africa/Cairo':'Egypt','America/Mexico_City':'Mexico','America/Sao_Paulo':'Brazil','America/Bogota':'Colombia','America/Lima':'Peru','America/Argentina/Buenos_Aires':'Argentina',
  'Asia/Seoul':'South Korea','Asia/Tokyo':'Japan','Asia/Shanghai':'China','Asia/Hong_Kong':'Hong Kong S.A.R.','Asia/Karachi':'Pakistan','Asia/Dhaka':'Bangladesh','Asia/Kathmandu':'Nepal','Asia/Katmandu':'Nepal','Asia/Colombo':'Sri Lanka','Asia/Riyadh':'Saudi Arabia','Asia/Qatar':'Qatar','Asia/Kuala_Lumpur':'Malaysia','Asia/Bangkok':'Thailand','Asia/Jakarta':'Indonesia','Asia/Ho_Chi_Minh':'Vietnam','Asia/Saigon':'Vietnam','Asia/Beirut':'Lebanon','Europe/Istanbul':'Turkey','Europe/Kiev':'Ukraine','Europe/Kyiv':'Ukraine'};
function cities15() { if (!cities15.l) { const seen = new Set(); cities15.l = ALL_CITIES.concat(WORLD15).filter(c => { const k = c[0] + '|' + c[1]; if (seen.has(k)) return false; seen.add(k); return true }) } return cities15.l }
function cityNow15() {
  try { const s = JSON.parse(localStorage.getItem('nm.city15') || 'null'); if (s && s.c) return s } catch (e) {}
  const me = S.me || {}; return { c: me.city || '', k: me.country || '' };
}
function setCityNow15(c, k) { try { localStorage.setItem('nm.city15', JSON.stringify({ c, k })) } catch (e) {} }
function tzCountry15() { try { return TZC15[Intl.DateTimeFormat().resolvedOptions().timeZone] || '' } catch (e) { return '' } }
function cityRows15(q) {
  const cur = cityNow15(), n = norm(q || ''), tzk = tzCountry15();
  let l = cities15();
  if (n) l = l.filter(c => norm(c[0]).includes(n) || norm(c[1]).includes(n));
  else l = l.slice().sort((a, b) => (b[1] === tzk) - (a[1] === tzk) || (b[1] === cur.k) - (a[1] === cur.k));
  l = l.slice(0, 40);
  if (!l.length) return `<p class="hint" style="text-align:center;padding:18px 0">No city found. Try another spelling.</p>`;
  return l.map(c => `<button class="p15c-row${c[0] === cur.c && c[1] === cur.k ? ' on' : ''}" data-a="p15cityPick" data-c="${esc(c[0])}" data-k="${esc(c[1])}"><span class="tx"><b>${esc(c[0])}</b><small>${esc(c[1])}</small></span>${c[0] === cur.c && c[1] === cur.k ? ic('tick2') : ''}</button>`).join('');
}
(function () {
  if (typeof home15 !== 'function') return;
  // Home header: the city chip becomes a button; a one-time suggestion card when the phone is in another country
  const _h = home15; home15 = function () {
    let h = _h.apply(this, arguments); const cur = cityNow15();
    h = h.replace(/<span class="p15-city">[\s\S]*?<\/span>/, `<button class="p15-city" data-a="p15city" aria-label="City: ${esc(cur.c || 'choose')}. Change city">${ic('pin')}<span>${esc(cur.c || cur.k || 'Choose city')}</span>${ic('chev') || ''}</button>`);
    const tzk = tzCountry15(); let seen = ''; try { seen = localStorage.getItem('nm.citytz') || '' } catch (e) {}
    let tz = ''; try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone } catch (e) {}
    if (tzk && cur.k && tzk !== cur.k && seen !== tz) {
      const card = `<div class="p15-g p15c-ask" role="status">${ic('pin')}<span class="tx"><b>Looks like you are in ${esc(tzk)} now</b><small>Change your city so you see things near you?</small></span><span class="p15c-btns"><button class="p15c-no" data-a="p15cityNo">No</button><button class="p15c-yes" data-a="p15city" data-q="${esc(tzk)}">Change</button></span></div>`;
      h = h.replace(/(<\/div>)(\s*<h1)/, `$1${card}$2`); if (!h.includes('p15c-ask')) h = h.replace('</div>', '</div>' + card);
    }
    return h;
  };
  const _sh = renderSheet; renderSheet = function () {
    if (sheet && sheet.type === 'p15city') {
      const q = sheet.q || '';
      return sheetShell('Your city', `<p class="hint" style="margin:-4px 0 10px">Events, rooms and people near this city show first. It is saved on this phone only.</p>
        <button class="p15c-loc" data-a="p15cityLoc">${ic('pin')}<span><b>Use my location</b><small>Finds the nearest city. Your phone asks once.</small></span></button>
        <input id="p15cq" class="p15c-q" type="search" placeholder="Search city or country" value="${esc(q)}" autocomplete="off" aria-label="Search city or country">
        <div id="p15cl" class="p15c-list">${cityRows15(q)}</div>
        <label class="p15c-home"><input type="checkbox" id="p15ch"${sheet.home ? ' checked' : ''}> <span>Also make it the city on my profile (where I live)</span></label>`, '');
    }
    return _sh.apply(this, arguments);
  };
  document.addEventListener('input', e => { if (e.target && e.target.id === 'p15cq') { if (sheet) sheet.q = e.target.value; const l = document.getElementById('p15cl'); if (l) l.innerHTML = cityRows15(e.target.value) } });
  document.addEventListener('change', e => { if (e.target && e.target.id === 'p15ch' && sheet) sheet.home = e.target.checked });
  async function pick(c, k) {
    const home = !!(sheet && sheet.home); setCityNow15(c, k); try { localStorage.setItem('nm.citytz', Intl.DateTimeFormat().resolvedOptions().timeZone) } catch (e) {}
    sheet = null; if (typeof P15 === 'object') { P15.ev = {}; P15.rooms = undefined } render();
    if (home && S.me) { try { await API.update('profiles', { id: 'eq.' + S.me.id }, { city: c, country: k }); S.me.city = c; S.me.country = k; toast('City saved on your profile too.', 'tick2') } catch (e) { toast('Saved on this phone. Profile city could not be changed now.', 'info') } }
    else toast('City changed to ' + c + '.', 'tick2');
    render();
  }
  Object.assign(A, {
    p15city(el) { sheet = { type: 'p15city', q: (el && el.dataset.q) || '', home: false }; render(); },
    p15cityNo() { try { localStorage.setItem('nm.citytz', Intl.DateTimeFormat().resolvedOptions().timeZone) } catch (e) {} render() },
    p15cityPick(el) { pick(el.dataset.c, el.dataset.k) },
    p15cityLoc() {
      if (!navigator.geolocation) { toast('Location is not available here. Search your city instead.', 'info'); return }
      toast('Finding your city…', 'pin');
      navigator.geolocation.getCurrentPosition(pos => {
        const la = pos.coords.latitude, lo = pos.coords.longitude, R = Math.PI / 180;
        let best = null, bd = 1e9;
        for (const c of cities15()) { if (!isFinite(c[3])) continue; const d = Math.acos(Math.min(1, Math.sin(la * R) * Math.sin(c[3] * R) + Math.cos(la * R) * Math.cos(c[3] * R) * Math.cos((lo - c[4]) * R))) * 6371; if (d < bd) { bd = d; best = c } }
        if (best && bd < 150) pick(best[0], best[1]);
        else { if (sheet) { sheet.q = ''; render() } toast('No city from our list is close to you. Please search it.', 'info') }
      }, () => toast('Location was not allowed. Search your city instead.', 'info'), { enableHighAccuracy: false, timeout: 12000, maximumAge: 600000 });
    }
  });
  // lists: things in your chosen city come first (nothing is hidden)
  const first = (arr, f) => Array.isArray(arr) ? arr.slice().sort((a, b) => (f(b) ? 1 : 0) - (f(a) ? 1 : 0)) : arr;
  if (typeof API === 'object' && API.rpc && !API.rpc._c15) {
    const _rpc = API.rpc.bind(API);
    API.rpc = async function (fn, args) {
      const r = await _rpc(fn, args); const c = cityNow15();
      if (!c.c) return r;
      const same = x => x && norm(x.city || '') === norm(c.c);
      if (fn === 'events15' || fn === 'rooms15' || fn === 'experts15') return first(r, same);
      return r;
    };
    API.rpc._c15 = true;
  }
  // new events and business pages use the city you chose on Home
  if (API.rpc._c15) { const _r2 = API.rpc; API.rpc = function (fn, args) { const c = cityNow15(), me = S.me || {};
      if ((fn === 'event_create15' || fn === 'biz_upsert15') && args && c.c && args.cty === (me.city || '')) args = Object.assign({}, args, { cty: c.c, ctry: c.k || args.ctry });
      return _r2(fn, args) }; API.rpc._c15 = true }
})();

/* ---------- Admin panel: 5 tabs (Today, Members, Money, Events, More), follows the app theme, no scroll line (his ok 8 Nov 17:49) ---------- */
(function () {
  if (typeof a3tabsHtml !== 'function' || typeof A3 !== 'object') return;
  const MORE = ['new', 'activity', 'robots', 'help', 'checks'];
  a3tabsHtml = function () {
    const o = A3.ov, t = A3.tab, chk = o ? (o.checks_waiting || 0) + (o.reports_open || 0) : 0;
    const moreN = chk + (o && o.help_open ? o.help_open : 0) + (o && (o.bots || []).some(b => b.status === 'failed') ? 1 : 0);
    const tabs = [['home', 'Today'], ['members', 'People'], ['money', 'Money'], ['events', 'Events'], ['more', 'More']];
    return `<div class="a3tabs a3t5 pad" role="tablist">${tabs.map(([k, l]) => { const on = t === k || (k === 'more' && MORE.includes(t));
      return `<button role="tab" aria-selected="${on}" class="${on ? 'on' : ''}" data-a="a3tab" data-k="${k}">${l}${k === 'more' && moreN ? ` <em>${moreN}</em>` : ''}</button>` }).join('')}</div>`;
  };
  function a3more() {
    const o = A3.ov || {}, chk = (o.checks_waiting || 0) + (o.reports_open || 0), failed = (o.bots || []).filter(b => b.status === 'failed').length;
    const row = (k, i, t, s, n) => `<button class="a3c a3mrow" data-a="a3tab" data-k="${k}">${ic(i)}<span><b>${t}</b><small>${s}</small></span>${n ? `<em>${n}</em>` : ''}${ic('chev')}</button>`;
    return row('new', 'sparkle', 'New app', 'Plus members, businesses, rooms, events, ads to check', '') +
      row('checks', 'shield', 'Checks', 'Photos, ID and selfie checks, reports', chk) +
      row('help', 'chat', 'Help inbox', 'Members who asked for help', o.help_open || 0) +
      row('activity', 'bolt', 'Activity', 'Who is active, messages, matches', '') +
      row('robots', 'refresh', 'Robots', 'Daily jobs and reports', failed ? '!' : '');
  }
  const _h = a3home; a3home = function () { return A3.tab === 'more' ? a3more() : _h.apply(this, arguments) };
  const _r = renderAdmin3; renderAdmin3 = function () {
    const h = _r.apply(this, arguments);
    return A3.tab === 'home' ? h.replace(/<h2>[^<]*<\/h2>/, '<h2>Today</h2>') : A3.tab === 'more' ? h.replace(/<h2>[^<]*<\/h2>/, '<h2>More</h2>') : h;
  };
  // sub pages of More go back to More, not to Today
  const _up = A.a3up; A.a3up = function () { if (MORE.includes(A3.tab) && !A3.mem && !A3.ev && !A3.list && !A3.open && !A3.bot && !A3.p15k) { A3.tab = 'more'; render(); return } return _up.apply(this, arguments) };
  const _tb = A.a3tab; A.a3tab = function (el) { const s = document.querySelector('.a3v .scroll'); const r = _tb.apply(this, arguments); const s2 = document.querySelector('.a3v .scroll'); if (s2) s2.scrollTop = 0; return r };
})();

/* ---------- NeuAmigo brand (his split 8 Nov 2026 19:36-22:31): this app becomes NeuAmigo; matrimony moves to the separate NeuMarry app.
   NA_LIVE stays false until his ok; testers see it with localStorage nm.brandtest = '1'. ---------- */
const NA_LIVE = true;
function naOn() { try { return NA_LIVE || localStorage.getItem('nm.brandtest') === '1' } catch (e) { return NA_LIVE } }
function brand15(html) {
  if (!naOn()) return html;
  return html
    .replace(/<button class="p15-g p15-t span2 row" data-a="p15life">[\s\S]*?<\/button>/, '')
    .replace(/img\/icon-192\.png/g, 'img/na-icon-192.png').replace(/img\/nm-mark\.png/g, 'img/na-mark.png')
    .replace(/NeuMarry/g, 'NeuAmigo');
}

window.__rm={get S(){return S},get PROFILES(){return PROFILES},A,render,boot,goBack,card:p=>card(p),cel:id=>{celebrate={id};render()},spinner:l=>spinner(l)}; /* used by automated tests */
boot();
})();
