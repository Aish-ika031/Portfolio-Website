class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        
        def binary_search(nums,target,status):

            pos=-1

            low,high=0,len(nums)-1

            while low<=high:

                mid=(low+high)//2

                if nums[mid]==target:

                    pos=mid

                    if status:

                        high=mid-1

                    else:

                        low=mid+1

                elif nums[mid]<target:

                    low=mid+1

                else:

                    high=mid-1

            return pos

        return [binary_search(nums,target,True),binary_search(nums,target,False)]
