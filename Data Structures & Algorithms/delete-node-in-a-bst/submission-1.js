/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} key
     * @return {TreeNode}
     */
    findMin(root) {
        while(root.left) {
            root = root.left;
        }
        return root;
    }
    findNode(root, key) {
        let parent = null;
        let cur = root;
        while (cur) {
            const tmp = cur;
            if (cur.val < key) {
                cur = cur.right;
            } else if (key < cur.val) {
                cur = cur.left;
            } else {
                return [parent, cur];
            }
            parent = tmp;
        }
        return [parent, cur];
    }
    deleteNode(root, key) {
        // find node
        const [parent, cur] = this.findNode(root, key);
        // if node not found, just return root (0)
        if (!cur) {
            return root;
        }
        // if node found, but has at most one child (1)
        if (!cur.left || !cur.right) {
            let nodeToBeLinked = null;
            if (!cur.left) {
                // if no parent, return that child (1.1)
                if (!parent) return cur.right;
                nodeToBeLinked = cur.right
            } else {
                // if no parent, return that child (1.1)
                if (!parent) return cur.left;
                nodeToBeLinked = cur.left;
            }
            // attach that child to the parent and return root (1.2)
            // is there a ternary the other way around? 
            // (i.e. different targets depending on the condition)
            if (parent.left === cur) {
                parent.left = nodeToBeLinked;
            } else {
                parent.right = nodeToBeLinked;
            }
            return root;
        }
        // otherwise (2)
        // find closest by value, e.g. min in the right subtree
        // (or we could use max in the left subtree)
        const min = this.findMin(cur.right);
        this.deleteNode(cur, min.val);
        cur.val = min.val;
        return root;
    }
}
