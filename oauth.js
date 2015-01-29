




<!DOCTYPE html>
<html lang="en" class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>oauth-js/oauth.js at master · oauth-io/oauth-js</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="oauth-io/oauth-js" name="twitter:title" /><meta content="oauth-js - OAuth that just works ! This is the JavaScript SDK for OAuth.io" name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/4701038?v=2&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/4701038?v=2&amp;s=400" property="og:image" /><meta content="oauth-io/oauth-js" property="og:title" /><meta content="https://github.com/oauth-io/oauth-js" property="og:url" /><meta content="oauth-js - OAuth that just works ! This is the JavaScript SDK for OAuth.io" property="og:description" />

    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="CC80C01F:6A3F:2B80A0F:53EAA0F5" name="octolytics-dimension-request_id" /><meta content="7516707" name="octolytics-actor-id" /><meta content="lowlight" name="octolytics-actor-login" /><meta content="9ca2453cd17e3063ca877f74bbd6d7ee24d53c77414d78464731a55f503edb1b" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="nqZlSjW2rC3HVbF2CLbDUbyL1UJd7tuHe/qxkR9S4Yh3OwfKvLGT0X5cyi430/U1XidPixQ65V7arxYfBZxLUw==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-013db558b75ed8e45b8a7ccd0caca4ad57c6f1ac.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-c9b5fd6520f5ab77dd823b1b2c81ff9c461b1374.css" media="all" rel="stylesheet" type="text/css" />
    


    <meta http-equiv="x-pjax-version" content="02b35f5d8a0eef0fb5eae58978690905">

      
  <meta name="description" content="oauth-js - OAuth that just works ! This is the JavaScript SDK for OAuth.io">


  <meta content="4701038" name="octolytics-dimension-user_id" /><meta content="oauth-io" name="octolytics-dimension-user_login" /><meta content="10697956" name="octolytics-dimension-repository_id" /><meta content="oauth-io/oauth-js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="10697956" name="octolytics-dimension-repository_network_root_id" /><meta content="oauth-io/oauth-js" name="octolytics-dimension-repository_network_root_nwo" />

  <link href="https://github.com/oauth-io/oauth-js/commits/master.atom" rel="alternate" title="Recent Commits to oauth-js:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production macintosh vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" aria-label="Homepage">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


    
    <a href="/notifications" aria-label="You have no unread notifications" class="notification-indicator tooltipped tooltipped-s" data-hotkey="g n">
        <span class="mail-status all-read"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey="s, /" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="lowlight"
    data-repo="oauth-io/oauth-js"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="oauth-io/oauth-js">

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked">
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global">
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    

<ul id="user-links">
  <li>
    <a href="/lowlight" class="name">
      <img alt="Josha" data-user="7516707" height="20" src="https://avatars1.githubusercontent.com/u/7516707?v=2&amp;s=40" width="20" /> lowlight
    </a>
  </li>

  <li class="new-menu dropdown-toggle js-menu-container">
    <a href="#" class="js-menu-target tooltipped tooltipped-s" aria-label="Create new...">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-arrow"></span>
    </a>

    <div class="new-menu-content js-menu-content">
    </div>
  </li>

  <li>
    <a href="/settings/profile" id="account_settings"
      class="tooltipped tooltipped-s"
      aria-label="Account settings ">
      <span class="octicon octicon-tools"></span>
    </a>
  </li>
  <li>
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="lrWpKWrwUu0vIlWQL0PhwsKOHJo/Y/+nuL0onPwoL61ZIQWg2elHB4YTAtKlJs+e5Wk1AqEGSELXPMVG06e3Jg==" /></div>
      <button class="sign-out-button tooltipped tooltipped-s" aria-label="Sign out">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="https://porter.github.com/new"><span class="octicon octicon-move-right"></span> Import repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="section-title">
      <span title="oauth-io/oauth-js">This repository</span>
    </li>
      <li>
        <a href="/oauth-io/oauth-js/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

        



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="yAK+WfYdl+czwJHFLcluuu/7znBi1SQoxZibojleq126tl3S6jRhzWqg6i2uQXkAis78cbdRzbJQ5dlYoiPI8A==" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="10697956" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/oauth-io/oauth-js/watchers">
        28
      </a>
      <a href="/oauth-io/oauth-js/subscription"
        class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye"></span>
          Watch
        </span>
      </a>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
            <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">Be notified when participating or @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">Be notified of all conversations.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">Never be notified.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
    

  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/oauth-io/oauth-js/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="7cjsajYuvePlb1NfmO5ctLPrvwSQETFemM4alAHaejowsiIirLPSIooXr+RZMn8nbfWEYf1IUQrEIdRu/UP+lg==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Unstar this repository" title="Unstar oauth-io/oauth-js">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/oauth-io/oauth-js/stargazers">
          447
        </a>
</form>
    <form accept-charset="UTF-8" action="/oauth-io/oauth-js/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="HDWZatq8e9oJo+0IvFd+jV5LNpL98q8s4a3rJrEwqFXZps0Rw00Icsc6eOEw8+u/Fh7E1R3pzqwTREp+/jmBZg==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Star this repository" title="Star oauth-io/oauth-js">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/oauth-io/oauth-js/stargazers">
          447
        </a>
</form>  </div>

  </li>


        <li>
          <a href="/oauth-io/oauth-js/fork" class="minibutton with-count js-toggler-target fork-button lighter tooltipped-n" title="Fork your own copy of oauth-io/oauth-js to your account" aria-label="Fork your own copy of oauth-io/oauth-js to your account" rel="nofollow" data-method="post">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="/oauth-io/oauth-js/network" class="social-count">71</a>
        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/oauth-io" class="url fn" itemprop="url" rel="author"><span itemprop="title">oauth-io</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/oauth-io/oauth-js" class="js-current-repository js-repo-home-link">oauth-js</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders" data-issue-count-url="/oauth-io/oauth-js/issues/counts">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/oauth-io/oauth-js" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /oauth-io/oauth-js">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/oauth-io/oauth-js/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /oauth-io/oauth-js/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class="js-issue-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/oauth-io/oauth-js/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /oauth-io/oauth-js/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class="js-pull-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped tooltipped-w" aria-label="Wiki">
          <a href="/oauth-io/oauth-js/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g w" data-selected-links="repo_wiki /oauth-io/oauth-js/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/oauth-io/oauth-js/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /oauth-io/oauth-js/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/oauth-io/oauth-js/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /oauth-io/oauth-js/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/oauth-io/oauth-js.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/oauth-io/oauth-js.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="git@github.com:oauth-io/oauth-js.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="git@github.com:oauth-io/oauth-js.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/oauth-io/oauth-js" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/oauth-io/oauth-js" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>

  <a href="http://mac.github.com" data-url="github-mac://openRepo/https://github.com/oauth-io/oauth-js" class="minibutton sidebar-button js-conduit-rewrite-url" title="Save oauth-io/oauth-js to your computer and use it in GitHub Desktop." aria-label="Save oauth-io/oauth-js to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                <a href="/oauth-io/oauth-js/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download oauth-io/oauth-js as a zip file"
                   title="Download oauth-io/oauth-js as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<a href="/oauth-io/oauth-js/blob/d3a5cc38418e8e78d637e4072712b25360476663/dist/oauth.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:86e32b397ec196f830606c2dd087325a -->

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/oauth-io/oauth-js/blob/develop/dist/oauth.js"
                 data-name="develop"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="develop">develop</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/oauth-io/oauth-js/blob/gh-pages/dist/oauth.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/oauth-io/oauth-js/blob/master/dist/oauth.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/oauth-io/oauth-js/tree/v0.9/dist/oauth.js"
                 data-name="v0.9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.9">v0.9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/oauth-io/oauth-js/tree/0.2.4/dist/oauth.js"
                 data-name="0.2.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.2.4">0.2.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/oauth-io/oauth-js/tree/0.2.3/dist/oauth.js"
                 data-name="0.2.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.2.3">0.2.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/oauth-io/oauth-js/tree/0.2.2/dist/oauth.js"
                 data-name="0.2.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.2.2">0.2.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/oauth-io/oauth-js/tree/0.2.1/dist/oauth.js"
                 data-name="0.2.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.2.1">0.2.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/oauth-io/oauth-js/tree/0.2.0/dist/oauth.js"
                 data-name="0.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.2.0">0.2.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/oauth-io/oauth-js/tree/0.1.7/dist/oauth.js"
                 data-name="0.1.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.1.7">0.1.7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/oauth-io/oauth-js/tree/0.1.6/dist/oauth.js"
                 data-name="0.1.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.1.6">0.1.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/oauth-io/oauth-js/tree/0.1.5/dist/oauth.js"
                 data-name="0.1.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.1.5">0.1.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/oauth-io/oauth-js/tree/0.1.4/dist/oauth.js"
                 data-name="0.1.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.1.4">0.1.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/oauth-io/oauth-js/tree/0.1.3/dist/oauth.js"
                 data-name="0.1.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.1.3">0.1.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/oauth-io/oauth-js/tree/0.1.2/dist/oauth.js"
                 data-name="0.1.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.1.2">0.1.2</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/oauth-io/oauth-js/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button class="js-zeroclipboard minibutton zeroclipboard-button"
          data-clipboard-text="dist/oauth.js"
          aria-label="Copy to clipboard"
          data-copied-hint="Copied!">
      <span class="octicon octicon-clippy"></span>
    </button>
  </div>

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/oauth-io/oauth-js" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">oauth-js</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/oauth-io/oauth-js/tree/master/dist" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">dist</span></a></span><span class="separator"> / </span><strong class="final-path">oauth.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
      <img alt="Antoine Jackson" class="main-avatar" data-user="1763202" height="24" src="https://avatars1.githubusercontent.com/u/1763202?v=2&amp;s=48" width="24" />
      <span class="author"><a href="/william26" rel="contributor">william26</a></span>
      <time datetime="2014-08-07T17:04:53+02:00" is="relative-time">August 07, 2014</time>
      <div class="commit-title">
          <a href="/oauth-io/oauth-js/commit/9c107d122c37ab9ba7c5214c270aece7799211b5" class="message" data-pjax="true" title="Fixed typo in code">Fixed typo in code</a>
      </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong>  contributor</a></p>
      

    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Antoine Jackson" data-user="1763202" height="24" src="https://avatars1.githubusercontent.com/u/1763202?v=2&amp;s=48" width="24" />
            <a href="/william26">william26</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
          <span>1217 lines (1191 sloc)</span>
          <span class="meta-divider"></span>
        <span>39.883 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
          <a href="/oauth-io/oauth-js/raw/master/dist/oauth.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/oauth-io/oauth-js/blame/master/dist/oauth.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/oauth-io/oauth-js/commits/master/dist/oauth.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

          <a class="octicon-button tooltipped tooltipped-nw js-conduit-openfile-check"
             href="http://mac.github.com"
             data-url="github-mac://openRepo/https://github.com/oauth-io/oauth-js?branch=master&amp;filepath=dist%2Foauth.js"
             aria-label="Open this file in GitHub for Mac"
             data-failed-title="Your version of GitHub for Mac is too old to open this file. Try checking for updates.">
              <span class="octicon octicon-device-desktop"></span>
          </a>

              <a class="octicon-button tooltipped tooltipped-n js-update-url-with-hash"
                 aria-label="Clicking this button will fork this project so you can edit the file"
                 href="/oauth-io/oauth-js/edit/master/dist/oauth.js"
                 data-method="post" rel="nofollow"><span class="octicon octicon-pencil"></span></a>

            <a class="octicon-button danger tooltipped tooltipped-s"
               href="/oauth-io/oauth-js/delete/master/dist/oauth.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">
          <span class="octicon octicon-trashcan"></span>
        </a>
      </div><!-- /.actions -->
    </div>
      
  <div class="blob-wrapper data type-javascript">
      
<table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-line-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-line-code js-file-line"><span class="p">(</span><span class="kd">function</span> <span class="nx">e</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">n</span><span class="p">,</span><span class="nx">r</span><span class="p">){</span><span class="kd">function</span> <span class="nx">s</span><span class="p">(</span><span class="nx">o</span><span class="p">,</span><span class="nx">u</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">n</span><span class="p">[</span><span class="nx">o</span><span class="p">]){</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">t</span><span class="p">[</span><span class="nx">o</span><span class="p">]){</span><span class="kd">var</span> <span class="nx">a</span><span class="o">=</span><span class="k">typeof</span> <span class="nx">require</span><span class="o">==</span><span class="s2">&quot;function&quot;</span><span class="o">&amp;&amp;</span><span class="nx">require</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">u</span><span class="o">&amp;&amp;</span><span class="nx">a</span><span class="p">)</span><span class="k">return</span> <span class="nx">a</span><span class="p">(</span><span class="nx">o</span><span class="p">,</span><span class="o">!</span><span class="mi">0</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span><span class="k">return</span> <span class="nx">i</span><span class="p">(</span><span class="nx">o</span><span class="p">,</span><span class="o">!</span><span class="mi">0</span><span class="p">);</span><span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s2">&quot;Cannot find module &#39;&quot;</span><span class="o">+</span><span class="nx">o</span><span class="o">+</span><span class="s2">&quot;&#39;&quot;</span><span class="p">)}</span><span class="kd">var</span> <span class="nx">f</span><span class="o">=</span><span class="nx">n</span><span class="p">[</span><span class="nx">o</span><span class="p">]</span><span class="o">=</span><span class="p">{</span><span class="nx">exports</span><span class="o">:</span><span class="p">{}};</span><span class="nx">t</span><span class="p">[</span><span class="nx">o</span><span class="p">][</span><span class="mi">0</span><span class="p">].</span><span class="nx">call</span><span class="p">(</span><span class="nx">f</span><span class="p">.</span><span class="nx">exports</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">){</span><span class="kd">var</span> <span class="nx">n</span><span class="o">=</span><span class="nx">t</span><span class="p">[</span><span class="nx">o</span><span class="p">][</span><span class="mi">1</span><span class="p">][</span><span class="nx">e</span><span class="p">];</span><span class="k">return</span> <span class="nx">s</span><span class="p">(</span><span class="nx">n</span><span class="o">?</span><span class="nx">n</span><span class="o">:</span><span class="nx">e</span><span class="p">)},</span><span class="nx">f</span><span class="p">,</span><span class="nx">f</span><span class="p">.</span><span class="nx">exports</span><span class="p">,</span><span class="nx">e</span><span class="p">,</span><span class="nx">t</span><span class="p">,</span><span class="nx">n</span><span class="p">,</span><span class="nx">r</span><span class="p">)}</span><span class="k">return</span> <span class="nx">n</span><span class="p">[</span><span class="nx">o</span><span class="p">].</span><span class="nx">exports</span><span class="p">}</span><span class="kd">var</span> <span class="nx">i</span><span class="o">=</span><span class="k">typeof</span> <span class="nx">require</span><span class="o">==</span><span class="s2">&quot;function&quot;</span><span class="o">&amp;&amp;</span><span class="nx">require</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">o</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">o</span><span class="o">&lt;</span><span class="nx">r</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="nx">o</span><span class="o">++</span><span class="p">)</span><span class="nx">s</span><span class="p">(</span><span class="nx">r</span><span class="p">[</span><span class="nx">o</span><span class="p">]);</span><span class="k">return</span> <span class="nx">s</span><span class="p">})({</span><span class="mi">1</span><span class="o">:</span><span class="p">[</span><span class="kd">function</span><span class="p">(</span><span class="nx">require</span><span class="p">,</span><span class="nx">module</span><span class="p">,</span><span class="nx">exports</span><span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-line-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-line-code js-file-line"><span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-line-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-line-code js-file-line">  <span class="nx">oauthd_url</span><span class="o">:</span> <span class="s2">&quot;https://oauth.io&quot;</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-line-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-line-code js-file-line">  <span class="nx">oauthd_api</span><span class="o">:</span> <span class="s2">&quot;https://oauth.io/api&quot;</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-line-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-line-code js-file-line">  <span class="nx">version</span><span class="o">:</span> <span class="s2">&quot;web-0.2.4&quot;</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-line-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-line-code js-file-line">  <span class="nx">options</span><span class="o">:</span> <span class="p">{}</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-line-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-line-code js-file-line"><span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-line-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L9" class="blob-line-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-line-code js-file-line"><span class="p">},{}],</span><span class="mi">2</span><span class="o">:</span><span class="p">[</span><span class="kd">function</span><span class="p">(</span><span class="nx">require</span><span class="p">,</span><span class="nx">module</span><span class="p">,</span><span class="nx">exports</span><span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-line-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-line-code js-file-line"><span class="s2">&quot;use strict&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-line-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-line-code js-file-line"><span class="kd">var</span> <span class="nx">Url</span><span class="p">,</span> <span class="nx">cache</span><span class="p">,</span> <span class="nx">config</span><span class="p">,</span> <span class="nx">cookies</span><span class="p">,</span> <span class="nx">sha1</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-line-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L13" class="blob-line-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-line-code js-file-line"><span class="nx">config</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s2">&quot;../config&quot;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-line-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L15" class="blob-line-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-line-code js-file-line"><span class="nx">cookies</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s2">&quot;../tools/cookies&quot;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-line-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L17" class="blob-line-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-line-code js-file-line"><span class="nx">cache</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s2">&quot;../tools/cache&quot;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-line-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L19" class="blob-line-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-line-code js-file-line"><span class="nx">Url</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s2">&quot;../tools/url&quot;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-line-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L21" class="blob-line-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-line-code js-file-line"><span class="nx">sha1</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s2">&quot;../tools/sha1&quot;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L22" class="blob-line-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L23" class="blob-line-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-line-code js-file-line"><span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nb">window</span><span class="p">,</span> <span class="nb">document</span><span class="p">,</span> <span class="nx">jQuery</span><span class="p">,</span> <span class="nx">navigator</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L24" class="blob-line-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-line-code js-file-line">  <span class="kd">var</span> <span class="nx">$</span><span class="p">,</span> <span class="nx">client_states</span><span class="p">,</span> <span class="nx">oauth_result</span><span class="p">,</span> <span class="nx">oauthio</span><span class="p">,</span> <span class="nx">parse_urlfragment</span><span class="p">,</span> <span class="nx">providers_api</span><span class="p">,</span> <span class="nx">providers_cb</span><span class="p">,</span> <span class="nx">providers_desc</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L25" class="blob-line-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-line-code js-file-line">  <span class="nx">$</span> <span class="o">=</span> <span class="nx">jQuery</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L26" class="blob-line-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-line-code js-file-line">  <span class="nx">Url</span> <span class="o">=</span> <span class="nx">Url</span><span class="p">(</span><span class="nb">document</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L27" class="blob-line-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-line-code js-file-line">  <span class="nx">cookies</span><span class="p">.</span><span class="nx">init</span><span class="p">(</span><span class="nx">config</span><span class="p">,</span> <span class="nb">document</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L28" class="blob-line-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-line-code js-file-line">  <span class="nx">cache</span><span class="p">.</span><span class="nx">init</span><span class="p">(</span><span class="nx">cookies</span><span class="p">,</span> <span class="nx">config</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L29" class="blob-line-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-line-code js-file-line">  <span class="nx">oauthio</span> <span class="o">=</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L30" class="blob-line-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-line-code js-file-line">    <span class="nx">request</span><span class="o">:</span> <span class="p">{}</span></td>
      </tr>
      <tr>
        <td id="L31" class="blob-line-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-line-code js-file-line">  <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L32" class="blob-line-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-line-code js-file-line">  <span class="nx">providers_desc</span> <span class="o">=</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L33" class="blob-line-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-line-code js-file-line">  <span class="nx">providers_cb</span> <span class="o">=</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L34" class="blob-line-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-line-code js-file-line">  <span class="nx">providers_api</span> <span class="o">=</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L35" class="blob-line-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-line-code js-file-line">    <span class="nx">execProvidersCb</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">provider</span><span class="p">,</span> <span class="nx">e</span><span class="p">,</span> <span class="nx">r</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L36" class="blob-line-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-line-code js-file-line">      <span class="kd">var</span> <span class="nx">cbs</span><span class="p">,</span> <span class="nx">i</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L37" class="blob-line-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-line-code js-file-line">      <span class="k">if</span> <span class="p">(</span><span class="nx">providers_cb</span><span class="p">[</span><span class="nx">provider</span><span class="p">])</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L38" class="blob-line-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-line-code js-file-line">        <span class="nx">cbs</span> <span class="o">=</span> <span class="nx">providers_cb</span><span class="p">[</span><span class="nx">provider</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L39" class="blob-line-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-line-code js-file-line">        <span class="k">delete</span> <span class="nx">providers_cb</span><span class="p">[</span><span class="nx">provider</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L40" class="blob-line-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-line-code js-file-line">        <span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="k">in</span> <span class="nx">cbs</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L41" class="blob-line-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-line-code js-file-line">          <span class="nx">cbs</span><span class="p">[</span><span class="nx">i</span><span class="p">](</span><span class="nx">e</span><span class="p">,</span> <span class="nx">r</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L42" class="blob-line-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L43" class="blob-line-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L44" class="blob-line-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-line-code js-file-line">    <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L45" class="blob-line-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-line-code js-file-line">    <span class="nx">getDescription</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">provider</span><span class="p">,</span> <span class="nx">opts</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L46" class="blob-line-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-line-code js-file-line">      <span class="nx">opts</span> <span class="o">=</span> <span class="nx">opts</span> <span class="o">||</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L47" class="blob-line-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-line-code js-file-line">      <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">providers_desc</span><span class="p">[</span><span class="nx">provider</span><span class="p">]</span> <span class="o">===</span> <span class="s2">&quot;object&quot;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L48" class="blob-line-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-line-code js-file-line">        <span class="k">return</span> <span class="nx">callback</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span> <span class="nx">providers_desc</span><span class="p">[</span><span class="nx">provider</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L49" class="blob-line-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L50" class="blob-line-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-line-code js-file-line">      <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">providers_desc</span><span class="p">[</span><span class="nx">provider</span><span class="p">])</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L51" class="blob-line-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-line-code js-file-line">        <span class="nx">providers_api</span><span class="p">.</span><span class="nx">fetchDescription</span><span class="p">(</span><span class="nx">provider</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L52" class="blob-line-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L53" class="blob-line-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-line-code js-file-line">      <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">opts</span><span class="p">.</span><span class="nx">wait</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L54" class="blob-line-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-line-code js-file-line">        <span class="k">return</span> <span class="nx">callback</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span> <span class="p">{});</span></td>
      </tr>
      <tr>
        <td id="L55" class="blob-line-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L56" class="blob-line-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-line-code js-file-line">      <span class="nx">providers_cb</span><span class="p">[</span><span class="nx">provider</span><span class="p">]</span> <span class="o">=</span> <span class="nx">providers_cb</span><span class="p">[</span><span class="nx">provider</span><span class="p">]</span> <span class="o">||</span> <span class="p">[];</span></td>
      </tr>
      <tr>
        <td id="L57" class="blob-line-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-line-code js-file-line">      <span class="nx">providers_cb</span><span class="p">[</span><span class="nx">provider</span><span class="p">].</span><span class="nx">push</span><span class="p">(</span><span class="nx">callback</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L58" class="blob-line-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-line-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L59" class="blob-line-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-line-code js-file-line">  <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L60" class="blob-line-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-line-code js-file-line">  <span class="nx">config</span><span class="p">.</span><span class="nx">oauthd_base</span> <span class="o">=</span> <span class="nx">Url</span><span class="p">.</span><span class="nx">getAbsUrl</span><span class="p">(</span><span class="nx">config</span><span class="p">.</span><span class="nx">oauthd_url</span><span class="p">).</span><span class="nx">match</span><span class="p">(</span><span class="sr">/^.{2,5}:\/\/[^/]+/</span><span class="p">)[</span><span class="mi">0</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L61" class="blob-line-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-line-code js-file-line">  <span class="nx">client_states</span> <span class="o">=</span> <span class="p">[];</span></td>
      </tr>
      <tr>
        <td id="L62" class="blob-line-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-line-code js-file-line">  <span class="nx">oauth_result</span> <span class="o">=</span> <span class="k">void</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L63" class="blob-line-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-line-code js-file-line">  <span class="p">(</span><span class="nx">parse_urlfragment</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L64" class="blob-line-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-line-code js-file-line">    <span class="kd">var</span> <span class="nx">cookie_state</span><span class="p">,</span> <span class="nx">results</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L65" class="blob-line-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-line-code js-file-line">    <span class="nx">results</span> <span class="o">=</span> <span class="sr">/[\\#&amp;]oauthio=([^&amp;]*)/</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">hash</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L66" class="blob-line-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-line-code js-file-line">    <span class="k">if</span> <span class="p">(</span><span class="nx">results</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L67" class="blob-line-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-line-code js-file-line">      <span class="nb">document</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">hash</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">hash</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&amp;?oauthio=[^&amp;]*/</span><span class="p">,</span> <span class="s2">&quot;&quot;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L68" class="blob-line-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-line-code js-file-line">      <span class="nx">oauth_result</span> <span class="o">=</span> <span class="nb">decodeURIComponent</span><span class="p">(</span><span class="nx">results</span><span class="p">[</span><span class="mi">1</span><span class="p">].</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\+/g</span><span class="p">,</span> <span class="s2">&quot; &quot;</span><span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L69" class="blob-line-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-line-code js-file-line">      <span class="nx">cookie_state</span> <span class="o">=</span> <span class="nx">cookies</span><span class="p">.</span><span class="nx">readCookie</span><span class="p">(</span><span class="s2">&quot;oauthio_state&quot;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L70" class="blob-line-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-line-code js-file-line">      <span class="k">if</span> <span class="p">(</span><span class="nx">cookie_state</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L71" class="blob-line-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-line-code js-file-line">        <span class="nx">client_states</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">cookie_state</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L72" class="blob-line-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-line-code js-file-line">        <span class="nx">cookies</span><span class="p">.</span><span class="nx">eraseCookie</span><span class="p">(</span><span class="s2">&quot;oauthio_state&quot;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L73" class="blob-line-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L74" class="blob-line-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-line-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L75" class="blob-line-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-line-code js-file-line">  <span class="p">})();</span></td>
      </tr>
      <tr>
        <td id="L76" class="blob-line-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-line-code js-file-line">  <span class="nb">window</span><span class="p">.</span><span class="nx">location_operations</span> <span class="o">=</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L77" class="blob-line-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-line-code js-file-line">    <span class="nx">reload</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L78" class="blob-line-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-line-code js-file-line">      <span class="k">return</span> <span class="nb">document</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">reload</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L79" class="blob-line-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-line-code js-file-line">    <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L80" class="blob-line-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-line-code js-file-line">    <span class="nx">getHash</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L81" class="blob-line-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-line-code js-file-line">      <span class="k">return</span> <span class="nb">document</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">hash</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L82" class="blob-line-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-line-code js-file-line">    <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L83" class="blob-line-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-line-code js-file-line">    <span class="nx">setHash</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">newHash</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L84" class="blob-line-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-line-code js-file-line">      <span class="k">return</span> <span class="nb">document</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">hash</span> <span class="o">=</span> <span class="nx">newHash</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L85" class="blob-line-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-line-code js-file-line">    <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L86" class="blob-line-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-line-code js-file-line">    <span class="nx">changeHref</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">newLocation</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L87" class="blob-line-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-line-code js-file-line">      <span class="k">return</span> <span class="nb">document</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">href</span> <span class="o">=</span> <span class="nx">newLocation</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L88" class="blob-line-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-line-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L89" class="blob-line-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-line-code js-file-line">  <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L90" class="blob-line-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-line-code js-file-line">  <span class="k">return</span> <span class="kd">function</span><span class="p">(</span><span class="nx">exports</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L91" class="blob-line-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-line-code js-file-line">    <span class="kd">var</span> <span class="nx">delayedFunctions</span><span class="p">,</span> <span class="nx">delayfn</span><span class="p">,</span> <span class="nx">e</span><span class="p">,</span> <span class="nx">_preloadcalls</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L92" class="blob-line-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-line-code js-file-line">    <span class="nx">delayedFunctions</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">$</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L93" class="blob-line-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-line-code js-file-line">      <span class="nx">oauthio</span><span class="p">.</span><span class="nx">request</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s2">&quot;./oauthio_requests&quot;</span><span class="p">)(</span><span class="nx">$</span><span class="p">,</span> <span class="nx">config</span><span class="p">,</span> <span class="nx">client_states</span><span class="p">,</span> <span class="nx">cache</span><span class="p">,</span> <span class="nx">providers_api</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L94" class="blob-line-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-line-code js-file-line">      <span class="nx">providers_api</span><span class="p">.</span><span class="nx">fetchDescription</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">provider</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L95" class="blob-line-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-line-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="nx">providers_desc</span><span class="p">[</span><span class="nx">provider</span><span class="p">])</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L96" class="blob-line-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-line-code js-file-line">          <span class="k">return</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L97" class="blob-line-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L98" class="blob-line-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-line-code js-file-line">        <span class="nx">providers_desc</span><span class="p">[</span><span class="nx">provider</span><span class="p">]</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L99" class="blob-line-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-line-code js-file-line">        <span class="nx">$</span><span class="p">.</span><span class="nx">ajax</span><span class="p">({</span></td>
      </tr>
      <tr>
        <td id="L100" class="blob-line-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-line-code js-file-line">          <span class="nx">url</span><span class="o">:</span> <span class="nx">config</span><span class="p">.</span><span class="nx">oauthd_api</span> <span class="o">+</span> <span class="s2">&quot;/providers/&quot;</span> <span class="o">+</span> <span class="nx">provider</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L101" class="blob-line-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-line-code js-file-line">          <span class="nx">data</span><span class="o">:</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L102" class="blob-line-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-line-code js-file-line">            <span class="nx">extend</span><span class="o">:</span> <span class="kc">true</span></td>
      </tr>
      <tr>
        <td id="L103" class="blob-line-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-line-code js-file-line">          <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L104" class="blob-line-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-line-code js-file-line">          <span class="nx">dataType</span><span class="o">:</span> <span class="s2">&quot;json&quot;</span></td>
      </tr>
      <tr>
        <td id="L105" class="blob-line-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-line-code js-file-line">        <span class="p">}).</span><span class="nx">done</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L106" class="blob-line-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-line-code js-file-line">          <span class="nx">providers_desc</span><span class="p">[</span><span class="nx">provider</span><span class="p">]</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">data</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L107" class="blob-line-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-line-code js-file-line">          <span class="nx">providers_api</span><span class="p">.</span><span class="nx">execProvidersCb</span><span class="p">(</span><span class="nx">provider</span><span class="p">,</span> <span class="kc">null</span><span class="p">,</span> <span class="nx">data</span><span class="p">.</span><span class="nx">data</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L108" class="blob-line-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-line-code js-file-line">        <span class="p">}).</span><span class="nx">always</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L109" class="blob-line-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">providers_desc</span><span class="p">[</span><span class="nx">provider</span><span class="p">]</span> <span class="o">!==</span> <span class="s2">&quot;object&quot;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L110" class="blob-line-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-line-code js-file-line">            <span class="k">delete</span> <span class="nx">providers_desc</span><span class="p">[</span><span class="nx">provider</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L111" class="blob-line-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-line-code js-file-line">            <span class="nx">providers_api</span><span class="p">.</span><span class="nx">execProvidersCb</span><span class="p">(</span><span class="nx">provider</span><span class="p">,</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s2">&quot;Unable to fetch request description&quot;</span><span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L112" class="blob-line-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L113" class="blob-line-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-line-code js-file-line">        <span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L114" class="blob-line-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-line-code js-file-line">      <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L115" class="blob-line-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-line-code js-file-line">    <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L116" class="blob-line-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-line-code js-file-line">    <span class="k">if</span> <span class="p">(</span><span class="nx">exports</span><span class="p">.</span><span class="nx">OAuth</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L117" class="blob-line-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-line-code js-file-line">      <span class="nx">exports</span><span class="p">.</span><span class="nx">OAuth</span> <span class="o">=</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L118" class="blob-line-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-line-code js-file-line">        <span class="nx">initialize</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">public_key</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L119" class="blob-line-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-line-code js-file-line">          <span class="kd">var</span> <span class="nx">i</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L120" class="blob-line-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-line-code js-file-line">          <span class="nx">config</span><span class="p">.</span><span class="nx">key</span> <span class="o">=</span> <span class="nx">public_key</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L121" class="blob-line-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L122" class="blob-line-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-line-code js-file-line">            <span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="k">in</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L123" class="blob-line-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-line-code js-file-line">              <span class="nx">config</span><span class="p">.</span><span class="nx">options</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">options</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L124" class="blob-line-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L125" class="blob-line-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L126" class="blob-line-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-line-code js-file-line">        <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L127" class="blob-line-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-line-code js-file-line">        <span class="nx">setOAuthdURL</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">url</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L128" class="blob-line-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-line-code js-file-line">          <span class="nx">config</span><span class="p">.</span><span class="nx">oauthd_url</span> <span class="o">=</span> <span class="nx">url</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L129" class="blob-line-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-line-code js-file-line">          <span class="nx">config</span><span class="p">.</span><span class="nx">oauthd_base</span> <span class="o">=</span> <span class="nx">Url</span><span class="p">.</span><span class="nx">getAbsUrl</span><span class="p">(</span><span class="nx">config</span><span class="p">.</span><span class="nx">oauthd_url</span><span class="p">).</span><span class="nx">match</span><span class="p">(</span><span class="sr">/^.{2,5}:\/\/[^/]+/</span><span class="p">)[</span><span class="mi">0</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L130" class="blob-line-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-line-code js-file-line">        <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L131" class="blob-line-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-line-code js-file-line">        <span class="nx">getVersion</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L132" class="blob-line-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-line-code js-file-line">          <span class="k">return</span> <span class="nx">config</span><span class="p">.</span><span class="nx">version</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L133" class="blob-line-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-line-code js-file-line">        <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L134" class="blob-line-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-line-code js-file-line">        <span class="nx">create</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">provider</span><span class="p">,</span> <span class="nx">tokens</span><span class="p">,</span> <span class="nx">request</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L135" class="blob-line-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-line-code js-file-line">          <span class="kd">var</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">make_res</span><span class="p">,</span> <span class="nx">make_res_endpoint</span><span class="p">,</span> <span class="nx">res</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L136" class="blob-line-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">tokens</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L137" class="blob-line-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-line-code js-file-line">            <span class="k">return</span> <span class="nx">cache</span><span class="p">.</span><span class="nx">tryCache</span><span class="p">(</span><span class="nx">exports</span><span class="p">.</span><span class="nx">OAuth</span><span class="p">,</span> <span class="nx">provider</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L138" class="blob-line-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L139" class="blob-line-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">request</span> <span class="o">!==</span> <span class="s2">&quot;object&quot;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L140" class="blob-line-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-line-code js-file-line">            <span class="nx">providers_api</span><span class="p">.</span><span class="nx">fetchDescription</span><span class="p">(</span><span class="nx">provider</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L141" class="blob-line-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L142" class="blob-line-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-line-code js-file-line">          <span class="nx">make_res</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">method</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L143" class="blob-line-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-line-code js-file-line">            <span class="k">return</span> <span class="nx">oauthio</span><span class="p">.</span><span class="nx">request</span><span class="p">.</span><span class="nx">mkHttp</span><span class="p">(</span><span class="nx">provider</span><span class="p">,</span> <span class="nx">tokens</span><span class="p">,</span> <span class="nx">request</span><span class="p">,</span> <span class="nx">method</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L144" class="blob-line-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-line-code js-file-line">          <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L145" class="blob-line-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-line-code js-file-line">          <span class="nx">make_res_endpoint</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">method</span><span class="p">,</span> <span class="nx">url</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L146" class="blob-line-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-line-code js-file-line">            <span class="k">return</span> <span class="nx">oauthio</span><span class="p">.</span><span class="nx">request</span><span class="p">.</span><span class="nx">mkHttpEndpoint</span><span class="p">(</span><span class="nx">provider</span><span class="p">,</span> <span class="nx">tokens</span><span class="p">,</span> <span class="nx">request</span><span class="p">,</span> <span class="nx">method</span><span class="p">,</span> <span class="nx">url</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L147" class="blob-line-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-line-code js-file-line">          <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L148" class="blob-line-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-line-code js-file-line">          <span class="nx">res</span> <span class="o">=</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L149" class="blob-line-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-line-code js-file-line">          <span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="k">in</span> <span class="nx">tokens</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L150" class="blob-line-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-line-code js-file-line">            <span class="nx">res</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">tokens</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L151" class="blob-line-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L152" class="blob-line-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-line-code js-file-line">          <span class="nx">res</span><span class="p">.</span><span class="nx">get</span> <span class="o">=</span> <span class="nx">make_res</span><span class="p">(</span><span class="s2">&quot;GET&quot;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L153" class="blob-line-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-line-code js-file-line">          <span class="nx">res</span><span class="p">.</span><span class="nx">post</span> <span class="o">=</span> <span class="nx">make_res</span><span class="p">(</span><span class="s2">&quot;POST&quot;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L154" class="blob-line-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-line-code js-file-line">          <span class="nx">res</span><span class="p">.</span><span class="nx">put</span> <span class="o">=</span> <span class="nx">make_res</span><span class="p">(</span><span class="s2">&quot;PUT&quot;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L155" class="blob-line-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-line-code js-file-line">          <span class="nx">res</span><span class="p">.</span><span class="nx">patch</span> <span class="o">=</span> <span class="nx">make_res</span><span class="p">(</span><span class="s2">&quot;PATCH&quot;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L156" class="blob-line-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-line-code js-file-line">          <span class="nx">res</span><span class="p">.</span><span class="nx">del</span> <span class="o">=</span> <span class="nx">make_res</span><span class="p">(</span><span class="s2">&quot;DELETE&quot;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L157" class="blob-line-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-line-code js-file-line">          <span class="nx">res</span><span class="p">.</span><span class="nx">me</span> <span class="o">=</span> <span class="nx">oauthio</span><span class="p">.</span><span class="nx">request</span><span class="p">.</span><span class="nx">mkHttpMe</span><span class="p">(</span><span class="nx">provider</span><span class="p">,</span> <span class="nx">tokens</span><span class="p">,</span> <span class="nx">request</span><span class="p">,</span> <span class="s2">&quot;GET&quot;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L158" class="blob-line-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-line-code js-file-line">          <span class="k">return</span> <span class="nx">res</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L159" class="blob-line-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-line-code js-file-line">        <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L160" class="blob-line-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-line-code js-file-line">        <span class="nx">popup</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">provider</span><span class="p">,</span> <span class="nx">opts</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L161" class="blob-line-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-line-code js-file-line">          <span class="kd">var</span> <span class="nx">defer</span><span class="p">,</span> <span class="nx">frm</span><span class="p">,</span> <span class="nx">getMessage</span><span class="p">,</span> <span class="nx">gotmessage</span><span class="p">,</span> <span class="nx">interval</span><span class="p">,</span> <span class="nx">res</span><span class="p">,</span> <span class="nx">url</span><span class="p">,</span> <span class="nx">wnd</span><span class="p">,</span> <span class="nx">wndTimeout</span><span class="p">,</span> <span class="nx">wnd_options</span><span class="p">,</span> <span class="nx">wnd_settings</span><span class="p">,</span> <span class="nx">_ref</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L162" class="blob-line-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-line-code js-file-line">          <span class="nx">gotmessage</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L163" class="blob-line-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-line-code js-file-line">          <span class="nx">getMessage</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L164" class="blob-line-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">origin</span> <span class="o">!==</span> <span class="nx">config</span><span class="p">.</span><span class="nx">oauthd_base</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L165" class="blob-line-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-line-code js-file-line">              <span class="k">return</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L166" class="blob-line-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L167" class="blob-line-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-line-code js-file-line">            <span class="k">try</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L168" class="blob-line-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-line-code js-file-line">              <span class="nx">wnd</span><span class="p">.</span><span class="nx">close</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L169" class="blob-line-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-line-code js-file-line">            <span class="p">}</span> <span class="k">catch</span> <span class="p">(</span><span class="nx">_error</span><span class="p">)</span> <span class="p">{}</span></td>
      </tr>
      <tr>
        <td id="L170" class="blob-line-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-line-code js-file-line">            <span class="nx">opts</span><span class="p">.</span><span class="nx">data</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">data</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L171" class="blob-line-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-line-code js-file-line">            <span class="nx">oauthio</span><span class="p">.</span><span class="nx">request</span><span class="p">.</span><span class="nx">sendCallback</span><span class="p">(</span><span class="nx">opts</span><span class="p">,</span> <span class="nx">defer</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L172" class="blob-line-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-line-code js-file-line">            <span class="k">return</span> <span class="nx">gotmessage</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L173" class="blob-line-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-line-code js-file-line">          <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L174" class="blob-line-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-line-code js-file-line">          <span class="nx">wnd</span> <span class="o">=</span> <span class="k">void</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L175" class="blob-line-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-line-code js-file-line">          <span class="nx">frm</span> <span class="o">=</span> <span class="k">void</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L176" class="blob-line-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-line-code js-file-line">          <span class="nx">wndTimeout</span> <span class="o">=</span> <span class="k">void</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L177" class="blob-line-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-line-code js-file-line">          <span class="nx">defer</span> <span class="o">=</span> <span class="p">(</span><span class="nx">_ref</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">jQuery</span><span class="p">)</span> <span class="o">!=</span> <span class="kc">null</span> <span class="o">?</span> <span class="nx">_ref</span><span class="p">.</span><span class="nx">Deferred</span><span class="p">()</span> <span class="o">:</span> <span class="k">void</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L178" class="blob-line-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-line-code js-file-line">          <span class="nx">opts</span> <span class="o">=</span> <span class="nx">opts</span> <span class="o">||</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L179" class="blob-line-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">config</span><span class="p">.</span><span class="nx">key</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L180" class="blob-line-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="nx">defer</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L181" class="blob-line-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-line-code js-file-line">              <span class="nx">defer</span><span class="p">.</span><span class="nx">reject</span><span class="p">(</span><span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s2">&quot;OAuth object must be initialized&quot;</span><span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L182" class="blob-line-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L183" class="blob-line-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="nx">callback</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L184" class="blob-line-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-line-code js-file-line">              <span class="k">return</span> <span class="nx">defer</span><span class="p">.</span><span class="nx">promise</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L185" class="blob-line-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-line-code js-file-line">            <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L186" class="blob-line-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-line-code js-file-line">              <span class="k">return</span> <span class="nx">callback</span><span class="p">(</span><span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s2">&quot;OAuth object must be initialized&quot;</span><span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L187" class="blob-line-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L188" class="blob-line-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L189" class="blob-line-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">2</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">opts</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L190" class="blob-line-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-line-code js-file-line">            <span class="nx">callback</span> <span class="o">=</span> <span class="nx">opts</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L191" class="blob-line-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-line-code js-file-line">            <span class="nx">opts</span> <span class="o">=</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L192" class="blob-line-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L193" class="blob-line-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">cache</span><span class="p">.</span><span class="nx">cacheEnabled</span><span class="p">(</span><span class="nx">opts</span><span class="p">.</span><span class="nx">cache</span><span class="p">))</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L194" class="blob-line-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-line-code js-file-line">            <span class="nx">res</span> <span class="o">=</span> <span class="nx">cache</span><span class="p">.</span><span class="nx">tryCache</span><span class="p">(</span><span class="nx">exports</span><span class="p">.</span><span class="nx">OAuth</span><span class="p">,</span> <span class="nx">provider</span><span class="p">,</span> <span class="nx">opts</span><span class="p">.</span><span class="nx">cache</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L195" class="blob-line-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="nx">res</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L196" class="blob-line-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-line-code js-file-line">              <span class="k">if</span> <span class="p">(</span><span class="nx">defer</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L197" class="blob-line-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-line-code js-file-line">                <span class="nx">defer</span><span class="p">.</span><span class="nx">resolve</span><span class="p">(</span><span class="nx">res</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L198" class="blob-line-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-line-code js-file-line">              <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L199" class="blob-line-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-line-code js-file-line">              <span class="k">if</span> <span class="p">(</span><span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L200" class="blob-line-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-line-code js-file-line">                <span class="k">return</span> <span class="nx">callback</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span> <span class="nx">res</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L201" class="blob-line-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-line-code js-file-line">              <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L202" class="blob-line-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-line-code js-file-line">                <span class="k">return</span> <span class="nx">defer</span><span class="p">.</span><span class="nx">promise</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L203" class="blob-line-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-line-code js-file-line">              <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L204" class="blob-line-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L205" class="blob-line-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L206" class="blob-line-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">opts</span><span class="p">.</span><span class="nx">state</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L207" class="blob-line-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-line-code js-file-line">            <span class="nx">opts</span><span class="p">.</span><span class="nx">state</span> <span class="o">=</span> <span class="nx">sha1</span><span class="p">.</span><span class="nx">create_hash</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L208" class="blob-line-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-line-code js-file-line">            <span class="nx">opts</span><span class="p">.</span><span class="nx">state_type</span> <span class="o">=</span> <span class="s2">&quot;client&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L209" class="blob-line-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L210" class="blob-line-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-line-code js-file-line">          <span class="nx">client_states</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">opts</span><span class="p">.</span><span class="nx">state</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L211" class="blob-line-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-line-code js-file-line">          <span class="nx">url</span> <span class="o">=</span> <span class="nx">config</span><span class="p">.</span><span class="nx">oauthd_url</span> <span class="o">+</span> <span class="s2">&quot;/auth/&quot;</span> <span class="o">+</span> <span class="nx">provider</span> <span class="o">+</span> <span class="s2">&quot;?k=&quot;</span> <span class="o">+</span> <span class="nx">config</span><span class="p">.</span><span class="nx">key</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L212" class="blob-line-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-line-code js-file-line">          <span class="nx">url</span> <span class="o">+=</span> <span class="s2">&quot;&amp;d=&quot;</span> <span class="o">+</span> <span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">Url</span><span class="p">.</span><span class="nx">getAbsUrl</span><span class="p">(</span><span class="s2">&quot;/&quot;</span><span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L213" class="blob-line-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">opts</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L214" class="blob-line-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-line-code js-file-line">            <span class="nx">url</span> <span class="o">+=</span> <span class="s2">&quot;&amp;opts=&quot;</span> <span class="o">+</span> <span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">opts</span><span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L215" class="blob-line-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L216" class="blob-line-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">opts</span><span class="p">.</span><span class="nx">wnd_settings</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L217" class="blob-line-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-line-code js-file-line">            <span class="nx">wnd_settings</span> <span class="o">=</span> <span class="nx">opts</span><span class="p">.</span><span class="nx">wnd_settings</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L218" class="blob-line-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-line-code js-file-line">            <span class="k">delete</span> <span class="nx">opts</span><span class="p">.</span><span class="nx">wnd_settings</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L219" class="blob-line-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-line-code js-file-line">          <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L220" class="blob-line-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-line-code js-file-line">            <span class="nx">wnd_settings</span> <span class="o">=</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L221" class="blob-line-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-line-code js-file-line">              <span class="nx">width</span><span class="o">:</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">outerWidth</span> <span class="o">*</span> <span class="mf">0.8</span><span class="p">),</span></td>
      </tr>
      <tr>
        <td id="L222" class="blob-line-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-line-code js-file-line">              <span class="nx">height</span><span class="o">:</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">outerHeight</span> <span class="o">*</span> <span class="mf">0.5</span><span class="p">)</span></td>
      </tr>
      <tr>
        <td id="L223" class="blob-line-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-line-code js-file-line">            <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L224" class="blob-line-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L225" class="blob-line-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">wnd_settings</span><span class="p">.</span><span class="nx">height</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L226" class="blob-line-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-line-code js-file-line">            <span class="nx">wnd_settings</span><span class="p">.</span><span class="nx">height</span> <span class="o">=</span> <span class="p">(</span><span class="nx">wnd_settings</span><span class="p">.</span><span class="nx">height</span> <span class="o">&lt;</span> <span class="mi">350</span> <span class="o">?</span> <span class="mi">350</span> <span class="o">:</span> <span class="k">void</span> <span class="mi">0</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L227" class="blob-line-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L228" class="blob-line-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">wnd_settings</span><span class="p">.</span><span class="nx">width</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L229" class="blob-line-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-line-code js-file-line">            <span class="nx">wnd_settings</span><span class="p">.</span><span class="nx">width</span> <span class="o">=</span> <span class="p">(</span><span class="nx">wnd_settings</span><span class="p">.</span><span class="nx">width</span> <span class="o">&lt;</span> <span class="mi">800</span> <span class="o">?</span> <span class="mi">800</span> <span class="o">:</span> <span class="k">void</span> <span class="mi">0</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L230" class="blob-line-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L231" class="blob-line-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">wnd_settings</span><span class="p">.</span><span class="nx">left</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L232" class="blob-line-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-line-code js-file-line">            <span class="nx">wnd_settings</span><span class="p">.</span><span class="nx">left</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">screenX</span> <span class="o">+</span> <span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">outerWidth</span> <span class="o">-</span> <span class="nx">wnd_settings</span><span class="p">.</span><span class="nx">width</span><span class="p">)</span> <span class="o">/</span> <span class="mi">2</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L233" class="blob-line-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L234" class="blob-line-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">wnd_settings</span><span class="p">.</span><span class="nx">top</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L235" class="blob-line-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-line-code js-file-line">            <span class="nx">wnd_settings</span><span class="p">.</span><span class="nx">top</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">screenY</span> <span class="o">+</span> <span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">outerHeight</span> <span class="o">-</span> <span class="nx">wnd_settings</span><span class="p">.</span><span class="nx">height</span><span class="p">)</span> <span class="o">/</span> <span class="mi">8</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L236" class="blob-line-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L237" class="blob-line-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-line-code js-file-line">          <span class="nx">wnd_options</span> <span class="o">=</span> <span class="s2">&quot;width=&quot;</span> <span class="o">+</span> <span class="nx">wnd_settings</span><span class="p">.</span><span class="nx">width</span> <span class="o">+</span> <span class="s2">&quot;,height=&quot;</span> <span class="o">+</span> <span class="nx">wnd_settings</span><span class="p">.</span><span class="nx">height</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L238" class="blob-line-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-line-code js-file-line">          <span class="nx">wnd_options</span> <span class="o">+=</span> <span class="s2">&quot;,toolbar=0,scrollbars=1,status=1,resizable=1,location=1,menuBar=0&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L239" class="blob-line-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-line-code js-file-line">          <span class="nx">wnd_options</span> <span class="o">+=</span> <span class="s2">&quot;,left=&quot;</span> <span class="o">+</span> <span class="nx">wnd_settings</span><span class="p">.</span><span class="nx">left</span> <span class="o">+</span> <span class="s2">&quot;,top=&quot;</span> <span class="o">+</span> <span class="nx">wnd_settings</span><span class="p">.</span><span class="nx">top</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L240" class="blob-line-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-line-code js-file-line">          <span class="nx">opts</span> <span class="o">=</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L241" class="blob-line-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-line-code js-file-line">            <span class="nx">provider</span><span class="o">:</span> <span class="nx">provider</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L242" class="blob-line-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-line-code js-file-line">            <span class="nx">cache</span><span class="o">:</span> <span class="nx">opts</span><span class="p">.</span><span class="nx">cache</span></td>
      </tr>
      <tr>
        <td id="L243" class="blob-line-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-line-code js-file-line">          <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L244" class="blob-line-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-line-code js-file-line">          <span class="nx">opts</span><span class="p">.</span><span class="nx">callback</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">r</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L245" class="blob-line-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">removeEventListener</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L246" class="blob-line-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-line-code js-file-line">              <span class="nb">window</span><span class="p">.</span><span class="nx">removeEventListener</span><span class="p">(</span><span class="s2">&quot;message&quot;</span><span class="p">,</span> <span class="nx">getMessage</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L247" class="blob-line-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-line-code js-file-line">            <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">detachEvent</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L248" class="blob-line-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-line-code js-file-line">              <span class="nb">window</span><span class="p">.</span><span class="nx">detachEvent</span><span class="p">(</span><span class="s2">&quot;onmessage&quot;</span><span class="p">,</span> <span class="nx">getMessage</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L249" class="blob-line-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-line-code js-file-line">            <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L250" class="blob-line-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-line-code js-file-line">              <span class="k">if</span> <span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">detachEvent</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L251" class="blob-line-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-line-code js-file-line">                <span class="nb">document</span><span class="p">.</span><span class="nx">detachEvent</span><span class="p">(</span><span class="s2">&quot;onmessage&quot;</span><span class="p">,</span> <span class="nx">getMessage</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L252" class="blob-line-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-line-code js-file-line">              <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L253" class="blob-line-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L254" class="blob-line-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-line-code js-file-line">            <span class="nx">opts</span><span class="p">.</span><span class="nx">callback</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L255" class="blob-line-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="nx">wndTimeout</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L256" class="blob-line-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-line-code js-file-line">              <span class="nx">clearTimeout</span><span class="p">(</span><span class="nx">wndTimeout</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L257" class="blob-line-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-line-code js-file-line">              <span class="nx">wndTimeout</span> <span class="o">=</span> <span class="kc">undefined</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L258" class="blob-line-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L259" class="blob-line-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L260" class="blob-line-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-line-code js-file-line">              <span class="k">return</span> <span class="nx">callback</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">r</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L261" class="blob-line-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-line-code js-file-line">            <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L262" class="blob-line-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-line-code js-file-line">              <span class="k">return</span> <span class="kc">undefined</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L263" class="blob-line-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L264" class="blob-line-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-line-code js-file-line">          <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L265" class="blob-line-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">attachEvent</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L266" class="blob-line-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-line-code js-file-line">            <span class="nb">window</span><span class="p">.</span><span class="nx">attachEvent</span><span class="p">(</span><span class="s2">&quot;onmessage&quot;</span><span class="p">,</span> <span class="nx">getMessage</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L267" class="blob-line-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-line-code js-file-line">          <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">attachEvent</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L268" class="blob-line-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-line-code js-file-line">            <span class="nb">document</span><span class="p">.</span><span class="nx">attachEvent</span><span class="p">(</span><span class="s2">&quot;onmessage&quot;</span><span class="p">,</span> <span class="nx">getMessage</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L269" class="blob-line-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-line-code js-file-line">          <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L270" class="blob-line-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L271" class="blob-line-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-line-code js-file-line">              <span class="nb">window</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s2">&quot;message&quot;</span><span class="p">,</span> <span class="nx">getMessage</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L272" class="blob-line-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L273" class="blob-line-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L274" class="blob-line-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">chrome</span> <span class="o">!==</span> <span class="s2">&quot;undefined&quot;</span> <span class="o">&amp;&amp;</span> <span class="nx">chrome</span><span class="p">.</span><span class="nx">runtime</span> <span class="o">&amp;&amp;</span> <span class="nx">chrome</span><span class="p">.</span><span class="nx">runtime</span><span class="p">.</span><span class="nx">onMessageExternal</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L275" class="blob-line-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-line-code js-file-line">            <span class="nx">chrome</span><span class="p">.</span><span class="nx">runtime</span><span class="p">.</span><span class="nx">onMessageExternal</span><span class="p">.</span><span class="nx">addListener</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">request</span><span class="p">,</span> <span class="nx">sender</span><span class="p">,</span> <span class="nx">sendResponse</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L276" class="blob-line-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-line-code js-file-line">              <span class="nx">request</span><span class="p">.</span><span class="nx">origin</span> <span class="o">=</span> <span class="nx">sender</span><span class="p">.</span><span class="nx">url</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/^.{2,5}:\/\/[^/]+/</span><span class="p">)[</span><span class="mi">0</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L277" class="blob-line-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-line-code js-file-line">              <span class="k">if</span> <span class="p">(</span><span class="nx">defer</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L278" class="blob-line-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-line-code js-file-line">                <span class="nx">defer</span><span class="p">.</span><span class="nx">resolve</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L279" class="blob-line-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-line-code js-file-line">              <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L280" class="blob-line-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-line-code js-file-line">              <span class="k">return</span> <span class="nx">getMessage</span><span class="p">(</span><span class="nx">request</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L281" class="blob-line-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-line-code js-file-line">            <span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L282" class="blob-line-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L283" class="blob-line-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">frm</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">navigator</span><span class="p">.</span><span class="nx">userAgent</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s2">&quot;MSIE&quot;</span><span class="p">)</span> <span class="o">!==</span> <span class="o">-</span><span class="mi">1</span> <span class="o">||</span> <span class="nx">navigator</span><span class="p">.</span><span class="nx">appVersion</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s2">&quot;Trident/&quot;</span><span class="p">)</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">))</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L284" class="blob-line-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-line-code js-file-line">            <span class="nx">frm</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;iframe&quot;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L285" class="blob-line-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-line-code js-file-line">            <span class="nx">frm</span><span class="p">.</span><span class="nx">src</span> <span class="o">=</span> <span class="nx">config</span><span class="p">.</span><span class="nx">oauthd_url</span> <span class="o">+</span> <span class="s2">&quot;/auth/iframe?d=&quot;</span> <span class="o">+</span> <span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">Url</span><span class="p">.</span><span class="nx">getAbsUrl</span><span class="p">(</span><span class="s2">&quot;/&quot;</span><span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L286" class="blob-line-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-line-code js-file-line">            <span class="nx">frm</span><span class="p">.</span><span class="nx">width</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L287" class="blob-line-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-line-code js-file-line">            <span class="nx">frm</span><span class="p">.</span><span class="nx">height</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L288" class="blob-line-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-line-code js-file-line">            <span class="nx">frm</span><span class="p">.</span><span class="nx">frameBorder</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L289" class="blob-line-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-line-code js-file-line">            <span class="nx">frm</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">visibility</span> <span class="o">=</span> <span class="s2">&quot;hidden&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L290" class="blob-line-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-line-code js-file-line">            <span class="nb">document</span><span class="p">.</span><span class="nx">body</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">frm</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L291" class="blob-line-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L292" class="blob-line-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-line-code js-file-line">          <span class="nx">wndTimeout</span> <span class="o">=</span> <span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L293" class="blob-line-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="nx">defer</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L294" class="blob-line-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-line-code js-file-line">              <span class="nx">defer</span><span class="p">.</span><span class="nx">reject</span><span class="p">(</span><span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s2">&quot;Authorization timed out&quot;</span><span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L295" class="blob-line-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L296" class="blob-line-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="nx">opts</span><span class="p">.</span><span class="nx">callback</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">opts</span><span class="p">.</span><span class="nx">callback</span> <span class="o">===</span> <span class="s2">&quot;function&quot;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L297" class="blob-line-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-line-code js-file-line">              <span class="nx">opts</span><span class="p">.</span><span class="nx">callback</span><span class="p">(</span><span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s2">&quot;Authorization timed out&quot;</span><span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L298" class="blob-line-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L299" class="blob-line-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-line-code js-file-line">            <span class="k">try</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L300" class="blob-line-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-line-code js-file-line">              <span class="nx">wnd</span><span class="p">.</span><span class="nx">close</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L301" class="blob-line-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-line-code js-file-line">            <span class="p">}</span> <span class="k">catch</span> <span class="p">(</span><span class="nx">_error</span><span class="p">)</span> <span class="p">{}</span></td>
      </tr>
      <tr>
        <td id="L302" class="blob-line-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-line-code js-file-line">          <span class="p">},</span> <span class="mi">1200</span> <span class="o">*</span> <span class="mi">1000</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L303" class="blob-line-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-line-code js-file-line">          <span class="nx">wnd</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">open</span><span class="p">(</span><span class="nx">url</span><span class="p">,</span> <span class="s2">&quot;Authorization&quot;</span><span class="p">,</span> <span class="nx">wnd_options</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L304" class="blob-line-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">wnd</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L305" class="blob-line-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-line-code js-file-line">            <span class="nx">wnd</span><span class="p">.</span><span class="nx">focus</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L306" class="blob-line-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-line-code js-file-line">            <span class="nx">interval</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">setInterval</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L307" class="blob-line-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-line-code js-file-line">              <span class="k">if</span> <span class="p">(</span><span class="nx">wnd</span> <span class="o">===</span> <span class="kc">null</span> <span class="o">||</span> <span class="nx">wnd</span><span class="p">.</span><span class="nx">closed</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L308" class="blob-line-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-line-code js-file-line">                <span class="nb">window</span><span class="p">.</span><span class="nx">clearInterval</span><span class="p">(</span><span class="nx">interval</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L309" class="blob-line-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-line-code js-file-line">                <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">gotmessage</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L310" class="blob-line-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-line-code js-file-line">                  <span class="k">if</span> <span class="p">(</span><span class="nx">defer</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L311" class="blob-line-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-line-code js-file-line">                    <span class="nx">defer</span><span class="p">.</span><span class="nx">reject</span><span class="p">(</span><span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s2">&quot;The popup was closed&quot;</span><span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L312" class="blob-line-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-line-code js-file-line">                  <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L313" class="blob-line-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-line-code js-file-line">                  <span class="k">if</span> <span class="p">(</span><span class="nx">opts</span><span class="p">.</span><span class="nx">callback</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">opts</span><span class="p">.</span><span class="nx">callback</span> <span class="o">===</span> <span class="s2">&quot;function&quot;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L314" class="blob-line-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-line-code js-file-line">                    <span class="k">return</span> <span class="nx">opts</span><span class="p">.</span><span class="nx">callback</span><span class="p">(</span><span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s2">&quot;The popup was closed&quot;</span><span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L315" class="blob-line-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-line-code js-file-line">                  <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L316" class="blob-line-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-line-code js-file-line">                <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L317" class="blob-line-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-line-code js-file-line">              <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L318" class="blob-line-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-line-code js-file-line">            <span class="p">},</span> <span class="mi">500</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L319" class="blob-line-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-line-code js-file-line">          <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L320" class="blob-line-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="nx">defer</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L321" class="blob-line-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-line-code js-file-line">              <span class="nx">defer</span><span class="p">.</span><span class="nx">reject</span><span class="p">(</span><span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s2">&quot;Could not open a popup&quot;</span><span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L322" class="blob-line-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L323" class="blob-line-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="nx">opts</span><span class="p">.</span><span class="nx">callback</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">opts</span><span class="p">.</span><span class="nx">callback</span> <span class="o">===</span> <span class="s2">&quot;function&quot;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L324" class="blob-line-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-line-code js-file-line">              <span class="nx">opts</span><span class="p">.</span><span class="nx">callback</span><span class="p">(</span><span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s2">&quot;Could not open a popup&quot;</span><span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L325" class="blob-line-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L326" class="blob-line-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L327" class="blob-line-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-line-code js-file-line">          <span class="k">return</span> <span class="nx">defer</span> <span class="o">!=</span> <span class="kc">null</span> <span class="o">?</span> <span class="nx">defer</span><span class="p">.</span><span class="nx">promise</span><span class="p">()</span> <span class="o">:</span> <span class="k">void</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L328" class="blob-line-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-line-code js-file-line">        <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L329" class="blob-line-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-line-code js-file-line">        <span class="nx">redirect</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">provider</span><span class="p">,</span> <span class="nx">opts</span><span class="p">,</span> <span class="nx">url</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L330" class="blob-line-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-line-code js-file-line">          <span class="kd">var</span> <span class="nx">redirect_uri</span><span class="p">,</span> <span class="nx">res</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L331" class="blob-line-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">2</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L332" class="blob-line-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-line-code js-file-line">            <span class="nx">url</span> <span class="o">=</span> <span class="nx">opts</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L333" class="blob-line-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-line-code js-file-line">            <span class="nx">opts</span> <span class="o">=</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L334" class="blob-line-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L335" class="blob-line-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">cache</span><span class="p">.</span><span class="nx">cacheEnabled</span><span class="p">(</span><span class="nx">opts</span><span class="p">.</span><span class="nx">cache</span><span class="p">))</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L336" class="blob-line-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-line-code js-file-line">            <span class="nx">res</span> <span class="o">=</span> <span class="nx">cache</span><span class="p">.</span><span class="nx">tryCache</span><span class="p">(</span><span class="nx">exports</span><span class="p">.</span><span class="nx">OAuth</span><span class="p">,</span> <span class="nx">provider</span><span class="p">,</span> <span class="nx">opts</span><span class="p">.</span><span class="nx">cache</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L337" class="blob-line-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="nx">res</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L338" class="blob-line-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-line-code js-file-line">              <span class="nx">url</span> <span class="o">=</span> <span class="nx">Url</span><span class="p">.</span><span class="nx">getAbsUrl</span><span class="p">(</span><span class="nx">url</span><span class="p">)</span> <span class="o">+</span> <span class="p">(</span><span class="nx">url</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s2">&quot;#&quot;</span><span class="p">)</span> <span class="o">===</span> <span class="o">-</span><span class="mi">1</span> <span class="o">?</span> <span class="s2">&quot;#&quot;</span> <span class="o">:</span> <span class="s2">&quot;&amp;&quot;</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;oauthio=cache&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L339" class="blob-line-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-line-code js-file-line">              <span class="nb">window</span><span class="p">.</span><span class="nx">location_operations</span><span class="p">.</span><span class="nx">changeHref</span><span class="p">(</span><span class="nx">url</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L340" class="blob-line-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-line-code js-file-line">              <span class="nb">window</span><span class="p">.</span><span class="nx">location_operations</span><span class="p">.</span><span class="nx">reload</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L341" class="blob-line-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-line-code js-file-line">              <span class="k">return</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L342" class="blob-line-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L343" class="blob-line-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L344" class="blob-line-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">opts</span><span class="p">.</span><span class="nx">state</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L345" class="blob-line-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-line-code js-file-line">            <span class="nx">opts</span><span class="p">.</span><span class="nx">state</span> <span class="o">=</span> <span class="nx">sha1</span><span class="p">.</span><span class="nx">create_hash</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L346" class="blob-line-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-line-code js-file-line">            <span class="nx">opts</span><span class="p">.</span><span class="nx">state_type</span> <span class="o">=</span> <span class="s2">&quot;client&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L347" class="blob-line-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L348" class="blob-line-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-line-code js-file-line">          <span class="nx">cookies</span><span class="p">.</span><span class="nx">createCookie</span><span class="p">(</span><span class="s2">&quot;oauthio_state&quot;</span><span class="p">,</span> <span class="nx">opts</span><span class="p">.</span><span class="nx">state</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L349" class="blob-line-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-line-code js-file-line">          <span class="nx">redirect_uri</span> <span class="o">=</span> <span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">Url</span><span class="p">.</span><span class="nx">getAbsUrl</span><span class="p">(</span><span class="nx">url</span><span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L350" class="blob-line-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-line-code js-file-line">          <span class="nx">url</span> <span class="o">=</span> <span class="nx">config</span><span class="p">.</span><span class="nx">oauthd_url</span> <span class="o">+</span> <span class="s2">&quot;/auth/&quot;</span> <span class="o">+</span> <span class="nx">provider</span> <span class="o">+</span> <span class="s2">&quot;?k=&quot;</span> <span class="o">+</span> <span class="nx">config</span><span class="p">.</span><span class="nx">key</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L351" class="blob-line-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-line-code js-file-line">          <span class="nx">url</span> <span class="o">+=</span> <span class="s2">&quot;&amp;redirect_uri=&quot;</span> <span class="o">+</span> <span class="nx">redirect_uri</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L352" class="blob-line-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">opts</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L353" class="blob-line-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-line-code js-file-line">            <span class="nx">url</span> <span class="o">+=</span> <span class="s2">&quot;&amp;opts=&quot;</span> <span class="o">+</span> <span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">opts</span><span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L354" class="blob-line-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L355" class="blob-line-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-line-code js-file-line">          <span class="nb">window</span><span class="p">.</span><span class="nx">location_operations</span><span class="p">.</span><span class="nx">changeHref</span><span class="p">(</span><span class="nx">url</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L356" class="blob-line-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-line-code js-file-line">        <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L357" class="blob-line-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-line-code js-file-line">        <span class="nx">callback</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">provider</span><span class="p">,</span> <span class="nx">opts</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L358" class="blob-line-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-line-code js-file-line">          <span class="kd">var</span> <span class="nx">defer</span><span class="p">,</span> <span class="nx">res</span><span class="p">,</span> <span class="nx">_ref</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L359" class="blob-line-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-line-code js-file-line">          <span class="nx">defer</span> <span class="o">=</span> <span class="p">(</span><span class="nx">_ref</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">jQuery</span><span class="p">)</span> <span class="o">!=</span> <span class="kc">null</span> <span class="o">?</span> <span class="nx">_ref</span><span class="p">.</span><span class="nx">Deferred</span><span class="p">()</span> <span class="o">:</span> <span class="k">void</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L360" class="blob-line-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">1</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">provider</span> <span class="o">===</span> <span class="s2">&quot;function&quot;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L361" class="blob-line-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-line-code js-file-line">            <span class="nx">callback</span> <span class="o">=</span> <span class="nx">provider</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L362" class="blob-line-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-line-code js-file-line">            <span class="nx">provider</span> <span class="o">=</span> <span class="kc">undefined</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L363" class="blob-line-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-line-code js-file-line">            <span class="nx">opts</span> <span class="o">=</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L364" class="blob-line-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L365" class="blob-line-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">1</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">provider</span> <span class="o">===</span> <span class="s2">&quot;string&quot;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L366" class="blob-line-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-line-code js-file-line">            <span class="nx">opts</span> <span class="o">=</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L367" class="blob-line-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L368" class="blob-line-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">2</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">opts</span> <span class="o">===</span> <span class="s2">&quot;function&quot;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L369" class="blob-line-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-line-code js-file-line">            <span class="nx">callback</span> <span class="o">=</span> <span class="nx">opts</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L370" class="blob-line-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-line-code js-file-line">            <span class="nx">opts</span> <span class="o">=</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L371" class="blob-line-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L372" class="blob-line-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">cache</span><span class="p">.</span><span class="nx">cacheEnabled</span><span class="p">(</span><span class="nx">opts</span><span class="p">.</span><span class="nx">cache</span><span class="p">)</span> <span class="o">||</span> <span class="nx">oauth_result</span> <span class="o">===</span> <span class="s2">&quot;cache&quot;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L373" class="blob-line-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-line-code js-file-line">            <span class="nx">res</span> <span class="o">=</span> <span class="nx">cache</span><span class="p">.</span><span class="nx">tryCache</span><span class="p">(</span><span class="nx">exports</span><span class="p">.</span><span class="nx">OAuth</span><span class="p">,</span> <span class="nx">provider</span><span class="p">,</span> <span class="nx">opts</span><span class="p">.</span><span class="nx">cache</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L374" class="blob-line-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="nx">oauth_result</span> <span class="o">===</span> <span class="s2">&quot;cache&quot;</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">provider</span> <span class="o">!==</span> <span class="s2">&quot;string&quot;</span> <span class="o">||</span> <span class="o">!</span><span class="nx">provider</span><span class="p">))</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L375" class="blob-line-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-line-code js-file-line">              <span class="k">if</span> <span class="p">(</span><span class="nx">defer</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L376" class="blob-line-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-line-code js-file-line">                <span class="nx">defer</span><span class="p">.</span><span class="nx">reject</span><span class="p">(</span><span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s2">&quot;You must set a provider when using the cache&quot;</span><span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L377" class="blob-line-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-line-code js-file-line">              <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L378" class="blob-line-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-line-code js-file-line">              <span class="k">if</span> <span class="p">(</span><span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L379" class="blob-line-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-line-code js-file-line">                <span class="k">return</span> <span class="nx">callback</span><span class="p">(</span><span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s2">&quot;You must set a provider when using the cache&quot;</span><span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L380" class="blob-line-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-line-code js-file-line">              <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L381" class="blob-line-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-line-code js-file-line">                <span class="k">return</span> <span class="nx">defer</span> <span class="o">!=</span> <span class="kc">null</span> <span class="o">?</span> <span class="nx">defer</span><span class="p">.</span><span class="nx">promise</span><span class="p">()</span> <span class="o">:</span> <span class="k">void</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L382" class="blob-line-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-line-code js-file-line">              <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L383" class="blob-line-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L384" class="blob-line-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="nx">res</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L385" class="blob-line-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-line-code js-file-line">              <span class="k">if</span> <span class="p">(</span><span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L386" class="blob-line-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-line-code js-file-line">                <span class="k">if</span> <span class="p">(</span><span class="nx">res</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L387" class="blob-line-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-line-code js-file-line">                  <span class="k">return</span> <span class="nx">callback</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span> <span class="nx">res</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L388" class="blob-line-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-line-code js-file-line">                <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L389" class="blob-line-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-line-code js-file-line">              <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L390" class="blob-line-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-line-code js-file-line">                <span class="k">if</span> <span class="p">(</span><span class="nx">defer</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L391" class="blob-line-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-line-code js-file-line">                  <span class="nx">defer</span><span class="p">.</span><span class="nx">resolve</span><span class="p">(</span><span class="nx">res</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L392" class="blob-line-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-line-code js-file-line">                <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L393" class="blob-line-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-line-code js-file-line">                <span class="k">return</span> <span class="nx">defer</span> <span class="o">!=</span> <span class="kc">null</span> <span class="o">?</span> <span class="nx">defer</span><span class="p">.</span><span class="nx">promise</span><span class="p">()</span> <span class="o">:</span> <span class="k">void</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L394" class="blob-line-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-line-code js-file-line">              <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L395" class="blob-line-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L396" class="blob-line-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L397" class="blob-line-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">oauth_result</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L398" class="blob-line-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-line-code js-file-line">            <span class="k">return</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L399" class="blob-line-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L400" class="blob-line-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-line-code js-file-line">          <span class="nx">oauthio</span><span class="p">.</span><span class="nx">request</span><span class="p">.</span><span class="nx">sendCallback</span><span class="p">({</span></td>
      </tr>
      <tr>
        <td id="L401" class="blob-line-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-line-code js-file-line">            <span class="nx">data</span><span class="o">:</span> <span class="nx">oauth_result</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L402" class="blob-line-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-line-code js-file-line">            <span class="nx">provider</span><span class="o">:</span> <span class="nx">provider</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L403" class="blob-line-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-line-code js-file-line">            <span class="nx">cache</span><span class="o">:</span> <span class="nx">opts</span><span class="p">.</span><span class="nx">cache</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L404" class="blob-line-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-line-code js-file-line">            <span class="nx">callback</span><span class="o">:</span> <span class="nx">callback</span></td>
      </tr>
      <tr>
        <td id="L405" class="blob-line-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-line-code js-file-line">          <span class="p">},</span> <span class="nx">defer</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L406" class="blob-line-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-line-code js-file-line">          <span class="k">return</span> <span class="nx">defer</span> <span class="o">!=</span> <span class="kc">null</span> <span class="o">?</span> <span class="nx">defer</span><span class="p">.</span><span class="nx">promise</span><span class="p">()</span> <span class="o">:</span> <span class="k">void</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L407" class="blob-line-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-line-code js-file-line">        <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L408" class="blob-line-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-line-code js-file-line">        <span class="nx">clearCache</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">provider</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L409" class="blob-line-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-line-code js-file-line">          <span class="nx">cookies</span><span class="p">.</span><span class="nx">eraseCookie</span><span class="p">(</span><span class="s2">&quot;oauthio_provider_&quot;</span> <span class="o">+</span> <span class="nx">provider</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L410" class="blob-line-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-line-code js-file-line">        <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L411" class="blob-line-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-line-code js-file-line">        <span class="nx">http_me</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">opts</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L412" class="blob-line-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">oauthio</span><span class="p">.</span><span class="nx">request</span><span class="p">.</span><span class="nx">http_me</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L413" class="blob-line-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-line-code js-file-line">            <span class="nx">oauthio</span><span class="p">.</span><span class="nx">request</span><span class="p">.</span><span class="nx">http_me</span><span class="p">(</span><span class="nx">opts</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L414" class="blob-line-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L415" class="blob-line-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-line-code js-file-line">        <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L416" class="blob-line-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-line-code js-file-line">        <span class="nx">http</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">opts</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L417" class="blob-line-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">oauthio</span><span class="p">.</span><span class="nx">request</span><span class="p">.</span><span class="nx">http</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L418" class="blob-line-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-line-code js-file-line">            <span class="nx">oauthio</span><span class="p">.</span><span class="nx">request</span><span class="p">.</span><span class="nx">http</span><span class="p">(</span><span class="nx">opts</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L419" class="blob-line-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L420" class="blob-line-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L421" class="blob-line-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-line-code js-file-line">      <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L422" class="blob-line-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-line-code js-file-line">      <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nb">window</span><span class="p">.</span><span class="nx">jQuery</span> <span class="o">===</span> <span class="s2">&quot;undefined&quot;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L423" class="blob-line-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-line-code js-file-line">        <span class="nx">_preloadcalls</span> <span class="o">=</span> <span class="p">[];</span></td>
      </tr>
      <tr>
        <td id="L424" class="blob-line-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-line-code js-file-line">        <span class="nx">delayfn</span> <span class="o">=</span> <span class="k">void</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L425" class="blob-line-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-line-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">chrome</span> <span class="o">!==</span> <span class="s2">&quot;undefined&quot;</span> <span class="o">&amp;&amp;</span> <span class="nx">chrome</span><span class="p">.</span><span class="nx">extension</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L426" class="blob-line-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-line-code js-file-line">          <span class="nx">delayfn</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L427" class="blob-line-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-line-code js-file-line">            <span class="k">return</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L428" class="blob-line-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-line-code js-file-line">              <span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s2">&quot;Please include jQuery before oauth.js&quot;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L429" class="blob-line-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-line-code js-file-line">            <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L430" class="blob-line-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-line-code js-file-line">          <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L431" class="blob-line-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-line-code js-file-line">        <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L432" class="blob-line-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-line-code js-file-line">          <span class="nx">e</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;script&quot;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L433" class="blob-line-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-line-code js-file-line">          <span class="nx">e</span><span class="p">.</span><span class="nx">src</span> <span class="o">=</span> <span class="s2">&quot;//code.jquery.com/jquery.min.js&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L434" class="blob-line-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-line-code js-file-line">          <span class="nx">e</span><span class="p">.</span><span class="nx">type</span> <span class="o">=</span> <span class="s2">&quot;text/javascript&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L435" class="blob-line-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-line-code js-file-line">          <span class="nx">e</span><span class="p">.</span><span class="nx">onload</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L436" class="blob-line-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-line-code js-file-line">            <span class="kd">var</span> <span class="nx">i</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L437" class="blob-line-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-line-code js-file-line">            <span class="nx">delayedFunctions</span><span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">jQuery</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L438" class="blob-line-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-line-code js-file-line">            <span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="k">in</span> <span class="nx">_preloadcalls</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L439" class="blob-line-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-line-code js-file-line">              <span class="nx">_preloadcalls</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">fn</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span> <span class="nx">_preloadcalls</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">args</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L440" class="blob-line-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L441" class="blob-line-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-line-code js-file-line">          <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L442" class="blob-line-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-line-code js-file-line">          <span class="nb">document</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span><span class="s2">&quot;head&quot;</span><span class="p">)[</span><span class="mi">0</span><span class="p">].</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">e</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L443" class="blob-line-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-line-code js-file-line">          <span class="nx">delayfn</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">f</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L444" class="blob-line-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-line-code js-file-line">            <span class="k">return</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L445" class="blob-line-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-line-code js-file-line">              <span class="kd">var</span> <span class="nx">arg</span><span class="p">,</span> <span class="nx">args_copy</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L446" class="blob-line-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-line-code js-file-line">              <span class="nx">args_copy</span> <span class="o">=</span> <span class="p">[];</span></td>
      </tr>
      <tr>
        <td id="L447" class="blob-line-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-line-code js-file-line">              <span class="k">for</span> <span class="p">(</span><span class="nx">arg</span> <span class="k">in</span> <span class="nx">arguments</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L448" class="blob-line-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-line-code js-file-line">                <span class="nx">args_copy</span><span class="p">[</span><span class="nx">arg</span><span class="p">]</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">[</span><span class="nx">arg</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L449" class="blob-line-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-line-code js-file-line">              <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L450" class="blob-line-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-line-code js-file-line">              <span class="nx">_preloadcalls</span><span class="p">.</span><span class="nx">push</span><span class="p">({</span></td>
      </tr>
      <tr>
        <td id="L451" class="blob-line-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-line-code js-file-line">                <span class="nx">fn</span><span class="o">:</span> <span class="nx">f</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L452" class="blob-line-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-line-code js-file-line">                <span class="nx">args</span><span class="o">:</span> <span class="nx">args_copy</span></td>
      </tr>
      <tr>
        <td id="L453" class="blob-line-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-line-code js-file-line">              <span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L454" class="blob-line-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-line-code js-file-line">            <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L455" class="blob-line-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-line-code js-file-line">          <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L456" class="blob-line-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L457" class="blob-line-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-line-code js-file-line">        <span class="nx">oauthio</span><span class="p">.</span><span class="nx">request</span><span class="p">.</span><span class="nx">http</span> <span class="o">=</span> <span class="nx">delayfn</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L458" class="blob-line-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-line-code js-file-line">          <span class="nx">oauthio</span><span class="p">.</span><span class="nx">request</span><span class="p">.</span><span class="nx">http</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">exports</span><span class="p">.</span><span class="nx">OAuth</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L459" class="blob-line-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-line-code js-file-line">        <span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L460" class="blob-line-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-line-code js-file-line">        <span class="nx">providers_api</span><span class="p">.</span><span class="nx">fetchDescription</span> <span class="o">=</span> <span class="nx">delayfn</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L461" class="blob-line-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-line-code js-file-line">          <span class="nx">providers_api</span><span class="p">.</span><span class="nx">fetchDescription</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">providers_api</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L462" class="blob-line-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-line-code js-file-line">        <span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L463" class="blob-line-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-line-code js-file-line">        <span class="nx">oauthio</span><span class="p">.</span><span class="nx">request</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s2">&quot;./oauthio_requests&quot;</span><span class="p">)(</span><span class="nb">window</span><span class="p">.</span><span class="nx">jQuery</span><span class="p">,</span> <span class="nx">config</span><span class="p">,</span> <span class="nx">client_states</span><span class="p">,</span> <span class="nx">cache</span><span class="p">,</span> <span class="nx">providers_api</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L464" class="blob-line-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-line-code js-file-line">      <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L465" class="blob-line-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-line-code js-file-line">        <span class="nx">delayedFunctions</span><span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">jQuery</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L466" class="blob-line-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L467" class="blob-line-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-line-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L468" class="blob-line-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-line-code js-file-line">  <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L469" class="blob-line-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-line-code js-file-line"><span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L470" class="blob-line-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L471" class="blob-line-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-line-code js-file-line"><span class="p">},{</span><span class="s2">&quot;../config&quot;</span><span class="o">:</span><span class="mi">1</span><span class="p">,</span><span class="s2">&quot;../tools/cache&quot;</span><span class="o">:</span><span class="mi">5</span><span class="p">,</span><span class="s2">&quot;../tools/cookies&quot;</span><span class="o">:</span><span class="mi">6</span><span class="p">,</span><span class="s2">&quot;../tools/sha1&quot;</span><span class="o">:</span><span class="mi">7</span><span class="p">,</span><span class="s2">&quot;../tools/url&quot;</span><span class="o">:</span><span class="mi">8</span><span class="p">,</span><span class="s2">&quot;./oauthio_requests&quot;</span><span class="o">:</span><span class="mi">3</span><span class="p">}],</span><span class="mi">3</span><span class="o">:</span><span class="p">[</span><span class="kd">function</span><span class="p">(</span><span class="nx">require</span><span class="p">,</span><span class="nx">module</span><span class="p">,</span><span class="nx">exports</span><span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L472" class="blob-line-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-line-code js-file-line"><span class="kd">var</span> <span class="nx">Url</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L473" class="blob-line-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-line-code js-file-line">  <span class="nx">__indexOf</span> <span class="o">=</span> <span class="p">[].</span><span class="nx">indexOf</span> <span class="o">||</span> <span class="kd">function</span><span class="p">(</span><span class="nx">item</span><span class="p">)</span> <span class="p">{</span> <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">l</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">l</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span> <span class="k">if</span> <span class="p">(</span><span class="nx">i</span> <span class="k">in</span> <span class="k">this</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">===</span> <span class="nx">item</span><span class="p">)</span> <span class="k">return</span> <span class="nx">i</span><span class="p">;</span> <span class="p">}</span> <span class="k">return</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span> <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L474" class="blob-line-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L475" class="blob-line-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-line-code js-file-line"><span class="nx">Url</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;../tools/url&#39;</span><span class="p">)();</span></td>
      </tr>
      <tr>
        <td id="L476" class="blob-line-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L477" class="blob-line-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-line-code js-file-line"><span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">$</span><span class="p">,</span> <span class="nx">config</span><span class="p">,</span> <span class="nx">client_states</span><span class="p">,</span> <span class="nx">cache</span><span class="p">,</span> <span class="nx">providers_api</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L478" class="blob-line-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-line-code js-file-line">  <span class="k">return</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L479" class="blob-line-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-line-code js-file-line">    <span class="nx">http</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">opts</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L480" class="blob-line-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-line-code js-file-line">      <span class="kd">var</span> <span class="nx">defer</span><span class="p">,</span> <span class="nx">desc_opts</span><span class="p">,</span> <span class="nx">doRequest</span><span class="p">,</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">options</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L481" class="blob-line-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-line-code js-file-line">      <span class="nx">doRequest</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L482" class="blob-line-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">k</span><span class="p">,</span> <span class="nx">qs</span><span class="p">,</span> <span class="nx">request</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L483" class="blob-line-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-line-code js-file-line">        <span class="nx">request</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">oauthio</span><span class="p">.</span><span class="nx">request</span> <span class="o">||</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L484" class="blob-line-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-line-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">request</span><span class="p">.</span><span class="nx">cors</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L485" class="blob-line-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-line-code js-file-line">          <span class="nx">options</span><span class="p">.</span><span class="nx">url</span> <span class="o">=</span> <span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">url</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L486" class="blob-line-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">url</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">!==</span> <span class="s2">&quot;/&quot;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L487" class="blob-line-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-line-code js-file-line">            <span class="nx">options</span><span class="p">.</span><span class="nx">url</span> <span class="o">=</span> <span class="s2">&quot;/&quot;</span> <span class="o">+</span> <span class="nx">options</span><span class="p">.</span><span class="nx">url</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L488" class="blob-line-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L489" class="blob-line-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-line-code js-file-line">          <span class="nx">options</span><span class="p">.</span><span class="nx">url</span> <span class="o">=</span> <span class="nx">config</span><span class="p">.</span><span class="nx">oauthd_url</span> <span class="o">+</span> <span class="s2">&quot;/request/&quot;</span> <span class="o">+</span> <span class="nx">options</span><span class="p">.</span><span class="nx">oauthio</span><span class="p">.</span><span class="nx">provider</span> <span class="o">+</span> <span class="nx">options</span><span class="p">.</span><span class="nx">url</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L490" class="blob-line-num js-line-number" data-line-number="490"></td>
        <td id="LC490" class="blob-line-code js-file-line">          <span class="nx">options</span><span class="p">.</span><span class="nx">headers</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">headers</span> <span class="o">||</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L491" class="blob-line-num js-line-number" data-line-number="491"></td>
        <td id="LC491" class="blob-line-code js-file-line">          <span class="nx">options</span><span class="p">.</span><span class="nx">headers</span><span class="p">.</span><span class="nx">oauthio</span> <span class="o">=</span> <span class="s2">&quot;k=&quot;</span> <span class="o">+</span> <span class="nx">config</span><span class="p">.</span><span class="nx">key</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L492" class="blob-line-num js-line-number" data-line-number="492"></td>
        <td id="LC492" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">oauthio</span><span class="p">.</span><span class="nx">tokens</span><span class="p">.</span><span class="nx">oauth_token</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span><span class="p">.</span><span class="nx">oauthio</span><span class="p">.</span><span class="nx">tokens</span><span class="p">.</span><span class="nx">oauth_token_secret</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L493" class="blob-line-num js-line-number" data-line-number="493"></td>
        <td id="LC493" class="blob-line-code js-file-line">            <span class="nx">options</span><span class="p">.</span><span class="nx">headers</span><span class="p">.</span><span class="nx">oauthio</span> <span class="o">+=</span> <span class="s2">&quot;&amp;oauthv=1&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L494" class="blob-line-num js-line-number" data-line-number="494"></td>
        <td id="LC494" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L495" class="blob-line-num js-line-number" data-line-number="495"></td>
        <td id="LC495" class="blob-line-code js-file-line">          <span class="k">for</span> <span class="p">(</span><span class="nx">k</span> <span class="k">in</span> <span class="nx">options</span><span class="p">.</span><span class="nx">oauthio</span><span class="p">.</span><span class="nx">tokens</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L496" class="blob-line-num js-line-number" data-line-number="496"></td>
        <td id="LC496" class="blob-line-code js-file-line">            <span class="nx">options</span><span class="p">.</span><span class="nx">headers</span><span class="p">.</span><span class="nx">oauthio</span> <span class="o">+=</span> <span class="s2">&quot;&amp;&quot;</span> <span class="o">+</span> <span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">k</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;=&quot;</span> <span class="o">+</span> <span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">oauthio</span><span class="p">.</span><span class="nx">tokens</span><span class="p">[</span><span class="nx">k</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L497" class="blob-line-num js-line-number" data-line-number="497"></td>
        <td id="LC497" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L498" class="blob-line-num js-line-number" data-line-number="498"></td>
        <td id="LC498" class="blob-line-code js-file-line">          <span class="k">delete</span> <span class="nx">options</span><span class="p">.</span><span class="nx">oauthio</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L499" class="blob-line-num js-line-number" data-line-number="499"></td>
        <td id="LC499" class="blob-line-code js-file-line">          <span class="k">return</span> <span class="nx">$</span><span class="p">.</span><span class="nx">ajax</span><span class="p">(</span><span class="nx">options</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L500" class="blob-line-num js-line-number" data-line-number="500"></td>
        <td id="LC500" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L501" class="blob-line-num js-line-number" data-line-number="501"></td>
        <td id="LC501" class="blob-line-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">oauthio</span><span class="p">.</span><span class="nx">tokens</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L502" class="blob-line-num js-line-number" data-line-number="502"></td>
        <td id="LC502" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">oauthio</span><span class="p">.</span><span class="nx">tokens</span><span class="p">.</span><span class="nx">access_token</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L503" class="blob-line-num js-line-number" data-line-number="503"></td>
        <td id="LC503" class="blob-line-code js-file-line">            <span class="nx">options</span><span class="p">.</span><span class="nx">oauthio</span><span class="p">.</span><span class="nx">tokens</span><span class="p">.</span><span class="nx">token</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">oauthio</span><span class="p">.</span><span class="nx">tokens</span><span class="p">.</span><span class="nx">access_token</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L504" class="blob-line-num js-line-number" data-line-number="504"></td>
        <td id="LC504" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L505" class="blob-line-num js-line-number" data-line-number="505"></td>
        <td id="LC505" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">options</span><span class="p">.</span><span class="nx">url</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/^[a-z]{2,16}:\/\//</span><span class="p">))</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L506" class="blob-line-num js-line-number" data-line-number="506"></td>
        <td id="LC506" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">url</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">!==</span> <span class="s2">&quot;/&quot;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L507" class="blob-line-num js-line-number" data-line-number="507"></td>
        <td id="LC507" class="blob-line-code js-file-line">              <span class="nx">options</span><span class="p">.</span><span class="nx">url</span> <span class="o">=</span> <span class="s2">&quot;/&quot;</span> <span class="o">+</span> <span class="nx">options</span><span class="p">.</span><span class="nx">url</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L508" class="blob-line-num js-line-number" data-line-number="508"></td>
        <td id="LC508" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L509" class="blob-line-num js-line-number" data-line-number="509"></td>
        <td id="LC509" class="blob-line-code js-file-line">            <span class="nx">options</span><span class="p">.</span><span class="nx">url</span> <span class="o">=</span> <span class="nx">request</span><span class="p">.</span><span class="nx">url</span> <span class="o">+</span> <span class="nx">options</span><span class="p">.</span><span class="nx">url</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L510" class="blob-line-num js-line-number" data-line-number="510"></td>
        <td id="LC510" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L511" class="blob-line-num js-line-number" data-line-number="511"></td>
        <td id="LC511" class="blob-line-code js-file-line">          <span class="nx">options</span><span class="p">.</span><span class="nx">url</span> <span class="o">=</span> <span class="nx">Url</span><span class="p">.</span><span class="nx">replaceParam</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">url</span><span class="p">,</span> <span class="nx">options</span><span class="p">.</span><span class="nx">oauthio</span><span class="p">.</span><span class="nx">tokens</span><span class="p">,</span> <span class="nx">request</span><span class="p">.</span><span class="nx">parameters</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L512" class="blob-line-num js-line-number" data-line-number="512"></td>
        <td id="LC512" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">request</span><span class="p">.</span><span class="nx">query</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L513" class="blob-line-num js-line-number" data-line-number="513"></td>
        <td id="LC513" class="blob-line-code js-file-line">            <span class="nx">qs</span> <span class="o">=</span> <span class="p">[];</span></td>
      </tr>
      <tr>
        <td id="L514" class="blob-line-num js-line-number" data-line-number="514"></td>
        <td id="LC514" class="blob-line-code js-file-line">            <span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="k">in</span> <span class="nx">request</span><span class="p">.</span><span class="nx">query</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L515" class="blob-line-num js-line-number" data-line-number="515"></td>
        <td id="LC515" class="blob-line-code js-file-line">              <span class="nx">qs</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;=&quot;</span> <span class="o">+</span> <span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">Url</span><span class="p">.</span><span class="nx">replaceParam</span><span class="p">(</span><span class="nx">request</span><span class="p">.</span><span class="nx">query</span><span class="p">[</span><span class="nx">i</span><span class="p">],</span> <span class="nx">options</span><span class="p">.</span><span class="nx">oauthio</span><span class="p">.</span><span class="nx">tokens</span><span class="p">,</span> <span class="nx">request</span><span class="p">.</span><span class="nx">parameters</span><span class="p">)));</span></td>
      </tr>
      <tr>
        <td id="L516" class="blob-line-num js-line-number" data-line-number="516"></td>
        <td id="LC516" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L517" class="blob-line-num js-line-number" data-line-number="517"></td>
        <td id="LC517" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="nx">__indexOf</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">url</span><span class="p">,</span> <span class="s2">&quot;?&quot;</span><span class="p">)</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L518" class="blob-line-num js-line-number" data-line-number="518"></td>
        <td id="LC518" class="blob-line-code js-file-line">              <span class="nx">options</span><span class="p">.</span><span class="nx">url</span> <span class="o">+=</span> <span class="s2">&quot;&amp;&quot;</span> <span class="o">+</span> <span class="nx">qs</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L519" class="blob-line-num js-line-number" data-line-number="519"></td>
        <td id="LC519" class="blob-line-code js-file-line">            <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L520" class="blob-line-num js-line-number" data-line-number="520"></td>
        <td id="LC520" class="blob-line-code js-file-line">              <span class="nx">options</span><span class="p">.</span><span class="nx">url</span> <span class="o">+=</span> <span class="s2">&quot;?&quot;</span> <span class="o">+</span> <span class="nx">qs</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L521" class="blob-line-num js-line-number" data-line-number="521"></td>
        <td id="LC521" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L522" class="blob-line-num js-line-number" data-line-number="522"></td>
        <td id="LC522" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L523" class="blob-line-num js-line-number" data-line-number="523"></td>
        <td id="LC523" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">request</span><span class="p">.</span><span class="nx">headers</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L524" class="blob-line-num js-line-number" data-line-number="524"></td>
        <td id="LC524" class="blob-line-code js-file-line">            <span class="nx">options</span><span class="p">.</span><span class="nx">headers</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">headers</span> <span class="o">||</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L525" class="blob-line-num js-line-number" data-line-number="525"></td>
        <td id="LC525" class="blob-line-code js-file-line">            <span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="k">in</span> <span class="nx">request</span><span class="p">.</span><span class="nx">headers</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L526" class="blob-line-num js-line-number" data-line-number="526"></td>
        <td id="LC526" class="blob-line-code js-file-line">              <span class="nx">options</span><span class="p">.</span><span class="nx">headers</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">Url</span><span class="p">.</span><span class="nx">replaceParam</span><span class="p">(</span><span class="nx">request</span><span class="p">.</span><span class="nx">headers</span><span class="p">[</span><span class="nx">i</span><span class="p">],</span> <span class="nx">options</span><span class="p">.</span><span class="nx">oauthio</span><span class="p">.</span><span class="nx">tokens</span><span class="p">,</span> <span class="nx">request</span><span class="p">.</span><span class="nx">parameters</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L527" class="blob-line-num js-line-number" data-line-number="527"></td>
        <td id="LC527" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L528" class="blob-line-num js-line-number" data-line-number="528"></td>
        <td id="LC528" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L529" class="blob-line-num js-line-number" data-line-number="529"></td>
        <td id="LC529" class="blob-line-code js-file-line">          <span class="k">delete</span> <span class="nx">options</span><span class="p">.</span><span class="nx">oauthio</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L530" class="blob-line-num js-line-number" data-line-number="530"></td>
        <td id="LC530" class="blob-line-code js-file-line">          <span class="k">return</span> <span class="nx">$</span><span class="p">.</span><span class="nx">ajax</span><span class="p">(</span><span class="nx">options</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L531" class="blob-line-num js-line-number" data-line-number="531"></td>
        <td id="LC531" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L532" class="blob-line-num js-line-number" data-line-number="532"></td>
        <td id="LC532" class="blob-line-code js-file-line">      <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L533" class="blob-line-num js-line-number" data-line-number="533"></td>
        <td id="LC533" class="blob-line-code js-file-line">      <span class="nx">options</span> <span class="o">=</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L534" class="blob-line-num js-line-number" data-line-number="534"></td>
        <td id="LC534" class="blob-line-code js-file-line">      <span class="nx">i</span> <span class="o">=</span> <span class="k">void</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L535" class="blob-line-num js-line-number" data-line-number="535"></td>
        <td id="LC535" class="blob-line-code js-file-line">      <span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="k">in</span> <span class="nx">opts</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L536" class="blob-line-num js-line-number" data-line-number="536"></td>
        <td id="LC536" class="blob-line-code js-file-line">        <span class="nx">options</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">opts</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L537" class="blob-line-num js-line-number" data-line-number="537"></td>
        <td id="LC537" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L538" class="blob-line-num js-line-number" data-line-number="538"></td>
        <td id="LC538" class="blob-line-code js-file-line">      <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">options</span><span class="p">.</span><span class="nx">oauthio</span><span class="p">.</span><span class="nx">request</span> <span class="o">||</span> <span class="nx">options</span><span class="p">.</span><span class="nx">oauthio</span><span class="p">.</span><span class="nx">request</span> <span class="o">===</span> <span class="kc">true</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L539" class="blob-line-num js-line-number" data-line-number="539"></td>
        <td id="LC539" class="blob-line-code js-file-line">        <span class="nx">desc_opts</span> <span class="o">=</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L540" class="blob-line-num js-line-number" data-line-number="540"></td>
        <td id="LC540" class="blob-line-code js-file-line">          <span class="nx">wait</span><span class="o">:</span> <span class="o">!!</span><span class="nx">options</span><span class="p">.</span><span class="nx">oauthio</span><span class="p">.</span><span class="nx">request</span></td>
      </tr>
      <tr>
        <td id="L541" class="blob-line-num js-line-number" data-line-number="541"></td>
        <td id="LC541" class="blob-line-code js-file-line">        <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L542" class="blob-line-num js-line-number" data-line-number="542"></td>
        <td id="LC542" class="blob-line-code js-file-line">        <span class="nx">defer</span> <span class="o">=</span> <span class="nx">$</span> <span class="o">!=</span> <span class="kc">null</span> <span class="o">?</span> <span class="nx">$</span><span class="p">.</span><span class="nx">Deferred</span><span class="p">()</span> <span class="o">:</span> <span class="k">void</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L543" class="blob-line-num js-line-number" data-line-number="543"></td>
        <td id="LC543" class="blob-line-code js-file-line">        <span class="nx">providers_api</span><span class="p">.</span><span class="nx">getDescription</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">oauthio</span><span class="p">.</span><span class="nx">provider</span><span class="p">,</span> <span class="nx">desc_opts</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">desc</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L544" class="blob-line-num js-line-number" data-line-number="544"></td>
        <td id="LC544" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L545" class="blob-line-num js-line-number" data-line-number="545"></td>
        <td id="LC545" class="blob-line-code js-file-line">            <span class="k">return</span> <span class="nx">defer</span> <span class="o">!=</span> <span class="kc">null</span> <span class="o">?</span> <span class="nx">defer</span><span class="p">.</span><span class="nx">reject</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="o">:</span> <span class="k">void</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L546" class="blob-line-num js-line-number" data-line-number="546"></td>
        <td id="LC546" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L547" class="blob-line-num js-line-number" data-line-number="547"></td>
        <td id="LC547" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">oauthio</span><span class="p">.</span><span class="nx">tokens</span><span class="p">.</span><span class="nx">oauth_token</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span><span class="p">.</span><span class="nx">oauthio</span><span class="p">.</span><span class="nx">tokens</span><span class="p">.</span><span class="nx">oauth_token_secret</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L548" class="blob-line-num js-line-number" data-line-number="548"></td>
        <td id="LC548" class="blob-line-code js-file-line">            <span class="nx">options</span><span class="p">.</span><span class="nx">oauthio</span><span class="p">.</span><span class="nx">request</span> <span class="o">=</span> <span class="nx">desc</span><span class="p">.</span><span class="nx">oauth1</span> <span class="o">&amp;&amp;</span> <span class="nx">desc</span><span class="p">.</span><span class="nx">oauth1</span><span class="p">.</span><span class="nx">request</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L549" class="blob-line-num js-line-number" data-line-number="549"></td>
        <td id="LC549" class="blob-line-code js-file-line">          <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L550" class="blob-line-num js-line-number" data-line-number="550"></td>
        <td id="LC550" class="blob-line-code js-file-line">            <span class="nx">options</span><span class="p">.</span><span class="nx">oauthio</span><span class="p">.</span><span class="nx">request</span> <span class="o">=</span> <span class="nx">desc</span><span class="p">.</span><span class="nx">oauth2</span> <span class="o">&amp;&amp;</span> <span class="nx">desc</span><span class="p">.</span><span class="nx">oauth2</span><span class="p">.</span><span class="nx">request</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L551" class="blob-line-num js-line-number" data-line-number="551"></td>
        <td id="LC551" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L552" class="blob-line-num js-line-number" data-line-number="552"></td>
        <td id="LC552" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">defer</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L553" class="blob-line-num js-line-number" data-line-number="553"></td>
        <td id="LC553" class="blob-line-code js-file-line">            <span class="nx">defer</span><span class="p">.</span><span class="nx">resolve</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L554" class="blob-line-num js-line-number" data-line-number="554"></td>
        <td id="LC554" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L555" class="blob-line-num js-line-number" data-line-number="555"></td>
        <td id="LC555" class="blob-line-code js-file-line">        <span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L556" class="blob-line-num js-line-number" data-line-number="556"></td>
        <td id="LC556" class="blob-line-code js-file-line">        <span class="k">return</span> <span class="nx">defer</span> <span class="o">!=</span> <span class="kc">null</span> <span class="o">?</span> <span class="nx">defer</span><span class="p">.</span><span class="nx">then</span><span class="p">(</span><span class="nx">doRequest</span><span class="p">)</span> <span class="o">:</span> <span class="k">void</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L557" class="blob-line-num js-line-number" data-line-number="557"></td>
        <td id="LC557" class="blob-line-code js-file-line">      <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L558" class="blob-line-num js-line-number" data-line-number="558"></td>
        <td id="LC558" class="blob-line-code js-file-line">        <span class="k">return</span> <span class="nx">doRequest</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L559" class="blob-line-num js-line-number" data-line-number="559"></td>
        <td id="LC559" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L560" class="blob-line-num js-line-number" data-line-number="560"></td>
        <td id="LC560" class="blob-line-code js-file-line">    <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L561" class="blob-line-num js-line-number" data-line-number="561"></td>
        <td id="LC561" class="blob-line-code js-file-line">    <span class="nx">http_me</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">opts</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L562" class="blob-line-num js-line-number" data-line-number="562"></td>
        <td id="LC562" class="blob-line-code js-file-line">      <span class="kd">var</span> <span class="nx">defer</span><span class="p">,</span> <span class="nx">desc_opts</span><span class="p">,</span> <span class="nx">doRequest</span><span class="p">,</span> <span class="nx">k</span><span class="p">,</span> <span class="nx">options</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L563" class="blob-line-num js-line-number" data-line-number="563"></td>
        <td id="LC563" class="blob-line-code js-file-line">      <span class="nx">doRequest</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L564" class="blob-line-num js-line-number" data-line-number="564"></td>
        <td id="LC564" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">defer</span><span class="p">,</span> <span class="nx">k</span><span class="p">,</span> <span class="nx">promise</span><span class="p">,</span> <span class="nx">request</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L565" class="blob-line-num js-line-number" data-line-number="565"></td>
        <td id="LC565" class="blob-line-code js-file-line">        <span class="nx">defer</span> <span class="o">=</span> <span class="nx">$</span> <span class="o">!=</span> <span class="kc">null</span> <span class="o">?</span> <span class="nx">$</span><span class="p">.</span><span class="nx">Deferred</span><span class="p">()</span> <span class="o">:</span> <span class="k">void</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L566" class="blob-line-num js-line-number" data-line-number="566"></td>
        <td id="LC566" class="blob-line-code js-file-line">        <span class="nx">request</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">oauthio</span><span class="p">.</span><span class="nx">request</span> <span class="o">||</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L567" class="blob-line-num js-line-number" data-line-number="567"></td>
        <td id="LC567" class="blob-line-code js-file-line">        <span class="nx">options</span><span class="p">.</span><span class="nx">url</span> <span class="o">=</span> <span class="nx">config</span><span class="p">.</span><span class="nx">oauthd_url</span> <span class="o">+</span> <span class="s2">&quot;/auth/&quot;</span> <span class="o">+</span> <span class="nx">options</span><span class="p">.</span><span class="nx">oauthio</span><span class="p">.</span><span class="nx">provider</span> <span class="o">+</span> <span class="s2">&quot;/me&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L568" class="blob-line-num js-line-number" data-line-number="568"></td>
        <td id="LC568" class="blob-line-code js-file-line">        <span class="nx">options</span><span class="p">.</span><span class="nx">headers</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">headers</span> <span class="o">||</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L569" class="blob-line-num js-line-number" data-line-number="569"></td>
        <td id="LC569" class="blob-line-code js-file-line">        <span class="nx">options</span><span class="p">.</span><span class="nx">headers</span><span class="p">.</span><span class="nx">oauthio</span> <span class="o">=</span> <span class="s2">&quot;k=&quot;</span> <span class="o">+</span> <span class="nx">config</span><span class="p">.</span><span class="nx">key</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L570" class="blob-line-num js-line-number" data-line-number="570"></td>
        <td id="LC570" class="blob-line-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">oauthio</span><span class="p">.</span><span class="nx">tokens</span><span class="p">.</span><span class="nx">oauth_token</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span><span class="p">.</span><span class="nx">oauthio</span><span class="p">.</span><span class="nx">tokens</span><span class="p">.</span><span class="nx">oauth_token_secret</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L571" class="blob-line-num js-line-number" data-line-number="571"></td>
        <td id="LC571" class="blob-line-code js-file-line">          <span class="nx">options</span><span class="p">.</span><span class="nx">headers</span><span class="p">.</span><span class="nx">oauthio</span> <span class="o">+=</span> <span class="s2">&quot;&amp;oauthv=1&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L572" class="blob-line-num js-line-number" data-line-number="572"></td>
        <td id="LC572" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L573" class="blob-line-num js-line-number" data-line-number="573"></td>
        <td id="LC573" class="blob-line-code js-file-line">        <span class="k">for</span> <span class="p">(</span><span class="nx">k</span> <span class="k">in</span> <span class="nx">options</span><span class="p">.</span><span class="nx">oauthio</span><span class="p">.</span><span class="nx">tokens</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L574" class="blob-line-num js-line-number" data-line-number="574"></td>
        <td id="LC574" class="blob-line-code js-file-line">          <span class="nx">options</span><span class="p">.</span><span class="nx">headers</span><span class="p">.</span><span class="nx">oauthio</span> <span class="o">+=</span> <span class="s2">&quot;&amp;&quot;</span> <span class="o">+</span> <span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">k</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;=&quot;</span> <span class="o">+</span> <span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">oauthio</span><span class="p">.</span><span class="nx">tokens</span><span class="p">[</span><span class="nx">k</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L575" class="blob-line-num js-line-number" data-line-number="575"></td>
        <td id="LC575" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L576" class="blob-line-num js-line-number" data-line-number="576"></td>
        <td id="LC576" class="blob-line-code js-file-line">        <span class="k">delete</span> <span class="nx">options</span><span class="p">.</span><span class="nx">oauthio</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L577" class="blob-line-num js-line-number" data-line-number="577"></td>
        <td id="LC577" class="blob-line-code js-file-line">        <span class="nx">promise</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">ajax</span><span class="p">(</span><span class="nx">options</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L578" class="blob-line-num js-line-number" data-line-number="578"></td>
        <td id="LC578" class="blob-line-code js-file-line">        <span class="nx">$</span><span class="p">.</span><span class="nx">when</span><span class="p">(</span><span class="nx">promise</span><span class="p">).</span><span class="nx">done</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L579" class="blob-line-num js-line-number" data-line-number="579"></td>
        <td id="LC579" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">defer</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L580" class="blob-line-num js-line-number" data-line-number="580"></td>
        <td id="LC580" class="blob-line-code js-file-line">            <span class="nx">defer</span><span class="p">.</span><span class="nx">resolve</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">data</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L581" class="blob-line-num js-line-number" data-line-number="581"></td>
        <td id="LC581" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L582" class="blob-line-num js-line-number" data-line-number="582"></td>
        <td id="LC582" class="blob-line-code js-file-line">        <span class="p">}).</span><span class="nx">fail</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L583" class="blob-line-num js-line-number" data-line-number="583"></td>
        <td id="LC583" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">responseJSON</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L584" class="blob-line-num js-line-number" data-line-number="584"></td>
        <td id="LC584" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="nx">defer</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L585" class="blob-line-num js-line-number" data-line-number="585"></td>
        <td id="LC585" class="blob-line-code js-file-line">              <span class="nx">defer</span><span class="p">.</span><span class="nx">reject</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">responseJSON</span><span class="p">.</span><span class="nx">data</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L586" class="blob-line-num js-line-number" data-line-number="586"></td>
        <td id="LC586" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L587" class="blob-line-num js-line-number" data-line-number="587"></td>
        <td id="LC587" class="blob-line-code js-file-line">          <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L588" class="blob-line-num js-line-number" data-line-number="588"></td>
        <td id="LC588" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="nx">defer</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L589" class="blob-line-num js-line-number" data-line-number="589"></td>
        <td id="LC589" class="blob-line-code js-file-line">              <span class="nx">defer</span><span class="p">.</span><span class="nx">reject</span><span class="p">(</span><span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s2">&quot;An error occured while trying to access the resource&quot;</span><span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L590" class="blob-line-num js-line-number" data-line-number="590"></td>
        <td id="LC590" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L591" class="blob-line-num js-line-number" data-line-number="591"></td>
        <td id="LC591" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L592" class="blob-line-num js-line-number" data-line-number="592"></td>
        <td id="LC592" class="blob-line-code js-file-line">        <span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L593" class="blob-line-num js-line-number" data-line-number="593"></td>
        <td id="LC593" class="blob-line-code js-file-line">        <span class="k">return</span> <span class="nx">defer</span> <span class="o">!=</span> <span class="kc">null</span> <span class="o">?</span> <span class="nx">defer</span><span class="p">.</span><span class="nx">promise</span><span class="p">()</span> <span class="o">:</span> <span class="k">void</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L594" class="blob-line-num js-line-number" data-line-number="594"></td>
        <td id="LC594" class="blob-line-code js-file-line">      <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L595" class="blob-line-num js-line-number" data-line-number="595"></td>
        <td id="LC595" class="blob-line-code js-file-line">      <span class="nx">options</span> <span class="o">=</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L596" class="blob-line-num js-line-number" data-line-number="596"></td>
        <td id="LC596" class="blob-line-code js-file-line">      <span class="k">for</span> <span class="p">(</span><span class="nx">k</span> <span class="k">in</span> <span class="nx">opts</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L597" class="blob-line-num js-line-number" data-line-number="597"></td>
        <td id="LC597" class="blob-line-code js-file-line">        <span class="nx">options</span><span class="p">[</span><span class="nx">k</span><span class="p">]</span> <span class="o">=</span> <span class="nx">opts</span><span class="p">[</span><span class="nx">k</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L598" class="blob-line-num js-line-number" data-line-number="598"></td>
        <td id="LC598" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L599" class="blob-line-num js-line-number" data-line-number="599"></td>
        <td id="LC599" class="blob-line-code js-file-line">      <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">options</span><span class="p">.</span><span class="nx">oauthio</span><span class="p">.</span><span class="nx">request</span> <span class="o">||</span> <span class="nx">options</span><span class="p">.</span><span class="nx">oauthio</span><span class="p">.</span><span class="nx">request</span> <span class="o">===</span> <span class="kc">true</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L600" class="blob-line-num js-line-number" data-line-number="600"></td>
        <td id="LC600" class="blob-line-code js-file-line">        <span class="nx">desc_opts</span> <span class="o">=</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L601" class="blob-line-num js-line-number" data-line-number="601"></td>
        <td id="LC601" class="blob-line-code js-file-line">          <span class="nx">wait</span><span class="o">:</span> <span class="o">!!</span><span class="nx">options</span><span class="p">.</span><span class="nx">oauthio</span><span class="p">.</span><span class="nx">request</span></td>
      </tr>
      <tr>
        <td id="L602" class="blob-line-num js-line-number" data-line-number="602"></td>
        <td id="LC602" class="blob-line-code js-file-line">        <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L603" class="blob-line-num js-line-number" data-line-number="603"></td>
        <td id="LC603" class="blob-line-code js-file-line">        <span class="nx">defer</span> <span class="o">=</span> <span class="nx">$</span> <span class="o">!=</span> <span class="kc">null</span> <span class="o">?</span> <span class="nx">$</span><span class="p">.</span><span class="nx">Deferred</span><span class="p">()</span> <span class="o">:</span> <span class="k">void</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L604" class="blob-line-num js-line-number" data-line-number="604"></td>
        <td id="LC604" class="blob-line-code js-file-line">        <span class="nx">providers_api</span><span class="p">.</span><span class="nx">getDescription</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">oauthio</span><span class="p">.</span><span class="nx">provider</span><span class="p">,</span> <span class="nx">desc_opts</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">desc</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L605" class="blob-line-num js-line-number" data-line-number="605"></td>
        <td id="LC605" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L606" class="blob-line-num js-line-number" data-line-number="606"></td>
        <td id="LC606" class="blob-line-code js-file-line">            <span class="k">return</span> <span class="nx">defer</span> <span class="o">!=</span> <span class="kc">null</span> <span class="o">?</span> <span class="nx">defer</span><span class="p">.</span><span class="nx">reject</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="o">:</span> <span class="k">void</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L607" class="blob-line-num js-line-number" data-line-number="607"></td>
        <td id="LC607" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L608" class="blob-line-num js-line-number" data-line-number="608"></td>
        <td id="LC608" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">oauthio</span><span class="p">.</span><span class="nx">tokens</span><span class="p">.</span><span class="nx">oauth_token</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span><span class="p">.</span><span class="nx">oauthio</span><span class="p">.</span><span class="nx">tokens</span><span class="p">.</span><span class="nx">oauth_token_secret</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L609" class="blob-line-num js-line-number" data-line-number="609"></td>
        <td id="LC609" class="blob-line-code js-file-line">            <span class="nx">options</span><span class="p">.</span><span class="nx">oauthio</span><span class="p">.</span><span class="nx">request</span> <span class="o">=</span> <span class="nx">desc</span><span class="p">.</span><span class="nx">oauth1</span> <span class="o">&amp;&amp;</span> <span class="nx">desc</span><span class="p">.</span><span class="nx">oauth1</span><span class="p">.</span><span class="nx">request</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L610" class="blob-line-num js-line-number" data-line-number="610"></td>
        <td id="LC610" class="blob-line-code js-file-line">          <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L611" class="blob-line-num js-line-number" data-line-number="611"></td>
        <td id="LC611" class="blob-line-code js-file-line">            <span class="nx">options</span><span class="p">.</span><span class="nx">oauthio</span><span class="p">.</span><span class="nx">request</span> <span class="o">=</span> <span class="nx">desc</span><span class="p">.</span><span class="nx">oauth2</span> <span class="o">&amp;&amp;</span> <span class="nx">desc</span><span class="p">.</span><span class="nx">oauth2</span><span class="p">.</span><span class="nx">request</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L612" class="blob-line-num js-line-number" data-line-number="612"></td>
        <td id="LC612" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L613" class="blob-line-num js-line-number" data-line-number="613"></td>
        <td id="LC613" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">defer</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L614" class="blob-line-num js-line-number" data-line-number="614"></td>
        <td id="LC614" class="blob-line-code js-file-line">            <span class="nx">defer</span><span class="p">.</span><span class="nx">resolve</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L615" class="blob-line-num js-line-number" data-line-number="615"></td>
        <td id="LC615" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L616" class="blob-line-num js-line-number" data-line-number="616"></td>
        <td id="LC616" class="blob-line-code js-file-line">        <span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L617" class="blob-line-num js-line-number" data-line-number="617"></td>
        <td id="LC617" class="blob-line-code js-file-line">        <span class="k">return</span> <span class="nx">defer</span> <span class="o">!=</span> <span class="kc">null</span> <span class="o">?</span> <span class="nx">defer</span><span class="p">.</span><span class="nx">then</span><span class="p">(</span><span class="nx">doRequest</span><span class="p">)</span> <span class="o">:</span> <span class="k">void</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L618" class="blob-line-num js-line-number" data-line-number="618"></td>
        <td id="LC618" class="blob-line-code js-file-line">      <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L619" class="blob-line-num js-line-number" data-line-number="619"></td>
        <td id="LC619" class="blob-line-code js-file-line">        <span class="k">return</span> <span class="nx">doRequest</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L620" class="blob-line-num js-line-number" data-line-number="620"></td>
        <td id="LC620" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L621" class="blob-line-num js-line-number" data-line-number="621"></td>
        <td id="LC621" class="blob-line-code js-file-line">    <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L622" class="blob-line-num js-line-number" data-line-number="622"></td>
        <td id="LC622" class="blob-line-code js-file-line">    <span class="nx">mkHttp</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">provider</span><span class="p">,</span> <span class="nx">tokens</span><span class="p">,</span> <span class="nx">request</span><span class="p">,</span> <span class="nx">method</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L623" class="blob-line-num js-line-number" data-line-number="623"></td>
        <td id="LC623" class="blob-line-code js-file-line">      <span class="kd">var</span> <span class="nx">base</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L624" class="blob-line-num js-line-number" data-line-number="624"></td>
        <td id="LC624" class="blob-line-code js-file-line">      <span class="nx">base</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L625" class="blob-line-num js-line-number" data-line-number="625"></td>
        <td id="LC625" class="blob-line-code js-file-line">      <span class="k">return</span> <span class="kd">function</span><span class="p">(</span><span class="nx">opts</span><span class="p">,</span> <span class="nx">opts2</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L626" class="blob-line-num js-line-number" data-line-number="626"></td>
        <td id="LC626" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">options</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L627" class="blob-line-num js-line-number" data-line-number="627"></td>
        <td id="LC627" class="blob-line-code js-file-line">        <span class="nx">options</span> <span class="o">=</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L628" class="blob-line-num js-line-number" data-line-number="628"></td>
        <td id="LC628" class="blob-line-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">opts</span> <span class="o">===</span> <span class="s2">&quot;string&quot;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L629" class="blob-line-num js-line-number" data-line-number="629"></td>
        <td id="LC629" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">opts2</span> <span class="o">===</span> <span class="s2">&quot;object&quot;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L630" class="blob-line-num js-line-number" data-line-number="630"></td>
        <td id="LC630" class="blob-line-code js-file-line">            <span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="k">in</span> <span class="nx">opts2</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L631" class="blob-line-num js-line-number" data-line-number="631"></td>
        <td id="LC631" class="blob-line-code js-file-line">              <span class="nx">options</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">opts2</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L632" class="blob-line-num js-line-number" data-line-number="632"></td>
        <td id="LC632" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L633" class="blob-line-num js-line-number" data-line-number="633"></td>
        <td id="LC633" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L634" class="blob-line-num js-line-number" data-line-number="634"></td>
        <td id="LC634" class="blob-line-code js-file-line">          <span class="nx">options</span><span class="p">.</span><span class="nx">url</span> <span class="o">=</span> <span class="nx">opts</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L635" class="blob-line-num js-line-number" data-line-number="635"></td>
        <td id="LC635" class="blob-line-code js-file-line">        <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">opts</span> <span class="o">===</span> <span class="s2">&quot;object&quot;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L636" class="blob-line-num js-line-number" data-line-number="636"></td>
        <td id="LC636" class="blob-line-code js-file-line">          <span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="k">in</span> <span class="nx">opts</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L637" class="blob-line-num js-line-number" data-line-number="637"></td>
        <td id="LC637" class="blob-line-code js-file-line">            <span class="nx">options</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">opts</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L638" class="blob-line-num js-line-number" data-line-number="638"></td>
        <td id="LC638" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L639" class="blob-line-num js-line-number" data-line-number="639"></td>
        <td id="LC639" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L640" class="blob-line-num js-line-number" data-line-number="640"></td>
        <td id="LC640" class="blob-line-code js-file-line">        <span class="nx">options</span><span class="p">.</span><span class="nx">type</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">type</span> <span class="o">||</span> <span class="nx">method</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L641" class="blob-line-num js-line-number" data-line-number="641"></td>
        <td id="LC641" class="blob-line-code js-file-line">        <span class="nx">options</span><span class="p">.</span><span class="nx">oauthio</span> <span class="o">=</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L642" class="blob-line-num js-line-number" data-line-number="642"></td>
        <td id="LC642" class="blob-line-code js-file-line">          <span class="nx">provider</span><span class="o">:</span> <span class="nx">provider</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L643" class="blob-line-num js-line-number" data-line-number="643"></td>
        <td id="LC643" class="blob-line-code js-file-line">          <span class="nx">tokens</span><span class="o">:</span> <span class="nx">tokens</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L644" class="blob-line-num js-line-number" data-line-number="644"></td>
        <td id="LC644" class="blob-line-code js-file-line">          <span class="nx">request</span><span class="o">:</span> <span class="nx">request</span></td>
      </tr>
      <tr>
        <td id="L645" class="blob-line-num js-line-number" data-line-number="645"></td>
        <td id="LC645" class="blob-line-code js-file-line">        <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L646" class="blob-line-num js-line-number" data-line-number="646"></td>
        <td id="LC646" class="blob-line-code js-file-line">        <span class="k">return</span> <span class="nx">base</span><span class="p">.</span><span class="nx">http</span><span class="p">(</span><span class="nx">options</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L647" class="blob-line-num js-line-number" data-line-number="647"></td>
        <td id="LC647" class="blob-line-code js-file-line">      <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L648" class="blob-line-num js-line-number" data-line-number="648"></td>
        <td id="LC648" class="blob-line-code js-file-line">    <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L649" class="blob-line-num js-line-number" data-line-number="649"></td>
        <td id="LC649" class="blob-line-code js-file-line">    <span class="nx">mkHttpMe</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">provider</span><span class="p">,</span> <span class="nx">tokens</span><span class="p">,</span> <span class="nx">request</span><span class="p">,</span> <span class="nx">method</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L650" class="blob-line-num js-line-number" data-line-number="650"></td>
        <td id="LC650" class="blob-line-code js-file-line">      <span class="kd">var</span> <span class="nx">base</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L651" class="blob-line-num js-line-number" data-line-number="651"></td>
        <td id="LC651" class="blob-line-code js-file-line">      <span class="nx">base</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L652" class="blob-line-num js-line-number" data-line-number="652"></td>
        <td id="LC652" class="blob-line-code js-file-line">      <span class="k">return</span> <span class="kd">function</span><span class="p">(</span><span class="nx">filter</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L653" class="blob-line-num js-line-number" data-line-number="653"></td>
        <td id="LC653" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">options</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L654" class="blob-line-num js-line-number" data-line-number="654"></td>
        <td id="LC654" class="blob-line-code js-file-line">        <span class="nx">options</span> <span class="o">=</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L655" class="blob-line-num js-line-number" data-line-number="655"></td>
        <td id="LC655" class="blob-line-code js-file-line">        <span class="nx">options</span><span class="p">.</span><span class="nx">type</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">type</span> <span class="o">||</span> <span class="nx">method</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L656" class="blob-line-num js-line-number" data-line-number="656"></td>
        <td id="LC656" class="blob-line-code js-file-line">        <span class="nx">options</span><span class="p">.</span><span class="nx">oauthio</span> <span class="o">=</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L657" class="blob-line-num js-line-number" data-line-number="657"></td>
        <td id="LC657" class="blob-line-code js-file-line">          <span class="nx">provider</span><span class="o">:</span> <span class="nx">provider</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L658" class="blob-line-num js-line-number" data-line-number="658"></td>
        <td id="LC658" class="blob-line-code js-file-line">          <span class="nx">tokens</span><span class="o">:</span> <span class="nx">tokens</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L659" class="blob-line-num js-line-number" data-line-number="659"></td>
        <td id="LC659" class="blob-line-code js-file-line">          <span class="nx">request</span><span class="o">:</span> <span class="nx">request</span></td>
      </tr>
      <tr>
        <td id="L660" class="blob-line-num js-line-number" data-line-number="660"></td>
        <td id="LC660" class="blob-line-code js-file-line">        <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L661" class="blob-line-num js-line-number" data-line-number="661"></td>
        <td id="LC661" class="blob-line-code js-file-line">        <span class="nx">options</span><span class="p">.</span><span class="nx">data</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">data</span> <span class="o">||</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L662" class="blob-line-num js-line-number" data-line-number="662"></td>
        <td id="LC662" class="blob-line-code js-file-line">        <span class="nx">options</span><span class="p">.</span><span class="nx">data</span><span class="p">.</span><span class="nx">filter</span> <span class="o">=</span> <span class="p">(</span><span class="nx">filter</span> <span class="o">?</span> <span class="nx">filter</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;,&quot;</span><span class="p">)</span> <span class="o">:</span> <span class="kc">undefined</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L663" class="blob-line-num js-line-number" data-line-number="663"></td>
        <td id="LC663" class="blob-line-code js-file-line">        <span class="k">return</span> <span class="nx">base</span><span class="p">.</span><span class="nx">http_me</span><span class="p">(</span><span class="nx">options</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L664" class="blob-line-num js-line-number" data-line-number="664"></td>
        <td id="LC664" class="blob-line-code js-file-line">      <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L665" class="blob-line-num js-line-number" data-line-number="665"></td>
        <td id="LC665" class="blob-line-code js-file-line">    <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L666" class="blob-line-num js-line-number" data-line-number="666"></td>
        <td id="LC666" class="blob-line-code js-file-line">    <span class="nx">sendCallback</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">opts</span><span class="p">,</span> <span class="nx">defer</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L667" class="blob-line-num js-line-number" data-line-number="667"></td>
        <td id="LC667" class="blob-line-code js-file-line">      <span class="kd">var</span> <span class="nx">base</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">e</span><span class="p">,</span> <span class="nx">err</span><span class="p">,</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">k</span><span class="p">,</span> <span class="nx">make_res</span><span class="p">,</span> <span class="nx">request</span><span class="p">,</span> <span class="nx">res</span><span class="p">,</span> <span class="nx">tokens</span><span class="p">,</span> <span class="nx">v</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L668" class="blob-line-num js-line-number" data-line-number="668"></td>
        <td id="LC668" class="blob-line-code js-file-line">      <span class="nx">base</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L669" class="blob-line-num js-line-number" data-line-number="669"></td>
        <td id="LC669" class="blob-line-code js-file-line">      <span class="nx">data</span> <span class="o">=</span> <span class="k">void</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L670" class="blob-line-num js-line-number" data-line-number="670"></td>
        <td id="LC670" class="blob-line-code js-file-line">      <span class="nx">err</span> <span class="o">=</span> <span class="k">void</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L671" class="blob-line-num js-line-number" data-line-number="671"></td>
        <td id="LC671" class="blob-line-code js-file-line">      <span class="k">try</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L672" class="blob-line-num js-line-number" data-line-number="672"></td>
        <td id="LC672" class="blob-line-code js-file-line">        <span class="nx">data</span> <span class="o">=</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">opts</span><span class="p">.</span><span class="nx">data</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L673" class="blob-line-num js-line-number" data-line-number="673"></td>
        <td id="LC673" class="blob-line-code js-file-line">      <span class="p">}</span> <span class="k">catch</span> <span class="p">(</span><span class="nx">_error</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L674" class="blob-line-num js-line-number" data-line-number="674"></td>
        <td id="LC674" class="blob-line-code js-file-line">        <span class="nx">e</span> <span class="o">=</span> <span class="nx">_error</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L675" class="blob-line-num js-line-number" data-line-number="675"></td>
        <td id="LC675" class="blob-line-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="nx">defer</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L676" class="blob-line-num js-line-number" data-line-number="676"></td>
        <td id="LC676" class="blob-line-code js-file-line">          <span class="nx">defer</span><span class="p">.</span><span class="nx">reject</span><span class="p">(</span><span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s2">&quot;Error while parsing result&quot;</span><span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L677" class="blob-line-num js-line-number" data-line-number="677"></td>
        <td id="LC677" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L678" class="blob-line-num js-line-number" data-line-number="678"></td>
        <td id="LC678" class="blob-line-code js-file-line">        <span class="k">return</span> <span class="nx">opts</span><span class="p">.</span><span class="nx">callback</span><span class="p">(</span><span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s2">&quot;Error while parsing result&quot;</span><span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L679" class="blob-line-num js-line-number" data-line-number="679"></td>
        <td id="LC679" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L680" class="blob-line-num js-line-number" data-line-number="680"></td>
        <td id="LC680" class="blob-line-code js-file-line">      <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">data</span> <span class="o">||</span> <span class="o">!</span><span class="nx">data</span><span class="p">.</span><span class="nx">provider</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L681" class="blob-line-num js-line-number" data-line-number="681"></td>
        <td id="LC681" class="blob-line-code js-file-line">        <span class="k">return</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L682" class="blob-line-num js-line-number" data-line-number="682"></td>
        <td id="LC682" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L683" class="blob-line-num js-line-number" data-line-number="683"></td>
        <td id="LC683" class="blob-line-code js-file-line">      <span class="k">if</span> <span class="p">(</span><span class="nx">opts</span><span class="p">.</span><span class="nx">provider</span> <span class="o">&amp;&amp;</span> <span class="nx">data</span><span class="p">.</span><span class="nx">provider</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()</span> <span class="o">!==</span> <span class="nx">opts</span><span class="p">.</span><span class="nx">provider</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">())</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L684" class="blob-line-num js-line-number" data-line-number="684"></td>
        <td id="LC684" class="blob-line-code js-file-line">        <span class="nx">err</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s2">&quot;Returned provider name does not match asked provider&quot;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L685" class="blob-line-num js-line-number" data-line-number="685"></td>
        <td id="LC685" class="blob-line-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="nx">defer</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L686" class="blob-line-num js-line-number" data-line-number="686"></td>
        <td id="LC686" class="blob-line-code js-file-line">          <span class="nx">defer</span><span class="p">.</span><span class="nx">reject</span><span class="p">(</span><span class="nx">err</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L687" class="blob-line-num js-line-number" data-line-number="687"></td>
        <td id="LC687" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L688" class="blob-line-num js-line-number" data-line-number="688"></td>
        <td id="LC688" class="blob-line-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="nx">opts</span><span class="p">.</span><span class="nx">callback</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">opts</span><span class="p">.</span><span class="nx">callback</span> <span class="o">===</span> <span class="s2">&quot;function&quot;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L689" class="blob-line-num js-line-number" data-line-number="689"></td>
        <td id="LC689" class="blob-line-code js-file-line">          <span class="k">return</span> <span class="nx">opts</span><span class="p">.</span><span class="nx">callback</span><span class="p">(</span><span class="nx">err</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L690" class="blob-line-num js-line-number" data-line-number="690"></td>
        <td id="LC690" class="blob-line-code js-file-line">        <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L691" class="blob-line-num js-line-number" data-line-number="691"></td>
        <td id="LC691" class="blob-line-code js-file-line">          <span class="k">return</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L692" class="blob-line-num js-line-number" data-line-number="692"></td>
        <td id="LC692" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L693" class="blob-line-num js-line-number" data-line-number="693"></td>
        <td id="LC693" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L694" class="blob-line-num js-line-number" data-line-number="694"></td>
        <td id="LC694" class="blob-line-code js-file-line">      <span class="k">if</span> <span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">status</span> <span class="o">===</span> <span class="s2">&quot;error&quot;</span> <span class="o">||</span> <span class="nx">data</span><span class="p">.</span><span class="nx">status</span> <span class="o">===</span> <span class="s2">&quot;fail&quot;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L695" class="blob-line-num js-line-number" data-line-number="695"></td>
        <td id="LC695" class="blob-line-code js-file-line">        <span class="nx">err</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">message</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L696" class="blob-line-num js-line-number" data-line-number="696"></td>
        <td id="LC696" class="blob-line-code js-file-line">        <span class="nx">err</span><span class="p">.</span><span class="nx">body</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">data</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L697" class="blob-line-num js-line-number" data-line-number="697"></td>
        <td id="LC697" class="blob-line-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="nx">defer</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L698" class="blob-line-num js-line-number" data-line-number="698"></td>
        <td id="LC698" class="blob-line-code js-file-line">          <span class="nx">defer</span><span class="p">.</span><span class="nx">reject</span><span class="p">(</span><span class="nx">err</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L699" class="blob-line-num js-line-number" data-line-number="699"></td>
        <td id="LC699" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L700" class="blob-line-num js-line-number" data-line-number="700"></td>
        <td id="LC700" class="blob-line-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="nx">opts</span><span class="p">.</span><span class="nx">callback</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">opts</span><span class="p">.</span><span class="nx">callback</span> <span class="o">===</span> <span class="s2">&quot;function&quot;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L701" class="blob-line-num js-line-number" data-line-number="701"></td>
        <td id="LC701" class="blob-line-code js-file-line">          <span class="k">return</span> <span class="nx">opts</span><span class="p">.</span><span class="nx">callback</span><span class="p">(</span><span class="nx">err</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L702" class="blob-line-num js-line-number" data-line-number="702"></td>
        <td id="LC702" class="blob-line-code js-file-line">        <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L703" class="blob-line-num js-line-number" data-line-number="703"></td>
        <td id="LC703" class="blob-line-code js-file-line">          <span class="k">return</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L704" class="blob-line-num js-line-number" data-line-number="704"></td>
        <td id="LC704" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L705" class="blob-line-num js-line-number" data-line-number="705"></td>
        <td id="LC705" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L706" class="blob-line-num js-line-number" data-line-number="706"></td>
        <td id="LC706" class="blob-line-code js-file-line">      <span class="k">if</span> <span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">status</span> <span class="o">!==</span> <span class="s2">&quot;success&quot;</span> <span class="o">||</span> <span class="o">!</span><span class="nx">data</span><span class="p">.</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L707" class="blob-line-num js-line-number" data-line-number="707"></td>
        <td id="LC707" class="blob-line-code js-file-line">        <span class="nx">err</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L708" class="blob-line-num js-line-number" data-line-number="708"></td>
        <td id="LC708" class="blob-line-code js-file-line">        <span class="nx">err</span><span class="p">.</span><span class="nx">body</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">data</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L709" class="blob-line-num js-line-number" data-line-number="709"></td>
        <td id="LC709" class="blob-line-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="nx">defer</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L710" class="blob-line-num js-line-number" data-line-number="710"></td>
        <td id="LC710" class="blob-line-code js-file-line">          <span class="nx">defer</span><span class="p">.</span><span class="nx">reject</span><span class="p">(</span><span class="nx">err</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L711" class="blob-line-num js-line-number" data-line-number="711"></td>
        <td id="LC711" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L712" class="blob-line-num js-line-number" data-line-number="712"></td>
        <td id="LC712" class="blob-line-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="nx">opts</span><span class="p">.</span><span class="nx">callback</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">opts</span><span class="p">.</span><span class="nx">callback</span> <span class="o">===</span> <span class="s2">&quot;function&quot;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L713" class="blob-line-num js-line-number" data-line-number="713"></td>
        <td id="LC713" class="blob-line-code js-file-line">          <span class="k">return</span> <span class="nx">opts</span><span class="p">.</span><span class="nx">callback</span><span class="p">(</span><span class="nx">err</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L714" class="blob-line-num js-line-number" data-line-number="714"></td>
        <td id="LC714" class="blob-line-code js-file-line">        <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L715" class="blob-line-num js-line-number" data-line-number="715"></td>
        <td id="LC715" class="blob-line-code js-file-line">          <span class="k">return</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L716" class="blob-line-num js-line-number" data-line-number="716"></td>
        <td id="LC716" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L717" class="blob-line-num js-line-number" data-line-number="717"></td>
        <td id="LC717" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L718" class="blob-line-num js-line-number" data-line-number="718"></td>
        <td id="LC718" class="blob-line-code js-file-line">      <span class="nx">data</span><span class="p">.</span><span class="nx">state</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">state</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\s+/g</span><span class="p">,</span> <span class="s2">&quot;&quot;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L719" class="blob-line-num js-line-number" data-line-number="719"></td>
        <td id="LC719" class="blob-line-code js-file-line">      <span class="k">for</span> <span class="p">(</span><span class="nx">k</span> <span class="k">in</span> <span class="nx">client_states</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L720" class="blob-line-num js-line-number" data-line-number="720"></td>
        <td id="LC720" class="blob-line-code js-file-line">        <span class="nx">v</span> <span class="o">=</span> <span class="nx">client_states</span><span class="p">[</span><span class="nx">k</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L721" class="blob-line-num js-line-number" data-line-number="721"></td>
        <td id="LC721" class="blob-line-code js-file-line">        <span class="nx">client_states</span><span class="p">[</span><span class="nx">k</span><span class="p">]</span> <span class="o">=</span> <span class="nx">v</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\s+/g</span><span class="p">,</span> <span class="s2">&quot;&quot;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L722" class="blob-line-num js-line-number" data-line-number="722"></td>
        <td id="LC722" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L723" class="blob-line-num js-line-number" data-line-number="723"></td>
        <td id="LC723" class="blob-line-code js-file-line">      <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">data</span><span class="p">.</span><span class="nx">state</span> <span class="o">||</span> <span class="nx">client_states</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">state</span><span class="p">)</span> <span class="o">===</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L724" class="blob-line-num js-line-number" data-line-number="724"></td>
        <td id="LC724" class="blob-line-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="nx">defer</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L725" class="blob-line-num js-line-number" data-line-number="725"></td>
        <td id="LC725" class="blob-line-code js-file-line">          <span class="nx">defer</span><span class="p">.</span><span class="nx">reject</span><span class="p">(</span><span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s2">&quot;State is not matching&quot;</span><span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L726" class="blob-line-num js-line-number" data-line-number="726"></td>
        <td id="LC726" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L727" class="blob-line-num js-line-number" data-line-number="727"></td>
        <td id="LC727" class="blob-line-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="nx">opts</span><span class="p">.</span><span class="nx">callback</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">opts</span><span class="p">.</span><span class="nx">callback</span> <span class="o">===</span> <span class="s2">&quot;function&quot;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L728" class="blob-line-num js-line-number" data-line-number="728"></td>
        <td id="LC728" class="blob-line-code js-file-line">          <span class="k">return</span> <span class="nx">opts</span><span class="p">.</span><span class="nx">callback</span><span class="p">(</span><span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s2">&quot;State is not matching&quot;</span><span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L729" class="blob-line-num js-line-number" data-line-number="729"></td>
        <td id="LC729" class="blob-line-code js-file-line">        <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L730" class="blob-line-num js-line-number" data-line-number="730"></td>
        <td id="LC730" class="blob-line-code js-file-line">          <span class="k">return</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L731" class="blob-line-num js-line-number" data-line-number="731"></td>
        <td id="LC731" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L732" class="blob-line-num js-line-number" data-line-number="732"></td>
        <td id="LC732" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L733" class="blob-line-num js-line-number" data-line-number="733"></td>
        <td id="LC733" class="blob-line-code js-file-line">      <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">opts</span><span class="p">.</span><span class="nx">provider</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L734" class="blob-line-num js-line-number" data-line-number="734"></td>
        <td id="LC734" class="blob-line-code js-file-line">        <span class="nx">data</span><span class="p">.</span><span class="nx">data</span><span class="p">.</span><span class="nx">provider</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">provider</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L735" class="blob-line-num js-line-number" data-line-number="735"></td>
        <td id="LC735" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L736" class="blob-line-num js-line-number" data-line-number="736"></td>
        <td id="LC736" class="blob-line-code js-file-line">      <span class="nx">res</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">data</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L737" class="blob-line-num js-line-number" data-line-number="737"></td>
        <td id="LC737" class="blob-line-code js-file-line">      <span class="k">if</span> <span class="p">(</span><span class="nx">cache</span><span class="p">.</span><span class="nx">cacheEnabled</span><span class="p">(</span><span class="nx">opts</span><span class="p">.</span><span class="nx">cache</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">res</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L738" class="blob-line-num js-line-number" data-line-number="738"></td>
        <td id="LC738" class="blob-line-code js-file-line">        <span class="nx">cache</span><span class="p">.</span><span class="nx">storeCache</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">provider</span><span class="p">,</span> <span class="nx">res</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L739" class="blob-line-num js-line-number" data-line-number="739"></td>
        <td id="LC739" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L740" class="blob-line-num js-line-number" data-line-number="740"></td>
        <td id="LC740" class="blob-line-code js-file-line">      <span class="nx">request</span> <span class="o">=</span> <span class="nx">res</span><span class="p">.</span><span class="nx">request</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L741" class="blob-line-num js-line-number" data-line-number="741"></td>
        <td id="LC741" class="blob-line-code js-file-line">      <span class="k">delete</span> <span class="nx">res</span><span class="p">.</span><span class="nx">request</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L742" class="blob-line-num js-line-number" data-line-number="742"></td>
        <td id="LC742" class="blob-line-code js-file-line">      <span class="nx">tokens</span> <span class="o">=</span> <span class="k">void</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L743" class="blob-line-num js-line-number" data-line-number="743"></td>
        <td id="LC743" class="blob-line-code js-file-line">      <span class="k">if</span> <span class="p">(</span><span class="nx">res</span><span class="p">.</span><span class="nx">access_token</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L744" class="blob-line-num js-line-number" data-line-number="744"></td>
        <td id="LC744" class="blob-line-code js-file-line">        <span class="nx">tokens</span> <span class="o">=</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L745" class="blob-line-num js-line-number" data-line-number="745"></td>
        <td id="LC745" class="blob-line-code js-file-line">          <span class="nx">access_token</span><span class="o">:</span> <span class="nx">res</span><span class="p">.</span><span class="nx">access_token</span></td>
      </tr>
      <tr>
        <td id="L746" class="blob-line-num js-line-number" data-line-number="746"></td>
        <td id="LC746" class="blob-line-code js-file-line">        <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L747" class="blob-line-num js-line-number" data-line-number="747"></td>
        <td id="LC747" class="blob-line-code js-file-line">      <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">res</span><span class="p">.</span><span class="nx">oauth_token</span> <span class="o">&amp;&amp;</span> <span class="nx">res</span><span class="p">.</span><span class="nx">oauth_token_secret</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L748" class="blob-line-num js-line-number" data-line-number="748"></td>
        <td id="LC748" class="blob-line-code js-file-line">        <span class="nx">tokens</span> <span class="o">=</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L749" class="blob-line-num js-line-number" data-line-number="749"></td>
        <td id="LC749" class="blob-line-code js-file-line">          <span class="nx">oauth_token</span><span class="o">:</span> <span class="nx">res</span><span class="p">.</span><span class="nx">oauth_token</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L750" class="blob-line-num js-line-number" data-line-number="750"></td>
        <td id="LC750" class="blob-line-code js-file-line">          <span class="nx">oauth_token_secret</span><span class="o">:</span> <span class="nx">res</span><span class="p">.</span><span class="nx">oauth_token_secret</span></td>
      </tr>
      <tr>
        <td id="L751" class="blob-line-num js-line-number" data-line-number="751"></td>
        <td id="LC751" class="blob-line-code js-file-line">        <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L752" class="blob-line-num js-line-number" data-line-number="752"></td>
        <td id="LC752" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L753" class="blob-line-num js-line-number" data-line-number="753"></td>
        <td id="LC753" class="blob-line-code js-file-line">      <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">request</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L754" class="blob-line-num js-line-number" data-line-number="754"></td>
        <td id="LC754" class="blob-line-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="nx">defer</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L755" class="blob-line-num js-line-number" data-line-number="755"></td>
        <td id="LC755" class="blob-line-code js-file-line">          <span class="nx">defer</span><span class="p">.</span><span class="nx">resolve</span><span class="p">(</span><span class="nx">res</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L756" class="blob-line-num js-line-number" data-line-number="756"></td>
        <td id="LC756" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L757" class="blob-line-num js-line-number" data-line-number="757"></td>
        <td id="LC757" class="blob-line-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="nx">opts</span><span class="p">.</span><span class="nx">callback</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">opts</span><span class="p">.</span><span class="nx">callback</span> <span class="o">===</span> <span class="s2">&quot;function&quot;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L758" class="blob-line-num js-line-number" data-line-number="758"></td>
        <td id="LC758" class="blob-line-code js-file-line">          <span class="k">return</span> <span class="nx">opts</span><span class="p">.</span><span class="nx">callback</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span> <span class="nx">res</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L759" class="blob-line-num js-line-number" data-line-number="759"></td>
        <td id="LC759" class="blob-line-code js-file-line">        <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L760" class="blob-line-num js-line-number" data-line-number="760"></td>
        <td id="LC760" class="blob-line-code js-file-line">          <span class="k">return</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L761" class="blob-line-num js-line-number" data-line-number="761"></td>
        <td id="LC761" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L762" class="blob-line-num js-line-number" data-line-number="762"></td>
        <td id="LC762" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L763" class="blob-line-num js-line-number" data-line-number="763"></td>
        <td id="LC763" class="blob-line-code js-file-line">      <span class="k">if</span> <span class="p">(</span><span class="nx">request</span><span class="p">.</span><span class="nx">required</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L764" class="blob-line-num js-line-number" data-line-number="764"></td>
        <td id="LC764" class="blob-line-code js-file-line">        <span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="k">in</span> <span class="nx">request</span><span class="p">.</span><span class="nx">required</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L765" class="blob-line-num js-line-number" data-line-number="765"></td>
        <td id="LC765" class="blob-line-code js-file-line">          <span class="nx">tokens</span><span class="p">[</span><span class="nx">request</span><span class="p">.</span><span class="nx">required</span><span class="p">[</span><span class="nx">i</span><span class="p">]]</span> <span class="o">=</span> <span class="nx">res</span><span class="p">[</span><span class="nx">request</span><span class="p">.</span><span class="nx">required</span><span class="p">[</span><span class="nx">i</span><span class="p">]];</span></td>
      </tr>
      <tr>
        <td id="L766" class="blob-line-num js-line-number" data-line-number="766"></td>
        <td id="LC766" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L767" class="blob-line-num js-line-number" data-line-number="767"></td>
        <td id="LC767" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L768" class="blob-line-num js-line-number" data-line-number="768"></td>
        <td id="LC768" class="blob-line-code js-file-line">      <span class="nx">make_res</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">method</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L769" class="blob-line-num js-line-number" data-line-number="769"></td>
        <td id="LC769" class="blob-line-code js-file-line">        <span class="k">return</span> <span class="nx">base</span><span class="p">.</span><span class="nx">mkHttp</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">provider</span><span class="p">,</span> <span class="nx">tokens</span><span class="p">,</span> <span class="nx">request</span><span class="p">,</span> <span class="nx">method</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L770" class="blob-line-num js-line-number" data-line-number="770"></td>
        <td id="LC770" class="blob-line-code js-file-line">      <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L771" class="blob-line-num js-line-number" data-line-number="771"></td>
        <td id="LC771" class="blob-line-code js-file-line">      <span class="nx">res</span><span class="p">.</span><span class="nx">get</span> <span class="o">=</span> <span class="nx">make_res</span><span class="p">(</span><span class="s2">&quot;GET&quot;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L772" class="blob-line-num js-line-number" data-line-number="772"></td>
        <td id="LC772" class="blob-line-code js-file-line">      <span class="nx">res</span><span class="p">.</span><span class="nx">post</span> <span class="o">=</span> <span class="nx">make_res</span><span class="p">(</span><span class="s2">&quot;POST&quot;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L773" class="blob-line-num js-line-number" data-line-number="773"></td>
        <td id="LC773" class="blob-line-code js-file-line">      <span class="nx">res</span><span class="p">.</span><span class="nx">put</span> <span class="o">=</span> <span class="nx">make_res</span><span class="p">(</span><span class="s2">&quot;PUT&quot;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L774" class="blob-line-num js-line-number" data-line-number="774"></td>
        <td id="LC774" class="blob-line-code js-file-line">      <span class="nx">res</span><span class="p">.</span><span class="nx">patch</span> <span class="o">=</span> <span class="nx">make_res</span><span class="p">(</span><span class="s2">&quot;PATCH&quot;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L775" class="blob-line-num js-line-number" data-line-number="775"></td>
        <td id="LC775" class="blob-line-code js-file-line">      <span class="nx">res</span><span class="p">.</span><span class="nx">del</span> <span class="o">=</span> <span class="nx">make_res</span><span class="p">(</span><span class="s2">&quot;DELETE&quot;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L776" class="blob-line-num js-line-number" data-line-number="776"></td>
        <td id="LC776" class="blob-line-code js-file-line">      <span class="nx">res</span><span class="p">.</span><span class="nx">me</span> <span class="o">=</span> <span class="nx">base</span><span class="p">.</span><span class="nx">mkHttpMe</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">provider</span><span class="p">,</span> <span class="nx">tokens</span><span class="p">,</span> <span class="nx">request</span><span class="p">,</span> <span class="s2">&quot;GET&quot;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L777" class="blob-line-num js-line-number" data-line-number="777"></td>
        <td id="LC777" class="blob-line-code js-file-line">      <span class="k">if</span> <span class="p">(</span><span class="nx">defer</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L778" class="blob-line-num js-line-number" data-line-number="778"></td>
        <td id="LC778" class="blob-line-code js-file-line">        <span class="nx">defer</span><span class="p">.</span><span class="nx">resolve</span><span class="p">(</span><span class="nx">res</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L779" class="blob-line-num js-line-number" data-line-number="779"></td>
        <td id="LC779" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L780" class="blob-line-num js-line-number" data-line-number="780"></td>
        <td id="LC780" class="blob-line-code js-file-line">      <span class="k">if</span> <span class="p">(</span><span class="nx">opts</span><span class="p">.</span><span class="nx">callback</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">opts</span><span class="p">.</span><span class="nx">callback</span> <span class="o">===</span> <span class="s2">&quot;function&quot;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L781" class="blob-line-num js-line-number" data-line-number="781"></td>
        <td id="LC781" class="blob-line-code js-file-line">        <span class="k">return</span> <span class="nx">opts</span><span class="p">.</span><span class="nx">callback</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span> <span class="nx">res</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L782" class="blob-line-num js-line-number" data-line-number="782"></td>
        <td id="LC782" class="blob-line-code js-file-line">      <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L783" class="blob-line-num js-line-number" data-line-number="783"></td>
        <td id="LC783" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L784" class="blob-line-num js-line-number" data-line-number="784"></td>
        <td id="LC784" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L785" class="blob-line-num js-line-number" data-line-number="785"></td>
        <td id="LC785" class="blob-line-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L786" class="blob-line-num js-line-number" data-line-number="786"></td>
        <td id="LC786" class="blob-line-code js-file-line">  <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L787" class="blob-line-num js-line-number" data-line-number="787"></td>
        <td id="LC787" class="blob-line-code js-file-line"><span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L788" class="blob-line-num js-line-number" data-line-number="788"></td>
        <td id="LC788" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L789" class="blob-line-num js-line-number" data-line-number="789"></td>
        <td id="LC789" class="blob-line-code js-file-line"><span class="p">},{</span><span class="s2">&quot;../tools/url&quot;</span><span class="o">:</span><span class="mi">8</span><span class="p">}],</span><span class="mi">4</span><span class="o">:</span><span class="p">[</span><span class="kd">function</span><span class="p">(</span><span class="nx">require</span><span class="p">,</span><span class="nx">module</span><span class="p">,</span><span class="nx">exports</span><span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L790" class="blob-line-num js-line-number" data-line-number="790"></td>
        <td id="LC790" class="blob-line-code js-file-line"><span class="kd">var</span> <span class="nx">OAuth_creator</span><span class="p">,</span> <span class="nx">jquery</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L791" class="blob-line-num js-line-number" data-line-number="791"></td>
        <td id="LC791" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L792" class="blob-line-num js-line-number" data-line-number="792"></td>
        <td id="LC792" class="blob-line-code js-file-line"><span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">jQuery</span> <span class="o">!==</span> <span class="s2">&quot;undefined&quot;</span> <span class="o">&amp;&amp;</span> <span class="nx">jQuery</span> <span class="o">!==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L793" class="blob-line-num js-line-number" data-line-number="793"></td>
        <td id="LC793" class="blob-line-code js-file-line">  <span class="nx">jquery</span> <span class="o">=</span> <span class="nx">jQuery</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L794" class="blob-line-num js-line-number" data-line-number="794"></td>
        <td id="LC794" class="blob-line-code js-file-line"><span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L795" class="blob-line-num js-line-number" data-line-number="795"></td>
        <td id="LC795" class="blob-line-code js-file-line">  <span class="nx">jquery</span> <span class="o">=</span> <span class="k">void</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L796" class="blob-line-num js-line-number" data-line-number="796"></td>
        <td id="LC796" class="blob-line-code js-file-line"><span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L797" class="blob-line-num js-line-number" data-line-number="797"></td>
        <td id="LC797" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L798" class="blob-line-num js-line-number" data-line-number="798"></td>
        <td id="LC798" class="blob-line-code js-file-line"><span class="nx">OAuth_creator</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;./lib/oauth&#39;</span><span class="p">)(</span><span class="nb">window</span><span class="p">,</span> <span class="nb">document</span><span class="p">,</span> <span class="nx">jquery</span><span class="p">,</span> <span class="nx">navigator</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L799" class="blob-line-num js-line-number" data-line-number="799"></td>
        <td id="LC799" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L800" class="blob-line-num js-line-number" data-line-number="800"></td>
        <td id="LC800" class="blob-line-code js-file-line"><span class="nx">OAuth_creator</span><span class="p">(</span><span class="nb">window</span> <span class="o">||</span> <span class="k">this</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L801" class="blob-line-num js-line-number" data-line-number="801"></td>
        <td id="LC801" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L802" class="blob-line-num js-line-number" data-line-number="802"></td>
        <td id="LC802" class="blob-line-code js-file-line"><span class="p">},{</span><span class="s2">&quot;./lib/oauth&quot;</span><span class="o">:</span><span class="mi">2</span><span class="p">}],</span><span class="mi">5</span><span class="o">:</span><span class="p">[</span><span class="kd">function</span><span class="p">(</span><span class="nx">require</span><span class="p">,</span><span class="nx">module</span><span class="p">,</span><span class="nx">exports</span><span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L803" class="blob-line-num js-line-number" data-line-number="803"></td>
        <td id="LC803" class="blob-line-code js-file-line"><span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L804" class="blob-line-num js-line-number" data-line-number="804"></td>
        <td id="LC804" class="blob-line-code js-file-line">  <span class="nx">init</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">cookies_module</span><span class="p">,</span> <span class="nx">config</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L805" class="blob-line-num js-line-number" data-line-number="805"></td>
        <td id="LC805" class="blob-line-code js-file-line">    <span class="k">this</span><span class="p">.</span><span class="nx">config</span> <span class="o">=</span> <span class="nx">config</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L806" class="blob-line-num js-line-number" data-line-number="806"></td>
        <td id="LC806" class="blob-line-code js-file-line">    <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">cookies</span> <span class="o">=</span> <span class="nx">cookies_module</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L807" class="blob-line-num js-line-number" data-line-number="807"></td>
        <td id="LC807" class="blob-line-code js-file-line">  <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L808" class="blob-line-num js-line-number" data-line-number="808"></td>
        <td id="LC808" class="blob-line-code js-file-line">  <span class="nx">tryCache</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">OAuth</span><span class="p">,</span> <span class="nx">provider</span><span class="p">,</span> <span class="nx">cache</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L809" class="blob-line-num js-line-number" data-line-number="809"></td>
        <td id="LC809" class="blob-line-code js-file-line">    <span class="kd">var</span> <span class="nx">e</span><span class="p">,</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">res</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L810" class="blob-line-num js-line-number" data-line-number="810"></td>
        <td id="LC810" class="blob-line-code js-file-line">    <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">cacheEnabled</span><span class="p">(</span><span class="nx">cache</span><span class="p">))</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L811" class="blob-line-num js-line-number" data-line-number="811"></td>
        <td id="LC811" class="blob-line-code js-file-line">      <span class="nx">cache</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">cookies</span><span class="p">.</span><span class="nx">readCookie</span><span class="p">(</span><span class="s2">&quot;oauthio_provider_&quot;</span> <span class="o">+</span> <span class="nx">provider</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L812" class="blob-line-num js-line-number" data-line-number="812"></td>
        <td id="LC812" class="blob-line-code js-file-line">      <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">cache</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L813" class="blob-line-num js-line-number" data-line-number="813"></td>
        <td id="LC813" class="blob-line-code js-file-line">        <span class="k">return</span> <span class="kc">false</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L814" class="blob-line-num js-line-number" data-line-number="814"></td>
        <td id="LC814" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L815" class="blob-line-num js-line-number" data-line-number="815"></td>
        <td id="LC815" class="blob-line-code js-file-line">      <span class="nx">cache</span> <span class="o">=</span> <span class="nb">decodeURIComponent</span><span class="p">(</span><span class="nx">cache</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L816" class="blob-line-num js-line-number" data-line-number="816"></td>
        <td id="LC816" class="blob-line-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L817" class="blob-line-num js-line-number" data-line-number="817"></td>
        <td id="LC817" class="blob-line-code js-file-line">    <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">cache</span> <span class="o">===</span> <span class="s2">&quot;string&quot;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L818" class="blob-line-num js-line-number" data-line-number="818"></td>
        <td id="LC818" class="blob-line-code js-file-line">      <span class="k">try</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L819" class="blob-line-num js-line-number" data-line-number="819"></td>
        <td id="LC819" class="blob-line-code js-file-line">        <span class="nx">cache</span> <span class="o">=</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">cache</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L820" class="blob-line-num js-line-number" data-line-number="820"></td>
        <td id="LC820" class="blob-line-code js-file-line">      <span class="p">}</span> <span class="k">catch</span> <span class="p">(</span><span class="nx">_error</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L821" class="blob-line-num js-line-number" data-line-number="821"></td>
        <td id="LC821" class="blob-line-code js-file-line">        <span class="nx">e</span> <span class="o">=</span> <span class="nx">_error</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L822" class="blob-line-num js-line-number" data-line-number="822"></td>
        <td id="LC822" class="blob-line-code js-file-line">        <span class="k">return</span> <span class="kc">false</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L823" class="blob-line-num js-line-number" data-line-number="823"></td>
        <td id="LC823" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L824" class="blob-line-num js-line-number" data-line-number="824"></td>
        <td id="LC824" class="blob-line-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L825" class="blob-line-num js-line-number" data-line-number="825"></td>
        <td id="LC825" class="blob-line-code js-file-line">    <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">cache</span> <span class="o">===</span> <span class="s2">&quot;object&quot;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L826" class="blob-line-num js-line-number" data-line-number="826"></td>
        <td id="LC826" class="blob-line-code js-file-line">      <span class="nx">res</span> <span class="o">=</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L827" class="blob-line-num js-line-number" data-line-number="827"></td>
        <td id="LC827" class="blob-line-code js-file-line">      <span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="k">in</span> <span class="nx">cache</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L828" class="blob-line-num js-line-number" data-line-number="828"></td>
        <td id="LC828" class="blob-line-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="nx">i</span> <span class="o">!==</span> <span class="s2">&quot;request&quot;</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">cache</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">!==</span> <span class="s2">&quot;function&quot;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L829" class="blob-line-num js-line-number" data-line-number="829"></td>
        <td id="LC829" class="blob-line-code js-file-line">          <span class="nx">res</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">cache</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L830" class="blob-line-num js-line-number" data-line-number="830"></td>
        <td id="LC830" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L831" class="blob-line-num js-line-number" data-line-number="831"></td>
        <td id="LC831" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L832" class="blob-line-num js-line-number" data-line-number="832"></td>
        <td id="LC832" class="blob-line-code js-file-line">      <span class="k">return</span> <span class="nx">OAuth</span><span class="p">.</span><span class="nx">create</span><span class="p">(</span><span class="nx">provider</span><span class="p">,</span> <span class="nx">res</span><span class="p">,</span> <span class="nx">cache</span><span class="p">.</span><span class="nx">request</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L833" class="blob-line-num js-line-number" data-line-number="833"></td>
        <td id="LC833" class="blob-line-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L834" class="blob-line-num js-line-number" data-line-number="834"></td>
        <td id="LC834" class="blob-line-code js-file-line">    <span class="k">return</span> <span class="kc">false</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L835" class="blob-line-num js-line-number" data-line-number="835"></td>
        <td id="LC835" class="blob-line-code js-file-line">  <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L836" class="blob-line-num js-line-number" data-line-number="836"></td>
        <td id="LC836" class="blob-line-code js-file-line">  <span class="nx">storeCache</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">provider</span><span class="p">,</span> <span class="nx">cache</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L837" class="blob-line-num js-line-number" data-line-number="837"></td>
        <td id="LC837" class="blob-line-code js-file-line">    <span class="k">this</span><span class="p">.</span><span class="nx">cookies</span><span class="p">.</span><span class="nx">createCookie</span><span class="p">(</span><span class="s2">&quot;oauthio_provider_&quot;</span> <span class="o">+</span> <span class="nx">provider</span><span class="p">,</span> <span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">cache</span><span class="p">)),</span> <span class="nx">cache</span><span class="p">.</span><span class="nx">expires_in</span> <span class="o">-</span> <span class="mi">10</span> <span class="o">||</span> <span class="mi">3600</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L838" class="blob-line-num js-line-number" data-line-number="838"></td>
        <td id="LC838" class="blob-line-code js-file-line">  <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L839" class="blob-line-num js-line-number" data-line-number="839"></td>
        <td id="LC839" class="blob-line-code js-file-line">  <span class="nx">cacheEnabled</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">cache</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L840" class="blob-line-num js-line-number" data-line-number="840"></td>
        <td id="LC840" class="blob-line-code js-file-line">    <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">cache</span> <span class="o">===</span> <span class="s2">&quot;undefined&quot;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L841" class="blob-line-num js-line-number" data-line-number="841"></td>
        <td id="LC841" class="blob-line-code js-file-line">      <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">config</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">cache</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L842" class="blob-line-num js-line-number" data-line-number="842"></td>
        <td id="LC842" class="blob-line-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L843" class="blob-line-num js-line-number" data-line-number="843"></td>
        <td id="LC843" class="blob-line-code js-file-line">    <span class="k">return</span> <span class="nx">cache</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L844" class="blob-line-num js-line-number" data-line-number="844"></td>
        <td id="LC844" class="blob-line-code js-file-line">  <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L845" class="blob-line-num js-line-number" data-line-number="845"></td>
        <td id="LC845" class="blob-line-code js-file-line"><span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L846" class="blob-line-num js-line-number" data-line-number="846"></td>
        <td id="LC846" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L847" class="blob-line-num js-line-number" data-line-number="847"></td>
        <td id="LC847" class="blob-line-code js-file-line"><span class="p">},{}],</span><span class="mi">6</span><span class="o">:</span><span class="p">[</span><span class="kd">function</span><span class="p">(</span><span class="nx">require</span><span class="p">,</span><span class="nx">module</span><span class="p">,</span><span class="nx">exports</span><span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L848" class="blob-line-num js-line-number" data-line-number="848"></td>
        <td id="LC848" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L849" class="blob-line-num js-line-number" data-line-number="849"></td>
        <td id="LC849" class="blob-line-code js-file-line"><span class="cm">/* istanbul ignore next */</span></td>
      </tr>
      <tr>
        <td id="L850" class="blob-line-num js-line-number" data-line-number="850"></td>
        <td id="LC850" class="blob-line-code js-file-line"><span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L851" class="blob-line-num js-line-number" data-line-number="851"></td>
        <td id="LC851" class="blob-line-code js-file-line">  <span class="nx">init</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">config</span><span class="p">,</span> <span class="nb">document</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L852" class="blob-line-num js-line-number" data-line-number="852"></td>
        <td id="LC852" class="blob-line-code js-file-line">    <span class="k">this</span><span class="p">.</span><span class="nx">config</span> <span class="o">=</span> <span class="nx">config</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L853" class="blob-line-num js-line-number" data-line-number="853"></td>
        <td id="LC853" class="blob-line-code js-file-line">    <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nb">document</span> <span class="o">=</span> <span class="nb">document</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L854" class="blob-line-num js-line-number" data-line-number="854"></td>
        <td id="LC854" class="blob-line-code js-file-line">  <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L855" class="blob-line-num js-line-number" data-line-number="855"></td>
        <td id="LC855" class="blob-line-code js-file-line">  <span class="nx">createCookie</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">expires</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L856" class="blob-line-num js-line-number" data-line-number="856"></td>
        <td id="LC856" class="blob-line-code js-file-line">    <span class="kd">var</span> <span class="nx">date</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L857" class="blob-line-num js-line-number" data-line-number="857"></td>
        <td id="LC857" class="blob-line-code js-file-line">    <span class="k">this</span><span class="p">.</span><span class="nx">eraseCookie</span><span class="p">(</span><span class="nx">name</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L858" class="blob-line-num js-line-number" data-line-number="858"></td>
        <td id="LC858" class="blob-line-code js-file-line">    <span class="nx">date</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L859" class="blob-line-num js-line-number" data-line-number="859"></td>
        <td id="LC859" class="blob-line-code js-file-line">    <span class="nx">date</span><span class="p">.</span><span class="nx">setTime</span><span class="p">(</span><span class="nx">date</span><span class="p">.</span><span class="nx">getTime</span><span class="p">()</span> <span class="o">+</span> <span class="p">(</span><span class="nx">expires</span> <span class="o">||</span> <span class="mi">1200</span><span class="p">)</span> <span class="o">*</span> <span class="mi">1000</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L860" class="blob-line-num js-line-number" data-line-number="860"></td>
        <td id="LC860" class="blob-line-code js-file-line">    <span class="nx">expires</span> <span class="o">=</span> <span class="s2">&quot;; expires=&quot;</span> <span class="o">+</span> <span class="nx">date</span><span class="p">.</span><span class="nx">toGMTString</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L861" class="blob-line-num js-line-number" data-line-number="861"></td>
        <td id="LC861" class="blob-line-code js-file-line">    <span class="k">this</span><span class="p">.</span><span class="nb">document</span><span class="p">.</span><span class="nx">cookie</span> <span class="o">=</span> <span class="nx">name</span> <span class="o">+</span> <span class="s2">&quot;=&quot;</span> <span class="o">+</span> <span class="nx">value</span> <span class="o">+</span> <span class="nx">expires</span> <span class="o">+</span> <span class="s2">&quot;; path=/&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L862" class="blob-line-num js-line-number" data-line-number="862"></td>
        <td id="LC862" class="blob-line-code js-file-line">  <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L863" class="blob-line-num js-line-number" data-line-number="863"></td>
        <td id="LC863" class="blob-line-code js-file-line">  <span class="nx">readCookie</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">name</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L864" class="blob-line-num js-line-number" data-line-number="864"></td>
        <td id="LC864" class="blob-line-code js-file-line">    <span class="kd">var</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">ca</span><span class="p">,</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">nameEQ</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L865" class="blob-line-num js-line-number" data-line-number="865"></td>
        <td id="LC865" class="blob-line-code js-file-line">    <span class="nx">nameEQ</span> <span class="o">=</span> <span class="nx">name</span> <span class="o">+</span> <span class="s2">&quot;=&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L866" class="blob-line-num js-line-number" data-line-number="866"></td>
        <td id="LC866" class="blob-line-code js-file-line">    <span class="nx">ca</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nb">document</span><span class="p">.</span><span class="nx">cookie</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;;&quot;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L867" class="blob-line-num js-line-number" data-line-number="867"></td>
        <td id="LC867" class="blob-line-code js-file-line">    <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L868" class="blob-line-num js-line-number" data-line-number="868"></td>
        <td id="LC868" class="blob-line-code js-file-line">    <span class="k">while</span> <span class="p">(</span><span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">ca</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L869" class="blob-line-num js-line-number" data-line-number="869"></td>
        <td id="LC869" class="blob-line-code js-file-line">      <span class="nx">c</span> <span class="o">=</span> <span class="nx">ca</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L870" class="blob-line-num js-line-number" data-line-number="870"></td>
        <td id="LC870" class="blob-line-code js-file-line">      <span class="k">while</span> <span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="mi">0</span><span class="p">)</span> <span class="o">===</span> <span class="s2">&quot; &quot;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L871" class="blob-line-num js-line-number" data-line-number="871"></td>
        <td id="LC871" class="blob-line-code js-file-line">        <span class="nx">c</span> <span class="o">=</span> <span class="nx">c</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="nx">c</span><span class="p">.</span><span class="nx">length</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L872" class="blob-line-num js-line-number" data-line-number="872"></td>
        <td id="LC872" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L873" class="blob-line-num js-line-number" data-line-number="873"></td>
        <td id="LC873" class="blob-line-code js-file-line">      <span class="k">if</span> <span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">nameEQ</span><span class="p">)</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L874" class="blob-line-num js-line-number" data-line-number="874"></td>
        <td id="LC874" class="blob-line-code js-file-line">        <span class="k">return</span> <span class="nx">c</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">nameEQ</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span> <span class="nx">c</span><span class="p">.</span><span class="nx">length</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L875" class="blob-line-num js-line-number" data-line-number="875"></td>
        <td id="LC875" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L876" class="blob-line-num js-line-number" data-line-number="876"></td>
        <td id="LC876" class="blob-line-code js-file-line">      <span class="nx">i</span><span class="o">++</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L877" class="blob-line-num js-line-number" data-line-number="877"></td>
        <td id="LC877" class="blob-line-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L878" class="blob-line-num js-line-number" data-line-number="878"></td>
        <td id="LC878" class="blob-line-code js-file-line">    <span class="k">return</span> <span class="kc">null</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L879" class="blob-line-num js-line-number" data-line-number="879"></td>
        <td id="LC879" class="blob-line-code js-file-line">  <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L880" class="blob-line-num js-line-number" data-line-number="880"></td>
        <td id="LC880" class="blob-line-code js-file-line">  <span class="nx">eraseCookie</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">name</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L881" class="blob-line-num js-line-number" data-line-number="881"></td>
        <td id="LC881" class="blob-line-code js-file-line">    <span class="kd">var</span> <span class="nx">date</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L882" class="blob-line-num js-line-number" data-line-number="882"></td>
        <td id="LC882" class="blob-line-code js-file-line">    <span class="nx">date</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L883" class="blob-line-num js-line-number" data-line-number="883"></td>
        <td id="LC883" class="blob-line-code js-file-line">    <span class="nx">date</span><span class="p">.</span><span class="nx">setTime</span><span class="p">(</span><span class="nx">date</span><span class="p">.</span><span class="nx">getTime</span><span class="p">()</span> <span class="o">-</span> <span class="mi">86400000</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L884" class="blob-line-num js-line-number" data-line-number="884"></td>
        <td id="LC884" class="blob-line-code js-file-line">    <span class="k">this</span><span class="p">.</span><span class="nb">document</span><span class="p">.</span><span class="nx">cookie</span> <span class="o">=</span> <span class="nx">name</span> <span class="o">+</span> <span class="s2">&quot;=; expires=&quot;</span> <span class="o">+</span> <span class="nx">date</span><span class="p">.</span><span class="nx">toGMTString</span><span class="p">()</span> <span class="o">+</span> <span class="s2">&quot;; path=/&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L885" class="blob-line-num js-line-number" data-line-number="885"></td>
        <td id="LC885" class="blob-line-code js-file-line">  <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L886" class="blob-line-num js-line-number" data-line-number="886"></td>
        <td id="LC886" class="blob-line-code js-file-line"><span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L887" class="blob-line-num js-line-number" data-line-number="887"></td>
        <td id="LC887" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L888" class="blob-line-num js-line-number" data-line-number="888"></td>
        <td id="LC888" class="blob-line-code js-file-line"><span class="p">},{}],</span><span class="mi">7</span><span class="o">:</span><span class="p">[</span><span class="kd">function</span><span class="p">(</span><span class="nx">require</span><span class="p">,</span><span class="nx">module</span><span class="p">,</span><span class="nx">exports</span><span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L889" class="blob-line-num js-line-number" data-line-number="889"></td>
        <td id="LC889" class="blob-line-code js-file-line"><span class="kd">var</span> <span class="nx">b64pad</span><span class="p">,</span> <span class="nx">hexcase</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L890" class="blob-line-num js-line-number" data-line-number="890"></td>
        <td id="LC890" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L891" class="blob-line-num js-line-number" data-line-number="891"></td>
        <td id="LC891" class="blob-line-code js-file-line"><span class="nx">hexcase</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L892" class="blob-line-num js-line-number" data-line-number="892"></td>
        <td id="LC892" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L893" class="blob-line-num js-line-number" data-line-number="893"></td>
        <td id="LC893" class="blob-line-code js-file-line"><span class="nx">b64pad</span> <span class="o">=</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L894" class="blob-line-num js-line-number" data-line-number="894"></td>
        <td id="LC894" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L895" class="blob-line-num js-line-number" data-line-number="895"></td>
        <td id="LC895" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L896" class="blob-line-num js-line-number" data-line-number="896"></td>
        <td id="LC896" class="blob-line-code js-file-line"><span class="cm">/* istanbul ignore next */</span></td>
      </tr>
      <tr>
        <td id="L897" class="blob-line-num js-line-number" data-line-number="897"></td>
        <td id="LC897" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L898" class="blob-line-num js-line-number" data-line-number="898"></td>
        <td id="LC898" class="blob-line-code js-file-line"><span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L899" class="blob-line-num js-line-number" data-line-number="899"></td>
        <td id="LC899" class="blob-line-code js-file-line">  <span class="nx">hex_sha1</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">s</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L900" class="blob-line-num js-line-number" data-line-number="900"></td>
        <td id="LC900" class="blob-line-code js-file-line">    <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">rstr2hex</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">rstr_sha1</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">str2rstr_utf8</span><span class="p">(</span><span class="nx">s</span><span class="p">)));</span></td>
      </tr>
      <tr>
        <td id="L901" class="blob-line-num js-line-number" data-line-number="901"></td>
        <td id="LC901" class="blob-line-code js-file-line">  <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L902" class="blob-line-num js-line-number" data-line-number="902"></td>
        <td id="LC902" class="blob-line-code js-file-line">  <span class="nx">b64_sha1</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">s</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L903" class="blob-line-num js-line-number" data-line-number="903"></td>
        <td id="LC903" class="blob-line-code js-file-line">    <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">rstr2b64</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">rstr_sha1</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">str2rstr_utf8</span><span class="p">(</span><span class="nx">s</span><span class="p">)));</span></td>
      </tr>
      <tr>
        <td id="L904" class="blob-line-num js-line-number" data-line-number="904"></td>
        <td id="LC904" class="blob-line-code js-file-line">  <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L905" class="blob-line-num js-line-number" data-line-number="905"></td>
        <td id="LC905" class="blob-line-code js-file-line">  <span class="nx">any_sha1</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">s</span><span class="p">,</span> <span class="nx">e</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L906" class="blob-line-num js-line-number" data-line-number="906"></td>
        <td id="LC906" class="blob-line-code js-file-line">    <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">rstr2any</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">rstr_sha1</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">str2rstr_utf8</span><span class="p">(</span><span class="nx">s</span><span class="p">)),</span> <span class="nx">e</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L907" class="blob-line-num js-line-number" data-line-number="907"></td>
        <td id="LC907" class="blob-line-code js-file-line">  <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L908" class="blob-line-num js-line-number" data-line-number="908"></td>
        <td id="LC908" class="blob-line-code js-file-line">  <span class="nx">hex_hmac_sha1</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">k</span><span class="p">,</span> <span class="nx">d</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L909" class="blob-line-num js-line-number" data-line-number="909"></td>
        <td id="LC909" class="blob-line-code js-file-line">    <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">rstr2hex</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">rstr_hmac_sha1</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">str2rstr_utf8</span><span class="p">(</span><span class="nx">k</span><span class="p">),</span> <span class="k">this</span><span class="p">.</span><span class="nx">str2rstr_utf8</span><span class="p">(</span><span class="nx">d</span><span class="p">)));</span></td>
      </tr>
      <tr>
        <td id="L910" class="blob-line-num js-line-number" data-line-number="910"></td>
        <td id="LC910" class="blob-line-code js-file-line">  <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L911" class="blob-line-num js-line-number" data-line-number="911"></td>
        <td id="LC911" class="blob-line-code js-file-line">  <span class="nx">b64_hmac_sha1</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">k</span><span class="p">,</span> <span class="nx">d</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L912" class="blob-line-num js-line-number" data-line-number="912"></td>
        <td id="LC912" class="blob-line-code js-file-line">    <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">rstr2b64</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">rstr_hmac_sha1</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">str2rstr_utf8</span><span class="p">(</span><span class="nx">k</span><span class="p">),</span> <span class="k">this</span><span class="p">.</span><span class="nx">str2rstr_utf8</span><span class="p">(</span><span class="nx">d</span><span class="p">)));</span></td>
      </tr>
      <tr>
        <td id="L913" class="blob-line-num js-line-number" data-line-number="913"></td>
        <td id="LC913" class="blob-line-code js-file-line">  <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L914" class="blob-line-num js-line-number" data-line-number="914"></td>
        <td id="LC914" class="blob-line-code js-file-line">  <span class="nx">any_hmac_sha1</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">k</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">e</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L915" class="blob-line-num js-line-number" data-line-number="915"></td>
        <td id="LC915" class="blob-line-code js-file-line">    <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">rstr2any</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">rstr_hmac_sha1</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">str2rstr_utf8</span><span class="p">(</span><span class="nx">k</span><span class="p">),</span> <span class="k">this</span><span class="p">.</span><span class="nx">str2rstr_utf8</span><span class="p">(</span><span class="nx">d</span><span class="p">)),</span> <span class="nx">e</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L916" class="blob-line-num js-line-number" data-line-number="916"></td>
        <td id="LC916" class="blob-line-code js-file-line">  <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L917" class="blob-line-num js-line-number" data-line-number="917"></td>
        <td id="LC917" class="blob-line-code js-file-line">  <span class="nx">sha1_vm_test</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L918" class="blob-line-num js-line-number" data-line-number="918"></td>
        <td id="LC918" class="blob-line-code js-file-line">    <span class="k">return</span> <span class="nx">thishex_sha1</span><span class="p">(</span><span class="s2">&quot;abc&quot;</span><span class="p">).</span><span class="nx">toLowerCase</span><span class="p">()</span> <span class="o">===</span> <span class="s2">&quot;a9993e364706816aba3e25717850c26c9cd0d89d&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L919" class="blob-line-num js-line-number" data-line-number="919"></td>
        <td id="LC919" class="blob-line-code js-file-line">  <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L920" class="blob-line-num js-line-number" data-line-number="920"></td>
        <td id="LC920" class="blob-line-code js-file-line">  <span class="nx">rstr_sha1</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">s</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L921" class="blob-line-num js-line-number" data-line-number="921"></td>
        <td id="LC921" class="blob-line-code js-file-line">    <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">binb2rstr</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">binb_sha1</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">rstr2binb</span><span class="p">(</span><span class="nx">s</span><span class="p">),</span> <span class="nx">s</span><span class="p">.</span><span class="nx">length</span> <span class="o">*</span> <span class="mi">8</span><span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L922" class="blob-line-num js-line-number" data-line-number="922"></td>
        <td id="LC922" class="blob-line-code js-file-line">  <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L923" class="blob-line-num js-line-number" data-line-number="923"></td>
        <td id="LC923" class="blob-line-code js-file-line">  <span class="nx">rstr_hmac_sha1</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">key</span><span class="p">,</span> <span class="nx">data</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L924" class="blob-line-num js-line-number" data-line-number="924"></td>
        <td id="LC924" class="blob-line-code js-file-line">    <span class="kd">var</span> <span class="nx">bkey</span><span class="p">,</span> <span class="nx">hash</span><span class="p">,</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">ipad</span><span class="p">,</span> <span class="nx">opad</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L925" class="blob-line-num js-line-number" data-line-number="925"></td>
        <td id="LC925" class="blob-line-code js-file-line">    <span class="nx">bkey</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">rstr2binb</span><span class="p">(</span><span class="nx">key</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L926" class="blob-line-num js-line-number" data-line-number="926"></td>
        <td id="LC926" class="blob-line-code js-file-line">    <span class="k">if</span> <span class="p">(</span><span class="nx">bkey</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">16</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L927" class="blob-line-num js-line-number" data-line-number="927"></td>
        <td id="LC927" class="blob-line-code js-file-line">      <span class="nx">bkey</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">binb_sha1</span><span class="p">(</span><span class="nx">bkey</span><span class="p">,</span> <span class="nx">key</span><span class="p">.</span><span class="nx">length</span> <span class="o">*</span> <span class="mi">8</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L928" class="blob-line-num js-line-number" data-line-number="928"></td>
        <td id="LC928" class="blob-line-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L929" class="blob-line-num js-line-number" data-line-number="929"></td>
        <td id="LC929" class="blob-line-code js-file-line">    <span class="nx">ipad</span> <span class="o">=</span> <span class="nb">Array</span><span class="p">(</span><span class="mi">16</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L930" class="blob-line-num js-line-number" data-line-number="930"></td>
        <td id="LC930" class="blob-line-code js-file-line">    <span class="nx">opad</span> <span class="o">=</span> <span class="nb">Array</span><span class="p">(</span><span class="mi">16</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L931" class="blob-line-num js-line-number" data-line-number="931"></td>
        <td id="LC931" class="blob-line-code js-file-line">    <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L932" class="blob-line-num js-line-number" data-line-number="932"></td>
        <td id="LC932" class="blob-line-code js-file-line">    <span class="k">while</span> <span class="p">(</span><span class="nx">i</span> <span class="o">&lt;</span> <span class="mi">16</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L933" class="blob-line-num js-line-number" data-line-number="933"></td>
        <td id="LC933" class="blob-line-code js-file-line">      <span class="nx">ipad</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">bkey</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">^</span> <span class="mh">0x36363636</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L934" class="blob-line-num js-line-number" data-line-number="934"></td>
        <td id="LC934" class="blob-line-code js-file-line">      <span class="nx">opad</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">bkey</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">^</span> <span class="mh">0x5C5C5C5C</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L935" class="blob-line-num js-line-number" data-line-number="935"></td>
        <td id="LC935" class="blob-line-code js-file-line">      <span class="nx">i</span><span class="o">++</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L936" class="blob-line-num js-line-number" data-line-number="936"></td>
        <td id="LC936" class="blob-line-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L937" class="blob-line-num js-line-number" data-line-number="937"></td>
        <td id="LC937" class="blob-line-code js-file-line">    <span class="nx">hash</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">binb_sha1</span><span class="p">(</span><span class="nx">ipad</span><span class="p">.</span><span class="nx">concat</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">rstr2binb</span><span class="p">(</span><span class="nx">data</span><span class="p">)),</span> <span class="mi">512</span> <span class="o">+</span> <span class="nx">data</span><span class="p">.</span><span class="nx">length</span> <span class="o">*</span> <span class="mi">8</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L938" class="blob-line-num js-line-number" data-line-number="938"></td>
        <td id="LC938" class="blob-line-code js-file-line">    <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">binb2rstr</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">binb_sha1</span><span class="p">(</span><span class="nx">opad</span><span class="p">.</span><span class="nx">concat</span><span class="p">(</span><span class="nx">hash</span><span class="p">),</span> <span class="mi">512</span> <span class="o">+</span> <span class="mi">160</span><span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L939" class="blob-line-num js-line-number" data-line-number="939"></td>
        <td id="LC939" class="blob-line-code js-file-line">  <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L940" class="blob-line-num js-line-number" data-line-number="940"></td>
        <td id="LC940" class="blob-line-code js-file-line">  <span class="nx">rstr2hex</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">input</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L941" class="blob-line-num js-line-number" data-line-number="941"></td>
        <td id="LC941" class="blob-line-code js-file-line">    <span class="kd">var</span> <span class="nx">e</span><span class="p">,</span> <span class="nx">hex_tab</span><span class="p">,</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">output</span><span class="p">,</span> <span class="nx">x</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L942" class="blob-line-num js-line-number" data-line-number="942"></td>
        <td id="LC942" class="blob-line-code js-file-line">    <span class="k">try</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L943" class="blob-line-num js-line-number" data-line-number="943"></td>
        <td id="LC943" class="blob-line-code js-file-line">      <span class="nx">hexcase</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L944" class="blob-line-num js-line-number" data-line-number="944"></td>
        <td id="LC944" class="blob-line-code js-file-line">    <span class="p">}</span> <span class="k">catch</span> <span class="p">(</span><span class="nx">_error</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L945" class="blob-line-num js-line-number" data-line-number="945"></td>
        <td id="LC945" class="blob-line-code js-file-line">      <span class="nx">e</span> <span class="o">=</span> <span class="nx">_error</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L946" class="blob-line-num js-line-number" data-line-number="946"></td>
        <td id="LC946" class="blob-line-code js-file-line">      <span class="nx">hexcase</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L947" class="blob-line-num js-line-number" data-line-number="947"></td>
        <td id="LC947" class="blob-line-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L948" class="blob-line-num js-line-number" data-line-number="948"></td>
        <td id="LC948" class="blob-line-code js-file-line">    <span class="nx">hex_tab</span> <span class="o">=</span> <span class="p">(</span><span class="nx">hexcase</span> <span class="o">?</span> <span class="s2">&quot;0123456789ABCDEF&quot;</span> <span class="o">:</span> <span class="s2">&quot;0123456789abcdef&quot;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L949" class="blob-line-num js-line-number" data-line-number="949"></td>
        <td id="LC949" class="blob-line-code js-file-line">    <span class="nx">output</span> <span class="o">=</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L950" class="blob-line-num js-line-number" data-line-number="950"></td>
        <td id="LC950" class="blob-line-code js-file-line">    <span class="nx">x</span> <span class="o">=</span> <span class="k">void</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L951" class="blob-line-num js-line-number" data-line-number="951"></td>
        <td id="LC951" class="blob-line-code js-file-line">    <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L952" class="blob-line-num js-line-number" data-line-number="952"></td>
        <td id="LC952" class="blob-line-code js-file-line">    <span class="k">while</span> <span class="p">(</span><span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">input</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L953" class="blob-line-num js-line-number" data-line-number="953"></td>
        <td id="LC953" class="blob-line-code js-file-line">      <span class="nx">x</span> <span class="o">=</span> <span class="nx">input</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="nx">i</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L954" class="blob-line-num js-line-number" data-line-number="954"></td>
        <td id="LC954" class="blob-line-code js-file-line">      <span class="nx">output</span> <span class="o">+=</span> <span class="nx">hex_tab</span><span class="p">.</span><span class="nx">charAt</span><span class="p">((</span><span class="nx">x</span> <span class="o">&gt;&gt;&gt;</span> <span class="mi">4</span><span class="p">)</span> <span class="o">&amp;</span> <span class="mh">0x0F</span><span class="p">)</span> <span class="o">+</span> <span class="nx">hex_tab</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="nx">x</span> <span class="o">&amp;</span> <span class="mh">0x0F</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L955" class="blob-line-num js-line-number" data-line-number="955"></td>
        <td id="LC955" class="blob-line-code js-file-line">      <span class="nx">i</span><span class="o">++</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L956" class="blob-line-num js-line-number" data-line-number="956"></td>
        <td id="LC956" class="blob-line-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L957" class="blob-line-num js-line-number" data-line-number="957"></td>
        <td id="LC957" class="blob-line-code js-file-line">    <span class="k">return</span> <span class="nx">output</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L958" class="blob-line-num js-line-number" data-line-number="958"></td>
        <td id="LC958" class="blob-line-code js-file-line">  <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L959" class="blob-line-num js-line-number" data-line-number="959"></td>
        <td id="LC959" class="blob-line-code js-file-line">  <span class="nx">rstr2b64</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">input</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L960" class="blob-line-num js-line-number" data-line-number="960"></td>
        <td id="LC960" class="blob-line-code js-file-line">    <span class="kd">var</span> <span class="nx">e</span><span class="p">,</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">j</span><span class="p">,</span> <span class="nx">len</span><span class="p">,</span> <span class="nx">output</span><span class="p">,</span> <span class="nx">tab</span><span class="p">,</span> <span class="nx">triplet</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L961" class="blob-line-num js-line-number" data-line-number="961"></td>
        <td id="LC961" class="blob-line-code js-file-line">    <span class="k">try</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L962" class="blob-line-num js-line-number" data-line-number="962"></td>
        <td id="LC962" class="blob-line-code js-file-line">      <span class="nx">b64pad</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L963" class="blob-line-num js-line-number" data-line-number="963"></td>
        <td id="LC963" class="blob-line-code js-file-line">    <span class="p">}</span> <span class="k">catch</span> <span class="p">(</span><span class="nx">_error</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L964" class="blob-line-num js-line-number" data-line-number="964"></td>
        <td id="LC964" class="blob-line-code js-file-line">      <span class="nx">e</span> <span class="o">=</span> <span class="nx">_error</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L965" class="blob-line-num js-line-number" data-line-number="965"></td>
        <td id="LC965" class="blob-line-code js-file-line">      <span class="nx">b64pad</span> <span class="o">=</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L966" class="blob-line-num js-line-number" data-line-number="966"></td>
        <td id="LC966" class="blob-line-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L967" class="blob-line-num js-line-number" data-line-number="967"></td>
        <td id="LC967" class="blob-line-code js-file-line">    <span class="nx">tab</span> <span class="o">=</span> <span class="s2">&quot;ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L968" class="blob-line-num js-line-number" data-line-number="968"></td>
        <td id="LC968" class="blob-line-code js-file-line">    <span class="nx">output</span> <span class="o">=</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L969" class="blob-line-num js-line-number" data-line-number="969"></td>
        <td id="LC969" class="blob-line-code js-file-line">    <span class="nx">len</span> <span class="o">=</span> <span class="nx">input</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L970" class="blob-line-num js-line-number" data-line-number="970"></td>
        <td id="LC970" class="blob-line-code js-file-line">    <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L971" class="blob-line-num js-line-number" data-line-number="971"></td>
        <td id="LC971" class="blob-line-code js-file-line">    <span class="k">while</span> <span class="p">(</span><span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">len</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L972" class="blob-line-num js-line-number" data-line-number="972"></td>
        <td id="LC972" class="blob-line-code js-file-line">      <span class="nx">triplet</span> <span class="o">=</span> <span class="p">(</span><span class="nx">input</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span> <span class="o">&lt;&lt;</span> <span class="mi">16</span><span class="p">)</span> <span class="o">|</span> <span class="p">(</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">1</span> <span class="o">&lt;</span> <span class="nx">len</span> <span class="o">?</span> <span class="nx">input</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)</span> <span class="o">&lt;&lt;</span> <span class="mi">8</span> <span class="o">:</span> <span class="mi">0</span><span class="p">)</span> <span class="o">|</span> <span class="p">(</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">2</span> <span class="o">&lt;</span> <span class="nx">len</span> <span class="o">?</span> <span class="nx">input</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">2</span><span class="p">)</span> <span class="o">:</span> <span class="mi">0</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L973" class="blob-line-num js-line-number" data-line-number="973"></td>
        <td id="LC973" class="blob-line-code js-file-line">      <span class="nx">j</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L974" class="blob-line-num js-line-number" data-line-number="974"></td>
        <td id="LC974" class="blob-line-code js-file-line">      <span class="k">while</span> <span class="p">(</span><span class="nx">j</span> <span class="o">&lt;</span> <span class="mi">4</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L975" class="blob-line-num js-line-number" data-line-number="975"></td>
        <td id="LC975" class="blob-line-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="nx">i</span> <span class="o">*</span> <span class="mi">8</span> <span class="o">+</span> <span class="nx">j</span> <span class="o">*</span> <span class="mi">6</span> <span class="o">&gt;</span> <span class="nx">input</span><span class="p">.</span><span class="nx">length</span> <span class="o">*</span> <span class="mi">8</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L976" class="blob-line-num js-line-number" data-line-number="976"></td>
        <td id="LC976" class="blob-line-code js-file-line">          <span class="nx">output</span> <span class="o">+=</span> <span class="nx">b64pad</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L977" class="blob-line-num js-line-number" data-line-number="977"></td>
        <td id="LC977" class="blob-line-code js-file-line">        <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L978" class="blob-line-num js-line-number" data-line-number="978"></td>
        <td id="LC978" class="blob-line-code js-file-line">          <span class="nx">output</span> <span class="o">+=</span> <span class="nx">tab</span><span class="p">.</span><span class="nx">charAt</span><span class="p">((</span><span class="nx">triplet</span> <span class="o">&gt;&gt;&gt;</span> <span class="mi">6</span> <span class="o">*</span> <span class="p">(</span><span class="mi">3</span> <span class="o">-</span> <span class="nx">j</span><span class="p">))</span> <span class="o">&amp;</span> <span class="mh">0x3F</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L979" class="blob-line-num js-line-number" data-line-number="979"></td>
        <td id="LC979" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L980" class="blob-line-num js-line-number" data-line-number="980"></td>
        <td id="LC980" class="blob-line-code js-file-line">        <span class="nx">j</span><span class="o">++</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L981" class="blob-line-num js-line-number" data-line-number="981"></td>
        <td id="LC981" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L982" class="blob-line-num js-line-number" data-line-number="982"></td>
        <td id="LC982" class="blob-line-code js-file-line">      <span class="nx">i</span> <span class="o">+=</span> <span class="mi">3</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L983" class="blob-line-num js-line-number" data-line-number="983"></td>
        <td id="LC983" class="blob-line-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L984" class="blob-line-num js-line-number" data-line-number="984"></td>
        <td id="LC984" class="blob-line-code js-file-line">    <span class="k">return</span> <span class="nx">output</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L985" class="blob-line-num js-line-number" data-line-number="985"></td>
        <td id="LC985" class="blob-line-code js-file-line">  <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L986" class="blob-line-num js-line-number" data-line-number="986"></td>
        <td id="LC986" class="blob-line-code js-file-line">  <span class="nx">rstr2any</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">input</span><span class="p">,</span> <span class="nx">encoding</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L987" class="blob-line-num js-line-number" data-line-number="987"></td>
        <td id="LC987" class="blob-line-code js-file-line">    <span class="kd">var</span> <span class="nx">dividend</span><span class="p">,</span> <span class="nx">divisor</span><span class="p">,</span> <span class="nx">full_length</span><span class="p">,</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">output</span><span class="p">,</span> <span class="nx">q</span><span class="p">,</span> <span class="nx">quotient</span><span class="p">,</span> <span class="nx">remainders</span><span class="p">,</span> <span class="nx">x</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L988" class="blob-line-num js-line-number" data-line-number="988"></td>
        <td id="LC988" class="blob-line-code js-file-line">    <span class="nx">divisor</span> <span class="o">=</span> <span class="nx">encoding</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L989" class="blob-line-num js-line-number" data-line-number="989"></td>
        <td id="LC989" class="blob-line-code js-file-line">    <span class="nx">remainders</span> <span class="o">=</span> <span class="nb">Array</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L990" class="blob-line-num js-line-number" data-line-number="990"></td>
        <td id="LC990" class="blob-line-code js-file-line">    <span class="nx">i</span> <span class="o">=</span> <span class="k">void</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L991" class="blob-line-num js-line-number" data-line-number="991"></td>
        <td id="LC991" class="blob-line-code js-file-line">    <span class="nx">q</span> <span class="o">=</span> <span class="k">void</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L992" class="blob-line-num js-line-number" data-line-number="992"></td>
        <td id="LC992" class="blob-line-code js-file-line">    <span class="nx">x</span> <span class="o">=</span> <span class="k">void</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L993" class="blob-line-num js-line-number" data-line-number="993"></td>
        <td id="LC993" class="blob-line-code js-file-line">    <span class="nx">quotient</span> <span class="o">=</span> <span class="k">void</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L994" class="blob-line-num js-line-number" data-line-number="994"></td>
        <td id="LC994" class="blob-line-code js-file-line">    <span class="nx">dividend</span> <span class="o">=</span> <span class="nb">Array</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">ceil</span><span class="p">(</span><span class="nx">input</span><span class="p">.</span><span class="nx">length</span> <span class="o">/</span> <span class="mi">2</span><span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L995" class="blob-line-num js-line-number" data-line-number="995"></td>
        <td id="LC995" class="blob-line-code js-file-line">    <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L996" class="blob-line-num js-line-number" data-line-number="996"></td>
        <td id="LC996" class="blob-line-code js-file-line">    <span class="k">while</span> <span class="p">(</span><span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">dividend</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L997" class="blob-line-num js-line-number" data-line-number="997"></td>
        <td id="LC997" class="blob-line-code js-file-line">      <span class="nx">dividend</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="p">(</span><span class="nx">input</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="nx">i</span> <span class="o">*</span> <span class="mi">2</span><span class="p">)</span> <span class="o">&lt;&lt;</span> <span class="mi">8</span><span class="p">)</span> <span class="o">|</span> <span class="nx">input</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="nx">i</span> <span class="o">*</span> <span class="mi">2</span> <span class="o">+</span> <span class="mi">1</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L998" class="blob-line-num js-line-number" data-line-number="998"></td>
        <td id="LC998" class="blob-line-code js-file-line">      <span class="nx">i</span><span class="o">++</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L999" class="blob-line-num js-line-number" data-line-number="999"></td>
        <td id="LC999" class="blob-line-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1000" class="blob-line-num js-line-number" data-line-number="1000"></td>
        <td id="LC1000" class="blob-line-code js-file-line">    <span class="k">while</span> <span class="p">(</span><span class="nx">dividend</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1001" class="blob-line-num js-line-number" data-line-number="1001"></td>
        <td id="LC1001" class="blob-line-code js-file-line">      <span class="nx">quotient</span> <span class="o">=</span> <span class="nb">Array</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L1002" class="blob-line-num js-line-number" data-line-number="1002"></td>
        <td id="LC1002" class="blob-line-code js-file-line">      <span class="nx">x</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1003" class="blob-line-num js-line-number" data-line-number="1003"></td>
        <td id="LC1003" class="blob-line-code js-file-line">      <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1004" class="blob-line-num js-line-number" data-line-number="1004"></td>
        <td id="LC1004" class="blob-line-code js-file-line">      <span class="k">while</span> <span class="p">(</span><span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">dividend</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1005" class="blob-line-num js-line-number" data-line-number="1005"></td>
        <td id="LC1005" class="blob-line-code js-file-line">        <span class="nx">x</span> <span class="o">=</span> <span class="p">(</span><span class="nx">x</span> <span class="o">&lt;&lt;</span> <span class="mi">16</span><span class="p">)</span> <span class="o">+</span> <span class="nx">dividend</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L1006" class="blob-line-num js-line-number" data-line-number="1006"></td>
        <td id="LC1006" class="blob-line-code js-file-line">        <span class="nx">q</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">x</span> <span class="o">/</span> <span class="nx">divisor</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1007" class="blob-line-num js-line-number" data-line-number="1007"></td>
        <td id="LC1007" class="blob-line-code js-file-line">        <span class="nx">x</span> <span class="o">-=</span> <span class="nx">q</span> <span class="o">*</span> <span class="nx">divisor</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1008" class="blob-line-num js-line-number" data-line-number="1008"></td>
        <td id="LC1008" class="blob-line-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="nx">quotient</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">||</span> <span class="nx">q</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1009" class="blob-line-num js-line-number" data-line-number="1009"></td>
        <td id="LC1009" class="blob-line-code js-file-line">          <span class="nx">quotient</span><span class="p">[</span><span class="nx">quotient</span><span class="p">.</span><span class="nx">length</span><span class="p">]</span> <span class="o">=</span> <span class="nx">q</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1010" class="blob-line-num js-line-number" data-line-number="1010"></td>
        <td id="LC1010" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1011" class="blob-line-num js-line-number" data-line-number="1011"></td>
        <td id="LC1011" class="blob-line-code js-file-line">        <span class="nx">i</span><span class="o">++</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1012" class="blob-line-num js-line-number" data-line-number="1012"></td>
        <td id="LC1012" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1013" class="blob-line-num js-line-number" data-line-number="1013"></td>
        <td id="LC1013" class="blob-line-code js-file-line">      <span class="nx">remainders</span><span class="p">[</span><span class="nx">remainders</span><span class="p">.</span><span class="nx">length</span><span class="p">]</span> <span class="o">=</span> <span class="nx">x</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1014" class="blob-line-num js-line-number" data-line-number="1014"></td>
        <td id="LC1014" class="blob-line-code js-file-line">      <span class="nx">dividend</span> <span class="o">=</span> <span class="nx">quotient</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1015" class="blob-line-num js-line-number" data-line-number="1015"></td>
        <td id="LC1015" class="blob-line-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1016" class="blob-line-num js-line-number" data-line-number="1016"></td>
        <td id="LC1016" class="blob-line-code js-file-line">    <span class="nx">output</span> <span class="o">=</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1017" class="blob-line-num js-line-number" data-line-number="1017"></td>
        <td id="LC1017" class="blob-line-code js-file-line">    <span class="nx">i</span> <span class="o">=</span> <span class="nx">remainders</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1018" class="blob-line-num js-line-number" data-line-number="1018"></td>
        <td id="LC1018" class="blob-line-code js-file-line">    <span class="k">while</span> <span class="p">(</span><span class="nx">i</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1019" class="blob-line-num js-line-number" data-line-number="1019"></td>
        <td id="LC1019" class="blob-line-code js-file-line">      <span class="nx">output</span> <span class="o">+=</span> <span class="nx">encoding</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="nx">remainders</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L1020" class="blob-line-num js-line-number" data-line-number="1020"></td>
        <td id="LC1020" class="blob-line-code js-file-line">      <span class="nx">i</span><span class="o">--</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1021" class="blob-line-num js-line-number" data-line-number="1021"></td>
        <td id="LC1021" class="blob-line-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1022" class="blob-line-num js-line-number" data-line-number="1022"></td>
        <td id="LC1022" class="blob-line-code js-file-line">    <span class="nx">full_length</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">ceil</span><span class="p">(</span><span class="nx">input</span><span class="p">.</span><span class="nx">length</span> <span class="o">*</span> <span class="mi">8</span> <span class="o">/</span> <span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">encoding</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="o">/</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="mi">2</span><span class="p">)));</span></td>
      </tr>
      <tr>
        <td id="L1023" class="blob-line-num js-line-number" data-line-number="1023"></td>
        <td id="LC1023" class="blob-line-code js-file-line">    <span class="nx">i</span> <span class="o">=</span> <span class="nx">output</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1024" class="blob-line-num js-line-number" data-line-number="1024"></td>
        <td id="LC1024" class="blob-line-code js-file-line">    <span class="k">while</span> <span class="p">(</span><span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">full_length</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1025" class="blob-line-num js-line-number" data-line-number="1025"></td>
        <td id="LC1025" class="blob-line-code js-file-line">      <span class="nx">output</span> <span class="o">=</span> <span class="nx">encoding</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">+</span> <span class="nx">output</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1026" class="blob-line-num js-line-number" data-line-number="1026"></td>
        <td id="LC1026" class="blob-line-code js-file-line">      <span class="nx">i</span><span class="o">++</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1027" class="blob-line-num js-line-number" data-line-number="1027"></td>
        <td id="LC1027" class="blob-line-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1028" class="blob-line-num js-line-number" data-line-number="1028"></td>
        <td id="LC1028" class="blob-line-code js-file-line">    <span class="k">return</span> <span class="nx">output</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1029" class="blob-line-num js-line-number" data-line-number="1029"></td>
        <td id="LC1029" class="blob-line-code js-file-line">  <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L1030" class="blob-line-num js-line-number" data-line-number="1030"></td>
        <td id="LC1030" class="blob-line-code js-file-line">  <span class="nx">str2rstr_utf8</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">input</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1031" class="blob-line-num js-line-number" data-line-number="1031"></td>
        <td id="LC1031" class="blob-line-code js-file-line">    <span class="kd">var</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">output</span><span class="p">,</span> <span class="nx">x</span><span class="p">,</span> <span class="nx">y</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1032" class="blob-line-num js-line-number" data-line-number="1032"></td>
        <td id="LC1032" class="blob-line-code js-file-line">    <span class="nx">output</span> <span class="o">=</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1033" class="blob-line-num js-line-number" data-line-number="1033"></td>
        <td id="LC1033" class="blob-line-code js-file-line">    <span class="nx">i</span> <span class="o">=</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1034" class="blob-line-num js-line-number" data-line-number="1034"></td>
        <td id="LC1034" class="blob-line-code js-file-line">    <span class="nx">x</span> <span class="o">=</span> <span class="k">void</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1035" class="blob-line-num js-line-number" data-line-number="1035"></td>
        <td id="LC1035" class="blob-line-code js-file-line">    <span class="nx">y</span> <span class="o">=</span> <span class="k">void</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1036" class="blob-line-num js-line-number" data-line-number="1036"></td>
        <td id="LC1036" class="blob-line-code js-file-line">    <span class="k">while</span> <span class="p">(</span><span class="o">++</span><span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">input</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1037" class="blob-line-num js-line-number" data-line-number="1037"></td>
        <td id="LC1037" class="blob-line-code js-file-line">      <span class="nx">x</span> <span class="o">=</span> <span class="nx">input</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="nx">i</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1038" class="blob-line-num js-line-number" data-line-number="1038"></td>
        <td id="LC1038" class="blob-line-code js-file-line">      <span class="nx">y</span> <span class="o">=</span> <span class="p">(</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">1</span> <span class="o">&lt;</span> <span class="nx">input</span><span class="p">.</span><span class="nx">length</span> <span class="o">?</span> <span class="nx">input</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)</span> <span class="o">:</span> <span class="mi">0</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1039" class="blob-line-num js-line-number" data-line-number="1039"></td>
        <td id="LC1039" class="blob-line-code js-file-line">      <span class="k">if</span> <span class="p">(</span><span class="mh">0xD800</span> <span class="o">&lt;=</span> <span class="nx">x</span> <span class="o">&amp;&amp;</span> <span class="nx">x</span> <span class="o">&lt;=</span> <span class="mh">0xDBFF</span> <span class="o">&amp;&amp;</span> <span class="mh">0xDC00</span> <span class="o">&lt;=</span> <span class="nx">y</span> <span class="o">&amp;&amp;</span> <span class="nx">y</span> <span class="o">&lt;=</span> <span class="mh">0xDFFF</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1040" class="blob-line-num js-line-number" data-line-number="1040"></td>
        <td id="LC1040" class="blob-line-code js-file-line">        <span class="nx">x</span> <span class="o">=</span> <span class="mh">0x10000</span> <span class="o">+</span> <span class="p">((</span><span class="nx">x</span> <span class="o">&amp;</span> <span class="mh">0x03FF</span><span class="p">)</span> <span class="o">&lt;&lt;</span> <span class="mi">10</span><span class="p">)</span> <span class="o">+</span> <span class="p">(</span><span class="nx">y</span> <span class="o">&amp;</span> <span class="mh">0x03FF</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1041" class="blob-line-num js-line-number" data-line-number="1041"></td>
        <td id="LC1041" class="blob-line-code js-file-line">        <span class="nx">i</span><span class="o">++</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1042" class="blob-line-num js-line-number" data-line-number="1042"></td>
        <td id="LC1042" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1043" class="blob-line-num js-line-number" data-line-number="1043"></td>
        <td id="LC1043" class="blob-line-code js-file-line">      <span class="k">if</span> <span class="p">(</span><span class="nx">x</span> <span class="o">&lt;=</span> <span class="mh">0x7F</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1044" class="blob-line-num js-line-number" data-line-number="1044"></td>
        <td id="LC1044" class="blob-line-code js-file-line">        <span class="nx">output</span> <span class="o">+=</span> <span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">(</span><span class="nx">x</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1045" class="blob-line-num js-line-number" data-line-number="1045"></td>
        <td id="LC1045" class="blob-line-code js-file-line">      <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">x</span> <span class="o">&lt;=</span> <span class="mh">0x7FF</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1046" class="blob-line-num js-line-number" data-line-number="1046"></td>
        <td id="LC1046" class="blob-line-code js-file-line">        <span class="nx">output</span> <span class="o">+=</span> <span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">(</span><span class="mh">0xC0</span> <span class="o">|</span> <span class="p">((</span><span class="nx">x</span> <span class="o">&gt;&gt;&gt;</span> <span class="mi">6</span><span class="p">)</span> <span class="o">&amp;</span> <span class="mh">0x1F</span><span class="p">),</span> <span class="mh">0x80</span> <span class="o">|</span> <span class="p">(</span><span class="nx">x</span> <span class="o">&amp;</span> <span class="mh">0x3F</span><span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L1047" class="blob-line-num js-line-number" data-line-number="1047"></td>
        <td id="LC1047" class="blob-line-code js-file-line">      <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">x</span> <span class="o">&lt;=</span> <span class="mh">0xFFFF</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1048" class="blob-line-num js-line-number" data-line-number="1048"></td>
        <td id="LC1048" class="blob-line-code js-file-line">        <span class="nx">output</span> <span class="o">+=</span> <span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">(</span><span class="mh">0xE0</span> <span class="o">|</span> <span class="p">((</span><span class="nx">x</span> <span class="o">&gt;&gt;&gt;</span> <span class="mi">12</span><span class="p">)</span> <span class="o">&amp;</span> <span class="mh">0x0F</span><span class="p">),</span> <span class="mh">0x80</span> <span class="o">|</span> <span class="p">((</span><span class="nx">x</span> <span class="o">&gt;&gt;&gt;</span> <span class="mi">6</span><span class="p">)</span> <span class="o">&amp;</span> <span class="mh">0x3F</span><span class="p">),</span> <span class="mh">0x80</span> <span class="o">|</span> <span class="p">(</span><span class="nx">x</span> <span class="o">&amp;</span> <span class="mh">0x3F</span><span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L1049" class="blob-line-num js-line-number" data-line-number="1049"></td>
        <td id="LC1049" class="blob-line-code js-file-line">      <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1050" class="blob-line-num js-line-number" data-line-number="1050"></td>
        <td id="LC1050" class="blob-line-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="nx">x</span> <span class="o">&lt;=</span> <span class="mh">0x1FFFFF</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1051" class="blob-line-num js-line-number" data-line-number="1051"></td>
        <td id="LC1051" class="blob-line-code js-file-line">          <span class="nx">output</span> <span class="o">+=</span> <span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">(</span><span class="mh">0xF0</span> <span class="o">|</span> <span class="p">((</span><span class="nx">x</span> <span class="o">&gt;&gt;&gt;</span> <span class="mi">18</span><span class="p">)</span> <span class="o">&amp;</span> <span class="mh">0x07</span><span class="p">),</span> <span class="mh">0x80</span> <span class="o">|</span> <span class="p">((</span><span class="nx">x</span> <span class="o">&gt;&gt;&gt;</span> <span class="mi">12</span><span class="p">)</span> <span class="o">&amp;</span> <span class="mh">0x3F</span><span class="p">),</span> <span class="mh">0x80</span> <span class="o">|</span> <span class="p">((</span><span class="nx">x</span> <span class="o">&gt;&gt;&gt;</span> <span class="mi">6</span><span class="p">)</span> <span class="o">&amp;</span> <span class="mh">0x3F</span><span class="p">),</span> <span class="mh">0x80</span> <span class="o">|</span> <span class="p">(</span><span class="nx">x</span> <span class="o">&amp;</span> <span class="mh">0x3F</span><span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L1052" class="blob-line-num js-line-number" data-line-number="1052"></td>
        <td id="LC1052" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1053" class="blob-line-num js-line-number" data-line-number="1053"></td>
        <td id="LC1053" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1054" class="blob-line-num js-line-number" data-line-number="1054"></td>
        <td id="LC1054" class="blob-line-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1055" class="blob-line-num js-line-number" data-line-number="1055"></td>
        <td id="LC1055" class="blob-line-code js-file-line">    <span class="k">return</span> <span class="nx">output</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1056" class="blob-line-num js-line-number" data-line-number="1056"></td>
        <td id="LC1056" class="blob-line-code js-file-line">  <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L1057" class="blob-line-num js-line-number" data-line-number="1057"></td>
        <td id="LC1057" class="blob-line-code js-file-line">  <span class="nx">str2rstr_utf16le</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">input</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1058" class="blob-line-num js-line-number" data-line-number="1058"></td>
        <td id="LC1058" class="blob-line-code js-file-line">    <span class="kd">var</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">output</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1059" class="blob-line-num js-line-number" data-line-number="1059"></td>
        <td id="LC1059" class="blob-line-code js-file-line">    <span class="nx">output</span> <span class="o">=</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1060" class="blob-line-num js-line-number" data-line-number="1060"></td>
        <td id="LC1060" class="blob-line-code js-file-line">    <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1061" class="blob-line-num js-line-number" data-line-number="1061"></td>
        <td id="LC1061" class="blob-line-code js-file-line">    <span class="k">while</span> <span class="p">(</span><span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">input</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1062" class="blob-line-num js-line-number" data-line-number="1062"></td>
        <td id="LC1062" class="blob-line-code js-file-line">      <span class="nx">output</span> <span class="o">+=</span> <span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">(</span><span class="nx">input</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span> <span class="o">&amp;</span> <span class="mh">0xFF</span><span class="p">,</span> <span class="p">(</span><span class="nx">input</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span> <span class="o">&gt;&gt;&gt;</span> <span class="mi">8</span><span class="p">)</span> <span class="o">&amp;</span> <span class="mh">0xFF</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1063" class="blob-line-num js-line-number" data-line-number="1063"></td>
        <td id="LC1063" class="blob-line-code js-file-line">      <span class="nx">i</span><span class="o">++</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1064" class="blob-line-num js-line-number" data-line-number="1064"></td>
        <td id="LC1064" class="blob-line-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1065" class="blob-line-num js-line-number" data-line-number="1065"></td>
        <td id="LC1065" class="blob-line-code js-file-line">    <span class="k">return</span> <span class="nx">output</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1066" class="blob-line-num js-line-number" data-line-number="1066"></td>
        <td id="LC1066" class="blob-line-code js-file-line">  <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L1067" class="blob-line-num js-line-number" data-line-number="1067"></td>
        <td id="LC1067" class="blob-line-code js-file-line">  <span class="nx">str2rstr_utf16be</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">input</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1068" class="blob-line-num js-line-number" data-line-number="1068"></td>
        <td id="LC1068" class="blob-line-code js-file-line">    <span class="kd">var</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">output</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1069" class="blob-line-num js-line-number" data-line-number="1069"></td>
        <td id="LC1069" class="blob-line-code js-file-line">    <span class="nx">output</span> <span class="o">=</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1070" class="blob-line-num js-line-number" data-line-number="1070"></td>
        <td id="LC1070" class="blob-line-code js-file-line">    <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1071" class="blob-line-num js-line-number" data-line-number="1071"></td>
        <td id="LC1071" class="blob-line-code js-file-line">    <span class="k">while</span> <span class="p">(</span><span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">input</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1072" class="blob-line-num js-line-number" data-line-number="1072"></td>
        <td id="LC1072" class="blob-line-code js-file-line">      <span class="nx">output</span> <span class="o">+=</span> <span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">((</span><span class="nx">input</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span> <span class="o">&gt;&gt;&gt;</span> <span class="mi">8</span><span class="p">)</span> <span class="o">&amp;</span> <span class="mh">0xFF</span><span class="p">,</span> <span class="nx">input</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span> <span class="o">&amp;</span> <span class="mh">0xFF</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1073" class="blob-line-num js-line-number" data-line-number="1073"></td>
        <td id="LC1073" class="blob-line-code js-file-line">      <span class="nx">i</span><span class="o">++</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1074" class="blob-line-num js-line-number" data-line-number="1074"></td>
        <td id="LC1074" class="blob-line-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1075" class="blob-line-num js-line-number" data-line-number="1075"></td>
        <td id="LC1075" class="blob-line-code js-file-line">    <span class="k">return</span> <span class="nx">output</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1076" class="blob-line-num js-line-number" data-line-number="1076"></td>
        <td id="LC1076" class="blob-line-code js-file-line">  <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L1077" class="blob-line-num js-line-number" data-line-number="1077"></td>
        <td id="LC1077" class="blob-line-code js-file-line">  <span class="nx">rstr2binb</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">input</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1078" class="blob-line-num js-line-number" data-line-number="1078"></td>
        <td id="LC1078" class="blob-line-code js-file-line">    <span class="kd">var</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">output</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1079" class="blob-line-num js-line-number" data-line-number="1079"></td>
        <td id="LC1079" class="blob-line-code js-file-line">    <span class="nx">output</span> <span class="o">=</span> <span class="nb">Array</span><span class="p">(</span><span class="nx">input</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;&gt;</span> <span class="mi">2</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1080" class="blob-line-num js-line-number" data-line-number="1080"></td>
        <td id="LC1080" class="blob-line-code js-file-line">    <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1081" class="blob-line-num js-line-number" data-line-number="1081"></td>
        <td id="LC1081" class="blob-line-code js-file-line">    <span class="k">while</span> <span class="p">(</span><span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">output</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1082" class="blob-line-num js-line-number" data-line-number="1082"></td>
        <td id="LC1082" class="blob-line-code js-file-line">      <span class="nx">output</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1083" class="blob-line-num js-line-number" data-line-number="1083"></td>
        <td id="LC1083" class="blob-line-code js-file-line">      <span class="nx">i</span><span class="o">++</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1084" class="blob-line-num js-line-number" data-line-number="1084"></td>
        <td id="LC1084" class="blob-line-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1085" class="blob-line-num js-line-number" data-line-number="1085"></td>
        <td id="LC1085" class="blob-line-code js-file-line">    <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1086" class="blob-line-num js-line-number" data-line-number="1086"></td>
        <td id="LC1086" class="blob-line-code js-file-line">    <span class="k">while</span> <span class="p">(</span><span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">input</span><span class="p">.</span><span class="nx">length</span> <span class="o">*</span> <span class="mi">8</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1087" class="blob-line-num js-line-number" data-line-number="1087"></td>
        <td id="LC1087" class="blob-line-code js-file-line">      <span class="nx">output</span><span class="p">[</span><span class="nx">i</span> <span class="o">&gt;&gt;</span> <span class="mi">5</span><span class="p">]</span> <span class="o">|=</span> <span class="p">(</span><span class="nx">input</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="nx">i</span> <span class="o">/</span> <span class="mi">8</span><span class="p">)</span> <span class="o">&amp;</span> <span class="mh">0xFF</span><span class="p">)</span> <span class="o">&lt;&lt;</span> <span class="p">(</span><span class="mi">24</span> <span class="o">-</span> <span class="nx">i</span> <span class="o">%</span> <span class="mi">32</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1088" class="blob-line-num js-line-number" data-line-number="1088"></td>
        <td id="LC1088" class="blob-line-code js-file-line">      <span class="nx">i</span> <span class="o">+=</span> <span class="mi">8</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1089" class="blob-line-num js-line-number" data-line-number="1089"></td>
        <td id="LC1089" class="blob-line-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1090" class="blob-line-num js-line-number" data-line-number="1090"></td>
        <td id="LC1090" class="blob-line-code js-file-line">    <span class="k">return</span> <span class="nx">output</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1091" class="blob-line-num js-line-number" data-line-number="1091"></td>
        <td id="LC1091" class="blob-line-code js-file-line">  <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L1092" class="blob-line-num js-line-number" data-line-number="1092"></td>
        <td id="LC1092" class="blob-line-code js-file-line">  <span class="nx">binb2rstr</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">input</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1093" class="blob-line-num js-line-number" data-line-number="1093"></td>
        <td id="LC1093" class="blob-line-code js-file-line">    <span class="kd">var</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">output</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1094" class="blob-line-num js-line-number" data-line-number="1094"></td>
        <td id="LC1094" class="blob-line-code js-file-line">    <span class="nx">output</span> <span class="o">=</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1095" class="blob-line-num js-line-number" data-line-number="1095"></td>
        <td id="LC1095" class="blob-line-code js-file-line">    <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1096" class="blob-line-num js-line-number" data-line-number="1096"></td>
        <td id="LC1096" class="blob-line-code js-file-line">    <span class="k">while</span> <span class="p">(</span><span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">input</span><span class="p">.</span><span class="nx">length</span> <span class="o">*</span> <span class="mi">32</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1097" class="blob-line-num js-line-number" data-line-number="1097"></td>
        <td id="LC1097" class="blob-line-code js-file-line">      <span class="nx">output</span> <span class="o">+=</span> <span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">((</span><span class="nx">input</span><span class="p">[</span><span class="nx">i</span> <span class="o">&gt;&gt;</span> <span class="mi">5</span><span class="p">]</span> <span class="o">&gt;&gt;&gt;</span> <span class="p">(</span><span class="mi">24</span> <span class="o">-</span> <span class="nx">i</span> <span class="o">%</span> <span class="mi">32</span><span class="p">))</span> <span class="o">&amp;</span> <span class="mh">0xFF</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1098" class="blob-line-num js-line-number" data-line-number="1098"></td>
        <td id="LC1098" class="blob-line-code js-file-line">      <span class="nx">i</span> <span class="o">+=</span> <span class="mi">8</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1099" class="blob-line-num js-line-number" data-line-number="1099"></td>
        <td id="LC1099" class="blob-line-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1100" class="blob-line-num js-line-number" data-line-number="1100"></td>
        <td id="LC1100" class="blob-line-code js-file-line">    <span class="k">return</span> <span class="nx">output</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1101" class="blob-line-num js-line-number" data-line-number="1101"></td>
        <td id="LC1101" class="blob-line-code js-file-line">  <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L1102" class="blob-line-num js-line-number" data-line-number="1102"></td>
        <td id="LC1102" class="blob-line-code js-file-line">  <span class="nx">binb_sha1</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span> <span class="nx">len</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1103" class="blob-line-num js-line-number" data-line-number="1103"></td>
        <td id="LC1103" class="blob-line-code js-file-line">    <span class="kd">var</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">e</span><span class="p">,</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">j</span><span class="p">,</span> <span class="nx">olda</span><span class="p">,</span> <span class="nx">oldb</span><span class="p">,</span> <span class="nx">oldc</span><span class="p">,</span> <span class="nx">oldd</span><span class="p">,</span> <span class="nx">olde</span><span class="p">,</span> <span class="nx">t</span><span class="p">,</span> <span class="nx">w</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1104" class="blob-line-num js-line-number" data-line-number="1104"></td>
        <td id="LC1104" class="blob-line-code js-file-line">    <span class="nx">x</span><span class="p">[</span><span class="nx">len</span> <span class="o">&gt;&gt;</span> <span class="mi">5</span><span class="p">]</span> <span class="o">|=</span> <span class="mh">0x80</span> <span class="o">&lt;&lt;</span> <span class="p">(</span><span class="mi">24</span> <span class="o">-</span> <span class="nx">len</span> <span class="o">%</span> <span class="mi">32</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1105" class="blob-line-num js-line-number" data-line-number="1105"></td>
        <td id="LC1105" class="blob-line-code js-file-line">    <span class="nx">x</span><span class="p">[((</span><span class="nx">len</span> <span class="o">+</span> <span class="mi">64</span> <span class="o">&gt;&gt;</span> <span class="mi">9</span><span class="p">)</span> <span class="o">&lt;&lt;</span> <span class="mi">4</span><span class="p">)</span> <span class="o">+</span> <span class="mi">15</span><span class="p">]</span> <span class="o">=</span> <span class="nx">len</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1106" class="blob-line-num js-line-number" data-line-number="1106"></td>
        <td id="LC1106" class="blob-line-code js-file-line">    <span class="nx">w</span> <span class="o">=</span> <span class="nb">Array</span><span class="p">(</span><span class="mi">80</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1107" class="blob-line-num js-line-number" data-line-number="1107"></td>
        <td id="LC1107" class="blob-line-code js-file-line">    <span class="nx">a</span> <span class="o">=</span> <span class="mi">1732584193</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1108" class="blob-line-num js-line-number" data-line-number="1108"></td>
        <td id="LC1108" class="blob-line-code js-file-line">    <span class="nx">b</span> <span class="o">=</span> <span class="o">-</span><span class="mi">271733879</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1109" class="blob-line-num js-line-number" data-line-number="1109"></td>
        <td id="LC1109" class="blob-line-code js-file-line">    <span class="nx">c</span> <span class="o">=</span> <span class="o">-</span><span class="mi">1732584194</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1110" class="blob-line-num js-line-number" data-line-number="1110"></td>
        <td id="LC1110" class="blob-line-code js-file-line">    <span class="nx">d</span> <span class="o">=</span> <span class="mi">271733878</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1111" class="blob-line-num js-line-number" data-line-number="1111"></td>
        <td id="LC1111" class="blob-line-code js-file-line">    <span class="nx">e</span> <span class="o">=</span> <span class="o">-</span><span class="mi">1009589776</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1112" class="blob-line-num js-line-number" data-line-number="1112"></td>
        <td id="LC1112" class="blob-line-code js-file-line">    <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1113" class="blob-line-num js-line-number" data-line-number="1113"></td>
        <td id="LC1113" class="blob-line-code js-file-line">    <span class="k">while</span> <span class="p">(</span><span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">x</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1114" class="blob-line-num js-line-number" data-line-number="1114"></td>
        <td id="LC1114" class="blob-line-code js-file-line">      <span class="nx">olda</span> <span class="o">=</span> <span class="nx">a</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1115" class="blob-line-num js-line-number" data-line-number="1115"></td>
        <td id="LC1115" class="blob-line-code js-file-line">      <span class="nx">oldb</span> <span class="o">=</span> <span class="nx">b</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1116" class="blob-line-num js-line-number" data-line-number="1116"></td>
        <td id="LC1116" class="blob-line-code js-file-line">      <span class="nx">oldc</span> <span class="o">=</span> <span class="nx">c</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1117" class="blob-line-num js-line-number" data-line-number="1117"></td>
        <td id="LC1117" class="blob-line-code js-file-line">      <span class="nx">oldd</span> <span class="o">=</span> <span class="nx">d</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1118" class="blob-line-num js-line-number" data-line-number="1118"></td>
        <td id="LC1118" class="blob-line-code js-file-line">      <span class="nx">olde</span> <span class="o">=</span> <span class="nx">e</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1119" class="blob-line-num js-line-number" data-line-number="1119"></td>
        <td id="LC1119" class="blob-line-code js-file-line">      <span class="nx">j</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1120" class="blob-line-num js-line-number" data-line-number="1120"></td>
        <td id="LC1120" class="blob-line-code js-file-line">      <span class="k">while</span> <span class="p">(</span><span class="nx">j</span> <span class="o">&lt;</span> <span class="mi">80</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1121" class="blob-line-num js-line-number" data-line-number="1121"></td>
        <td id="LC1121" class="blob-line-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="nx">j</span> <span class="o">&lt;</span> <span class="mi">16</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1122" class="blob-line-num js-line-number" data-line-number="1122"></td>
        <td id="LC1122" class="blob-line-code js-file-line">          <span class="nx">w</span><span class="p">[</span><span class="nx">j</span><span class="p">]</span> <span class="o">=</span> <span class="nx">x</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span> <span class="nx">j</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L1123" class="blob-line-num js-line-number" data-line-number="1123"></td>
        <td id="LC1123" class="blob-line-code js-file-line">        <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1124" class="blob-line-num js-line-number" data-line-number="1124"></td>
        <td id="LC1124" class="blob-line-code js-file-line">          <span class="nx">w</span><span class="p">[</span><span class="nx">j</span><span class="p">]</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">bit_rol</span><span class="p">(</span><span class="nx">w</span><span class="p">[</span><span class="nx">j</span> <span class="o">-</span> <span class="mi">3</span><span class="p">]</span> <span class="o">^</span> <span class="nx">w</span><span class="p">[</span><span class="nx">j</span> <span class="o">-</span> <span class="mi">8</span><span class="p">]</span> <span class="o">^</span> <span class="nx">w</span><span class="p">[</span><span class="nx">j</span> <span class="o">-</span> <span class="mi">14</span><span class="p">]</span> <span class="o">^</span> <span class="nx">w</span><span class="p">[</span><span class="nx">j</span> <span class="o">-</span> <span class="mi">16</span><span class="p">],</span> <span class="mi">1</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1125" class="blob-line-num js-line-number" data-line-number="1125"></td>
        <td id="LC1125" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1126" class="blob-line-num js-line-number" data-line-number="1126"></td>
        <td id="LC1126" class="blob-line-code js-file-line">        <span class="nx">t</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">safe_add</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">safe_add</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">bit_rol</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="mi">5</span><span class="p">),</span> <span class="k">this</span><span class="p">.</span><span class="nx">sha1_ft</span><span class="p">(</span><span class="nx">j</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">)),</span> <span class="k">this</span><span class="p">.</span><span class="nx">safe_add</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">safe_add</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">w</span><span class="p">[</span><span class="nx">j</span><span class="p">]),</span> <span class="k">this</span><span class="p">.</span><span class="nx">sha1_kt</span><span class="p">(</span><span class="nx">j</span><span class="p">)));</span></td>
      </tr>
      <tr>
        <td id="L1127" class="blob-line-num js-line-number" data-line-number="1127"></td>
        <td id="LC1127" class="blob-line-code js-file-line">        <span class="nx">e</span> <span class="o">=</span> <span class="nx">d</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1128" class="blob-line-num js-line-number" data-line-number="1128"></td>
        <td id="LC1128" class="blob-line-code js-file-line">        <span class="nx">d</span> <span class="o">=</span> <span class="nx">c</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1129" class="blob-line-num js-line-number" data-line-number="1129"></td>
        <td id="LC1129" class="blob-line-code js-file-line">        <span class="nx">c</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">bit_rol</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span> <span class="mi">30</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1130" class="blob-line-num js-line-number" data-line-number="1130"></td>
        <td id="LC1130" class="blob-line-code js-file-line">        <span class="nx">b</span> <span class="o">=</span> <span class="nx">a</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1131" class="blob-line-num js-line-number" data-line-number="1131"></td>
        <td id="LC1131" class="blob-line-code js-file-line">        <span class="nx">a</span> <span class="o">=</span> <span class="nx">t</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1132" class="blob-line-num js-line-number" data-line-number="1132"></td>
        <td id="LC1132" class="blob-line-code js-file-line">        <span class="nx">j</span><span class="o">++</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1133" class="blob-line-num js-line-number" data-line-number="1133"></td>
        <td id="LC1133" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1134" class="blob-line-num js-line-number" data-line-number="1134"></td>
        <td id="LC1134" class="blob-line-code js-file-line">      <span class="nx">a</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">safe_add</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">olda</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1135" class="blob-line-num js-line-number" data-line-number="1135"></td>
        <td id="LC1135" class="blob-line-code js-file-line">      <span class="nx">b</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">safe_add</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span> <span class="nx">oldb</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1136" class="blob-line-num js-line-number" data-line-number="1136"></td>
        <td id="LC1136" class="blob-line-code js-file-line">      <span class="nx">c</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">safe_add</span><span class="p">(</span><span class="nx">c</span><span class="p">,</span> <span class="nx">oldc</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1137" class="blob-line-num js-line-number" data-line-number="1137"></td>
        <td id="LC1137" class="blob-line-code js-file-line">      <span class="nx">d</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">safe_add</span><span class="p">(</span><span class="nx">d</span><span class="p">,</span> <span class="nx">oldd</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1138" class="blob-line-num js-line-number" data-line-number="1138"></td>
        <td id="LC1138" class="blob-line-code js-file-line">      <span class="nx">e</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">safe_add</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">olde</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1139" class="blob-line-num js-line-number" data-line-number="1139"></td>
        <td id="LC1139" class="blob-line-code js-file-line">      <span class="nx">i</span> <span class="o">+=</span> <span class="mi">16</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1140" class="blob-line-num js-line-number" data-line-number="1140"></td>
        <td id="LC1140" class="blob-line-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1141" class="blob-line-num js-line-number" data-line-number="1141"></td>
        <td id="LC1141" class="blob-line-code js-file-line">    <span class="k">return</span> <span class="nb">Array</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">e</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1142" class="blob-line-num js-line-number" data-line-number="1142"></td>
        <td id="LC1142" class="blob-line-code js-file-line">  <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L1143" class="blob-line-num js-line-number" data-line-number="1143"></td>
        <td id="LC1143" class="blob-line-code js-file-line">  <span class="nx">sha1_ft</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1144" class="blob-line-num js-line-number" data-line-number="1144"></td>
        <td id="LC1144" class="blob-line-code js-file-line">    <span class="k">if</span> <span class="p">(</span><span class="nx">t</span> <span class="o">&lt;</span> <span class="mi">20</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1145" class="blob-line-num js-line-number" data-line-number="1145"></td>
        <td id="LC1145" class="blob-line-code js-file-line">      <span class="k">return</span> <span class="p">(</span><span class="nx">b</span> <span class="o">&amp;</span> <span class="nx">c</span><span class="p">)</span> <span class="o">|</span> <span class="p">((</span><span class="o">~</span><span class="nx">b</span><span class="p">)</span> <span class="o">&amp;</span> <span class="nx">d</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1146" class="blob-line-num js-line-number" data-line-number="1146"></td>
        <td id="LC1146" class="blob-line-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1147" class="blob-line-num js-line-number" data-line-number="1147"></td>
        <td id="LC1147" class="blob-line-code js-file-line">    <span class="k">if</span> <span class="p">(</span><span class="nx">t</span> <span class="o">&lt;</span> <span class="mi">40</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1148" class="blob-line-num js-line-number" data-line-number="1148"></td>
        <td id="LC1148" class="blob-line-code js-file-line">      <span class="k">return</span> <span class="nx">b</span> <span class="o">^</span> <span class="nx">c</span> <span class="o">^</span> <span class="nx">d</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1149" class="blob-line-num js-line-number" data-line-number="1149"></td>
        <td id="LC1149" class="blob-line-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1150" class="blob-line-num js-line-number" data-line-number="1150"></td>
        <td id="LC1150" class="blob-line-code js-file-line">    <span class="k">if</span> <span class="p">(</span><span class="nx">t</span> <span class="o">&lt;</span> <span class="mi">60</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1151" class="blob-line-num js-line-number" data-line-number="1151"></td>
        <td id="LC1151" class="blob-line-code js-file-line">      <span class="k">return</span> <span class="p">(</span><span class="nx">b</span> <span class="o">&amp;</span> <span class="nx">c</span><span class="p">)</span> <span class="o">|</span> <span class="p">(</span><span class="nx">b</span> <span class="o">&amp;</span> <span class="nx">d</span><span class="p">)</span> <span class="o">|</span> <span class="p">(</span><span class="nx">c</span> <span class="o">&amp;</span> <span class="nx">d</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1152" class="blob-line-num js-line-number" data-line-number="1152"></td>
        <td id="LC1152" class="blob-line-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1153" class="blob-line-num js-line-number" data-line-number="1153"></td>
        <td id="LC1153" class="blob-line-code js-file-line">    <span class="k">return</span> <span class="nx">b</span> <span class="o">^</span> <span class="nx">c</span> <span class="o">^</span> <span class="nx">d</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1154" class="blob-line-num js-line-number" data-line-number="1154"></td>
        <td id="LC1154" class="blob-line-code js-file-line">  <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L1155" class="blob-line-num js-line-number" data-line-number="1155"></td>
        <td id="LC1155" class="blob-line-code js-file-line">  <span class="nx">sha1_kt</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1156" class="blob-line-num js-line-number" data-line-number="1156"></td>
        <td id="LC1156" class="blob-line-code js-file-line">    <span class="k">if</span> <span class="p">(</span><span class="nx">t</span> <span class="o">&lt;</span> <span class="mi">20</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1157" class="blob-line-num js-line-number" data-line-number="1157"></td>
        <td id="LC1157" class="blob-line-code js-file-line">      <span class="k">return</span> <span class="mi">1518500249</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1158" class="blob-line-num js-line-number" data-line-number="1158"></td>
        <td id="LC1158" class="blob-line-code js-file-line">    <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1159" class="blob-line-num js-line-number" data-line-number="1159"></td>
        <td id="LC1159" class="blob-line-code js-file-line">      <span class="k">if</span> <span class="p">(</span><span class="nx">t</span> <span class="o">&lt;</span> <span class="mi">40</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1160" class="blob-line-num js-line-number" data-line-number="1160"></td>
        <td id="LC1160" class="blob-line-code js-file-line">        <span class="k">return</span> <span class="mi">1859775393</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1161" class="blob-line-num js-line-number" data-line-number="1161"></td>
        <td id="LC1161" class="blob-line-code js-file-line">      <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1162" class="blob-line-num js-line-number" data-line-number="1162"></td>
        <td id="LC1162" class="blob-line-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="nx">t</span> <span class="o">&lt;</span> <span class="mi">60</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1163" class="blob-line-num js-line-number" data-line-number="1163"></td>
        <td id="LC1163" class="blob-line-code js-file-line">          <span class="k">return</span> <span class="o">-</span><span class="mi">1894007588</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1164" class="blob-line-num js-line-number" data-line-number="1164"></td>
        <td id="LC1164" class="blob-line-code js-file-line">        <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1165" class="blob-line-num js-line-number" data-line-number="1165"></td>
        <td id="LC1165" class="blob-line-code js-file-line">          <span class="k">return</span> <span class="o">-</span><span class="mi">899497514</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1166" class="blob-line-num js-line-number" data-line-number="1166"></td>
        <td id="LC1166" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1167" class="blob-line-num js-line-number" data-line-number="1167"></td>
        <td id="LC1167" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1168" class="blob-line-num js-line-number" data-line-number="1168"></td>
        <td id="LC1168" class="blob-line-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1169" class="blob-line-num js-line-number" data-line-number="1169"></td>
        <td id="LC1169" class="blob-line-code js-file-line">  <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L1170" class="blob-line-num js-line-number" data-line-number="1170"></td>
        <td id="LC1170" class="blob-line-code js-file-line">  <span class="nx">safe_add</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span> <span class="nx">y</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1171" class="blob-line-num js-line-number" data-line-number="1171"></td>
        <td id="LC1171" class="blob-line-code js-file-line">    <span class="kd">var</span> <span class="nx">lsw</span><span class="p">,</span> <span class="nx">msw</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1172" class="blob-line-num js-line-number" data-line-number="1172"></td>
        <td id="LC1172" class="blob-line-code js-file-line">    <span class="nx">lsw</span> <span class="o">=</span> <span class="p">(</span><span class="nx">x</span> <span class="o">&amp;</span> <span class="mh">0xFFFF</span><span class="p">)</span> <span class="o">+</span> <span class="p">(</span><span class="nx">y</span> <span class="o">&amp;</span> <span class="mh">0xFFFF</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1173" class="blob-line-num js-line-number" data-line-number="1173"></td>
        <td id="LC1173" class="blob-line-code js-file-line">    <span class="nx">msw</span> <span class="o">=</span> <span class="p">(</span><span class="nx">x</span> <span class="o">&gt;&gt;</span> <span class="mi">16</span><span class="p">)</span> <span class="o">+</span> <span class="p">(</span><span class="nx">y</span> <span class="o">&gt;&gt;</span> <span class="mi">16</span><span class="p">)</span> <span class="o">+</span> <span class="p">(</span><span class="nx">lsw</span> <span class="o">&gt;&gt;</span> <span class="mi">16</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1174" class="blob-line-num js-line-number" data-line-number="1174"></td>
        <td id="LC1174" class="blob-line-code js-file-line">    <span class="k">return</span> <span class="p">(</span><span class="nx">msw</span> <span class="o">&lt;&lt;</span> <span class="mi">16</span><span class="p">)</span> <span class="o">|</span> <span class="p">(</span><span class="nx">lsw</span> <span class="o">&amp;</span> <span class="mh">0xFFFF</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1175" class="blob-line-num js-line-number" data-line-number="1175"></td>
        <td id="LC1175" class="blob-line-code js-file-line">  <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L1176" class="blob-line-num js-line-number" data-line-number="1176"></td>
        <td id="LC1176" class="blob-line-code js-file-line">  <span class="nx">bit_rol</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">num</span><span class="p">,</span> <span class="nx">cnt</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1177" class="blob-line-num js-line-number" data-line-number="1177"></td>
        <td id="LC1177" class="blob-line-code js-file-line">    <span class="k">return</span> <span class="p">(</span><span class="nx">num</span> <span class="o">&lt;&lt;</span> <span class="nx">cnt</span><span class="p">)</span> <span class="o">|</span> <span class="p">(</span><span class="nx">num</span> <span class="o">&gt;&gt;&gt;</span> <span class="p">(</span><span class="mi">32</span> <span class="o">-</span> <span class="nx">cnt</span><span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L1178" class="blob-line-num js-line-number" data-line-number="1178"></td>
        <td id="LC1178" class="blob-line-code js-file-line">  <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L1179" class="blob-line-num js-line-number" data-line-number="1179"></td>
        <td id="LC1179" class="blob-line-code js-file-line">  <span class="nx">create_hash</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1180" class="blob-line-num js-line-number" data-line-number="1180"></td>
        <td id="LC1180" class="blob-line-code js-file-line">    <span class="kd">var</span> <span class="nx">hash</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1181" class="blob-line-num js-line-number" data-line-number="1181"></td>
        <td id="LC1181" class="blob-line-code js-file-line">    <span class="nx">hash</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">b64_sha1</span><span class="p">((</span><span class="k">new</span> <span class="nb">Date</span><span class="p">()).</span><span class="nx">getTime</span><span class="p">()</span> <span class="o">+</span> <span class="s2">&quot;:&quot;</span> <span class="o">+</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">random</span><span class="p">()</span> <span class="o">*</span> <span class="mi">9999999</span><span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L1182" class="blob-line-num js-line-number" data-line-number="1182"></td>
        <td id="LC1182" class="blob-line-code js-file-line">    <span class="k">return</span> <span class="nx">hash</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\+/g</span><span class="p">,</span> <span class="s2">&quot;-&quot;</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\//g</span><span class="p">,</span> <span class="s2">&quot;_&quot;</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\=+$/</span><span class="p">,</span> <span class="s2">&quot;&quot;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L1183" class="blob-line-num js-line-number" data-line-number="1183"></td>
        <td id="LC1183" class="blob-line-code js-file-line">  <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1184" class="blob-line-num js-line-number" data-line-number="1184"></td>
        <td id="LC1184" class="blob-line-code js-file-line"><span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L1185" class="blob-line-num js-line-number" data-line-number="1185"></td>
        <td id="LC1185" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1186" class="blob-line-num js-line-number" data-line-number="1186"></td>
        <td id="LC1186" class="blob-line-code js-file-line"><span class="p">},{}],</span><span class="mi">8</span><span class="o">:</span><span class="p">[</span><span class="kd">function</span><span class="p">(</span><span class="nx">require</span><span class="p">,</span><span class="nx">module</span><span class="p">,</span><span class="nx">exports</span><span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L1187" class="blob-line-num js-line-number" data-line-number="1187"></td>
        <td id="LC1187" class="blob-line-code js-file-line"><span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nb">document</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1188" class="blob-line-num js-line-number" data-line-number="1188"></td>
        <td id="LC1188" class="blob-line-code js-file-line">  <span class="k">return</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1189" class="blob-line-num js-line-number" data-line-number="1189"></td>
        <td id="LC1189" class="blob-line-code js-file-line">    <span class="nx">getAbsUrl</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">url</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1190" class="blob-line-num js-line-number" data-line-number="1190"></td>
        <td id="LC1190" class="blob-line-code js-file-line">      <span class="kd">var</span> <span class="nx">base_url</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1191" class="blob-line-num js-line-number" data-line-number="1191"></td>
        <td id="LC1191" class="blob-line-code js-file-line">      <span class="k">if</span> <span class="p">(</span><span class="nx">url</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/^.{2,5}:\/\//</span><span class="p">))</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1192" class="blob-line-num js-line-number" data-line-number="1192"></td>
        <td id="LC1192" class="blob-line-code js-file-line">        <span class="k">return</span> <span class="nx">url</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1193" class="blob-line-num js-line-number" data-line-number="1193"></td>
        <td id="LC1193" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1194" class="blob-line-num js-line-number" data-line-number="1194"></td>
        <td id="LC1194" class="blob-line-code js-file-line">      <span class="k">if</span> <span class="p">(</span><span class="nx">url</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">===</span> <span class="s2">&quot;/&quot;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1195" class="blob-line-num js-line-number" data-line-number="1195"></td>
        <td id="LC1195" class="blob-line-code js-file-line">        <span class="k">return</span> <span class="nb">document</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">protocol</span> <span class="o">+</span> <span class="s2">&quot;//&quot;</span> <span class="o">+</span> <span class="nb">document</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">host</span> <span class="o">+</span> <span class="nx">url</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1196" class="blob-line-num js-line-number" data-line-number="1196"></td>
        <td id="LC1196" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1197" class="blob-line-num js-line-number" data-line-number="1197"></td>
        <td id="LC1197" class="blob-line-code js-file-line">      <span class="nx">base_url</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">protocol</span> <span class="o">+</span> <span class="s2">&quot;//&quot;</span> <span class="o">+</span> <span class="nb">document</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">host</span> <span class="o">+</span> <span class="nb">document</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">pathname</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1198" class="blob-line-num js-line-number" data-line-number="1198"></td>
        <td id="LC1198" class="blob-line-code js-file-line">      <span class="k">if</span> <span class="p">(</span><span class="nx">base_url</span><span class="p">[</span><span class="nx">base_url</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">]</span> <span class="o">!==</span> <span class="s2">&quot;/&quot;</span> <span class="o">&amp;&amp;</span> <span class="nx">url</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">!==</span> <span class="s2">&quot;#&quot;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1199" class="blob-line-num js-line-number" data-line-number="1199"></td>
        <td id="LC1199" class="blob-line-code js-file-line">        <span class="k">return</span> <span class="nx">base_url</span> <span class="o">+</span> <span class="s2">&quot;/&quot;</span> <span class="o">+</span> <span class="nx">url</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1200" class="blob-line-num js-line-number" data-line-number="1200"></td>
        <td id="LC1200" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1201" class="blob-line-num js-line-number" data-line-number="1201"></td>
        <td id="LC1201" class="blob-line-code js-file-line">      <span class="k">return</span> <span class="nx">base_url</span> <span class="o">+</span> <span class="nx">url</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1202" class="blob-line-num js-line-number" data-line-number="1202"></td>
        <td id="LC1202" class="blob-line-code js-file-line">    <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L1203" class="blob-line-num js-line-number" data-line-number="1203"></td>
        <td id="LC1203" class="blob-line-code js-file-line">    <span class="nx">replaceParam</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">param</span><span class="p">,</span> <span class="nx">rep</span><span class="p">,</span> <span class="nx">rep2</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1204" class="blob-line-num js-line-number" data-line-number="1204"></td>
        <td id="LC1204" class="blob-line-code js-file-line">      <span class="nx">param</span> <span class="o">=</span> <span class="nx">param</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\{\{(.*?)\}\}/g</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">m</span><span class="p">,</span> <span class="nx">v</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1205" class="blob-line-num js-line-number" data-line-number="1205"></td>
        <td id="LC1205" class="blob-line-code js-file-line">        <span class="k">return</span> <span class="nx">rep</span><span class="p">[</span><span class="nx">v</span><span class="p">]</span> <span class="o">||</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1206" class="blob-line-num js-line-number" data-line-number="1206"></td>
        <td id="LC1206" class="blob-line-code js-file-line">      <span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L1207" class="blob-line-num js-line-number" data-line-number="1207"></td>
        <td id="LC1207" class="blob-line-code js-file-line">      <span class="k">if</span> <span class="p">(</span><span class="nx">rep2</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1208" class="blob-line-num js-line-number" data-line-number="1208"></td>
        <td id="LC1208" class="blob-line-code js-file-line">        <span class="nx">param</span> <span class="o">=</span> <span class="nx">param</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\{(.*?)\}/g</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">m</span><span class="p">,</span> <span class="nx">v</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L1209" class="blob-line-num js-line-number" data-line-number="1209"></td>
        <td id="LC1209" class="blob-line-code js-file-line">          <span class="k">return</span> <span class="nx">rep2</span><span class="p">[</span><span class="nx">v</span><span class="p">]</span> <span class="o">||</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1210" class="blob-line-num js-line-number" data-line-number="1210"></td>
        <td id="LC1210" class="blob-line-code js-file-line">        <span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L1211" class="blob-line-num js-line-number" data-line-number="1211"></td>
        <td id="LC1211" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1212" class="blob-line-num js-line-number" data-line-number="1212"></td>
        <td id="LC1212" class="blob-line-code js-file-line">      <span class="k">return</span> <span class="nx">param</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L1213" class="blob-line-num js-line-number" data-line-number="1213"></td>
        <td id="LC1213" class="blob-line-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L1214" class="blob-line-num js-line-number" data-line-number="1214"></td>
        <td id="LC1214" class="blob-line-code js-file-line">  <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L1215" class="blob-line-num js-line-number" data-line-number="1215"></td>
        <td id="LC1215" class="blob-line-code js-file-line"><span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L1216" class="blob-line-num js-line-number" data-line-number="1216"></td>
        <td id="LC1216" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1217" class="blob-line-num js-line-number" data-line-number="1217"></td>
        <td id="LC1217" class="blob-line-code js-file-line"><span class="p">},{}]},{},[</span><span class="mi">4</span><span class="p">])</span></td>
      </tr>
</table>

  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.09598s from github-fe134-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents js-suggester-field" placeholder=""></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-12d5fda141e78e513749dddbc56445fe172cbd9a.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-14e2a44e296739b8ec8d7763e88ed307a6d424e0.js" type="text/javascript"></script>
      
      
        <script async src="https://www.google-analytics.com/analytics.js"></script>
  </body>
</html>

