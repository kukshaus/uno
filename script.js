// Version
const APP_VERSION = "1.0.0";

// Translations
const translations = {
    de: {
        "game.title": "UNO",
        "start.playerCount": "Anzahl Computer-Gegner:",
        "start.players2": "Du + 1 Computer",
        "start.players3": "Du + 2 Computer", 
        "start.players4": "Du + 3 Computer",
        "start.difficulty": "Schwierigkeitsgrad wählen:",
        "difficulty.easy": "Einfach",
        "difficulty.easyDesc": "Defensiver Computer",
        "difficulty.medium": "Mittel",
        "difficulty.mediumDesc": "Ausgewogener Computer",
        "difficulty.hard": "Schwer",
        "difficulty.hardDesc": "Strategischer Computer",
        "start.rules": "Spielregeln",
        "start.startGame": "Spiel starten",
        "game.yourTurn": "Dein Zug",
        "game.computerTurn": "Computer {0} ist dran",
        "game.drawCard": "Karte ziehen",
        "game.uno": "UNO!",
        "game.currentColor": "Aktuelle Farbe:",
        "game.cards": "Karten",
        "game.chooseColor": "Farbe wählen:",
        "game.computerChooses": "Computer wählt: {0}",
        "game.unoCalled": "UNO gerufen!",
        "game.computerCallsUno": "Computer {0} ruft UNO!",
        "game.unoForgotten": "UNO vergessen! +2 Karten",
        "game.won": "Gewonnen! 🎉",
        "game.lost": "Verloren 😔", 
        "game.wonText": "Herzlichen Glückwunsch! Du hast das Spiel gewonnen!",
        "game.lostText": "Computer {0} hat gewonnen. Versuch es nochmal!",
        "game.playAgain": "Nochmal spielen",
        "game.restart": "Möchtest du das Spiel wirklich neu starten?",
        "game.empty": "Leer",
        "colors.red": "Rot",
        "colors.blue": "Blau", 
        "colors.green": "Grün",
        "colors.yellow": "Gelb",
        "settings.title": "Einstellungen",
        "settings.background": "🎨 Hintergrund",
        "settings.bg.default": "Standard",
        "settings.bg.ocean": "Ozean",
        "settings.bg.sunset": "Sonnenuntergang",
        "settings.bg.forest": "Wald",
        "settings.bg.space": "Weltraum",
        "settings.bg.gradient": "Farbverlauf",
        "settings.close": "Fertig",
        "settings.version": "Version {0}",
        "language.auto": "Auto (Browser)",
        "settings.computerSpeed": "🤖 Computer-Geschwindigkeit",
        "settings.speed.instant": "Sofort",
        "settings.speed.fast": "Schnell",
        "settings.speed.normal": "Normal", 
        "settings.speed.slow": "Langsam",
        "skill.title": "🏆 Fertigkeits-Level",
        "skill.level": "Level {0}",
        "skill.xp": "EP: {0}/{1}",
        "skill.stats": "Statistiken",
        "skill.wins": "Siege:",
        "skill.losses": "Niederlagen:",
        "skill.winRate": "Siegquote:",
        "skill.avgCardsLeft": "Ø Karten übrig:",
        "skill.avgTurns": "Ø Züge pro Spiel:",
        "skill.totalGames": "Spiele gesamt:",
        "skill.levelUp": "Level aufgestiegen! 🎉",
        "skill.newLevel": "Neues Level: {0}",
        "skill.reward": "Belohnung freigeschaltet: {0}",
        "skill.noob": "Anfänger",
        "skill.beginner": "Einsteiger", 
        "skill.amateur": "Amateur",
        "skill.skilled": "Geübt",
        "skill.expert": "Experte",
        "skill.master": "Meister",
        "skill.legend": "Legende",
        "skill.god": "Gott",
        "reward.theme": "Neues Theme",
        "reward.title": "Neuer Titel",
        "reward.badge": "Neues Abzeichen"
    },
    en: {
        "game.title": "UNO",
        "start.playerCount": "Number of Computer Opponents:",
        "start.players2": "You + 1 Computer",
        "start.players3": "You + 2 Computers",
        "start.players4": "You + 3 Computers", 
        "start.difficulty": "Choose Difficulty:",
        "difficulty.easy": "Easy",
        "difficulty.easyDesc": "Defensive Computer",
        "difficulty.medium": "Medium",
        "difficulty.mediumDesc": "Balanced Computer",
        "difficulty.hard": "Hard",
        "difficulty.hardDesc": "Strategic Computer",
        "start.rules": "Game Rules",
        "start.startGame": "Start Game",
        "game.yourTurn": "Your Turn",
        "game.computerTurn": "Computer {0}'s Turn",
        "game.drawCard": "Draw Card",
        "game.uno": "UNO!",
        "game.currentColor": "Current Color:",
        "game.cards": "Cards",
        "game.chooseColor": "Choose Color:",
        "game.computerChooses": "Computer chooses: {0}",
        "game.unoCalled": "UNO called!",
        "game.computerCallsUno": "Computer {0} calls UNO!",
        "game.unoForgotten": "UNO forgotten! +2 Cards",
        "game.won": "You Won! 🎉",
        "game.lost": "You Lost 😔",
        "game.wonText": "Congratulations! You won the game!",
        "game.lostText": "Computer {0} won. Try again!",
        "game.playAgain": "Play Again",
        "game.restart": "Do you really want to restart the game?",
        "game.empty": "Empty",
        "colors.red": "Red",
        "colors.blue": "Blue",
        "colors.green": "Green", 
        "colors.yellow": "Yellow",
        "settings.title": "Settings",
        "settings.background": "🎨 Background",
        "settings.bg.default": "Default",
        "settings.bg.ocean": "Ocean",
        "settings.bg.sunset": "Sunset",
        "settings.bg.forest": "Forest",
        "settings.bg.space": "Space",
        "settings.bg.gradient": "Gradient",
        "settings.close": "Done",
        "settings.version": "Version {0}",
        "language.auto": "Auto (Browser)",
        "settings.computerSpeed": "🤖 Computer Speed",
        "settings.speed.instant": "Instant",
        "settings.speed.fast": "Fast",
        "settings.speed.normal": "Normal",
        "settings.speed.slow": "Slow",
        "skill.title": "🏆 Skill Level",
        "skill.level": "Level {0}",
        "skill.xp": "XP: {0}/{1}",
        "skill.stats": "Statistics",
        "skill.wins": "Wins:",
        "skill.losses": "Losses:",
        "skill.winRate": "Win Rate:",
        "skill.avgCardsLeft": "Avg Cards Left:",
        "skill.avgTurns": "Avg Turns per Game:",
        "skill.totalGames": "Total Games:",
        "skill.levelUp": "Level Up! 🎉",
        "skill.newLevel": "New Level: {0}",
        "skill.reward": "Reward Unlocked: {0}",
        "skill.noob": "Noob",
        "skill.beginner": "Beginner",
        "skill.amateur": "Amateur", 
        "skill.skilled": "Skilled",
        "skill.expert": "Expert",
        "skill.master": "Master",
        "skill.legend": "Legend",
        "skill.god": "God",
        "reward.theme": "New Theme",
        "reward.title": "New Title",
        "reward.badge": "New Badge"
    },
    hu: {
        "game.title": "UNO",
        "start.playerCount": "Számítógépes ellenfelek száma:",
        "start.players2": "Te + 1 Számítógép",
        "start.players3": "Te + 2 Számítógép",
        "start.players4": "Te + 3 Számítógép",
        "start.difficulty": "Nehézségi szint:",
        "difficulty.easy": "Könnyű",
        "difficulty.easyDesc": "Defenzív számítógép",
        "difficulty.medium": "Közepes",
        "difficulty.mediumDesc": "Kiegyensúlyozott számítógép",
        "difficulty.hard": "Nehéz",
        "difficulty.hardDesc": "Stratégiai számítógép",
        "start.rules": "Játékszabályok",
        "start.startGame": "Játék indítása",
        "game.yourTurn": "Te következel",
        "game.computerTurn": "{0}. számítógép következik",
        "game.drawCard": "Kártya húzása",
        "game.uno": "UNO!",
        "game.currentColor": "Jelenlegi szín:",
        "game.cards": "Kártyák",
        "game.chooseColor": "Szín választása:",
        "game.computerChooses": "A számítógép választ: {0}",
        "game.unoCalled": "UNO mondva!",
        "game.computerCallsUno": "{0}. számítógép UNO-t mond!",
        "game.unoForgotten": "UNO elfelejtve! +2 Kártya",
        "game.won": "Nyertél! 🎉",
        "game.lost": "Vesztettél 😔",
        "game.wonText": "Gratulálok! Megnyerted a játékot!",
        "game.lostText": "{0}. számítógép nyert. Próbáld újra!",
        "game.playAgain": "Újra játék",
        "game.restart": "Biztosan újra szeretnéd indítani a játékot?",
        "game.empty": "Üres",
        "colors.red": "Piros",
        "colors.blue": "Kék",
        "colors.green": "Zöld",
        "colors.yellow": "Sárga",
        "settings.title": "Beállítások",
        "settings.background": "🎨 Háttér",
        "settings.bg.default": "Alapértelmezett",
        "settings.bg.ocean": "Óceán",
        "settings.bg.sunset": "Naplemente",
        "settings.bg.forest": "Erdő",
        "settings.bg.space": "Világűr",
        "settings.bg.gradient": "Színátmenet",
        "settings.close": "Kész",
        "settings.version": "Verzió {0}",
        "language.auto": "Auto (Böngésző)",
        "settings.computerSpeed": "🤖 Számítógép Sebesség",
        "settings.speed.instant": "Azonnali",
        "settings.speed.fast": "Gyors",
        "settings.speed.normal": "Normál",
        "settings.speed.slow": "Lassú",
        "skill.title": "🏆 Ügyességi Szint",
        "skill.level": "Szint {0}",
        "skill.xp": "TP: {0}/{1}",
        "skill.stats": "Statisztikák",
        "skill.wins": "Győzelmek:",
        "skill.losses": "Vereségek:",
        "skill.winRate": "Győzelmi Arány:",
        "skill.avgCardsLeft": "Átl. Maradt Kártyák:",
        "skill.avgTurns": "Átl. Körök/Játék:",
        "skill.totalGames": "Összes Játék:",
        "skill.levelUp": "Szintlépés! 🎉",
        "skill.newLevel": "Új Szint: {0}",
        "skill.reward": "Jutalom Feloldva: {0}",
        "skill.noob": "Kezdő",
        "skill.beginner": "Újoncz",
        "skill.amateur": "Amatőr",
        "skill.skilled": "Tapasztalt",
        "skill.expert": "Szakértő",
        "skill.master": "Mester",
        "skill.legend": "Legenda",
        "skill.god": "Isten",
        "reward.theme": "Új Téma",
        "reward.title": "Új Cím",
        "reward.badge": "Új Jelvény"
    },
    ru: {
        "game.title": "УНО",
        "start.playerCount": "Количество компьютерных противников:",
        "start.players2": "Ты + 1 Компьютер",
        "start.players3": "Ты + 2 Компьютера",
        "start.players4": "Ты + 3 Компьютера",
        "start.difficulty": "Выберите сложность:",
        "difficulty.easy": "Легко",
        "difficulty.easyDesc": "Оборонительный компьютер",
        "difficulty.medium": "Средне",
        "difficulty.mediumDesc": "Сбалансированный компьютер",
        "difficulty.hard": "Сложно",
        "difficulty.hardDesc": "Стратегический компьютер",
        "start.rules": "Правила игры",
        "start.startGame": "Начать игру",
        "game.yourTurn": "Ваш ход",
        "game.computerTurn": "Ход компьютера {0}",
        "game.drawCard": "Взять карту",
        "game.uno": "УНО!",
        "game.currentColor": "Текущий цвет:",
        "game.cards": "Карты",
        "game.chooseColor": "Выберите цвет:",
        "game.computerChooses": "Компьютер выбирает: {0}",
        "game.unoCalled": "УНО объявлено!",
        "game.computerCallsUno": "Компьютер {0} объявляет УНО!",
        "game.unoForgotten": "УНО забыто! +2 Карты",
        "game.won": "Вы выиграли! 🎉",
        "game.lost": "Вы проиграли 😔",
        "game.wonText": "Поздравляем! Вы выиграли игру!",
        "game.lostText": "Компьютер {0} выиграл. Попробуйте снова!",
        "game.playAgain": "Играть снова",
        "game.restart": "Вы действительно хотите перезапустить игру?",
        "game.empty": "Пусто",
        "colors.red": "Красный",
        "colors.blue": "Синий",
        "colors.green": "Зелёный",
        "colors.yellow": "Жёлтый",
        "settings.title": "Настройки",
        "settings.background": "🎨 Фон",
        "settings.bg.default": "По умолчанию",
        "settings.bg.ocean": "Океан",
        "settings.bg.sunset": "Закат",
        "settings.bg.forest": "Лес",
        "settings.bg.space": "Космос",
        "settings.bg.gradient": "Градиент",
        "settings.close": "Готово",
        "settings.version": "Версия {0}",
        "language.auto": "Авто (Браузер)",
        "settings.computerSpeed": "🤖 Скорость Компьютера",
        "settings.speed.instant": "Мгновенно",
        "settings.speed.fast": "Быстро",
        "settings.speed.normal": "Нормально",
        "settings.speed.slow": "Медленно",
        "skill.title": "🏆 Уровень Навыка",
        "skill.level": "Уровень {0}",
        "skill.xp": "Опыт: {0}/{1}",
        "skill.stats": "Статистика",
        "skill.wins": "Победы:",
        "skill.losses": "Поражения:",
        "skill.winRate": "Процент Побед:",
        "skill.avgCardsLeft": "Сред. Карт Осталось:",
        "skill.avgTurns": "Сред. Ходов за Игру:",
        "skill.totalGames": "Всего Игр:",
        "skill.levelUp": "Повышение Уровня! 🎉",
        "skill.newLevel": "Новый Уровень: {0}",
        "skill.reward": "Награда Разблокирована: {0}",
        "skill.noob": "Новичок",
        "skill.beginner": "Начинающий",
        "skill.amateur": "Любитель",
        "skill.skilled": "Умелый",
        "skill.expert": "Эксперт",
        "skill.master": "Мастер",
        "skill.legend": "Легенда",
        "skill.god": "Бог",
        "reward.theme": "Новая Тема",
        "reward.title": "Новый Титул",
        "reward.badge": "Новый Значок"
    },
    es: {
        "game.title": "UNO",
        "start.playerCount": "Número de oponentes computadora:",
        "start.players2": "Tú + 1 Computadora",
        "start.players3": "Tú + 2 Computadoras",
        "start.players4": "Tú + 3 Computadoras",
        "start.difficulty": "Elegir dificultad:",
        "difficulty.easy": "Fácil",
        "difficulty.easyDesc": "Computadora defensiva",
        "difficulty.medium": "Medio",
        "difficulty.mediumDesc": "Computadora equilibrada",
        "difficulty.hard": "Difícil",
        "difficulty.hardDesc": "Computadora estratégica",
        "start.rules": "Reglas del juego",
        "start.startGame": "Empezar juego",
        "game.yourTurn": "Tu turno",
        "game.computerTurn": "Turno de {0}",
        "game.drawCard": "Robar carta",
        "game.uno": "¡UNO!",
        "game.currentColor": "Color actual:",
        "game.cards": "Cartas",
        "game.chooseColor": "Elegir color:",
        "game.computerChooses": "La computadora elige: {0}",
        "game.unoCalled": "¡UNO gritado!",
        "game.computerCallsUno": "¡{0} grita UNO!",
        "game.unoForgotten": "¡UNO olvidado! +2 Cartas",
        "game.won": "¡Ganaste! 🎉",
        "game.lost": "Perdiste 😔",
        "game.wonText": "¡Felicidades! ¡Ganaste el juego!",
        "game.lostText": "{0} ganó. ¡Inténtalo de nuevo!",
        "game.playAgain": "Jugar de nuevo",
        "game.restart": "¿Realmente quieres reiniciar el juego?",
        "game.empty": "Vacío",
        "colors.red": "Rojo",
        "colors.blue": "Azul",
        "colors.green": "Verde",
        "colors.yellow": "Amarillo",
        "settings.title": "Configuración",
        "settings.background": "🎨 Fondo",
        "settings.bg.default": "Por defecto",
        "settings.bg.ocean": "Océano",
        "settings.bg.sunset": "Atardecer",
        "settings.bg.forest": "Bosque",
        "settings.bg.space": "Espacio",
        "settings.bg.gradient": "Gradiente",
        "settings.close": "Listo",
        "settings.version": "Versión {0}",
        "language.auto": "Auto (Navegador)",
        "settings.computerSpeed": "🤖 Velocidad del Ordenador",
        "settings.speed.instant": "Instantáneo",
        "settings.speed.fast": "Rápido",
        "settings.speed.normal": "Normal",
        "settings.speed.slow": "Lento",
        "skill.title": "🏆 Nivel de Habilidad",
        "skill.level": "Nivel {0}",
        "skill.xp": "EXP: {0}/{1}",
        "skill.stats": "Estadísticas",
        "skill.wins": "Victorias:",
        "skill.losses": "Derrotas:",
        "skill.winRate": "Tasa de Victoria:",
        "skill.avgCardsLeft": "Prom. Cartas Restantes:",
        "skill.avgTurns": "Prom. Turnos por Juego:",
        "skill.totalGames": "Juegos Totales:",
        "skill.levelUp": "¡Subiste de Nivel! 🎉",
        "skill.newLevel": "Nuevo Nivel: {0}",
        "skill.reward": "Recompensa Desbloqueada: {0}",
        "skill.noob": "Novato",
        "skill.beginner": "Principiante",
        "skill.amateur": "Amateur",
        "skill.skilled": "Hábil",
        "skill.expert": "Experto",
        "skill.master": "Maestro",
        "skill.legend": "Leyenda",
        "skill.god": "Dios",
        "reward.theme": "Nuevo Tema",
        "reward.title": "Nuevo Título",
        "reward.badge": "Nueva Insignia"
    },
    fr: {
        "game.title": "UNO",
        "start.playerCount": "Nombre d'adversaires ordinateur:",
        "start.players2": "Toi + 1 Ordinateur",
        "start.players3": "Toi + 2 Ordinateurs",
        "start.players4": "Toi + 3 Ordinateurs",
        "start.difficulty": "Choisir la difficulté:",
        "difficulty.easy": "Facile",
        "difficulty.easyDesc": "Ordinateur défensif",
        "difficulty.medium": "Moyen",
        "difficulty.mediumDesc": "Ordinateur équilibré",
        "difficulty.hard": "Difficile",
        "difficulty.hardDesc": "Ordinateur stratégique",
        "start.rules": "Règles du jeu",
        "start.startGame": "Commencer le jeu",
        "game.yourTurn": "Votre tour",
        "game.computerTurn": "Tour de {0}",
        "game.drawCard": "Piocher une carte",
        "game.uno": "UNO!",
        "game.currentColor": "Couleur actuelle:",
        "game.cards": "Cartes",
        "game.chooseColor": "Choisir la couleur:",
        "game.computerChooses": "L'ordinateur choisit: {0}",
        "game.unoCalled": "UNO annoncé!",
        "game.computerCallsUno": "{0} annonce UNO!",
        "game.unoForgotten": "UNO oublié! +2 Cartes",
        "game.won": "Vous avez gagné! 🎉",
        "game.lost": "Vous avez perdu 😔",
        "game.wonText": "Félicitations! Vous avez gagné le jeu!",
        "game.lostText": "{0} a gagné. Essayez encore!",
        "game.playAgain": "Rejouer",
        "game.restart": "Voulez-vous vraiment redémarrer le jeu?",
        "game.empty": "Vide",
        "colors.red": "Rouge",
        "colors.blue": "Bleu",
        "colors.green": "Vert",
        "colors.yellow": "Jaune",
        "settings.title": "Paramètres",
        "settings.background": "🎨 Arrière-plan",
        "settings.bg.default": "Par défaut",
        "settings.bg.ocean": "Océan",
        "settings.bg.sunset": "Coucher de soleil",
        "settings.bg.forest": "Forêt",
        "settings.bg.space": "Espace",
        "settings.bg.gradient": "Dégradé",
        "settings.close": "Terminé",
        "settings.version": "Version {0}",
        "language.auto": "Auto (Navigateur)",
        "settings.computerSpeed": "🤖 Vitesse de l'Ordinateur",
        "settings.speed.instant": "Instantané",
        "settings.speed.fast": "Rapide",
        "settings.speed.normal": "Normal",
        "settings.speed.slow": "Lent",
        "skill.title": "🏆 Niveau de Compétence",
        "skill.level": "Niveau {0}",
        "skill.xp": "EXP: {0}/{1}",
        "skill.stats": "Statistiques",
        "skill.wins": "Victoires:",
        "skill.losses": "Défaites:",
        "skill.winRate": "Taux de Victoire:",
        "skill.avgCardsLeft": "Moy. Cartes Restantes:",
        "skill.avgTurns": "Moy. Tours par Partie:",
        "skill.totalGames": "Parties Totales:",
        "skill.levelUp": "Montée de Niveau! 🎉",
        "skill.newLevel": "Nouveau Niveau: {0}",
        "skill.reward": "Récompense Débloquée: {0}",
        "skill.noob": "Débutant",
        "skill.beginner": "Novice",
        "skill.amateur": "Amateur",
        "skill.skilled": "Compétent",
        "skill.expert": "Expert",
        "skill.master": "Maître",
        "skill.legend": "Légende",
        "skill.god": "Dieu",
        "reward.theme": "Nouveau Thème",
        "reward.title": "Nouveau Titre",
        "reward.badge": "Nouveau Badge"
    },
    pt: {
        "game.title": "UNO",
        "start.playerCount": "Número de oponentes computador:",
        "start.players2": "Você + 1 Computador",
        "start.players3": "Você + 2 Computadores",
        "start.players4": "Você + 3 Computadores",
        "start.difficulty": "Escolher dificuldade:",
        "difficulty.easy": "Fácil",
        "difficulty.easyDesc": "Computador defensivo",
        "difficulty.medium": "Médio",
        "difficulty.mediumDesc": "Computador equilibrado",
        "difficulty.hard": "Difícil",
        "difficulty.hardDesc": "Computador estratégico",
        "start.rules": "Regras do jogo",
        "start.startGame": "Começar jogo",
        "game.yourTurn": "Sua vez",
        "game.computerTurn": "Vez de {0}",
        "game.drawCard": "Comprar carta",
        "game.uno": "UNO!",
        "game.currentColor": "Cor atual:",
        "game.cards": "Cartas",
        "game.chooseColor": "Escolher cor:",
        "game.computerChooses": "O computador escolhe: {0}",
        "game.unoCalled": "UNO gritado!",
        "game.computerCallsUno": "{0} grita UNO!",
        "game.unoForgotten": "UNO esquecido! +2 Cartas",
        "game.won": "Você ganhou! 🎉",
        "game.lost": "Você perdeu 😔",
        "game.wonText": "Parabéns! Você ganhou o jogo!",
        "game.lostText": "{0} ganhou. Tente novamente!",
        "game.playAgain": "Jogar novamente",
        "game.restart": "Você realmente quer reiniciar o jogo?",
        "game.empty": "Vazio",
        "colors.red": "Vermelho",
        "colors.blue": "Azul",
        "colors.green": "Verde",
        "colors.yellow": "Amarelo",
        "settings.title": "Configurações",
        "settings.background": "🎨 Fundo",
        "settings.bg.default": "Padrão",
        "settings.bg.ocean": "Oceano",
        "settings.bg.sunset": "Pôr do sol",
        "settings.bg.forest": "Floresta",
        "settings.bg.space": "Espaço",
        "settings.bg.gradient": "Gradiente",
        "settings.close": "Pronto",
        "settings.version": "Versão {0}",
        "language.auto": "Auto (Navegador)",
        "settings.computerSpeed": "🤖 Velocidade do Computador",
        "settings.speed.instant": "Instantâneo",
        "settings.speed.fast": "Rápido",
        "settings.speed.normal": "Normal",
        "settings.speed.slow": "Lento",
        "skill.title": "🏆 Nível de Habilidade",
        "skill.level": "Nível {0}",
        "skill.xp": "EXP: {0}/{1}",
        "skill.stats": "Estatísticas",
        "skill.wins": "Vitórias:",
        "skill.losses": "Derrotas:",
        "skill.winRate": "Taxa de Vitória:",
        "skill.avgCardsLeft": "Méd. Cartas Restantes:",
        "skill.avgTurns": "Méd. Turnos por Jogo:",
        "skill.totalGames": "Jogos Totais:",
        "skill.levelUp": "Subiu de Nível! 🎉",
        "skill.newLevel": "Novo Nível: {0}",
        "skill.reward": "Recompensa Desbloqueada: {0}",
        "skill.noob": "Novato",
        "skill.beginner": "Iniciante",
        "skill.amateur": "Amador",
        "skill.skilled": "Habilidoso",
        "skill.expert": "Especialista",
        "skill.master": "Mestre",
        "skill.legend": "Lenda",
        "skill.god": "Deus",
        "reward.theme": "Novo Tema",
        "reward.title": "Novo Título",
        "reward.badge": "Novo Distintivo"
    },
    ja: {
        "game.title": "UNO",
        "start.playerCount": "コンピューター対戦相手の数:",
        "start.players2": "あなた + コンピューター1台",
        "start.players3": "あなた + コンピューター2台",
        "start.players4": "あなた + コンピューター3台",
        "start.difficulty": "難易度を選択:",
        "difficulty.easy": "簡単",
        "difficulty.easyDesc": "守備的なコンピューター",
        "difficulty.medium": "普通",
        "difficulty.mediumDesc": "バランスの取れたコンピューター",
        "difficulty.hard": "難しい",
        "difficulty.hardDesc": "戦略的なコンピューター",
        "start.rules": "ゲームルール",
        "start.startGame": "ゲーム開始",
        "game.yourTurn": "あなたの番",
        "game.computerTurn": "{0}の番",
        "game.drawCard": "カードを引く",
        "game.uno": "ウノ!",
        "game.currentColor": "現在の色:",
        "game.cards": "枚",
        "game.chooseColor": "色を選択:",
        "game.computerChooses": "コンピューターが選択: {0}",
        "game.unoCalled": "ウノ宣言!",
        "game.computerCallsUno": "{0}がウノ宣言!",
        "game.unoForgotten": "ウノ忘れ! +2枚",
        "game.won": "勝利! 🎉",
        "game.lost": "敗北 😔",
        "game.wonText": "おめでとうございます！勝利しました！",
        "game.lostText": "{0}が勝利しました。再挑戦してください！",
        "game.playAgain": "もう一度",
        "game.restart": "本当にゲームを再開始しますか？",
        "game.empty": "空",
        "colors.red": "赤",
        "colors.blue": "青",
        "colors.green": "緑",
        "colors.yellow": "黄",
        "settings.title": "設定",
        "settings.background": "🎨 背景",
        "settings.bg.default": "デフォルト",
        "settings.bg.ocean": "海",
        "settings.bg.sunset": "夕日",
        "settings.bg.forest": "森",
        "settings.bg.space": "宇宙",
        "settings.bg.gradient": "グラデーション",
        "settings.close": "完了",
        "settings.version": "バージョン {0}",
        "language.auto": "自動（ブラウザ）",
        "settings.computerSpeed": "🤖 コンピューター速度",
        "settings.speed.instant": "即座",
        "settings.speed.fast": "速い",
        "settings.speed.normal": "普通",
        "settings.speed.slow": "遅い",
        "skill.title": "🏆 スキルレベル",
        "skill.level": "レベル {0}",
        "skill.xp": "経験値: {0}/{1}",
        "skill.stats": "統計",
        "skill.wins": "勝利:",
        "skill.losses": "敗北:",
        "skill.winRate": "勝率:",
        "skill.avgCardsLeft": "平均残りカード:",
        "skill.avgTurns": "平均ターン/ゲーム:",
        "skill.totalGames": "総ゲーム数:",
        "skill.levelUp": "レベルアップ! 🎉",
        "skill.newLevel": "新レベル: {0}",
        "skill.reward": "報酬解除: {0}",
        "skill.noob": "初心者",
        "skill.beginner": "ビギナー",
        "skill.amateur": "アマチュア",
        "skill.skilled": "熟練者",
        "skill.expert": "エキスパート",
        "skill.master": "マスター",
        "skill.legend": "レジェンド",
        "skill.god": "神",
        "reward.theme": "新テーマ",
        "reward.title": "新タイトル",
        "reward.badge": "新バッジ"
    },
    zh: {
        "game.title": "UNO",
        "start.playerCount": "电脑对手数量:",
        "start.players2": "你 + 1台电脑",
        "start.players3": "你 + 2台电脑",
        "start.players4": "你 + 3台电脑",
        "start.difficulty": "选择难度:",
        "difficulty.easy": "简单",
        "difficulty.easyDesc": "防守型电脑",
        "difficulty.medium": "中等",
        "difficulty.mediumDesc": "平衡型电脑",
        "difficulty.hard": "困难",
        "difficulty.hardDesc": "策略型电脑",
        "start.rules": "游戏规则",
        "start.startGame": "开始游戏",
        "game.yourTurn": "你的回合",
        "game.computerTurn": "{0}的回合",
        "game.drawCard": "抽牌",
        "game.uno": "UNO!",
        "game.currentColor": "当前颜色:",
        "game.cards": "张牌",
        "game.chooseColor": "选择颜色:",
        "game.computerChooses": "电脑选择: {0}",
        "game.unoCalled": "UNO宣告!",
        "game.computerCallsUno": "{0}宣告UNO!",
        "game.unoForgotten": "忘记UNO! +2张牌",
        "game.won": "胜利! 🎉",
        "game.lost": "失败 😔",
        "game.wonText": "恭喜！你赢得了游戏！",
        "game.lostText": "{0}获胜了。再试一次！",
        "game.playAgain": "再玩一次",
        "game.restart": "真的要重新开始游戏吗？",
        "game.empty": "空",
        "colors.red": "红色",
        "colors.blue": "蓝色",
        "colors.green": "绿色",
        "colors.yellow": "黄色",
        "settings.title": "设置",
        "settings.background": "🎨 背景",
        "settings.bg.default": "默认",
        "settings.bg.ocean": "海洋",
        "settings.bg.sunset": "日落",
        "settings.bg.forest": "森林",
        "settings.bg.space": "太空",
        "settings.bg.gradient": "渐变",
        "settings.close": "完成",
        "settings.version": "版本 {0}",
        "language.auto": "自动（浏览器）",
        "settings.computerSpeed": "🤖 电脑速度",
        "settings.speed.instant": "瞬间",
        "settings.speed.fast": "快速",
        "settings.speed.normal": "正常",
        "settings.speed.slow": "慢速",
        "skill.title": "🏆 技能等级",
        "skill.level": "等级 {0}",
        "skill.xp": "经验值: {0}/{1}",
        "skill.stats": "统计",
        "skill.wins": "胜利:",
        "skill.losses": "失败:",
        "skill.winRate": "胜率:",
        "skill.avgCardsLeft": "平均剩余牌数:",
        "skill.avgTurns": "平均回合数/游戏:",
        "skill.totalGames": "总游戏数:",
        "skill.levelUp": "升级! 🎉",
        "skill.newLevel": "新等级: {0}",
        "skill.reward": "奖励解锁: {0}",
        "skill.noob": "菜鸟",
        "skill.beginner": "初学者",
        "skill.amateur": "业余",
        "skill.skilled": "熟练",
        "skill.expert": "专家",
        "skill.master": "大师",
        "skill.legend": "传奇",
        "skill.god": "神",
        "reward.theme": "新主题",
        "reward.title": "新称号",
        "reward.badge": "新徽章"
    }
};

// UNO Game Implementation
class UnoGame {
    constructor() {
        this.colors = ['red', 'blue', 'green', 'yellow'];
        this.numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        this.actions = ['skip', 'reverse', 'draw-two'];
        this.wilds = ['wild', 'wild-draw-four'];
        
        // Lustige Computer-Namen nach Sprachen
        this.computerNamesByLanguage = {
            de: [
                'KartenKaiser', 'UnoUlrich', 'BlitzBerta', 'TurboTina', 'MegaMax',
                'FlitzerFritz', 'ZaubererZoe', 'RaketenRudi', 'SuperSusi', 'BlitzerBob',
                'GigaGerta', 'TurbineTom', 'FlashFiona', 'BoosterBruno', 'ZoomZara',
                'SpeediSepp', 'RaserRita', 'TurboTeddy', 'FlitzerFee', 'RocketRalf',
                'UnoUlla', 'KartenKurt', 'BlitzBrigitte', 'PowerPaul', 'MegaMaria',
                'TurboThomas', 'SpeedySandra', 'FlashFelix', 'ZoomZoe', 'RaketaRose',
                'SuperSchnecke', 'BlitzBirne', 'TurboTomate', 'FlitzerFisch', 'UnoUhu',
                'KartenKaktus', 'BlitzBanane', 'PowerPinguin', 'MegaMaulwurf', 'TurboTiger'
            ],
            en: [
                'CardKing', 'UnoUnicorn', 'FlashFred', 'TurboTom', 'MegaMax',
                'SpeedySpike', 'WizardWanda', 'RocketRob', 'SuperSam', 'BlitzBella',
                'GigaGrace', 'TurboTed', 'FlashFiona', 'BoosterBen', 'ZoomZoe',
                'QuickQuinn', 'RushRuby', 'TurboTerry', 'FlashFay', 'RocketRyan',
                'UnoUrsula', 'CardCarl', 'BlitzBrian', 'PowerPat', 'MegaMia',
                'TurboTracy', 'SpeedySarah', 'FlashFinn', 'ZoomZack', 'RocketRose',
                'SuperSnail', 'BlitzBerry', 'TurboTomato', 'FlashFish', 'UnoOwl',
                'CardCactus', 'BlitzBanana', 'PowerPenguin', 'MegaMole', 'TurboTiger'
            ],
            hu: [
                'KártyaKirály', 'UnoUnikorn', 'VillámVilma', 'TurbóTamás', 'MegaMarci',
                'SebességiSzabi', 'VarázslóVera', 'RakétaRóbert', 'SzuperSzilvi', 'VillámViktor',
                'GigaGabi', 'TurbóTibor', 'VillámVanda', 'ErősítőErnő', 'ZoomZoltán',
                'GyorsGergő', 'RohamnéRita', 'TurbóTünde', 'VillámVivien', 'RakétaRéka',
                'UnoÚrsula', 'KártyaKálmán', 'VillámViktor', 'ErősErika', 'MegaMónika',
                'TurbóTeréz', 'GyorsSzandra', 'VillámFerenc', 'ZoomZsuzsa', 'RakétaRózsa',
                'SzuperCsiga', 'VillámBogyó', 'TurbóParadicsom', 'VillámHal', 'UnoBagoly',
                'KártyaKaktusz', 'VillámBanán', 'ErősPingvin', 'MegaVakond', 'TurbóTigris'
            ],
            ru: [
                'КарточныйКороль', 'УноЮникорн', 'МолнияМаша', 'ТурбоТоня', 'МегаМакс',
                'СкоростнойСергей', 'ВолшебникВера', 'РакетаРоман', 'СуперСаша', 'МолнияМиша',
                'ГигаГалина', 'ТурбоТимур', 'МолнияВанда', 'БустерБорис', 'ЗумЗоя',
                'БыстрыйБорис', 'СпешкаСвета', 'ТурбоТатьяна', 'МолнияВиктор', 'РакетаРита',
                'УноУльяна', 'КарточныйКостя', 'МолнияМарина', 'СилаСергей', 'МегаМария',
                'ТурбоТаня', 'СкорыйСаша', 'МолнияФёдор', 'ЗумЗинаида', 'РакетаРоза',
                'СуперУлитка', 'МолнияЯгода', 'ТурбоПомидор', 'МолнияРыба', 'УноСова',
                'КарточныйКактус', 'МолнияБанан', 'СильныйПингвин', 'МегаКрот', 'ТурбоТигр'
            ],
            es: [
                'ReyCartas', 'UnoUnicornio', 'RelámpagoRosa', 'TurboTeo', 'MegaMax',
                'VelocidadVera', 'MagoMario', 'CoheteCarlos', 'SuperSofia', 'RelámpagoRafa',
                'GigaGloria', 'TurboTomás', 'FlashFrancisca', 'BoosterBenji', 'ZoomZara',
                'RápidoRicardo', 'PrisaPatricia', 'TurboTere', 'FlashFelipe', 'CoheteClara',
                'UnoUrsula', 'CartasCarmen', 'RelámpagoRoberto', 'PoderPablo', 'MegaMaría',
                'TurboTania', 'VeloceSandra', 'FlashFernando', 'ZoomZoe', 'CoheteRosa',
                'SuperCaracol', 'RelámpagoUva', 'TurboTomate', 'FlashPez', 'UnoBúho',
                'CartasCactus', 'RelámpagoPlatano', 'PoderPingüino', 'MegaTopo', 'TurboTigre'
            ],
            fr: [
                'RoiCartes', 'UnoLicorne', 'ÉclairÉmilie', 'TurboThéo', 'MégaMax',
                'VitesseVictor', 'MagicienMarcel', 'FuséeFrançoise', 'SuperSylvie', 'ÉclairÉric',
                'GigaGabrielle', 'TurboThomas', 'FlashFanny', 'BoosterBenjamin', 'ZoomZoé',
                'RapideRaymond', 'PressePauline', 'TurboThérèse', 'FlashFabien', 'FuséeClaire',
                'UnoUrsule', 'CartesClément', 'ÉclairRenée', 'PouvoirPierre', 'MégaMarie',
                'TurboTanya', 'VéloceSandra', 'FlashFélix', 'ZoomZacharie', 'FuséeRose',
                'SuperEscargot', 'ÉclairRaisin', 'TurboTomate', 'FlashPoisson', 'UnoHibou',
                'CartesCactus', 'ÉclairBanane', 'PouvoirPingouin', 'MégaTaupe', 'TurboTigre'
            ],
            pt: [
                'ReiCartas', 'UnoUnicórnio', 'RelâmpagoRita', 'TurboTiago', 'MegaMax',
                'VelocidadeVera', 'MágicoMário', 'FogueteFelix', 'SuperSônia', 'RelâmpagoRafa',
                'GigaGisele', 'TurboTomás', 'FlashFernanda', 'BoosterBruno', 'ZoomZara',
                'RápidoRicardo', 'PressaPatrícia', 'TurboTina', 'FlashFábio', 'FogueteClara',
                'UnoÚrsula', 'CartasCarlos', 'RelâmpagoRenata', 'PoderPaulo', 'MegaMaria',
                'TurboTânia', 'VelozSandra', 'FlashFernando', 'ZoomZé', 'FogueteRosa',
                'SuperCaracol', 'RelâmpagoUva', 'TurboTomate', 'FlashPeixe', 'UnoCoruja',
                'CartasCacto', 'RelâmpagoBanana', 'PoderPinguim', 'MegaToupeira', 'TurboTigre'
            ],
            ja: [
                'カードキング', 'ウノユニコーン', 'イナズマアイ', 'ターボタロウ', 'メガマックス',
                'スピードサトシ', 'マジシャンミカ', 'ロケットリョウ', 'スーパーサキ', 'イナズマイチロウ',
                'ギガゴロウ', 'ターボタカシ', 'フラッシュフミ', 'ブースターベン', 'ズームゾエ',
                'クイックケンジ', 'ラッシュリカ', 'ターボテル', 'フラッシュフミオ', 'ロケットリナ',
                'ウノウララ', 'カードケン', 'イナズマイズミ', 'パワーポン', 'メガマミ',
                'ターボタミ', 'スピーディサチ', 'フラッシュフジ', 'ズームゼン', 'ロケットローズ',
                'スーパーカタツムリ', 'イナズマイチゴ', 'ターボトマト', 'フラッシュフィッシュ', 'ウノフクロウ',
                'カードカクタス', 'イナズマバナナ', 'パワーペンギン', 'メガモグラ', 'ターボトラ'
            ],
            zh: [
                '卡牌之王', '乌诺独角兽', '闪电丽丽', '涡轮小明', '超级麦克斯',
                '速度小薇', '魔法师马里奥', '火箭小飞', '超级小苏', '闪电小强',
                '千兆小刚', '涡轮小涛', '闪光小芳', '助推器小本', '缩放小柔',
                '快速小瑞', '匆忙小佩', '涡轮小婷', '闪光小飞', '火箭小克',
                '乌诺小雨', '卡牌小陈', '闪电小蕾', '力量小保', '超级小玛',
                '涡轮小谭', '快速小桑', '闪光小峰', '缩放小泽', '火箭小蔷',
                '超级蜗牛', '闪电葡萄', '涡轮番茄', '闪光小鱼', '乌诺猫头鹰',
                '卡牌仙人掌', '闪电香蕉', '力量企鹅', '超级鼹鼠', '涡轮老虎'
            ]
        };
        this.usedNames = [];  // Bereits verwendete Namen in diesem Spiel
        
        this.deck = [];
        this.players = []; // Array of all players (index 0 = human player)
        this.discardPile = [];
        this.currentColor = null;
        this.currentValue = null;
        this.currentPlayerIndex = 0; // Index of current player
        this.gameDirection = 1; // 1 for clockwise, -1 for counter-clockwise
        this.difficulty = 'medium';
        this.playerCount = 2; // Total players (human + computers)
        
        this.calledUno = []; // Track UNO calls for each player
        this.gameInProgress = false; // Prevent multiple simultaneous actions
        this.currentLanguage = localStorage.getItem('unoLanguage') || this.detectBrowserLanguage();
        this.currentBackground = localStorage.getItem('unoBackground') || 'default';
        this.computerSpeed = localStorage.getItem('unoComputerSpeed') || 'normal';
        
        // Skill Analysis System
        this.playerStats = this.loadPlayerStats();
        this.currentGameStats = this.initializeGameStats();
        
        this.initializeElements();
        this.setupEventListeners();
        this.initializeLanguage();
        this.initializeBackground();
        this.initializeComputerSpeed();
        
        // Initialize skill display
        this.updateSkillDisplay();
    }
    
    initializeElements() {
        // Screen elements
        this.startScreen = document.getElementById('startScreen');
        this.gameScreen = document.getElementById('gameScreen');
        
        // Game elements
        this.playerCardsContainer = document.getElementById('playerCards');
        this.playersContainer = document.getElementById('playersContainer');
        this.discardPileElement = document.getElementById('discardPile');
        this.drawPileElement = document.getElementById('drawPile');
        
        // UI elements
        this.currentTurnElement = document.getElementById('currentTurn');
        this.colorDisplay = document.getElementById('colorDisplay');
        this.drawCardBtn = document.getElementById('drawCard');
        this.callUnoBtn = document.getElementById('callUno');
        
        // Modals
        this.colorModal = document.getElementById('colorModal');
        this.gameOverModal = document.getElementById('gameOverModal');
        this.rulesModal = document.getElementById('rulesModal');
        this.settingsModal = document.getElementById('settingsModal');
        
        // Start screen elements
        this.playerCountButtons = document.querySelectorAll('.player-count-btn');
        this.difficultyButtons = document.querySelectorAll('.difficulty-btn');
        this.startGameBtn = document.getElementById('startGame');
        
        // Game control elements
        this.restartBtn = document.getElementById('restartButton');
        this.rulesBtn = document.getElementById('rulesButton');
        this.rulesBtnGame = document.getElementById('rulesButtonGame');
        
        // Language elements
        this.languageToggle = document.getElementById('languageToggle');
        this.languageMenu = document.getElementById('languageMenu');
        this.languageOptions = document.querySelectorAll('.language-option');
        this.currentFlag = document.querySelector('.current-flag');
        
        // Settings elements
        this.settingsBtn = document.getElementById('settingsButton');
        this.settingsBtnGame = document.getElementById('settingsButtonGame');
        this.backgroundOptions = document.querySelectorAll('.background-option');
        this.speedOptions = document.querySelectorAll('.speed-option');
        
        // Skill display elements
        this.skillDisplay = document.getElementById('skillDisplay');
        this.skillToggle = document.getElementById('skillToggle');
        this.skillContent = document.getElementById('skillContent');
        this.skillLevelText = document.getElementById('skillLevelText');
        this.skillLevelName = document.getElementById('skillLevelName');
        this.skillXP = document.getElementById('skillXP');
        this.xpProgress = document.getElementById('xpProgress');
        this.skillWins = document.getElementById('skillWins');
        this.skillLosses = document.getElementById('skillLosses');
        this.skillWinRate = document.getElementById('skillWinRate');
    }
    
    setupEventListeners() {
        // Player count selection
        this.playerCountButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                this.playerCountButtons.forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                this.playerCount = parseInt(btn.dataset.players);
                this.checkStartButtonEnabled();
            });
        });
        
        // Difficulty selection
        this.difficultyButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                this.difficultyButtons.forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                this.difficulty = btn.dataset.difficulty;
                this.checkStartButtonEnabled();
            });
        });
        
        // Start game
        this.startGameBtn.addEventListener('click', () => {
            this.startGame();
        });
        
        // Game actions
        this.drawCardBtn.addEventListener('click', () => {
            this.drawCard(0);
        });
        
        this.callUnoBtn.addEventListener('click', () => {
            this.callUno(0);
        });
        
        // Color selection
        document.querySelectorAll('.color-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.selectColor(btn.dataset.color);
            });
        });
        
        // Play again
        document.getElementById('playAgain').addEventListener('click', () => {
            this.resetGame();
        });
        
        // Restart button
        this.restartBtn.addEventListener('click', () => {
            if (confirm('Möchtest du das Spiel wirklich neu starten?')) {
                this.resetGame();
            }
        });
        
        // Rules button (start screen)
        this.rulesBtn.addEventListener('click', () => {
            this.showRules();
        });
        
        // Rules button (in game)
        this.rulesBtnGame.addEventListener('click', () => {
            this.showRules();
        });
        
        // Close rules modal
        document.getElementById('closeRules').addEventListener('click', () => {
            this.hideRules();
        });
        
        document.getElementById('closeRulesBtn').addEventListener('click', () => {
            this.hideRules();
        });
        
        // Language dropdown
        this.languageToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleLanguageMenu();
        });
        
        this.languageOptions.forEach(option => {
            option.addEventListener('click', () => {
                const lang = option.dataset.lang;
                if (lang === 'auto') {
                    this.resetToAutoLanguage();
                } else {
                    this.switchLanguage(lang);
                }
                this.hideLanguageMenu();
            });
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            this.hideLanguageMenu();
        });
        
        // Settings
        this.settingsBtn.addEventListener('click', () => {
            this.showSettings();
        });
        
        this.settingsBtnGame.addEventListener('click', () => {
            this.showSettings();
        });
        
        document.getElementById('closeSettings').addEventListener('click', () => {
            this.hideSettings();
        });
        
        document.getElementById('closeSettingsBtn').addEventListener('click', () => {
            this.hideSettings();
        });
        
        // Background selection
        this.backgroundOptions.forEach(option => {
            option.addEventListener('click', () => {
                this.changeBackground(option.dataset.bg);
            });
        });
        
        // Computer speed selection
        this.speedOptions.forEach(option => {
            option.addEventListener('click', () => {
                this.changeComputerSpeed(option.dataset.speed);
            });
        });
        
        // Draw pile click
        this.drawPileElement.addEventListener('click', () => {
            if (this.currentPlayerIndex === 0 && this.deck.length > 0) {
                this.drawCard(0);
            }
        });
        
        // Skill display toggle
        this.skillToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleSkillDisplay();
        });
        
        // Skill header click to toggle
        document.querySelector('.skill-header').addEventListener('click', () => {
            this.toggleSkillDisplay();
        });
    }
    
    checkStartButtonEnabled() {
        const playerCountSelected = Array.from(this.playerCountButtons).some(btn => btn.classList.contains('selected'));
        const difficultySelected = Array.from(this.difficultyButtons).some(btn => btn.classList.contains('selected'));
        this.startGameBtn.disabled = !(playerCountSelected && difficultySelected);
    }
    
    getRandomComputerName() {
        // Hole die Namen für die aktuelle Sprache
        const computerNames = this.computerNamesByLanguage[this.currentLanguage] || this.computerNamesByLanguage['de'];
        
        // Wenn alle Namen verwendet wurden, leere die Liste
        if (this.usedNames.length >= computerNames.length) {
            this.usedNames = [];
        }
        
        // Wähle einen Namen, der noch nicht verwendet wurde
        let availableNames = computerNames.filter(name => !this.usedNames.includes(name));
        const randomIndex = Math.floor(Math.random() * availableNames.length);
        const selectedName = availableNames[randomIndex];
        
        // Markiere den Namen als verwendet
        this.usedNames.push(selectedName);
        
        return selectedName;
    }
    
    createDeck() {
        this.deck = [];
        
        // Number cards (0-9) - 0 has 1 of each color, 1-9 have 2 of each color
        this.colors.forEach(color => {
            this.deck.push({ color, value: '0', type: 'number' });
            for (let i = 1; i <= 9; i++) {
                this.deck.push({ color, value: i.toString(), type: 'number' });
                this.deck.push({ color, value: i.toString(), type: 'number' });
            }
        });
        
        // Action cards (2 of each per color)
        this.colors.forEach(color => {
            this.actions.forEach(action => {
                this.deck.push({ color, value: action, type: 'action' });
                this.deck.push({ color, value: action, type: 'action' });
            });
        });
        
        // Wild cards (4 of each)
        for (let i = 0; i < 4; i++) {
            this.deck.push({ color: 'wild', value: 'wild', type: 'wild' });
            this.deck.push({ color: 'wild', value: 'wild-draw-four', type: 'wild' });
        }
        
        this.shuffleDeck();
    }
    
    shuffleDeck() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }
    
    dealInitialCards() {
        // Initialize players array
        this.players = [];
        this.calledUno = [];
        
        for (let i = 0; i < this.playerCount; i++) {
            this.players[i] = [];
            this.calledUno[i] = false;
        }
        
        // Deal 7 cards to each player
        for (let i = 0; i < 7; i++) {
            for (let j = 0; j < this.playerCount; j++) {
                this.players[j].push(this.deck.pop());
            }
        }
        
        // Place first card on discard pile (cannot be wild or action card)
        let firstCard;
        do {
            firstCard = this.deck.pop();
        } while (firstCard.type === 'wild' || firstCard.type === 'action');
        
        this.discardPile = [firstCard];
        this.currentColor = firstCard.color;
        this.currentValue = firstCard.value;
    }
    
    startGame() {
        this.startScreen.classList.add('hidden');
        this.gameScreen.classList.remove('hidden');
        
        // Reset game stats for new game
        this.currentGameStats = this.initializeGameStats();
        
        this.createDeck();
        this.dealInitialCards();
        this.setupPlayersUI();
        this.currentPlayerIndex = 0;
        this.gameInProgress = true;
        this.updateUI();
        this.updateTurnDisplay();
        
        // Enable UNO button when human player has 2 cards
        this.updateUnoButton();
        
        // Update skill display
        this.updateSkillDisplay();
    }
    
    setupPlayersUI() {
        // Clear existing computer players
        this.playersContainer.innerHTML = '';
        
        // Reset used names for a new game
        this.usedNames = [];
        
        // Create computer player UI elements (skip index 0 = human player)
        for (let i = 1; i < this.playerCount; i++) {
            const computerName = this.getRandomComputerName();
            const playerDiv = document.createElement('div');
            playerDiv.className = 'computer-player';
            playerDiv.id = `player-${i}`;
            
            playerDiv.innerHTML = `
                <div class="player-info">
                    <h3>${computerName}</h3>
                    <div class="card-count">
                        <span id="cardCount-${i}">${this.players[i].length}</span>
                        <span class="cards-text">Karten</span>
                    </div>
                </div>
                <div class="computer-cards" id="computerCards-${i}">
                    <!-- Computer cards will be added here -->
                </div>
            `;
            
            this.playersContainer.appendChild(playerDiv);
            
            // Store the computer name for later use
            if (!this.computerPlayerNames) {
                this.computerPlayerNames = {};
            }
            this.computerPlayerNames[i] = computerName;
        }
    }
    
    resetGame() {
        this.gameInProgress = false; // Stop any ongoing actions
        this.gameOverModal.classList.add('hidden');
        this.gameScreen.classList.add('hidden');
        this.startScreen.classList.remove('hidden');
        
        // Reset game state
        this.calledUno = [];
        this.gameDirection = 1;
        this.currentPlayerIndex = 0;
        this.computerPlayerNames = {}; // Reset computer names
        this.usedNames = []; // Reset used names
        
        // Reset button states
        this.startGameBtn.disabled = true;
        this.playerCountButtons.forEach(btn => btn.classList.remove('selected'));
        this.difficultyButtons.forEach(btn => btn.classList.remove('selected'));
    }
    
    updateUI() {
        this.updatePlayerCards();
        this.updateComputerCards();
        this.updateDiscardPile();
        this.updateDrawPile();
        this.updateCardCounts();
        this.updateColorDisplay();
        this.updateActivePlayer();
    }
    
    updatePlayerCards() {
        this.playerCardsContainer.innerHTML = '';
        this.players[0].forEach((card, index) => {
            const cardElement = this.createCardElement(card, true);
            cardElement.addEventListener('click', () => {
                if (this.currentPlayerIndex === 0 && this.canPlayCard(card)) {
                    this.playCard(0, index);
                }
            });
            
            // Add playable highlight
            if (this.currentPlayerIndex === 0 && this.canPlayCard(card)) {
                cardElement.classList.add('playable');
            }
            
            this.playerCardsContainer.appendChild(cardElement);
        });
    }
    
    updateComputerCards() {
        for (let i = 1; i < this.playerCount; i++) {
            const computerCardsContainer = document.getElementById(`computerCards-${i}`);
            if (computerCardsContainer) {
                computerCardsContainer.innerHTML = '';
                this.players[i].forEach(() => {
                    const cardElement = document.createElement('div');
                    cardElement.className = 'computer-card';
                    computerCardsContainer.appendChild(cardElement);
                });
            }
        }
    }
    
    updateDiscardPile() {
        const topCard = this.discardPile[this.discardPile.length - 1];
        this.discardPileElement.innerHTML = '';
        const cardElement = this.createCardElement(topCard, true);
        this.discardPileElement.appendChild(cardElement);
    }
    
    updateDrawPile() {
        this.drawPileElement.innerHTML = '';
        
        if (this.deck.length > 0) {
            // Show card back when cards are available
            const cardBack = document.createElement('div');
            cardBack.className = 'card-back';
            this.drawPileElement.appendChild(cardBack);
            
            // Enable draw button
            this.drawCardBtn.disabled = false;
            this.drawPileElement.style.cursor = 'pointer';
        } else {
            // Show empty state when no cards left
            const emptyPile = document.createElement('div');
            emptyPile.className = 'empty-pile';
            emptyPile.innerHTML = '<span>Leer</span>';
            this.drawPileElement.appendChild(emptyPile);
            
            // Disable draw button and pile
            this.drawCardBtn.disabled = true;
            this.drawPileElement.style.cursor = 'not-allowed';
        }
    }
    
    updateCardCounts() {
        // Update card counts for all computer players
        for (let i = 1; i < this.playerCount; i++) {
            const cardCountElement = document.getElementById(`cardCount-${i}`);
            if (cardCountElement) {
                cardCountElement.textContent = this.players[i].length;
            }
        }
    }
    
    updateActivePlayer() {
        // Remove active class from all players
        for (let i = 1; i < this.playerCount; i++) {
            const playerElement = document.getElementById(`player-${i}`);
            if (playerElement) {
                playerElement.classList.remove('active');
            }
        }
        
        // Add active class to current player (if computer)
        if (this.currentPlayerIndex > 0) {
            const activePlayerElement = document.getElementById(`player-${this.currentPlayerIndex}`);
            if (activePlayerElement) {
                activePlayerElement.classList.add('active');
            }
        }
    }
    
    updateColorDisplay() {
        // Remove all color classes
        this.colorDisplay.className = 'color-display';
        
        // Add current color class
        if (this.currentColor && this.currentColor !== 'wild') {
            this.colorDisplay.classList.add(this.currentColor);
        }
    }
    
    updateTurnDisplay() {
        if (this.currentPlayerIndex === 0) {
            this.currentTurnElement.textContent = this.t('game.yourTurn');
            this.currentTurnElement.style.background = 'rgba(76, 175, 80, 0.9)';
        } else {
            const computerName = this.computerPlayerNames && this.computerPlayerNames[this.currentPlayerIndex] 
                ? this.computerPlayerNames[this.currentPlayerIndex] 
                : `Computer ${this.currentPlayerIndex}`;
            this.currentTurnElement.textContent = this.t('game.computerTurn', computerName);
            this.currentTurnElement.style.background = 'rgba(244, 67, 54, 0.9)';
        }
    }
    
    updateUnoButton() {
        // Enable UNO button when human player has exactly 2 cards and hasn't called UNO yet
        this.callUnoBtn.disabled = !(this.players[0].length === 2 && !this.calledUno[0]);
    }
    
    createCardElement(card, showFace = true) {
        const cardElement = document.createElement('div');
        cardElement.className = `card ${card.color}`;
        
        if (showFace) {
            if (card.type === 'number') {
                cardElement.innerHTML = `<span class="card-value">${card.value}</span>`;
            } else if (card.type === 'action') {
                const actionText = {
                    'skip': 'STOP',
                    'reverse': '⟲',
                    'draw-two': '+2'
                };
                cardElement.innerHTML = `<span class="card-value">${actionText[card.value]}</span>`;
            } else if (card.type === 'wild') {
                const wildText = card.value === 'wild' ? 'WILD' : '+4';
                cardElement.innerHTML = `<span class="card-value">${wildText}</span>`;
            }
        }
        
        return cardElement;
    }
    
    canPlayCard(card) {
        // Wild cards can always be played
        if (card.type === 'wild') {
            return true;
        }
        
        // Regular cards must match color or value
        return card.color === this.currentColor || card.value === this.currentValue;
    }
    
    playCard(playerIndex, cardIndex) {
        const hand = this.players[playerIndex];
        const card = hand[cardIndex];
        
        // Track player stats
        if (playerIndex === 0) {
            this.currentGameStats.playerTurns++;
            if (card.type === 'action' || card.type === 'wild') {
                this.currentGameStats.specialCardsPlayed++;
            }
        }
        
        if (!this.canPlayCard(card)) {
            return false;
        }
        
        // Remove card from hand and add to discard pile
        hand.splice(cardIndex, 1);
        this.discardPile.push(card);
        
        // Add playing animation
        if (playerIndex === 0) {
            const cardElements = this.playerCardsContainer.children;
            if (cardElements[cardIndex]) {
                cardElements[cardIndex].classList.add('playing');
            }
        }
        
        // Handle card effects
        this.handleCardEffect(card);
        
        // Update current color and value
        if (card.type === 'wild') {
            if (playerIndex === 0) {
                this.showColorSelector();
                return true; // Color selector will handle turn switching
            } else {
                // Computer chooses color
                this.currentColor = this.chooseColorForComputer();
                this.showComputerColorChoice();
                // Continue to handle card effects below
            }
        } else {
            this.currentColor = card.color;
        }
        this.currentValue = card.value;
        
        // Check for win condition
        if (hand.length === 0) {
            this.endGame(playerIndex);
            return true;
        }
        
        // Check UNO call requirement
        if (hand.length === 1) {
            if (playerIndex === 0 && !this.calledUno[0]) {
                // Player forgot to call UNO - penalty
                this.penalizePlayer(0);
            } else if (playerIndex > 0 && !this.calledUno[playerIndex]) {
                // Computer calls UNO automatically
                this.callUno(playerIndex);
            }
        }
        
        // Update UI
        this.updateUI();
        this.updateUnoButton();
        
        // Switch turns (card effects handle their own turn logic)
        if (card.value === 'skip' || card.value === 'reverse' || 
            card.value === 'draw-two' || card.value === 'wild-draw-four' || 
            card.value === 'wild') {
            // Action cards and wild cards handle their own turn switching
            return true;
        } else {
            // Regular number cards
            this.switchTurns();
        }
        
        return true;
    }
    
    handleCardEffect(card) {
        switch (card.value) {
            case 'skip':
                // Skip next player's turn - switch twice to skip them
                this.switchTurns(); // Go to next player
                this.switchTurns(); // Skip that player
                break;
                
            case 'reverse':
                this.gameDirection *= -1;
                // In 2-player game, reverse acts like skip
                if (this.playerCount === 2) {
                    this.switchTurns(); // Go to next player
                    this.switchTurns(); // Skip that player (reverse effect)
                } else {
                    this.switchTurns(); // Just change direction
                }
                break;
                
            case 'draw-two':
                const drawTwoTarget = this.getNextPlayerIndex();
                this.drawCards(drawTwoTarget, 2);
                this.switchTurns(); // Move to next player after penalty
                break;
                
            case 'wild-draw-four':
                const drawFourTarget = this.getNextPlayerIndex();
                this.drawCards(drawFourTarget, 4);
                this.switchTurns(); // Move to next player after penalty
                break;
                
            case 'wild':
                // Regular wild card - just switch turns normally
                this.switchTurns();
                break;
        }
    }
    
    drawCard(playerIndex) {
        if (this.deck.length === 0) {
            this.reshuffleDeck();
        }
        
        // Track player stats
        if (playerIndex === 0) {
            this.currentGameStats.cardsDrawn++;
        }
        
        // Check if we still have no cards after reshuffling (shouldn't happen normally)
        if (this.deck.length === 0) {
            console.warn('No cards available to draw!');
            return;
        }
        
        const card = this.deck.pop();
        this.players[playerIndex].push(card);
        
        this.updateUI();
        this.updateUnoButton();
        
        // Reset UNO call status when drawing cards
        this.calledUno[playerIndex] = false;
        
        // After drawing, human player auto-ends turn, computer continues
        if (playerIndex === 0 && this.currentPlayerIndex === 0) {
            // Auto-end human turn after drawing
            setTimeout(() => {
                if (this.currentPlayerIndex === 0) { // Double-check we're still on human turn
                    this.switchTurns();
                }
            }, 1000);
        }
    }
    
    drawCards(playerIndex, count) {
        for (let i = 0; i < count; i++) {
            this.drawCard(playerIndex);
        }
    }
    
    reshuffleDeck() {
        // Keep top card of discard pile, shuffle the rest back into deck
        const topCard = this.discardPile.pop();
        this.deck = [...this.discardPile];
        this.discardPile = [topCard];
        this.shuffleDeck();
    }
    
    getNextPlayerIndex() {
        let nextIndex = this.currentPlayerIndex + this.gameDirection;
        if (nextIndex >= this.playerCount) {
            nextIndex = 0;
        } else if (nextIndex < 0) {
            nextIndex = this.playerCount - 1;
        }
        return nextIndex;
    }
    
    switchTurns() {
        if (!this.gameInProgress) {
            return; // Game ended, don't continue
        }
        
        this.currentPlayerIndex = this.getNextPlayerIndex();
        this.updateTurnDisplay();
        this.updateUI();
        
        if (this.currentPlayerIndex > 0) {
            // Computer's turn
            const delay = this.getComputerTurnDelay();
            setTimeout(() => {
                if (this.gameInProgress && this.currentPlayerIndex > 0) {
                    this.computerPlay();
                }
            }, delay);
        }
    }
    
    computerPlay() {
        // Safety check - make sure it's actually a computer's turn
        if (this.currentPlayerIndex === 0) {
            console.warn('computerPlay called but it\'s human player\'s turn!');
            return;
        }
        
        const playerIndex = this.currentPlayerIndex;
        const playableCards = this.players[playerIndex]
            .map((card, index) => ({ card, index }))
            .filter(({ card }) => this.canPlayCard(card));
        
        if (playableCards.length > 0) {
            const chosenCard = this.chooseCardForComputer(playableCards, playerIndex);
            this.playCard(playerIndex, chosenCard.index);
        } else {
            // Must draw a card
            this.drawCard(playerIndex);
            // Only switch turns if we're still at the same player (draw didn't trigger other effects)
            if (this.currentPlayerIndex === playerIndex) {
                this.switchTurns();
            }
        }
    }
    
    chooseCardForComputer(playableCards, playerIndex) {
        switch (this.difficulty) {
            case 'easy':
                return this.chooseCardEasy(playableCards, playerIndex);
            case 'medium':
                return this.chooseCardMedium(playableCards, playerIndex);
            case 'hard':
                return this.chooseCardHard(playableCards, playerIndex);
            default:
                return playableCards[0];
        }
    }
    
    chooseCardEasy(playableCards, playerIndex) {
        // Easy: Random selection, prefers regular cards over action cards
        const regularCards = playableCards.filter(({ card }) => card.type === 'number');
        const actionCards = playableCards.filter(({ card }) => card.type === 'action');
        const wildCards = playableCards.filter(({ card }) => card.type === 'wild');
        
        if (regularCards.length > 0 && Math.random() < 0.7) {
            return regularCards[Math.floor(Math.random() * regularCards.length)];
        } else if (actionCards.length > 0 && Math.random() < 0.6) {
            return actionCards[Math.floor(Math.random() * actionCards.length)];
        } else if (wildCards.length > 0) {
            return wildCards[Math.floor(Math.random() * wildCards.length)];
        }
        
        return playableCards[Math.floor(Math.random() * playableCards.length)];
    }
    
    chooseCardMedium(playableCards, playerIndex) {
        // Medium: Balanced strategy, considers card effects
        const { actionCards, wildCards, regularCards } = this.categorizeCards(playableCards);
        
        // Check if human player has few cards
        const humanPlayerLowCards = this.players[0].length <= 3;
        
        // Prefer action cards when advantageous
        if (actionCards.length > 0 && humanPlayerLowCards) {
            const preferredActions = actionCards.filter(({ card }) => 
                card.value === 'draw-two' || card.value === 'skip'
            );
            if (preferredActions.length > 0) {
                return preferredActions[0];
            }
        }
        
        // Use wild cards strategically
        if (wildCards.length > 0 && this.players[playerIndex].length <= 2) {
            return wildCards[0];
        }
        
        // Otherwise prefer regular cards
        if (regularCards.length > 0) {
            return regularCards[0];
        }
        
        return playableCards[0];
    }
    
    chooseCardHard(playableCards, playerIndex) {
        // Hard: Advanced strategy, considers multiple factors
        const { actionCards, wildCards, regularCards } = this.categorizeCards(playableCards);
        
        // Aggressive play when human player has few cards
        if (this.players[0].length <= 2) {
            const drawCards = playableCards.filter(({ card }) => 
                card.value === 'draw-two' || card.value === 'wild-draw-four'
            );
            if (drawCards.length > 0) {
                // Prefer wild-draw-four over draw-two
                const wildDrawFour = drawCards.find(({ card }) => card.value === 'wild-draw-four');
                return wildDrawFour || drawCards[0];
            }
            
            // Skip player's turn
            const skipCards = actionCards.filter(({ card }) => card.value === 'skip');
            if (skipCards.length > 0) {
                return skipCards[0];
            }
        }
        
        // Color management strategy
        const colorCounts = this.countColorsByFrequency(playerIndex);
        const bestColorCards = regularCards.filter(({ card }) => 
            card.color === colorCounts[0]?.color
        );
        
        if (bestColorCards.length > 0) {
            return bestColorCards[0];
        }
        
        // Save wild cards for last resort unless hand is small
        if (this.players[playerIndex].length <= 3 && wildCards.length > 0) {
            return wildCards[0];
        }
        
        // Default to first available card
        return regularCards[0] || actionCards[0] || wildCards[0] || playableCards[0];
    }
    
    categorizeCards(playableCards) {
        return {
            regularCards: playableCards.filter(({ card }) => card.type === 'number'),
            actionCards: playableCards.filter(({ card }) => card.type === 'action'),
            wildCards: playableCards.filter(({ card }) => card.type === 'wild')
        };
    }
    
    countColorsByFrequency(playerIndex) {
        const colorCounts = {};
        this.players[playerIndex].forEach(card => {
            if (card.color !== 'wild') {
                colorCounts[card.color] = (colorCounts[card.color] || 0) + 1;
            }
        });
        
        return Object.entries(colorCounts)
            .map(([color, count]) => ({ color, count }))
            .sort((a, b) => b.count - a.count);
    }
    
    chooseColorForComputer() {
        const colorCounts = this.countColorsByFrequency();
        return colorCounts.length > 0 ? colorCounts[0].color : this.colors[Math.floor(Math.random() * this.colors.length)];
    }
    
    showColorSelector() {
        this.colorModal.classList.remove('hidden');
    }
    
    selectColor(color) {
        this.currentColor = color;
        this.colorModal.classList.add('hidden');
        this.updateUI();
        this.switchTurns();
    }
    
    showComputerColorChoice() {
        // Show feedback about computer's color choice
        const colorNames = {
            'red': 'Rot',
            'blue': 'Blau', 
            'green': 'Grün',
            'yellow': 'Gelb'
        };
        
        const colorName = colorNames[this.currentColor];
        const originalText = this.currentTurnElement.textContent;
        
        this.currentTurnElement.textContent = `Computer wählt: ${colorName}`;
        this.currentTurnElement.style.background = 'rgba(255, 193, 7, 0.9)';
        
        setTimeout(() => {
            this.updateTurnDisplay();
        }, 2000);
    }
    
    callUno(playerIndex) {
        this.calledUno[playerIndex] = true;
        
        // Track UNO call for player
        if (playerIndex === 0) {
            this.currentGameStats.unoCalledCorrectly = true;
        }
        
        if (playerIndex === 0) {
            this.callUnoBtn.disabled = true;
            
            // Show feedback
            this.currentTurnElement.textContent = this.t('game.unoCalled');
            setTimeout(() => {
                this.updateTurnDisplay();
            }, 1500);
        } else {
            // Show computer UNO call
            const computerName = this.computerPlayerNames && this.computerPlayerNames[playerIndex] 
                ? this.computerPlayerNames[playerIndex] 
                : `Computer ${playerIndex}`;
            this.currentTurnElement.textContent = this.t('game.computerCallsUno', computerName);
            setTimeout(() => {
                this.updateTurnDisplay();
            }, 1500);
        }
    }
    
    penalizePlayer(playerIndex) {
        // Draw 2 penalty cards for not calling UNO
        this.drawCards(playerIndex, 2);
        
        // Track UNO forgotten for player
        if (playerIndex === 0) {
            this.currentGameStats.unoForgotten = true;
        }
        
        if (playerIndex === 0) {
            this.currentTurnElement.textContent = 'UNO vergessen! +2 Karten';
            setTimeout(() => {
                this.updateTurnDisplay();
            }, 2000);
        }
    }
    
    endGame(winnerIndex) {
        this.gameInProgress = false; // Stop all game actions
        
        const gameResult = document.getElementById('gameResult');
        const gameResultText = document.getElementById('gameResultText');
        
        if (winnerIndex === 0) {
            gameResult.textContent = this.t('game.won');
            gameResult.style.color = '#4caf50';
            gameResultText.textContent = this.t('game.wonText');
        } else {
            gameResult.textContent = this.t('game.lost');
            gameResult.style.color = '#f44336';
            const computerName = this.computerPlayerNames && this.computerPlayerNames[winnerIndex] 
                ? this.computerPlayerNames[winnerIndex] 
                : `Computer ${winnerIndex}`;
            gameResultText.textContent = this.t('game.lostText', computerName);
        }
        
        // Analyze game for skill system
        this.analyzeGamePerformance(winnerIndex);
        
        this.gameOverModal.classList.remove('hidden');
    }

    // ===== SKILL ANALYSIS SYSTEM =====
    
    loadPlayerStats() {
        const defaultStats = {
            level: 1,
            xp: 0,
            totalGames: 0,
            wins: 0,
            losses: 0,
            totalCardsLeft: 0,
            totalTurns: 0,
            bestWinStreak: 0,
            currentWinStreak: 0,
            unoCallsSuccessful: 0,
            unoCallsMissed: 0,
            gamesWonByDifficulty: { easy: 0, medium: 0, hard: 0 },
            achievements: [],
            unlockedRewards: []
        };
        
        const savedStats = localStorage.getItem('unoPlayerStats');
        if (savedStats) {
            try {
                return { ...defaultStats, ...JSON.parse(savedStats) };
            } catch (e) {
                console.warn('Failed to load player stats, using defaults');
                return defaultStats;
            }
        }
        return defaultStats;
    }

    savePlayerStats() {
        localStorage.setItem('unoPlayerStats', JSON.stringify(this.playerStats));
    }

    initializeGameStats() {
        return {
            startTime: Date.now(),
            playerTurns: 0,
            cardsDrawn: 0,
            unoCalledCorrectly: false,
            unoForgotten: false,
            specialCardsPlayed: 0,
            difficulty: this.difficulty,
            opponents: this.playerCount - 1
        };
    }

    analyzeGamePerformance(winnerIndex) {
        // Finalize current game stats
        this.currentGameStats.endTime = Date.now();
        this.currentGameStats.duration = this.currentGameStats.endTime - this.currentGameStats.startTime;
        this.currentGameStats.cardsLeftInHand = this.players[0].length; // Human player's cards
        
        const isWin = winnerIndex === 0;
        
        // Update basic stats
        this.playerStats.totalGames++;
        if (isWin) {
            this.playerStats.wins++;
            this.playerStats.currentWinStreak++;
            this.playerStats.gamesWonByDifficulty[this.difficulty]++;
            if (this.playerStats.currentWinStreak > this.playerStats.bestWinStreak) {
                this.playerStats.bestWinStreak = this.playerStats.currentWinStreak;
            }
        } else {
            this.playerStats.losses++;
            this.playerStats.currentWinStreak = 0;
        }
        
        // Update cumulative stats
        this.playerStats.totalCardsLeft += this.currentGameStats.cardsLeftInHand;
        this.playerStats.totalTurns += this.currentGameStats.playerTurns;
        
        // UNO call tracking
        if (this.currentGameStats.unoCalledCorrectly) {
            this.playerStats.unoCallsSuccessful++;
        }
        if (this.currentGameStats.unoForgotten) {
            this.playerStats.unoCallsMissed++;
        }
        
        // Calculate XP gained
        const xpGained = this.calculateXPGain(isWin);
        const oldLevel = this.playerStats.level;
        this.playerStats.xp += xpGained;
        
        // Check for level up
        const newLevel = this.calculateLevel(this.playerStats.xp);
        if (newLevel > oldLevel) {
            this.playerStats.level = newLevel;
            this.handleLevelUp(oldLevel, newLevel);
        }
        
        // Check for achievements
        this.checkAchievements();
        
        // Save updated stats
        this.savePlayerStats();
        
        // Update UI
        this.updateSkillDisplay();
    }

    calculateXPGain(isWin) {
        let baseXP = isWin ? 100 : 25;
        
        // Bonus for difficulty
        const difficultyMultiplier = { easy: 1.0, medium: 1.5, hard: 2.0 };
        baseXP *= difficultyMultiplier[this.difficulty];
        
        // Bonus for fewer cards left
        if (isWin) {
            const cardsLeftBonus = Math.max(0, 10 - this.currentGameStats.cardsLeftInHand) * 5;
            baseXP += cardsLeftBonus;
        }
        
        // Bonus for UNO call
        if (this.currentGameStats.unoCalledCorrectly) {
            baseXP += 20;
        }
        
        // Penalty for UNO forgotten
        if (this.currentGameStats.unoForgotten) {
            baseXP -= 10;
        }
        
        // Bonus for winning streak
        if (isWin && this.playerStats.currentWinStreak >= 3) {
            baseXP += Math.min(50, this.playerStats.currentWinStreak * 5);
        }
        
        return Math.max(10, Math.floor(baseXP)); // Minimum 10 XP
    }

    calculateLevel(xp) {
        // Progressive XP requirements: Level n requires (n-1) * 500 + 1000 XP
        let level = 1;
        let totalXPRequired = 0;
        
        while (true) {
            const xpForNextLevel = level * 500 + 500; // Level 1->2: 1000, 2->3: 1500, etc.
            if (xp < totalXPRequired + xpForNextLevel) {
                break;
            }
            totalXPRequired += xpForNextLevel;
            level++;
        }
        
        return level;
    }

    getXPForCurrentLevel() {
        const currentLevel = this.playerStats.level;
        let totalXPForPreviousLevels = 0;
        
        for (let i = 1; i < currentLevel; i++) {
            totalXPForPreviousLevels += i * 500 + 500;
        }
        
        return this.playerStats.xp - totalXPForPreviousLevels;
    }

    getXPRequiredForNextLevel() {
        return this.playerStats.level * 500 + 500;
    }

    getSkillLevelName(level) {
        if (level >= 25) return this.t('skill.god');
        if (level >= 20) return this.t('skill.legend');
        if (level >= 15) return this.t('skill.master');
        if (level >= 12) return this.t('skill.expert');
        if (level >= 8) return this.t('skill.skilled');
        if (level >= 5) return this.t('skill.amateur');
        if (level >= 3) return this.t('skill.beginner');
        return this.t('skill.noob');
    }

    handleLevelUp(oldLevel, newLevel) {
        // Show level up notification
        setTimeout(() => {
            this.showLevelUpNotification(oldLevel, newLevel);
        }, 2000); // Show after game over modal
        
        // Check for rewards at new level
        const reward = this.getRewardForLevel(newLevel);
        if (reward && !this.playerStats.unlockedRewards.includes(reward.id)) {
            this.playerStats.unlockedRewards.push(reward.id);
            setTimeout(() => {
                this.showRewardNotification(reward);
            }, 4000);
        }
    }

    getRewardForLevel(level) {
        const rewards = {
            3: { id: 'theme_sunset_unlock', type: 'theme', name: 'Sunset Theme' },
            5: { id: 'title_amateur', type: 'title', name: 'Amateur' },
            8: { id: 'theme_forest_unlock', type: 'theme', name: 'Forest Theme' },
            10: { id: 'title_skilled', type: 'title', name: 'Skilled Player' },
            12: { id: 'theme_space_unlock', type: 'theme', name: 'Space Theme' },
            15: { id: 'title_master', type: 'title', name: 'UNO Master' },
            20: { id: 'theme_legendary', type: 'theme', name: 'Legendary Theme' },
            25: { id: 'title_god', type: 'title', name: 'UNO God' }
        };
        
        return rewards[level] || null;
    }

    checkAchievements() {
        const achievements = [];
        
        // Win streak achievements
        if (this.playerStats.currentWinStreak >= 5 && !this.playerStats.achievements.includes('win_streak_5')) {
            achievements.push({ id: 'win_streak_5', name: 'Win Streak Master', description: 'Win 5 games in a row' });
        }
        
        // Game count achievements
        if (this.playerStats.totalGames >= 10 && !this.playerStats.achievements.includes('games_10')) {
            achievements.push({ id: 'games_10', name: 'Dedicated Player', description: 'Play 10 games' });
        }
        
        if (this.playerStats.totalGames >= 50 && !this.playerStats.achievements.includes('games_50')) {
            achievements.push({ id: 'games_50', name: 'UNO Enthusiast', description: 'Play 50 games' });
        }
        
        // Difficulty achievements
        if (this.playerStats.gamesWonByDifficulty.hard >= 5 && !this.playerStats.achievements.includes('hard_winner')) {
            achievements.push({ id: 'hard_winner', name: 'Hard Mode Conqueror', description: 'Win 5 games on hard difficulty' });
        }
        
        // UNO call achievements
        if (this.playerStats.unoCallsSuccessful >= 10 && !this.playerStats.achievements.includes('uno_master')) {
            achievements.push({ id: 'uno_master', name: 'UNO Call Master', description: 'Successfully call UNO 10 times' });
        }
        
        // Add new achievements
        achievements.forEach(achievement => {
            if (!this.playerStats.achievements.includes(achievement.id)) {
                this.playerStats.achievements.push(achievement.id);
                setTimeout(() => {
                    this.showAchievementNotification(achievement);
                }, Math.random() * 3000 + 5000);
            }
        });
    }

    showLevelUpNotification(oldLevel, newLevel) {
        const notification = document.createElement('div');
        notification.className = 'skill-notification level-up';
        notification.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #4caf50, #45a049);
            color: white;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 8px 25px rgba(0,0,0,0.3);
            z-index: 10001;
            font-family: 'Poppins', sans-serif;
            text-align: center;
            min-width: 300px;
            animation: levelUpAnimation 0.5s ease-out;
        `;
        
        const levelName = this.getSkillLevelName(newLevel);
        notification.innerHTML = `
            <div style="font-size: 24px; margin-bottom: 10px;">🎉</div>
            <div style="font-size: 18px; font-weight: bold; margin-bottom: 5px;">${this.t('skill.levelUp')}</div>
            <div style="font-size: 16px; margin-bottom: 10px;">${this.t('skill.newLevel', newLevel)}</div>
            <div style="font-size: 14px; opacity: 0.9;">${levelName}</div>
        `;
        
        // Add animation keyframes if not already added
        if (!document.querySelector('#levelUpKeyframes')) {
            const style = document.createElement('style');
            style.id = 'levelUpKeyframes';
            style.textContent = `
                @keyframes levelUpAnimation {
                    0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
                    50% { transform: translate(-50%, -50%) scale(1.1); }
                    100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
                }
            `;
            document.head.appendChild(style);
        }
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translate(-50%, -50%) scale(0.8)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    showRewardNotification(reward) {
        const notification = document.createElement('div');
        notification.className = 'skill-notification reward';
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #ff9800, #f57c00);
            color: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            z-index: 10000;
            font-family: 'Poppins', sans-serif;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 300px;
        `;
        
        notification.innerHTML = `
            <div style="font-size: 16px; font-weight: bold; margin-bottom: 5px;">🏆 ${this.t('skill.reward', reward.name)}</div>
            <div style="font-size: 14px; opacity: 0.9;">${this.t(`reward.${reward.type}`)}</div>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 4000);
    }

    showAchievementNotification(achievement) {
        const notification = document.createElement('div');
        notification.className = 'skill-notification achievement';
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            left: 20px;
            background: linear-gradient(135deg, #9c27b0, #7b1fa2);
            color: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            z-index: 10000;
            font-family: 'Poppins', sans-serif;
            transform: translateX(-100%);
            transition: transform 0.3s ease;
            max-width: 300px;
        `;
        
        notification.innerHTML = `
            <div style="font-size: 16px; font-weight: bold; margin-bottom: 5px;">🏅 ${achievement.name}</div>
            <div style="font-size: 14px; opacity: 0.9;">${achievement.description}</div>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(-100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 5000);
    }

    toggleSkillDisplay() {
        const isCollapsed = this.skillContent.classList.toggle('collapsed');
        this.skillToggle.classList.toggle('collapsed', isCollapsed);
        this.skillToggle.textContent = isCollapsed ? '▶' : '▼';
    }

    updateSkillDisplay() {
        if (!this.skillDisplay) return;
        
        const stats = this.playerStats;
        const level = stats.level;
        const levelName = this.getSkillLevelName(level);
        const winRate = stats.totalGames > 0 ? Math.round((stats.wins / stats.totalGames) * 100) : 0;
        
        // Update level display
        this.skillLevelText.textContent = this.t('skill.level', level);
        this.skillLevelName.textContent = levelName;
        
        // Update XP display
        const currentXP = this.getXPForCurrentLevel();
        const requiredXP = this.getXPRequiredForNextLevel();
        const xpProgress = (currentXP / requiredXP) * 100;
        
        this.skillXP.textContent = this.t('skill.xp', currentXP, requiredXP);
        this.xpProgress.style.width = `${Math.min(xpProgress, 100)}%`;
        
        // Update stats
        this.skillWins.textContent = stats.wins;
        this.skillLosses.textContent = stats.losses;
        this.skillWinRate.textContent = `${winRate}%`;
        
        // Update skill level name color based on level
        this.updateSkillLevelColor(level);
    }

    updateSkillLevelColor(level) {
        const colors = {
            1: '#9e9e9e',    // Noob - gray
            3: '#8bc34a',    // Beginner - light green
            5: '#4caf50',    // Amateur - green
            8: '#2196f3',    // Skilled - blue
            12: '#9c27b0',   // Expert - purple
            15: '#ff9800',   // Master - orange
            20: '#ff5722',   // Legend - red
            25: '#ffd700'    // God - gold
        };
        
        let color = '#9e9e9e'; // default
        for (let levelThreshold of Object.keys(colors).reverse()) {
            if (level >= parseInt(levelThreshold)) {
                color = colors[levelThreshold];
                break;
            }
        }
        
        this.skillLevelName.style.background = color;
        this.skillLevelName.style.color = level >= 20 ? '#000' : '#fff';
    }

    // ===== COMPUTER SPEED SETTINGS =====
    
    getComputerTurnDelay() {
        const speedDelays = {
            'instant': 100,    // Almost instant (just enough for visual feedback)
            'fast': 800,       // Fast
            'normal': 1500,    // Normal (original speed)
            'slow': 3000       // Slow for beginners
        };
        return speedDelays[this.computerSpeed] || speedDelays['normal'];
    }

    changeComputerSpeed(speed) {
        // Update active speed option in UI
        this.speedOptions.forEach(option => {
            option.classList.remove('active');
            if (option.dataset.speed === speed) {
                option.classList.add('active');
            }
        });

        // Save the setting
        this.computerSpeed = speed;
        localStorage.setItem('unoComputerSpeed', speed);
    }

    initializeComputerSpeed() {
        // Set the active speed option based on saved setting
        this.speedOptions.forEach(option => {
            option.classList.remove('active');
            if (option.dataset.speed === this.computerSpeed) {
                option.classList.add('active');
            }
        });
    }
    
    showRules() {
        this.rulesModal.classList.remove('hidden');
    }
    
    hideRules() {
        this.rulesModal.classList.add('hidden');
    }
    
    // Language System
    initializeLanguage() {
        // Automatische Spracherkennung basierend auf der Browsersprache
        if (!localStorage.getItem('unoLanguage')) {
            const browserLanguage = this.detectBrowserLanguage();
            this.currentLanguage = browserLanguage;
            localStorage.setItem('unoLanguage', browserLanguage);
            
            // Zeige Benachrichtigung über automatisch erkannte Sprache
            this.showAutoLanguageNotification(browserLanguage);
        }
        
        this.updateLanguageDisplay();
        this.updateAllTexts();
    }
    
    detectBrowserLanguage() {
        // Browsersprache abrufen
        const browserLang = navigator.language || navigator.userLanguage || 'de';
        const primaryLang = browserLang.split('-')[0].toLowerCase();
        
        // Verfügbare Sprachen im Spiel
        const availableLanguages = ['de', 'en', 'es', 'fr', 'pt', 'ja', 'zh', 'hu', 'ru'];
        
        // Wenn die Primärsprache verfügbar ist, verwende sie
        if (availableLanguages.includes(primaryLang)) {
            return primaryLang;
        }
        
        // Versuche, eine ähnliche Sprache zu finden (z.B. 'en-US' -> 'en', 'pt-BR' -> 'pt')
        const similarLang = availableLanguages.find(lang => 
            browserLang.toLowerCase().startsWith(lang)
        );
        
        if (similarLang) {
            return similarLang;
        }
        
        // Fallback auf Deutsch
        return 'de';
    }
    
    resetToAutoLanguage() {
        const autoLanguage = this.detectBrowserLanguage();
        this.currentLanguage = autoLanguage;
        localStorage.removeItem('unoLanguage'); // Entferne den gespeicherten Wert, damit Auto-Modus aktiv bleibt
        this.updateLanguageDisplay();
        this.updateAllTexts();
        
        // Wenn ein Spiel läuft, regeneriere die Computer-Namen in der neuen Sprache
        if (this.gameInProgress && this.computerPlayerNames) {
            this.regenerateComputerNames();
        }
        
        // Zeige Benachrichtigung
        this.showLanguageChangeNotification('auto');
    }
    
    switchLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('unoLanguage', lang);
        this.updateLanguageDisplay();
        this.updateAllTexts();
        
        // Wenn ein Spiel läuft, regeneriere die Computer-Namen in der neuen Sprache
        if (this.gameInProgress && this.computerPlayerNames) {
            this.regenerateComputerNames();
        }
        
        // Update skill display with new language
        this.updateSkillDisplay();
        
        // Zeige eine Benachrichtigung, dass die Sprache geändert wurde
        this.showLanguageChangeNotification(lang);
    }
    
    showLanguageChangeNotification(lang) {
        // Erstelle eine temporäre Benachrichtigung
        const notification = document.createElement('div');
        notification.className = 'language-notification';
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #4CAF50;
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 10000;
            font-family: 'Poppins', sans-serif;
            font-size: 14px;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        
        const languageNames = {
            'de': 'Deutsch',
            'en': 'English',
            'es': 'Español',
            'fr': 'Français',
            'pt': 'Português',
            'ja': '日本語',
            'zh': '中文',
            'hu': 'Magyar',
            'ru': 'Русский'
        };
        
        if (lang === 'auto') {
            const autoLanguage = this.detectBrowserLanguage();
            notification.textContent = `Sprache auf Auto gesetzt: ${languageNames[autoLanguage] || autoLanguage}`;
        } else {
            notification.textContent = `Sprache geändert zu: ${languageNames[lang] || lang}`;
        }
        document.body.appendChild(notification);
        
        // Animation einblenden
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Nach 3 Sekunden ausblenden
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
    
    showAutoLanguageNotification(detectedLanguage) {
        // Erstelle eine temporäre Benachrichtigung für automatisch erkannte Sprache
        const notification = document.createElement('div');
        notification.className = 'language-notification auto-detected';
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #2196F3;
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 10000;
            font-family: 'Poppins', sans-serif;
            font-size: 14px;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        
        const languageNames = {
            'de': 'Deutsch',
            'en': 'English',
            'es': 'Español',
            'fr': 'Français',
            'pt': 'Português',
            'ja': '日本語',
            'zh': '中文',
            'hu': 'Magyar',
            'ru': 'Русский'
        };
        
        notification.textContent = `🌐 Sprache automatisch erkannt: ${languageNames[detectedLanguage] || detectedLanguage}`;
        document.body.appendChild(notification);
        
        // Animation einblenden
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Nach 4 Sekunden ausblenden
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 4000);
    }
    
    regenerateComputerNames() {
        // Reset verwendet Namen und generiere neue Namen für alle Computer
        this.usedNames = [];
        for (let i = 1; i < this.playerCount; i++) {
            const newName = this.getRandomComputerName();
            this.computerPlayerNames[i] = newName;
            
            // Update UI
            const playerElement = document.getElementById(`player-${i}`);
            if (playerElement) {
                const nameElement = playerElement.querySelector('.player-info h3');
                if (nameElement) {
                    nameElement.textContent = newName;
                }
            }
        }
        
        // Update turn display with new names
        this.updateTurnDisplay();
    }
    
    toggleLanguageMenu() {
        this.languageMenu.classList.toggle('hidden');
        this.languageToggle.classList.toggle('open');
    }
    
    hideLanguageMenu() {
        this.languageMenu.classList.add('hidden');
        this.languageToggle.classList.remove('open');
    }
    
    updateLanguageDisplay() {
        // Update current flag in toggle button
        const languageFlags = {
            'de': '🇩🇪',
            'en': '🇬🇧', 
            'es': '🇪🇸',
            'fr': '🇫🇷',
            'pt': '🇧🇷',
            'ja': '🇯🇵',
            'zh': '🇨🇳',
            'hu': '🇭🇺',
            'ru': '🇷🇺'
        };
        
        this.currentFlag.textContent = languageFlags[this.currentLanguage] || '🇩🇪';
        
        // Update active state in dropdown
        this.languageOptions.forEach(option => {
            if (option.dataset.lang === 'auto') {
                // Auto-Option ist aktiv, wenn keine Sprache im localStorage gespeichert ist
                const isAutoActive = !localStorage.getItem('unoLanguage');
                option.classList.toggle('active', isAutoActive);
            } else {
                option.classList.toggle('active', option.dataset.lang === this.currentLanguage);
            }
        });
    }
    
    t(key, ...args) {
        const translation = translations[this.currentLanguage]?.[key] || translations['de'][key] || key;
        return args.length > 0 ? this.formatString(translation, ...args) : translation;
    }
    
    formatString(str, ...args) {
        return str.replace(/\{(\d+)\}/g, (match, index) => args[index] || match);
    }
    
    updateAllTexts() {
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (key === 'settings.version') {
                // Special handling for version text
                const version = element.getAttribute('data-version') || APP_VERSION;
                element.textContent = this.t(key, version);
            } else {
                element.textContent = this.t(key);
            }
        });
        
        // Update dynamic texts if game is running
        if (this.gameInProgress) {
            this.updateTurnDisplay();
        }
    }
    
    // Settings System
    showSettings() {
        this.settingsModal.classList.remove('hidden');
    }
    
    hideSettings() {
        this.settingsModal.classList.add('hidden');
    }
    
    initializeBackground() {
        this.applyBackground(this.currentBackground);
        this.updateBackgroundOptions();
    }
    
    changeBackground(bgName) {
        this.currentBackground = bgName;
        localStorage.setItem('unoBackground', bgName);
        this.applyBackground(bgName);
        this.updateBackgroundOptions();
    }
    
    applyBackground(bgName) {
        // Remove all background classes
        document.body.className = document.body.className.replace(/bg-\w+/g, '');
        // Add new background class
        document.body.classList.add(`bg-${bgName}`);
    }
    
    updateBackgroundOptions() {
        this.backgroundOptions.forEach(option => {
            option.classList.toggle('active', option.dataset.bg === this.currentBackground);
        });
    }
}

// Initialize game when page loads
document.addEventListener('DOMContentLoaded', () => {
    new UnoGame();
});
