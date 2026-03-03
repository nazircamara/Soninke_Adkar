// --- DATABASE CONFIGURATION ---
const database = {
    morning: [
        { id: 5, intro: "", text: "أَصْبَحْنا وَأَصْبَحَ المُلْكُ للهِ وَالحَمدُ للهِ، لا إلهَ إلاّ اللّهُ وحدَهُ لا شريكَ لهُ، لهُ المُلكُ ولهُ الحَمْد، وهُوَ على كلّ شَيءٍ قدير، رَبِّ أسْأَلُكَ خَيرَ ما في هذا اليوم وَخَيرَ ما بَعْدَه، وَأَعوذُ بِكَ مِنْ شَرِّ ما في هذا اليوم وَشَرِّ ما بَعْدَه، رَبِّ أَعوذُ بِكَ مِنَ الكَسَلِ وَسوءِ الكِبَر، رَبِّ أَعوذُ بِكَ مِنْ عَذابٍ في النّارِ وَعَذابٍ في القَبْر.", target: 1, audio: "audios/morning_5.mp3", audio2: "audios2/recitation_5.mp3" },
        { id: 6, intro: "", text: "اللّهُمَّ أَنْتَ رَبِّي لا إلهَ إلاّ أَنْتَ، خَلَقْتَني وَأنا عَبْدُك، وَأنا عَلى عَهْدِكَ وَوَعْدِكَ ما اسْتَطَعْت، أَعوذُ بِكَ مِنْ شَرِّ ما صَنَعْت، أَبـوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبوءُ بِذَنْبي فَاغْفِرْ لي فَإِنَّهُ لا يَغْفِرُ الذُّنوبَ إِلاّ أَنْتَ.", target: 1, audio: "audios/morning_6.mp3", audio2: "audios2/recitation_6.mp3" },
        { id: 7, intro: "", text: "رَضيتُ بِاللهِ رَبَّاً وَبِالإسلامِ ديناً وَبِمُحَمَّدٍ صلى الله عليه وسلم نَبِيّاً. ", target: 3, audio: "audios/morning_7.mp3", audio2: "audios2/recitation_7.mp3" },
        { id: 8, intro: "", text: "اللّهُمَّ إِنِّي أَصْبَحْتُ أُشْهِدُك، وَأُشْهِدُ حَمَلَةَ عَرْشِك، وَمَلائِكَتِك، وَجَميعَ خَلْقِك، أَنَّكَ أَنْتَ اللهُ لا إلهَ إلاّ أَنْتَ وَحْدَةُ لا شَريكَ لَك، وَأَنَّ مُحَمَّداً عَبْدُكَ وَرَسولُك. ", target: 4, audio: "audios/morning_8.mp3", audio2: "audios2/recitation_8.mp3" },
        { id: 9, intro: "", text: "اللّهُمَّ ما أَصْبَحَ بي مِنْ نِعْمَةٍ أَو بِأَحَدٍ مِنْ خَلْقِك، فَمِنْكَ وَحْدَكَ لا شريكَ لَك، فَلَكَ الحَمْدُ وَلَكَ الشُّكْر.", target: 1, audio: "audios/morning_9.mp3", audio2: "audios2/recitation_9.mp3" },
        { id: 10, intro: "", text: "حَسْبِيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَيهِ تَوَكَّلتُ وَهُوَ رَبُّ العَرْشِ العَظيم. ", target: 7, audio: "audios/morning_10.mp3", audio2: "audios2/recitation_10.mp3" },
        { id: 11, intro: "", text: "بِسْمِ اللهِ الذي لا يَضُرُّ مَعَ اسْمِهِ شَيءٌ في الأرْضِ وَلا في السّمـاءِ وَهـوَ السّمـيعُ العَلـيم. ", target: 3, audio: "audios/morning_11.mp3", audio2: "audios2/recitation_11.mp3" },
        { id: 12, intro: "", text: "اللّهُمَّ بِكَ أَصْبَحْنا وَبِكَ أَمْسَيْنا، وَبِكَ نَحْيا وَبِكَ نَموتُ وَإِلَيْكَ النُّشور.", target: 1, audio: "audios/morning_12.mp3", audio2: "audios2/recitation_12.mp3" },
        { id: 13, intro: "", text: "أَصْبَحْنا عَلَى فِطْرَةِ الإسْلامِ، وَعَلَى كَلِمَةِ الإِخْلاصِ، وَعَلَى دينِ نَبِيِّنا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ، وَعَلَى مِلَّةِ أَبينا إِبْراهيمَ حَنِيفاً مُسْلِماً وَما كانَ مِنَ المُشْرِكينَ.", target: 1, audio: "audios/morning_13.mp3", audio2: "audios2/recitation_13.mp3" },
        { id: 14, intro: "", text: "سُبْحانَ اللهِ وَبِحَمْدِهِ عَدَدَ خَلْقِه، وَرِضا نَفْسِه، وَزِنَةَ عَرْشِه، وَمِدادَ كَلِماتِه. ", target: 3, audio: "audios/morning_14.mp3", audio2: "audios2/recitation_14.mp3" },
        { id: 15, intro: "", text: "اللّهُمَّ عافِني في بَدَني، اللّهُمَّ عافِني في سَمْعي، اللّهُمَّ عافِني في بَصَري، لا إلهَ إلاّ أَنْتَ. ", target: 3, audio: "audios/morning_15.mp3", audio2: "audios2/recitation_15.mp3" },
        { id: 16, intro: "", text: "اللّهُمَّ إِنّي أَعوذُ بِكَ مِنَ الكُفْرِ وَالفَقْرِ، وَأَعوذُ بِكَ مِنْ عَذابِ القَبْرِ، لا إلهَ إلاّ أَنْتَ.", target: 3, audio: "audios/morning_16.mp3", audio2: "audios2/recitation_16.mp3" },
        { id: 17, intro: "", text: "اللّهُمَّ إِنِّي أَسْأَلُكَ العَفْوَ وَالعافِيَةَ في الدُّنْيا وَالآخِرَة، اللّهُمَّ إِنِّي أَسْأَلُكَ العَفْوَ وَالعافِيَةَ في ديني وَدُنْيايَ وَأَهْلي وَمالي، اللّهُمَّ اسْتُرْ عَوْراتي وَآمِنْ رَوْعاتي، اللّهُمَّ احْفَظْني مِن بَيْنِ يَدَيَّ وَمِن خَلْفي وَعَن يَميني وَعَن شِمالي، وَمِن فَوْقي، وَأَعوذُ بِعَظَمَتِكَ أَن أُغْتَالَ مِن تَحتي.", target: 1, audio: "audios/morning_17.mp3", audio2: "audios2/recitation_17.mp3" },
        { id: 18, intro: "", text: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغيثُ أَصْلِحْ لي شَأْني كُلَّهُ وَلا تَكِلْني إِلى نَفْسي طَرْفَةَ عَيْنٍ.", target: 3, audio: "audios/morning_18.mp3", audio2: "audios2/recitation_18.mp3" },
        { id: 19, intro: "", text: "أَصْبَحْنا وَأَصْبَحَ المُلْكُ للهِ رَبِّ العالَمين، اللّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هذا اليَوْم، فَتْحَهُ، وَنَصْرَهُ، وَنورَهُ وَبَرَكَتَهُ، وَهُداهُ، وَأَعوذُ بِكَ مِنْ شَرِّ ما فيهِ وَشَرِّ ما بَعْدَه.", target: 1, audio: "audios/morning_19.mp3", audio2: "audios2/recitation_19.mp3" },
        { id: 20, intro: "", text: "اللّهُمَّ عالِمَ الغَيْبِ وَالشَّهادَةِ فاطِرَ السَّماواتِ وَالأرْضِ رَبَّ كُلِّ شَيءٍ وَمَليكَه، أَشْهَدُ أَنْ لا إلهَ إِلاّ أَنْت، أَعوذُ بِكَ مِنْ شَرِّ نَفْسِي وَمِنْ شَرِّ الشَّيْطانِ وَشِرْكِه، وَأَنْ أَقْتَرِفَ عَلى نَفْسي سوءاً أَوْ أَجُرَّهُ إِلى مُسْلِم.", target: 1, audio: "audios/morning_20.mp3", audio2: "audios2/recitation_20.mp3" },
        { id: 21, intro: "", text: "أَعوذُ بِكَلِماتِ اللّهِ التّامّاتِ مِنْ شَرِّ ما خَلَق.", target: 3, audio: "audios/morning_21.mp3", audio2: "audios2/recitation_21.mp3" },
        { id: 22, intro: "", text: "اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ على نَبِيِّنَا مُحَمَّد.", target: 10, audio: "audios/morning_22.mp3", audio2: "audios2/recitation_22.mp3" },
        { id: 23, intro: "", text: "اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ. ", target: 3, audio: "audios/morning_23.mp3", audio2: "audios2/recitation_23.mp3" },
        { id: 24, intro: "", text: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنْ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنْ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ، وَقَهْرِ الرِّجَالِ.", target: 3, audio: "audios/morning_24.mp3", audio2: "audios2/recitation_24.mp3" },
        { id: 25, intro: "", text: "أَسْتَغْفِرُ اللهَ العَظيمَ الَّذِي لاَ إِلَهَ إِلاَّ هُوَ، الحَيُّ القَيُّومُ، وَأَتُوبُ إِلَيهِ.", target: 3, audio: "audios/morning_25.mp3", audio2: "audios2/recitation_25.mp3" },
        { id: 26, intro: "", text: "يَا رَبِّ، لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ، وَلِعَظِيمِ سُلْطَانِكَ. ", target: 3, audio: "audios/morning_26.mp3", audio2: "audios2/recitation_26.mp3" },
        { id: 27, intro: "", text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا.", target: 1, audio: "audios/morning_27.mp3", audio2: "audios2/recitation_27.mp3" },
        { id: 28, intro: "", text: "اللَّهُمَّ أَنْتَ رَبِّي لا إِلَهَ إِلا أَنْتَ، عَلَيْكَ تَوَكَّلْتُ، وَأَنْتَ رَبُّ الْعَرْشِ الْعَظِيمِ، مَا شَاءَ اللَّهُ كَانَ، وَمَا لَمْ يَشَأْ لَمْ يَكُنْ، وَلا حَوْلَ وَلا قُوَّةَ إِلا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ، أَعْلَمُ أَنَّ اللَّهَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، وَأَنَّ اللَّهَ قَدْ أَحَاطَ بِكُلِّ شَيْءٍ عِلْمًا، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ كُلِّ دَابَّةٍ أَنْتَ آخِذٌ بِنَاصِيَتِهَا، إِنَّ رَبِّي عَلَى صِرَاطٍ مُسْتَقِيمٍ.", target: 1, audio: "audios/morning_28.mp3", audio2: "audios2/recitation_28.mp3" },
        { id: 29, intro: "", text: "لا إلهَ إلاّ اللهُ وحدَهُ لا شريكَ لهُ، لهُ المُلْكُ ولهُ الحَمْدُ وهُوَ على كلِّ شَيءٍ قدير. ", target: 100, audio: "audios/morning_29.mp3", audio2: "audios2/recitation_29.mp3" },
        { id: 30, intro: "", text: "سُبْحانَ اللهِ وَبِحَمْدِهِ.", target: 100, audio: "audios/morning_30.mp3", audio2: "audios2/recitation_30.mp3" },
        { id: 31, intro: "", text: "أَسْتَغْفِرُ اللهَ وَأَتُوبُ إِلَيْهِ.", target: 100, audio: "audios/morning_31.mp3", audio2: "audios2/recitation_31.mp3" }
    ],
    evening: [
        { id: 106, intro: "", text: "أَمْسَيْنا وَأَمْسَى المُلْكُ للهِ وَالحَمدُ للهِ، لا إلهَ إلاّ اللّهُ وحدَهُ لا شريكَ لهُ، لهُ المُلكُ ولهُ الحَمْد، وهُوَ على كلّ شَيءٍ قدير، رَبِّ أسأَلُكَ خَيرَ ما في هذه اللَّيْلَةِ وَخَيرَ ما بَعْدَها، وَأَعوذُ بِكَ مِنْ شَرِّ ما في هذه اللَّيْلَةِ وَشَرِّ ما بَعْدَها، رَبِّ أَعوذُ بِكَ مِنَ الكَسَلِ وَسوءِ الكِبَر، رَبِّ أَعوذُ بِكَ مِنْ عَذابٍ في النّارِ وَعَذابٍ في القَبْر.", target: 1, audio: "audios/evening_6.mp3", audio2: "audios2/recitation_106.mp3" },
        { id: 107, intro: "", text: "اللّهُمَّ أَنْتَ رَبِّي لا إلهَ إلاّ أَنْتَ، خَلقتَني وَأنا عَبدُك، وَأنا عَلى عَهْدِكَ وَوَعْدِكَ ما اسْتَطَعْت، أَعوذُ بِكَ مِنْ شَرِّ ما صَنَعْت، أَبـوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبـوءُ بِذَنْبي فَاغْفِرْ لي فَإِنَّهُ لا يَغْفِرُ الذُّنوبَ إِلاّ أَنْتَ.", target: 1, audio: "audios/evening_7.mp3", audio2: "audios2/recitation_107.mp3" },
        { id: 108, intro: "", text: "رَضيتُ بِاللهِ رَبَّاً وَبِالإسلامِ ديناً وَبِمُحَمَّدٍ صلى الله عليه وسلم نَبِيّاً.", target: 3, audio: "audios/evening_8.mp3", audio2: "audios2/recitation_108.mp3" },
        { id: 109, intro: "", text: "اللّهُمَّ إِنِّي أَمْسَيْتُ أُشْهِدُك، وَأُشْهِدُ حَمَلَةَ عَرْشِك، وَمَلائِكَتِك، وَجَميعَ خَلْقِك، أَنَّكَ أَنْتَ اللهُ لا إلهَ إلاّ أَنْتَ وَحْدَكَ لا شَريكَ لَك، وَأَنَّ مُحَمَّداً عَبْدُكَ وَرَسولُك. ", target: 4, audio: "audios/evening_9.mp3", audio2: "audios2/recitation_109.mp3" },
        { id: 110, intro: "", text: "اللّهُمَّ ما أَمْسَى بي مِنْ نِعْمَةٍ أَو بِأَحَدٍ مِنْ خَلْقِك، فَمِنْكَ وَحْدَكَ لا شريكَ لَك، فَلَكَ الحَمْدُ وَلَكَ الشُّكْر.", target: 1, audio: "audios/evening_10.mp3", audio2: "audios2/recitation_110.mp3" },
        { id: 111, intro: "", text: "حَسْبِيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَيهِ تَوَكَّلتُ وَهُوَ رَبُّ العَرْشِ العَظيم. ", target: 7, audio: "audios/evening_11.mp3", audio2: "audios2/recitation_111.mp3" },
        { id: 11, intro: "", text: "بِسْمِ اللهِ الذي لا يَضُرُّ مَعَ اسْمِهِ شَيءٌ في الأرْضِ وَلا في السّمـاءِ وَهـوَ السّمـيعُ العَلـيم. ", target: 3, audio: "audios/evening_12.mp3", audio2: "audios2/recitation_11.mp3" },
        { id: 113, intro: "", text: "اللّهُمَّ بِكَ أَمْسَيْنا وَبِكَ أَصْبَحْنا، وَبِكَ نَحْيا وَبِكَ نَموتُ وَإِلَيْكَ المَصير.", target: 1, audio: "audios/evening_13.mp3", audio2: "audios2/recitation_113.mp3" },
        { id: 114, intro: "", text: "أَمْسَيْنا عَلَى فِطْرَةِ الإسْلامِ، وَعَلَى كَلِمَةِ الإِخْلاصِ، وَعَلَى دينِ نَبِيِّنا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ، وَعَلَى مِلَّةِ أَبينا إِبْراهيمَ حَنِيفاً مُسْلِماً وَما كانَ مِنَ المُشْرِكينَ.", target: 1, audio: "audios/evening_14.mp3", audio2: "audios2/recitation_114.mp3" },
        { id: 115, intro: "", text: "سُبْحانَ اللهِ وَبِحَمْدِهِ عَدَدَ خَلْقِه، وَرِضا نَفْسِه، وَزِنَةَ عَرْشِه، وَمِدادَ كَلِماتِه.", target: 3, audio: "audios/evening_15.mp3", audio2: "audios2/recitation_115.mp3" },
        { id: 116, intro: "", text: "اللّهُمَّ عافِني في بَدَنـي، اللّهُمَّ عافِني في سَمْعي، اللّهُمَّ عافِني في بَصَري، لا إلهَ إلاّ أَنْتَ.", target: 3, audio: "audios/evening_16.mp3", audio2: "audios2/recitation_116.mp3" },
        { id: 117, intro: "", text: "اللّهُمَّ إِنّي أَعوذُ بِكَ مِنَ الكُفْرِ وَالفَقْرِ، وَأَعوذُ بِكَ مِنْ عَذابِ القَبْرِ، لا إلهَ إلاّ أَنْتَ.", target: 3, audio: "audios/evening_17.mp3", audio2: "audios2/recitation_117.mp3" },
        { id: 118, intro: "", text: "اللّهُمَّ إِنِّي أَسْأَلُكَ العَفْوَ وَالعافِيَةَ في الدُّنْيا وَالآخِرَة، اللّهُمَّ إِنِّي أَسْأَلُكَ العَفْوَ وَالعافِيَةَ في ديني وَدُنْيايَ وَأَهْلي وَمالي، اللّهُمَّ اسْتُرْ عَوْراتي وَآمِنْ رَوْعاتي، اللّهُمَّ احْفَظْني مِن بَيْنِ يَدَيَّ وَمِن خَلْفي وَعَن يَميني وَعَن شِمالي، وَمِن فَوْقي، وَأَعوذُ بِعَظَمَتِكَ أَن أُغْتَالَ مِن تَحتي.", target: 1, audio: "audios/evening_18.mp3", audio2: "audios2/recitation_118.mp3" },
        { id: 119, intro: "", text: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغيثُ أَصْلِحْ لي شَأْني كُلَّهُ وَلا تَكِلْني إِلى نَفْسي طَرْفَةَ عَيْنٍ.", target: 3, audio: "audios/evening_19.mp3", audio2: "audios2/recitation_119.mp3" },
        { id: 120, intro: "", text: "أَمْسَيْنا وَأَمْسَى المُلْكُ للهِ رَبِّ العالَمين، اللّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هذه اللَّيْلَةِ فَتْحَهَا، وَنَصْرَهَا، وَنورَهَا وَبَرَكَتَهَا، وَهُدَاهَا، وَأَعوذُ بِكَ مِنْ شَرِّ ما فيها وَشَرِّ ما بَعْدَها.", target: 1, audio: "audios/evening_20.mp3", audio2: "audios2/recitation_120.mp3" },
        { id: 121, intro: "", text: "اللّهُمَّ عالِمَ الغَيْبِ وَالشَّهادَةِ فاطِرَ السَّماواتِ وَالأرْضِ رَبَّ كُلِّ شَيءٍ وَمَليكَه، أَشْهَدُ أَنْ لا إلهَ إِلاّ أَنْت، أَعوذُ بِكَ مِنْ شَرِّ نَفْسِي وَمِنْ شَرِّ الشَّيْطانِ وَشِرْكِه، وَأَنْ أَقْتَرِفَ عَلى نَفْسِي سوءاً أَوْ أَجُرَّهُ إِلى مُسْلِم.", target: 1, audio: "audios/evening_21.mp3", audio2: "audios2/recitation_121.mp3" },
        { id: 122, intro: "", text: "أَعوذُ بِكَلِماتِ اللّهِ التّامّاتِ مِنْ شَرِّ ما خَلَق.", target: 3, audio: "audios/evening_22.mp3", audio2: "audios2/recitation_122.mp3" },
        { id: 123, intro: "", text: "اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ على نَبِيِّنَا مُحَمَّد. ", target: 10, audio: "audios/evening_23.mp3", audio2: "audios2/recitation_123.mp3" },
        { id: 124, intro: "", text: "اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ.", target: 3, audio: "audios/evening_24.mp3", audio2: "audios2/recitation_124.mp3" },
        { id: 125, intro: "", text: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنْ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنْ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ، وَقَهْرِ الرِّجَالِ.", target: 3, audio: "audios/evening_25.mp3", audio2: "audios2/recitation_125.mp3" },
        { id: 126, intro: "", text: "أَسْتَغْفِرُ اللهَ العَظيمَ الَّذِي لاَ إِلَهَ إِلاَّ هُوَ، الحَيُّ القَيُّومُ، وَأَتُوبُ إِلَيهِ.", target: 3, audio: "audios/evening_26.mp3", audio2: "audios2/recitation_126.mp3" },
        { id: 127, intro: "", text: "يَا رَبِّ، لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ، وَلِعَظِيمِ سُلْطَانِكَ.", target: 3, audio: "audios/evening_27.mp3", audio2: "audios2/recitation_127.mp3" },
        { id: 128, intro: "", text: "لا إلهَ إلاّ اللهُ وحْدَهُ لا شريكَ لهُ، لهُ المُلْكُ ولهُ الحَمْدُ وهُوَ على كلِّ شَيءٍ قدير. ", target: 100, audio: "audios/evening_28.mp3", audio2: "audios2/recitation_128.mp3" },
        { id: 129, intro: "", text: "اللَّهُمَّ أَنْتَ رَبِّي لا إِلَهَ إِلا أَنْتَ، عَلَيْكَ تَوَكَّلْتُ، وَأَنْتَ رَبُّ الْعَرْشِ الْعَظِيمِ، مَا شَاءَ اللَّهُ كَانَ، وَمَا لَمْ يَشَأْ لَمْ يَكُنْ، وَلا حَوْلَ وَلا قُوَّةَ إِلا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ، أَعْلَمُ أَنَّ اللَّهَ عَلَى كُلِّ شَيْءٍ قديرٌ، وَأَنَّ اللَّهَ قد أَحاطَ بِكُلِّ شَيءٍ عِلماً، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ كُلِّ دَابَّةٍ أَنْتَ آخِذٌ بِنَاصِيَتِهَا، إِنَّ رَبِّي عَلَى صِرَاطٍ مُسْتَقِيمٍ.", target: 1, audio: "audios/evening_29.mp3", audio2: "audios2/recitation_129.mp3" },
        { id: 130, intro: "", text: "سُبْحَانَ اللهِ وَبِحَمْدِهِ. ", target: 100, audio: "audios/evening_30.mp3", audio2: "audios2/recitation_130.mp3" }
    ],
    sleep: [
        { id: 201, intro: "أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ", text: "اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ. [البقرة 255]", target: 1, audio: "audios/morning_1.mp3", audio2: "audios2/recitation_201.mp3" },
        { id: 202, intro: "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم", text: "قُلْ هُوَ ٱللَّهُ أَحَدٌ، ٱللَّهُ ٱلصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ. ", target: 3, audio: "audios/morning_2.mp3", audio2: "audios2/recitation_202.mp3" },
        { id: 203, intro: "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم", text: "قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ، مِن شَرِّ مَا خَلَقَ، وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ، وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ، وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ.", target: 3, audio: "audios/morning_3.mp3", audio2: "audios2/recitation_203.mp3" },
        { id: 204, intro: "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم", text: "قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ، مَلِكِ ٱلنَّاسِ، إِلَٰهِ ٱلنَّاسِ، مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ، ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ، مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ.", target: 3, audio: "audios/morning_4.mp3", audio2: "audios2/recitation_204.mp3" },
        { id: 206, intro: "أدعية النوم", text: "بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي، وَبِكَ أَرْفَعُهُ، فَإِنْ أَمْسَكْتَ نَفْسِي فَارْحَمْهَا، وَإِنْ أَرْسَلْتَهَا فَاحْفَظْهَا بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِينَ.", target: 1, audio: "audios/sleep_6.mp3", audio2: "audios2/recitation_206.mp3" },
        { id: 207, intro: "أدعية النوم", text: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا.", target: 1, audio: "audios/sleep_7.mp3", audio2: "audios2/recitation_207.mp3" },
        { id: 208, intro: "أدعية النوم", text: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا، وَكَفَانَا وَآوَانَا، فَكَمْ مِمَّنْ لَا كَافِيَ لَهُ وَلَا مُؤْوِيَ.", target: 1, audio: "audios/sleep_8.mp3", audio2: "audios2/recitation_208.mp3" },
        { id: 209, intro: "أدعية النوم", text: "سُبْحَانَ اللهِ.", target: 33, audio: "audios/sleep_9.mp3", audio2: "audios2/recitation_209.mp3" },
        { id: 210, intro: "أدعية النوم", text: "الْحَمْدُ للهِ.", target: 33, audio: "audios/sleep_10.mp3", audio2: "audios2/recitation_210.mp3" },
        { id: 211, intro: "أدعية النوم", text: "اللهُ أَكْبَرُ. ", target: 34, audio: "audios/sleep_11.mp3", audio2: "audios2/recitation_211.mp3" }
    ],
    prayer: [
        { id: 313, intro: "قبل الوصوء: ", text: "بِسمِ الله", target: 1, audio: "audios/prayer_001.mp3", audio2: "audios2/recitation_313.mp3" },
        { id: 314, intro: "بعد الفراغ من لوضوء: ", text: "أشهدُ أن لا إلهَ إلا اللهُ وحدَه لا شريكَ له، وأشهدُ أنَّ محمداً عبدُه ورسولُه.", target: 1, audio: "audios/prayer_002.mp3", audio2: "audios2/recitation_314.mp3" },

        { id: 301, intro: "عند البدء (دعاء الاستفتاح): ", text: "اللَّهُمَّ بَاعِدْ بَيْنِي وَبَيْنِ خَطَايَايَ، كَمَا بَاعَدْتَ بَيْنَ المَشْرِقِ وَالمَغْرِبِ، اللَّهُمَّ نَقِّنِي مِنَ الخَطَايَا كَمَا يُنَقَّى الثَّوْبُ الأَبْيَضُ مِنَ الدَّنَسِ، اللَّهُمَّ اغْسِلْ خَطَايَايَ بِالْمَاءِ وَالثَّلْجِ وَالْبَرَدِ", target: 1, audio: "audios/prayer_003.mp3", audio2: "audios2/recitation_301.mp3" },
        { id: 302, intro: "عند الركوع: ", text: "سُبْحَانَ رَبِّيَ الْعَظِيمِ.", target: 3, audio: "audios/prayer_2.mp3", audio2: "audios2/recitation_302.mp3" },
        { id: 303, intro: "عند الرفع من الركوع: ", text: "سَمِعَ اللهُ لِمَنْ حَمِدَهُ.", target: 1, audio: "audios/prayer_3.mp3", audio2: "audios2/recitation_303.mp3" },  
        { id: 304, intro: "بعد الاعتدال قائماً: ", text: "رَبَّنَا وَلَكَ الْحَمْدُ، حَمْدًا كَثِيرًا طَيِّبًا مُبَارَكًا فِيهِ.", target: 1, audio: "audios/prayer_4.mp3", audio2: "audios2/recitation_304.mp3" }, 
        { id: 305, intro: "عند السجود: ", text: "سُبْحَانَ رَبِّيَ الأَعْلَى", target: 3, audio: "audios/prayer_5.mp3", audio2: "audios2/recitation_305.mp3" }, 
        { id: 306, intro: "عند الجلوس بين السجدتين: ", text: "رَبِّ اغْفِرْ لِي.", target: 3, audio: "audios/prayer_6.mp3", audio2: "audios2/recitation_306.mp3" }, 
        { id: 307, intro: "في التشهد الأول: ", text: "التَّحِيَّاتُ لِلَّهِ وَالصَّلَواتُ وَالطَّيِّباتُ، السَّلامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكاتُهُ، السَّلامُ عَلَيْنا وَعَلى عِبادِ اللهِ الصّالِحينَ، أَشْهَدُ أَنْ لا إِلهَ إِلاَّ اللهُ وَأَشْهَدُ أَنَّ مُحَمَّداً عَبْدُهُ وَرَسولُهُ.", target: 1, audio: "audios/prayer_7.mp3", audio2: "audios2/recitation_307.mp3" }, 
        { id: 307, intro: "في التشهد الأول: ", text: "التَّحِيَّاتُ لِلَّهِ، الزَّاكِيَاتُ لِلَّهِ، الطَّيِّبَاتُ الصَّلَوَاتُ لِلَّهِ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ", target: 1, audio: "audios/prayer_.7.mp3", audio2: "audios2/recitation_30_7.mp3" }, 
        { id: 308, intro: "في التشهد الأخير والصلاة الإبراهيمية: ", text: " اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ، اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ.", target: 1, audio: "audios/prayer_9.mp3", audio2: "audios2/recitation_308.mp3" }, 
        { id: 309, intro: "قبل التسليم (الاستعاذة): ", text: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، وَمِنْ عَذَابِ جَهَنَّمَ، وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ، وَمِنْ شَرِّ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ.", target: 1, audio: "audios/prayer_10.mp3", audio2: "audios2/recitation_309.mp3" },   
        { id: 310, intro: "بعد السلام (الاستغفار): ", text: "أَسْتَغْفِرُ اللهَ.", target: 3, audio: "audios/prayer_11.mp3", audio2: "audios2/recitation_310.mp3" },   
        { id: 311, intro: "بعد السلام (الأمان): ", text: "اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ.", target: 1, audio: "audios/prayer_12.mp3", audio2: "audios2/recitation_311.mp3" },
        { id: 312, intro: "بعد السلام (التمجيد): ", text: "لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ، لَا إِلَهَ إِلَّا اللهُ وَلَا نَعْبُدُ إِلَّا إِيَّاهُ، لَهُ النِّعْمَةُ وَلَهُ الْفَضْلُ وَلَهُ الثَّنَاءُ الْحَسَنُ، لَا إِلَهَ إِلَّا اللهُ مُخْلِصِينَ لَهُ الدِّينَ وَلَوْ كَرِهَ الْكَافِرُونَ", target: 1, audio: "audios/prayer_13.mp3", audio2: "audios2/recitation_31_2.mp3" },
        { id: 313, intro: "بعد السلام : ", text: "سُبْحَانَ اللهِ.", target: 33, audio: "audios/sleep_9.mp3", audio2: "audios2/recitation_31_3.mp3" },
        { id: 314, intro: "بعد السلام : ", text: "الْحَمْدُ للهِ.", target: 33, audio: "audios/sleep_10.mp3", audio2: "audios2/recitation_31_4.mp3" },
        { id: 315, intro: "بعد السلام : ", text: "اللهُ أَكْبَرُ.", target: 33, audio: "audios/sleep_11.mp3", audio2: "audios2/recitation_31_5.mp3" },
        { id: 29, intro: "", text: "لا إلهَ إلاّ اللهُ وحدَهُ لا شريكَ لهُ، لهُ المُلْكُ ولهُ الحَمْدُ وهُوَ على كلِّ شَيءٍ قدير. ", target: 1, audio: "audios/morning_29.mp3", audio2: "audios2/recitation_31_6.mp3" },
        { id: 201, intro: "أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ", text: "اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ. [البقرة 255]", target: 1, audio: "audios/morning_1.mp3", audio2: "audios2/recitation_31_7.mp3" },
        { id: 202, intro: "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم", text: "قُلْ هُوَ ٱللَّهُ أَحَدٌ، ٱللَّهُ ٱلصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ. ", target: 1, audio: "audios/morning_2.mp3", audio2: "audios2/recitation_31_8.mp3" },
        { id: 203, intro: "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم", text: "قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ، مِن شَرِّ مَا خَلَقَ، وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ، وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ، وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ.", target: 1, audio: "audios/morning_3.mp3", audio2: "audios2/recitation_31_9.mp3" },
        { id: 204, intro: "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم", text: "قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ، مَلِكِ ٱلنَّاسِ، إِلَٰهِ ٱلنَّاسِ، مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ، ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ، مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ.", target: 1, audio: "audios/morning_4.mp3", audio2: "audios2/recitation_31_10.mp3" },

    ]
};

// --- INTERNATIONALIZATION DATA ---
const translations = {
    ar: { 
        logo: "أذكاري", home: "الرئيسية", morning: "الصباح", evening: "المساء", 
        sleep: "النوم", prayer: "الصلاة", main_title: "أذكاري اليومية", 
        listen: "استماع", stop: "إيقاف", loading: "جاري...", back: "رجوع",
        favorites_only: "المفضلة", reset: "إعادة", search_placeholder: "ابحث في الأذكار",
        offline: "غير متصل", no_results: "لا توجد نتائج مطابقة",
        reset_confirm: "هل تريد إعادة التصفير لهذه القائمة؟",
        footer_text: "أذكار الصباح والمساء هي حصن المسلم اليومي، داوم عليها لتنعم براحة البال والطمأنينة.",
        quran_intro: "audios/quran_intro_placeholder.mp3",
        morning_intro: "audios/morning_intro_ar.mp3",
        evening_intro: "audios/evening_intro_ar.mp3",
        sleep_intro: "audios/sleep_intro_ar.mp3",
        prayer_intro: "audios/prayer_intro_ar.mp3"
    },
    en: { 
        logo: "Athkar", home: "Home", morning: "Morning", evening: "Evening", 
        sleep: "Sleep", prayer: "Prayer", main_title: "My Daily Athkar", 
        listen: "Listen", stop: "Stop", loading: "Loading...", back: "Back",
        favorites_only: "Favorites", reset: "Reset", search_placeholder: "Search athkar",
        offline: "Offline", no_results: "No matching results",
        reset_confirm: "Reset this list?",
        footer_text: "Morning and evening Adhkar are the Muslim's daily fortress. Keep them to enjoy peace of mind and tranquility.",
        quran_intro: "audios/quran_intro_placeholder.mp3",
        morning_intro: "audios/morning_intro_en.mp3",
        evening_intro: "audios/evening_intro_en.mp3",
        sleep_intro: "audios/sleep_intro_en.mp3",
        prayer_intro: "audios/prayer_intro_en.mp3"
    },
    fr: { 
        logo: "Athkar", home: "Accueil", morning: "Matin", evening: "Soir", 
        sleep: "Sommeil", prayer: "Prière", main_title: "Mes Athkars", 
        listen: "Écouter", stop: "Stop", loading: "Chargement...", back: "Retour",
        favorites_only: "Favoris", reset: "Réinitialiser", search_placeholder: "Rechercher",
        offline: "Hors ligne", no_results: "Aucun résultat",
        reset_confirm: "Réinitialiser cette liste ?",
        footer_text: "Les Adhkars du matin et du soir sont la forteresse quotidienne du musulman.",

        quran_intro: "audios/quran_intro_placeholder.mp3",
        morning_intro: "audios/morning_intro_fr.mp3",
        evening_intro: "audios/evening_intro_fr.mp3",
        sleep_intro: "audios/sleep_intro_fr.mp3",
        prayer_intro: "audios/prayer_intro_fr.mp3"
    }
};

const STORAGE_KEYS = {
    theme: 'athkarTheme',
    lang: 'athkarLang',
    progress: 'athkarProgressV1',
    favorites: 'athkarFavoritesV1'
};

let currentLang = 'ar';
let activeAudio = null;
let currentCategory = '';
let sessionCounts = {};
let favoritesOnly = false;
let searchTerm = '';
let progressState = loadProgress();
let favoritesState = loadFavorites();

function getTodayKey() {
    return new Date().toISOString().slice(0, 10);
}

function loadProgress() {
    const raw = localStorage.getItem(STORAGE_KEYS.progress);
    if (!raw) return { date: getTodayKey(), remaining: {} };
    try {
        const parsed = JSON.parse(raw);
        return parsed && parsed.date ? parsed : { date: getTodayKey(), remaining: {} };
    } catch {
        return { date: getTodayKey(), remaining: {} };
    }
}

function saveProgress() {
    localStorage.setItem(STORAGE_KEYS.progress, JSON.stringify(progressState));
}

function ensureProgressDate() {
    const today = getTodayKey();
    if (progressState.date !== today) {
        progressState = { date: today, remaining: {} };
        saveProgress();
    }
}

function getItemKey(category, index) {
    return `${category}-${index}`;
}

function getRemainingCount(category, key, target) {
    ensureProgressDate();
    const categoryState = progressState.remaining[category] || {};
    const stored = categoryState[key];
    return typeof stored === 'number' ? stored : target;
}

function setRemainingCount(category, key, remaining) {
    ensureProgressDate();
    if (!progressState.remaining[category]) progressState.remaining[category] = {};
    progressState.remaining[category][key] = remaining;
    saveProgress();
}

function loadFavorites() {
    const raw = localStorage.getItem(STORAGE_KEYS.favorites);
    if (!raw) return { items: [] };
    try {
        const parsed = JSON.parse(raw);
        return parsed && Array.isArray(parsed.items) ? parsed : { items: [] };
    } catch {
        return { items: [] };
    }
}

function saveFavorites() {
    localStorage.setItem(STORAGE_KEYS.favorites, JSON.stringify(favoritesState));
}

function isFavorite(key) {
    return favoritesState.items.includes(key);
}

function toggleFavorite(key) {
    if (isFavorite(key)) {
        favoritesState.items = favoritesState.items.filter(item => item !== key);
    } else {
        favoritesState.items.push(key);
    }
    saveFavorites();
    renderCards(currentCategory);
}

function handleSearch(value) {
    searchTerm = value || '';
    renderCards(currentCategory);
}

function toggleFavoritesFilter() {
    favoritesOnly = !favoritesOnly;
    const btn = document.getElementById('favorites-toggle');
    if (btn) btn.classList.toggle('active', favoritesOnly);
    renderCards(currentCategory);
}

function resetCurrentProgress() {
    if (!currentCategory) return;
    progressState.remaining[currentCategory] = {};
    saveProgress();
    renderCards(currentCategory);
    updateProgress();
}

function updateOfflineIndicator() {
    const indicator = document.getElementById('offline-indicator');
    if (!indicator) return;
    if (navigator.onLine) {
        indicator.classList.add('hidden');
    } else {
        indicator.textContent = translations[currentLang]?.offline || 'Offline';
        indicator.classList.remove('hidden');
    }
}


/**
 * Handle Light/Dark Mode Toggle
 */
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        themeIcon.innerText = '☀️'; 
        localStorage.setItem(STORAGE_KEYS.theme, 'dark');
    } else {
        themeIcon.innerText = '🌙';
        localStorage.setItem(STORAGE_KEYS.theme, 'light');
    }
}

/**
 * Play audio preview on home cards
 */
function playHomePreview(event, category, btn) {
    event.stopPropagation();
    const audioPath = translations[currentLang][`${category}_intro`];
    handleAudio(audioPath, btn);
}

/**
 * Handle Language Switching and UI updates
 */
function changeLanguage(lang, btnElement) {
    currentLang = lang;
    const html = document.documentElement;
    const indicator = document.getElementById('lang-indicator');
    
    html.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    html.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.setAttribute('placeholder', translations[lang][key]);
        }
    });

    if (btnElement && indicator) {
        document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
        btnElement.classList.add('active');
        
        const offset = btnElement.offsetLeft;
        const width = btnElement.offsetWidth;
        indicator.style.width = `${width}px`;
        indicator.style.transform = `translateX(${offset}px)`;
    }

    localStorage.setItem(STORAGE_KEYS.lang, lang);
    updateOfflineIndicator();

    if (currentCategory) {
        const pageTitle = document.getElementById('page-title');
        if (pageTitle && translations[lang][currentCategory]) {
            pageTitle.innerText = translations[lang][currentCategory];
        }
        renderCards(currentCategory);
    }
}

/**
 * Render Athkar cards
 */
function renderCards(category) {
    const list = document.getElementById('athkar-list');
    if (!database[category]) return;

    // Hide only the secondary (🎧) audio button for morning/evening/sleep
    const hideSecondaryAudio = ['morning', 'evening', 'sleep'].includes(category);

    const query = (searchTerm || '').trim().toLowerCase();
    const items = database[category].map((item, index) => ({
        item,
        index,
        key: getItemKey(category, index)
    }));

    const filteredItems = items.filter(({ item, key }) => {
        if (favoritesOnly && !isFavorite(key)) return false;
        if (!query) return true;
        const haystack = `${item.intro || ''} ${item.text || ''}`.toLowerCase();
        return haystack.includes(query);
    });

    if (filteredItems.length === 0) {
        list.innerHTML = `<div class="empty-state">${translations[currentLang].no_results}</div>`;
        return;
    }

    list.innerHTML = filteredItems.map(({ item, key }) => {
        const remaining = getRemainingCount(category, key, item.target);
        const done = remaining === 0;
        const favoriteClass = isFavorite(key) ? 'active' : '';

        return `
        <div class="card athkar-card ${done ? 'completed' : ''}" id="card-${key}">
            <button class="favorite-btn ${favoriteClass}" onclick="toggleFavorite('${key}')">⭐</button>
            ${item.intro ? `<p class="intro-text text-rtl">${item.intro}</p>` : ''}
            <p class="arabic-text text-rtl">${item.text}</p>
            <div class="actions">
                <button class="audio-btn secondary" data-type="primary" onclick="handleAudio('${item.audio}', this)">
                    🔊 ${translations[currentLang].listen}
                </button>
                
                ${hideSecondaryAudio ? '' : `
                <button class="audio-btn secondary" data-type="secondary" onclick="handleAudio('${item.audio2 || item.audio}', this)">
                    🎧 ${translations[currentLang].listen}
                </button>
                `}

                <button class="count-btn ${done ? 'done' : ''}" id="btn-${key}" onclick="handleCount('${key}')">
                    ${done ? '✓' : remaining}
                </button>
            </div>
        </div>
        `;
    }).join('');
}

function renderQuran() {
    const quranSection = document.getElementById('quran-section');
    if (!quranSection) return;

    if (!Array.isArray(database.quran) || database.quran.length === 0) {
        quranSection.innerHTML = '';
        return;
    }

    quranSection.innerHTML = database.quran.map(surah => `
        <div class="card surah-container">
            <h2 class="quran-heading text-rtl">${surah.surahName}</h2>
            <div class="quran-words" aria-label="${surah.surahName}">
                ${surah.ayahs.map(ayah => `
                    <span class="ayah-text text-rtl" onclick="handleAudio('${ayah.audio}', this)">${ayah.text}</span>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// --- CORE APP LOGIC ---

function updateTheme(category) {
    const body = document.body;
    // Remove existing theme classes but preserve 'dark-mode'
    body.classList.remove('theme-morning', 'theme-evening', 'theme-sleep', 'theme-prayer');
    if (category) body.classList.add(`theme-${category}`);
}

function setActiveSubNav(category) {
    document.querySelectorAll('.sub-nav-item').forEach(btn => {
        const btnCategory = btn.getAttribute('data-category');
        const isActive = category && btnCategory === category;
        btn.classList.toggle('active', Boolean(isActive));
    });
}

function setFeaturedQuranCardVisible(isVisible) {
    const featuredCard = document.getElementById('featured-quran-card');
    if (!featuredCard) return;
    featuredCard.classList.toggle('hidden', !isVisible);
}

function showCategory(category) {
    setActiveSubNav(category);
    setFeaturedQuranCardVisible(false);

    if (category === 'quran') {
        currentCategory = '';

        document.getElementById('main-menu').classList.add('hidden');
        document.getElementById('page-title').classList.add('hidden');
        document.getElementById('athkar-list').classList.add('hidden');
        document.getElementById('progress-container').classList.add('hidden');
        document.getElementById('list-toolbar').classList.add('hidden');

        const quranSection = document.getElementById('quran-section');
        if (quranSection) quranSection.classList.remove('hidden');

        renderQuran();

        updateTheme(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });

        if (activeAudio) {
            activeAudio.pause();
            activeAudio = null;
        }
        return;
    }

    const quranSection = document.getElementById('quran-section');
    if (quranSection) quranSection.classList.add('hidden');
    loadAthkar(category);
}

function loadAthkar(category) {
    currentCategory = category;
    sessionCounts[category] = 0;
    setFeaturedQuranCardVisible(false);
    
    document.getElementById('main-menu').classList.add('hidden');
    document.getElementById('page-title').classList.add('hidden');
    document.getElementById('athkar-list').classList.remove('hidden');
    document.getElementById('progress-container').classList.remove('hidden');
    document.getElementById('list-toolbar').classList.remove('hidden');

    const quranSection = document.getElementById('quran-section');
    if (quranSection) quranSection.classList.add('hidden');

    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.value = '';
    searchTerm = '';

    updateTheme(category);
    setActiveSubNav(category);
    renderCards(category);
    updateProgress();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleCount(key) {
    const btn = document.getElementById(`btn-${key}`);
    const card = document.getElementById(`card-${key}`);
    if (!btn || btn.innerText === "✓") return;

    let val = parseInt(btn.innerText, 10);
    if (Number.isNaN(val)) return;

    if (val > 0) {
        val--;
        const isDone = val === 0;
        btn.innerText = isDone ? "✓" : val;
        setRemainingCount(currentCategory, key, val);
        
        if (navigator.vibrate) navigator.vibrate(50);
        
        if (isDone) {
            btn.classList.add('done');
            if (card) card.classList.add('completed');
            sessionCounts[currentCategory]++;
            updateProgress();
        }
    }
}

function updateProgress() {
    if (!currentCategory || !database[currentCategory]) return;
    const items = database[currentCategory];
    const total = items.length;
    const completed = items.reduce((count, item, index) => {
        const key = getItemKey(currentCategory, index);
        const remaining = getRemainingCount(currentCategory, key, item.target);
        return count + (remaining === 0 ? 1 : 0);
    }, 0);
    sessionCounts[currentCategory] = completed;
    const progress = total ? (completed / total) * 100 : 0;
    const bar = document.getElementById('progress-bar');
    if (bar) bar.style.width = `${progress}%`;
}

function handleAudio(src, btn) {
    const isAyah = btn && btn.classList && btn.classList.contains('ayah-text');
    const isSecondary = !isAyah && (btn.getAttribute('data-type') === 'secondary' || btn.innerText.includes('🎧'));
    const playIcon = isSecondary ? "🎧" : "🔊";
    const cleanListenText = `${playIcon} ${translations[currentLang].listen}`;

    const clearPlayingAyah = () => {
        document.querySelectorAll('.ayah-text.playing').forEach(el => el.classList.remove('playing'));
    };
    
    if (activeAudio) {
        activeAudio.pause();
        
        document.querySelectorAll('.audio-btn, .home-audio-btn').forEach(b => {
            if (b.innerText.includes("⏸") || b.innerText.includes("⏳")) {
                const bIsSecondary = b.getAttribute('data-type') === 'secondary' || b.classList.contains('home-audio-btn');
                const bIcon = bIsSecondary ? "🎧" : "🔊";
                b.innerText = `${bIcon} ${translations[currentLang].listen}`;
            }
        });

        clearPlayingAyah();

        if (activeAudio.src.includes(src)) {
            activeAudio = null;
            if (!isAyah) btn.innerText = cleanListenText;
            return;
        }
    }
    
    activeAudio = new Audio(src);
    activeAudio.preload = 'auto';
    if (isAyah) {
        btn.classList.add('playing');
    } else {
        btn.innerText = "⏳ " + translations[currentLang].loading;
    }
    
    activeAudio.play()
        .then(() => { 
            if (!isAyah) btn.innerText = "⏸ " + translations[currentLang].stop;
        })
        .catch(() => { 
            if (isAyah) {
                btn.classList.remove('playing');
            } else {
                btn.innerText = "❌ Error";
                setTimeout(() => { btn.innerText = cleanListenText; }, 2000);
            }
            activeAudio = null;
        });

    activeAudio.onended = () => {
        clearPlayingAyah();
        if (!isAyah) btn.innerText = cleanListenText;
        activeAudio = null;
    };
}

function showMainMenu() {
    setFeaturedQuranCardVisible(true);
    document.getElementById('main-menu').classList.remove('hidden');
    document.getElementById('page-title').classList.remove('hidden');
    document.getElementById('athkar-list').classList.add('hidden');
    document.getElementById('progress-container').classList.add('hidden');
    document.getElementById('list-toolbar').classList.add('hidden');

    const quranSection = document.getElementById('quran-section');
    if (quranSection) quranSection.classList.add('hidden');
    
    const bar = document.getElementById('progress-bar');
    if (bar) bar.style.width = "0%";
    
    updateTheme(null); // Clear category theme
    setActiveSubNav(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    searchTerm = '';
    
    if(activeAudio) { 
        activeAudio.pause(); 
        activeAudio = null; 
    }
}

function resetAll() { 
    if(currentCategory) loadAthkar(currentCategory); 
}

/**
 * Initialization on Load
 */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Restore Theme Preference
    const savedTheme = localStorage.getItem(STORAGE_KEYS.theme);
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('theme-icon').innerText = '☀️';
    }

    // 2. Initial Language Setup
    const savedLang = localStorage.getItem(STORAGE_KEYS.lang);
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
    }
    const activeBtn = document.querySelector(`.lang-btn[data-lang="${currentLang}"]`) || document.querySelector('.lang-btn.active');
    if (activeBtn) changeLanguage(currentLang, activeBtn);

    // 3. Offline indicator
    updateOfflineIndicator();
    window.addEventListener('online', updateOfflineIndicator);
    window.addEventListener('offline', updateOfflineIndicator);

    // 4. Service worker (removed for APK build)
});