<template>
  <div class="tooltip-base-box">
    <div class="row center">
      <me-tooltip content="Top Left prompts info" placement="top-start">
        <me-button>top-start</me-button>
      </me-tooltip>
      <me-tooltip content="Top Center prompts info" placement="top">
        <me-button>top</me-button>
      </me-tooltip>
      <me-tooltip content="Top Right prompts info" placement="top-end">
        <me-button>top-end</me-button>
      </me-tooltip>
    </div>
    <div class="row">
      <me-tooltip content="Left Top prompts info" placement="left-start">
        <me-button>left-start</me-button>
      </me-tooltip>
      <me-tooltip content="Right Top prompts info" placement="right-start">
        <me-button>right-start</me-button>
      </me-tooltip>
    </div>
    <div class="row">
      <me-tooltip content="Left Center prompts info" placement="left">
        <me-button class="mt-3 mb-3">left</me-button>
      </me-tooltip>
      <me-tooltip content="Right Center prompts info" placement="right">
        <me-button>right</me-button>
      </me-tooltip>
    </div>
    <div class="row">
      <me-tooltip content="Left Bottom prompts info" placement="left-end">
        <me-button>left-end</me-button>
      </me-tooltip>
      <me-tooltip content="Right Bottom prompts info" placement="right-end">
        <me-button>right-end</me-button>
      </me-tooltip>
    </div>
    <div class="row center">
      <me-tooltip content="Bottom Left prompts info" placement="bottom-start">
        <me-button>bottom-start</me-button>
      </me-tooltip>
      <me-tooltip content="Bottom Center prompts info" placement="bottom">
        <me-button>bottom</me-button>
      </me-tooltip>
      <me-tooltip content="Bottom Right prompts info" placement="bottom-end">
        <me-button>bottom-end</me-button>
      </me-tooltip>
    </div>
  </div>
</template>

<style>
.tooltip-base-box {
  width: 600px;
}
.tooltip-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tooltip-base-box .center {
  justify-content: center;
}
</style>
