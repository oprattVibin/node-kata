// TODO: Currently a max heap
// Add capabilities to convert it to either min or max heap
class Heap
{
  int[] heap;
  int sz = 0;
  
  public Heap(int[] array)
  {
    sz = array.Length;
    // compute the closest power of 2 for the array
    var n = (int) Math.Ceiling(Math.Log(sz, 2));
    
    // use a binary size to have a balanced tree
    heap = new int[1 << n];
    for (int i = 0; i < sz; i++)
      heap[i] = array[i];
    for (int i = sz - 1; i >= 0; i--)
      Heapify(i);
  }
  
  void Heapify(int i)
  {
    int j = MaxKids(i);
    if (j != -1 && j < sz)
    {
      swap(i, j);
      Heapify(j);
    }
  }
  
  int Left(int i)
  {
    int left = 2 * i + 1;
    if (left < sz)
      return heap[left];
    return -1; // throw ArrayOutOfBoundException
  }
  
  int Right(int i)
  {
    int right = 2 * i + 2;
    if (right < sz)
      return heap[right];
    return -1; // throw ArrayOutOfBoundException
  }
  
  public void Insert(int value)
  {
    if (sz < heap.Length)
      heap[sz] = value;
    Bubble(sz++);
  }
  
  void Bubble(int i)
  {
    if (i == 0) return;
    int parent = i / 2;
    if (heap[i] > heap[parent]) {
      swap(i, parent);
      Bubble(parent);
    }
  }
  
  bool HasKids(int i)
  {
    int left = 2 * i + 1;
    int right = 2 * i + 2;
    
    return (right < sz) || (left < sz);
  }
  
  int MaxKids(int i)
  {
    int index = -1;
    int max = heap[i];
    if (HasKids(i))
    {
      int left = Left(i);
      if (left > max) {
        index = 2 * i + 1;
        max = left;
      }
      int right = Right(i);
      if (right > max) {
        index = 2 * i + 2;
      }
    }
    return index;
  }
  
  void swap(int a, int b)
  {
    int temp = heap[a];
    heap[a] = heap[b];
    heap[b] = temp;
  }
  
  int GetMax()
  {
    if (sz > 0)
      return heap[0];
    return -1; // throw ArrayOutofBoundException
  }
  
  int Find(int value)
  {
    int index = -1;
    for (int i = 0; i < sz; i++)
      if (heap[i] == value)
        return i;
    return index;
  }
  
  public void Delete(int value)
  {
    int i = Find(value);
    
    if (i != -1 && i < sz)
    {
      swap(i, sz - 1);
      sz--;
      Heapify(i);
    }
  }
  
  public void Sort()
  {
    int restoreSz = sz;
    for (sz = sz - 1; sz > 0; sz--)
    {
      swap(0, sz);
      Heapify(0);
    }
    sz = restoreSz;
  }
  
  public void Print()
  {
    for (int i = 0; i < sz; i++)
    {
      Console.Write(heap[i] + " ");
    }
    Console.WriteLine();
  }
  
  public void Merge(int[] array)
  {
    for (int i = 0; i < array.Length; i++)
      heap[sz++] = array[i];
    for (int i = sz - 1; i >= 0; i--)
      Heapify(i);
  }
}
