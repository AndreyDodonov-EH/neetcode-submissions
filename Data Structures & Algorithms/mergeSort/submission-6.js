class Solution {
    merge(A, B, l, m, r) {
        let i=l;
        let j=m;
        let k=l;
        while (i<m && j<r) {
            B[k++] = (A[i].key <= A[j].key) ? A[i++] : A[j++];
        }
        while (i<m) {
            B[k++] = A[i++];
        }
        while (j<r) {
            B[k++] = A[j++];
        }
    }

    mergeSort(A, B=null, l=0, r=A.length) {
        if (B===null) {
            B = new Array(A.length);
            for (let i=0;i<A.length;i++) {
                B[i] = A[i];
            }
        }
        if (r-l<=1) return B;
        const m = l + Math.floor((r-l)/2);
        this.mergeSort(B,A,l,m);
        this.mergeSort(B,A,m,r);
        this.merge(A, B, l, m, r);
        return B;
    }
}
