class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const adj = new Map(); // node to deps
        for (let i=0;i<numCourses;i++)
            adj.set(i,[]);
        for (const p of prerequisites) {
            const deps = adj.get(p[0]);
            deps.push(p[1]);
        }
        const visited = new Set();
        function dfs(c) {
            if (visited.has(c)) return false; // loop detected
            const nbs = adj.get(c);
            if (nbs.length === 0) return true; // no (unproccessed) children
            visited.add(c);
            for (const nb of nbs)
                if (!dfs(nb)) return false;
            visited.delete(c);
            nbs.length = 0;
            return true;
        }
        for (const [c, deps] of adj)
            if (!dfs(c)) return false;
        return true;
    }
}
