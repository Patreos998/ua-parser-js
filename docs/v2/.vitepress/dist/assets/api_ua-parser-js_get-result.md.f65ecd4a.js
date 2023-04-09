import{_ as s,c as a,o as n,N as l}from"./chunks/framework.eb892692.js";const D=JSON.parse('{"title":"getResult():IData","description":"","frontmatter":{},"headers":[],"relativePath":"api/ua-parser-js/get-result.md","lastUpdated":null}'),e={name:"api/ua-parser-js/get-result.md"},p=l(`<h1 id="getresult-idata" tabindex="-1">getResult():IData <a class="header-anchor" href="#getresult-idata" aria-label="Permalink to &quot;getResult():IData&quot;">​</a></h1><p>Get all information regarding browser, CPU, device, engine, &amp; OS from user-agent string.</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// Result object is structured as follow:</span></span>
<span class="line"><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">ua</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">browser</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">version</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">major</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">cpu</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">architecture</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">device</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">type</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">vendor</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">model</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">engine</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">version</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">os</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">version</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="ua-string" tabindex="-1"><code>ua:string</code> <a class="header-anchor" href="#ua-string" aria-label="Permalink to &quot;\`ua:string\`&quot;">​</a></h2><p>The user-agent string value of current instance.</p><h2 id="browser-idata" tabindex="-1"><a href="/ua-parser-js/docs/v2/api/ua-parser-js/get-browser.html"><code>browser:IData</code></a> <a class="header-anchor" href="#browser-idata" aria-label="Permalink to &quot;[\`browser:IData\`](/api/ua-parser-js/get-browser)&quot;">​</a></h2><p>Object that contains the value of browser name, full version, &amp; major version.</p><h2 id="cpu-idata" tabindex="-1"><a href="/ua-parser-js/docs/v2/api/ua-parser-js/get-cpu.html"><code>cpu:IData</code></a> <a class="header-anchor" href="#cpu-idata" aria-label="Permalink to &quot;[\`cpu:IData\`](/api/ua-parser-js/get-cpu)&quot;">​</a></h2><p>Object that contains the value of type of CPU architecture.</p><h2 id="device-idata" tabindex="-1"><a href="/ua-parser-js/docs/v2/api/ua-parser-js/get-device.html"><code>device:IData</code></a> <a class="header-anchor" href="#device-idata" aria-label="Permalink to &quot;[\`device:IData\`](/api/ua-parser-js/get-device)&quot;">​</a></h2><p>Object that contains the value of device details: type, vendor, model.</p><h2 id="engine-idata" tabindex="-1"><a href="/ua-parser-js/docs/v2/api/ua-parser-js/get-engine.html"><code>engine:IData</code></a> <a class="header-anchor" href="#engine-idata" aria-label="Permalink to &quot;[\`engine:IData\`](/api/ua-parser-js/get-engine)&quot;">​</a></h2><p>Object that contains the value of layout rendering engine name &amp; version.</p><h2 id="os-idata" tabindex="-1"><a href="/ua-parser-js/docs/v2/api/ua-parser-js/get-os.html"><code>os:IData</code></a> <a class="header-anchor" href="#os-idata" aria-label="Permalink to &quot;[\`os:IData\`](/api/ua-parser-js/get-os)&quot;">​</a></h2><p>Object that contains the value of operating system name &amp; version.</p><h2 id="code-example" tabindex="-1">Code Example <a class="header-anchor" href="#code-example" aria-label="Permalink to &quot;Code Example&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> galaxytabs8 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Mozilla/5.0 (Linux; Android 12; SM-X706B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.53 Safari/537.36</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> parser </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">UAParser</span><span style="color:#A6ACCD;">(galaxytabs8)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(parser</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getResult</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">{ </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    ua: &quot;Mozilla/5.0 (Linux; Android 12; SM-X706B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.53 Safari/537.36&quot;, </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    browser: { </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        name: &quot;Chrome&quot;, </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        version: &quot;103.0.5060.53&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        major: &quot;103&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    }, </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    cpu: {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        architecture: undefined</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    }, </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    device: {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        type: &quot;mobile&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        vendor: &quot;Huawei&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        model: &quot;SM-X706B&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    },</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    engine: {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        name: &quot;Blink&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        version: &quot;103.0.5060.53&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    }, </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    os: {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        name: &quot;Android&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        version: &quot;12&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div>`,17),o=[p];function t(r,c,i,y,F,u){return n(),a("div",null,o)}const d=s(e,[["render",t]]);export{D as __pageData,d as default};
