import type { Page } from "../interface/gameInterface.js"

export const GameLoby: Page = {
	render() {
		return `
			<!-- Modes de jeu -->
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-8xl mx-64 flex-1">

				<!-- Mode Local -->
				<button id="local-mode" class="relative group w-full backdrop-blur-2xs border-1 border-gray-50 p-6 transition-all duration-300 hover:bg-gray-700 text-left">
					<div class="text-center mt-12">
						<div data-i18n="modeTitleLocal" class="relative inline-block mb-8
								relative z-10 text-9xl text-transparent bg-clip-text
								bg-gradient-to-r from-red-500 via-blue-500 to-green-500
								bg-[length:300%_100%] bg-[position:0%_50%]">
							Local
						</div>
						<p data-i18n="localModeDesc" class="text-gray-400 mb-12 text-3xl">
							Jouez à deux sur le même ordinateur. 
							Parfait pour défier un ami assis à côté de vous !
						</p>
					</div>
					<div class="space-y-2 mb-12">
						<div class="flex justify-between text-3xl">
							<span data-i18n="players" class="text-gray-300">Joueurs :</span>
							<span data-i18n="twoLocal" class="font-semibold text-white">2 locaux</span>
						</div>
						<div class="flex justify-between text-3xl">
							<span data-i18n="controls" class="text-gray-300">Contrôles :</span>
							<span data-i18n="wsVsArrows" class="font-semibold text-white">W/S vs ↑/↓</span>
						</div>
						<div class="flex justify-between text-3xl">
							<span data-i18n="difficulty" class="text-gray-300">Difficulté :</span>
							<span data-i18n="easy" class="font-semibold text-green-600">Facile</span>
						</div>
					</div>

					<!-- Overlay text -->
					<div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div class="absolute inset-0 bg-gray-700 opacity-30"></div>
            <span data-i18n="clickToJoin" class="relative text-white text-3xl font-bold">Click to Join!</span>
          </div>
				</button>


				<!-- Mode Online -->
				<button id="online-mode" class="relative group w-full backdrop-blur-2xs border-1 border-gray-50 p-6 transition-all duration-300 hover:bg-gray-700 text-left">
					<div class="text-center mt-12">
						<div id="mode-online-title" data-i18n="modeTitleOnline" class="relative inline-block
								relative z-10 text-9xl text-transparent bg-clip-text mb-8
								bg-gradient-to-r from-red-500 via-blue-500 to-green-500
								bg-[length:300%_100%] bg-[position:50%_50%]">
							En ligne
						</div>
						<p data-i18n="onlineModeDesc" class="text-gray-400 mb-6 text-3xl z-10">
							Affrontez des joueurs du monde entier en temps réel.
							Système de matchmaking automatique !
						</p>
					</div>
					<div class="space-y-2 mb-12 z-10">
						<div class="flex justify-between text-3xl">
							<span data-i18n="players" class="text-gray-300">Joueurs :</span>
							<span data-i18n="twoOnline" class="font-semibold text-white">2 en ligne</span>
						</div>
						<div class="flex justify-between text-3xl">
							<span data-i18n="latency" class="text-gray-300">Latence :</span>
							<span data-i18n="lessThan50ms" class="font-semibold text-green-600">< 50ms</span>
						</div>
						<div class="flex justify-between text-3xl">
							<span data-i18n="ranking" class="text-gray-300">Classement :</span>
							<span data-i18n="active" class="font-semibold text-purple-600">Actif</span>
						</div>
					</div>

					<!-- Overlay text -->
					<div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div class="absolute inset-0 bg-gray-700 opacity-30"></div>
            <span data-i18n="clickToJoin" class="relative text-white text-3xl font-bold">Click to Join!</span>
          </div>
				</button>

				<!-- Mode Tournoi -->
				<button id="tournament-mode" class="relative group w-full backdrop-blur-2xs border-1 border-gray-50 p-6 transition-all duration-300 hover:bg-gray-700 text-left">
					<div class="text-center mt-12">
						<div id="mode-tournament-title" data-i18n="modeTitleTournament" class="relative inline-block
								relative z-10 text-9xl text-transparent bg-clip-text mb-8
								bg-gradient-to-r from-red-500 via-blue-500 to-green-500
								bg-[length:300%_100%] bg-[position:100%_50%]">
							Tournoi
						</div>
						<p data-i18n="tournamentModeDesc" class="text-gray-400 mb-6 text-3xl">
							Participez à des tournois avec élimination directe. Montez dans le classement mondial !
						</p>
					</div>
					<div class="space-y-2 mb-12">
					<div class="flex justify-between text-3xl">
						<span data-i18n="format" class="text-gray-300">Format :</span>
						<span data-i18n="directElimination" class="font-semibold text-white">Élimination directe</span>
						</div>
					<div class="flex justify-between text-3xl">
						<span data-i18n="participants" class="text-gray-300">Participants :</span>
						<span data-i18n="eightToSixteenPlayers" class="font-semibold text-white">8-16 joueurs</span>
					</div>
					<div class="flex justify-between text-3xl">
						<span data-i18n="rewards" class="text-gray-300">Récompenses :</span>
						<span data-i18n="pointsBadges" class="font-semibold text-yellow-600">Points & Badges</span>
					</div>
					</div>

					<!-- Overlay text -->
					<div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div class="absolute inset-0 bg-gray-700 opacity-30"></div>
            <span data-i18n="clickToJoin" class="relative text-white text-3xl font-bold">Click to Join!</span>
          </div>
				</button>

			</div>

				
		`;
	},

	mount(root: HTMLElement): void {
		// Mode Local
		const localBtn = root.querySelector('#local-mode') as HTMLButtonElement;
		if (localBtn) {
			localBtn.addEventListener('click', () => {
				window.location.hash = '/game';
			});
		}

		// Mode Online
		const onlineBtn = root.querySelector('#online-mode') as HTMLButtonElement;
		if (onlineBtn) {
			onlineBtn.addEventListener('click', () => {
				window.location.hash = '/gameRoom';
			});
		}


		// Mode Tournoi
		const tournamentBtn = root.querySelector('#tournament-mode') as HTMLButtonElement;
		if (tournamentBtn) {
			tournamentBtn.addEventListener('click', () => {
				window.location.hash = '/tournamentRoom';
			});
		}
	}
};
