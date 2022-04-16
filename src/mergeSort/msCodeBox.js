import React, { Component } from 'react';
import '../aCss/app.css';

class MsCodeBox extends Component {
    render(){
        return (
            <div className="CodeBox2" id="scrollbar">
                <code className="code">void merge(int a[], int start, int mid, int end)</code>
                <code className="code">&#123;</code>
                <code className="code">&nbsp;&nbsp;int i = start;</code>
                <code className="code">&nbsp;&nbsp;int j = mid + 1;</code>
                <code className="code">&nbsp;&nbsp;int k = start;</code>
                <code className="code">&nbsp;&nbsp;int aC[100];</code>
                <code className="code">&nbsp;&nbsp;for(int i = 0; i &lt; end; ++i)&#123;</code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;aC[i] = a[i];</code>
                <code className="code">&nbsp;&nbsp;&#125;</code>
                <code className="code">&nbsp;&nbsp;while(i &lt;= mid && j &lt;= end)&#123;</code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if(aC[i] &lt;= aC[j])</code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a[k++] = aC[i++];</code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else</code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a[k++] = aC[j++];</code>
                <code className="code">&nbsp;&nbsp;while(i &lt;= mid)&#123;</code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a[k++] = aC[i++];</code>
                <code className="code">&nbsp;&nbsp;&#125;</code>
                <code className="code">&nbsp;&nbsp;while(j &lt;= end)&#123;</code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a[k++] = aC[j++];</code>
                <code className="code">&nbsp;&nbsp;&#125;</code>
                <code className="code">&#125;</code>
                <code className="code">void mergeSort(int a[], int start, int end)&#123;</code>
                <code className="code">&nbsp;&nbsp;if (start == end) return; </code>
                <code className="code">&nbsp;&nbsp;int mid = (start + end)/2;</code>
                <code className="code">&nbsp;&nbsp;mergeSort(a, start, mid); </code>
                <code className="code">&nbsp;&nbsp;mergeSort(a, mid + 1, end); </code>
                <code className="code">&nbsp;&nbsp;merge(a, start, mid, end); </code>
                <code className="code">&#125;</code>
            </div>
        );
    }
}

export default MsCodeBox;