"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16],{19:function(e,t,n){n.d(t,{EK:function(){return P},ET:function(){return sn},JU:function(){return iI},PL:function(){return i7},ad:function(){return iA},cf:function(){return sr},hJ:function(){return iT},pl:function(){return se},r7:function(){return st}});var r,i,s,a,o=n(5816),l=n(8463),u=n(3333),h=n(4444),c=n(6640);n(3454);var d=n(8764).lW;let f="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}m.UNAUTHENTICATED=new m(null),m.GOOGLE_CREDENTIALS=new m("google-credentials-uid"),m.FIRST_PARTY=new m("first-party-uid"),m.MOCK_USER=new m("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let g="10.11.1",p=new u.Yd("@firebase/firestore");function y(){return p.logLevel}function w(e,...t){if(p.logLevel<=u.in.DEBUG){let n=t.map(E);p.debug(`Firestore (${g}): ${e}`,...n)}}function v(e,...t){if(p.logLevel<=u.in.ERROR){let n=t.map(E);p.error(`Firestore (${g}): ${e}`,...n)}}function _(e,...t){if(p.logLevel<=u.in.WARN){let n=t.map(E);p.warn(`Firestore (${g}): ${e}`,...n)}}function E(e){if("string"==typeof e)return e;try{/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e="Unexpected state"){let t=`FIRESTORE (${g}) INTERNAL ASSERTION FAILED: `+e;throw v(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class C extends h.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class A{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(m.UNAUTHENTICATED))}shutdown(){}}class N{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class D{constructor(e){this.t=e,this.currentUser=m.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i,r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),i=new S;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new S,e.enqueueRetryable(()=>r(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},a=e=>{w("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(w("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new S)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(w("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||T(),new k(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||T(),new m(e)}}class b{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=m.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class x{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new b(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(m.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class R{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class L{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){let n=e=>{null!=e.error&&w("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.R;return this.R=e.token,w("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let r=e=>{w("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?r(e):w("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||T(),this.R=e.token,new R(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";for(;n.length<20;){let r=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function F(e,t){return e<t?-1:e>t?1:0}function V(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new C(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new C(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return P.fromMillis(Date.now())}static fromDate(e){return P.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new P(t,Math.floor(1e6*(e-1e3*t)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?F(this.nanoseconds,e.nanoseconds):F(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.timestamp=e}static fromTimestamp(e){return new O(e)}static min(){return new O(new P(0,0))}static max(){return new O(new P(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e,t,n){void 0===t?t=0:t>e.length&&T(),void 0===n?n=e.length-t:n>e.length-t&&T(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===U.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof U?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let i=e.get(r),s=t.get(r);if(i<s)return -1;if(i>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class q extends U{construct(e,t,n){return new q(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new C(I.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new q(t)}static emptyPath(){return new q([])}}let B=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class z extends U{construct(e,t,n){return new z(e,t,n)}static isValidIdentifier(e){return B.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),z.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new z(["__name__"])}static fromServerFormat(e){let t=[],n="",r=0,i=()=>{if(0===n.length)throw new C(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},s=!1;for(;r<e.length;){let a=e[r];if("\\"===a){if(r+1===e.length)throw new C(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let o=e[r+1];if("\\"!==o&&"."!==o&&"`"!==o)throw new C(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=o,r+=2}else"`"===a?(s=!s,r++):"."!==a||s?(n+=a,r++):(i(),r++)}if(i(),s)throw new C(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new z(t)}static emptyPath(){return new z([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(q.fromString(e))}static fromName(e){return new $(q.fromString(e).popFirst(5))}static empty(){return new $(q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===q.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return q.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new q(e.slice()))}}class K{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new K(O.min(),$.empty(),-1)}static max(){return new K(O.max(),$.empty(),-1)}}class G{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(e){if(e.code!==I.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;w("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&T(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new j((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof j?t:j.resolve(t)}catch(n){return j.reject(n)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):j.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):j.reject(t)}static resolve(e){return new j((t,n)=>{t(e)})}static reject(e){return new j((t,n)=>{n(e)})}static waitFor(e){return new j((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=j.resolve(!1);for(let n of e)t=t.next(e=>e?j.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new j((n,r)=>{let i=e.length,s=Array(i),a=0;for(let o=0;o<i;o++){let l=o;t(e[l]).next(e=>{s[l]=e,++a===i&&n(s)},e=>r(e))}})}static doWhile(e,t){return new j((n,r)=>{let i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}function H(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ie(e),this.se=e=>t.writeSequenceNumber(e))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.se&&this.se(e),e}}function Y(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function J(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Z(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}W.oe=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e,t){this.comparator=e,this.root=t||en.EMPTY}insert(e,t){return new ee(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,en.BLACK,null,null))}remove(e){return new ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,en.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new et(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new et(this.root,e,this.comparator,!1)}getReverseIterator(){return new et(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new et(this.root,e,this.comparator,!0)}}class et{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class en{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:en.RED,this.left=null!=r?r:en.EMPTY,this.right=null!=i?i:en.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new en(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return en.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,r=this;if(0>t(e,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return en.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,en.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,en.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw T();let e=this.left.check();if(e!==this.right.check())throw T();return e+(this.isRed()?0:1)}}en.EMPTY=null,en.RED=!0,en.BLACK=!1,en.EMPTY=new class{constructor(){this.size=0}get key(){throw T()}get value(){throw T()}get color(){throw T()}get left(){throw T()}get right(){throw T()}copy(e,t,n,r,i){return this}insert(e,t,n){return new en(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e){this.comparator=e,this.data=new ee(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ei(this.data.getIterator())}getIteratorFrom(e){return new ei(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof er)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let r=t.getNext().key,i=n.getNext().key;if(0!==this.comparator(r,i))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new er(this.comparator);return t.data=e,t}}class ei{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this.fields=e,e.sort(z.comparator)}static empty(){return new es([])}unionWith(e){let t=new er(z.comparator);for(let n of this.fields)t=t.add(n);for(let r of e)t=t.add(r);return new es(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return V(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(e){try{return atob(e)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new ea("Invalid base64 string: "+t):t}}(e);return new eo(t)}static fromUint8Array(e){let t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new eo(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return F(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}eo.EMPTY_BYTE_STRING=new eo("");let el=RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function eu(e){if(e||T(),"string"==typeof e){let t=0,n=el.exec(e);if(n||T(),n[1]){let r=n[1];t=Number(r=(r+"000000000").substr(0,9))}let i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:eh(e.seconds),nanos:eh(e.nanos)}}function eh(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function ec(e){return"string"==typeof e?eo.fromBase64String(e):eo.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ef(e){let t=e.mapValue.fields.__previous_value__;return ed(t)?ef(t):t}function em(e){let t=eu(e.mapValue.fields.__local_write_time__.timestampValue);return new P(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e,t,n,r,i,s,a,o,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l}}class ep{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ep("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof ep&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ey={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ew(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ed(e)?4:eb(e)?9007199254740991:10:T()}function ev(e,t){if(e===t)return!0;let n=ew(e);if(n!==ew(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return em(e).isEqual(em(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=eu(e.timestampValue),r=eu(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return ec(e.bytesValue).isEqual(ec(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return eh(e.geoPointValue.latitude)===eh(t.geoPointValue.latitude)&&eh(e.geoPointValue.longitude)===eh(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return eh(e.integerValue)===eh(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=eh(e.doubleValue),r=eh(t.doubleValue);return n===r?Y(n)===Y(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return V(e.arrayValue.values||[],t.arrayValue.values||[],ev);case 10:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(X(n)!==X(r))return!1;for(let i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!ev(n[i],r[i])))return!1;return!0}(e,t);default:return T()}}function e_(e,t){return void 0!==(e.values||[]).find(e=>ev(e,t))}function eE(e,t){if(e===t)return 0;let n=ew(e),r=ew(t);if(n!==r)return F(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return F(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=eh(e.integerValue||e.doubleValue),r=eh(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return eT(e.timestampValue,t.timestampValue);case 4:return eT(em(e),em(t));case 5:return F(e.stringValue,t.stringValue);case 6:return function(e,t){let n=ec(e),r=ec(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){let s=F(n[i],r[i]);if(0!==s)return s}return F(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=F(eh(e.latitude),eh(t.latitude));return 0!==n?n:F(eh(e.longitude),eh(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){let s=eE(n[i],r[i]);if(s)return s}return F(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===ey.mapValue&&t===ey.mapValue)return 0;if(e===ey.mapValue)return 1;if(t===ey.mapValue)return -1;let n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let a=0;a<r.length&&a<s.length;++a){let o=F(r[a],s[a]);if(0!==o)return o;let l=eE(n[r[a]],i[s[a]]);if(0!==l)return l}return F(r.length,s.length)}(e.mapValue,t.mapValue);default:throw T()}}function eT(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return F(e,t);let n=eu(e),r=eu(t),i=F(n.seconds,r.seconds);return 0!==i?i:F(n.nanos,r.nanos)}function eI(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=eu(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?ec(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,$.fromName(t).toString()):"geoPointValue"in e?(n=e.geoPointValue,`geo(${n.latitude},${n.longitude})`):"arrayValue"in e?function(e){let t="[",n=!0;for(let r of e.values||[])n?n=!1:t+=",",t+=eI(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",r=!0;for(let i of t)r?r=!1:n+=",",n+=`${i}:${eI(e.fields[i])}`;return n+"}"}(e.mapValue):T()}function eC(e){return!!e&&"integerValue"in e}function eS(e){return!!e&&"arrayValue"in e}function ek(e){return!!e&&"nullValue"in e}function eA(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function eN(e){return!!e&&"mapValue"in e}function eD(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return J(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=eD(n)),t}if(e.arrayValue){let n={arrayValue:{values:[]}};for(let r=0;r<(e.arrayValue.values||[]).length;++r)n.arrayValue.values[r]=eD(e.arrayValue.values[r]);return n}return Object.assign({},e)}function eb(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{constructor(e){this.value=e}static empty(){return new ex({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!eN(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=eD(t)}setAll(e){let t=z.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let s=this.getFieldsMap(t);this.applyChanges(s,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=eD(e):r.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){let t=this.field(e.popLast());eN(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ev(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];eN(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){for(let r of(J(t,(t,n)=>e[t]=n),n))delete e[r]}clone(){return new ex(eD(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e,t,n,r,i,s,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=a}static newInvalidDocument(e){return new eR(e,0,O.min(),O.min(),O.min(),ex.empty(),0)}static newFoundDocument(e,t,n,r){return new eR(e,1,t,O.min(),n,r,0)}static newNoDocument(e,t){return new eR(e,2,t,O.min(),O.min(),ex.empty(),0)}static newUnknownDocument(e,t){return new eR(e,3,t,O.min(),O.min(),ex.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(O.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ex.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ex.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=O.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof eR&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new eR(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eL{constructor(e,t){this.position=e,this.inclusive=t}}function eM(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){let s=t[i],a=e.position[i];if(r=s.field.isKeyField()?$.comparator($.fromName(a.referenceValue),n.key):eE(a,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function eF(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ev(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eV{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{}class eO extends eP{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new ez(e,t,n):"array-contains"===t?new eQ(e,n):"in"===t?new ej(e,n):"not-in"===t?new eH(e,n):"array-contains-any"===t?new eW(e,n):new eO(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new e$(e,n):new eK(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(eE(t,this.value)):null!==t&&ew(this.value)===ew(t)&&this.matchesComparison(eE(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return T()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class eU extends eP{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new eU(e,t)}matches(e){return eq(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function eq(e){return"and"===e.op}function eB(e){for(let t of e.filters)if(t instanceof eU)return!1;return!0}class ez extends eO{constructor(e,t,n){super(e,t,n),this.key=$.fromName(n.referenceValue)}matches(e){let t=$.comparator(e.key,this.key);return this.matchesComparison(t)}}class e$ extends eO{constructor(e,t){super(e,"in",t),this.keys=eG("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class eK extends eO{constructor(e,t){super(e,"not-in",t),this.keys=eG("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function eG(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>$.fromName(e.referenceValue))}class eQ extends eO{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return eS(t)&&e_(t.arrayValue,this.value)}}class ej extends eO{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&e_(this.value.arrayValue,t)}}class eH extends eO{constructor(e,t){super(e,"not-in",t)}matches(e){if(e_(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!e_(this.value.arrayValue,t)}}class eW extends eO{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!eS(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>e_(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eY{constructor(e,t=null,n=[],r=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=a,this.ue=null}}function eX(e,t=null,n=[],r=[],i=null,s=null,a=null){return new eY(e,t,n,r,i,s,a)}function eJ(e){let t=e;if(null===t.ue){let n=t.path.canonicalString();null!==t.collectionGroup&&(n+="|cg:"+t.collectionGroup),n+="|f:"+t.filters.map(e=>(function e(t){if(t instanceof eO)return t.field.canonicalString()+t.op.toString()+eI(t.value);if(eB(t)&&eq(t))return t.filters.map(t=>e(t)).join(",");{let n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}})(e)).join(",")+"|ob:"+t.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==t.limit||(n+="|l:"+t.limit),t.startAt&&(n+="|lb:"+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>eI(e)).join(",")),t.endAt&&(n+="|ub:"+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>eI(e)).join(",")),t.ue=n}return t.ue}function eZ(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++){var r,i;if(r=e.orderBy[n],i=t.orderBy[n],!(r.dir===i.dir&&r.field.isEqual(i.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let s=0;s<e.filters.length;s++)if(!function e(t,n){return t instanceof eO?n instanceof eO&&t.op===n.op&&t.field.isEqual(n.field)&&ev(t.value,n.value):t instanceof eU?n instanceof eU&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce((t,r,i)=>t&&e(r,n.filters[i]),!0):void T()}(e.filters[s],t.filters[s]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!eF(e.startAt,t.startAt)&&eF(e.endAt,t.endAt)}function e0(e){return $.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e,t=null,n=[],r=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function e2(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function e4(e){let t=e;if(null===t.ce){let n;t.ce=[];let r=new Set;for(let i of t.explicitOrderBy)t.ce.push(i),r.add(i.field.canonicalString());let s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc",a=(n=new er(z.comparator),t.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(n=n.add(e.field))})}),n);a.forEach(e=>{r.has(e.canonicalString())||e.isKeyField()||t.ce.push(new eV(e,s))}),r.has(z.keyField().canonicalString())||t.ce.push(new eV(z.keyField(),s))}return t.ce}function e3(e){let t=e;return t.le||(t.le=function(e,t){if("F"===e.limitType)return eX(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new eV(e.field,t)});let n=e.endAt?new eL(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new eL(e.startAt.position,e.startAt.inclusive):null;return eX(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(t,e4(e))),t.le}function e9(e,t,n){return new e1(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function e8(e,t){return eZ(e3(e),e3(t))&&e.limitType===t.limitType}function e6(e){return`${eJ(e3(e))}|lt:${e.limitType}`}function e5(e){var t;let n;return`Query(target=${n=(t=e3(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof eO?`${t.field.canonicalString()} ${t.op} ${eI(t.value)}`:t instanceof eU?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(n+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>eI(e)).join(",")),t.endAt&&(n+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>eI(e)).join(",")),`Target(${n})`}; limitType=${e.limitType})`}function e7(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):$.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of e4(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let r=eM(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,e4(e),t))&&(!e.endAt||!!function(e,t,n){let r=eM(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,e4(e),t))}function te(e){return(t,n)=>{let r=!1;for(let i of e4(e)){let s=function(e,t,n){let r=e.field.isKeyField()?$.comparator(t.key,n.key):function(e,t,n){let r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?eE(r,i):T()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return -1*r;default:return T()}}(i,t,n);if(0!==s)return s;r=r||i.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[r,i]of n)if(this.equalsFn(r,e))return i}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){J(this.inner,(t,n)=>{for(let[r,i]of n)e(r,i)})}isEmpty(){return Z(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tn=new ee($.comparator),tr=new ee($.comparator);function ti(...e){let t=tr;for(let n of e)t=t.insert(n.key,n);return t}function ts(e){let t=tr;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function ta(){return new tt(e=>e.toString(),(e,t)=>e.isEqual(t))}let to=new ee($.comparator),tl=new er($.comparator);function tu(...e){let t=tl;for(let n of e)t=t.add(n);return t}let th=new er(F);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Y(t)?"-0":t}}function td(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(){this._=void 0}}function tm(e,t){return e instanceof t_?eC(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class tg extends tf{}class tp extends tf{constructor(e){super(),this.elements=e}}function ty(e,t){let n=tT(t);for(let r of e.elements)n.some(e=>ev(e,r))||n.push(r);return{arrayValue:{values:n}}}class tw extends tf{constructor(e){super(),this.elements=e}}function tv(e,t){let n=tT(t);for(let r of e.elements)n=n.filter(e=>!ev(e,r));return{arrayValue:{values:n}}}class t_ extends tf{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function tE(e){return eh(e.integerValue||e.doubleValue)}function tT(e){return eS(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class tI{constructor(e,t){this.version=e,this.transformResults=t}}class tC{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new tC}static exists(e){return new tC(void 0,e)}static updateTime(e){return new tC(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function tS(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class tk{}function tA(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new tF(e.key,tC.none()):new tb(e.key,e.data,tC.none());{let n=e.data,r=ex.empty(),i=new er(z.comparator);for(let s of t.fields)if(!i.has(s)){let a=n.field(s);null===a&&s.length>1&&(s=s.popLast(),a=n.field(s)),null===a?r.delete(s):r.set(s,a),i=i.add(s)}return new tx(e.key,r,new es(i.toArray()),tC.none())}}function tN(e,t,n,r){return e instanceof tb?function(e,t,n,r){if(!tS(e.precondition,t))return n;let i=e.value.clone(),s=tM(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof tx?function(e,t,n,r){if(!tS(e.precondition,t))return n;let i=tM(e.fieldTransforms,r,t),s=t.data;return(s.setAll(tR(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):tS(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function tD(e,t){var n,r;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||!(!n||!r)&&V(n,r,(e,t)=>{var n,r;return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof tp&&r instanceof tp||n instanceof tw&&r instanceof tw?V(n.elements,r.elements,ev):n instanceof t_&&r instanceof t_?ev(n.Pe,r.Pe):n instanceof tg&&r instanceof tg)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class tb extends tk{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class tx extends tk{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function tR(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}}),t}function tL(e,t,n){var r;let i=new Map;e.length===n.length||T();for(let s=0;s<n.length;s++){let a=e[s],o=a.transform,l=t.data.field(a.field);i.set(a.field,(r=n[s],o instanceof tp?ty(o,l):o instanceof tw?tv(o,l):r))}return i}function tM(e,t,n){let r=new Map;for(let i of e){let s=i.transform,a=n.data.field(i.field);r.set(i.field,s instanceof tg?function(e,t){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&ed(t)&&(t=ef(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(t,a):s instanceof tp?ty(s,a):s instanceof tw?tv(s,a):function(e,t){let n=tm(e,t),r=tE(n)+tE(e.Pe);return eC(n)&&eC(e.Pe)?td(r):tc(e.serializer,r)}(s,a))}return r}class tF extends tk{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tV extends tk{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){let i=this.mutations[r];if(i.key.isEqual(e.key)){var s;s=n[r],i instanceof tb?function(e,t,n){let r=e.value.clone(),i=tL(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(i,e,s):i instanceof tx?function(e,t,n){if(!tS(e.precondition,t))return void t.convertToUnknownDocument(n.version);let r=tL(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(tR(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(i,e,s):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,s)}}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=tN(n,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=tN(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=ta();return this.mutations.forEach(r=>{let i=e.get(r.key),s=i.overlayedDocument,a=this.applyToLocalView(s,i.mutatedFields);a=t.has(r.key)?null:a;let o=tA(s,a);null!==o&&n.set(r.key,o),s.isValidDocument()||s.convertToNoDocument(O.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),tu())}isEqual(e){return this.batchId===e.batchId&&V(this.mutations,e.mutations,(e,t)=>tD(e,t))&&V(this.baseMutations,e.baseMutations,(e,t)=>tD(e,t))}}class tO{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){e.mutations.length===n.length||T();let r=to,i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new tO(e,t,n,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tU{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tq{constructor(e,t){this.count=e,this.unchangedNames=t}}function tB(e){if(void 0===e)return v("GRPC error has no .code"),I.UNKNOWN;switch(e){case r.OK:return I.OK;case r.CANCELLED:return I.CANCELLED;case r.UNKNOWN:return I.UNKNOWN;case r.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case r.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case r.INTERNAL:return I.INTERNAL;case r.UNAVAILABLE:return I.UNAVAILABLE;case r.UNAUTHENTICATED:return I.UNAUTHENTICATED;case r.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case r.NOT_FOUND:return I.NOT_FOUND;case r.ALREADY_EXISTS:return I.ALREADY_EXISTS;case r.PERMISSION_DENIED:return I.PERMISSION_DENIED;case r.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case r.ABORTED:return I.ABORTED;case r.OUT_OF_RANGE:return I.OUT_OF_RANGE;case r.UNIMPLEMENTED:return I.UNIMPLEMENTED;case r.DATA_LOSS:return I.DATA_LOSS;default:return T()}}(i=r||(r={}))[i.OK=0]="OK",i[i.CANCELLED=1]="CANCELLED",i[i.UNKNOWN=2]="UNKNOWN",i[i.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",i[i.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",i[i.NOT_FOUND=5]="NOT_FOUND",i[i.ALREADY_EXISTS=6]="ALREADY_EXISTS",i[i.PERMISSION_DENIED=7]="PERMISSION_DENIED",i[i.UNAUTHENTICATED=16]="UNAUTHENTICATED",i[i.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",i[i.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",i[i.ABORTED=10]="ABORTED",i[i.OUT_OF_RANGE=11]="OUT_OF_RANGE",i[i.UNIMPLEMENTED=12]="UNIMPLEMENTED",i[i.INTERNAL=13]="INTERNAL",i[i.UNAVAILABLE=14]="UNAVAILABLE",i[i.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tz=new c.z8([4294967295,4294967295],0);function t$(e){let t=(new TextEncoder).encode(e),n=new c.V8;return n.update(t),new Uint8Array(n.digest())}function tK(e){let t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new c.z8([n,r],0),new c.z8([i,s],0)]}class tG{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new tQ(`Invalid padding: ${t}`);if(n<0||e.length>0&&0===this.hashCount)throw new tQ(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new tQ(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=c.z8.fromNumber(this.Ie)}Ee(e,t,n){let r=e.add(t.multiply(c.z8.fromNumber(n)));return 1===r.compare(tz)&&(r=new c.z8([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Ie)return!1;let t=t$(e),[n,r]=tK(t);for(let i=0;i<this.hashCount;i++){let s=this.Ee(n,r,i);if(!this.de(s))return!1}return!0}static create(e,t,n){let r=new Uint8Array(Math.ceil(e/8)),i=new tG(r,e%8==0?0:8-e%8,t);return n.forEach(e=>i.insert(e)),i}insert(e){if(0===this.Ie)return;let t=t$(e),[n,r]=tK(t);for(let i=0;i<this.hashCount;i++){let s=this.Ee(n,r,i);this.Ae(s)}}Ae(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}}class tQ extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tj{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){let r=new Map;return r.set(e,tH.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new tj(O.min(),r,new ee(F),tn,tu())}}class tH{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new tH(n,t,tu(),tu(),tu())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tW{constructor(e,t,n,r){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=r}}class tY{constructor(e,t){this.targetId=e,this.me=t}}class tX{constructor(e,t,n=eo.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class tJ{constructor(){this.fe=0,this.ge=t1(),this.pe=eo.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return 0!==this.fe}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=tu(),t=tu(),n=tu();return this.ge.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:T()}}),new tH(this.pe,this.ye,e,t,n)}ve(){this.we=!1,this.ge=t1()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,this.fe>=0||T()}Ne(){this.we=!0,this.ye=!0}}class tZ{constructor(e){this.Le=e,this.Be=new Map,this.ke=tn,this.qe=t0(),this.Qe=new ee(F)}Ke(e){for(let t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(let n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{let n=this.Ge(t);switch(e.state){case 0:this.ze(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.ve(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),n.De(e.resumeToken));break;default:T()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((e,n)=>{this.ze(n)&&t(n)})}He(e){let t=e.targetId,n=e.me.count,r=this.Je(t);if(r){let i=r.target;if(e0(i)){if(0===n){let s=new $(i.path);this.Ue(t,s,eR.newNoDocument(s,O.min()))}else 1===n||T()}else{let a=this.Ye(t);if(a!==n){let o=this.Ze(e),l=o?this.Xe(o,e,a):1;0!==l&&(this.je(t),this.Qe=this.Qe.insert(t,2===l?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}Ze(e){let t,n;let r=e.me.unchangedNames;if(!r||!r.bits)return null;let{bits:{bitmap:i="",padding:s=0},hashCount:a=0}=r;try{t=ec(i).toUint8Array()}catch(o){if(o instanceof ea)return _("Decoding the base64 bloom filter in existence filter failed ("+o.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw o}try{n=new tG(t,s,a)}catch(l){return _(l instanceof tQ?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return 0===n.Ie?null:n}Xe(e,t,n){return t.me.count===n-this.nt(e,t.targetId)?0:2}nt(e,t){let n=this.Le.getRemoteKeysForTarget(t),r=0;return n.forEach(n=>{let i=this.Le.tt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.Ue(t,n,null),r++)}),r}rt(e){let t=new Map;this.Be.forEach((n,r)=>{let i=this.Je(r);if(i){if(n.current&&e0(i.target)){let s=new $(i.target.path);null!==this.ke.get(s)||this.it(r,s)||this.Ue(r,s,eR.newNoDocument(s,e))}n.be&&(t.set(r,n.Ce()),n.ve())}});let n=tu();this.qe.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{let t=this.Je(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.ke.forEach((t,n)=>n.setReadTime(e));let r=new tj(e,t,this.Qe,this.ke,n);return this.ke=tn,this.qe=t0(),this.Qe=new ee(F),r}$e(e,t){if(!this.ze(e))return;let n=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,n){if(!this.ze(e))return;let r=this.Ge(e);this.it(e,t)?r.Fe(t,1):r.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ye(e){let t=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new tJ,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new er(F),this.qe=this.qe.insert(e,t)),t}ze(e){let t=null!==this.Je(e);return t||w("WatchChangeAggregator","Detected inactive target",e),t}Je(e){let t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new tJ),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function t0(){return new ee($.comparator)}function t1(){return new ee($.comparator)}let t2={asc:"ASCENDING",desc:"DESCENDING"},t4={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},t3={and:"AND",or:"OR"};class t9{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function t8(e,t){return e.useProto3Json||null==t?t:{value:t}}function t6(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function t5(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function t7(e){return e||T(),O.fromTimestamp(function(e){let t=eu(e);return new P(t.seconds,t.nanos)}(e))}function ne(e,t){return nt(e,t).canonicalString()}function nt(e,t){let n=new q(["projects",e.projectId,"databases",e.database]).child("documents");return void 0===t?n:n.child(t)}function nn(e){let t=q.fromString(e);return nc(t)||T(),t}function nr(e,t){return ne(e.databaseId,t.path)}function ni(e,t){let n=nn(t);if(n.get(1)!==e.databaseId.projectId)throw new C(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new C(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new $(no(n))}function ns(e,t){return ne(e.databaseId,t)}function na(e){return new q(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function no(e){return e.length>4&&"documents"===e.get(4)||T(),e.popFirst(5)}function nl(e,t,n){return{name:nr(e,t),fields:n.value.mapValue.fields}}function nu(e){return{fieldPath:e.canonicalString()}}function nh(e){return z.fromServerFormat(e.fieldPath)}function nc(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e,t,n,r,i=O.min(),s=O.min(),a=eo.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o}withSequenceNumber(e){return new nd(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new nd(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new nd(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new nd(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e){this.ut=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(){}ht(e,t){this.Pt(e,t),t.It()}Pt(e,t){if("nullValue"in e)this.Tt(t,5);else if("booleanValue"in e)this.Tt(t,10),t.Et(e.booleanValue?1:0);else if("integerValue"in e)this.Tt(t,15),t.Et(eh(e.integerValue));else if("doubleValue"in e){let n=eh(e.doubleValue);isNaN(n)?this.Tt(t,13):(this.Tt(t,15),Y(n)?t.Et(0):t.Et(n))}else if("timestampValue"in e){let r=e.timestampValue;this.Tt(t,20),"string"==typeof r&&(r=eu(r)),t.dt(`${r.seconds||""}`),t.Et(r.nanos||0)}else if("stringValue"in e)this.At(e.stringValue,t),this.Rt(t);else if("bytesValue"in e)this.Tt(t,30),t.Vt(ec(e.bytesValue)),this.Rt(t);else if("referenceValue"in e)this.ft(e.referenceValue,t);else if("geoPointValue"in e){let i=e.geoPointValue;this.Tt(t,45),t.Et(i.latitude||0),t.Et(i.longitude||0)}else"mapValue"in e?eb(e)?this.Tt(t,Number.MAX_SAFE_INTEGER):(this.gt(e.mapValue,t),this.Rt(t)):"arrayValue"in e?(this.yt(e.arrayValue,t),this.Rt(t)):T()}At(e,t){this.Tt(t,25),this.wt(e,t)}wt(e,t){t.dt(e)}gt(e,t){let n=e.fields||{};for(let r of(this.Tt(t,55),Object.keys(n)))this.At(r,t),this.Pt(n[r],t)}yt(e,t){let n=e.values||[];for(let r of(this.Tt(t,50),n))this.Pt(r,t)}ft(e,t){this.Tt(t,37),$.fromName(e).path.forEach(e=>{this.Tt(t,60),this.wt(e,t)})}Tt(e,t){e.Et(t)}Rt(e){e.Et(2)}}nm.St=new nm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(){this.on=new np}addToCollectionParentIndex(e,t){return this.on.add(t),j.resolve()}getCollectionParents(e,t){return j.resolve(this.on.getEntries(t))}addFieldIndex(e,t){return j.resolve()}deleteFieldIndex(e,t){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,t){return j.resolve()}getDocumentsMatchingTarget(e,t){return j.resolve(null)}getIndexType(e,t){return j.resolve(0)}getFieldIndexes(e,t){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,t){return j.resolve(K.min())}getMinOffsetFromCollectionGroup(e,t){return j.resolve(K.min())}updateCollectionGroup(e,t,n){return j.resolve()}updateIndexEntries(e,t){return j.resolve()}}class np{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new er(q.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new er(q.comparator)).toArray()}}new Uint8Array(0);class ny{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new ny(e,ny.DEFAULT_COLLECTION_PERCENTILE,ny.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ny.DEFAULT_COLLECTION_PERCENTILE=10,ny.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ny.DEFAULT=new ny(41943040,ny.DEFAULT_COLLECTION_PERCENTILE,ny.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ny.DISABLED=new ny(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new nw(0)}static Nn(){return new nw(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(){this.changes=new tt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,eR.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?j.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&tN(n.mutation,e,es.empty(),P.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,tu()).next(()=>t))}getLocalViewOfDocuments(e,t,n=tu()){let r=ta();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=ti();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=ta();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,tu()))}populateOverlays(e,t,n){let r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=tn,s=ta(),a=ta();return t.forEach((e,t)=>{let a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof tx)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),tN(a.mutation,t,a.mutation.getFieldMask(),P.now())):s.set(t.key,es.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return a.set(e,new n_(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),a))}recalculateAndSaveOverlays(e,t){let n=ta(),r=new ee((e,t)=>e-t),i=tu();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=n.get(e)||es.empty();a=i.applyToLocalView(s,a),n.set(e,a);let o=(r.get(i.batchId)||tu()).add(e);r=r.insert(i.batchId,o)})}).next(()=>{let s=[],a=r.getReverseIterator();for(;a.hasNext();){let o=a.getNext(),l=o.key,u=o.value,h=ta();u.forEach(e=>{if(!i.has(e)){let r=tA(t.get(e),n.get(e));null!==r&&h.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,l,h))}return j.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,r){return $.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):null!==t.collectionGroup?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{let s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):j.resolve(ta()),a=-1,o=i;return s.next(t=>j.forEach(t,(t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),i.get(t)?j.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,tu())).next(e=>({batchId:a,changes:ts(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new $(t)).next(e=>{let t=ti();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){let i=t.collectionGroup,s=ti();return this.indexManager.getCollectionParents(e,i).next(a=>j.forEach(a,a=>{var o;let l=(o=a.child(i),new e1(o,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt));return this.getDocumentsMatchingCollectionQuery(e,l,n,r).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r))).next(e=>{i.forEach((t,n)=>{let r=n.getKey();null===e.get(r)&&(e=e.insert(r,eR.newInvalidDocument(r)))});let n=ti();return e.forEach((e,r)=>{let s=i.get(e);void 0!==s&&tN(s.mutation,r,es.empty(),P.now()),e7(t,r)&&(n=n.insert(e,r))}),n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,t){return j.resolve(this.ur.get(t))}saveBundleMetadata(e,t){return this.ur.set(t.id,{id:t.id,version:t.version,createTime:t7(t.createTime)}),j.resolve()}getNamedQuery(e,t){return j.resolve(this.cr.get(t))}saveNamedQuery(e,t){return this.cr.set(t.name,{name:t.name,query:function(e){let t=function(e){var t,n,r,i,s,a,o,l;let u,h=function(e){let t=nn(e);return 4===t.length?q.emptyPath():no(t)}(e.parent),c=e.structuredQuery,d=c.from?c.from.length:0,f=null;if(d>0){1===d||T();let m=c.from[0];m.allDescendants?f=m.collectionId:h=h.child(m.collectionId)}let g=[];c.where&&(g=function(e){var t;let n=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=nh(e.unaryFilter.field);return eO.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=nh(e.unaryFilter.field);return eO.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let r=nh(e.unaryFilter.field);return eO.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=nh(e.unaryFilter.field);return eO.create(i,"!=",{nullValue:"NULL_VALUE"});default:return T()}}(t):void 0!==t.fieldFilter?eO.create(nh(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return T()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?eU.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return T()}}(t.compositeFilter.op)):T()}(e);return n instanceof eU&&eB(t=n)&&eq(t)?n.getFilters():[n]}(c.where));let p=[];c.orderBy&&(p=c.orderBy.map(e=>new eV(nh(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let y=null;c.limit&&(y=null==(u="object"==typeof(t=c.limit)?t.value:t)?null:u);let w=null;c.startAt&&(w=function(e){let t=!!e.before,n=e.values||[];return new eL(n,t)}(c.startAt));let v=null;return c.endAt&&(v=function(e){let t=!e.before,n=e.values||[];return new eL(n,t)}(c.endAt)),n=h,r=f,i=p,s=g,a=y,o=w,l=v,new e1(n,r,i,s,a,"F",o,l)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?e9(t,t.limit,"L"):t}(t.bundledQuery),readTime:t7(t.readTime)}),j.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(){this.overlays=new ee($.comparator),this.lr=new Map}getOverlay(e,t){return j.resolve(this.overlays.get(t))}getOverlays(e,t){let n=ta();return j.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.lt(e,t,r)}),j.resolve()}removeOverlaysForBatchId(e,t,n){let r=this.lr.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.lr.delete(n)),j.resolve()}getOverlaysForCollection(e,t,n){let r=ta(),i=t.length+1,s=new $(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let o=a.getNext().value,l=o.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===i&&o.largestBatchId>n&&r.set(o.getKey(),o)}return j.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new ee((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let a=s.getNext().value;if(a.getKey().getCollectionGroup()===t&&a.largestBatchId>n){let o=i.get(a.largestBatchId);null===o&&(o=ta(),i=i.insert(a.largestBatchId,o)),o.set(a.getKey(),a)}}let l=ta(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((e,t)=>l.set(e,t)),!(l.size()>=r)););return j.resolve(l)}lt(e,t,n){let r=this.overlays.get(n.key);if(null!==r){let i=this.lr.get(r.largestBatchId).delete(n.key);this.lr.set(r.largestBatchId,i)}this.overlays=this.overlays.insert(n.key,new tU(t,n));let s=this.lr.get(t);void 0===s&&(s=tu(),this.lr.set(t,s)),this.lr.set(t,s.add(n.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(){this.hr=new er(nS.Pr),this.Ir=new er(nS.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,t){let n=new nS(e,t);this.hr=this.hr.add(n),this.Ir=this.Ir.add(n)}Er(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.dr(new nS(e,t))}Ar(e,t){e.forEach(e=>this.removeReference(e,t))}Rr(e){let t=new $(new q([])),n=new nS(t,e),r=new nS(t,e+1),i=[];return this.Ir.forEachInRange([n,r],e=>{this.dr(e),i.push(e.key)}),i}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){let t=new $(new q([])),n=new nS(t,e),r=new nS(t,e+1),i=tu();return this.Ir.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new nS(e,0),n=this.hr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class nS{constructor(e,t){this.key=e,this.gr=t}static Pr(e,t){return $.comparator(e.key,t.key)||F(e.gr,t.gr)}static Tr(e,t){return F(e.gr,t.gr)||$.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.pr=1,this.yr=new er(nS.Pr)}checkEmpty(e){return j.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){let i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new tP(i,t,n,r);for(let a of(this.mutationQueue.push(s),r))this.yr=this.yr.add(new nS(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return j.resolve(s)}lookupMutationBatch(e,t){return j.resolve(this.wr(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.Sr(t+1),r=n<0?0:n;return j.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(0===this.mutationQueue.length?-1:this.pr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new nS(t,0),r=new nS(t,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([n,r],e=>{let t=this.wr(e.gr);i.push(t)}),j.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new er(F);return t.forEach(e=>{let t=new nS(e,0),r=new nS(e,Number.POSITIVE_INFINITY);this.yr.forEachInRange([t,r],e=>{n=n.add(e.gr)})}),j.resolve(this.br(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=n;$.isDocumentKey(i)||(i=i.child(""));let s=new nS(new $(i),0),a=new er(F);return this.yr.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e.gr)),!0)},s),j.resolve(this.br(a))}br(e){let t=[];return e.forEach(e=>{let n=this.wr(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){0===this.Dr(t.batchId,"removed")||T(),this.mutationQueue.shift();let n=this.yr;return j.forEach(t.mutations,r=>{let i=new nS(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.yr=n})}Fn(e){}containsKey(e,t){let n=new nS(t,0),r=this.yr.firstAfterOrEqual(n);return j.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Dr(e,t){return this.Sr(e)}Sr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}wr(e){let t=this.Sr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e){this.Cr=e,this.docs=new ee($.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Cr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return j.resolve(n?n.document.mutableCopy():eR.newInvalidDocument(t))}getEntries(e,t){let n=tn;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():eR.newInvalidDocument(e))}),j.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=tn,s=t.path,a=new $(s.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:l,value:{document:u}}=o.getNext();if(!s.isPrefixOf(l.path))break;l.path.length>s.length+1||0>=function(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=$.comparator(e.documentKey,t.documentKey))?n:F(e.largestBatchId,t.largestBatchId)}(new K(u.readTime,u.key,-1),n)||(r.has(u.key)||e7(t,u))&&(i=i.insert(u.key,u.mutableCopy()))}return j.resolve(i)}getAllFromCollectionGroup(e,t,n,r){T()}vr(e,t){return j.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new nN(this)}getSize(e){return j.resolve(this.size)}}class nN extends nv{constructor(e){super(),this._r=e}applyChanges(e){let t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this._r.addEntry(e,r)):this._r.removeEntry(n)}),j.waitFor(t)}getFromCache(e,t){return this._r.getEntry(e,t)}getAllFromCache(e,t){return this._r.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(e){this.persistence=e,this.Fr=new tt(e=>eJ(e),eZ),this.lastRemoteSnapshotVersion=O.min(),this.highestTargetId=0,this.Mr=0,this.Or=new nC,this.targetCount=0,this.Nr=nw.On()}forEachTarget(e,t){return this.Fr.forEach((e,n)=>t(n)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Mr&&(this.Mr=t),j.resolve()}kn(e){this.Fr.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Nr=new nw(t),this.highestTargetId=t),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,t){return this.kn(t),this.targetCount+=1,j.resolve()}updateTargetData(e,t){return this.kn(t),j.resolve()}removeTargetData(e,t){return this.Fr.delete(t.target),this.Or.Rr(t.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,t,n){let r=0,i=[];return this.Fr.forEach((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.Fr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),j.waitFor(i).next(()=>r)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,t){let n=this.Fr.get(t)||null;return j.resolve(n)}addMatchingKeys(e,t,n){return this.Or.Er(t,n),j.resolve()}removeMatchingKeys(e,t,n){this.Or.Ar(t,n);let r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),j.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Or.Rr(t),j.resolve()}getMatchingKeysForTargetId(e,t){let n=this.Or.mr(t);return j.resolve(n)}containsKey(e,t){return j.resolve(this.Or.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e,t){var n;this.Lr={},this.overlays={},this.Br=new W(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new nD(this),this.indexManager=new ng,this.remoteDocumentCache=(n=e=>this.referenceDelegate.Qr(e),new nA(n)),this.serializer=new nf(t),this.Kr=new nT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new nI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Lr[e.toKey()];return n||(n=new nk(t,this.referenceDelegate),this.Lr[e.toKey()]=n),n}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,t,n){w("MemoryPersistence","Starting transaction:",e);let r=new nx(this.Br.next());return this.referenceDelegate.$r(),n(r).next(e=>this.referenceDelegate.Ur(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Wr(e,t){return j.or(Object.values(this.Lr).map(n=>()=>n.containsKey(e,t)))}}class nx extends G{constructor(e){super(),this.currentSequenceNumber=e}}class nR{constructor(e){this.persistence=e,this.Gr=new nC,this.zr=null}static jr(e){return new nR(e)}get Hr(){if(this.zr)return this.zr;throw T()}addReference(e,t,n){return this.Gr.addReference(n,t),this.Hr.delete(n.toString()),j.resolve()}removeReference(e,t,n){return this.Gr.removeReference(n,t),this.Hr.add(n.toString()),j.resolve()}markPotentiallyOrphaned(e,t){return this.Hr.add(t.toString()),j.resolve()}removeTarget(e,t){this.Gr.Rr(t.targetId).forEach(e=>this.Hr.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Hr.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}$r(){this.zr=new Set}Ur(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.Hr,n=>{let r=$.fromPath(n);return this.Jr(e,r).next(e=>{e||t.removeEntry(r,O.min())})}).next(()=>(this.zr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Jr(e,t).next(e=>{e?this.Hr.delete(t.toString()):this.Hr.add(t.toString())})}Qr(e){return 0}Jr(e,t){return j.or([()=>j.resolve(this.Gr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Wr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nL{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.ki=n,this.qi=r}static Qi(e,t){let n=tu(),r=tu();for(let i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new nL(e,t.fromCache,n,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nF{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=(0,h.G6)()?8:function(e){let t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}((0,h.z$)())>0?6:4}initialize(e,t){this.Gi=e,this.indexManager=t,this.Ki=!0}getDocumentsMatchingQuery(e,t,n,r){let i={result:null};return this.zi(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.ji(e,t,r,n).next(e=>{i.result=e})}).next(()=>{if(i.result)return;let n=new nM;return this.Hi(e,t,n).next(r=>{if(i.result=r,this.$i)return this.Ji(e,t,n,r.size)})}).next(()=>i.result)}Ji(e,t,n,r){return n.documentReadCount<this.Ui?(y()<=u.in.DEBUG&&w("QueryEngine","SDK will not create cache indexes for query:",e5(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),j.resolve()):(y()<=u.in.DEBUG&&w("QueryEngine","Query:",e5(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Wi*r?(y()<=u.in.DEBUG&&w("QueryEngine","The SDK decides to create cache indexes for query:",e5(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,e3(t))):j.resolve())}zi(e,t){if(e2(t))return j.resolve(null);let n=e3(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(n=e3(t=e9(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{let i=tu(...r);return this.Gi.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{let s=this.Yi(t,r);return this.Zi(t,s,i,n.readTime)?this.zi(e,e9(t,null,"F")):this.Xi(e,s,t,n)}))})))}ji(e,t,n,r){return e2(t)||r.isEqual(O.min())?j.resolve(null):this.Gi.getDocuments(e,n).next(i=>{let s=this.Yi(t,i);return this.Zi(t,s,n,r)?j.resolve(null):(y()<=u.in.DEBUG&&w("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),e5(t)),this.Xi(e,s,t,function(e,t){let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=O.fromTimestamp(1e9===r?new P(n+1,0):new P(n,r));return new K(i,$.empty(),-1)}(r,0)).next(e=>e))})}Yi(e,t){let n=new er(te(e));return t.forEach((t,r)=>{e7(e,r)&&(n=n.add(r))}),n}Zi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Hi(e,t,n){return y()<=u.in.DEBUG&&w("QueryEngine","Using full collection scan to execute query:",e5(t)),this.Gi.getDocumentsMatchingQuery(e,t,K.min(),n)}Xi(e,t,n,r){return this.Gi.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nV{constructor(e,t,n,r){this.persistence=e,this.es=t,this.serializer=r,this.ts=new ee(F),this.ns=new tt(e=>eJ(e),eZ),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(n)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nE(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ts))}}async function nP(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(i=>(r=i,e.os(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let i=[],s=[],a=tu();for(let o of r)for(let l of(i.push(o.batchId),o.mutations))a=a.add(l.key);for(let u of t)for(let h of(s.push(u.batchId),u.mutations))a=a.add(h.key);return e.localDocuments.getDocuments(n,a).next(e=>({_s:e,removedBatchIds:i,addedBatchIds:s}))})})}function nO(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.qr.getLastRemoteSnapshotVersion(t))}async function nU(e,t,n){let r=e,i=r.ts.get(t);try{n||await r.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",e=>r.persistence.referenceDelegate.removeTarget(e,i))}catch(s){if(!H(s))throw s;w("LocalStore",`Failed to update sequence numbers for target ${t}: ${s}`)}r.ts=r.ts.remove(t),r.ns.delete(i.target)}function nq(e,t,n){let r=O.min(),i=tu();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,n){let r=e.ns.get(n);return void 0!==r?j.resolve(e.ts.get(r)):e.qr.getTargetData(t,n)})(e,s,e3(t)).next(t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,e.qr.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.es.getDocumentsMatchingQuery(s,t,n?r:O.min(),n?i:tu())).next(n=>{var r;let s;return r=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),s=e.rs.get(r)||O.min(),n.forEach((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)}),e.rs.set(r,s),{documents:n,ls:i}}))}class nB{constructor(){this.activeTargetIds=th}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class nz{constructor(){this.eo=new nB,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,t,n){this.no[e]=t}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new nB,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n${ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nK{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){for(let e of(w("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.ao))e(0)}_o(){for(let e of(w("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.ao))e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nG=null;function nQ(){return null===nG?nG=268435456+Math.round(2147483648*Math.random()):nG++,"0x"+nG.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nj={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nH{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.lo()}send(e){this.co(e)}Vo(){this.Po()}mo(){this.To()}fo(e){this.Ao(e)}po(e){this.Ro(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nW="WebChannelConnection";class nY extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.yo=t+"://"+e.host,this.wo=`projects/${n}/databases/${r}`,this.So="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get bo(){return!1}Do(e,t,n,r,i){let s=nQ(),a=this.Co(e,t.toUriEncodedString());w("RestConnection",`Sending RPC '${e}' ${s}:`,a,n);let o={"google-cloud-resource-prefix":this.wo,"x-goog-request-params":this.So};return this.vo(o,r,i),this.Fo(e,a,o,n).then(t=>(w("RestConnection",`Received RPC '${e}' ${s}: `,t),t),t=>{throw _("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",n),t})}Mo(e,t,n,r,i,s){return this.Do(e,t,n,r,i)}vo(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+g}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}Co(e,t){let n=nj[e];return`${this.yo}/v1/${t}:${n}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Fo(e,t,n,r){let i=nQ();return new Promise((s,a)=>{let o=new c.JJ;o.setWithCredentials(!0),o.listenOnce(c.tw.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case c.jK.NO_ERROR:let t=o.getResponseJson();w(nW,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case c.jK.TIMEOUT:w(nW,`RPC '${e}' ${i} timed out`),a(new C(I.DEADLINE_EXCEEDED,"Request time out"));break;case c.jK.HTTP_ERROR:let n=o.getStatus();if(w(nW,`RPC '${e}' ${i} failed with status:`,n,"response text:",o.getResponseText()),n>0){let r=o.getResponseJson();Array.isArray(r)&&(r=r[0]);let l=null==r?void 0:r.error;if(l&&l.status&&l.message){let u=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(t)>=0?t:I.UNKNOWN}(l.status);a(new C(u,l.message))}else a(new C(I.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new C(I.UNAVAILABLE,"Connection failed."));break;default:T()}}finally{w(nW,`RPC '${e}' ${i} completed.`)}});let l=JSON.stringify(r);w(nW,`RPC '${e}' ${i} sending request:`,r),o.send(t,"POST",l,n,15)})}xo(e,t,n){let i=nQ(),s=[this.yo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=(0,c.UE)(),o=(0,c.FJ)(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new c.zI({})),this.vo(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;let h=s.join("");w(nW,`Creating RPC '${e}' stream ${i}: ${h}`,l);let d=a.createWebChannel(h,l),f=!1,m=!1,g=new nH({co:t=>{m?w(nW,`Not sending because RPC '${e}' stream ${i} is closed:`,t):(f||(w(nW,`Opening RPC '${e}' stream ${i} transport.`),d.open(),f=!0),w(nW,`RPC '${e}' stream ${i} sending:`,t),d.send(t))},lo:()=>d.close()}),p=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(t){setTimeout(()=>{throw t},0)}})};return p(d,c.ii.EventType.OPEN,()=>{m||(w(nW,`RPC '${e}' stream ${i} transport opened.`),g.Vo())}),p(d,c.ii.EventType.CLOSE,()=>{m||(m=!0,w(nW,`RPC '${e}' stream ${i} transport closed`),g.fo())}),p(d,c.ii.EventType.ERROR,t=>{m||(m=!0,_(nW,`RPC '${e}' stream ${i} transport errored:`,t),g.fo(new C(I.UNAVAILABLE,"The operation could not be completed")))}),p(d,c.ii.EventType.MESSAGE,t=>{var n;if(!m){let s=t.data[0];s||T();let a=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(a){w(nW,`RPC '${e}' stream ${i} received error:`,a);let o=a.status,l=function(e){let t=r[e];if(void 0!==t)return tB(t)}(o),u=a.message;void 0===l&&(l=I.INTERNAL,u="Unknown error status: "+o+" with message "+a.message),m=!0,g.fo(new C(l,u)),d.close()}else w(nW,`RPC '${e}' stream ${i} received:`,s),g.po(s)}}),p(o,c.ju.STAT_EVENT,t=>{t.stat===c.kN.PROXY?w(nW,`RPC '${e}' stream ${i} detected buffering proxy`):t.stat===c.kN.NOPROXY&&w(nW,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.mo()},0),g}}function nX(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nJ(e){return new t9(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nZ{constructor(e,t,n=1e3,r=1.5,i=6e4){this.si=e,this.timerId=t,this.Oo=n,this.No=r,this.Lo=i,this.Bo=0,this.ko=null,this.qo=Date.now(),this.reset()}reset(){this.Bo=0}Qo(){this.Bo=this.Lo}Ko(e){this.cancel();let t=Math.floor(this.Bo+this.$o()),n=Math.max(0,Date.now()-this.qo),r=Math.max(0,t-n);r>0&&w("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Bo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.ko=this.si.enqueueAfterDelay(this.timerId,r,()=>(this.qo=Date.now(),e())),this.Bo*=this.No,this.Bo<this.Oo&&(this.Bo=this.Oo),this.Bo>this.Lo&&(this.Bo=this.Lo)}Uo(){null!==this.ko&&(this.ko.skipDelay(),this.ko=null)}cancel(){null!==this.ko&&(this.ko.cancel(),this.ko=null)}$o(){return(Math.random()-.5)*this.Bo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(e,t,n,r,i,s,a,o){this.si=e,this.Wo=n,this.Go=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.zo=0,this.jo=null,this.Ho=null,this.stream=null,this.Jo=new nZ(e,t)}Yo(){return 1===this.state||5===this.state||this.Zo()}Zo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Xo()}async stop(){this.Yo()&&await this.close(0)}e_(){this.state=0,this.Jo.reset()}t_(){this.Zo()&&null===this.jo&&(this.jo=this.si.enqueueAfterDelay(this.Wo,6e4,()=>this.n_()))}r_(e){this.i_(),this.stream.send(e)}async n_(){if(this.Zo())return this.close(0)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}async close(e,t){this.i_(),this.s_(),this.Jo.cancel(),this.zo++,4!==e?this.Jo.reset():t&&t.code===I.RESOURCE_EXHAUSTED?(v(t.toString()),v("Using maximum backoff delay to prevent overloading the backend."),this.Jo.Qo()):t&&t.code===I.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.o_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(t)}o_(){}auth(){this.state=1;let e=this.__(this.zo),t=this.zo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.zo===t&&this.a_(e,n)},t=>{e(()=>{let e=new C(I.UNKNOWN,"Fetching auth token failed: "+t.message);return this.u_(e)})})}a_(e,t){let n=this.__(this.zo);this.stream=this.c_(e,t),this.stream.ho(()=>{n(()=>this.listener.ho())}),this.stream.Io(()=>{n(()=>(this.state=2,this.Ho=this.si.enqueueAfterDelay(this.Go,1e4,()=>(this.Zo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(e=>{n(()=>this.u_(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}Xo(){this.state=5,this.Jo.Ko(async()=>{this.state=0,this.start()})}u_(e){return w("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}__(e){return t=>{this.si.enqueueAndForget(()=>this.zo===e?t():(w("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class n1 extends n0{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}c_(e,t){return this.connection.xo("Listen",e,t)}onMessage(e){this.Jo.reset();let t=function(e,t){let n;if("targetChange"in t){var r,i;t.targetChange;let s="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:T(),a=t.targetChange.targetIds||[],o=(i=t.targetChange.resumeToken,e.useProto3Json?(void 0===i||"string"==typeof i||T(),eo.fromBase64String(i||"")):(void 0===i||i instanceof d||i instanceof Uint8Array||T(),eo.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause,u=l&&function(e){let t=void 0===e.code?I.UNKNOWN:tB(e.code);return new C(t,e.message||"")}(l);n=new tX(s,a,o,u||null)}else if("documentChange"in t){t.documentChange;let h=t.documentChange;h.document,h.document.name,h.document.updateTime;let c=ni(e,h.document.name),f=t7(h.document.updateTime),m=h.document.createTime?t7(h.document.createTime):O.min(),g=new ex({mapValue:{fields:h.document.fields}}),p=eR.newFoundDocument(c,f,m,g),y=h.targetIds||[],w=h.removedTargetIds||[];n=new tW(y,w,p.key,p)}else if("documentDelete"in t){t.documentDelete;let v=t.documentDelete;v.document;let _=ni(e,v.document),E=v.readTime?t7(v.readTime):O.min(),S=eR.newNoDocument(_,E),k=v.removedTargetIds||[];n=new tW([],k,S.key,S)}else if("documentRemove"in t){t.documentRemove;let A=t.documentRemove;A.document;let N=ni(e,A.document),D=A.removedTargetIds||[];n=new tW([],D,N,null)}else{if(!("filter"in t))return T();{t.filter;let b=t.filter;b.targetId;let{count:x=0,unchangedNames:R}=b,L=new tq(x,R),M=b.targetId;n=new tY(M,L)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return O.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?O.min():t.readTime?t7(t.readTime):O.min()}(e);return this.listener.l_(t,n)}h_(e){let t={};t.database=na(this.serializer),t.addTarget=function(e,t){let n;let r=t.target;if((n=e0(r)?{documents:{documents:[ns(e,r.path)]}}:{query:function(e,t){var n,r;let i;let s={structuredQuery:{}},a=t.path;null!==t.collectionGroup?(i=a,s.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=a.popLast(),s.structuredQuery.from=[{collectionId:a.lastSegment()}]),s.parent=ns(e,i);let o=function(e){if(0!==e.length)return function e(t){return t instanceof eO?function(e){if("=="===e.op){if(eA(e.value))return{unaryFilter:{field:nu(e.field),op:"IS_NAN"}};if(ek(e.value))return{unaryFilter:{field:nu(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(eA(e.value))return{unaryFilter:{field:nu(e.field),op:"IS_NOT_NAN"}};if(ek(e.value))return{unaryFilter:{field:nu(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:nu(e.field),op:t4[e.op],value:e.value}}}(t):t instanceof eU?function(t){let n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:t3[t.op],filters:n}}}(t):T()}(eU.create(e,"and"))}(t.filters);o&&(s.structuredQuery.where=o);let l=function(e){if(0!==e.length)return e.map(e=>({field:nu(e.field),direction:t2[e.dir]}))}(t.orderBy);l&&(s.structuredQuery.orderBy=l);let u=t8(e,t.limit);return null!==u&&(s.structuredQuery.limit=u),t.startAt&&(s.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(s.structuredQuery.endAt={before:!(r=t.endAt).inclusive,values:r.position}),{_t:s,parent:i}}(e,r)._t}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=t5(e,t.resumeToken);let i=t8(e,t.expectedCount);null!==i&&(n.expectedCount=i)}else if(t.snapshotVersion.compareTo(O.min())>0){n.readTime=t6(e,t.snapshotVersion.toTimestamp());let s=t8(e,t.expectedCount);null!==s&&(n.expectedCount=s)}return n}(this.serializer,e);let n=function(e,t){let n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return T()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.r_(t)}P_(e){let t={};t.database=na(this.serializer),t.removeTarget=e,this.r_(t)}}class n2 extends n0{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i,this.I_=!1}get T_(){return this.I_}start(){this.I_=!1,this.lastStreamToken=void 0,super.start()}o_(){this.I_&&this.E_([])}c_(e,t){return this.connection.xo("Write",e,t)}onMessage(e){var t,n;if(e.streamToken||T(),this.lastStreamToken=e.streamToken,this.I_){this.Jo.reset();let r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(void 0!==n||T(),t.map(e=>{let t;return(t=e.updateTime?t7(e.updateTime):t7(n)).isEqual(O.min())&&(t=t7(n)),new tI(t,e.transformResults||[])})):[]),i=t7(e.commitTime);return this.listener.d_(i,r)}return e.writeResults&&0!==e.writeResults.length&&T(),this.I_=!0,this.listener.A_()}R_(){let e={};e.database=na(this.serializer),this.r_(e)}E_(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var n;let r;if(t instanceof tb)r={update:nl(e,t.key,t.value)};else if(t instanceof tF)r={delete:nr(e,t.key)};else if(t instanceof tx)r={update:nl(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof tV))return T();r={verify:nr(e,t.key)}}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof tg)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof tp)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof tw)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof t_)return{fieldPath:t.field.canonicalString(),increment:n.Pe};throw T()})(0,e))),t.precondition.isNone||(r.currentDocument=void 0!==(n=t.precondition).updateTime?{updateTime:t6(e,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:T()),r})(this.serializer,e))};this.r_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n4 extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.V_=!1}m_(){if(this.V_)throw new C(I.FAILED_PRECONDITION,"The client has already been terminated.")}Do(e,t,n,r){return this.m_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Do(e,nt(t,n),r,i,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new C(I.UNKNOWN,e.toString())})}Mo(e,t,n,r,i){return this.m_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Mo(e,nt(t,n),r,s,a,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new C(I.UNKNOWN,e.toString())})}terminate(){this.V_=!0,this.connection.terminate()}}class n3{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){0===this.g_&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){"Online"===this.state?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,"Online"===e&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(v(t),this.y_=!1):w("OnlineStateTracker",t)}C_(){null!==this.p_&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n9{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=i,this.O_.ro(e=>{n.enqueueAndForget(async()=>{ri(this)&&(w("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.M_.add(4),await n6(e),e.N_.set("Unknown"),e.M_.delete(4),await n8(e)}(this))})}),this.N_=new n3(n,r)}}async function n8(e){if(ri(e))for(let t of e.x_)await t(!0)}async function n6(e){for(let t of e.x_)await t(!1)}function n5(e,t){e.F_.has(t.targetId)||(e.F_.set(t.targetId,t),rr(e)?rn(e):r_(e).Zo()&&re(e,t))}function n7(e,t){let n=r_(e);e.F_.delete(t),n.Zo()&&rt(e,t),0===e.F_.size&&(n.Zo()?n.t_():ri(e)&&e.N_.set("Unknown"))}function re(e,t){if(e.L_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(O.min())>0){let n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}r_(e).h_(t)}function rt(e,t){e.L_.xe(t),r_(e).P_(t)}function rn(e){e.L_=new tZ({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>e.F_.get(t)||null,tt:()=>e.datastore.serializer.databaseId}),r_(e).start(),e.N_.w_()}function rr(e){return ri(e)&&!r_(e).Yo()&&e.F_.size>0}function ri(e){return 0===e.M_.size}async function rs(e){e.N_.set("Online")}async function ra(e){e.F_.forEach((t,n)=>{re(e,t)})}async function ro(e,t){e.L_=void 0,rr(e)?(e.N_.D_(t),rn(e)):e.N_.set("Unknown")}async function rl(e,t,n){if(e.N_.set("Online"),t instanceof tX&&2===t.state&&t.cause)try{await async function(e,t){let n=t.cause;for(let r of t.targetIds)e.F_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.F_.delete(r),e.L_.removeTarget(r))}(e,t)}catch(r){w("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await ru(e,r)}else if(t instanceof tW?e.L_.Ke(t):t instanceof tY?e.L_.He(t):e.L_.We(t),!n.isEqual(O.min()))try{let i=await nO(e.localStore);n.compareTo(i)>=0&&await function(e,t){let n=e.L_.rt(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){let i=e.F_.get(r);i&&e.F_.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{let r=e.F_.get(t);if(!r)return;e.F_.set(t,r.withResumeToken(eo.EMPTY_BYTE_STRING,r.snapshotVersion)),rt(e,t);let i=new nd(r.target,t,n,r.sequenceNumber);re(e,i)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(s){w("RemoteStore","Failed to raise snapshot:",s),await ru(e,s)}}async function ru(e,t,n){if(!H(t))throw t;e.M_.add(1),await n6(e),e.N_.set("Offline"),n||(n=()=>nO(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{w("RemoteStore","Retrying IndexedDB access"),await n(),e.M_.delete(1),await n8(e)})}function rh(e,t){return t().catch(n=>ru(e,n,t))}async function rc(e){let t=rE(e),n=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;ri(e)&&e.v_.length<10;)try{let r=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}(e.localStore,n);if(null===r){0===e.v_.length&&t.t_();break}n=r.batchId,function(e,t){e.v_.push(t);let n=rE(e);n.Zo()&&n.T_&&n.E_(t.mutations)}(e,r)}catch(i){await ru(e,i)}rd(e)&&rf(e)}function rd(e){return ri(e)&&!rE(e).Yo()&&e.v_.length>0}function rf(e){rE(e).start()}async function rm(e){rE(e).R_()}async function rg(e){let t=rE(e);for(let n of e.v_)t.E_(n.mutations)}async function rp(e,t,n){let r=e.v_.shift(),i=tO.from(r,t,n);await rh(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await rc(e)}async function ry(e,t){t&&rE(e).T_&&await async function(e,t){var n;if(function(e){switch(e){default:return T();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}(n=t.code)&&n!==I.ABORTED){let r=e.v_.shift();rE(e).e_(),await rh(e,()=>e.remoteSyncer.rejectFailedWrite(r.batchId,t)),await rc(e)}}(e,t),rd(e)&&rf(e)}async function rw(e,t){e.asyncQueue.verifyOperationInProgress(),w("RemoteStore","RemoteStore received new credentials");let n=ri(e);e.M_.add(3),await n6(e),n&&e.N_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.M_.delete(3),await n8(e)}async function rv(e,t){t?(e.M_.delete(2),await n8(e)):t||(e.M_.add(2),await n6(e),e.N_.set("Unknown"))}function r_(e){var t,n,r;return e.B_||(e.B_=(t=e.datastore,n=e.asyncQueue,r={ho:rs.bind(null,e),Io:ra.bind(null,e),Eo:ro.bind(null,e),l_:rl.bind(null,e)},t.m_(),new n1(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.x_.push(async t=>{t?(e.B_.e_(),rr(e)?rn(e):e.N_.set("Unknown")):(await e.B_.stop(),e.L_=void 0)})),e.B_}function rE(e){var t,n,r;return e.k_||(e.k_=(t=e.datastore,n=e.asyncQueue,r={ho:()=>Promise.resolve(),Io:rm.bind(null,e),Eo:ry.bind(null,e),A_:rg.bind(null,e),d_:rp.bind(null,e)},t.m_(),new n2(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.x_.push(async t=>{t?(e.k_.e_(),await rc(e)):(await e.k_.stop(),e.v_.length>0&&(w("RemoteStore",`Stopping write stream with ${e.v_.length} pending writes`),e.v_=[]))})),e.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new S,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){let s=Date.now()+n,a=new rT(e,t,s,r,i);return a.start(n),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new C(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rI(e,t){if(v("AsyncQueue",`${t}: ${e}`),H(e))return new C(I.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e){this.comparator=e?(t,n)=>e(t,n)||$.comparator(t.key,n.key):(e,t)=>$.comparator(e.key,t.key),this.keyedMap=ti(),this.sortedSet=new ee(this.comparator)}static emptySet(e){return new rC(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof rC)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let r=t.getNext().key,i=n.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new rC;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(){this.q_=new ee($.comparator)}track(e){let t=e.doc.key,n=this.q_.get(t);n?0!==e.type&&3===n.type?this.q_=this.q_.insert(t,e):3===e.type&&1!==n.type?this.q_=this.q_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.q_=this.q_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.q_=this.q_.remove(t):1===e.type&&2===n.type?this.q_=this.q_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):T():this.q_=this.q_.insert(t,e)}Q_(){let e=[];return this.q_.inorderTraversal((t,n)=>{e.push(n)}),e}}class rk{constructor(e,t,n,r,i,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new rk(e,t,rC.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&e8(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class rN{constructor(){this.queries=new tt(e=>e6(e),e8),this.onlineState="Unknown",this.z_=new Set}}async function rD(e,t){let n=3,r=t.query,i=e.queries.get(r);i?!i.W_()&&t.G_()&&(n=2):(i=new rA,n=t.G_()?0:1);try{switch(n){case 0:i.K_=await e.onListen(r,!0);break;case 1:i.K_=await e.onListen(r,!1);break;case 2:await e.onFirstRemoteStoreListen(r)}}catch(a){let s=rI(a,`Initialization of query '${e5(t.query)}' failed`);return void t.onError(s)}e.queries.set(r,i),i.U_.push(t),t.j_(e.onlineState),i.K_&&t.H_(i.K_)&&rL(e)}async function rb(e,t){let n=t.query,r=3,i=e.queries.get(n);if(i){let s=i.U_.indexOf(t);s>=0&&(i.U_.splice(s,1),0===i.U_.length?r=t.G_()?0:1:!i.W_()&&t.G_()&&(r=2))}switch(r){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function rx(e,t){let n=!1;for(let r of t){let i=r.query,s=e.queries.get(i);if(s){for(let a of s.U_)a.H_(r)&&(n=!0);s.K_=r}}n&&rL(e)}function rR(e,t,n){let r=e.queries.get(t);if(r)for(let i of r.U_)i.onError(n);e.queries.delete(t)}function rL(e){e.z_.forEach(e=>{e.next()})}(a=s||(s={})).J_="default",a.Cache="cache";class rM{constructor(e,t,n){this.query=e,this.Y_=t,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=n||{}}H_(e){if(!this.options.includeMetadataChanges){let t=[];for(let n of e.docChanges)3!==n.type&&t.push(n);e=new rk(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let r=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),r=!0):this.ta(e,this.onlineState)&&(this.na(e),r=!0),this.X_=e,r}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let t=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),t=!0),t}ta(e,t){return!(e.fromCache&&this.G_())||(!this.options.ra||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}ea(e){if(e.docChanges.length>0)return!0;let t=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}na(e){e=rk.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==s.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rF{constructor(e){this.key=e}}class rV{constructor(e){this.key=e}}class rP{constructor(e,t){this.query=e,this.la=t,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=tu(),this.mutatedKeys=tu(),this.Ia=te(e),this.Ta=new rC(this.Ia)}get Ea(){return this.la}da(e,t){let n=t?t.Aa:new rS,r=t?t.Ta:this.Ta,i=t?t.mutatedKeys:this.mutatedKeys,s=r,a=!1,o="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{let u=r.get(e),h=e7(this.query,t)?t:null,c=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations),f=!1;u&&h?u.data.isEqual(h.data)?c!==d&&(n.track({type:3,doc:h}),f=!0):this.Ra(u,h)||(n.track({type:2,doc:h}),f=!0,(o&&this.Ia(h,o)>0||l&&0>this.Ia(h,l))&&(a=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(h?(s=s.add(h),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let u="F"===this.query.limitType?s.last():s.first();s=s.delete(u.key),i=i.delete(u.key),n.track({type:1,doc:u})}return{Ta:s,Aa:n,Zi:a,mutatedKeys:i}}Ra(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){let i=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;let s=e.Aa.Q_();s.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return T()}};return n(e)-n(t)})(e.type,t.type)||this.Ia(e.doc,t.doc)),this.Va(n),r=null!=r&&r;let a=t&&!r?this.ma():[],o=0===this.Pa.size&&this.current&&!r?1:0,l=o!==this.ha;return(this.ha=o,0!==s.length||l)?{snapshot:new rk(this.query,e.Ta,i,s,e.mutatedKeys,0===o,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new rS,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(e=>this.la=this.la.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.la=this.la.delete(e)),this.current=e.current)}ma(){if(!this.current)return[];let e=this.Pa;this.Pa=tu(),this.Ta.forEach(e=>{this.ga(e.key)&&(this.Pa=this.Pa.add(e.key))});let t=[];return e.forEach(e=>{this.Pa.has(e)||t.push(new rV(e))}),this.Pa.forEach(n=>{e.has(n)||t.push(new rF(n))}),t}pa(e){this.la=e.ls,this.Pa=tu();let t=this.da(e.documents);return this.applyChanges(t,!0)}ya(){return rk.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,0===this.ha,this.hasCachedResults)}}class rO{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class rU{constructor(e){this.key=e,this.wa=!1}}class rq{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Sa={},this.ba=new tt(e=>e6(e),e8),this.Da=new Map,this.Ca=new Set,this.va=new ee($.comparator),this.Fa=new Map,this.Ma=new nC,this.xa={},this.Oa=new Map,this.Na=nw.Nn(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return!0===this.La}}async function rB(e,t,n=!0){let r;let i=r5(e),s=i.ba.get(t);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.ya()):r=await r$(i,t,n,!0),r}async function rz(e,t){let n=r5(e);await r$(n,t,!0,!1)}async function r$(e,t,n,r){let i;let s=await function(e,t){let n=e;return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return n.qr.getTargetData(e,t).next(i=>i?(r=i,j.resolve(r)):n.qr.allocateTargetId(e).next(i=>(r=new nd(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.qr.addTargetData(e,r).next(()=>r))))}).then(e=>{let r=n.ts.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ts=n.ts.insert(e.targetId,e),n.ns.set(t,e.targetId)),e})}(e.localStore,e3(t)),a=s.targetId,o=n?e.sharedClientState.addLocalQueryTarget(a):"not-current";return r&&(i=await rK(e,t,a,"current"===o,s.resumeToken)),e.isPrimaryClient&&n&&n5(e.remoteStore,s),i}async function rK(e,t,n,r,i){e.Ba=(t,n,r)=>(async function(e,t,n,r){let i=t.view.da(n);i.Zi&&(i=await nq(e.localStore,t.query,!1).then(({documents:e})=>t.view.da(e,i)));let s=r&&r.targetChanges.get(t.targetId),a=r&&null!=r.targetMismatches.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s,a);return r4(e,t.targetId,o.fa),o.snapshot})(e,t,n,r);let s=await nq(e.localStore,t,!0),a=new rP(t,s.ls),o=a.da(s.documents),l=tH.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=a.applyChanges(o,e.isPrimaryClient,l);r4(e,n,u.fa);let h=new rO(t,n,a);return e.ba.set(t,h),e.Da.has(n)?e.Da.get(n).push(t):e.Da.set(n,[t]),u.snapshot}async function rG(e,t,n){let r=e.ba.get(t),i=e.Da.get(r.targetId);if(i.length>1)return e.Da.set(r.targetId,i.filter(e=>!e8(e,t))),void e.ba.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await nU(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),n&&n7(e.remoteStore,r.targetId),r1(e,r.targetId)}).catch(Q)):(r1(e,r.targetId),await nU(e.localStore,r.targetId,!0))}async function rQ(e,t){let n=e.ba.get(t),r=e.Da.get(n.targetId);e.isPrimaryClient&&1===r.length&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),n7(e.remoteStore,n.targetId))}async function rj(e,t,n){let r=function(e){let t=e;return t.remoteStore.remoteSyncer.applySuccessfulWrite=rX.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=rJ.bind(null,t),t}(e);try{var i,s;let a;let o=await function(e,t){let n,r;let i=P.now(),s=t.reduce((e,t)=>e.add(t.key),tu());return e.persistence.runTransaction("Locally write mutations","readwrite",a=>{let o=tn,l=tu();return e.ss.getEntries(a,s).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(a,o)).next(r=>{n=r;let s=[];for(let o of t){let l=function(e,t){let n=null;for(let r of e.fieldTransforms){let i=t.data.field(r.field),s=tm(r.transform,i||null);null!=s&&(null===n&&(n=ex.empty()),n.set(r.field,s))}return n||null}(o,n.get(o.key).overlayedDocument);null!=l&&s.push(new tx(o.key,l,function e(t){let n=[];return J(t.fields,(t,r)=>{let i=new z([t]);if(eN(r)){let s=e(r.mapValue).fields;if(0===s.length)n.push(i);else for(let a of s)n.push(i.child(a))}else n.push(i)}),new es(n)}(l.value.mapValue),tC.exists(!0)))}return e.mutationQueue.addMutationBatch(a,i,s,t)}).next(t=>{r=t;let i=t.applyToLocalDocumentSet(n,l);return e.documentOverlayCache.saveOverlays(a,t.batchId,i)})}).then(()=>({batchId:r.batchId,changes:ts(n)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(o.batchId),i=r,s=o.batchId,(a=i.xa[i.currentUser.toKey()])||(a=new ee(F)),a=a.insert(s,n),i.xa[i.currentUser.toKey()]=a,await r9(r,o.changes),await rc(r.remoteStore)}catch(u){let l=rI(u,"Failed to persist write");n.reject(l)}}async function rH(e,t){try{let n=await function(e,t){let n=e,r=t.snapshotVersion,i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{var s;let a,o;let l=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;let u=[];t.targetChanges.forEach((s,a)=>{var o;let l=i.get(a);if(!l)return;u.push(n.qr.removeMatchingKeys(e,s.removedDocuments,a).next(()=>n.qr.addMatchingKeys(e,s.addedDocuments,a)));let h=l.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?h=h.withResumeToken(eo.EMPTY_BYTE_STRING,O.min()).withLastLimboFreeSnapshotVersion(O.min()):s.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(s.resumeToken,r)),i=i.insert(a,h),o=h,(0===l.resumeToken.approximateByteSize()||o.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&u.push(n.qr.updateTargetData(e,h))});let h=tn,c=tu();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&u.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),u.push((s=t.documentUpdates,a=tu(),o=tu(),s.forEach(e=>a=a.add(e)),l.getEntries(e,a).next(e=>{let t=tn;return s.forEach((n,r)=>{let i=e.get(n);r.isFoundDocument()!==i.isFoundDocument()&&(o=o.add(n)),r.isNoDocument()&&r.version.isEqual(O.min())?(l.removeEntry(n,r.readTime),t=t.insert(n,r)):!i.isValidDocument()||r.version.compareTo(i.version)>0||0===r.version.compareTo(i.version)&&i.hasPendingWrites?(l.addEntry(r),t=t.insert(n,r)):w("LocalStore","Ignoring outdated watch update for ",n,". Current version:",i.version," Watch version:",r.version)}),{us:t,cs:o}})).next(e=>{h=e.us,c=e.cs})),!r.isEqual(O.min())){let d=n.qr.getLastRemoteSnapshotVersion(e).next(t=>n.qr.setTargetsMetadata(e,e.currentSequenceNumber,r));u.push(d)}return j.waitFor(u).next(()=>l.apply(e)).next(()=>n.localDocuments.getLocalViewOfDocuments(e,h,c)).next(()=>h)}).then(e=>(n.ts=i,e))}(e.localStore,t);t.targetChanges.forEach((t,n)=>{let r=e.Fa.get(n);r&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||T(),t.addedDocuments.size>0?r.wa=!0:t.modifiedDocuments.size>0?r.wa||T():t.removedDocuments.size>0&&(r.wa||T(),r.wa=!1))}),await r9(e,n,t)}catch(r){await Q(r)}}function rW(e,t,n){let r=e;if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){let i=[];r.ba.forEach((e,n)=>{let r=n.view.j_(t);r.snapshot&&i.push(r.snapshot)}),function(e,t){let n=e;n.onlineState=t;let r=!1;n.queries.forEach((e,n)=>{for(let i of n.U_)i.j_(t)&&(r=!0)}),r&&rL(n)}(r.eventManager,t),i.length&&r.Sa.l_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function rY(e,t,n){let r=e;r.sharedClientState.updateQueryState(t,"rejected",n);let i=r.Fa.get(t),s=i&&i.key;if(s){let a=new ee($.comparator);a=a.insert(s,eR.newNoDocument(s,O.min()));let o=tu().add(s),l=new tj(O.min(),new Map,new ee(F),a,o);await rH(r,l),r.va=r.va.remove(s),r.Fa.delete(t),r3(r)}else await nU(r.localStore,t,!1).then(()=>r1(r,t,n)).catch(Q)}async function rX(e,t){var n;let r=t.batch.batchId;try{let i=await (n=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let r=t.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,r){let i=n.batch,s=i.keys(),a=j.resolve();return s.forEach(e=>{a=a.next(()=>r.getEntry(t,e)).next(t=>{let s=n.docVersions.get(e);null!==s||T(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=tu();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))});r0(e,r,null),rZ(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await r9(e,i)}catch(s){await Q(s)}}async function rJ(e,t,n){var r;try{let i=await (r=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return r.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||T(),n=t.keys(),r.mutationQueue.removeMutationBatch(e,t))).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n)).next(()=>r.localDocuments.getDocuments(e,n))});r0(e,t,n),rZ(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await r9(e,i)}catch(s){await Q(s)}}function rZ(e,t){(e.Oa.get(t)||[]).forEach(e=>{e.resolve()}),e.Oa.delete(t)}function r0(e,t,n){let r=e,i=r.xa[r.currentUser.toKey()];if(i){let s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.xa[r.currentUser.toKey()]=i}}function r1(e,t,n=null){for(let r of(e.sharedClientState.removeLocalQueryTarget(t),e.Da.get(t)))e.ba.delete(r),n&&e.Sa.ka(r,n);e.Da.delete(t),e.isPrimaryClient&&e.Ma.Rr(t).forEach(t=>{e.Ma.containsKey(t)||r2(e,t)})}function r2(e,t){e.Ca.delete(t.path.canonicalString());let n=e.va.get(t);null!==n&&(n7(e.remoteStore,n),e.va=e.va.remove(t),e.Fa.delete(n),r3(e))}function r4(e,t,n){for(let r of n)r instanceof rF?(e.Ma.addReference(r.key,t),function(e,t){let n=t.key,r=n.path.canonicalString();e.va.get(n)||e.Ca.has(r)||(w("SyncEngine","New document in limbo: "+n),e.Ca.add(r),r3(e))}(e,r)):r instanceof rV?(w("SyncEngine","Document no longer in limbo: "+r.key),e.Ma.removeReference(r.key,t),e.Ma.containsKey(r.key)||r2(e,r.key)):T()}function r3(e){for(;e.Ca.size>0&&e.va.size<e.maxConcurrentLimboResolutions;){var t;let n=e.Ca.values().next().value;e.Ca.delete(n);let r=new $(q.fromString(n)),i=e.Na.next();e.Fa.set(i,new rU(r)),e.va=e.va.insert(r,i),n5(e.remoteStore,new nd(e3((t=r.path,new e1(t))),i,"TargetPurposeLimboResolution",W.oe))}}async function r9(e,t,n){let r=[],i=[],s=[];e.ba.isEmpty()||(e.ba.forEach((a,o)=>{s.push(e.Ba(o,t,n).then(t=>{if((t||n)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(o.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);let s=nL.Qi(o.targetId,t);i.push(s)}}))}),await Promise.all(s),e.Sa.l_(r),await async function(e,t){let n=e;try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>j.forEach(t,t=>j.forEach(t.ki,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>j.forEach(t.qi,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(r){if(!H(r))throw r;w("LocalStore","Failed to update sequence numbers: "+r)}for(let i of t){let s=i.targetId;if(!i.fromCache){let a=n.ts.get(s),o=a.snapshotVersion,l=a.withLastLimboFreeSnapshotVersion(o);n.ts=n.ts.insert(s,l)}}}(e.localStore,i))}async function r8(e,t){let n=e;if(!n.currentUser.isEqual(t)){w("SyncEngine","User change. New user:",t.toKey());let r=await nP(n.localStore,t);n.currentUser=t,n.Oa.forEach(e=>{e.forEach(e=>{e.reject(new C(I.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),n.Oa.clear(),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await r9(n,r._s)}}function r6(e,t){let n=e.Fa.get(t);if(n&&n.wa)return tu().add(n.key);{let r=tu(),i=e.Da.get(t);if(!i)return r;for(let s of i){let a=e.ba.get(s);r=r.unionWith(a.view.Ea)}return r}}function r5(e){let t=e;return t.remoteStore.remoteSyncer.applyRemoteEvent=rH.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=r6.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=rY.bind(null,t),t.Sa.l_=rx.bind(null,t.eventManager),t.Sa.ka=rR.bind(null,t.eventManager),t}class r7{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=nJ(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){var t,n,r,i;return t=this.persistence,n=new nF,r=e.initialUser,i=this.serializer,new nV(t,n,r,i)}createPersistence(e){return new nb(nR.jr,this.serializer)}createSharedClientState(e){return new nz}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ie{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>rW(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=r8.bind(null,this.syncEngine),await rv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new rN}createDatastore(e){var t,n,r;let i=nJ(e.databaseInfo.databaseId),s=(t=e.databaseInfo,new nY(t));return n=e.authCredentials,r=e.appCheckCredentials,new n4(n,r,s,i)}createRemoteStore(e){var t,n,r,i,s;return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>rW(this.syncEngine,e,0),s=nK.D()?new nK:new n$,new n9(t,n,r,i,s)}createSyncEngine(e,t){return function(e,t,n,r,i,s,a){let o=new rq(e,t,n,r,i,s);return a&&(o.La=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(e){w("RemoteStore","RemoteStore shutting down."),e.M_.add(5),await n6(e),e.O_.shutdown(),e.N_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):v("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=m.UNAUTHENTICATED,this.clientId=M.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{w("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(w("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new C(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new S;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=rI(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function ii(e,t){e.asyncQueue.verifyOperationInProgress(),w("FirestoreClient","Initializing OfflineComponentProvider");let n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await nP(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function is(e,t){e.asyncQueue.verifyOperationInProgress();let n=await ia(e);w("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>rw(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>rw(t.remoteStore,n)),e._onlineComponents=t}async function ia(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){w("FirestoreClient","Using user provided OfflineComponentProvider");try{await ii(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;_("Error using user provided cache. Falling back to memory cache: "+t),await ii(e,new r7)}}else w("FirestoreClient","Using default OfflineComponentProvider"),await ii(e,new r7)}return e._offlineComponents}async function io(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(w("FirestoreClient","Using user provided OnlineComponentProvider"),await is(e,e._uninitializedComponentsProvider._online)):(w("FirestoreClient","Using default OnlineComponentProvider"),await is(e,new ie))),e._onlineComponents}async function il(e){let t=await io(e),n=t.eventManager;return n.onListen=rB.bind(null,t.syncEngine),n.onUnlisten=rG.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=rz.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=rQ.bind(null,t.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ih=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(e,t,n){if(!n)throw new C(I.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function id(e){if(!$.isDocumentKey(e))throw new C(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function im(e){if($.isDocumentKey(e))throw new C(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ig(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":T()}function ip(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new C(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=ig(e);throw new C(I.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new C(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new C(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new C(I.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=iu(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new C(I.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new C(I.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new C(I.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class iw{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new iy({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new C(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new C(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new iy(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new A;switch(e.type){case"firstParty":return new x(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new C(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=ih.get(e);t&&(w("ComponentProvider","Removing Datastore"),ih.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new iv(this.firestore,e,this._query)}}class i_{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new iE(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new i_(this.firestore,e,this._key)}}class iE extends iv{constructor(e,t,n){super(e,t,new e1(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new i_(this.firestore,null,new $(e))}withConverter(e){return new iE(this.firestore,e,this._path)}}function iT(e,t,...n){if(e=(0,h.m9)(e),ic("collection","path",t),e instanceof iw){let r=q.fromString(t,...n);return im(r),new iE(e,null,r)}{if(!(e instanceof i_||e instanceof iE))throw new C(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let i=e._path.child(q.fromString(t,...n));return im(i),new iE(e.firestore,null,i)}}function iI(e,t,...n){if(e=(0,h.m9)(e),1==arguments.length&&(t=M.newId()),ic("doc","path",t),e instanceof iw){let r=q.fromString(t,...n);return id(r),new i_(e,null,new $(r))}{if(!(e instanceof i_||e instanceof iE))throw new C(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let i=e._path.child(q.fromString(t,...n));return id(i),new i_(e.firestore,e instanceof iE?e.converter:null,new $(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Jo=new nZ(this,"async_queue_retry"),this.hu=()=>{let e=nX();e&&w("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Jo.Uo()};let e=nX();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;let t=nX();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});let t=new S;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(0!==this.su.length){try{await this.su[0](),this.su.shift(),this.Jo.reset()}catch(e){if(!H(e))throw e;w("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Jo.Ko(()=>this.Tu())}}Iu(e){let t=this.iu.then(()=>(this.uu=!0,e().catch(e=>{let t;this.au=e,this.uu=!1;let n=(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t);throw v("INTERNAL UNHANDLED ERROR: ",n),e}).then(e=>(this.uu=!1,e))));return this.iu=t,t}enqueueAfterDelay(e,t,n){this.Pu(),this.lu.indexOf(e)>-1&&(t=0);let r=rT.createAndSchedule(this,e,t,n,e=>this.Eu(e));return this._u.push(r),r}Pu(){this.au&&T()}verifyOperationInProgress(){}async du(){let e;do await (e=this.iu);while(e!==this.iu)}Au(e){for(let t of this._u)if(t.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{for(let t of(this._u.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this._u))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){let t=this._u.indexOf(e);this._u.splice(t,1)}}function iS(e){return function(e,t){if("object"!=typeof e||null===e)return!1;for(let n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])}class ik extends iw{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new iC,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||iD(this),this._firestoreClient.terminate()}}function iA(e,t){let n="object"==typeof e?e:(0,o.Mq)(),r=(0,o.qX)(n,"firestore").getImmediate({identifier:"string"==typeof e?e:t||"(default)"});if(!r._initialized){let i=(0,h.P0)("firestore");i&&function(e,t,n,r={}){var i;let s=(e=ip(e,iw))._getSettings(),a=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==a&&_("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let o,l;if("string"==typeof r.mockUserToken)o=r.mockUserToken,l=m.MOCK_USER;else{o=(0,h.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new C(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new m(u)}e._authCredentials=new N(new k(o,l))}}(r,...i)}return r}function iN(e){return e._firestoreClient||iD(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function iD(e){var t,n,r,i,s,a;let o=e._freezeSettings(),l=(i=e._databaseId,s=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",a=e._persistenceKey,new eg(i,s,a,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,iu(o.experimentalLongPollingOptions),o.useFetchStreams));e._firestoreClient=new ir(e._authCredentials,e._appCheckCredentials,e._queue,l),(null===(n=o.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=o.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:o.localCache.kind,_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ib(eo.fromBase64String(e))}catch(t){throw new C(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ib(eo.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new C(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new z(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iL{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new C(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new C(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return F(this._lat,e._lat)||F(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iM=/^__.*__$/;class iF{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new tx(e,this.data,this.fieldMask,t,this.fieldTransforms):new tb(e,this.data,t,this.fieldTransforms)}}class iV{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new tx(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function iP(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw T()}}class iO{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.mu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new iO(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.gu({path:n,yu:!1});return r.wu(e),r}Su(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.gu({path:n,yu:!1});return r.mu(),r}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return iY(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(0===e.length)throw this.Du("Document fields must not be empty");if(iP(this.fu)&&iM.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class iU{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||nJ(e)}Fu(e,t,n,r=!1){return new iO({fu:e,methodName:t,vu:n,path:z.emptyPath(),yu:!1,Cu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function iq(e){let t=e._freezeSettings(),n=nJ(e._databaseId);return new iU(e._databaseId,!!t.ignoreUndefinedProperties,n)}function iB(e,t,n,r,i,s={}){let a,o;let l=e.Fu(s.merge||s.mergeFields?2:0,t,n,i);iQ("Data must be an object, but it was:",l,r);let u=iK(r,l);if(s.merge)a=new es(l.fieldMask),o=l.fieldTransforms;else if(s.mergeFields){let h=[];for(let c of s.mergeFields){let d=ij(t,c,n);if(!l.contains(d))throw new C(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);iX(h,d)||h.push(d)}a=new es(h),o=l.fieldTransforms.filter(e=>a.covers(e.field))}else a=null,o=l.fieldTransforms;return new iF(new ex(u),a,o)}class iz extends iR{_toFieldTransform(e){if(2!==e.fu)throw 1===e.fu?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof iz}}function i$(e,t){if(iG(e=(0,h.m9)(e)))return iQ("Unsupported field value:",t,e),iK(e,t);if(e instanceof iR)return function(e,t){if(!iP(t.fu))throw t.Du(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Du(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.yu&&4!==t.fu)throw t.Du("Nested arrays are not supported");return function(e,t){let n=[],r=0;for(let i of e){let s=i$(i,t.bu(r));null==s&&(s={nullValue:"NULL_VALUE"}),n.push(s),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,h.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e){var n,r,i;return n=t.serializer,"number"==typeof(i=r=e)&&Number.isInteger(i)&&!Y(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER?td(r):tc(n,r)}if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let s=P.fromDate(e);return{timestampValue:t6(t.serializer,s)}}if(e instanceof P){let a=new P(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:t6(t.serializer,a)}}if(e instanceof iL)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof ib)return{bytesValue:t5(t.serializer,e._byteString)};if(e instanceof i_){let o=t.databaseId,l=e.firestore._databaseId;if(!l.isEqual(o))throw t.Du(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ne(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Du(`Unsupported field value: ${ig(e)}`)}(e,t)}function iK(e,t){let n={};return Z(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):J(e,(e,r)=>{let i=i$(r,t.pu(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function iG(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof P||e instanceof iL||e instanceof ib||e instanceof i_||e instanceof iR)}function iQ(e,t,n){if(!iG(n)||!("object"==typeof n&&null!==n&&(Object.getPrototypeOf(n)===Object.prototype||null===Object.getPrototypeOf(n)))){let r=ig(n);throw"an object"===r?t.Du(e+" a custom object"):t.Du(e+" "+r)}}function ij(e,t,n){if((t=(0,h.m9)(t))instanceof ix)return t._internalPath;if("string"==typeof t)return iW(e,t);throw iY("Field path arguments must be of type string or ",e,!1,void 0,n)}let iH=RegExp("[~\\*/\\[\\]]");function iW(e,t,n){if(t.search(iH)>=0)throw iY(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ix(...t.split("."))._internalPath}catch(r){throw iY(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function iY(e,t,n,r,i){let s=r&&!r.isEmpty(),a=void 0!==i,o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new C(I.INVALID_ARGUMENT,o+e+l)}function iX(e,t){return e.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iJ{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new i_(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new iZ(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(i0("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class iZ extends iJ{data(){return super.data()}}function i0(e,t){return"string"==typeof t?iW(e,t):t instanceof ix?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i1(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new C(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class i2{convertValue(e,t="none"){switch(ew(e)){case 0:return null;case 1:return e.booleanValue;case 2:return eh(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ec(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw T()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let n={};return J(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new iL(eh(e.latitude),eh(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=ef(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(em(e));default:return null}}convertTimestamp(e){let t=eu(e);return new P(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=q.fromString(e);nc(n)||T();let r=new ep(n.get(1),n.get(3)),i=new $(n.popFirst(5));return r.isEqual(t)||v(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i4(e,t,n){return e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i3{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class i9 extends iJ{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new i8(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let n=this._document.data.field(i0("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class i8 extends i9{data(e={}){return super.data(e)}}class i6{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new i3(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new i8(this._firestore,this._userDataWriter,n.key,n,new i3(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new C(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let n=0;return e._snapshot.docChanges.map(t=>{let r=new i8(e._firestore,e._userDataWriter,t.doc.key,t.doc,new i3(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);return t.doc,{type:"added",doc:r,oldIndex:-1,newIndex:n++}})}{let r=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let n=new i8(e._firestore,e._userDataWriter,t.doc.key,t.doc,new i3(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=r.indexOf(t.doc.key),r=r.delete(t.doc.key)),1!==t.type&&(s=(r=r.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return T()}}(t.type),doc:n,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}class i5 extends i2{constructor(e){super(),this.firestore=e}convertBytes(e){return new ib(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new i_(this.firestore,null,t)}}function i7(e){e=ip(e,iv);let t=ip(e.firestore,ik),n=iN(t),r=new i5(t);return i1(e._query),(function(e,t,n={}){let r=new S;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new it({next:n=>{t.enqueueAndForget(()=>rb(e,a)),n.fromCache&&"server"===r.source?i.reject(new C(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),a=new rM(n,s,{includeMetadataChanges:!0,ra:!0});return rD(e,a)})(await il(e),e.asyncQueue,t,n,r)),r.promise})(n,e._query).then(n=>new i6(t,r,e,n))}function se(e,t,n){e=ip(e,i_);let r=ip(e.firestore,ik),i=i4(e.converter,t,n);return si(r,[iB(iq(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,tC.none())])}function st(e,t,n,...r){let i;e=ip(e,i_);let s=ip(e.firestore,ik),a=iq(s);return i="string"==typeof(t=(0,h.m9)(t))||t instanceof ix?function(e,t,n,r,i,s){let a=e.Fu(1,t,n),o=[ij(t,r,n)],l=[i];if(s.length%2!=0)throw new C(I.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let u=0;u<s.length;u+=2)o.push(ij(t,s[u])),l.push(s[u+1]);let c=[],d=ex.empty();for(let f=o.length-1;f>=0;--f)if(!iX(c,o[f])){let m=o[f],g=l[f];g=(0,h.m9)(g);let p=a.Su(m);if(g instanceof iz)c.push(m);else{let y=i$(g,p);null!=y&&(c.push(m),d.set(m,y))}}let w=new es(c);return new iV(d,w,a.fieldTransforms)}(a,"updateDoc",e._key,t,n,r):function(e,t,n,r){let i=e.Fu(1,t,n);iQ("Data must be an object, but it was:",i,r);let s=[],a=ex.empty();J(r,(e,r)=>{let o=iW(t,e,n);r=(0,h.m9)(r);let l=i.Su(o);if(r instanceof iz)s.push(o);else{let u=i$(r,l);null!=u&&(s.push(o),a.set(o,u))}});let o=new es(s);return new iV(a,o,i.fieldTransforms)}(a,"updateDoc",e._key,t),si(s,[i.toMutation(e._key,tC.exists(!0))])}function sn(e,t){let n=ip(e.firestore,ik),r=iI(e),i=i4(e.converter,t);return si(n,[iB(iq(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,tC.exists(!1))]).then(()=>r)}function sr(e,...t){var n,r,i,s;let a,o,l;e=(0,h.m9)(e);let u={includeMetadataChanges:!1,source:"default"},c=0;"object"!=typeof t[0]||iS(t[c])||(u=t[c],c++);let d={includeMetadataChanges:u.includeMetadataChanges,source:u.source};if(iS(t[c])){let f=t[c];t[c]=null===(n=f.next)||void 0===n?void 0:n.bind(f),t[c+1]=null===(r=f.error)||void 0===r?void 0:r.bind(f),t[c+2]=null===(i=f.complete)||void 0===i?void 0:i.bind(f)}if(e instanceof i_)o=ip(e.firestore,ik),s=e._key.path,l=new e1(s),a={next:n=>{t[c]&&t[c](function(e,t,n){let r=n.docs.get(t._key),i=new i5(e);return new i9(e,i,t._key,r,new i3(n.hasPendingWrites,n.fromCache),t.converter)}(o,e,n))},error:t[c+1],complete:t[c+2]};else{let m=ip(e,iv);o=ip(m.firestore,ik),l=m._query;let g=new i5(o);a={next:e=>{t[c]&&t[c](new i6(o,g,m,e))},error:t[c+1],complete:t[c+2]},i1(e._query)}return function(e,t,n,r){let i=new it(r),s=new rM(t,i,n);return e.asyncQueue.enqueueAndForget(async()=>rD(await il(e),s)),()=>{i.$a(),e.asyncQueue.enqueueAndForget(async()=>rb(await il(e),s))}}(iN(o),l,d,a)}function si(e,t){return function(e,t){let n=new S;return e.asyncQueue.enqueueAndForget(async()=>rj(await io(e).then(e=>e.syncEngine),t,n)),n.promise}(iN(e),t)}new WeakMap,function(e=!0){g=o.Jn,(0,o.Xd)(new l.wA("firestore",(t,{instanceIdentifier:n,options:r})=>{let i=t.getProvider("app").getImmediate(),s=new ik(new D(t.getProvider("auth-internal")),new L(t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new C(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ep(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),(0,o.KN)(f,"4.6.1",void 0),(0,o.KN)(f,"4.6.1","esm2017")}()}}]);