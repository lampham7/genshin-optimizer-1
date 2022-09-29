"use strict";(self.webpackChunkgenshin_optimizer=self.webpackChunkgenshin_optimizer||[]).push([[923],{74476:function(e,n,i){i.r(n),i.d(n,{default:function(){return F}});var s=i(29439),t=i(40117),o=i(62002),r=i(39504),a=i(61889),l=i(68870),c=i(20890),d=i(2199),x=i(24518),u=i(9585),p=i(94721),h=i(15021),Z=i(72791),f=i(3992),j=i(71310),m=i(30066),v=i(68198),y=i(37503),g=i(88034),w=i(29371),k=i(9321),C=i(6805),P=i(10157),b=i(44361),W=i(13746),T=i(947),R=i(2139),D=i(66218),I=i(31096),L=i(26138),B=i(73036),K=i(24711),N=i(69210),S=i(42320),z=i(74480),E=i(80184);function F(e){var n,i=e.weaponId,F=e.footer,G=void 0!==F&&F,M=e.onClose,_=e.extraButtons,q=(0,Z.useContext)(W.R).data,H=(0,Z.useContext)(I.t).database,J=(0,z.Z)(i),U=null!==J&&void 0!==J?J:{},A=U.key,O=void 0===A?"":A,Q=U.level,V=void 0===Q?0:Q,X=U.refinement,Y=void 0===X?1:X,$=U.ascension,ee=void 0===$?0:$,ne=U.lock,ie=U.location,se=void 0===ie?"":ie,te=U.id,oe=(0,S.Z)((function(){return D.Z.get(O)}),[O]),re=(0,Z.useCallback)((function(e){H.weapons.set(i,e)}),[i,H]),ae=(0,N.Z)(H),le=(0,S.Z)((function(){return se?T.Z.get(H.chars.LocationToCharacterKey(se),ae):void 0}),[H,ae,se]),ce=le&&le.weaponTypeKey,de=(0,Z.useCallback)((function(e){return te&&H.weapons.set(te,{location:e})}),[H,te]),xe=(0,Z.useCallback)((function(e){return e.weaponTypeKey===(null===oe||void 0===oe?void 0:oe.weaponType)}),[oe]),ue=(0,K.Z)(),pe=(0,s.Z)(ue,3),he=pe[0],Ze=pe[1],fe=pe[2],je=null===oe||void 0===oe?void 0:oe.getImg(ee);(0,Z.useEffect)((function(){if(oe&&re&&oe.key===(null===J||void 0===J?void 0:J.key)&&oe.rarity<=2&&(V>70||ee>4)){var e=(0,s.Z)(R.vF[0],2),n=e[0],i=e[1];re({level:n,ascension:i})}}),[oe,J,re,V,ee]);var me=(0,Z.useMemo)((function(){return oe&&J&&(0,B.mP)([oe.data,(0,B.v0)(J)])}),[oe,J]);return(0,E.jsx)(k.Z,{open:!!i,onClose:M,containerProps:{maxWidth:"md"},children:(0,E.jsxs)(j.Z,{children:[(0,E.jsx)(b.Z,{ascension:ee,show:he,onHide:fe,onSelect:function(e){return re({key:e})},weaponTypeFilter:ce}),(0,E.jsx)(r.Z,{children:oe&&me&&(0,E.jsxs)(a.ZP,{container:!0,spacing:1.5,children:[(0,E.jsx)(a.ZP,{item:!0,xs:12,sm:3,children:(0,E.jsxs)(a.ZP,{container:!0,spacing:1.5,children:[(0,E.jsx)(a.ZP,{item:!0,xs:6,sm:12,children:(0,E.jsx)(l.Z,{component:"img",src:je,className:"grad-".concat(oe.rarity,"star"),sx:{maxWidth:256,width:"100%",height:"auto",borderRadius:1}})}),(0,E.jsx)(a.ZP,{item:!0,xs:6,sm:12,children:(0,E.jsx)(c.Z,{children:(0,E.jsx)("small",{children:oe.description})})})]})}),(0,E.jsxs)(a.ZP,{item:!0,xs:12,sm:9,sx:{display:"flex",flexDirection:"column",gap:1},children:[(0,E.jsx)(l.Z,{display:"flex",gap:1,flexWrap:"wrap",justifyContent:"space-between",children:(0,E.jsxs)(d.Z,{children:[(0,E.jsx)(x.Z,{color:"info",onClick:Ze,children:null!==(n=null===oe||void 0===oe?void 0:oe.name)&&void 0!==n?n:"Select a Weapon"}),(null===oe||void 0===oe?void 0:oe.hasRefinement)&&(0,E.jsx)(C.Z,{refinement:Y,setRefinement:function(e){return re({refinement:e})}}),_]})}),(0,E.jsxs)(l.Z,{display:"flex",gap:1,flexWrap:"wrap",justifyContent:"space-between",children:[oe&&(0,E.jsx)(w.Z,{level:V,ascension:ee,setBoth:re,useLow:!oe.hasRefinement}),(0,E.jsx)(x.Z,{color:"error",onClick:function(){return te&&H.weapons.set(te,{lock:!ne})},startIcon:ne?(0,E.jsx)(t.Z,{}):(0,E.jsx)(o.Z,{}),children:ne?"Locked":"Unlocked"})]}),(0,E.jsx)(c.Z,{children:(0,E.jsx)(P.q,{stars:oe.rarity})}),(0,E.jsx)(c.Z,{variant:"subtitle1",children:(0,E.jsx)("strong",{children:oe.passiveName})}),(0,E.jsx)(c.Z,{gutterBottom:!0,children:oe.passiveName&&oe.passiveDescription(me.get(L.ri.weapon.refineIndex).value)}),(0,E.jsxs)(l.Z,{display:"flex",flexDirection:"column",gap:1,children:[(0,E.jsxs)(f.Z,{children:[(0,E.jsx)(u.Z,{title:"Main Stats",titleTypographyProps:{variant:"subtitle2"}}),(0,E.jsx)(p.Z,{}),(0,E.jsx)(g.lD,{children:[L.ri.weapon.main,L.ri.weapon.sub,L.ri.weapon.sub2].map((function(e,n){var i=me.get(e);return i.isEmpty||!i.value?null:(0,E.jsx)(g.JW,{node:i,component:h.ZP},i.info.key)}))})]}),q&&oe.document&&(0,E.jsx)(y.Z,{sections:oe.document})]})]})]})}),G&&te&&(0,E.jsx)(r.Z,{sx:{py:1},children:(0,E.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,E.jsx)(a.ZP,{item:!0,flexGrow:1,children:(0,E.jsx)(m.W,{location:se,setLocation:de,filter:xe})}),(0,E.jsx)(a.ZP,{item:!0,flexGrow:2}),!!M&&(0,E.jsx)(a.ZP,{item:!0,children:(0,E.jsx)(v.Z,{sx:{height:"100%"},large:!0,onClick:M})})]})})]})})}}}]);
//# sourceMappingURL=923.37e9f8ff.chunk.js.map