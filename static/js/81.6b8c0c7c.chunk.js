"use strict";(self.webpackChunkbokppr=self.webpackChunkbokppr||[]).push([[81],{81:(t,e,r)=>{r.r(e),r.d(e,{default:()=>N});var n=r(560),a=r(23),o=function(){if("undefined"!==typeof window){if(window.devicePixelRatio)return window.devicePixelRatio;var t=window.screen;if(t)return(t.deviceXDPI||1)/(t.logicalXDPI||1)}return 1}(),i=function(t){var e,r=[];for(t=[].concat(t);t.length;)"string"===typeof(e=t.pop())?r.unshift.apply(r,e.split("\n")):Array.isArray(e)?t.push.apply(t,e):(0,n.k)(t)||r.unshift(""+e);return r},l=function(t,e,r){var n,a=[].concat(e),o=a.length,i=t.font,l=0;for(t.font=r.string,n=0;n<o;++n)l=Math.max(t.measureText(a[n]).width,l);return t.font=i,{height:o*r.lineHeight,width:l}},s=function(t,e,r){return Math.max(t,Math.min(e,r))},u=function(t,e){var r,n,a,o,i=t.slice(),l=[];for(r=0,a=e.length;r<a;++r)o=e[r],-1===(n=i.indexOf(o))?l.push([o,1]):i.splice(n,1);for(r=0,a=i.length;r<a;++r)l.push([i[r],-1]);return l};function c(t,e){var r=e.x,n=e.y;if(null===r)return{x:0,y:-1};if(null===n)return{x:1,y:0};var a=t.x-r,o=t.y-n,i=Math.sqrt(a*a+o*o);return{x:i?a/i:0,y:i?o/i:-1}}var h=0,d=1,f=2,x=4,y=8;function v(t,e,r){var n=h;return t<r.left?n|=d:t>r.right&&(n|=f),e<r.top?n|=y:e>r.bottom&&(n|=x),n}function _(t,e){var r,n,a=e.anchor,o=t;return e.clamp&&(o=function(t,e){for(var r,n,a,o=t.x0,i=t.y0,l=t.x1,s=t.y1,u=v(o,i,e),c=v(l,s,e);u|c&&!(u&c);)(r=u||c)&y?(n=o+(l-o)*(e.top-i)/(s-i),a=e.top):r&x?(n=o+(l-o)*(e.bottom-i)/(s-i),a=e.bottom):r&f?(a=i+(s-i)*(e.right-o)/(l-o),n=e.right):r&d&&(a=i+(s-i)*(e.left-o)/(l-o),n=e.left),r===u?u=v(o=n,i=a,e):c=v(l=n,s=a,e);return{x0:o,x1:l,y0:i,y1:s}}(o,e.area)),"start"===a?(r=o.x0,n=o.y0):"end"===a?(r=o.x1,n=o.y1):(r=(o.x0+o.x1)/2,n=(o.y0+o.y1)/2),function(t,e,r,n,a){switch(a){case"center":r=n=0;break;case"bottom":r=0,n=1;break;case"right":r=1,n=0;break;case"left":r=-1,n=0;break;case"top":r=0,n=-1;break;case"start":r=-r,n=-n;break;case"end":break;default:a*=Math.PI/180,r=Math.cos(a),n=Math.sin(a)}return{x:t,y:e,vx:r,vy:n}}(r,n,t.vx,t.vy,e.align)}var b=function(t,e){var r=(t.startAngle+t.endAngle)/2,n=Math.cos(r),a=Math.sin(r),o=t.innerRadius,i=t.outerRadius;return _({x0:t.x+n*o,y0:t.y+a*o,x1:t.x+n*i,y1:t.y+a*i,vx:n,vy:a},e)},p=function(t,e){var r=c(t,e.origin),n=r.x*t.options.radius,a=r.y*t.options.radius;return _({x0:t.x-n,y0:t.y-a,x1:t.x+n,y1:t.y+a,vx:r.x,vy:r.y},e)},g=function(t,e){var r=c(t,e.origin),n=t.x,a=t.y,o=0,i=0;return t.horizontal?(n=Math.min(t.x,t.base),o=Math.abs(t.base-t.x)):(a=Math.min(t.y,t.base),i=Math.abs(t.base-t.y)),_({x0:n,y0:a+i,x1:n+o,y1:a,vx:r.x,vy:r.y},e)},m=function(t,e){var r=c(t,e.origin);return _({x0:t.x,y0:t.y,x1:t.x+(t.width||0),y1:t.y+(t.height||0),vx:r.x,vy:r.y},e)},w=function(t){return Math.round(t*o)/o};function k(t,e){var r=e.chart.getDatasetMeta(e.datasetIndex).vScale;if(!r)return null;if(void 0!==r.xCenter&&void 0!==r.yCenter)return{x:r.xCenter,y:r.yCenter};var n=r.getBasePixel();return t.horizontal?{x:n,y:null}:{x:null,y:n}}function M(t,e,r){var n=r.backgroundColor,a=r.borderColor,o=r.borderWidth;(n||a&&o)&&(t.beginPath(),function(t,e,r,n,a,o){var i=Math.PI/2;if(o){var l=Math.min(o,a/2,n/2),s=e+l,u=r+l,c=e+n-l,h=r+a-l;t.moveTo(e,u),s<c&&u<h?(t.arc(s,u,l,-Math.PI,-i),t.arc(c,u,l,-i,0),t.arc(c,h,l,0,i),t.arc(s,h,l,i,Math.PI)):s<c?(t.moveTo(s,r),t.arc(c,u,l,-i,i),t.arc(s,u,l,i,Math.PI+i)):u<h?(t.arc(s,u,l,-Math.PI,0),t.arc(s,h,l,0,Math.PI)):t.arc(s,u,l,-Math.PI,Math.PI),t.closePath(),t.moveTo(e,r)}else t.rect(e,r,n,a)}(t,w(e.x)+o/2,w(e.y)+o/2,w(e.w)-o,w(e.h)-o,r.borderRadius),t.closePath(),n&&(t.fillStyle=n,t.fill()),a&&o&&(t.strokeStyle=a,t.lineWidth=o,t.lineJoin="miter",t.stroke()))}function C(t,e,r){var n=t.shadowBlur,a=r.stroked,o=w(r.x),i=w(r.y),l=w(r.w);a&&t.strokeText(e,o,i,l),r.filled&&(n&&a&&(t.shadowBlur=0),t.fillText(e,o,i,l),n&&a&&(t.shadowBlur=n))}var S=function(t,e,r,n){var a=this;a._config=t,a._index=n,a._model=null,a._rects=null,a._ctx=e,a._el=r};(0,n.V)(S.prototype,{_modelize:function(t,e,r,o){var i,s=this,u=s._index,c=(0,n.O)((0,n.a)([r.font,{}],o,u)),h=(0,n.a)([r.color,a.ce.color],o,u);return{align:(0,n.a)([r.align,"center"],o,u),anchor:(0,n.a)([r.anchor,"center"],o,u),area:o.chart.chartArea,backgroundColor:(0,n.a)([r.backgroundColor,null],o,u),borderColor:(0,n.a)([r.borderColor,null],o,u),borderRadius:(0,n.a)([r.borderRadius,0],o,u),borderWidth:(0,n.a)([r.borderWidth,0],o,u),clamp:(0,n.a)([r.clamp,!1],o,u),clip:(0,n.a)([r.clip,!1],o,u),color:h,display:t,font:c,lines:e,offset:(0,n.a)([r.offset,4],o,u),opacity:(0,n.a)([r.opacity,1],o,u),origin:k(s._el,o),padding:(0,n.K)((0,n.a)([r.padding,4],o,u)),positioner:(i=s._el,i instanceof a.ArcElement?b:i instanceof a.PointElement?p:i instanceof a.BarElement?g:m),rotation:(0,n.a)([r.rotation,0],o,u)*(Math.PI/180),size:l(s._ctx,e,c),textAlign:(0,n.a)([r.textAlign,"start"],o,u),textShadowBlur:(0,n.a)([r.textShadowBlur,0],o,u),textShadowColor:(0,n.a)([r.textShadowColor,h],o,u),textStrokeColor:(0,n.a)([r.textStrokeColor,h],o,u),textStrokeWidth:(0,n.a)([r.textStrokeWidth,0],o,u)}},update:function(t){var e,r,a,o=this,l=null,s=null,u=o._index,c=o._config,h=(0,n.a)([c.display,!0],t,u);h&&(e=t.dataset.data[u],r=(0,n.v)((0,n.C)(c.formatter,[e,t]),e),(a=(0,n.k)(r)?[]:i(r)).length&&(s=function(t){var e=t.borderWidth||0,r=t.padding,n=t.size.height,a=t.size.width,o=-a/2,i=-n/2;return{frame:{x:o-r.left-e,y:i-r.top-e,w:a+r.width+2*e,h:n+r.height+2*e},text:{x:o,y:i,w:a,h:n}}}(l=o._modelize(h,a,c,t)))),o._model=l,o._rects=s},geometry:function(){return this._rects?this._rects.frame:{}},rotation:function(){return this._model?this._model.rotation:0},visible:function(){return this._model&&this._model.opacity},model:function(){return this._model},draw:function(t,e){var r,n=t.ctx,a=this._model,o=this._rects;this.visible()&&(n.save(),a.clip&&(r=a.area,n.beginPath(),n.rect(r.left,r.top,r.right-r.left,r.bottom-r.top),n.clip()),n.globalAlpha=s(0,a.opacity,1),n.translate(w(e.x),w(e.y)),n.rotate(a.rotation),M(n,o.frame,a),function(t,e,r,n){var a,o=n.textAlign,i=n.color,l=!!i,s=n.font,u=e.length,c=n.textStrokeColor,h=n.textStrokeWidth,d=c&&h;if(u&&(l||d))for(r=function(t,e,r){var n=r.lineHeight,a=t.w,o=t.x;return"center"===e?o+=a/2:"end"!==e&&"right"!==e||(o+=a),{h:n,w:a,x:o,y:t.y+n/2}}(r,o,s),t.font=s.string,t.textAlign=o,t.textBaseline="middle",t.shadowBlur=n.textShadowBlur,t.shadowColor=n.textShadowColor,l&&(t.fillStyle=i),d&&(t.lineJoin="round",t.lineWidth=h,t.strokeStyle=c),a=0,u=e.length;a<u;++a)C(t,e[a],{stroked:d,filled:l,w:r.w,x:r.x,y:r.y+r.h*a})}(n,a.lines,o.text,a),n.restore())}});var P=Number.MIN_SAFE_INTEGER||-9007199254740991,I=Number.MAX_SAFE_INTEGER||9007199254740991;function $(t,e,r){var n=Math.cos(r),a=Math.sin(r),o=e.x,i=e.y;return{x:o+n*(t.x-o)-a*(t.y-i),y:i+a*(t.x-o)+n*(t.y-i)}}function A(t,e){var r,n,a,o,i,l=I,s=P,u=e.origin;for(r=0;r<t.length;++r)a=(n=t[r]).x-u.x,o=n.y-u.y,i=e.vx*a+e.vy*o,l=Math.min(l,i),s=Math.max(s,i);return{min:l,max:s}}function E(t,e){var r=e.x-t.x,n=e.y-t.y,a=Math.sqrt(r*r+n*n);return{vx:(e.x-t.x)/a,vy:(e.y-t.y)/a,origin:t,ln:a}}var B=function(){this._rotation=0,this._rect={x:0,y:0,w:0,h:0}};function W(t,e,r){var n=e.positioner(t,e),a=n.vx,o=n.vy;if(!a&&!o)return{x:n.x,y:n.y};var i=r.w,l=r.h,s=e.rotation,u=Math.abs(i/2*Math.cos(s))+Math.abs(l/2*Math.sin(s)),c=Math.abs(i/2*Math.sin(s))+Math.abs(l/2*Math.cos(s)),h=1/Math.max(Math.abs(a),Math.abs(o));return u*=a*h,c*=o*h,u+=e.offset*a,c+=e.offset*o,{x:n.x+u,y:n.y+c}}(0,n.V)(B.prototype,{center:function(){var t=this._rect;return{x:t.x+t.w/2,y:t.y+t.h/2}},update:function(t,e,r){this._rotation=r,this._rect={x:e.x+t.x,y:e.y+t.y,w:e.w,h:e.h}},contains:function(t){var e=this,r=e._rect;return!((t=$(t,e.center(),-e._rotation)).x<r.x-1||t.y<r.y-1||t.x>r.x+r.w+2||t.y>r.y+r.h+2)},intersects:function(t){var e,r,n,a=this._points(),o=t._points(),i=[E(a[0],a[1]),E(a[0],a[3])];for(this._rotation!==t._rotation&&i.push(E(o[0],o[1]),E(o[0],o[3])),e=0;e<i.length;++e)if(r=A(a,i[e]),n=A(o,i[e]),r.max<n.min||n.max<r.min)return!1;return!0},_points:function(){var t=this,e=t._rect,r=t._rotation,n=t.center();return[$({x:e.x,y:e.y},n,r),$({x:e.x+e.w,y:e.y},n,r),$({x:e.x+e.w,y:e.y+e.h},n,r),$({x:e.x,y:e.y+e.h},n,r)]}});var R={prepare:function(t){var e,r,n,a,o,i=[];for(e=0,n=t.length;e<n;++e)for(r=0,a=t[e].length;r<a;++r)o=t[e][r],i.push(o),o.$layout={_box:new B,_hidable:!1,_visible:!0,_set:e,_idx:o._index};return i.sort((function(t,e){var r=t.$layout,n=e.$layout;return r._idx===n._idx?n._set-r._set:n._idx-r._idx})),this.update(i),i},update:function(t){var e,r,n,a,o,i=!1;for(e=0,r=t.length;e<r;++e)a=(n=t[e]).model(),(o=n.$layout)._hidable=a&&"auto"===a.display,o._visible=n.visible(),i|=o._hidable;i&&function(t){var e,r,n,a,o,i,l;for(e=0,r=t.length;e<r;++e)(a=(n=t[e]).$layout)._visible&&(l=new Proxy(n._el,{get:(t,e)=>t.getProps([e],!0)[e]}),o=n.geometry(),i=W(l,n.model(),o),a._box.update(i,o,n.rotation()));(function(t,e){var r,n,a,o;for(r=t.length-1;r>=0;--r)for(a=t[r].$layout,n=r-1;n>=0&&a._visible;--n)(o=t[n].$layout)._visible&&a._box.intersects(o._box)&&e(a,o)})(t,(function(t,e){var r=t._hidable,n=e._hidable;r&&n||n?e._visible=!1:r&&(t._visible=!1)}))}(t)},lookup:function(t,e){var r,n;for(r=t.length-1;r>=0;--r)if((n=t[r].$layout)&&n._visible&&n._box.contains(e))return t[r];return null},draw:function(t,e){var r,n,a,o,i,l;for(r=0,n=e.length;r<n;++r)(o=(a=e[r]).$layout)._visible&&(i=a.geometry(),l=W(a._el,a.model(),i),o._box.update(l,i,a.rotation()),a.draw(t,l))}},z="$datalabels",D="$default";function T(t,e,r,a){if(e){var o,i=r.$context,l=r.$groups;e[l._set]&&(o=e[l._set][l._key])&&!0===(0,n.C)(o,[i,a])&&(t[z]._dirty=!0,r.update(i))}}function V(t,e){var r,n,a=t[z],o=a._listeners;if(o.enter||o.leave){if("mousemove"===e.type)n=R.lookup(a._labels,e);else if("mouseout"!==e.type)return;r=a._hovered,a._hovered=n,function(t,e,r,n,a){var o,i;(r||n)&&(r?n?r!==n&&(i=o=!0):i=!0:o=!0,i&&T(t,e.leave,r,a),o&&T(t,e.enter,n,a))}(t,o,r,n,e)}}var N={id:"datalabels",defaults:{align:"center",anchor:"center",backgroundColor:null,borderColor:null,borderRadius:0,borderWidth:0,clamp:!1,clip:!1,color:void 0,display:!0,font:{family:void 0,lineHeight:1.2,size:void 0,style:void 0,weight:null},formatter:function(t){if((0,n.k)(t))return null;var e,r,a,o=t;if((0,n.i)(t))if((0,n.k)(t.label))if((0,n.k)(t.r))for(o="",a=0,r=(e=Object.keys(t)).length;a<r;++a)o+=(0!==a?", ":"")+e[a]+": "+t[e[a]];else o=t.r;else o=t.label;return""+o},labels:void 0,listeners:{},offset:4,opacity:1,padding:{top:4,right:4,bottom:4,left:4},rotation:0,textAlign:"start",textStrokeColor:void 0,textStrokeWidth:0,textShadowBlur:0,textShadowColor:void 0},beforeInit:function(t){t[z]={_actives:[]}},beforeUpdate:function(t){var e=t[z];e._listened=!1,e._listeners={},e._datasets=[],e._labels=[]},afterDatasetUpdate:function(t,e,r){var a,o,i,l,s,u,c,h,d=e.index,f=t[z],x=f._datasets[d]=[],y=t.isDatasetVisible(d),v=t.data.datasets[d],_=function(t,e){var r,a,o,i=t.datalabels,l=[];return!1===i?null:(!0===i&&(i={}),e=(0,n.V)({},[e,i]),a=e.labels||{},o=Object.keys(a),delete e.labels,o.length?o.forEach((function(t){a[t]&&l.push((0,n.V)({},[e,a[t],{_key:t}]))})):l.push(e),r=l.reduce((function(t,e){return(0,n.Q)(e.listeners||{},(function(r,n){t[n]=t[n]||{},t[n][e._key||D]=r})),delete e.listeners,t}),{}),{labels:l,listeners:r})}(v,r),b=e.meta.data||[],p=t.ctx;for(p.save(),a=0,i=b.length;a<i;++a)if((c=b[a])[z]=[],y&&c&&t.getDataVisibility(a)&&!c.skip)for(o=0,l=_.labels.length;o<l;++o)u=(s=_.labels[o])._key,(h=new S(s,p,c,a)).$groups={_set:d,_key:u||D},h.$context={active:!1,chart:t,dataIndex:a,dataset:v,datasetIndex:d},h.update(h.$context),c[z].push(h),x.push(h);p.restore(),(0,n.V)(f._listeners,_.listeners,{merger:function(t,r,n){r[t]=r[t]||{},r[t][e.index]=n[t],f._listened=!0}})},afterUpdate:function(t){t[z]._labels=R.prepare(t[z]._datasets)},afterDatasetsDraw:function(t){R.draw(t,t[z]._labels)},beforeEvent:function(t,e){if(t[z]._listened){var r=e.event;switch(r.type){case"mousemove":case"mouseout":V(t,r);break;case"click":!function(t,e){var r=t[z],n=r._listeners.click,a=n&&R.lookup(r._labels,e);a&&T(t,n,a,e)}(t,r)}}},afterEvent:function(t){var e,r,n,a,o,i,l,s=t[z],c=s._actives,h=s._actives=t.getActiveElements(),d=u(c,h);for(e=0,r=d.length;e<r;++e)if((o=d[e])[1])for(n=0,a=(l=o[0].element[z]||[]).length;n<a;++n)(i=l[n]).$context.active=1===o[1],i.update(i.$context);(s._dirty||d.length)&&(R.update(s._labels),t.render()),delete s._dirty}}}}]);
//# sourceMappingURL=81.6b8c0c7c.chunk.js.map