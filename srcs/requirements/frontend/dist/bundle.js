"use strict";(()=>{var X=function(){let t=document.getElementById("preview-canvas");if(!t)return;let e=t.getContext("2d");if(!e)return;let a=2.7,s=500,i=300;t.width=s*a,t.height=i*a;let n={p1:{x:10,y:125,width:10,height:50,vel_y:0,score:3},p2:{x:480,y:125,width:10,height:50,vel_y:0,score:2},ball:{x:250,y:150,width:10,height:10,vel_x:2,vel_y:1.5}},l,d=()=>{n.ball.x+=n.ball.vel_x,n.ball.y+=n.ball.vel_y,(n.ball.y<=0||n.ball.y+n.ball.height>=i)&&(n.ball.vel_y*=-1),(n.ball.x<=n.p1.x+n.p1.width&&n.ball.y>=n.p1.y&&n.ball.y<=n.p1.y+n.p1.height||n.ball.x+n.ball.width>=n.p2.x&&n.ball.y>=n.p2.y&&n.ball.y<=n.p2.y+n.p2.height)&&(n.ball.vel_x*=-1),(n.ball.x<0||n.ball.x>s)&&(n.ball.x=s/2,n.ball.y=i/2,n.ball.vel_x*=-1),Math.random()<.02&&(n.p1.vel_y=(Math.random()-.5)*4,n.p2.vel_y=(Math.random()-.5)*4),n.p1.y+=n.p1.vel_y,n.p2.y+=n.p2.vel_y,n.p1.y=Math.max(0,Math.min(i-n.p1.height,n.p1.y)),n.p2.y=Math.max(0,Math.min(i-n.p2.height,n.p2.y)),n.p1.vel_y*=.95,n.p2.vel_y*=.95},r=()=>{e.clearRect(0,0,t.width,t.height),e.setLineDash([10*a,10*a]),e.strokeStyle="#FFFFFF",e.lineWidth=2*a,e.beginPath(),e.moveTo(s/2*a,0),e.lineTo(s/2*a,t.height),e.stroke(),e.setLineDash([]),e.fillStyle="#FFFFFF",e.fillRect(n.p1.x*a,n.p1.y*a,n.p1.width*a,n.p1.height*a),e.fillRect(n.p2.x*a,n.p2.y*a,n.p2.width*a,n.p2.height*a),e.fillRect(n.ball.x*a,n.ball.y*a,n.ball.width*a,n.ball.height*a),e.font=`bold ${36*a}px monospace`,e.textAlign="center",e.fillText(n.p1.score.toString(),s/4*a,50*a),e.fillText(n.p2.score.toString(),s*3/4*a,50*a)},p=()=>{d(),r(),l=requestAnimationFrame(p)};p();let S=()=>{l&&cancelAnimationFrame(l)};window.addEventListener("beforeunload",S),window.cleanupGamePreview=S},C={render(){return`
<!-- Home page -->
<section class="h-screen flex flex-col items-center justify-center relative">
  <div class="flex lg:flex-row items-start justify-center p-2">
    <div class="text-center mb-5 ">
      <div class="relative inline-block
          relative z-10 text-title text-transparent bg-clip-text 
          bg-gradient-to-r from-red-500 via-blue-500 to-green-500
          bg-[length:400%_400%] animate-gradientShift">
        ft_transcendence
      </div>
    </div>
  </div>

  <div class="flex justify-center gap-4 mb-8">
    <button 
      id="play-btn" 
      data-i18n="play"
      class="px-12 py-8 backdrop-blur-2xs border-1 border-gray-50 text-gray-50 text-7xl font-semibold transform hover:bg-gray-700 hover:bg-opacity-10 duration-200 shadow-lg">
      Jouer maintenant
    </button>
  </div>

  <div id="scroll-indicator" class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-500 opacity-100">
    <img src="arrow.png" alt="scroll down" class="w-12 animate-arrowHueBlink [animation-delay:0s]" />
    <img src="arrow.png" alt="scroll down" class="w-10 animate-arrowHueBlink [animation-delay:0.1s]" />
    <img src="arrow.png" alt="scroll down" class="w-10 animate-arrowHueBlink [animation-delay:0.2s]" />
  </div>
</section>

<!-- Game preview and rules -->
<section class="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10">
  <!-- Game preview -->
  <div class="w-full h-full flex flex-col justify-center items-center">
    <h3 id="preview-text" data-i18n="preview" class="text-4xl font-bold text-center mb-6 text-gray-50 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
      Aper\xE7u du Jeu
    </h3>
    <canvas 
      id="preview-canvas" 
      class="border-2 border-gray-300 backdrop-blur-2xs"
    </canvas>
  </div>

  <!-- Rules, History, Facts -->
  <div class="w-full backdrop-blur-2xs border-2 border-gray-300x h-full flex flex-col shadow-xl p-6">
    
    <!-- Rules -->
    <h4 data-i18n="rules" class="text-4xl font-semibold mb-4 w-full mx-auto mt-4 text-gray-50 drop-shadow-[0_0_6px_rgba(255,255,255,0.25)]">
      R\xE8gles :
    </h4>
    <ul class="text-lg lg:text-xl text-gray-400 space-y-2 leading-relaxed">
      <li data-i18n="rule1">\u2022 Utilisez votre raquette pour renvoyer la balle.</li>
      <li data-i18n="rule2">\u2022 Marquez un point quand la balle d\xE9passe la raquette adverse.</li>
      <li data-i18n="rule3">\u2022 La balle rebondit sur les murs haut et bas.</li>
      <li data-i18n="rule4">\u2022 Premier \xE0 5 points gagne la partie.</li>
    </ul>

    <!-- History -->
    <h4 data-i18n="history" class="text-4xl font-semibold mb-4 w-full mx-auto mt-8 text-gray-50 drop-shadow-[0_0_6px_rgba(255,255,255,0.25)]">
      Histoire :
    </h4>
    <ul class="text-lg lg:text-xl text-gray-400 space-y-2 leading-relaxed">
      <li data-i18n="history1">\u2022 Cr\xE9\xE9 en 1972 par Allan Alcorn chez Atari, sur une id\xE9e de Nolan Bushnell.</li>
      <li data-i18n="history2">\u2022 Inspir\xE9 du jeu de tennis de table du Magnavox Odyssey, la premi\xE8re console domestique.</li>
      <li data-i18n="history3">\u2022 Le prototype rencontre un immense succ\xE8s d\xE8s son installation dans un bar californien.</li>
      <li data-i18n="history4">\u2022 Commercialis\xE9 ensuite comme borne d\u2019arcade, il devient le premier grand succ\xE8s du jeu vid\xE9o.</li>
      <li data-i18n="history5">\u2022 Malgr\xE9 un conflit juridique avec Magnavox, Atari consolide sa place de pionnier du secteur.</li>
      <li data-i18n="history6">\u2022 En 1975, une version domestique est lanc\xE9e avec Sears, popularisant le jeu vid\xE9o \xE0 la maison.</li>
    </ul>

    <!-- Fun facts -->
    <h4 class="text-4xl font-semibold mb-4 w-full mx-auto mt-8 text-gray-50 drop-shadow-[0_0_6px_rgba(255,255,255,0.25)]">
      Le Saviez-vous ?
    </h4>
    <ul class="text-lg lg:text-xl text-gray-400 space-y-2 leading-relaxed">
      <li data-i18n="fact2">\u2022 Le premier prototype de Pong est tomb\xE9 en panne car le r\xE9servoir de pi\xE8ces \xE9tait plein.</li>
      <li data-i18n="fact3">\u2022 Des dizaines de copies non autoris\xE9es ont envahi le march\xE9 d\xE8s 1973, lan\xE7ant la \u201CPong mania\u201D.</li>
      <li>\u2022 Atari a vendu plus de 8 000 bornes d\u2019arcade en un an, un record \xE0 l\u2019\xE9poque.</li>
    </ul>

  </div>
</section>
		`},mount(t){let e=t.querySelector("#play-btn");e&&e.addEventListener("click",()=>{window.location.hash="/gameLoby"});let a=t.querySelector("#stats-btn");a&&a.addEventListener("click",()=>{window.history.pushState({},"","/stats"),window.dispatchEvent(new PopStateEvent("popstate"))});let s=t.querySelector("#scroll-indicator");if(s){let i=()=>{window.scrollY>300?s.classList.add("opacity-0"):s.classList.remove("opacity-0")};window.addEventListener("scroll",i);let n=()=>window.removeEventListener("scroll",i);window.cleanupScrollIndicator=n}X()}};var M=class{container;canStart=!1;canvas=null;context=null;animationId=null;p1={x:20,y:260,width:8,height:80,vel_y:0};p2={x:872,y:260,width:8,height:80,vel_y:0};ball={x:450,y:300,width:8,height:8,vel_x:5,vel_y:4};p1Score=0;p2Score=0;constructor(e,a=!1){this.container=e,this.canStart=a,this.render(),this.setupCanvas(),this.setupEventListeners()}setCanStart(e){this.canStart=e,this.canStart?this.startGame():this.pauseGame()}render(){this.container.innerHTML=`
      <div class="w-full flex justify-center">
        <canvas 
          id="game-canvas" 
          class="bg-black border-2 border-white"
          width="900" 
          height="600"
          style="image-rendering: pixelated; image-rendering: -moz-crisp-edges; image-rendering: crisp-edges;">
        </canvas>
      </div>
    `}setupCanvas(){this.canvas=this.container.querySelector("#game-canvas"),this.canvas&&(this.context=this.canvas.getContext("2d"),this.context&&(this.context.imageSmoothingEnabled=!1,this.drawInitialState()))}setupEventListeners(){window.addEventListener("keydown",this.movePlayer.bind(this)),window.addEventListener("keyup",this.stopPlayer.bind(this))}drawBackground(){this.context&&(this.context.fillStyle="#000000",this.context.fillRect(0,0,900,600),this.context.fillStyle="#FFFFFF",this.context.setLineDash([10,10]),this.context.beginPath(),this.context.moveTo(450,0),this.context.lineTo(450,600),this.context.strokeStyle="#FFFFFF",this.context.lineWidth=2,this.context.stroke(),this.context.setLineDash([]))}drawInitialState(){this.drawBackground(),this.context&&(this.context.fillStyle="#FFFFFF",this.context.fillRect(this.p1.x,this.p1.y,this.p1.width,this.p1.height),this.context.fillRect(this.p2.x,this.p2.y,this.p2.width,this.p2.height),this.context.fillRect(this.ball.x,this.ball.y,this.ball.width,this.ball.height),this.drawScore())}update=()=>{if(!this.canStart||!this.context)return;this.animationId=requestAnimationFrame(this.update),this.drawBackground(),this.context.fillStyle="#FFFFFF";let e=this.p1.y+this.p1.vel_y;this.playerOutOfBound(e)||(this.p1.y=e),this.context.fillRect(this.p1.x,this.p1.y,this.p1.width,this.p1.height);let a=this.p2.y+this.p2.vel_y;if(this.playerOutOfBound(a)||(this.p2.y=a),this.context.fillRect(this.p2.x,this.p2.y,this.p2.width,this.p2.height),this.ball.vel_x=this.ball.vel_x*1.004,this.ball.vel_y=this.ball.vel_y*1.004,this.ball.x+=this.ball.vel_x,this.ball.y+=this.ball.vel_y,this.context.fillRect(this.ball.x,this.ball.y,this.ball.width,this.ball.height),(this.ball.y<=0||this.ball.y+this.ball.height>=600)&&(this.ball.vel_y*=-1),this.detectCollision(this.ball,this.p1)){if(this.ball.vel_x<0){this.ball.vel_x*=-1;let s=(this.ball.y-this.p1.y)/this.p1.height;this.ball.vel_y=(s-.5)*4}}else if(this.detectCollision(this.ball,this.p2)&&this.ball.vel_x>0){this.ball.vel_x*=-1;let s=(this.ball.y-this.p2.y)/this.p2.height;this.ball.vel_y=(s-.5)*4}this.ball.x<0?(this.p2Score++,this.resetGame(1)):this.ball.x+this.ball.width>900&&(this.p1Score++,this.resetGame(-1)),this.drawScore()};drawScore(){this.context&&(this.context.fillStyle="#FFFFFF",this.context.font="bold 48px monospace",this.context.textAlign="center",this.context.fillText(this.p1Score.toString(),300,60),this.context.fillText(this.p2Score.toString(),600,60))}movePlayer=e=>{e.code==="KeyW"?this.p1.vel_y=-8:e.code==="KeyS"&&(this.p1.vel_y=8),e.code==="ArrowUp"?this.p2.vel_y=-8:e.code==="ArrowDown"&&(this.p2.vel_y=8)};stopPlayer=e=>{(e.code==="KeyW"||e.code==="KeyS")&&(this.p1.vel_y=0),(e.code==="ArrowUp"||e.code==="ArrowDown")&&(this.p2.vel_y=0)};detectCollision(e,a){return e.x<a.x+a.width&&e.x+e.width>a.x&&e.y<a.y+a.height&&e.y+e.height>a.y}playerOutOfBound(e){return e<0||e>520}resetGame(e){this.ball={x:450,y:300,width:8,height:8,vel_x:e*5,vel_y:(Math.random()-.5)*6},this.p1.y=260,this.p2.y=260,this.p1.vel_y=0,this.p2.vel_y=0}startGame(){this.animationId||this.update()}pauseGame(){this.animationId&&(cancelAnimationFrame(this.animationId),this.animationId=null)}restart(){this.pauseGame(),this.p1Score=0,this.p2Score=0,this.resetGame(1),this.drawInitialState()}destroy(){this.pauseGame(),window.removeEventListener("keydown",this.movePlayer),window.removeEventListener("keyup",this.stopPlayer)}};var y=null,_={render(){return`
      <div class="flex-1 p-5 flex flex-col items-center justify-center bg-gray-900">
        <div id="game-container" class="mb-8">
          <!-- Game component will be mounted here -->
        </div>
        <div class="flex gap-4 items-center">
          <button
            id="start-btn"
            class="px-6 py-3 rounded-lg font-bold text-lg transition bg-white text-black hover:bg-gray-200"
          >
            START
          </button>
          <button
            id="restart-btn"
            class="px-6 py-3 rounded-lg font-bold text-lg transition bg-blue-600 text-white hover:bg-blue-700"
          >
            RESTART
          </button>
          <div class="text-white text-sm">
            <p>Player 1: W/S keys</p>
            <p>Player 2: \u2191/\u2193 keys</p>
          </div>
        </div>
      </div>
    `},mount(t){y&&y.destroy();let e=!1,a=t.querySelector("#start-btn"),s=t.querySelector("#restart-btn"),i=t.querySelector("#game-container");a&&s&&i&&(y=new M(i,e),a.addEventListener("click",()=>{e=!e,e?(a.className="px-6 py-3 rounded-lg font-bold text-lg transition bg-red-600 text-white hover:bg-red-700",a.textContent="PAUSE"):(a.className="px-6 py-3 rounded-lg font-bold text-lg transition bg-white text-black hover:bg-gray-200",a.textContent="START"),y&&y.setCanStart(e)}),s.addEventListener("click",()=>{y&&(e=!1,y.setCanStart(!1),a.className="px-6 py-3 rounded-lg font-bold text-lg transition bg-white text-black hover:bg-gray-200",a.textContent="START",y.restart())}))}};var Y=()=>{let t=document.getElementById("background-canvas");if(!t)return;let e=t.getContext("2d");if(!e)return;let a=()=>{t.width=window.innerWidth,t.height=window.innerHeight};a(),window.addEventListener("resize",a);let s=()=>{let l=Math.floor(Math.random()*128+127),d=Math.floor(Math.random()*128+127),r=Math.floor(Math.random()*128+127);return`rgba(${l},${d},${r},0.8)`},i=Array.from({length:150},()=>({x:Math.random()*t.width,y:Math.random()*t.height,size:Math.random()*3+2,color:s(),velX:(Math.random()-.5)*.3,velY:(Math.random()-.5)*.3})),n=()=>{e.fillStyle="#000000",e.fillRect(0,0,t.width,t.height);for(let l of i)e.fillStyle=l.color,e.fillRect(l.x,l.y,l.size,l.size),l.x+=l.velX,l.y+=l.velY,l.x<0&&(l.x=t.width),l.x>t.width&&(l.x=0),l.y<0&&(l.y=t.height),l.y>t.height&&(l.y=0);requestAnimationFrame(n)};n()},f={render(t){return`
      <div class="flex flex-col h-screen font-custom font-tiny5">
        <nav class="fixed w-screen z-20 h-24 flex items-center justify-between backdrop-blur-2xs border-b-1 border-gray-50">
          <!-- Navigation gauche -->
          <div class="flex my-5 gap-3 mx-5">
            <button id="home-btn" class="flex items-center px-3 py-1  hover:bg-gray-700 transition-all duration-300">
              <div class="relative inline-block
                  z-10 text-4xl text-transparent bg-clip-text
                  bg-gradient-to-r from-red-500 via-blue-500 to-green-500
                  bg-[length:400%_400%] animate-gradientShift">
                ft_
              </div>
            </button>
          </div>
          
          <!-- Navigation droite -->
          <div class="flex items-center gap-4 mx-5">
            <!-- S\xE9lecteur de langue -->
<!--            <div class="flex items-center gap-2">-->
<!--              <button -->
<!--                id="lang-fr" -->
<!--                class="w-8 h-6 transition bg-transparent hover:bg-gray-300" -->
<!--                data-lang="fr"-->
<!--                title="Fran\xE7ais">-->
<!--                \u{1F1EB}\u{1F1F7}-->
<!--              </button>-->
<!--              <button -->
<!--                id="lang-en"-->
<!--                class="w-8 h-6 transition hover:bg-gray-300 border-2"-->
<!--                data-lang="en"-->
<!--                title="English">-->
<!--                \u{1F1FA}\u{1F1F8}-->
<!--              </button>-->
<!--              <button-->
<!--                id="lang-es"-->
<!--                class="w-8 h-6 transition hover:bg-gray-300 border-2"-->
<!--                data-lang="es"-->
<!--                title="Espa\xF1ol">-->
<!--                \u{1F1EA}\u{1F1F8}-->
<!--              </button>-->
<!--            </div>-->
            
            <!-- S\xE9parateur -->
<!--            <div class="w-px h-8 bg-gray-600"></div>-->
            
            <!-- Bouton Login -->
            <button
              id="login-btn"
              class="flex items-center px-3 py-2
                  bg-gray-800 text-gray-50
                  shadow-[3px_3px_0_#000]
                  hover:bg-gray-700
                  hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_#000]
                  transition-all duration-100">
              <span class="text-lg mr-2">\u{1F464}</span>
              <span data-i18n="login-btn" class="text-xs text-gray-50">Connexion</span>
            </button>
          </div>
        </nav>
        <canvas id="background-canvas" class="fixed top-0 left-0 w-full h-full -z-10"></canvas>
        <div class="flex flex-1 p-3 gap-6">
          <div class="flex flex-1 items-center justify-center relative">
            <div id="page-content">
              ${t}
            </div>
          </div>
        </div>

        <!-- Modal Login -->
        <div id="login-modal" class="fixed inset-0 hidden items-center justify-center backdrop-blur-lg z-50">
          <div class="border-1 border-gray-50 p-8 max-w-md w-full mx-4">
            <h3 data-i18n="loginModalTitle" class="text-2xl font-bold mb-6 text-center text-gray-50">Login</h3>
            
            <form id="login-form" class="space-y-4">
              <div>
                <label data-i18n="username" class="block text-sm text-gray-50 font-bold mb-2">Username:</label>
                <input 
                  type="text" 
                  id="username" 
                  class="w-full px-3 py-2 border-1 border-gray-400 text-gray-200 focus:outline-none focus:border-gray-50"
                  data-i18n-placeholder="usernameInput"
                  placeholder="Enter your username"
                  required
                >
              </div>
              
              <div>
                <label data-i18n="password" class="block text-sm text-gray-500 font-bold mb-2">Password:</label>
                <input 
                  type="password" 
                  id="password" 
                  class="w-full px-3 py-2 border-1 border-gray-400 text-gray-200 focus:outline-none focus:border-gray-50"
                  data-i18n-placeholder="passwordInput"
                  placeholder="Enter your password"
                  required
                >
              </div>
              
              <div class="flex items-center justify-between">
                <label class="flex items-center">
                  <input type="checkbox" id="remember-me" class="mr-2">
                  <span data-i18n="rememberMe" class="text-sm text-gray-50">Remember me</span>
                </label>
                <button type="button" data-i18n="forgotPassword" class="text-sm text-gray-50 hover:underline">
                  Forgot password?
                </button>
              </div>
              
              <div class="flex space-x-4 mt-6">
                <button 
                  type="submit"
                  data-i18n="loginButton" 
                  class="flex-1 text-white py-2 px-4 border-1 border-gray-50 hover:border-blue-500 hover:bg-gray-700 transition-all font-bold">
                  LOGIN
                </button>
                <button 
                  type="button" 
                  id="cancel-login"
                  data-i18n="cancelButton" 
                  class="flex-1 text-white py-2 px-4 border-1 border-gray-50 hover:border-red-500 hover:bg-gray-700 transition-all font-bold">
                  CANCEL
                </button>
              </div>
              
              <div class="text-center mt-4 pt-4 border-t border-gray-300">
                <p data-i18n="noAccount" class="text-sm text-gray-400">Don't have an account?</p>
                <button type="button" id="signup-btn" data-i18n="signupHere" class="text-gray-50 hover:underline font-semibold">
                  Sign up here
                </button>
              </div>
            </form>
          </div>
        </div>

        <!-- Modal Register -->
        <div id="register-modal" class="fixed inset-0 hidden items-center justify-center z-50 backdrop-blur-lg">
          <div class="border-1 border-white p-8 max-w-md w-full mx-4">
            <h3 data-i18n="registerModalTitle" class="text-2xl text-gray-50 font-bold mb-6 text-center">Register</h3>
            
            <form id="register-form" class="space-y-4">
              <div>
                <label data-i18n="username" class="block text-sm text-gray-50 font-bold mb-2">Username:</label>
                <input 
                  type="text" 
                  id="reg-username" 
                  class="w-full px-3 py-2 border-1 border-gray-400 text-gray-200 focus:outline-none focus:border-gray-50"
                  data-i18n-placeholder="usernameInput"
                  placeholder="Choose a username"
                  required
                >
              </div>
              
              <div>
                <label data-i18n="password" class="block text-sm text-gray-50 font-bold mb-2">Password:</label>
                <input 
                  type="password" 
                  id="reg-password" 
                  class="w-full px-3 py-2 border-1 border-gray-400 text-gray-200 focus:outline-none focus:border-gray-50"
                  data-i18n-placeholder="passwordInput"
                  placeholder="Create a password"
                  required
                >
              </div>
              
              <div>
                <label data-i18n="confirmPassword" class="block text-sm text-gray-50 font-bold mb-2">Confirm Password:</label>
                <input 
                  type="password" 
                  id="reg-confirm-password" 
                  class="w-full px-3 py-2 border-1 border-gray-400 text-gray-200 focus:outline-none focus:border-gray-50"
                  data-i18n-placeholder="confirmPasswordInput"
                  placeholder="Confirm your password"
                  required
                >
              </div>
              
              <div class="flex space-x-4 mt-6">
                <button 
                  type="submit"
                  data-i18n="registerButton" 
                  class="flex-1 text-white py-2 px-4 border-1 border-white hover:border-green-500 hover:bg-gray-700 transition-colors font-bold">
                  REGISTER
                </button>
                <button 
                  type="button" 
                  id="cancel-register"
                  data-i18n="cancelButton" 
                  class="flex-1 text-white py-2 px-4 border-1 border-white hover:border-red-500 hover:bg-gray-700 transition-colors font-bold">
                  CANCEL
                </button>
              </div>
              
              <div class="text-center mt-4 pt-4 border-t border-gray-300">
                <p data-i18n="haveAccount" class="text-sm text-gray-400">Already have an account?</p>
                <button type="button" id="back-to-login" data-i18n="loginHere" class="text-gray-50 hover:underline font-semibold">
                  Login here
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    `},mount(t){let e=t.querySelector("#home-btn");e&&e.addEventListener("click",()=>{window.location.hash="/"});let a=t.querySelector("#stats-btn");a&&a.addEventListener("click",()=>{window.location.hash="/stats"});let s=t.querySelector("#game-btn");s&&s.addEventListener("click",()=>{window.location.hash="/gameLoby"}),Y();let i=t.querySelectorAll("[data-lang]"),n=localStorage.getItem("language")||"fr";this.setActiveLanguage(t,n),i.forEach(d=>{d.addEventListener("click",()=>{let r=d.dataset.lang;r&&this.changeLanguage(t,r)})});let l=t.querySelector("#login-btn");l&&l.addEventListener("click",()=>{this.handleLoginClick(t)}),this.setupLoginModal(t),this.setupRegisterModal(t),this.updateLoginButton(t,localStorage.getItem("isLoggedIn")==="true")},setupLoginModal(t){let e=t.querySelector("#login-modal"),a=t.querySelector("#cancel-login"),s=t.querySelector("#login-form"),i=t.querySelector("#signup-btn");a&&a.addEventListener("click",()=>{this.closeModal(e)}),e.addEventListener("click",n=>{n.target===e&&this.closeModal(e)}),s&&s.addEventListener("submit",n=>{n.preventDefault(),this.handleLogin(t)}),i&&i.addEventListener("click",()=>{this.closeModal(e),this.openModal(t.querySelector("#register-modal"))})},setupRegisterModal(t){let e=t.querySelector("#register-modal"),a=t.querySelector("#cancel-register"),s=t.querySelector("#register-form"),i=t.querySelector("#back-to-login");a&&a.addEventListener("click",()=>{this.closeModal(e)}),e.addEventListener("click",n=>{n.target===e&&this.closeModal(e)}),s&&s.addEventListener("submit",n=>{n.preventDefault(),this.handleRegister(t)}),i&&i.addEventListener("click",()=>{this.closeModal(e),this.openModal(t.querySelector("#login-modal"))})},handleLoginClick(t){if(localStorage.getItem("isLoggedIn")==="true")window.location.hash="/stats";else{let a=t.querySelector("#login-modal");this.openModal(a)}},handleLogin(t){let e=t.querySelector("#username").value,a=t.querySelector("#password").value,s=t.querySelector("#remember-me").checked;console.log("\u{1F510} Login attempt:",{username:e,rememberMe:s}),setTimeout(()=>{if(e&&a){localStorage.setItem("isLoggedIn","true"),localStorage.setItem("username",e),this.showNotification(`Bienvenue ${e} !`),this.updateLoginButton(t,!0);let i=t.querySelector("#login-modal");this.closeModal(i),t.querySelector("#login-form").reset()}else this.showNotification("Nom d'utilisateur ou mot de passe invalide","error")},1e3)},handleRegister(t){let e=t.querySelector("#reg-username").value,a=t.querySelector("#reg-email").value,s=t.querySelector("#reg-password").value,i=t.querySelector("#reg-confirm-password").value;if(s!==i){this.showNotification("Les mots de passe ne correspondent pas","error");return}console.log("\u{1F4DD} Register attempt:",{username:e,email:a}),setTimeout(()=>{localStorage.setItem("isLoggedIn","true"),localStorage.setItem("username",e),this.showNotification(`Compte cr\xE9\xE9 avec succ\xE8s ! Bienvenue ${e} !`),this.updateLoginButton(t,!0);let n=t.querySelector("#register-modal");this.closeModal(n),t.querySelector("#register-form").reset()},1e3)},openModal(t){t.classList.remove("hidden"),t.classList.add("flex")},closeModal(t){t.classList.add("hidden"),t.classList.remove("flex")},async changeLanguage(t,e){localStorage.setItem("language",e),this.setActiveLanguage(t,e),console.log(`Changed language to ${e}`);let i=(await(await fetch("translations.json")).json())[e];i&&(t.querySelectorAll("[data-i18n]").forEach(n=>{let l=n.dataset.i18n;l==="login"&&localStorage.getItem("isLoggedIn")||i[l]&&(n.textContent=i[l])}),t.querySelectorAll("[data-i18n-placeholder]").forEach(n=>{let l=n.dataset.i18nPlaceholder;i[l]&&(n.placeholder=i[l])}))},setActiveLanguage(t,e){t.querySelectorAll("[data-lang]").forEach(s=>{s.dataset.lang===e?s.className="w-8 h-6 transition bg-gray-800 hover:bg-gray-800 transform ":s.className="w-8 h-6 transition hover:bg-gray-800 "})},updateLoginButton(t,e){let a=t.querySelector("#login-btn");if(a)if(e){let s=localStorage.getItem("username")||"User",i="arrow.png";a.innerHTML=`
        <img src="astronaut-removebg.png" alt="avatar" class="w-8 h-8 mr-2" />
        <span class="text-3xl font-bold text-transparent bg-clip-text
        bg-gradient-to-r from-red-500 via-blue-500 to-green-500
        bg-[length:400%_400%] animate-gradientShift">${s}</span>
      `,a.className=`
        flex items-center px-3 py-2
        hover:bg-gray-700
        transition-all duration-100
      `}else a.innerHTML=`
        <img src="anonymous-orange.png" alt="login" class="w-8 h-8 mr-2"/>
        <span data-i18n="login-btn" class="text-2xl text-gray-50">Connexion</span>
      `,a.className=`
        flex items-center px-3 py-2
        text-gray-50
        hover:bg-gray-700
        transition-all duration-100
      `},showNotification(t,e="success"){let a=document.createElement("div"),s=e==="error"?"bg-red-500":"bg-blue-500";a.className=`fixed bottom-4 right-4 ${s} text-white px-4 py-2 rounded-lg shadow-lg z-50 transition-all duration-300 transform translate-x-full`,a.textContent=t,document.body.appendChild(a),setTimeout(()=>{a.classList.remove("translate-x-full")},100),setTimeout(()=>{a.classList.add("translate-x-full"),setTimeout(()=>{document.body.removeChild(a)},300)},3e3)},getLanguageName(t){return{fr:"Fran\xE7ais",en:"English",es:"Espa\xF1ol"}[t]||t}};var h="profile",Q={render(){return`
<div class="h-screen bg-transparent p-6 flex flex-col items-center justify-center">
  <!-- Header avec onglets -->
  <div class="mb-6 w-[1200px]">
    <div class="relative backdrop-blur-xs border-1 border-gray-50 flex overflow-hidden">
      <!-- Sliding indicator -->
      <div id="tab-indicator" class="absolute top-0 left-0 h-full w-1/2 bg-gray-700 transition-transform duration-300 ease-in-out" style="transform:${h==="profile"?"translateX(0%)":"translateX(100%)"};"></div>
      <button 
        id="profile-tab"
        class="relative z-10 flex-1 px-6 py-3 text-center transition-colors duration-200 hover:bg-gray-700/40 text-white">
        <div class="relative inline-block">
          <div class="relative z-10 text-7xl text-transparent bg-clip-text
              bg-gradient-to-r from-red-500 via-blue-500 to-green-500
              bg-[length:200%_100%] bg-[position:0%_100%]">
            <span data-i18n="profile">Profil</span>
          </div>
        </div>
    </button>
    <button 
      id="history-tab"
      class="relative z-10 flex-1 px-6 py-3 text-center transition-colors duration-200 hover:bg-gray-700/40 text-white">
      <div class="relative inline-block">
          <div class="relative z-10 text-7xl text-transparent bg-clip-text
              bg-gradient-to-r from-red-500 via-blue-500 to-green-500
              bg-[length:200%_100%] bg-[position:100%_100%]">
            <span data-i18n="historyTab">Historique</span>
          </div>
        </div>
      </button>
    </div>
  </div>

  <!-- Contenu dynamique -->
  <div id="content-container" class="w-[1200px] h-[700px]">
    ${h==="profile"?this.renderProfile():this.renderHistory()}
  </div>
</div>
  `},renderProfile(){return`
<div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
  <!-- Profile Section -->
  <div class="backdrop-blur-2xs border-1 border-gray-50 p-6">
    <!-- Avatar -->
    <div class="text-center mb-6">
      <div class="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-3 flex items-center justify-center">
        <span class="text-3xl">\u{1F464}</span>
      </div>
      <p class="text-xs text-blue-500 underline cursor-pointer" id="change-avatar"><span data-i18n="changeAvatar">CHANGE AVATAR</span></p>
    </div>

    <!-- Username -->
    <div class="text-center mb-6">
      <p class="text-sm text-gray-600 bg-gray-200 font-semibold mb-1 p-2">LUCAS</p>
      <p class="text-xs text-blue-500 underline cursor-pointer" id="change-username"><span data-i18n="changeUsername">CHANGE USERNAME</span></p>
    </div>

    <!-- Mail -->
    <div class="text-center mb-6">
      <p class="text-sm text-gray-600 bg-gray-200 font-semibold mb-1 p-2">LUCA@GMAIL.COM</p>
      <p class="text-xs text-blue-500 underline cursor-pointer" id="change-mail"><span data-i18n="changeMail">CHANGE MAIL</span></p>
    </div>

    <!-- Main stats -->
    <div class="grid grid-cols-3 gap-4 text-center mt-8">
      <div>
        <div class="text-2xl font-bold text-gray-800" id="stats-rank">2</div>
        <div data-i18n="rank" class="text-sm text-gray-600">Rank</div>
      </div>
      <div>
        <div class="text-2xl font-bold text-gray-800" id="stats-win-rate">42%</div>
        <div data-i18n="winRate" class="text-sm text-gray-600">Win Rate</div>
      </div>
      <div>
        <div class="text-2xl font-bold text-gray-800" id="stats-friends">0</div>
        <div data-i18n="friends" class="text-sm text-gray-600">Friends</div>
      </div>
    </div>
  </div>

  <!-- Detailed stats -->
  <div class="backdrop-blur-2xs border-1 border-gray-50 p-6">
    <h3 data-i18n="statistics" class="text-lg font-semibold mb-4 text-gray-100">Statistiques</h3>
    <div class="space-y-4">
      <div class="flex justify-between items-center py-2 border-b border-gray-700">
        <span data-i18n="gamesPlayed" class="text-sm font-medium text-gray-300">Parties jou\xE9es :</span>
        <span class="text-sm font-bold text-gray-400" id="stats-games-played">42</span>
      </div>
      <div class="flex justify-between items-center py-2 border-b border-gray-700">
        <span data-i18n="victories" class="text-sm font-medium text-gray-300">Victoires :</span>
        <span class="text-sm font-bold text-green-600" id="stats-wins">18</span>
      </div>
      <div class="flex justify-between items-center py-2 border-b border-gray-700">
        <span data-i18n="defeats" class="text-sm font-medium text-gray-300">D\xE9faites :</span>
        <span class="text-sm font-bold text-red-600" id="stats-losses">24</span>
      </div>
      <div class="flex justify-between items-center py-2 border-b border-gray-700">
        <span data-i18n="bestScore" class="text-sm font-medium text-gray-300">Meilleur score :</span>
        <span class="text-sm font-bold text-purple-600" id="stats-best-score">1200</span>
      </div>
      <div class="flex justify-between items-center py-2">
        <span data-i18n="playTime" class="text-sm font-medium text-gray-300">Temps de jeu :</span>
        <span class="text-sm font-bold text-blue-600" id="stats-playtime">12h 34m</span>
      </div>
    </div>
  </div>

  <!-- Friends Lists -->
  <div class="space-y-6">
    <!-- Online Friends -->
    <div class="backdrop-blur-2xs border-1 border-gray-50 p-6">
      <h3 data-i18n="onlineFriends" class="text-lg font-semibold mb-4 text-gray-100">Online Friends</h3>
      <ul class="space-y-3">
        <li class="flex items-center justify-between">
          <span class="text-gray-700 flex items-center">
            <span class="w-2 h-2 bg-green-500 mr-2"></span>
              BOB
          </span>
          <button class="px-3 py-1 text-xs bg-blue-500 text-white hover:bg-blue-600 transition-colors">
            <span data-i18n="inviteButton">Invite</span>
          </button>
        </li>
        <li class="flex items-center justify-between">
          <span class="text-gray-700 flex items-center">
            <span class="w-2 h-2 bg-green-500 mr-2"></span>
            Mike
          </span>
          <button class="px-3 py-1 text-xs bg-blue-500 text-white hover:bg-blue-600 transition-colors">
            <span data-i18n="inviteButton">Invite</span>
          </button>
        </li>
        <li class="flex items-center justify-between">
          <span class="text-gray-700 flex items-center">
            <span class="w-2 h-2 bg-green-500 mr-2"></span>
            Mathis
          </span>
          <button class="px-3 py-1 text-xs bg-blue-500 text-white hover:bg-blue-600 transition-colors">
            <span data-i18n="inviteButton">Invite</span>
          </button>
        </li>
      </ul>
    </div>

    <!-- Offline Friends -->
    <div class="backdrop-blur-2xs border-1 border-gray-50 p-6">
      <h3 data-i18n="offlineFriends" class="text-lg font-semibold mb-4 text-gray-100">Offline Friends</h3>
      <ul class="space-y-3">
        <li class="flex items-center">
          <span class="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
          <span class="text-gray-700">Lucas</span>
        </li>
        <li class="flex items-center">
          <span class="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
          <span class="text-gray-700">Marie</span>
        </li>
        <li class="flex items-center">
          <span class="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
          <span class="text-gray-700">Jean</span>
        </li>
      </ul>
    </div>
  </div>
</div>
  `},renderHistory(){return`
              <div class="space-y-6">
                  <!-- Filtres -->
                  <div class="bg-white p-6">
                      <div class="flex flex-wrap gap-4 items-center">
                          <div>
                              <label class="block text-sm font-medium text-gray-700 mb-1">P\xE9riode :</label>
                              <select class="px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                  <option>Derni\xE8re semaine</option>
                                  <option>Dernier mois</option>
                                  <option>Tout</option>
                              </select>
                          </div>
                          <div>
                              <label class="block text-sm font-medium text-gray-700 mb-1">R\xE9sultat :</label>
                              <select class="px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                  <option>Tous</option>
                                  <option>Victoires</option>
                                  <option>D\xE9faites</option>
                              </select>
                          </div>
                          <button class="mt-6 px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition-colors">
                              Filtrer
                          </button>
                      </div>
                  </div>
  
                  <!-- Historique des matches -->
                  <div class="bg-white overflow-hidden">
                      <div class="px-6 py-4 border-b border-gray-200">
                          <h3 class="text-lg font-semibold text-gray-800">\u{1F4C8} Historique des matches</h3>
                      </div>
                      
                      <div class="overflow-x-auto">
                          <table class="w-full">
                              <thead class="bg-gray-50">
                                  <tr>
                                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Adversaire</th>
                                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">R\xE9sultat</th>
                                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dur\xE9e</th>
                                  </tr>
                              </thead>
                              <tbody class="bg-white divide-y divide-gray-200">
                                  <tr class="hover:bg-gray-50">
                                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">15/01/2024 14:30</td>
                                      <td class="px-6 py-4 whitespace-nowrap">
                                          <div class="flex items-center">
                                              <div class="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                                                  <span class="text-sm">\u{1F464}</span>
                                              </div>
                                              <span class="text-sm font-medium text-gray-900">BOB</span>
                                          </div>
                                      </td>
                                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">5 - 3</td>
                                      <td class="px-6 py-4 whitespace-nowrap">
                                          <span class="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                                              \u2705 Victoire
                                          </span>
                                      </td>
                                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5m 23s</td>
                                  </tr>
                                  <tr class="hover:bg-gray-50">
                                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">14/01/2024 20:15</td>
                                      <td class="px-6 py-4 whitespace-nowrap">
                                          <div class="flex items-center">
                                              <div class="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                                                  <span class="text-sm">\u{1F464}</span>
                                              </div>
                                              <span class="text-sm font-medium text-gray-900">Mike</span>
                                          </div>
                                      </td>
                                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2 - 5</td>
                                      <td class="px-6 py-4 whitespace-nowrap">
                                          <span class="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                                              \u274C D\xE9faite
                                          </span>
                                      </td>
                                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3m 45s</td>
                                  </tr>
                                  <tr class="hover:bg-gray-50">
                                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">13/01/2024 16:42</td>
                                      <td class="px-6 py-4 whitespace-nowrap">
                                          <div class="flex items-center">
                                              <div class="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                                                  <span class="text-sm">\u{1F464}</span>
                                              </div>
                                              <span class="text-sm font-medium text-gray-900">Mathis</span>
                                          </div>
                                      </td>
                                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">5 - 1</td>
                                      <td class="px-6 py-4 whitespace-nowrap">
                                          <span class="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                                              \u2705 Victoire
                                          </span>
                                      </td>
                                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4m 12s</td>
                                  </tr>
                                  <tr class="hover:bg-gray-50">
                                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">12/01/2024 11:20</td>
                                      <td class="px-6 py-4 whitespace-nowrap">
                                          <div class="flex items-center">
                                              <div class="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                                                  <span class="text-sm">\u{1F464}</span>
                                              </div>
                                              <span class="text-sm font-medium text-gray-900">Jean</span>
                                          </div>
                                      </td>
                                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">3 - 5</td>
                                      <td class="px-6 py-4 whitespace-nowrap">
                                          <span class="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                                              \u274C D\xE9faite
                                          </span>
                                      </td>
                                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">6m 38s</td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
  
                  <!-- Statistiques de la p\xE9riode -->
                  <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div class="bg-white p-6 text-center">
                          <div class="text-3xl font-bold text-blue-600">4</div>
                          <div class="text-sm text-gray-600">Parties cette semaine</div>
                      </div>
                      <div class="bg-white p-6 text-center">
                          <div class="text-3xl font-bold text-green-600">2</div>
                          <div class="text-sm text-gray-600">Victoires</div>
                      </div>
                      <div class="bg-white p-6 text-center">
                          <div class="text-3xl font-bold text-red-600">2</div>
                          <div class="text-sm text-gray-600">D\xE9faites</div>
                      </div>
                      <div class="bg-white p-6 text-center">
                          <div class="text-3xl font-bold text-purple-600">50%</div>
                          <div class="text-sm text-gray-600">Winrate</div>
                      </div>
                  </div>
              </div>
          `},mount(t){let e=t.querySelector("#profile-tab"),a=t.querySelector("#history-tab"),s=t.querySelector("#content-container"),i=t.querySelector("#tab-indicator"),n=()=>{s&&(s.innerHTML=h==="profile"?this.renderProfile():this.renderHistory(),h==="profile"&&this.mountProfileEvents(s))},l=()=>{if(!i)return;let p=h==="profile"?"translateX(0%)":"translateX(100%)";i.style.transform=p},d=()=>{h!=="profile"&&(h="profile",l(),n())},r=()=>{h!=="history"&&(h="history",l(),n())};e&&e.addEventListener("click",d),a&&a.addEventListener("click",r),n()},mountProfileEvents(t){let e=t.querySelector("#change-username");e&&e.addEventListener("click",()=>{let n=prompt("Nouveau nom d'utilisateur:","LUCAS");if(n){let l=t.querySelector("#change-username")?.previousElementSibling;l&&(l.textContent=n.toUpperCase())}});let a=t.querySelector("#change-mail");a&&a.addEventListener("click",()=>{let n=prompt("Nouveau mail :","LUCA@GMAIL.COM");if(n){let l=t.querySelector("#change-mail")?.previousElementSibling;l&&(l.textContent=n.toUpperCase())}});let s=t.querySelector("#change-avatar");s&&s.addEventListener("click",()=>{alert("\u{1F3A8} Fonctionnalit\xE9 de changement d'avatar \xE0 venir !")}),t.querySelectorAll("button").forEach(n=>{n.textContent?.includes('<span data-i18n="inviteButton">Invite</span>')&&n.addEventListener("click",l=>{let d=n.closest("li")?.querySelector("span")?.textContent?.trim();alert(`\u{1F3AE} Invitation envoy\xE9e \xE0 ${d} !`)})})}},j=Q;var R={render(){return`
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
							Jouez \xE0 deux sur le m\xEAme ordinateur. 
							Parfait pour d\xE9fier un ami assis \xE0 c\xF4t\xE9 de vous !
						</p>
					</div>
					<div class="space-y-2 mb-12">
						<div class="flex justify-between text-3xl">
							<span data-i18n="players" class="text-gray-300">Joueurs :</span>
							<span data-i18n="twoLocal" class="font-semibold text-white">2 locaux</span>
						</div>
						<div class="flex justify-between text-3xl">
							<span data-i18n="controls" class="text-gray-300">Contr\xF4les :</span>
							<span data-i18n="wsVsArrows" class="font-semibold text-white">W/S vs \u2191/\u2193</span>
						</div>
						<div class="flex justify-between text-3xl">
							<span data-i18n="difficulty" class="text-gray-300">Difficult\xE9 :</span>
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
							Affrontez des joueurs du monde entier en temps r\xE9el.
							Syst\xE8me de matchmaking automatique !
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
							Participez \xE0 des tournois avec \xE9limination directe. Montez dans le classement mondial !
						</p>
					</div>
					<div class="space-y-2 mb-12">
					<div class="flex justify-between text-3xl">
						<span data-i18n="format" class="text-gray-300">Format :</span>
						<span data-i18n="directElimination" class="font-semibold text-white">\xC9limination directe</span>
						</div>
					<div class="flex justify-between text-3xl">
						<span data-i18n="participants" class="text-gray-300">Participants :</span>
						<span data-i18n="eightToSixteenPlayers" class="font-semibold text-white">8-16 joueurs</span>
					</div>
					<div class="flex justify-between text-3xl">
						<span data-i18n="rewards" class="text-gray-300">R\xE9compenses :</span>
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

				
		`},mount(t){let e=t.querySelector("#local-mode");e&&e.addEventListener("click",()=>{window.location.hash="/game"});let a=t.querySelector("#online-mode");a&&a.addEventListener("click",()=>{window.location.hash="/gameRoom"});let s=t.querySelector("#tournament-mode");s&&s.addEventListener("click",()=>{window.location.hash="/tournamentRoom"})}};var u,w,A=function(t){let e={method:"rooms",clientId:w};u&&u.send(JSON.stringify(e))};function Z(t,e){let a=t.querySelector("#rooms-container");a.innerHTML="",e.forEach(s=>{let i=document.createElement("button");i.className="room-btn px-6 py-3 border-2 border-black bg-white hover:bg-gray-100 transition-colors font-mono",i.dataset.roomId=s.roomId,i.innerHTML=`
            ${s.roomName}<br>
            <span class="text-sm text-gray-600">${s.players}</span>
        `,i.addEventListener("click",()=>{B(s.roomId)}),a.appendChild(i)})}var ee=function(t){let e=t.querySelector("#room-name").value,a=t.querySelector("#game-point").value,s=t.querySelector("#game-mode").value,i={method:"createR",clientId:w,roomName:e,gamePoint:a,gameMode:s};u&&u.send(JSON.stringify(i));let n=t.querySelector("#create-room-modal");n.classList.add("hidden"),n.classList.remove("flex"),t.querySelector("#create-room-form").reset()},B=function(t){let e={method:"join",clientId:w,roomId:t};u&&u.send(JSON.stringify(e))},N={render(){return`
	<div class="max-w-6xl mx-auto p-6 space-y-6">

		<div class="bg-white border-2 border-black p-8">
			<div class="flex justify-center">
				<h1 data-i18n="rankedGame" class="text-2xl font-bold text-center">Ranked Game</h1>
			</div>
			<div class="text-center mb-8">
				<div class="flex justify-center space-x-4">
					
					<button id="vs-btn" class="px-8 py-3 border-2 border-black bg-white hover:bg-gray-100 transition-colors font-mono">
						<span data-i18n="vsButton">\u{1F464} vs \u{1F464}</span>
					</button>
					</div>
				<p data-i18n="rankedDesc">
					Le mode Ranked vous permet d'affronter un autre joueur dans une partie comp\xE9titive en 1 contre 1. Chaque victoire ou d\xE9faite affecte votre classement g\xE9n\xE9ral. Relevez le d\xE9fi pour grimper dans le classement et montrer vos comp\xE9tences !
				</p>
			</div>
		</div>

		<div class="bg-white border-2 border-black p-8">
			<div class="flex justify-center">
				<h1 data-i18n="friendlyGame" class="text-2xl font-bold text-center">Frendly Game</h1>
			</div>
			<div class="text-center mb-8">
				<div class="flex justify-center space-x-4">
					
					<button id="create-room-btn" data-i18n="createRoom" class="px-8 py-3 border-2 border-black bg-white hover:bg-gray-100 transition-colors font-mono">
						+ Create a room
					</button>
				</div>
				<p data-i18n="friendlyDesc">
					Le mode <span class="font-bold">Friendly</span> vous permet de jouer des parties amicales sans impact sur votre classement.<br>
					Cr\xE9ez une salle ou rejoignez celle d'un ami pour vous entra\xEEner, tester de nouvelles strat\xE9gies ou simplement vous amuser sans pression.<br>
					C'est l'endroit id\xE9al pour d\xE9fier vos amis ou rencontrer de nouveaux joueurs dans une ambiance d\xE9tendue !
				</p>
			</div>
		</div>

		<!-- Available Rooms Section -->
		<div class="bg-white border-2 border-black p-6">
			<div class="flex justify-between items-center mb-6">
				<h2 data-i18n="availableRooms" class="text-2xl font-bold">Available rooms</h2>
				<button id="reload-btn" data-i18n="reloadButton" class="px-4 py-2 border-2 border-black bg-white hover:bg-gray-100 transition-colors font-mono">
					\u{1F504} Reload
				</button>
			</div>
			<div class="flex flex-wrap gap-4" id="rooms-container">
				
			</div>
		</div>
	</div>

	<!-- Modal Create Room -->
	<div id="create-room-modal" class="fixed inset-0 bg-black bg-opacity-50 hidden items-center justify-center z-50">
		<div class="bg-white border-4 border-black p-8 max-w-md w-full mx-4">
			<h3 data-i18n="createRoomModal" class="text-2xl font-bold mb-6 text-center">Create a Room</h3>
			
			<form id="create-room-form" class="space-y-4">
				<div>
					<label data-i18n="roomName" class="block text-sm font-bold mb-2">Room Name:</label>
					<input 
						type="text" 
						id="room-name" 
						class="w-full px-3 py-2 border-2 border-black focus:outline-none focus:border-blue-500"
						data-i18n-placeholder="roomNameInput"
						placeholder="Enter room name"
						required
					>
				</div>
				
				<div>
					<label data-i18n="partyPoints" class="block text-sm font-bold mb-2">Party Point (s):</label>
					<select id="game-point" class="w-full px-3 py-2 border-2 border-black focus:outline-none">
						<option value="3">3</option>
						<option value="5">5</option>
						<option value="10">10</option>
						<option value="15">15</option>
					</select>
				</div>
				
				<div>
					<label data-i18n="gameMode" class="block text-sm font-bold mb-2">Game Mode:</label>
					<select id="game-mode" class="w-full px-3 py-2 border-2 border-black focus:outline-none">
						<option data-i18n="classicPong" value="classic">Classic Pong</option>
						<option data-i18n="powerUpMode" value="power-up">Power-up Mode</option>
					</select>
				</div>
				
				<div class="flex space-x-4 mt-6">
					<button 
						type="submit"
						data-i18n="createButton" 
						class="flex-1 bg-green-500 text-white py-2 px-4 border-2 border-black hover:bg-green-600 transition-colors font-bold">
						CREATE
					</button>
					<button 
						type="button" 
						id="cancel-create"
						data-i18n="cancelButton" 
						class="flex-1 bg-red-500 text-white py-2 px-4 border-2 border-black hover:bg-red-600 transition-colors font-bold">
						CANCEL
					</button>
				</div>
			</form>
		</div>
	</div>
		`},mount(t){let e;if(u===void 0){let r=window.location.host;u=new WebSocket(`wss://${r}/pong/ws`)}u.onmessage=r=>{let p=JSON.parse(r.data);p.method==="connect"&&(w=p.clientId,w!==void 0&&localStorage.setItem("clientId",w),A(t)),p.method==="create"&&(e=p.room.roomId,B(e)),p.method==="join"&&(p.status==="success"?(e=p.room.roomId,e!==void 0&&localStorage.setItem("roomId",e),window.location.hash=p.url):alert(p.message)),p.method==="rooms"&&Z(t,p.rooms)};let a=t.querySelector("#vs-btn"),s=t.querySelector("#create-room-btn"),i=t.querySelector("#reload-btn");a&&a.addEventListener("click",()=>{B("ranked")}),s&&s.addEventListener("click",()=>{let r=t.querySelector("#create-room-modal");r.classList.remove("hidden"),r.classList.add("flex")}),i&&i.addEventListener("click",()=>{A(t)});let n=t.querySelector("#create-room-modal"),l=t.querySelector("#cancel-create"),d=t.querySelector("#create-room-form");l&&l.addEventListener("click",()=>{n.classList.add("hidden"),n.classList.remove("flex")}),n.addEventListener("click",r=>{r.target===n&&(n.classList.add("hidden"),n.classList.remove("flex"))}),d&&d.addEventListener("submit",r=>{r.preventDefault(),ee(t)})}};var T=class{container;canStart=!1;canvas=null;context=null;animationId=null;p1={x:20,y:260,width:8,height:80,vel_y:0};p2={x:872,y:260,width:8,height:80,vel_y:0};ball={x:450,y:300,width:8,height:8,vel_x:6,vel_y:4};p1Score=0;p2Score=0;constructor(e,a=!1){this.container=e,this.canStart=a,this.render(),this.setupCanvas(),this.setupEventListeners()}setCanStart(e){this.canStart=e,this.canStart?this.startGame():this.pauseGame()}updateGameState(e){if(!e){console.log("No game state provided.");return}e.player1&&(this.p1.x=e.player1.x,this.p1.y=e.player1.y,this.p1.width=e.player1.width,this.p1.height=e.player1.height,this.p1.vel_y=e.player1.vel_y),e.player2&&(this.p2.x=e.player2.x,this.p2.y=e.player2.y,this.p2.width=e.player2.width,this.p2.height=e.player2.height,this.p2.vel_y=e.player2.vel_y),e.ball&&(this.ball.x=e.ball.x,this.ball.y=e.ball.y,this.ball.width=e.ball.width,this.ball.height=e.ball.height,this.ball.vel_x=e.ball.vel_x,this.ball.vel_y=e.ball.vel_y),typeof e.p1Score=="number"&&(this.p1Score=e.p1Score),typeof e.p2Score=="number"&&(this.p2Score=e.p2Score),this.canStart||this.drawInitialState()}render(){this.container.innerHTML=`
			<div class="w-full flex justify-center">
				<canvas 
					id="game-canvas" 
					class="bg-black border-2 border-white"
					width="900" 
					height="600"
					style="image-rendering: pixelated; image-rendering: -moz-crisp-edges; image-rendering: crisp-edges;">
				</canvas>
			</div>
		`}setupCanvas(){this.canvas=this.container.querySelector("#game-canvas"),this.canvas&&(this.context=this.canvas.getContext("2d"),this.context&&(this.context.imageSmoothingEnabled=!1,this.drawInitialState()))}setupEventListeners(){window.addEventListener("keydown",this.movePlayer.bind(this)),window.addEventListener("keyup",this.stopPlayer.bind(this))}drawBackground(){this.context&&(this.context.fillStyle="#000000",this.context.fillRect(0,0,900,600),this.context.fillStyle="#FFFFFF",this.context.setLineDash([10,10]),this.context.beginPath(),this.context.moveTo(450,0),this.context.lineTo(450,600),this.context.strokeStyle="#FFFFFF",this.context.lineWidth=2,this.context.stroke(),this.context.setLineDash([]))}drawInitialState(){this.drawBackground(),this.context&&(this.context.fillStyle="#FFFFFF",this.context.fillRect(this.p1.x,this.p1.y,this.p1.width,this.p1.height),this.context.fillRect(this.p2.x,this.p2.y,this.p2.width,this.p2.height),this.context.fillRect(this.ball.x,this.ball.y,this.ball.width,this.ball.height),this.drawScore())}update=()=>{!this.canStart||!this.context||(this.animationId=requestAnimationFrame(this.update),this.drawBackground(),this.context.fillStyle="#FFFFFF",this.context.fillRect(this.p1.x,this.p1.y,this.p1.width,this.p1.height),this.context.fillRect(this.p2.x,this.p2.y,this.p2.width,this.p2.height),this.context.fillRect(this.ball.x,this.ball.y,this.ball.width,this.ball.height),this.drawScore())};drawScore(){this.context&&(this.context.fillStyle="#FFFFFF",this.context.font="bold 48px monospace",this.context.textAlign="center",this.context.fillText(this.p1Score.toString(),300,60),this.context.fillText(this.p2Score.toString(),600,60))}movePlayer=e=>{["KeyW","KeyS","ArrowUp","ArrowDown"].includes(e.code)&&u?.send(JSON.stringify({method:"move",type:"UP",key:e.code,roomId:localStorage.getItem("roomId"),clientId:localStorage.getItem("clientId")}))};stopPlayer=e=>{["KeyW","KeyS","ArrowUp","ArrowDown"].includes(e.code)&&u?.send(JSON.stringify({method:"move",type:"DOWN",key:e.code,roomId:localStorage.getItem("roomId"),clientId:localStorage.getItem("clientId")}))};startGame(){this.animationId||this.update()}pauseGame(){this.animationId&&(cancelAnimationFrame(this.animationId),this.animationId=null)}destroy(){this.pauseGame(),window.removeEventListener("keydown",this.movePlayer),window.removeEventListener("keyup",this.stopPlayer)}};var x=null,D={render(){return`
      <div class="flex-1 p-5 flex flex-col items-center justify-center bg-gray-900">
        <div id="game-container" class="mb-8">
          <!-- Game component will be mounted here -->
        </div>
        <div class="flex flex-col gap-4 items-center">
            <div class="text-white text-2xl">
            <p data-i18n="playerControls">Player : { W / S } keys & { \u2191 / \u2193 } keys</p>
            </div>
            </div>
            </div>
            `},mount(t){let e=localStorage.getItem("roomId"),a=localStorage.getItem("clientId"),s=!1,i=t.querySelector("#game-container");x=new T(i,s),x.setCanStart(s);let n={method:"ready",clientId:a,roomId:e,state:1};u&&u.send(JSON.stringify(n)),u&&(u.onmessage=d=>{let r=JSON.parse(d.data);if(r.method==="Start"&&(s=!0,x&&x.setCanStart(s)),r.method==="update"){let p=r.room;x&&p&&x.updateGameState(p)}r.method==="gameEnd"&&x&&x.destroy()}),x&&x.destroy();let l=d=>{console.log("Hash changed");let r={method:"leave",clientId:a};u&&u.send(JSON.stringify(r)),window.removeEventListener("hashchange",l)};window.addEventListener("hashchange",l)}};var v,L,G=function(t){let e={method:"tournaments",clientId:L};v&&v.send(JSON.stringify(e))};function te(t,e){let a=t.querySelector("#tournaments-container");a.innerHTML="",e.forEach(s=>{let i=document.createElement("button");i.className="tournament-btn px-6 py-3 border-2 border-black bg-white hover:bg-gray-100 transition-colors font-mono",i.dataset.tournamentId=s.tournamentId,i.innerHTML=`
			${s.tournamentName}<br>
			<span class="text-sm text-gray-600">${s.players}</span>
		`,i.addEventListener("click",()=>{O(s.tournamentId)}),a.appendChild(i)})}var ae=function(t){let e=t.querySelector("#tournament-name").value,a=t.querySelector("#game-point").value,s=t.querySelector("#game-mode").value,i={method:"createT",clientId:L,tournamentName:e,gamePoint:a,gameMode:s};v&&v.send(JSON.stringify(i));let n=t.querySelector("#create-tournament-modal");n.classList.add("hidden"),n.classList.remove("flex"),t.querySelector("#create-tournament-form").reset()},O=function(t){let e={method:"joinT",clientId:L,tournamentId:t};v&&v.send(JSON.stringify(e))},$={render(){return`
	<div class="max-w-6xl mx-auto p-6 space-y-6">

		<div class="bg-white border-2 border-black p-8">
			<div class="flex justify-center">
				<h1 data-i18n="tournament" class="text-2xl font-bold text-center">Tournament</h1>
			</div>
			<div class="text-center mb-8">
				<div class="flex justify-center space-x-4">
					<button id="create-tournament-btn" data-i18n="createTournament" class="px-8 py-3 border-2 border-black bg-white hover:bg-gray-100 transition-colors font-mono">
						+ Create a Tournament
					</button>
				</div>
				<p>
					Le mode <span class="font-bold">Tournament</span> vous permet de participer \xE0 des comp\xE9titions organis\xE9es entre plusieurs joueurs.<br>
					Cr\xE9ez ou rejoignez un tournoi pour affronter d'autres participants dans une s\xE9rie de matchs \xE0 \xE9limination ou en poule.<br>
					C'est l'occasion id\xE9ale de tester vos comp\xE9tences, de viser la victoire et de grimper dans le classement tout en profitant d'une ambiance comp\xE9titive et conviviale !
				</p>
			</div>
		</div>

		<!-- Available Tournament Section -->
		<div class="bg-white border-2 border-black p-6">
			<div class="flex justify-between items-center mb-6">
				<h2 data-i18n="availableTournament" class="text-2xl font-bold">Available Tournament</h2>
				<button id="reload-btn" class="px-4 py-2 border-2 border-black bg-white hover:bg-gray-100 transition-colors font-mono">
					\u{1F504} Reload
				</button>
			</div>
			<div class="flex flex-wrap gap-4" id="tournaments-container">
				
			</div>
		</div>
	</div>

	<!-- Modal Create Tournament -->
	<div id="create-tournament-modal" class="fixed inset-0 bg-black bg-opacity-50 hidden items-center justify-center z-50">
		<div class="bg-white border-4 border-black p-8 max-w-md w-full mx-4">
			<h3 data-i18n="createTournamentModal" class="text-2xl font-bold mb-6 text-center">Create a Tournament</h3>
			
			<form id="create-tournament-form" class="space-y-4">
				<div>
					<label data-i18n="tournamentName" class="block text-sm font-bold mb-2">Tournament Name:</label>
					<input 
						type="text" 
						id="tournament-name" 
						class="w-full px-3 py-2 border-2 border-black focus:outline-none focus:border-blue-500"
						placeholder="Enter Tournament name"
						required
					>
				</div>

				<div>
					<label data-i18n="numberOfPlayers" class="block text-sm font-bold mb-2">Number of Players:</label>
					<select id="player-count" class="w-full px-3 py-2 border-2 border-black focus:outline-none">
						<option value="8">8</option>
						<option value="4">4</option>
					</select>
				</div>
				
				<div>
					<label data-i18n="partyPoints" class="block text-sm font-bold mb-2">Party Point(s):</label>
					<select id="game-point" class="w-full px-3 py-2 border-2 border-black focus:outline-none">
						<option value="3">3</option>
						<option value="5">5</option>
						<option value="10">10</option>
						<option value="15">15</option>
					</select>
				</div>
				
				<div>
					<label data-i18n="gameMode" class="block text-sm font-bold mb-2">Game Mode:</label>
					<select id="game-mode" class="w-full px-3 py-2 border-2 border-black focus:outline-none">
						<option value="classic">Classic Pong</option>
						<option value="power-up">Power-up Mode</option>
					</select>
				</div>
				
				<div class="flex space-x-4 mt-6">
					<button 
						type="submit" 
						class="flex-1 bg-green-500 text-white py-2 px-4 border-2 border-black hover:bg-green-600 transition-colors font-bold">
						CREATE
					</button>
					<button 
						type="button" 
						id="cancel-create" 
						class="flex-1 bg-red-500 text-white py-2 px-4 border-2 border-black hover:bg-red-600 transition-colors font-bold">
						CANCEL
					</button>
				</div>
			</form>
		</div>
	</div>
		`},mount(t){let e;if(v===void 0){let d=window.location.host;v=new WebSocket(`wss://${d}/pong/ws`)}v.onmessage=d=>{let r=JSON.parse(d.data);r.method==="connect"&&(L=r.clientId,L!==void 0&&localStorage.setItem("clientId",L),G(t)),r.method==="create"&&(e=r.tournament.tournamentId,O(e)),r.method==="join"&&(r.status==="success"?(console.log(r.message),e=r.tournamentId,e!==void 0&&localStorage.setItem("tournamentId",e),window.location.hash=r.url):alert(r.message)),r.method==="tournaments"&&te(t,r.tournaments)};let a=t.querySelector("#create-tournament-btn"),s=t.querySelector("#reload-btn");a&&a.addEventListener("click",()=>{let d=t.querySelector("#create-tournament-modal");d.classList.remove("hidden"),d.classList.add("flex")}),s&&s.addEventListener("click",()=>{G(t)});let i=t.querySelector("#create-tournament-modal"),n=t.querySelector("#cancel-create"),l=t.querySelector("#create-tournament-form");n&&n.addEventListener("click",()=>{i.classList.add("hidden"),i.classList.remove("flex")}),i.addEventListener("click",d=>{d.target===i&&(i.classList.add("hidden"),i.classList.remove("flex"))}),l&&l.addEventListener("submit",d=>{d.preventDefault(),ae(t)})}};var z={render(){return`
			<div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white p-8">
				<!-- Header -->
				<div class="max-w-7xl mx-auto mb-8">
					<div class="flex items-center justify-center mb-8">
						<div class="w-32 h-1 bg-gradient-to-r from-transparent to-yellow-500"></div>
						<h1 data-i18n="tournamentHeader" class="text-5xl font-bold mx-4 text-yellow-400 tracking-wider">\u2694 TOURNAMENT \u2694</h1>
						<div class="w-32 h-1 bg-gradient-to-l from-transparent to-yellow-500"></div>
					</div>
				</div>

				<!-- Tournament Setup (visible initially) -->
				<div id="tournament-setup" class="max-w-2xl mx-auto bg-slate-800/80 backdrop-blur-sm rounded-lg p-8 shadow-2xl border-2 border-blue-500">
					<h2 data-i18n="setupTournament" class="text-3xl font-bold mb-6 text-center text-blue-300">Setup Tournament</h2>
					
					<!-- Player Input -->
					<div class="space-y-4 mb-6">
						<div class="flex gap-2">
							<input 
								type="text" 
								id="player-name-input" 
								data-i18n-placeholder="playerNameInput" placeholder="Enter player name"
								class="flex-1 px-4 py-3 bg-slate-700 border-2 border-slate-600 rounded-lg focus:border-blue-500 focus:outline-none text-white placeholder-slate-400"
							/>
							<button 
								id="add-player-btn"
								class="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all transform hover:scale-105 active:scale-95"
							>
								Add Player
							</button>
						</div>
						
						<!-- Player List -->
						<div id="player-list" class="space-y-2 max-h-64 overflow-y-auto">
							<!-- Players will be added here -->
						</div>
					</div>

					<!-- Start Button -->
					<button 
						id="start-tournament-btn"
						class="w-full py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 rounded-lg font-bold text-xl transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
						disabled
					>
						Start Tournament (Need at least 4 players)
					</button>
				</div>

				<!-- Tournament Bracket (hidden initially) -->
				<div id="tournament-bracket" class="hidden">
					<div class="max-w-7xl mx-auto">
						<!-- Bracket Container -->
						<div class="flex justify-center items-start gap-8 overflow-x-auto pb-8">
							<!-- Round 1: Quarter Finals -->
							<div class="flex flex-col gap-8">
								<div class="text-center mb-4">
									<h3 data-i18n="quarterFinals" class="text-2xl font-bold text-yellow-400">Quarter Finals</h3>
								</div>
								<div id="round-1" class="flex flex-col gap-16">
									<!-- Matches will be generated here -->
								</div>
							</div>

							<!-- Round 2: Semi Finals -->
							<div class="flex flex-col gap-8">
								<div class="text-center mb-4">
									<h3 data-i18n="semiFinals" class="text-2xl font-bold text-yellow-400">Semi Finals</h3>
								</div>
								<div id="round-2" class="flex flex-col gap-32">
									<!-- Matches will be generated here -->
								</div>
							</div>

							<!-- Round 3: Final -->
							<div class="flex flex-col gap-8">
								<div class="text-center mb-4">
									<h3 data-i18n="final" class="text-2xl font-bold text-yellow-400">Final</h3>
								</div>
								<div id="round-3" class="flex flex-col justify-center min-h-[400px]">
									<!-- Final match will be generated here -->
								</div>
							</div>

							<!-- Winner -->
							<div class="flex flex-col gap-8">
								<div class="text-center mb-4">
									<h3 data-i18n="winner" class="text-2xl font-bold text-yellow-400">\u{1F3C6} Winner \u{1F3C6}</h3>
								</div>
								<div id="winner-container" class="flex flex-col justify-center min-h-[400px]">
									<!-- Winner will be displayed here -->
								</div>
							</div>
						</div>

						<!-- Reset Button -->
						<div class="text-center mt-8">
							<button 
								id="reset-tournament-btn"
								class="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-all transform hover:scale-105 active:scale-95"
							>
								Reset Tournament
							</button>
						</div>
					</div>
				</div>
			</div>
		`},mount(t){let e=[],a=[],s=1,i=0,n=t.querySelector("#player-name-input"),l=t.querySelector("#add-player-btn"),d=t.querySelector("#player-list"),r=t.querySelector("#start-tournament-btn"),p=t.querySelector("#tournament-setup"),S=t.querySelector("#tournament-bracket"),J=t.querySelector("#reset-tournament-btn"),F=()=>{let o=n.value.trim();if(o&&e.length<8){let c={id:`player-${Date.now()}`,name:o};e.push(c),n.value="",k(),H()}};l.addEventListener("click",F),n.addEventListener("keypress",o=>{o.key==="Enter"&&F()});let k=()=>{d.innerHTML=e.map((o,c)=>`
				<div class="flex items-center justify-between bg-slate-700 p-3 rounded-lg">
					<span class="font-semibold">${c+1}. ${o.name}</span>
					<button 
						class="px-3 py-1 bg-red-500 hover:bg-red-600 rounded text-sm transition-colors"
						data-player-id="${o.id}"
					>
						Remove
					</button>
				</div>
			`).join(""),d.querySelectorAll("button[data-player-id]").forEach(o=>{o.addEventListener("click",c=>{let g=c.target.dataset.playerId,b=e.findIndex(E=>E.id===g);b!==-1&&(e.splice(b,1),k(),H())})})},H=()=>{e.length>=4&&[4,8].includes(e.length)?(r.disabled=!1,r.textContent=`Start Tournament with ${e.length} players`):e.length<4?(r.disabled=!0,r.textContent="Start Tournament (Need at least 4 players)"):(r.disabled=!0,r.textContent=`Need exactly 4 or 8 players (currently ${e.length})`)},U=(o,c)=>{let m=o.player1&&o.player2&&!o.winner;return`
				<div class="bg-slate-800/90 backdrop-blur-sm border-2 ${o.winner?"border-green-500":"border-slate-600"} rounded-lg p-4 w-64 shadow-xl">
					<!-- Player 1 -->
					<div class="flex items-center justify-between p-3 mb-2 rounded ${o.winner?.id===o.player1?.id?"bg-green-700":"bg-slate-700"} ${o.player1?"":"opacity-50"}">
						<span class="font-semibold">${o.player1?.name||"TBD"}</span>
						${o.winner?.id===o.player1?.id?'<span class="text-yellow-400">\u{1F451}</span>':""}
					</div>
					
					<div class="text-center text-slate-400 text-sm my-2">VS</div>
					
					<!-- Player 2 -->
					<div class="flex items-center justify-between p-3 mb-3 rounded ${o.winner?.id===o.player2?.id?"bg-green-700":"bg-slate-700"} ${o.player2?"":"opacity-50"}">
						<span class="font-semibold">${o.player2?.name||"TBD"}</span>
						${o.winner?.id===o.player2?.id?'<span class="text-yellow-400">\u{1F451}</span>':""}
					</div>
					
					<!-- Play/Result -->
					${m?`
						<div class="flex gap-2">
							<button 
								class="flex-1 py-2 bg-blue-600 hover:bg-blue-700 rounded font-semibold transition-colors text-sm select-winner-btn"
								data-match-id="${o.id}"
								data-winner-id="${o.player1?.id}"
							>
								${o.player1?.name} Wins
							</button>
						</div>
						<div class="flex gap-2 mt-2">
							<button 
								class="flex-1 py-2 bg-blue-600 hover:bg-blue-700 rounded font-semibold transition-colors text-sm select-winner-btn"
								data-match-id="${o.id}"
								data-winner-id="${o.player2?.id}"
							>
								${o.player2?.name} Wins
							</button>
						</div>
					`:o.winner?`
						<div class="text-center py-2 bg-green-600 rounded font-bold">
							Winner: ${o.winner.name}
						</div>
					`:`
						<div class="text-center py-2 bg-slate-600 rounded text-slate-400">
							Waiting...
						</div>
					`}
				</div>
			`},q=()=>{[1,2,3].forEach(c=>{let m=t.querySelector(`#round-${c}`);if(m){let g=a.filter(b=>b.round===c);m.innerHTML=g.map(b=>U(b,c)).join("")}}),t.querySelectorAll(".select-winner-btn").forEach(c=>{c.addEventListener("click",m=>{let g=m.target,b=g.dataset.matchId,E=g.dataset.winnerId;K(b,E)})}),V()},K=(o,c)=>{let m=a.find(b=>b.id===o);if(!m||m.winner)return;let g=[m.player1,m.player2].find(b=>b?.id===c);if(g){if(m.winner=g,m.round<3){let b=m.round+1,E=Math.floor(m.position/2),I=a.find(P=>P.round===b&&P.position===E);I&&(m.position%2===0?I.player1=g:I.player2=g)}q()}},V=()=>{let o=a.find(m=>m.round===3),c=t.querySelector("#winner-container");o?.winner?c.innerHTML=`
					<div class="bg-gradient-to-br from-yellow-600 to-yellow-700 border-4 border-yellow-400 rounded-lg p-8 text-center shadow-2xl transform scale-110">
						<div class="text-6xl mb-4">\u{1F3C6}</div>
						<div class="text-3xl font-bold mb-2">${o.winner.name}</div>
						<div class="text-lg text-yellow-200">Champion!</div>
					</div>
				`:c.innerHTML=`
					<div class="bg-slate-800 border-2 border-slate-600 rounded-lg p-8 text-center">
						<div class="text-4xl mb-4 opacity-50">\u{1F3C6}</div>
						<div class="text-slate-400">TBD</div>
					</div>
				`};r.addEventListener("click",()=>{if(e.length<4)return;let o=[...e].sort(()=>Math.random()-.5);if(a.length=0,i=0,o.length===4)for(let c=0;c<2;c++)a.push({id:`match-${i++}`,player1:o[c*2],player2:o[c*2+1],winner:null,round:2,position:c});else if(o.length===8){for(let c=0;c<4;c++)a.push({id:`match-${i++}`,player1:o[c*2],player2:o[c*2+1],winner:null,round:1,position:c});for(let c=0;c<2;c++)a.push({id:`match-${i++}`,player1:null,player2:null,winner:null,round:2,position:c})}a.push({id:`match-${i++}`,player1:null,player2:null,winner:null,round:3,position:0}),p.classList.add("hidden"),S.classList.remove("hidden"),q()}),J.addEventListener("click",()=>{e.length=0,a.length=0,s=1,k(),H(),p.classList.remove("hidden"),S.classList.add("hidden")})}};var ne={"/":C,"/stats":j,"/gameLoby":R,"/gameOnline":D,"/gameRoom":N,"/tournamentRoom":$,"/tournamentOnline":z,"/game":_},se=()=>{let t=window.location.hash.slice(1)||"/";return t.includes("?")&&(t=t.split("?")[0]),t};function W(){let t=document.getElementById("root"),e=async()=>{let a=se(),s=ne[a];if(s){let i=s.render(),n=f.render(i);t.innerHTML=n,f.mount(t);let l=localStorage.getItem("language")||"fr";await f.changeLanguage(t,l);let d=t.querySelector("#page-content");d&&s.mount(d)}else{let i=f.render('<h1 class="text-3xl text-red-500">404 - Page Not Found</h1>');t.innerHTML=i,f.mount(t)}};window.addEventListener("hashchange",e),window.addEventListener("load",e),e()}W();})();
