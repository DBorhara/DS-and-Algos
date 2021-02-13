class QueueStacked {
  constructor() {
    this.first = [];
    this.last = [];
  }
  enqueue(value) {
    const length = this.first.length; // the length of this.first array
    for (let index = 0; index < length; index++) {
      // Iterating through this.first to get it in reverse order for the this.last array
      this.last.push(this.first.pop());
    }
    // Putting the argument value on the end of this.last array
    this.last.push(value);
    return this;
  }

  dequeue() {
    const length = this.last.length;
    for (let index = 0; index < length; index++) {
      // Iterating through to get it back in order for the first array(this.first)
      this.first.push(this.last.pop);
    }
    // By popping it off this.first we are dequeueing
    this.first.pop();
    return this;
  }
  peek() {
    // If this.last has a length greater than 0 we return the first element in the this.last array
    if (this.last.length > 0) {
      return this.last[0];
    }
    // Otherwise we return the last item in the this.first array
    return this.first[this.first.length - 1];
  }
}
